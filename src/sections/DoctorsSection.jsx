import React from 'react';
import { doctorsData } from '../data/landingData';
import { motion } from 'framer-motion';
import CircularGallery from '../components/ui/CircularGallery';


export function DoctorsSection() {
  return (
    <section data-nav-theme="dark" className="w-full bg-neutral-900 py-[140px] border-t border-neutral-800 overflow-hidden">
      <div className="max-w-[1600px] w-full mx-auto flex flex-col px-6 lg:px-16">
        
        <div className="flex flex-col mb-16">
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-6 block">
            05 &mdash; OUR EXPERTS
          </span>
          <h2 className="text-[44px] lg:text-[56px] font-medium leading-[1.05] tracking-[-0.02em] text-white">
            THE PEOPLE<br />
            BEHIND THE CARE.
          </h2>
        </div>
      </div>

      <div className="w-full h-[50vh] lg:h-[70vh] relative pointer-events-auto mt-10">
        <CircularGallery
          items={doctorsData.map(doctor => ({ image: doctor.image, text: doctor.name }))}
          bend={1}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollEase={0.05}
          font="bold 24px Orbitron"
          scrollSpeed={2}
        />
      </div>
    </section>
  );
}
