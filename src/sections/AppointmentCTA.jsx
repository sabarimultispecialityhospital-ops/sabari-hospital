import React from 'react';
import { motion } from 'framer-motion';

export function AppointmentCTA() {
  return (
    <section data-nav-theme="light" className="w-full bg-[#fafaf8] py-[160px] px-6 lg:px-16 text-center border-t border-neutral-100">
      <div className="max-w-[800px] w-full mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <h2 className="text-[52px] lg:text-[72px] font-medium leading-[1.05] tracking-[-0.02em] text-black mb-6">
            LET'S TAKE<br />
            THE NEXT STEP.
          </h2>
          <p className="text-[18px] lg:text-[20px] text-neutral-600 leading-[1.6] max-w-md mb-12">
            Book an appointment with the right specialist for your healthcare needs.
          </p>
          
          <a 
            href="/book-appointment" 
            className="inline-flex items-center justify-center bg-black text-white text-[13px] font-semibold tracking-[0.04em] uppercase px-10 py-[20px] border border-black hover:bg-white hover:text-black transition-all duration-300"
          >
            BOOK AN APPOINTMENT &rarr;
          </a>
        </motion.div>
      </div>
    </section>
  );
}
