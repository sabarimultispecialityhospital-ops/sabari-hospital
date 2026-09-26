import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Footer } from '../../sections/Footer';
import { useAppointment } from '../../context/AppointmentContext';

export function WhySabari() {
  const { openAppointmentModal } = useAppointment();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const principles = [
    {
      num: "01",
      title: "PERSONALISED CARE",
      description: "Every diagnosis begins with thorough listening. Treatment protocols are personalized to the patient's individual physiology, health history, and family context rather than generic hospital templates."
    },
    {
      num: "02",
      title: "EXPERIENCED CLINICAL TEAM",
      description: "Care is delivered by senior clinicians with decades of clinical experience in anaesthesia, maternal healthcare, diabetology, pulmonology, and rehabilitation, ensuring deep clinical judgement."
    },
    {
      num: "03",
      title: "MODERN TECHNOLOGY",
      description: "State-of-the-art surgical operating suites, advanced perioperative anaesthetic monitoring, accurate laboratory diagnostics, and sterile recovery rooms designed for patient safety."
    },
    {
      num: "04",
      title: "ACCESSIBLE HEALTHCARE",
      description: "Compassionate, accessible medical care rooted in ethical healthcare delivery, honest communication, and community health awareness programmes throughout the region."
    },
    {
      num: "05",
      title: "COMFORTABLE HEALING ENVIRONMENT",
      description: "Thoughtfully maintained patient wards, considerate nursing staff, and a peaceful physical environment engineered to minimize stress and promote physical and emotional recovery."
    }
  ];

  return (
    <div data-nav-theme="light" className="w-full min-h-screen bg-white text-black selection:bg-neutral-200">
      
      {/* 1. Hero */}
      <section className="w-full pt-28 pb-12 sm:pt-32 sm:pb-16 lg:pt-40 lg:pb-20 px-6 lg:px-16 border-b border-neutral-200">
        <div className="max-w-[1600px] w-full mx-auto">
          <div className="flex flex-col max-w-5xl">
            <span className="text-[12px] font-mono font-semibold tracking-[0.25em] uppercase text-neutral-400 mb-4 sm:mb-6 block">
              WHY SABARI
            </span>
            <h1 className="text-[34px] sm:text-[54px] md:text-[68px] lg:text-[80px] xl:text-[92px] font-medium leading-[1.05] tracking-[-0.03em] break-words text-black mb-6 sm:mb-8">
              CARE WITH PURPOSE.
            </h1>
            <p className="text-[16px] sm:text-[18px] lg:text-[21px] text-neutral-600 leading-relaxed max-w-2xl font-light">
              Principles that shape every consultation, procedure, and recovery at Sabari Hospital.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Typographic Principles List (No Cards, Architectural Layout) */}
      <section className="w-full py-14 sm:py-20 lg:py-32 px-6 lg:px-16 border-b border-neutral-200">
        <div className="max-w-[1600px] w-full mx-auto">
          
          <div className="flex flex-col mb-10 sm:mb-16 max-w-xl">
            <span className="text-[12px] font-mono font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-4 block">
              FOUNDATIONAL PILLARS
            </span>
            <h2 className="text-[28px] sm:text-[36px] lg:text-[48px] font-medium tracking-[-0.02em] text-black">
              WHY PEOPLE CHOOSE SABARI.
            </h2>
          </div>

          <div className="flex flex-col divide-y divide-neutral-200 border-t border-b border-neutral-200">
            {principles.map((item) => (
              <div key={item.num} className="py-8 sm:py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 items-start group">
                <div className="lg:col-span-2">
                  <span className="text-[13px] sm:text-[14px] font-mono font-semibold tracking-widest text-neutral-400 group-hover:text-black transition-colors">
                    {item.num}
                  </span>
                </div>
                <div className="lg:col-span-4">
                  <h3 className="text-[22px] sm:text-[28px] lg:text-[36px] font-medium tracking-[-0.01em] text-black leading-tight">
                    {item.title}
                  </h3>
                </div>
                <div className="lg:col-span-6">
                  <p className="text-[15px] sm:text-[16px] lg:text-[18px] text-neutral-600 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Visual Storytelling Section */}
      <section className="w-full py-16 sm:py-24 lg:py-36 px-6 lg:px-16 bg-neutral-50/60 border-b border-neutral-200">
        <div className="max-w-[1600px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1 flex flex-col">
            <span className="text-[12px] font-mono font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-4 sm:mb-6 block">
              THE PATIENT-CLINICIAN BOND
            </span>
            <h3 className="text-[26px] sm:text-[34px] lg:text-[48px] font-medium leading-[1.05] tracking-[-0.02em] text-black mb-4 sm:mb-6">
              WHERE CLINICAL EXCELLENCE MEETS EMPATHY.
            </h3>
            <p className="text-[15px] sm:text-[16px] lg:text-[17px] text-neutral-700 leading-relaxed font-light mb-6 sm:mb-8">
              Modern medicine is only as effective as the human connection behind it. At Sabari Hospital, our clinicians prioritize active listening, unhurried consultations, and patient autonomy, ensuring that you and your loved ones remain fully informed partners in your healthcare journey.
            </p>
            <div className="flex items-center gap-6">
              <Link 
                to="/about/patient-experience"
                className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-widest uppercase text-black hover:opacity-70 transition-opacity"
              >
                <span>Discover The Patient Journey</span>
                <span>&rarr;</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 overflow-hidden aspect-[4/3] bg-neutral-100 border border-neutral-200">
            <img 
              src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=1200" 
              alt="Physician communicating clearly with patient family" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 4. Consultation CTA */}
      <section className="w-full py-14 sm:py-20 px-6 lg:px-16 bg-white">
        <div className="max-w-[1600px] w-full mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6 sm:gap-8 p-6 sm:p-10 lg:p-12 border border-neutral-200">
          <div className="flex flex-col">
            <span className="text-[11px] font-mono tracking-widest uppercase text-neutral-400 mb-2">
              APPOINTMENTS & CONSULTATIONS
            </span>
            <h3 className="text-[24px] sm:text-[28px] lg:text-[32px] font-medium tracking-tight text-black">
              Consult with Our Clinical Specialists.
            </h3>
            <p className="text-[14px] sm:text-[15px] text-neutral-600 font-light mt-1">
              Available for outpatient appointments, surgical evaluations, and family wellness consultations.
            </p>
          </div>
          <button
            type="button"
            onClick={() => openAppointmentModal()}
            className="px-8 py-4 bg-black text-white text-[12px] font-semibold tracking-widest uppercase hover:bg-neutral-800 transition-colors w-full sm:w-auto text-center shrink-0"
          >
            Book Appointment &rarr;
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
