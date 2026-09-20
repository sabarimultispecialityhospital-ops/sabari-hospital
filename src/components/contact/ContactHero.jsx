import React from 'react';
import { motion } from 'framer-motion';

export function ContactHero({ data }) {
  return (
    <section className="relative w-full pt-[140px] md:pt-[170px] pb-16 md:pb-24 border-b border-neutral-200 bg-white">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
        
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-black"></span>
          <span className="text-[12px] font-mono tracking-[0.22em] uppercase text-black font-semibold">
            {data.eyebrow}
          </span>
        </motion.div>

        {/* Hero Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Large Editorial Headline & Supporting Line */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-[44px] sm:text-[60px] md:text-[76px] xl:text-[92px] font-display font-light text-black tracking-tight leading-[0.96] uppercase mb-10"
            >
              {data.titleLine1} <br />
              <span className="font-normal">{data.titleLine2}</span> <br />
              {data.titleLine3}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-[17px] sm:text-[20px] text-neutral-600 font-light leading-relaxed max-w-xl mb-8"
            >
              {data.supportingText}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-6 pt-4 border-t border-neutral-100 text-[12px] font-mono tracking-wider uppercase text-neutral-500"
            >
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>DESK ACTIVE 24/7</span>
              </div>
              <span className="text-neutral-300">•</span>
              <span>PATIENT LIAISON SERVICES</span>
              <span className="text-neutral-300">•</span>
              <span>CONFIDENTIAL ASSISTANCE</span>
            </motion.div>
          </div>

          {/* Right: Architectural Hospital Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col group"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100 border border-neutral-200">
              <img
                src={data.image}
                alt={data.imageAlt}
                className="w-full h-full object-cover grayscale-[15%] group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-neutral-900/5 pointer-events-none"></div>
            </div>
            <div className="mt-3 flex items-center justify-between text-[11px] font-mono tracking-widest text-neutral-400 uppercase">
              <span>{data.caption}</span>
              <span>MAIN CAMPUS</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
