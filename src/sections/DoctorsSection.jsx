import React from 'react';
import { doctorsData } from '../data/landingData';
import { motion } from 'framer-motion';

export function DoctorsSection() {
  return (
    <section data-nav-theme="light" className="w-full bg-white py-[140px] px-6 lg:px-16 border-t border-neutral-100">
      <div className="max-w-[1600px] w-full mx-auto flex flex-col">
        
        <div className="flex flex-col mb-16">
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-6 block">
            05 &mdash; OUR EXPERTS
          </span>
          <h2 className="text-[44px] lg:text-[56px] font-medium leading-[1.05] tracking-[-0.02em] text-black">
            THE PEOPLE<br />
            BEHIND THE CARE.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctorsData.map((doctor, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
              className="group flex flex-col cursor-pointer"
            >
              <div className="w-full aspect-[3/4] overflow-hidden bg-neutral-100 mb-6 relative">
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 grayscale"
                />
              </div>
              <div className="flex flex-col">
                <h4 className="text-[18px] font-semibold text-black tracking-tight mb-2 group-hover:opacity-80 transition-opacity">
                  {doctor.name}
                </h4>
                <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-neutral-400">
                  {doctor.speciality}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
