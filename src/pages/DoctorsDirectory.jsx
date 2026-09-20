import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { doctorsData } from '../data/landingData';
import { Footer } from '../sections/Footer';

export function DoctorsDirectory() {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const rowRefs = useRef([]);
  const isHoveringRef = useRef(false);
  const hoverTimeoutRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Sync active doctor when scrolling through rows, but NEVER override when user is hovering
  useEffect(() => {
    const handleScroll = () => {
      if (isHoveringRef.current) return;

      const targetY = window.innerHeight * 0.4;
      let closestIdx = 0;
      let minDistance = Infinity;

      rowRefs.current.forEach((el, index) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const dist = Math.abs(rect.top - targetY);
        if (dist < minDistance) {
          minDistance = dist;
          closestIdx = index;
        }
      });

      setActiveIndex(closestIdx);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleRowHover = (index) => {
    isHoveringRef.current = true;
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setActiveIndex(index);
  };

  const handleRowLeave = () => {
    // Keep hover lock for 600ms to allow smooth mouse movement towards preview
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => {
      isHoveringRef.current = false;
    }, 600);
  };

  const activeDoctor = doctorsData[activeIndex] || doctorsData[0];

  const handleDoctorClick = (doctorId, e) => {
    if (e) e.stopPropagation();
    navigate(`/doctor/${doctorId}`);
  };

  return (
    <div data-nav-theme="light" className="w-full min-h-screen bg-white text-black selection:bg-neutral-200 selection:text-black">
      
      {/* 1. Page Opening - Controlled and compact so preview is visible immediately */}
      <section className="w-full pt-28 pb-8 lg:pt-32 lg:pb-10 px-6 lg:px-16 border-b border-neutral-200">
        <div className="max-w-[1600px] w-full mx-auto">
          
          <div className="flex flex-col w-full">
            <h1 className="text-[34px] sm:text-[54px] md:text-[68px] lg:text-[84px] font-medium leading-[1] tracking-[-0.03em] text-black mb-6 whitespace-nowrap overflow-hidden text-ellipsis">
              THE MINDS BEHIND SABARI.
            </h1>

            <div className="pt-4 border-t border-neutral-200">
              <p className="text-[16px] sm:text-[18px] lg:text-[19px] text-neutral-600 leading-relaxed font-light md:whitespace-nowrap">
                Experienced clinicians, specialised expertise and a shared commitment to patient care.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 2. The Human Index Main Layout */}
      <section className="w-full py-8 lg:py-12 px-6 lg:px-16">
        <div className="max-w-[1600px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Typographic Index */}
          <div className="lg:col-span-7 flex flex-col">
            <div 
              onMouseLeave={handleRowLeave}
              className="flex flex-col divide-y divide-neutral-200 border-t border-b border-neutral-200"
            >
              {doctorsData.map((doctor, index) => {
                const isActive = activeIndex === index;

                return (
                  <div
                    key={doctor.id}
                    ref={(el) => (rowRefs.current[index] = el)}
                    onMouseEnter={() => handleRowHover(index)}
                    onClick={(e) => handleDoctorClick(doctor.id, e)}
                    className="group relative py-7 lg:py-9 cursor-pointer transition-all duration-200"
                  >
                    <div className="flex flex-col gap-2.5">
                      
                      {/* Top Meta Line: Number + Role */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <span 
                            className={`text-[13px] font-mono tracking-widest transition-colors duration-200 ${
                              isActive ? 'text-black font-medium' : 'text-neutral-400 group-hover:text-neutral-600'
                            }`}
                          >
                            {doctor.num}
                          </span>
                          {doctor.role && (
                            <span 
                              className={`text-[12px] uppercase tracking-[0.18em] transition-colors duration-200 ${
                                isActive ? 'text-black font-semibold' : 'text-neutral-400 group-hover:text-neutral-600'
                              }`}
                            >
                              {doctor.role}
                            </span>
                          )}
                        </div>

                        {/* Explicit Action Label */}
                        <div 
                          className={`flex items-center gap-2 text-[12px] font-semibold tracking-wider uppercase transition-all duration-200 ${
                            isActive ? 'opacity-100 translate-x-0 text-black' : 'opacity-0 -translate-x-2 text-neutral-400 group-hover:opacity-100 group-hover:translate-x-0'
                          }`}
                        >
                          <span className="hidden sm:inline">VIEW PROFILE</span>
                          <span>&rarr;</span>
                        </div>
                      </div>

                      {/* Large Typographic Name */}
                      <div className="overflow-hidden">
                        <h2 
                          className={`text-[30px] sm:text-[40px] lg:text-[48px] font-medium tracking-[-0.02em] leading-[1.05] transition-all duration-200 ${
                            isActive 
                              ? 'text-black translate-x-2 lg:translate-x-3' 
                              : 'text-neutral-300 group-hover:text-black group-hover:translate-x-1'
                          }`}
                        >
                          {doctor.displayName || doctor.name}
                        </h2>
                      </div>

                      {/* Speciality and Credentials */}
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 pl-0 lg:pl-1">
                        <span 
                          className={`text-[15px] sm:text-[16px] transition-colors duration-200 ${
                            isActive ? 'text-neutral-800 font-medium' : 'text-neutral-500 group-hover:text-neutral-800'
                          }`}
                        >
                          {doctor.speciality}
                        </span>
                        {doctor.subSpeciality && (
                          <>
                            <span className="text-neutral-300 font-light">&bull;</span>
                            <span className="text-[13px] sm:text-[14px] text-neutral-500">
                              {doctor.subSpeciality}
                            </span>
                          </>
                        )}
                      </div>

                      {/* Mobile Portrait & Info (shown only on small devices) */}
                      <div className="lg:hidden mt-3 pt-3 border-t border-neutral-100 flex flex-col gap-3">
                        <div className="flex items-center gap-4">
                          <img 
                            src={doctor.image} 
                            alt={doctor.name} 
                            className="w-16 h-20 object-cover bg-neutral-100 border border-neutral-200 shrink-0"
                          />
                          <div className="flex flex-col">
                            <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400">
                              {doctor.role || doctor.speciality}
                            </span>
                            <span className="text-[14px] font-medium text-black">{doctor.name}</span>
                            <span className="text-[12px] text-neutral-600 mt-0.5">{doctor.speciality}</span>
                            <span className="text-[11px] text-neutral-400 font-light mt-0.5">{doctor.experience}</span>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={(e) => handleDoctorClick(doctor.id, e)}
                          className="w-full py-2.5 border border-black text-[11px] font-semibold tracking-wider uppercase text-black hover:bg-black hover:text-white transition-colors text-center"
                        >
                          View Profile &rarr;
                        </button>
                      </div>

                    </div>

                    {/* Subtle underline reveal */}
                    <div 
                      className={`absolute bottom-0 left-0 h-[1.5px] bg-black transition-all duration-300 ease-out origin-left ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`} 
                    />
                  </div>
                );
              })}
            </div>

            {/* Bottom Consultation Note */}
            <div className="mt-12 p-6 bg-neutral-50 border border-neutral-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex flex-col">
                <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-1">
                  DIRECT CONSULTATIONS
                </span>
                <p className="text-[14px] text-neutral-700 max-w-md">
                  Our specialists consult across inpatient, outpatient, and surgical departments daily.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Link
                  to="/contact"
                  className="px-5 py-2.5 border border-black text-[11px] font-semibold tracking-widest uppercase text-black hover:bg-black hover:text-white transition-colors text-center"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Living Portrait & Complete Information */}
          <div className="hidden lg:block lg:col-span-5 sticky top-24 self-start">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDoctor.id}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.22, ease: "easeInOut" }}
                className="flex flex-col w-full max-w-[460px]"
              >
                {/* Portrait Frame - Increased editorial size */}
                <div className="relative w-full aspect-[4/5] max-h-[460px] overflow-hidden bg-neutral-100 border border-neutral-200">
                  <img
                    src={activeDoctor.image}
                    alt={activeDoctor.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Complete Doctor Information Underneath */}
                <div className="mt-6 flex flex-col gap-2">
                  <div className="flex flex-col">
                    <span className="text-[12px] font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-1">
                      {activeDoctor.role || "SPECIALIST"}
                    </span>
                    <h3 className="text-[26px] lg:text-[30px] font-medium text-black leading-tight">
                      {activeDoctor.name}
                    </h3>
                    <p className="text-[16px] text-neutral-800 font-medium mt-1.5">
                      {activeDoctor.speciality}
                    </p>
                    {activeDoctor.subSpeciality && (
                      <p className="text-[14px] text-neutral-500 mt-1 leading-relaxed">
                        {activeDoctor.subSpeciality}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
