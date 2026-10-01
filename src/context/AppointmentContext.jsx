import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { getDoctorById } from '../data/appointmentData';

const AppointmentContext = createContext(null);

const initialPreset = { department: '', doctor: '', doctorId: '' };

export function AppointmentProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [preset, setPreset] = useState(initialPreset);

  const openAppointmentModal = useCallback((opts = {}) => {
    const { doctor, doctorId, department } = opts;
    const resolvedDoctor = doctorId ? getDoctorById(doctorId) : null;
    const resolvedDoctorName = resolvedDoctor?.name || doctor?.name || (typeof doctor === 'string' ? doctor : '') || '';
    const resolvedDepartment = department || resolvedDoctor?.department || doctor?.department || '';

    setPreset({
      department: resolvedDepartment,
      doctor: resolvedDoctorName,
      doctorId: doctorId || resolvedDoctor?.id || doctor?.id || '',
    });
    setIsOpen(true);
  }, []);

  const closeAppointmentModal = useCallback(() => {
    setIsOpen(false);
    // Clear preset after the close animation finishes so it doesn't flash empty mid-close
    window.setTimeout(() => setPreset(initialPreset), 300);
  }, []);

  const value = useMemo(
    () => ({ isOpen, preset, openAppointmentModal, closeAppointmentModal }),
    [isOpen, preset, openAppointmentModal, closeAppointmentModal]
  );

  return (
    <AppointmentContext.Provider value={value}>
      {children}
    </AppointmentContext.Provider>
  );
}

export function useAppointment() {
  const ctx = useContext(AppointmentContext);
  if (!ctx) {
    throw new Error('useAppointment must be used within an AppointmentProvider');
  }
  return ctx;
}
