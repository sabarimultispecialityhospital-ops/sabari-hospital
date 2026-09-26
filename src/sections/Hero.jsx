import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';

export function Hero() {
  const containerRef = useRef(null);
  
  // Track scroll progress over this section
  // It's 200vh tall so we have plenty of scroll distance for the animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Expand image from 55% width to 100% width on scroll
  const videoWidth = useTransform(scrollYProgress, [0, 0.8], ["55%", "100%"]);
  
  // Gracefully fade out and gently drift typography before image covers it
  const textX = useTransform(scrollYProgress, [0, 0.25], ["0%", "-8%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <section 
      ref={containerRef} 
      data-nav-theme="light" 
      className="relative w-full bg-white min-h-[calc(100vh-80px)] lg:h-[200vh]"
    >
      {/* Sticky / Flexible Container */}
      <div className="relative lg:sticky lg:top-0 left-0 w-full min-h-[calc(100vh-80px)] lg:h-screen overflow-hidden flex items-center justify-between">
        
        {/* Mobile Background Ambience (Hidden on Desktop) */}
        <div className="lg:hidden absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
          <img 
            src="/hero_image.png" 
            alt="Sabari Hospital" 
            className="w-full h-full object-cover object-center opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
        </div>

        {/* Left Editorial Content - z-10 so expanding image smoothly overlays without text overlapping */}
        <motion.div 
          style={{ x: textX, opacity: textOpacity }}
          className="w-full lg:w-[45%] h-full flex flex-col justify-center px-6 sm:px-8 lg:px-16 pt-24 sm:pt-28 lg:pt-[80px] z-10"
        >
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-6 sm:mb-8 block">
            MULTI SPECIALITY HOSPITAL
          </span>
          <h1 className="text-[36px] sm:text-[54px] lg:text-[76px] xl:text-[88px] font-medium leading-[0.98] tracking-[-0.02em] text-black mb-6 sm:mb-10">
            WHERE CARE<br />
            BECOMES<br />
            HUMAN.
          </h1>
          <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-neutral-600 leading-[1.5] max-w-md mb-8 sm:mb-12 font-light">
            Advanced healthcare built around precision, expertise and compassion.
          </p>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center bg-black text-white text-[13px] font-semibold tracking-[0.04em] uppercase px-8 py-[18px] border border-black hover:bg-white hover:text-black transition-all duration-300 w-full sm:w-max text-center"
            >
              BOOK AN APPOINTMENT &rarr;
            </Link>
            <a 
              href="#explore" 
              className="text-[13px] font-semibold tracking-[0.04em] uppercase text-black hover:text-neutral-500 transition-colors py-2 sm:py-0 text-center sm:text-left"
            >
              EXPLORE OUR CARE
            </a>
          </div>
        </motion.div>

        {/* Right Cinematic Image (Dynamic Width) - Desktop Only (z-20 overlays cleanly on scroll) */}
        <motion.div 
          style={{ width: videoWidth }}
          className="hidden lg:flex absolute right-0 top-0 h-full items-center justify-center bg-neutral-100 origin-right z-20 shadow-[-12px_0_30px_rgba(0,0,0,0.06)]"
        >
          {/* Subtle overlay to ensure it feels unified and calm */}
          <div className="absolute inset-0 bg-black/5 z-10 pointer-events-none" />
          
          <img 
            src="/hero_image.png" 
            alt="Hero background"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Bottom Details - Overlaying both with clean scroll fade */}
        <motion.div 
          style={{ opacity: scrollIndicatorOpacity }}
          className="hidden sm:flex absolute bottom-8 lg:bottom-12 left-0 w-full px-6 sm:px-8 lg:px-16 justify-between items-end z-30 pointer-events-none"
        >
          <div className="hidden md:block"></div>

          <div className="flex flex-col items-center gap-4">
            <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-black" style={{ writingMode: 'vertical-rl' }}>
              SCROLL TO EXPLORE
            </span>
            <div className="w-[1px] h-12 bg-black/20 overflow-hidden relative">
              <motion.div 
                animate={{ y: [0, 48] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                className="w-full h-full bg-black absolute top-[-100%]"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
