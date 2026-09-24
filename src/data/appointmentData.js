import { doctorsData } from './landingData';

// Canonical department list shown in the appointment modal.
export const departmentOptions = [
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

// Maps a doctor's free-text speciality to one of the canonical departments above.
function mapSpecialityToDepartment(speciality = '') {
  const s = speciality.toLowerCase();
  if (s.includes('obstetric') || s.includes('gynaecolog') || s.includes('gynecolog')) return 'Obstetrics & Gynaecology';
  if (s.includes('diabet')) return 'Diabetology';
  if (s.includes('pulmonolog')) return 'Pulmonology';
  if (s.includes('physiotherap')) return 'Physiotherapy';
  if (s.includes('cardiolog')) return 'Cardiology';
  if (s.includes('surg')) return 'Surgery';
  if (s.includes('anaesthes') || s.includes('anesthes') || s.includes('critical')) return 'Critical Care';
  if (s.includes('general')) return 'General Medicine';
  return 'Other';
}

// Doctors enriched with a canonical `department` field for the appointment modal.
export const appointmentDoctors = doctorsData.map((doc) => ({
  id: doc.id,
  name: doc.name,
  speciality: doc.speciality,
  department: mapSpecialityToDepartment(doc.speciality),
}));

// Used only to resolve a doctor's department when the appointment modal is
// opened from a doctor profile (the doctor selection field itself has been removed).
export function getDoctorById(id) {
  return appointmentDoctors.find((d) => d.id === id) || null;
}
