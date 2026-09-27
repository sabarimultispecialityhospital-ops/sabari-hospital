import React from 'react';
import { timelineData } from '../data/landingData';
import { motion } from 'framer-motion';

export function PatientExperience() {
  return (
    <section data-nav-theme="light" className="w-full bg-white py-16 sm:py-24 lg:py-[140px] px-6 lg:px-16">
      <div className="max-w-[1600px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
        
        {/* Left Typography */}
        <div className="lg:col-span-5 flex flex-col justify-start">
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-6 sm:mb-8 block">
            PATIENT EXPERIENCE
          </span>
          <h2 className="text-[34px] sm:text-[48px] lg:text-[64px] font-medium leading-[1.05] tracking-[-0.02em] text-black mb-6 sm:mb-8">
            YOUR CARE.<br />
            YOUR JOURNEY.<br />
            OUR COMMITMENT.
          </h2>
        </div>

        {/* Right Timeline */}
        <div className="lg:col-span-7 flex flex-col lg:pl-12">
          {timelineData.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
              className="flex items-start pb-10 sm:pb-12 border-l border-black/10 relative last:pb-0"
            >
              {/* Timeline dot/line styling */}
              <div className="absolute left-[-5px] top-2 w-[9px] h-[9px] rounded-full bg-black" />
              
              <div className="pl-6 sm:pl-12 flex flex-col">
                <span className="text-[11px] sm:text-[12px] font-semibold tracking-[0.1em] text-neutral-400 mb-1.5 sm:mb-2 block">
                  {item.step}
                </span>
                <span className="text-[20px] sm:text-[24px] lg:text-[32px] font-medium tracking-[-0.01em] text-black">
                  {item.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
