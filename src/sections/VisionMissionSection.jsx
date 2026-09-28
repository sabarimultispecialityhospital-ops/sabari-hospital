import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb } from 'lucide-react';

export function VisionMissionSection() {
  return (
    <div className="w-full flex flex-col">
      
      {/* 1. Full-Width Edge-to-Edge Mission Section */}
      <section 
        data-nav-theme="dark" 
        className="w-full bg-gradient-to-r from-[#0B4A8B] via-[#09417c] to-[#07325f] text-white py-8 sm:py-10 lg:py-12 px-6 sm:px-10 lg:px-16 relative overflow-hidden"
      >
        {/* Subtle Ambient Background Light */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1500px] w-full mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="w-full"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
              
              {/* Left Column: Icon & Identity */}
              <div className="lg:col-span-3 flex flex-row lg:flex-col items-center lg:items-start gap-4 lg:gap-3 text-left">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center shrink-0">
                  <Target className="w-6 h-6 sm:w-7 sm:h-7 text-white stroke-[2]" />
                </div>
                
                <h3 className="text-[26px] sm:text-[32px] lg:text-[36px] font-semibold text-white tracking-tight leading-none">
                  Mission
                </h3>
              </div>

              {/* Right Column: Statement */}
              <div className="lg:col-span-9 flex flex-col justify-center">
                <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-white/95 leading-[1.65] font-light">
                  &ldquo;Sabari Hospital shall provide the best possible medical treatment, delivered most efficiently, in the shortest possible time, at affordable cost, to all sections of society, irrespective of background or economic status.&rdquo;
                </p>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* Full-Width Horizontal Separation Line */}
      <div className="w-full h-[1px] bg-white/20" />

      {/* 2. Full-Width Edge-to-Edge Vision Section */}
      <section 
        data-nav-theme="dark" 
        className="w-full bg-gradient-to-r from-[#00A99D] via-[#00998e] to-[#007f76] text-white py-8 sm:py-10 lg:py-12 px-6 sm:px-10 lg:px-16 relative overflow-hidden"
      >
        {/* Subtle Ambient Background Light */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1500px] w-full mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="w-full"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
              
              {/* Left Column: Icon & Identity */}
              <div className="lg:col-span-3 flex flex-row lg:flex-col items-center lg:items-start gap-4 lg:gap-3 text-left">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center shrink-0">
                  <Lightbulb className="w-6 h-6 sm:w-7 sm:h-7 text-white stroke-[2]" />
                </div>
                
                <h3 className="text-[26px] sm:text-[32px] lg:text-[36px] font-semibold text-white tracking-tight leading-none">
                  Vision
                </h3>
              </div>

              {/* Right Column: Statement */}
              <div className="lg:col-span-9 flex flex-col justify-center">
                <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-white/95 leading-[1.65] font-light">
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
