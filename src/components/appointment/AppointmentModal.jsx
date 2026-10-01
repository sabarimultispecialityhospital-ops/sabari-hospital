import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useAppointment } from '../../context/AppointmentContext';
import { departmentOptions } from '../../data/appointmentData';

const genderOptions = ['Male', 'Female', 'Other', 'Prefer not to say'];

const emptyValues = {
  fullName: '',
  gender: '',
  age: '',
  phone: '',
  email: '',
  department: '',
  doctor: '',
  date: '',
  time: '',
  reason: '',
};

function todayISO() {
  const d = new Date();
  const offset = d.getTimezoneOffset();
  const local = new Date(d.getTime() - offset * 60 * 1000);
  return local.toISOString().slice(0, 10);
}

export function AppointmentModal() {
  const { isOpen, preset, closeAppointmentModal } = useAppointment();
  const [values, setValues] = useState(emptyValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Apply preset department and doctor whenever the modal is opened.
  useEffect(() => {
    if (!isOpen) return;
    setValues({
      ...emptyValues,
      department: preset.department || '',
      doctor: preset.doctor || '',
    });
    setErrors({});
    setTouched({});
    setSubmitted(false);
    setSubmitError('');
  }, [isOpen, preset]);

  // Lock background scroll while open.
  useEffect(() => {
    if (!isOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  // Close on ESC.
  useEffect(() => {
    if (!isOpen) return;
    function handleKeyDown(e) {
      if (e.key === 'Escape') closeAppointmentModal();
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeAppointmentModal]);

  function validateField(name, vals) {
    switch (name) {
      case 'fullName':
        if (!vals.fullName.trim()) return 'Please enter your full name';
        return '';
      case 'gender':
        if (!vals.gender) return 'Please select a gender';
        return '';
      case 'age': {
        const n = Number(vals.age);
        if (!vals.age.trim()) return 'Please enter your age';
        if (!Number.isFinite(n) || n <= 0 || n > 120) return 'Please enter a valid age';
        return '';
      }
      case 'phone': {
        const rawPhone = vals.phone.trim().replace(/\D/g, '');
        if (!rawPhone) return 'Please enter your 10-digit mobile number';
        if (rawPhone.length !== 10) return 'Mobile number must be exactly 10 digits';
        if (!/^[6-9]\d{9}$/.test(rawPhone)) {
          return 'Mobile number must start with 6, 7, 8, or 9';
        }
        return '';
      }
      case 'email': {
        const rawEmail = vals.email.trim();
        if (rawEmail && !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(rawEmail)) {
          return 'Please enter a valid email address (e.g. name@example.com)';
        }
        return '';
      }
      case 'department':
        if (!vals.department) return 'Please select a department';
        return '';
      case 'date': {
        if (!vals.date) return 'Please select a preferred date';
        if (vals.date < todayISO()) return 'Date cannot be in the past';
        return '';
      }
      case 'time':
        if (!vals.time) return 'Please select a preferred time';
        return '';
      default:
        return '';
    }
  }

  const requiredFields = ['fullName', 'gender', 'age', 'phone', 'department', 'date', 'time'];

  function handleChange(e) {
    const { name, value } = e.target;
    let nextValue = value;
    if (name === 'phone') {
      let digits = value.replace(/\D/g, '');
      if (digits.length > 10 && digits.startsWith('91')) {
        digits = digits.slice(2);
      } else if (digits.length > 10 && digits.startsWith('0')) {
        digits = digits.slice(1);
      }
      nextValue = digits.slice(0, 10);
    }
    setValues((prev) => ({ ...prev, [name]: nextValue }));
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, { ...values, [name]: nextValue }) }));
    }
  }

  function handleBlur(e) {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, values) }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const newErrors = {};
    const fieldsToValidate = [...requiredFields, 'email'];
    fieldsToValidate.forEach((name) => {
      const err = validateField(name, values);
      if (err) newErrors[name] = err;
    });
    setErrors(newErrors);
    setTouched(
      fieldsToValidate.reduce((acc, name) => ({ ...acc, [name]: true }), {})
    );
    if (Object.keys(newErrors).length > 0) return;

    setSubmitError('');
    setIsSubmitting(true);

    const cleanDigits = values.phone.trim().replace(/\D/g, '').slice(-10);
    const payload = {
      fullName: values.fullName.trim(),
      gender: values.gender,
      age: values.age,
      phone: `+91 ${cleanDigits}`,
      email: values.email.trim(),
      department: values.department,
      doctor: values.doctor || '',
      date: values.date,
      time: values.time,
      reason: values.reason.trim(),
    };

    try {
      const response = await fetch('/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const result = await response.json().catch(() => null);

      if (!response.ok || !result?.success) {
        throw new Error(result?.message || 'Unable to send your appointment request right now.');
      }

      // The form data (`values`) is intentionally left untouched here — the
      // success screen reads the patient's name from it, and if the user
      // reopens the modal it is reset by the preset-driven effect above.
      setSubmittedName(values.fullName.trim());
      setSubmitted(true);
    } catch (err) {
      setSubmitError(
        err.message || 'Unable to send your appointment request right now. Please try again or contact Sabari Hospitals directly.'
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleBackdropClick() {
    closeAppointmentModal();
  }

  const inputClasses =
    'w-full border border-neutral-300 bg-white px-4 py-3 text-[14px] text-black placeholder:text-neutral-400 focus:outline-none focus:border-black transition-colors rounded-sm';
  const labelClasses = 'block text-[11px] font-semibold tracking-[0.14em] uppercase text-neutral-500 mb-2';
  const errorClasses = 'mt-1.5 text-[12px] text-red-600';

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[2000] flex items-center justify-center px-4 py-6 sm:px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60"
            onClick={handleBackdropClick}
            aria-hidden="true"
          />

          {/* Modal */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="appointment-modal-title"
            className="relative w-full max-w-[960px] max-h-[90vh] bg-white border border-neutral-200 shadow-[0_30px_80px_rgba(0,0,0,0.25)] flex flex-col overflow-hidden"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeAppointmentModal}
              aria-label="Close appointment modal"
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 w-9 h-9 flex items-center justify-center border border-neutral-200 text-neutral-500 hover:text-black hover:border-black transition-colors rounded-sm"
            >
              <X size={18} />
            </button>

            {submitted ? (
              <div className="px-6 py-16 sm:px-16 sm:py-20 flex flex-col items-center text-center overflow-y-auto">
                <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-4">
                  Request Submitted
                </span>
                <h2 className="text-[26px] sm:text-[34px] font-medium tracking-tight text-black mb-4">
                  Appointment Request Submitted
                </h2>
                <p className="text-neutral-600 text-[15px] leading-relaxed max-w-[460px] mb-10">
                  Thank you, {submittedName.split(' ')[0] || 'there'}. Your appointment request has been submitted to
                  Sabari Hospitals. Our team will contact you shortly to confirm your appointment.
                </p>
                <button
                  onClick={closeAppointmentModal}
                  className="px-8 py-3.5 border border-black bg-black text-white text-[13px] font-semibold tracking-[0.08em] uppercase hover:bg-neutral-800 transition-colors"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                {/* Header */}
                <div className="px-6 pt-8 pb-6 sm:px-12 sm:pt-10 sm:pb-6 border-b border-neutral-200 shrink-0">
                  <h2
                    id="appointment-modal-title"
                    className="text-[24px] sm:text-[32px] font-medium tracking-tight text-black mb-2 pr-10"
                  >
                    Book an Appointment
                  </h2>
                  <p className="text-neutral-500 text-[14px] sm:text-[15px]">
                    Schedule a consultation with our specialists.
                  </p>
                </div>

                {/* Form */}
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="px-6 py-8 sm:px-12 sm:py-10 overflow-y-auto grow"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                    {/* Full Name */}
                    <div>
                      <label className={labelClasses} htmlFor="fullName">Full Name</label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        placeholder="Enter your full name"
                        className={inputClasses}
                        value={values.fullName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.fullName && errors.fullName && <p className={errorClasses}>{errors.fullName}</p>}
                    </div>

                    {/* Gender */}
                    <div>
                      <label className={labelClasses} htmlFor="gender">Gender</label>
                      <select
                        id="gender"
                        name="gender"
                        className={inputClasses}
                        value={values.gender}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        <option value="">Select gender</option>
                        {genderOptions.map((g) => (
                          <option key={g} value={g}>{g}</option>
                        ))}
                      </select>
                      {touched.gender && errors.gender && <p className={errorClasses}>{errors.gender}</p>}
                    </div>

                    {/* Age */}
                    <div>
                      <label className={labelClasses} htmlFor="age">Age</label>
                      <input
                        id="age"
                        name="age"
                        type="number"
                        min="0"
                        max="120"
                        placeholder="Enter your age"
                        className={inputClasses}
                        value={values.age}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.age && errors.age && <p className={errorClasses}>{errors.age}</p>}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className={labelClasses} htmlFor="phone">Mobile Number</label>
                      <div className="relative flex items-center">
                        <span className="absolute left-0 top-0 bottom-0 px-3 flex items-center bg-neutral-100 border-r border-neutral-300 text-neutral-700 text-[14px] font-semibold select-none rounded-l-sm pointer-events-none">
                          +91
                        </span>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          inputMode="numeric"
                          maxLength={10}
                          placeholder="Enter 10-digit number"
                          className={`${inputClasses} pl-[58px]`}
                          value={values.phone}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                      {touched.phone && errors.phone && <p className={errorClasses}>{errors.phone}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label className={labelClasses} htmlFor="email">
                        Email Address <span className="normal-case text-neutral-400 font-normal">(optional)</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email address"
                        className={inputClasses}
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.email && errors.email && <p className={errorClasses}>{errors.email}</p>}
                    </div>

                    {/* Department */}
                    <div>
                      <label className={labelClasses} htmlFor="department">Department / Speciality</label>
                      <select
                        id="department"
                        name="department"
                        className={inputClasses}
                        value={values.department}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        <option value="">Select department</option>
                        {departmentOptions.map((d) => (
                          <option key={d} value={d}>{d}</option>
                        ))}
                      </select>
                      {touched.department && errors.department && <p className={errorClasses}>{errors.department}</p>}
                    </div>

                    {/* Preferred Date */}
                    <div>
                      <label className={labelClasses} htmlFor="date">Preferred Date</label>
                      <input
                        id="date"
                        name="date"
                        type="date"
                        min={todayISO()}
                        className={inputClasses}
                        value={values.date}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.date && errors.date && <p className={errorClasses}>{errors.date}</p>}
                    </div>

                    {/* Preferred Time */}
                    <div>
                      <label className={labelClasses} htmlFor="time">Preferred Time</label>
                      <input
                        id="time"
                        name="time"
                        type="time"
                        className={inputClasses}
                        value={values.time}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.time && errors.time && <p className={errorClasses}>{errors.time}</p>}
                    </div>

                    {/* Reason for Visit */}
                    <div className="sm:col-span-2">
                      <label className={labelClasses} htmlFor="reason">Reason for Visit</label>
                      <textarea
                        id="reason"
                        name="reason"
                        rows={4}
                        placeholder="Tell us briefly about your visit"
                        className={`${inputClasses} resize-none`}
                        value={values.reason}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                  </div>

                  {submitError && (
                    <div
                      role="alert"
                      className="mt-8 px-5 py-4 border border-red-300 bg-red-50 text-[13px] text-red-700 leading-relaxed"
                    >
                      {submitError}
                    </div>
                  )}

                  <div className="flex justify-end mt-8">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 py-3.5 border border-black bg-black text-white text-[13px] font-semibold tracking-[0.08em] uppercase hover:bg-neutral-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Sending…' : <>Request Appointment &rarr;</>}
                    </button>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
