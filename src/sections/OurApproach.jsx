import React from 'react';
import { motion } from 'framer-motion';

export function OurApproach() {
  return (
    <section data-nav-theme="light" className="w-full bg-white py-[140px] px-6 lg:px-16 border-t border-neutral-100">
      <div className="max-w-[1600px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
        
        {/* Left Content */}
        <div className="lg:col-span-6 lg:pr-12">
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-8 block">
            01 &mdash; OUR APPROACH
          </span>
          <h2 className="text-[44px] lg:text-[64px] font-medium leading-[1.05] tracking-[-0.02em] text-black mb-10">
            MEDICINE IS<br />
            SCIENCE.<br />
            CARE IS HUMAN.
          </h2>
          <div className="flex flex-col gap-6">
            <p className="text-[18px] lg:text-[22px] text-neutral-600 leading-[1.6] max-w-lg">
              We believe that world-class medical outcomes are inextricably linked to how a patient feels throughout their entire healthcare journey.
            </p>
            <p className="text-[18px] lg:text-[22px] text-neutral-600 leading-[1.6] max-w-lg">
              By combining cutting-edge technology with deep compassion, our specialists ensure that every aspect of your treatment is personalized, precise, and profoundly supportive from the moment you walk through our doors.
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <div className="relative aspect-[4/5] w-full max-w-[490px] overflow-hidden">
            <motion.div
              initial={{ scale: 1.05, opacity: 0.8 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="w-full h-full bg-neutral-100"
            >
              <img 
                src="/image.png" 
                alt="Doctor at Sabari Hospital" 
                className="w-full h-full object-cover object-center"
              />
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
