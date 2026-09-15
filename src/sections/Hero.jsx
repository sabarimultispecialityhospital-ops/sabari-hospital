import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function Hero() {
  const containerRef = useRef(null);
  
  // Track scroll progress over this section
  // It's 200vh tall so we have plenty of scroll distance for the animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Expand video from 55% width to 100% width
  const videoWidth = useTransform(scrollYProgress, [0, 1], ["55%", "100%"]);
  
  // Shift typography up and fade it out
  const textY = useTransform(scrollYProgress, [0, 0.8], ["0%", "-50%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section 
      ref={containerRef} 
      data-nav-theme="light" 
      className="relative w-full bg-white"
      style={{ height: "200vh" }} // 200vh gives us room to scroll while sticky
    >
      {/* Sticky Container */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex items-center justify-between">
        
        {/* Left Editorial Content (45% space) */}
        <motion.div 
          style={{ y: textY, opacity: textOpacity }}
          className="w-[45%] h-full flex flex-col justify-center px-8 lg:px-16 pt-[80px]"
        >
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-8 block">
            MULTI SPECIALITY HOSPITAL
          </span>
          <h1 className="text-[52px] lg:text-[76px] xl:text-[88px] font-medium leading-[0.95] tracking-[-0.02em] text-black mb-10">
            WHERE CARE<br />
            BECOMES<br />
            HUMAN.
          </h1>
          <p className="text-[18px] lg:text-[20px] text-neutral-600 leading-[1.5] max-w-md mb-12">
            Advanced healthcare built around precision, expertise and compassion.
          </p>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-8">
            <a 
              href="/book-appointment" 
              className="inline-flex items-center justify-center bg-black text-white text-[13px] font-semibold tracking-[0.04em] uppercase px-8 py-[18px] border border-black hover:bg-white hover:text-black transition-all duration-300 w-max"
            >
              BOOK AN APPOINTMENT &rarr;
            </a>
            <a 
              href="#explore" 
              className="text-[13px] font-semibold tracking-[0.04em] uppercase text-black hover:text-neutral-500 transition-colors"
            >
              EXPLORE OUR CARE
            </a>
          </div>
        </motion.div>

        {/* Right Cinematic Video (Dynamic Width) */}
        <motion.div 
          style={{ width: videoWidth }}
          className="absolute right-0 top-0 h-full flex items-center justify-center bg-neutral-100 origin-right"
        >
          {/* Subtle overlay to ensure it feels unified and calm */}
          <div className="absolute inset-0 bg-black/5 z-10 pointer-events-none" />
          
          {/* Placeholder video from a reliable high-quality source (Pexels / Mixkit) - Using an abstract/calm video to match instructions */}
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/hero_video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>

        {/* Bottom Details - Overlaying both */}
        <motion.div 
          style={{ opacity: textOpacity }}
          className="absolute bottom-12 left-0 w-full px-8 lg:px-16 flex justify-between items-end z-20 pointer-events-none"
        >
          {/* Removed 01 / 05 index div */}
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
