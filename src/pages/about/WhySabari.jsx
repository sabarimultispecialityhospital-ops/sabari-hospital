import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Footer } from '../../sections/Footer';

export function WhySabari() {
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
      <section className="w-full pt-32 pb-16 lg:pt-40 lg:pb-20 px-6 lg:px-16 border-b border-neutral-200">
        <div className="max-w-[1600px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">
          <div className="lg:col-span-7 flex flex-col">
            <span className="text-[12px] font-mono font-semibold tracking-[0.25em] uppercase text-neutral-400 mb-6 block">
              03 &mdash; ABOUT SABARI
            </span>
            <h1 className="text-[52px] sm:text-[72px] lg:text-[96px] font-medium leading-[0.95] tracking-[-0.03em] text-black mb-8">
              CARE WITH<br />
              PURPOSE.
            </h1>
            <p className="text-[18px] sm:text-[21px] text-neutral-600 leading-relaxed max-w-xl font-light">
              Principles that shape every consultation, procedure, and recovery at Sabari Hospital.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-end">
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100 border border-neutral-200">
              <img 
                src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=1200" 
                alt="Modern clinical care environment at Sabari Hospital" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-[11px] font-mono tracking-widest text-neutral-400 uppercase mt-3">
              CLINICAL ENVIRONMENT &bull; HEALING CENTRED ARCHITECTURE
            </span>
          </div>
        </div>
      </section>

      {/* 2. Typographic Principles List (No Cards, Architectural Layout) */}
      <section className="w-full py-20 lg:py-32 px-6 lg:px-16 border-b border-neutral-200">
        <div className="max-w-[1600px] w-full mx-auto">
          
          <div className="flex flex-col mb-16 max-w-xl">
            <span className="text-[12px] font-mono font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-4 block">
              FOUNDATIONAL PILLARS
            </span>
            <h2 className="text-[36px] lg:text-[48px] font-medium tracking-[-0.02em] text-black">
              WHY PEOPLE CHOOSE SABARI.
            </h2>
          </div>

          <div className="flex flex-col divide-y divide-neutral-200 border-t border-b border-neutral-200">
            {principles.map((item) => (
              <div key={item.num} className="py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start group">
                <div className="lg:col-span-2">
                  <span className="text-[14px] font-mono font-semibold tracking-widest text-neutral-400 group-hover:text-black transition-colors">
                    {item.num}
                  </span>
                </div>
                <div className="lg:col-span-4">
                  <h3 className="text-[26px] sm:text-[32px] lg:text-[36px] font-medium tracking-[-0.01em] text-black leading-tight">
                    {item.title}
                  </h3>
                </div>
                <div className="lg:col-span-6">
                  <p className="text-[16px] lg:text-[18px] text-neutral-600 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Visual Storytelling Section */}
      <section className="w-full py-24 lg:py-36 px-6 lg:px-16 bg-neutral-50/60 border-b border-neutral-200">
        <div className="max-w-[1600px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1 flex flex-col">
            <span className="text-[12px] font-mono font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-6 block">
              THE PATIENT-CLINICIAN BOND
            </span>
            <h3 className="text-[32px] sm:text-[42px] lg:text-[48px] font-medium leading-[1.05] tracking-[-0.02em] text-black mb-6">
              WHERE CLINICAL EXCELLENCE MEETS EMPATHY.
            </h3>
            <p className="text-[16px] lg:text-[17px] text-neutral-700 leading-relaxed font-light mb-8">
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
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1200" 
              alt="Physician communicating clearly with patient family" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 4. Consultation CTA */}
      <section className="w-full py-20 px-6 lg:px-16 bg-white">
        <div className="max-w-[1600px] w-full mx-auto flex flex-col md:flex-row md:items-center justify-between gap-8 p-12 border border-neutral-200">
          <div className="flex flex-col">
            <span className="text-[11px] font-mono tracking-widest uppercase text-neutral-400 mb-2">
              APPOINTMENTS & CONSULTATIONS
            </span>
            <h3 className="text-[26px] lg:text-[32px] font-medium tracking-tight text-black">
              Consult with Our Clinical Specialists.
            </h3>
            <p className="text-[15px] text-neutral-600 font-light mt-1">
              Available for outpatient appointments, surgical evaluations, and family wellness consultations.
            </p>
          </div>
          <a
            href="tel:+18001234567"
            className="px-8 py-4 bg-black text-white text-[12px] font-semibold tracking-widest uppercase hover:bg-neutral-800 transition-colors self-start md:self-auto shrink-0"
          >
            Book Appointment &rarr;
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
