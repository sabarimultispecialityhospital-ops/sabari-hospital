import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function HumanCare() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Very subtle 2-4px vertical parallax movement during page scrolling
  const parallaxY = useTransform(scrollYProgress, [0, 1], [-3, 3]);

  return (
    <section 
      ref={sectionRef}
      data-nav-theme="dark" 
      className="w-full bg-[#0a0a0a] py-16 sm:py-24 lg:py-[140px] px-6 lg:pl-16 lg:pr-8 xl:pr-12 2xl:pr-16 border-t border-neutral-900 overflow-hidden text-white relative"
    >
      <div className="max-w-[1700px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 xl:gap-14 items-center">
        
        {/* Left Content */}
        <div className="lg:col-span-6 lg:pr-12">
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#00A99D] mb-6 sm:mb-8 block">
            OUR PHILOSOPHY
          </span>
          <h2 className="text-[36px] sm:text-[48px] lg:text-[64px] font-medium leading-[1.05] tracking-[-0.02em] text-white mb-6 sm:mb-8">
            YOUR WELLNESS,<br />
            <span className="text-[#00A99D]">OUR GOAL.</span>
          </h2>
          <div className="flex flex-col gap-6">
            <p className="text-[16px] sm:text-[18px] lg:text-[22px] text-white/70 leading-[1.6] max-w-lg font-light">
              Every medical decision is made with transparency, medical ethics, and an uncompromising commitment to patient safety.
            </p>
          </div>
        </div>

        {/* Right Image - Editorial Portrait Visual Anchor */}
        <div className="lg:col-span-6 w-full flex justify-center lg:justify-end">
          <div className="group relative w-full aspect-[1/1] max-w-[680px] lg:max-w-none rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] hover:shadow-[0_28px_65px_rgba(0,0,0,0.8)] transition-shadow duration-500 bg-neutral-900 select-none">
            <motion.div
              style={{ y: parallaxY }}
              initial={{ scale: 1.02, opacity: 0.88 }}
              whileInView={{ scale: 1.0, opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full will-change-transform"
            >
              <img 
                src="/image-copy.png" 
                alt="Dr. Saravana Kumar S - Chairman & Managing Director at Sabari Hospital" 
                className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                loading="eager"
                decoding="async"
              />
            </motion.div>

            {/* Hover Name & Title Reveal - Visible on mobile/touch, hover on desktop */}
            <div className="absolute inset-x-0 bottom-0 pt-28 pb-7 px-7 sm:px-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500 ease-out flex flex-col justify-end pointer-events-none">
              <div className="transform translate-y-0 sm:translate-y-2 sm:group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <span className="text-[10px] sm:text-[11px] font-mono font-semibold tracking-[0.22em] uppercase text-[#00A99D] block mb-1">
                  CHAIRMAN &amp; MANAGING DIRECTOR
                </span>
                <h3 className="text-[20px] sm:text-[24px] lg:text-[26px] font-medium text-white tracking-tight leading-tight">
                  Dr. Saravana Kumar S
                </h3>
                <p className="text-[12px] sm:text-[14px] text-white/80 font-light mt-0.5 tracking-wide">
                  Anaesthesiologist &amp; Critical Care Specialist
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
