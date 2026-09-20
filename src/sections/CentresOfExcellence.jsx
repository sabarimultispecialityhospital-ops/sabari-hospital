import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
          <Link to="/centre-of-excellence" className="hover:opacity-80 transition-opacity">
            <h2 className="text-[44px] lg:text-[56px] font-medium leading-[1.05] tracking-[-0.02em] text-black mb-8">
              CENTRES<br />
              OF EXCELLENCE
            </h2>
          </Link>
          <p className="text-[18px] lg:text-[20px] text-neutral-600 leading-[1.6] max-w-sm mb-8">
            Specialised care led by experienced clinicians and supported by advanced medical technology.
          </p>
          <Link 
            to="/centre-of-excellence"
            className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-widest uppercase text-black hover:opacity-70 transition-opacity mb-16"
          >
            <span>Explore All Centres</span>
            <span>&rarr;</span>
          </Link>

          {/* Image Container for Desktop */}
          <div className="hidden lg:block relative aspect-[4/3] w-full overflow-hidden bg-neutral-100 border border-neutral-200">
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
              <div 
                key={item.id}
                className="group relative flex flex-col py-6 border-b border-neutral-200 cursor-pointer transition-colors duration-200"
                onMouseEnter={() => setHoveredIndex(idx)}
              >
                <div className="flex items-baseline justify-between w-full">
                  <div className="flex items-baseline gap-4 md:gap-8">
                    <span className={`text-[13px] font-semibold tracking-wider transition-colors duration-200 w-8 ${hoveredIndex === idx ? 'text-black' : 'text-neutral-400'}`}>
                      {item.num || String(idx + 1).padStart(2, '0')}
                    </span>
                    <Link
                      to={`/centre-of-excellence/${item.id}`}
                      className={`text-[24px] lg:text-[34px] font-medium tracking-[-0.01em] transition-all duration-300 transform ${hoveredIndex === idx ? 'text-black translate-x-1' : 'text-neutral-500 group-hover:text-black'}`}
                    >
                      {item.title}
                    </Link>
                  </div>
                  <Link
                    to={`/centre-of-excellence/${item.id}`}
                    className={`text-[14px] font-medium transition-opacity duration-200 ${hoveredIndex === idx ? 'opacity-100 text-black' : 'opacity-0'}`}
                  >
                    &rarr;
                  </Link>
                </div>

                {/* Sub-services list */}
                {item.services && (
                  <div className="pl-12 md:pl-16 mt-2 flex flex-wrap gap-x-3 gap-y-1">
                    {item.services.map((service, sIdx) => (
                      <span 
                        key={sIdx}
                        className={`text-[13px] lg:text-[14px] tracking-wide transition-colors duration-200 ${
                          hoveredIndex === idx ? 'text-neutral-700 font-medium' : 'text-neutral-400'
                        }`}
                      >
                        {service}{sIdx < item.services.length - 1 ? ' •' : ''}
                      </span>
                    ))}
                  </div>
                )}

                {/* Thin underline reveal on hover */}
                <div className={`absolute bottom-0 left-0 h-[1.5px] bg-black transition-all duration-500 ease-out origin-left ${hoveredIndex === idx ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
