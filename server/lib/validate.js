// Server-side validation & sanitisation for appointment submissions.
// Mirrors the frontend validation in AppointmentModal.jsx, but must never be
// skipped — the frontend check is only a UX convenience.

export const GENDER_OPTIONS = ['Male', 'Female', 'Other', 'Prefer not to say'];

export const DEPARTMENT_OPTIONS = [
  'General Medicine',
  'Cardiology',
  'Pulmonology',
  'Diabetology',
  'Obstetrics & Gynaecology',
  'Physiotherapy',
  'Surgery',
  'Critical Care',
  'Other',
];

const PHONE_RE = /^[0-9+() -]{7,20}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
const TIME_RE = /^\d{2}:\d{2}$/;

function isNonEmptyString(v) {
  return typeof v === 'string' && v.trim().length > 0;
}

// Strips CRLF, control characters, and clamps length to prevent header injection
function sanitizeSingleLine(value, maxLength = 200) {
  if (typeof value !== 'string') return '';
  return value
    .replace(/[\r\n\u0000-\u001F\u007F]/g, '')
    .trim()
    .slice(0, maxLength);
}

// Strips non-printable control characters while preserving standard newlines
function sanitizeMultiLine(value, maxLength = 1000) {
  if (typeof value !== 'string') return '';
  return value
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '')
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n')
    .trim()
    .slice(0, maxLength);
}

function todayISO() {
  const d = new Date();
  return d.toISOString().slice(0, 10);
}

/**
 * Validates and sanitises an appointment payload.
 * Returns { valid: true, data } or { valid: false, errors }.
 */
export function validateAppointment(body) {
  const errors = {};
  const raw = body && typeof body === 'object' ? body : {};

  // 1. Full Name
  const fullName = sanitizeSingleLine(raw.fullName, 120);
  if (!isNonEmptyString(fullName)) errors.fullName = 'Full name is required';

  // 2. Gender
  const gender = sanitizeSingleLine(raw.gender, 40);
  if (!GENDER_OPTIONS.includes(gender)) errors.gender = 'A valid gender selection is required';

  // 3. Age
  const ageNum = Number(raw.age);
  if (!isNonEmptyString(String(raw.age ?? '')) || !Number.isFinite(ageNum) || ageNum <= 0 || ageNum > 120) {
    errors.age = 'A valid age is required';
  }

  // 4. Phone Number
  const phone = sanitizeSingleLine(raw.phone, 30);
  if (!PHONE_RE.test(phone)) errors.phone = 'A valid phone number is required';

  // 5. Email (Optional, but if provided must be valid)
  const email = sanitizeSingleLine(raw.email, 160);
  if (email && !EMAIL_RE.test(email)) errors.email = 'Please provide a valid email address';

  // 6. Department / Speciality
  const department = sanitizeSingleLine(raw.department, 80);
  if (!DEPARTMENT_OPTIONS.includes(department)) errors.department = 'A valid department is required';

  // 7. Preferred Doctor (omit if not specified or placeholder)
  const rawDoctor = sanitizeSingleLine(raw.doctor, 120);
  const isDoctorOmitted = !rawDoctor ||
    /^not\s*specified/i.test(rawDoctor) ||
    /any\s*specialist/i.test(rawDoctor) ||
    rawDoctor.toLowerCase() === 'none' ||
    rawDoctor.toLowerCase() === 'n/a';
  const doctor = isDoctorOmitted ? '' : rawDoctor;

  // 8. Preferred Date
  const date = sanitizeSingleLine(raw.date, 10);
  if (!DATE_RE.test(date)) {
    errors.date = 'A valid preferred date is required';
  } else if (date < todayISO()) {
    errors.date = 'Date cannot be in the past';
  }

  // 9. Preferred Time
  const time = sanitizeSingleLine(raw.time, 10);
  if (!TIME_RE.test(time)) errors.time = 'A valid preferred time is required';

  // 10. Reason for Visit
  const reason = sanitizeMultiLine(raw.reason, 1000);

  if (Object.keys(errors).length > 0) {
    return { valid: false, errors };
  }

  return {
    valid: true,
    data: {
      fullName,
      gender,
      age: ageNum,
      phone,
      email,
      department,
      doctor: doctor || '',
      date,
      time,
      reason,
    },
  };
}
