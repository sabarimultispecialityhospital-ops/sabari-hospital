import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doctorsData } from '../data/landingData';
import { ArrowLeft, Award, BookOpen, CalendarCheck, CheckCircle, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { Footer } from '../sections/Footer';
import { useAppointment } from '../context/AppointmentContext';

export function DoctorProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { openAppointmentModal } = useAppointment();

  const doctor = doctorsData.find(d =>
    d.id === id || 
    d.id === `dr-${id}` || 
    d.id.replace('dr-', '') === id.replace('dr-', '')
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!doctor) {
    return (
      <div data-nav-theme="light" className="w-full min-h-screen bg-white flex flex-col items-center justify-center pt-24 px-6">
        <h1 className="text-4xl font-medium mb-4 text-black">Doctor Not Found</h1>
        <p className="text-neutral-500 mb-8">The requested specialist profile could not be located.</p>
        <button 
          onClick={() => navigate('/doctors')}
          className="px-8 py-3.5 bg-black text-white rounded-full text-sm font-medium hover:bg-neutral-800 transition-colors"
        >
          Return to Doctors Directory
        </button>
      </div>
    );
  }

  return (
    <div data-nav-theme="light" className="w-full min-h-screen bg-white pt-28 selection:bg-neutral-200">
      <div className="max-w-[1400px] w-full mx-auto px-6 lg:px-16 pb-20">
        
        {/* Back Button */}
        <button 
          onClick={() => navigate('/doctors')}
          className="flex items-center gap-2 text-neutral-500 hover:text-black transition-colors mb-12 group cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-[12px] font-semibold tracking-widest uppercase">The Human Index &mdash; All Doctors</span>
        </button>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column: Image & Details */}
          <div className="w-full lg:w-5/12 flex flex-col gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="group relative w-full aspect-[4/5] bg-neutral-100 rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.12)] hover:shadow-[0_28px_65px_rgba(0,0,0,0.18)] transition-all duration-500 select-none"
            >
              <img 
                src={doctor.image} 
                alt={doctor.name} 
                className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />

              {/* Hover Name & Title Reveal Overlay */}
              <div className="absolute inset-x-0 bottom-0 pt-28 pb-7 px-7 sm:px-8 bg-gradient-to-t from-black/85 via-black/45 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out flex flex-col justify-end pointer-events-none">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.22em] uppercase text-white/70 block mb-1">
                    {doctor.role || "SPECIALIST"}
                  </span>
                  <h3 className="text-[20px] sm:text-[24px] font-medium text-white tracking-tight leading-tight">
                    {doctor.name}
                  </h3>
                  <p className="text-[12px] sm:text-[13px] text-white/80 font-light mt-0.5 tracking-wide">
                    {doctor.speciality}
                  </p>
                </div>
              </div>
            </motion.div>
            
            <div className="p-6 bg-neutral-50 border border-neutral-200 flex flex-col gap-3">
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-neutral-400">
                CLINICAL PRACTICE
              </span>
              <p className="text-[14px] text-neutral-700 leading-relaxed font-medium">
                {doctor.experience}
              </p>
              {doctor.currentRole && (
                <p className="text-[13px] text-neutral-500 pt-2 border-t border-neutral-200 leading-relaxed">
                  {doctor.currentRole}
                </p>
              )}
            </div>

            <button
              type="button"
              onClick={() => openAppointmentModal({ doctorId: doctor.id })}
              className="flex items-center justify-center gap-2 w-full px-6 py-4 border border-black bg-black text-white text-[13px] font-semibold tracking-[0.08em] uppercase hover:bg-neutral-800 transition-colors"
            >
              <CalendarCheck className="w-4 h-4" />
              Book Appointment
            </button>
          </div>

          {/* Right Column: Comprehensive Info */}
          <div className="w-full lg:w-7/12 flex flex-col">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="flex flex-col mb-10 pb-8 border-b border-neutral-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[12px] font-semibold tracking-[0.2em] uppercase text-neutral-400">
                  {doctor.num} &mdash; {doctor.role || doctor.speciality}
                </span>
              </div>
              <h1 className="text-[40px] lg:text-[56px] font-medium leading-[1.05] tracking-[-0.02em] text-black mb-3">
                {doctor.name}
              </h1>
              <p className="text-[18px] text-neutral-600 font-medium tracking-wide">
                {doctor.speciality} {doctor.subSpeciality ? `• ${doctor.subSpeciality}` : ''}
              </p>
            </motion.div>

            {/* About / Summary */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-12"
            >
              <h2 className="text-[13px] font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-4">
                PROFESSIONAL SUMMARY
              </h2>
              <p className="text-neutral-700 leading-relaxed text-[17px]">
                {doctor.bio}
              </p>
            </motion.div>

            {/* Qualifications & Accreditations */}
            {doctor.qualifications && (
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex flex-col gap-4 mb-12"
              >
                <h2 className="text-[13px] font-semibold tracking-[0.2em] uppercase text-neutral-400 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-black" />
                  QUALIFICATIONS & CREDENTIALS
                </h2>
                <ul className="flex flex-col gap-3">
                  {doctor.qualifications.map((qual, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-neutral-400 text-xs mt-1.5">•</span>
                      <span className="text-neutral-800 text-[15px]">{qual}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Clinical Expertise / Focus Areas */}
            {(doctor.expertise || doctor.areasOfInterest || doctor.obstetricServices || doctor.specialisation || doctor.certifications) && (
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.5 }}
                className="flex flex-col gap-4 mb-12"
              >
                <h2 className="text-[13px] font-semibold tracking-[0.2em] uppercase text-neutral-400 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-black" />
                  AREAS OF SPECIALISATION & CLINICAL EXPERTISE
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {(doctor.expertise || doctor.areasOfInterest || doctor.obstetricServices || doctor.specialisation || doctor.certifications || []).map((item, index) => (
                    <div key={index} className="p-3.5 bg-neutral-50 border border-neutral-100 text-[14px] text-neutral-700">
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Recognition & Awards */}
            {doctor.recognition && (
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex flex-col gap-4 mb-12"
              >
                <h2 className="text-[13px] font-semibold tracking-[0.2em] uppercase text-neutral-400 flex items-center gap-2">
                  <Award className="w-4 h-4 text-black" />
                  RECOGNITION & HONOURS
                </h2>
                <ul className="flex flex-col gap-3">
                  {doctor.recognition.map((rec, index) => (
                    <li key={index} className="p-4 border-l-2 border-black bg-neutral-50 text-neutral-800 text-[15px]">
                      {rec}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Academic, Research & Publications */}
            {(doctor.books || doctor.academicContributions || doctor.research) && (
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.5 }}
                className="flex flex-col gap-4 mb-8"
              >
                <h2 className="text-[13px] font-semibold tracking-[0.2em] uppercase text-neutral-400 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-black" />
                  ACADEMIC & RESEARCH CONTRIBUTIONS
                </h2>
                {doctor.research && (
                  <p className="text-[15px] text-neutral-700">{doctor.research}</p>
                )}
                {doctor.books && (
                  <div className="flex flex-col gap-2 mt-2">
                    <span className="text-xs font-semibold uppercase text-neutral-400">Authored Works:</span>
                    {doctor.books.map((book, bIdx) => (
                      <div key={bIdx} className="text-sm text-neutral-800 italic">
                        &ldquo;{book}&rdquo;
                      </div>
                    ))}
                  </div>
                )}
                {doctor.academicContributions && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {doctor.academicContributions.map((contrib, cIdx) => (
                      <span key={cIdx} className="px-3 py-1 bg-neutral-100 text-neutral-700 text-xs">
                        {contrib}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            )}

          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}
