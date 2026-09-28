import React from 'react';
import { facilitiesData } from '../data/landingData';

export function FacilitiesSection() {
  return (
    <section data-nav-theme="light" className="w-full bg-white py-16 sm:py-24 lg:py-[140px] px-6 lg:px-16">
      <div className="max-w-[1600px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
        
        {/* Left Heading */}
        <div className="lg:col-span-4">
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#00A99D] mb-6 sm:mb-8 block">
            INFRASTRUCTURE
          </span>
          <h2 className="text-[36px] sm:text-[44px] lg:text-[56px] font-medium leading-[1.05] tracking-[-0.02em] text-[#0B4A8B] mb-6 sm:mb-8 max-w-none lg:max-w-[280px]">
            DESIGNED<br />
            <span className="text-[#00A99D]">FOR BETTER CARE.</span>
          </h2>
        </div>

        {/* Right List */}
        <div className="lg:col-span-8 flex flex-col justify-center">
          <div className="flex flex-col">
            {facilitiesData.map((item, idx) => (
              <div 
                key={idx} 
                className="group flex items-center py-5 sm:py-6 border-b border-neutral-200 transition-colors"
              >
                <span className="text-[12px] font-semibold tracking-[0.1em] text-[#00A99D] w-12 sm:w-16 shrink-0">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <span className="text-[18px] sm:text-[22px] lg:text-[28px] font-medium tracking-[-0.01em] text-neutral-900 group-hover:text-[#0B4A8B] transition-colors">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
