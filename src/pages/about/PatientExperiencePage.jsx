import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Footer } from '../../sections/Footer';
import { useAppointment } from '../../context/AppointmentContext';

export function PatientExperiencePage() {
  const { openAppointmentModal } = useAppointment();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const journeyStages = [
    {
      step: "01",
      title: "ARRIVE",
      tag: "FIRST POINT OF CONTACT",
      description: "From your arrival at Sabari Hospital, our front desk and patient coordinators provide clear orientation, helping you complete registration comfortably without unnecessary delays."
    },
    {
      step: "02",
      title: "UNDERSTAND",
      tag: "ACTIVE LISTENING",
      description: "Our clinicians take time to understand your medical history, symptoms, and lifestyle context before making any diagnostic recommendations. We listen first."
    },
    {
      step: "03",
      title: "CONSULT",
      tag: "TRANSPARENT EVALUATION",
      description: "Clear explanations of medical findings, diagnostic reports, and potential treatment approaches. Our doctors encourage questions from you and your family."
    },
    {
      step: "04",
      title: "TREAT",
      tag: "EVIDENCE-BASED CARE",
      description: "Whether outpatient medical therapy, surgical intervention, or inpatient admission, care is administered according to modern clinical protocols in a safe environment."
    },
    {
      step: "05",
      title: "RECOVER",
      tag: "CONTINUED SUPPORT",
      description: "Recovery continues beyond discharge. We provide structured recuperation plans, physiotherapy support, diet guidance, and follow-up communication to ensure sustained wellness."
    }
  ];

  return (
    <div data-nav-theme="light" className="w-full min-h-screen bg-white text-black selection:bg-neutral-200">
      
      {/* 1. Hero */}
      <section className="w-full pt-28 pb-12 sm:pt-32 sm:pb-16 lg:pt-40 lg:pb-20 px-6 lg:px-16 border-b border-neutral-200">
        <div className="max-w-[1600px] w-full mx-auto">
          <div className="flex flex-col max-w-5xl">
            <span className="text-[12px] font-mono font-semibold tracking-[0.25em] uppercase text-neutral-400 mb-4 sm:mb-6 block">
              PATIENT EXPERIENCE
            </span>
            <h1 className="text-[34px] sm:text-[54px] md:text-[68px] lg:text-[80px] xl:text-[92px] font-medium leading-[1.05] tracking-[-0.03em] break-words text-black mb-6 sm:mb-8">
              CARE, FROM THE FIRST STEP.
            </h1>
            <p className="text-[16px] sm:text-[18px] lg:text-[21px] text-neutral-600 leading-relaxed max-w-2xl font-light">
              A thoughtful, calm and supportive healthcare journey from consultation to recovery.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Editorial Patient Journey */}
      <section className="w-full py-14 sm:py-20 lg:py-32 px-6 lg:px-16 border-b border-neutral-200">
        <div className="max-w-[1600px] w-full mx-auto">
          
          <div className="flex flex-col mb-10 sm:mb-16 max-w-xl">
            <span className="text-[12px] font-mono font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-4 block">
              THE JOURNEY
            </span>
            <h2 className="text-[28px] sm:text-[36px] lg:text-[48px] font-medium tracking-[-0.02em] text-black">
              HOW WE CARE FOR YOU.
            </h2>
            <p className="text-[15px] sm:text-[16px] text-neutral-600 font-light mt-3 sm:mt-4 leading-relaxed">
              Every stage of your interaction with our hospital is designed to feel calm, transparent, and respectful of your time and emotional wellbeing.
            </p>
          </div>

          <div className="flex flex-col divide-y divide-neutral-200 border-t border-b border-neutral-200">
            {journeyStages.map((stage) => (
              <div key={stage.step} className="py-8 sm:py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 items-start group">
                <div className="lg:col-span-2">
                  <span className="text-[13px] sm:text-[14px] font-mono font-semibold tracking-widest text-neutral-400 group-hover:text-black transition-colors">
                    STAGE {stage.step}
                  </span>
                </div>
                <div className="lg:col-span-4 flex flex-col">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-1">
                    {stage.tag}
                  </span>
                  <h3 className="text-[22px] sm:text-[28px] sm:text-[32px] font-medium tracking-tight text-black">
                    {stage.title}
                  </h3>
                </div>
                <div className="lg:col-span-6">
                  <p className="text-[15px] sm:text-[16px] lg:text-[17px] text-neutral-600 leading-relaxed font-light">
                    {stage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Human Experience Narrative */}
      <section className="w-full py-16 sm:py-24 lg:py-36 px-6 lg:px-16 bg-neutral-50/60 border-b border-neutral-200">
        <div className="max-w-[1600px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 items-center">
          
          <div className="lg:col-span-6 overflow-hidden aspect-[4/3] bg-neutral-100 border border-neutral-200">
            <img 
              src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1200" 
              alt="Attentive doctor with patient family" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="lg:col-span-6 flex flex-col">
            <span className="text-[12px] font-mono font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-4 sm:mb-6 block">
              PATIENT COMFORT
            </span>
            <h3 className="text-[26px] sm:text-[34px] lg:text-[40px] font-medium leading-[1.05] tracking-[-0.02em] text-black mb-4 sm:mb-6">
              A HEALING ENVIRONMENT DESIGNED TO CALM.
            </h3>
            <p className="text-[15px] sm:text-[16px] text-neutral-700 leading-relaxed font-light mb-4 sm:mb-6">
              We understand that visiting a hospital can carry apprehension. From the natural lighting in our consultation suites to the considerate, soft-spoken approach of our nursing staff, our spaces are intentionally curated to put patients and their families at ease.
            </p>
            <p className="text-[15px] sm:text-[16px] text-neutral-700 leading-relaxed font-light mb-6 sm:mb-8">
              Whether you need routine preventive checks, maternal guidance, diabetic follow-up, or surgical care, our clinical doors are open with dignity and personal respect.
            </p>
            <div className="flex items-center gap-6">
              <Link 
                to="/doctors"
                className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-widest uppercase text-black hover:opacity-70 transition-opacity"
              >
                <span>View Our Doctors Directory</span>
                <span>&rarr;</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Consultation CTA */}
      <section className="w-full py-14 sm:py-20 px-6 lg:px-16 bg-white">
        <div className="max-w-[1600px] w-full mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6 sm:gap-8 p-6 sm:p-10 lg:p-12 border border-neutral-200">
          <div className="flex flex-col">
            <span className="text-[11px] font-mono tracking-widest uppercase text-neutral-400 mb-2">
              PLAN YOUR VISIT
            </span>
            <h3 className="text-[24px] sm:text-[28px] lg:text-[32px] font-medium tracking-tight text-black">
              Ready to Speak with a Doctor?
            </h3>
            <p className="text-[14px] sm:text-[15px] text-neutral-600 font-light mt-1">
              Contact our patient reception desk for assistance with scheduling, directions, or medical questions.
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
