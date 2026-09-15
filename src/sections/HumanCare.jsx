import React from 'react';
import { motion } from 'framer-motion';

export function HumanCare() {
  return (
    <section data-nav-theme="dark" className="w-full bg-[#0a0a0a] py-[160px] px-6 lg:px-16 text-white relative">
      <div className="max-w-[1600px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
        
        {/* Left Content */}
        <div className="lg:col-span-5 lg:pr-8">
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/50 mb-8 block">
            03 &mdash; OUR PHILOSOPHY
          </span>
          <h2 className="text-[44px] lg:text-[64px] font-medium leading-[1.05] tracking-[-0.02em] text-white mb-8">
            BEYOND<br />
            MEDICINE.
          </h2>
          <p className="text-[18px] lg:text-[22px] text-white/70 leading-[1.6] max-w-sm">
            Because exceptional healthcare is not only about treatment. It is about how people feel throughout their journey.
          </p>
        </div>

        {/* Right Cinematic Image */}
        <div className="lg:col-span-7">
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-900">
            <motion.div
              initial={{ scale: 1.1, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.4, ease: "easeOut" }}
              className="w-full h-full"
            >
              <img 
                src="https://images.unsplash.com/photo-1584467735815-f778f274e296?auto=format&fit=crop&q=80&w=1600" 
                alt="Patient care" 
                className="w-full h-full object-cover grayscale brightness-75"
              />
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
