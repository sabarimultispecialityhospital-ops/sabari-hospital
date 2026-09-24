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
      <section className="w-full pt-32 pb-16 lg:pt-40 lg:pb-20 px-6 lg:px-16 border-b border-neutral-200">
        <div className="max-w-[1600px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">
          <div className="lg:col-span-7 flex flex-col">
            <span className="text-[12px] font-mono font-semibold tracking-[0.25em] uppercase text-neutral-400 mb-6 block">
              04 &mdash; ABOUT SABARI
            </span>
            <h1 className="text-[52px] sm:text-[72px] lg:text-[96px] font-medium leading-[0.95] tracking-[-0.03em] text-black mb-8">
              A COMMITMENT<br />
              TO STANDARDS.
            </h1>
            <p className="text-[18px] sm:text-[21px] text-neutral-600 leading-relaxed max-w-xl font-light">
              Rigorous clinical protocols, institutional transparency, and adherence to established healthcare standards.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-end">
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100 border border-neutral-200">
              <img 
                src="https://images.unsplash.com/photo-1504813184591-01572f98c85f?auto=format&fit=crop&q=80&w=1200" 
                alt="Sterile surgical safety environment at Sabari Hospital" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-[11px] font-mono tracking-widest text-neutral-400 uppercase mt-3">
              QUALITY ASSURANCE // STERILE SURGICAL SUITES
            </span>
          </div>
        </div>
      </section>

      {/* 2. Standards & Verification Framework */}
      <section className="w-full py-20 lg:py-32 px-6 lg:px-16 border-b border-neutral-200">
        <div className="max-w-[1600px] w-full mx-auto">
          
          <div className="flex flex-col mb-16 max-w-2xl">
            <span className="text-[12px] font-mono font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-4 block">
              CLINICAL GOVERNANCE
            </span>
            <h2 className="text-[36px] lg:text-[48px] font-medium tracking-[-0.02em] text-black">
              QUALITY PROTOCOLS & COMPLIANCE.
            </h2>
            <p className="text-[16px] text-neutral-600 font-light mt-4 leading-relaxed">
              Patient safety at Sabari Hospital is upheld through measurable benchmarks, verified clinical guidelines, and transparent operational practices across our outpatient, surgical, and inpatient units.
            </p>
          </div>

          <div className="flex flex-col divide-y divide-neutral-200 border-t border-b border-neutral-200">
            {standards.map((item) => (
              <div key={item.num} className="py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start group">
                <div className="lg:col-span-2">
                  <span className="text-[13px] font-mono font-semibold tracking-widest text-neutral-400 group-hover:text-black transition-colors">
                    {item.num}
                  </span>
                </div>
                <div className="lg:col-span-4 flex flex-col">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-1">
                    {item.area}
                  </span>
                  <h3 className="text-[22px] sm:text-[26px] font-medium tracking-tight text-black leading-snug">
                    {item.protocol}
                  </h3>
                </div>
                <div className="lg:col-span-6">
                  <p className="text-[16px] text-neutral-600 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Transparent Documentation Slot */}
      <section className="w-full py-20 lg:py-28 px-6 lg:px-16 bg-neutral-50/60 border-b border-neutral-200">
        <div className="max-w-[1600px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <span className="text-[12px] font-mono font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-4 block">
              INSTITUTIONAL TRANSPARENCY
            </span>
            <h3 className="text-[28px] lg:text-[38px] font-medium leading-[1.1] tracking-tight text-black">
              EVIDENCE-BASED STANDARDS AND CONTINUOUS AUDIT.
            </h3>
          </div>
          <div className="lg:col-span-7 flex flex-col gap-5 text-[16px] text-neutral-600 font-light leading-relaxed">
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
      <section className="w-full py-20 px-6 lg:px-16 bg-white">
        <div className="max-w-[1600px] w-full mx-auto flex flex-col md:flex-row md:items-center justify-between gap-8 p-12 border border-neutral-200">
          <div className="flex flex-col">
            <span className="text-[11px] font-mono tracking-widest uppercase text-neutral-400 mb-2">
              CLINICAL DEPARTMENTS
            </span>
            <h3 className="text-[26px] lg:text-[32px] font-medium tracking-tight text-black">
              Explore Our Centres of Excellence.
            </h3>
            <p className="text-[15px] text-neutral-600 font-light mt-1">
              Learn how our safety standards are applied across medical, surgical, and diagnostic care.
            </p>
          </div>
          <button
            type="button"
            onClick={() => openAppointmentModal()}
            className="px-8 py-4 bg-black text-white text-[12px] font-semibold tracking-widest uppercase hover:bg-neutral-800 transition-colors self-start md:self-auto shrink-0"
            >
            Book Appointment &rarr;
            </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
