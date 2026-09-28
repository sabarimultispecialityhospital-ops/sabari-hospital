import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { centresData } from '../data/landingData';
import { motion, AnimatePresence } from 'framer-motion';

export function CentresOfExcellence() {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  return (
    <section id="centres-of-excellence" data-nav-theme="light" className="w-full bg-white py-16 sm:py-24 lg:py-[140px] px-6 lg:px-16 scroll-mt-20">
      <div className="max-w-[1600px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
        
        {/* Left: Titles & Subtitles */}
        <div className="lg:col-span-5 flex flex-col">
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#00A99D] mb-6 sm:mb-8 block">
            EXPERTISE
          </span>
          <Link to="/contact" className="hover:opacity-80 transition-opacity">
            <h2 className="text-[36px] sm:text-[44px] lg:text-[56px] font-medium leading-[1.05] tracking-[-0.02em] text-[#0B4A8B] mb-6 sm:mb-8">
              CENTRES<br />
              OF EXCELLENCE
            </h2>
          </Link>
          <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-neutral-600 leading-[1.6] max-w-sm mb-6 sm:mb-8 font-light">
            Specialised care led by experienced clinicians and supported by advanced medical technology.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center gap-2 text-[12px] font-bold tracking-widest uppercase text-[#00A99D] hover:text-[#0B4A8B] transition-colors mb-8 lg:mb-16"
          >
            <span>Explore All Centres</span>
            <span>&rarr;</span>
          </Link>

          {/* Desktop Sub-services Display instead of Image */}
          <div className="hidden lg:flex flex-col mt-4 min-h-[300px]">
            <div className="h-[1px] w-full bg-neutral-200 mb-8" />
            <AnimatePresence mode="wait">
              <motion.div
                key={hoveredIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex flex-col"
              >
                <h3 className="text-[12px] font-mono font-bold tracking-widest uppercase text-[#00A99D] mb-8">
                  {centresData[hoveredIndex].title} &mdash; SERVICES
                </h3>
                <div className="flex flex-col gap-6">
                  {centresData[hoveredIndex].services?.map((service, idx) => (
                    <Link 
                      key={idx} 
                      to={`/contact?subject=${encodeURIComponent(service)}`}
                      className="flex items-center gap-5 group cursor-pointer"
                    >
                      <span className="text-[13px] text-neutral-300 font-mono transition-colors group-hover:text-[#00A99D]">
                        0{idx + 1}
                      </span>
                      <span className="text-[22px] lg:text-[26px] font-medium tracking-[-0.01em] text-neutral-600 transition-colors group-hover:text-[#0B4A8B]">
                        {service}
                      </span>
                    </Link>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Right: Editorial List */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="flex flex-col">
            {centresData.map((item, idx) => (
              <Link 
                key={item.id}
                to={`/contact?subject=${encodeURIComponent(item.title)}`}
                className="group relative flex flex-col py-6 border-b border-neutral-200 cursor-pointer transition-colors duration-200"
                onMouseEnter={() => setHoveredIndex(idx)}
              >
                <div className="flex items-baseline justify-between w-full">
                  <div className="flex items-baseline gap-4 md:gap-8">
                    <span className={`text-[13px] font-semibold tracking-wider transition-colors duration-200 w-8 ${
                      hoveredIndex === idx ? 'text-[#00A99D]' : 'text-[#00A99D] lg:text-neutral-400'
                    }`}>
                      {item.num || String(idx + 1).padStart(2, '0')}
                    </span>
                    <span
                      className={`text-[20px] sm:text-[24px] lg:text-[34px] font-medium tracking-[-0.01em] transition-all duration-300 transform ${
                        hoveredIndex === idx 
                          ? 'text-[#0B4A8B] lg:translate-x-1' 
                          : 'text-[#0B4A8B] lg:text-neutral-500 lg:group-hover:text-[#0B4A8B]'
                      }`}
                    >
                      {item.title}
                    </span>
                  </div>
                  <span
                    className={`text-[14px] font-medium transition-opacity duration-200 text-[#00A99D] ${
                      hoveredIndex === idx ? 'opacity-100' : 'opacity-100 lg:opacity-0'
                    }`}
                  >
                    &rarr;
                  </span>
                </div>

                {/* Sub-services list (Mobile Only) - Always prominent and active */}
                {item.services && (
                  <div className="lg:hidden pl-12 md:pl-16 mt-2 flex flex-wrap gap-x-3 gap-y-1">
                    {item.services.map((service, sIdx) => (
                      <span 
                        key={sIdx}
                        className="text-[13px] tracking-wide transition-colors duration-200 text-[#0B4A8B] font-medium"
                      >
                        {service}{sIdx < item.services.length - 1 ? <span className="text-[#00A99D] ml-1.5">•</span> : ''}
                      </span>
                    ))}
                  </div>
                )}

                {/* Underline - Always active on mobile, hover-driven on desktop */}
                <div className={`absolute bottom-0 left-0 h-[1.5px] bg-[#00A99D] transition-all duration-500 ease-out origin-left ${
                  hoveredIndex === idx ? 'w-full' : 'w-full lg:w-0 lg:group-hover:w-full'
                }`} />
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
