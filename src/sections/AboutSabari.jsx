import React from 'react';
import { motion } from 'framer-motion';

export function AboutSabari() {
  return (
    <section data-nav-theme="light" className="w-full bg-white py-[140px] px-6 lg:px-16">
      <div className="max-w-[1600px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
        
        {/* Left Content */}
        <div className="lg:col-span-6 lg:pr-12">
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-8 block">
            01 &mdash; ABOUT SABARI
          </span>
          <h2 className="text-[44px] lg:text-[64px] font-medium leading-[1.05] tracking-[-0.02em] text-black mb-10">
            HEALTHCARE<br />
            BUILT AROUND<br />
            PEOPLE.
          </h2>
          <p className="text-[18px] lg:text-[22px] text-neutral-600 leading-[1.6] max-w-lg">
            Sabari Hospitals brings together advanced medical expertise, modern technology and compassionate care to create a healthcare experience centered around every patient.
          </p>
        </div>

        {/* Right Image */}
        <div className="lg:col-span-6">
          <div className="relative aspect-[3/4] w-full max-w-[600px] ml-auto overflow-hidden">
            <motion.div
              initial={{ scale: 1.05, opacity: 0.8 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="w-full h-full bg-neutral-100"
            >
              <img 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200" 
                alt="" 
                className="w-full h-full object-cover grayscale opacity-90"
              />
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
