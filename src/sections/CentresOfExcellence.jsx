import React, { useState } from 'react';
import { centresData } from '../data/landingData';
import { motion, AnimatePresence } from 'framer-motion';

export function CentresOfExcellence() {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  return (
    <section data-nav-theme="light" className="w-full bg-white py-[140px] px-6 lg:px-16">
      <div className="max-w-[1600px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">
        
        {/* Left: Titles & Subtitles */}
        <div className="lg:col-span-5 flex flex-col">
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-8 block">
            02 &mdash; EXPERTISE
          </span>
          <h2 className="text-[44px] lg:text-[56px] font-medium leading-[1.05] tracking-[-0.02em] text-black mb-8">
            CENTRES<br />
            OF EXCELLENCE
          </h2>
          <p className="text-[18px] lg:text-[20px] text-neutral-600 leading-[1.6] max-w-sm mb-16">
            Specialised care led by experienced clinicians and supported by advanced medical technology.
          </p>

          {/* Image Container for Desktop */}
          <div className="hidden lg:block relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
            <AnimatePresence mode="wait">
              <motion.img
                key={hoveredIndex}
                src={centresData[hoveredIndex].image}
                alt={centresData[hoveredIndex].title}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>
        </div>

        {/* Right: Editorial List */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="flex flex-col">
            {centresData.map((item, idx) => (
              <a 
                key={item.id}
                href="#"
                className="group relative flex items-baseline py-8 border-b border-neutral-200"
                onMouseEnter={() => setHoveredIndex(idx)}
              >
                <span className="text-[14px] font-medium text-neutral-400 w-16 group-hover:text-black transition-colors duration-300">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <span className="text-[28px] lg:text-[40px] font-medium tracking-[-0.01em] text-neutral-400 group-hover:text-black transition-all duration-300 transform group-hover:translate-x-4">
                  {item.title}
                </span>
                {/* Thin underline reveal on hover */}
                <div className="absolute bottom-0 left-0 h-[1px] bg-black w-0 group-hover:w-full transition-all duration-500 ease-out origin-left" />
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
