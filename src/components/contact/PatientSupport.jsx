import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function PatientSupport({ data, onTriggerFormSubject }) {
  const [activeModal, setActiveModal] = useState(null);

  const handleAction = (type, title) => {
    if (type === 'feedback') {
      if (onTriggerFormSubject) {
        onTriggerFormSubject('Patient Feedback & Clinical Care Experience');
      }
      const el = document.getElementById('enquiry');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (type === 'support') {
      setActiveModal('support');
    } else if (type === 'appointment') {
      if (onTriggerFormSubject) {
        onTriggerFormSubject('Outpatient Specialist Appointment Assistance');
      }
      const el = document.getElementById('enquiry');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="patient-support" className="w-full py-16 md:py-24 border-b border-neutral-200 bg-neutral-50/60">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[12px] font-mono tracking-[0.2em] uppercase text-neutral-400 block mb-2">
            03 // ON-CAMPUS & CONTINUING CARE
          </span>
          <h2 className="text-[32px] sm:text-[44px] font-display font-light text-black tracking-tight uppercase mb-4 leading-tight">
            {data.title}
          </h2>
          <p className="text-[16px] sm:text-[18px] text-neutral-600 font-light leading-relaxed">
            {data.copy}
          </p>
        </div>

        {/* Support Options: Editorial 3-Column Split */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 divide-y md:divide-y-0 md:divide-x divide-neutral-200">
          {data.services.map((svc, idx) => (
            <motion.div
              key={svc.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              className={`flex flex-col justify-between pt-8 md:pt-0 ${idx > 0 ? 'md:pl-10 lg:pl-16' : ''}`}
            >
              <div>
                <span className="text-[12px] font-mono tracking-widest text-neutral-400 block mb-3">
                  SUPPORT.0{idx + 1}
                </span>
                <h3 className="text-[20px] sm:text-[22px] font-medium text-black tracking-tight mb-3">
                  {svc.title}
                </h3>
                <p className="text-[14px] text-neutral-600 font-light leading-relaxed mb-8">
                  {svc.description}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-200">
                <button
                  type="button"
                  onClick={() => handleAction(svc.type, svc.title)}
                  className="group inline-flex items-center gap-2 text-[12px] font-mono font-semibold tracking-wider uppercase text-black hover:text-neutral-600 transition-colors text-left"
                >
                  <span>{svc.actionLabel}</span>
                  <span className="group-hover:translate-x-1.5 transition-transform duration-200">&rarr;</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Modal for Patient Support Desk */}
        <AnimatePresence>
          {activeModal === 'support' && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="w-full max-w-lg bg-white border border-neutral-200 p-8 shadow-2xl"
              >
                <div className="flex items-center justify-between pb-4 border-b border-neutral-200 mb-6">
                  <div>
                    <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-neutral-400 block">
                      ON-CAMPUS CONCIERGE
                    </span>
                    <h4 className="text-[20px] font-medium text-black tracking-tight">
                      Patient Support Desk
                    </h4>
                  </div>
                  <button
                    onClick={() => setActiveModal(null)}
                    className="text-[13px] font-mono uppercase text-neutral-400 hover:text-black transition-colors"
                  >
                    [CLOSE ✕]
                  </button>
                </div>

                <div className="space-y-4 text-[14px] text-neutral-600 font-light leading-relaxed mb-8">
                  <p>
                    Our Patient Support Liaisons assist with hospital admissions, corporate insurance TPA clearances, wheelchair mobility access, and multi-lingual translators.
                  </p>
                  <div className="p-4 bg-neutral-50 border border-neutral-200 font-mono text-[12px] space-y-2 text-neutral-800">
                    <div>Direct Extension: <span className="font-semibold text-black">Ext. 204 / 205</span></div>
                    <div>Direct Line: <span className="font-semibold text-black">+1 (800) 123-4567</span></div>
                    <div>Hours: <span className="font-semibold text-black">24 Hours / 7 Days Desk</span></div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-neutral-200">
                  <a
                    href="tel:+18001234567"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white text-[12px] font-mono uppercase font-semibold hover:bg-neutral-800 transition-colors"
                  >
                    <span>Call Concierge Now</span>
                    <span>&rarr;</span>
                  </a>
                  <button
                    onClick={() => {
                      setActiveModal(null);
                      if (onTriggerFormSubject) onTriggerFormSubject('Patient Support Concierge Request');
                      const el = document.getElementById('enquiry');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-[12px] font-mono uppercase text-neutral-600 hover:text-black underline"
                  >
                    Write an Enquiry
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
