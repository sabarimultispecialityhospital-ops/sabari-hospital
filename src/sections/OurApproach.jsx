import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function OurApproach() {
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
      data-nav-theme="light" 
      className="w-full bg-white py-16 sm:py-24 lg:py-[140px] px-6 lg:pl-16 lg:pr-8 xl:pr-12 2xl:pr-16 border-t border-neutral-100 overflow-hidden"
    >
      <div className="max-w-[1700px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 xl:gap-14 items-center">
        
        {/* Left Content */}
        <div className="lg:col-span-6 lg:pr-12">
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#00A99D] mb-6 sm:mb-8 block">
            OUR APPROACH
          </span>
          <h2 className="text-[36px] sm:text-[48px] lg:text-[64px] font-medium leading-[1.05] tracking-[-0.02em] text-[#0B4A8B] mb-8 sm:mb-10">
            MEDICINE IS <span className="text-[#00A99D]">SCIENCE.</span><br />
            CARE IS <span className="text-[#00A99D]">HUMAN.</span>
          </h2>
          <div className="flex flex-col gap-6">
            <p className="text-[16px] sm:text-[18px] lg:text-[22px] text-neutral-600 leading-[1.6] max-w-lg font-light">
              Guided by five decades of compassionate clinical care, ensuring every treatment is personalized, precise, and centered on human healing.
            </p>

            <div className="pt-2 flex items-center gap-3.5">
              <span className="w-8 h-[2px] bg-[#00A99D] shrink-0" />
              <p className="text-[17px] sm:text-[19px] lg:text-[21px] text-neutral-900 font-normal italic tracking-wide">
                &ldquo;Innovation with Trust.&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Right Image - Editorial Portrait Visual Anchor */}
        <div className="lg:col-span-6 w-full flex justify-center lg:justify-end">
          <div className="group relative w-full aspect-[1079/987] max-w-[680px] lg:max-w-none rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.12)] hover:shadow-[0_28px_65px_rgba(0,0,0,0.18)] transition-shadow duration-500 bg-neutral-100 select-none">
            <motion.div
              style={{ y: parallaxY }}
              initial={{ scale: 1.02, opacity: 0.88 }}
              whileInView={{ scale: 1.0, opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full will-change-transform"
            >
              <img 
                src="/image.png" 
                alt="Dr. Mangaleswari - Founder of Sabari Hospital" 
                className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                loading="eager"
                decoding="async"
              />
            </motion.div>

            {/* Hover Name & Title Reveal - Visible on touch / mobile, hover on desktop */}
            <div className="absolute inset-x-0 bottom-0 pt-28 pb-7 px-7 sm:px-8 bg-gradient-to-t from-black/85 via-black/45 to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500 ease-out flex flex-col justify-end pointer-events-none">
              <div className="transform translate-y-0 sm:translate-y-2 sm:group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <span className="text-[10px] sm:text-[11px] font-mono font-semibold tracking-[0.22em] uppercase text-[#00A99D] block mb-1">
                  FOUNDER &amp; GUIDING PILLAR
                </span>
                <h3 className="text-[20px] sm:text-[24px] lg:text-[26px] font-medium text-white tracking-tight leading-tight">
                  Dr. Mangaleswari
                </h3>
                <p className="text-[12px] sm:text-[14px] text-white/80 font-light mt-0.5 tracking-wide">
                  Obstetrician &amp; Gynaecologist
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
