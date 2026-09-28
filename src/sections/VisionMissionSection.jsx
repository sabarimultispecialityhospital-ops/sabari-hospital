import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Award, HeartHandshake } from 'lucide-react';

export function VisionMissionSection() {
  return (
    <div className="w-full flex flex-col">
      
      {/* 1. Full-Width Edge-to-Edge Mission Section */}
      <section 
        data-nav-theme="dark" 
        className="w-full bg-gradient-to-r from-[#0B4A8B] via-[#09417c] to-[#07325f] text-white py-14 sm:py-18 lg:py-20 px-6 sm:px-10 lg:px-16 relative overflow-hidden"
      >
        {/* Subtle Ambient Background Light */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1600px] w-full mx-auto">
          {/* Inner Rounded Framing Stretching Full Container Width */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="w-full border border-white/30 rounded-[24px] sm:rounded-[36px] p-6 sm:p-10 lg:p-12 backdrop-blur-sm"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              
              {/* Left Column: Icon & Identity */}
              <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="w-18 h-18 sm:w-22 sm:h-22 rounded-full border-2 border-white/40 bg-white/10 backdrop-blur-sm flex items-center justify-center mb-5 shadow-inner hover:scale-105 transition-transform duration-300">
                  <Target className="w-9 h-9 sm:w-11 sm:h-11 text-white stroke-[1.8]" />
                </div>
                
                <span className="text-[11px] sm:text-[12px] font-mono tracking-[0.2em] uppercase text-white/70 block mb-1">
                  OUR PLEDGE
                </span>
                <h3 className="text-[32px] sm:text-[40px] lg:text-[46px] font-semibold text-white tracking-tight leading-tight mb-4">
                  Mission
                </h3>

                {/* Hallmark Trust Badge */}
                <div className="inline-flex items-center gap-2 bg-white text-[#0B4A8B] py-1.5 px-3.5 rounded-full shadow-md text-[11px] font-bold tracking-wider uppercase">
                  <Award className="w-4 h-4 text-[#00A99D]" />
                  <span>50+ Years of Medical Trust</span>
                </div>
              </div>

              {/* Right Column: Statement */}
              <div className="lg:col-span-8 flex flex-col justify-center">
                <p className="text-[18px] sm:text-[22px] lg:text-[26px] text-white/95 leading-[1.6] font-light">
                  &ldquo;Sabari Hospital shall provide the best possible medical treatment, delivered most efficiently, in the shortest possible time, at affordable cost, to all sections of society, irrespective of background or economic status.&rdquo;
                </p>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* Full-Width Horizontal Separation Line */}
      <div className="w-full h-[1px] bg-white/25" />

      {/* 2. Full-Width Edge-to-Edge Vision Section */}
      <section 
        data-nav-theme="dark" 
        className="w-full bg-gradient-to-r from-[#00A99D] via-[#00998e] to-[#007f76] text-white py-14 sm:py-18 lg:py-20 px-6 sm:px-10 lg:px-16 relative overflow-hidden"
      >
        {/* Subtle Ambient Background Light */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1600px] w-full mx-auto">
          {/* Inner Rounded Framing Stretching Full Container Width */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="w-full border border-white/30 rounded-[24px] sm:rounded-[36px] p-6 sm:p-10 lg:p-12 backdrop-blur-sm"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              
              {/* Left Column: Icon & Identity */}
              <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="w-18 h-18 sm:w-22 sm:h-22 rounded-full border-2 border-white/40 bg-white/10 backdrop-blur-sm flex items-center justify-center mb-5 shadow-inner hover:scale-105 transition-transform duration-300">
                  <Lightbulb className="w-9 h-9 sm:w-11 sm:h-11 text-white stroke-[1.8]" />
                </div>
                
                <span className="text-[11px] sm:text-[12px] font-mono tracking-[0.2em] uppercase text-white/70 block mb-1">
                  OUR HORIZON
                </span>
                <h3 className="text-[32px] sm:text-[40px] lg:text-[46px] font-semibold text-white tracking-tight leading-tight mb-4">
                  Vision
                </h3>

                {/* Hallmark Ethical Badge */}
                <div className="inline-flex items-center gap-2 bg-white text-[#00A99D] py-1.5 px-3.5 rounded-full shadow-md text-[11px] font-bold tracking-wider uppercase">
                  <HeartHandshake className="w-4 h-4 text-[#0B4A8B]" />
                  <span>Where Care Becomes Human</span>
                </div>
              </div>

              {/* Right Column: Statement */}
              <div className="lg:col-span-8 flex flex-col justify-center">
                <p className="text-[18px] sm:text-[22px] lg:text-[26px] text-white/95 leading-[1.6] font-light">
                  &ldquo;To render the highest standard of compassionate medical care to every patient who walks through our doors, ensuring that advanced healing is accessible, ethical, and profoundly human for all.&rdquo;
                </p>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* Full-Width Horizontal Separation Line at Bottom */}
      <div className="w-full h-[1px] bg-neutral-200" />

    </div>
  );
}
