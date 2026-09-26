import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Footer } from '../../sections/Footer';
import { Mail, Briefcase, GraduationCap, Users } from 'lucide-react';
import { useAppointment } from '../../context/AppointmentContext';

export function Careers() {
  const { openAppointmentModal } = useAppointment();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const culturePillars = [
    {
      num: "01",
      title: "CLINICAL EXCELLENCE & LEARNING",
      description: "Work alongside senior consultants with decades of medical leadership. We encourage ongoing clinical education, evidence-based research participation, and medical skill development."
    },
    {
      num: "02",
      title: "PATIENT-CENTRED CULTURE",
      description: "Our staff are empowered to treat patients with respect, unhurried attention, and emotional empathy. We measure success through patient trust and clinical outcomes."
    },
    {
      num: "03",
      title: "INTERDISCIPLINARY RESPECT",
      description: "A collaborative hospital environment where doctors, nurses, physiotherapists, and support staff work as one integrated healthcare delivery team."
    }
  ];

  return (
    <div data-nav-theme="light" className="w-full min-h-screen bg-white text-black selection:bg-neutral-200">
      
      {/* 1. Hero */}
      <section className="w-full pt-28 pb-12 sm:pt-32 sm:pb-16 lg:pt-40 lg:pb-20 px-6 lg:px-16 border-b border-neutral-200">
        <div className="max-w-[1600px] w-full mx-auto">
          <div className="flex flex-col max-w-5xl">
            <span className="text-[12px] font-mono font-semibold tracking-[0.25em] uppercase text-neutral-400 mb-4 sm:mb-6 block">
              CAREERS
            </span>
            <h1 className="text-[34px] sm:text-[54px] md:text-[68px] lg:text-[80px] xl:text-[92px] font-medium leading-[1.05] tracking-[-0.03em] break-words text-black mb-6 sm:mb-8">
              BUILD A CAREER IN CARE.
            </h1>
            <p className="text-[16px] sm:text-[18px] lg:text-[21px] text-neutral-600 leading-relaxed max-w-2xl font-light">
              Healthcare is built by people who bring expertise, responsibility and compassion to their work.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Work With Us Statement */}
      <section className="w-full py-14 sm:py-20 lg:py-32 px-6 lg:px-16 border-b border-neutral-200">
        <div className="max-w-[1600px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20">
          <div className="lg:col-span-4 flex flex-col">
            <span className="text-[12px] font-mono font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-4 block">
              WORK WITH US
            </span>
            <h2 className="text-[26px] sm:text-[34px] lg:text-[44px] font-medium leading-[1.08] tracking-[-0.02em] text-black">
              A PURPOSE-DRIVEN HEALTHCARE ENVIRONMENT.
            </h2>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-5 sm:gap-6 text-[15px] sm:text-[17px] lg:text-[19px] text-neutral-700 leading-relaxed font-light">
            <p>
              At Sabari Hospital, our strength is our people. From senior medical specialists and consulting physicians to our nursing officers, physiotherapists, pharmacists, and administrative personnel, each individual contributes directly to the healing journey of our patients.
            </p>
            <p>
              We believe in maintaining an ethical, respectful workplace where dedication is recognized and clinical integrity is never compromised. If you are passionate about patient care and want to practice in a supportive, institutional setting, we welcome you to reach out.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Professional Culture Pillars */}
      <section className="w-full py-14 sm:py-20 lg:py-32 px-6 lg:px-16 bg-neutral-50/60 border-b border-neutral-200">
        <div className="max-w-[1600px] w-full mx-auto">
          
          <div className="flex flex-col mb-10 sm:mb-16 max-w-xl">
            <span className="text-[12px] font-mono font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-4 block">
              OUR CULTURE
            </span>
            <h2 className="text-[28px] sm:text-[36px] lg:text-[48px] font-medium tracking-[-0.02em] text-black">
              WHY PRACTICE AT SABARI.
            </h2>
          </div>

          <div className="flex flex-col divide-y divide-neutral-200 border-t border-b border-neutral-200">
            {culturePillars.map((pillar) => (
              <div key={pillar.num} className="py-8 sm:py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 items-start group">
                <div className="lg:col-span-2">
                  <span className="text-[13px] sm:text-[14px] font-mono font-semibold tracking-widest text-neutral-400 group-hover:text-black transition-colors">
                    {pillar.num}
                  </span>
                </div>
                <div className="lg:col-span-4">
                  <h3 className="text-[20px] sm:text-[24px] sm:text-[30px] font-medium tracking-tight text-black leading-tight">
                    {pillar.title}
                  </h3>
                </div>
                <div className="lg:col-span-6">
                  <p className="text-[15px] sm:text-[16px] lg:text-[18px] text-neutral-600 leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Open Application Desk */}
      <section className="w-full py-16 sm:py-24 lg:py-32 px-6 lg:px-16 bg-white">
        <div className="max-w-[1600px] w-full mx-auto border border-neutral-200 p-6 sm:p-10 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-7 flex flex-col">
              <span className="text-[11px] font-mono tracking-widest uppercase text-neutral-400 mb-3">
                OPEN APPLICATION &bull; CLINICAL & ALLIED ROLES
              </span>
              <h3 className="text-[26px] sm:text-[34px] lg:text-[42px] font-medium tracking-tight text-black leading-tight mb-4">
                Interested in Joining Sabari Hospital?
              </h3>
              <p className="text-[15px] sm:text-[16px] text-neutral-600 font-light leading-relaxed mb-6 max-w-xl">
                We are always interested in connecting with dedicated medical consultants, staff nurses, allied health therapists, and healthcare administration specialists. Send us your credentials and resume.
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 pt-6 border-t border-neutral-200 text-sm text-neutral-600">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-black shrink-0" />
                  <span className="font-mono text-black break-all text-[13px] sm:text-sm">care@sabarihospitals.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-black shrink-0" />
                  <span className="text-[13px] sm:text-sm">Human Resources & Clinical Staffing</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-center w-full">
              <a
                href="mailto:care@sabarihospitals.com?subject=Career%20Inquiry%20-%20Sabari%20Hospitals"
                className="px-8 py-4 bg-black text-white text-[12px] font-semibold tracking-widest uppercase hover:bg-neutral-800 transition-colors inline-flex items-center justify-center gap-3 w-full sm:w-auto text-center"
              >
                <span>Send Your Resume</span>
                <span>&rarr;</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Consultation CTA */}
      <section className="w-full py-14 sm:py-20 px-6 lg:px-16 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-[1600px] w-full mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6 sm:gap-8 p-6 sm:p-10 lg:p-12 border border-neutral-200 bg-white">
          <div className="flex flex-col">
            <span className="text-[11px] font-mono tracking-widest uppercase text-neutral-400 mb-2">
              APPOINTMENTS & CONSULTATIONS
            </span>
            <h3 className="text-[24px] sm:text-[28px] lg:text-[32px] font-medium tracking-tight text-black">
              Schedule a Consultation.
            </h3>
            <p className="text-[14px] sm:text-[15px] text-neutral-600 font-light mt-1">
              Connect with our medical team for personalized outpatient and specialist consultations.
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
