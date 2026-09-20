import React from 'react';
import { motion } from 'framer-motion';

export function EmergencySection({ data }) {
  return (
    <section id="emergency" className="w-full bg-[#0a0a0a] text-white py-14 md:py-20 border-b border-neutral-800">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
        
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-16">
          
          {/* Left: Heading & Warning Copy */}
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-600"></span>
              </span>
              <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-rose-400 font-semibold">
                24/7 TRAUMA & RESUSCITATION TRIAGE
              </span>
            </div>

            <h2 className="text-[32px] sm:text-[44px] font-display font-light tracking-tight uppercase mb-3 leading-tight">
              {data.title}
            </h2>

            <p className="text-[15px] sm:text-[16px] text-neutral-400 font-light leading-relaxed">
              {data.supportingText}
            </p>
          </div>

          {/* Right: Emergency Number & High-Impact CTA */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 lg:gap-8 shrink-0">
            <div className="text-left sm:text-right">
              <span className="text-[11px] font-mono tracking-widest text-neutral-400 uppercase block">
                EMERGENCY HOTLINE
              </span>
              <span className="text-[24px] sm:text-[28px] font-mono font-medium tracking-tight text-white block">
                {data.phone}
              </span>
            </div>

            <a
              href={`tel:${data.phone.replace(/[^0-9+]/g, '')}`}
              className="group inline-flex items-center justify-center gap-3 px-8 py-5 bg-white text-black text-[13px] font-mono font-semibold tracking-wider uppercase hover:bg-neutral-200 transition-colors"
            >
              <span>{data.actionText}</span>
              <span className="group-hover:translate-x-1.5 transition-transform duration-200">&rarr;</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
