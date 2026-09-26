import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Footer } from '../../sections/Footer';
import { ShieldCheck, CheckCircle2, FileText, Activity } from 'lucide-react';
import { useAppointment } from '../../context/AppointmentContext';

export function Accreditations() {
  const { openAppointmentModal } = useAppointment();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const standards = [
    {
      num: "01",
      area: "SURGICAL & PERIOPERATIVE SAFETY",
      protocol: "WHO Surgical Safety Checklist & Anaesthetic Monitoring",
      description: "Every operative procedure at Sabari Hospital adheres strictly to pre-anaesthetic evaluations, intraoperative vital monitoring, and sterile air handling protocols overseen by senior anaesthesiologists."
    },
    {
      num: "02",
      area: "INFECTION CONTROL & STERILISATION",
      protocol: "Hospital-Wide Barrier & Sterilisation Protocols",
      description: "Implementation of comprehensive autoclave validation, sterile instrument handling, surface disinfection, and biomedical waste segregation in accordance with statutory healthcare standards."
    },
    {
      num: "03",
      area: "STATUTORY HEALTHCARE COMPLIANCE",
      protocol: "Clinical Establishments Registration & Licensing",
      description: "Full regulatory compliance under the Clinical Establishments Act, maintaining up-to-date pharmacy licensing, diagnostic radiation safety oversight, and professional medical registrations."
    },
    {
      num: "04",
      area: "CONTINUOUS CLINICAL AUDITS",
      protocol: "Peer Reviews & Patient Care Verification",
      description: "Regular interdisciplinary clinical reviews, prescription auditing, and feedback monitoring to maintain consistent medical outcomes and accountability across all departments."
    }
  ];

  return (
    <div data-nav-theme="light" className="w-full min-h-screen bg-white text-black selection:bg-neutral-200">
      
      {/* 1. Hero */}
      <section className="w-full pt-28 pb-12 sm:pt-32 sm:pb-16 lg:pt-40 lg:pb-20 px-6 lg:px-16 border-b border-neutral-200">
        <div className="max-w-[1600px] w-full mx-auto">
          <div className="flex flex-col max-w-5xl">
            <span className="text-[12px] font-mono font-semibold tracking-[0.25em] uppercase text-neutral-400 mb-4 sm:mb-6 block">
              ACCREDITATIONS
            </span>
            <h1 className="text-[34px] sm:text-[54px] md:text-[68px] lg:text-[80px] xl:text-[92px] font-medium leading-[1.05] tracking-[-0.03em] break-words text-black mb-6 sm:mb-8">
              A COMMITMENT TO STANDARDS.
            </h1>
            <p className="text-[16px] sm:text-[18px] lg:text-[21px] text-neutral-600 leading-relaxed max-w-2xl font-light">
              Rigorous clinical protocols, institutional transparency, and adherence to established healthcare standards.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Standards & Verification Framework */}
      <section className="w-full py-14 sm:py-20 lg:py-32 px-6 lg:px-16 border-b border-neutral-200">
        <div className="max-w-[1600px] w-full mx-auto">
          
          <div className="flex flex-col mb-10 sm:mb-16 max-w-2xl">
            <span className="text-[12px] font-mono font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-4 block">
              CLINICAL GOVERNANCE
            </span>
            <h2 className="text-[28px] sm:text-[36px] lg:text-[48px] font-medium tracking-[-0.02em] text-black">
              QUALITY PROTOCOLS & COMPLIANCE.
            </h2>
            <p className="text-[15px] sm:text-[16px] text-neutral-600 font-light mt-3 sm:mt-4 leading-relaxed">
              Patient safety at Sabari Hospital is upheld through measurable benchmarks, verified clinical guidelines, and transparent operational practices across our outpatient, surgical, and inpatient units.
            </p>
          </div>

          <div className="flex flex-col divide-y divide-neutral-200 border-t border-b border-neutral-200">
            {standards.map((item) => (
              <div key={item.num} className="py-8 sm:py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 items-start group">
                <div className="lg:col-span-2">
                  <span className="text-[13px] font-mono font-semibold tracking-widest text-neutral-400 group-hover:text-black transition-colors">
                    {item.num}
                  </span>
                </div>
                <div className="lg:col-span-4 flex flex-col">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-1">
                    {item.area}
                  </span>
                  <h3 className="text-[20px] sm:text-[24px] lg:text-[26px] font-medium tracking-tight text-black leading-snug">
                    {item.protocol}
                  </h3>
                </div>
                <div className="lg:col-span-6">
                  <p className="text-[15px] sm:text-[16px] text-neutral-600 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Transparent Documentation Slot */}
      <section className="w-full py-14 sm:py-20 lg:py-28 px-6 lg:px-16 bg-neutral-50/60 border-b border-neutral-200">
        <div className="max-w-[1600px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-5">
            <span className="text-[12px] font-mono font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-4 block">
              INSTITUTIONAL TRANSPARENCY
            </span>
            <h3 className="text-[24px] sm:text-[30px] lg:text-[38px] font-medium leading-[1.1] tracking-tight text-black">
              EVIDENCE-BASED STANDARDS AND CONTINUOUS AUDIT.
            </h3>
          </div>
          <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-5 text-[15px] sm:text-[16px] text-neutral-600 font-light leading-relaxed">
            <p>
              We maintain full institutional transparency with all state health authorities and regulatory bodies. As new clinical accreditations, certifications, and quality recognitions are awarded, official verification documents are archived directly within our administrative records.
            </p>
            <p>
              Families and patients can request full clarity on treatment protocols, medication documentation, and clinical care guidelines directly from our medical superintendence office.
            </p>
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="w-full py-14 sm:py-20 px-6 lg:px-16 bg-white">
        <div className="max-w-[1600px] w-full mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6 sm:gap-8 p-6 sm:p-10 lg:p-12 border border-neutral-200">
          <div className="flex flex-col">
            <span className="text-[11px] font-mono tracking-widest uppercase text-neutral-400 mb-2">
              CLINICAL DEPARTMENTS
            </span>
            <h3 className="text-[24px] sm:text-[28px] lg:text-[32px] font-medium tracking-tight text-black">
              Explore Our Centres of Excellence.
            </h3>
            <p className="text-[14px] sm:text-[15px] text-neutral-600 font-light mt-1">
              Learn how our safety standards are applied across medical, surgical, and diagnostic care.
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
