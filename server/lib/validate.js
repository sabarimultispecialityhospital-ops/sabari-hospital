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

// Strips control characters and clamps length; the values only ever end up
// inside a plain-text WhatsApp message, but we sanitise defensively anyway.
function sanitizeText(value, maxLength = 500) {
  if (typeof value !== 'string') return '';
  return value
    .replace(/[\u0000-\u001F\u007F]/g, '') // control chars
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

  const fullName = sanitizeText(raw.fullName, 120);
  if (!isNonEmptyString(fullName)) errors.fullName = 'Full name is required';

  const gender = sanitizeText(raw.gender, 40);
  if (!GENDER_OPTIONS.includes(gender)) errors.gender = 'A valid gender selection is required';

  const ageNum = Number(raw.age);
  if (!isNonEmptyString(String(raw.age ?? '')) || !Number.isFinite(ageNum) || ageNum <= 0 || ageNum > 120) {
    errors.age = 'A valid age is required';
  }

  const phone = sanitizeText(raw.phone, 30);
  if (!PHONE_RE.test(phone)) errors.phone = 'A valid phone number is required';

  const email = sanitizeText(raw.email, 160);
  if (email && !EMAIL_RE.test(email)) errors.email = 'Please provide a valid email address';

  const department = sanitizeText(raw.department, 60);
  if (!DEPARTMENT_OPTIONS.includes(department)) errors.department = 'A valid department is required';

  const date = sanitizeText(raw.date, 10);
  if (!DATE_RE.test(date)) {
    errors.date = 'A valid preferred date is required';
  } else if (date < todayISO()) {
    errors.date = 'Date cannot be in the past';
  }

  const time = sanitizeText(raw.time, 5);
  if (!TIME_RE.test(time)) errors.time = 'A valid preferred time is required';

  const reason = sanitizeText(raw.reason, 800);

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
      date,
      time,
      reason,
    },
  };
}
