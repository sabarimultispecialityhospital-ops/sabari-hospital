import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone } from 'lucide-react';

const HERO_IMAGES = [
  "/hero_image.png",
  "/hero/image-10.png",
  "/hero/image-11.png",
  "/hero/image-12.png",
  "/hero/image-13.png",
  "/hero/image-14.png",
  "/hero/image-16.png",
  "/hero/image-17.png"
];

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      data-nav-theme="light" 
      className="relative w-full bg-white min-h-[calc(100vh-88px)] lg:h-[calc(100vh-88px)] mt-[72px] sm:mt-[88px] overflow-hidden"
    >
      {/* Container */}
      <div className="relative w-full h-full min-h-[calc(100vh-88px)] overflow-hidden flex items-center justify-between">
        
        {/* Left Editorial Content (On mobile: vertically flows with prominent image card below text) */}
        <div 
          className="w-full lg:w-[45%] h-full flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-5 sm:px-8 lg:px-16 pt-8 pb-12 lg:py-0 z-10"
        >
          <span className="text-[12px] sm:text-[14px] font-bold tracking-[0.22em] uppercase text-[#00A99D] mb-3 sm:mb-6 block text-center lg:text-left">
            MULTI SPECIALITY HOSPITAL
          </span>
          <h1 className="text-[36px] xs:text-[42px] sm:text-[58px] lg:text-[76px] xl:text-[88px] font-medium leading-[1.0] sm:leading-[0.98] tracking-[-0.03em] text-[#0B4A8B] mb-4 sm:mb-8 text-center lg:text-left">
            YOUR HEALTH<br />
            IS OUR<br />
            <span className="text-[#00A99D]">PRIORITY.</span>
          </h1>
          <p className="text-[15px] sm:text-[19px] lg:text-[22px] text-neutral-600 leading-[1.45] max-w-md mb-6 sm:mb-10 font-normal text-center lg:text-left mx-auto lg:mx-0">
            <span className="font-semibold text-neutral-900 block tracking-wide">SABARI HOSPITAL</span>
            Where expertise and empathy align.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-6 w-full sm:w-auto mb-8 lg:mb-0">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center gap-2 bg-[#0B4A8B] text-white text-[13px] font-semibold tracking-[0.06em] uppercase px-6 sm:px-8 py-3.5 sm:py-4 border border-[#0B4A8B] hover:bg-[#00A99D] hover:border-[#00A99D] transition-all duration-300 w-full sm:w-auto text-center shadow-sm whitespace-nowrap"
            >
              <span>BOOK AN APPOINTMENT</span>
              <span>&rarr;</span>
            </Link>
            <a 
              href="#centres-of-excellence" 
              className="text-[13px] font-semibold tracking-[0.06em] uppercase text-[#0B4A8B] hover:text-[#00A99D] transition-colors py-2 sm:py-0 text-center whitespace-nowrap"
            >
              EXPLORE OUR CARE
            </a>
          </div>

          {/* Dedicated Mobile Image Slideshow Card (Matching Reference Layout) */}
          <div className="lg:hidden w-full max-w-lg mx-auto mt-2">
            <div className="relative w-full aspect-[4/3] xs:aspect-[16/11] rounded-3xl overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.12)] border border-neutral-200/90 bg-neutral-900 group">
              <AnimatePresence mode="sync">
                <motion.img 
                  key={currentIndex}
                  src={HERO_IMAGES[currentIndex]} 
                  alt={`Sabari Hospital slide ${currentIndex + 1}`}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </AnimatePresence>

              {/* Gradient Bottom Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none" />

              {/* Slide Counter Badge (Top-Left) */}
              <div className="absolute top-3.5 left-3.5 z-20 px-2.5 py-1 rounded-full bg-black/55 backdrop-blur-md border border-white/15 text-[10px] font-mono tracking-widest text-white/90">
                {String(currentIndex + 1).padStart(2, '0')} / {String(HERO_IMAGES.length).padStart(2, '0')}
              </div>

              {/* Progress Dots Indicator (Bottom-Right) */}
              <div className="absolute bottom-3.5 right-3.5 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/55 backdrop-blur-md border border-white/10">
                {HERO_IMAGES.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setCurrentIndex(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      currentIndex === i ? 'w-4 bg-white' : 'w-1.5 bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Image Slideshow - Desktop Only (Loops every 3 seconds, cross-fading smoothly) */}
        <div 
          className="hidden lg:flex absolute right-0 top-0 h-full w-[55%] items-center justify-center bg-neutral-900 z-20 shadow-[-12px_0_30px_rgba(0,0,0,0.06)] overflow-hidden"
        >
          {/* Subtle overlay to ensure it feels unified and calm */}
          <div className="absolute inset-0 bg-black/5 z-10 pointer-events-none" />
          
          <AnimatePresence mode="sync">
            <motion.img 
              key={currentIndex}
              src={HERO_IMAGES[currentIndex]} 
              alt={`Sabari Hospital slide ${currentIndex + 1}`}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>

          {/* Dots Indicator */}
          <div className="absolute bottom-6 right-8 z-30 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md">
            {HERO_IMAGES.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrentIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === i ? 'w-5 bg-white' : 'w-1.5 bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Details */}
        <div 
          className="hidden sm:flex absolute bottom-8 lg:bottom-12 left-0 w-full px-6 sm:px-8 lg:px-16 justify-between items-end z-30 pointer-events-none"
        >
          <div className="hidden md:block"></div>

          <div className="flex flex-col items-center gap-4">
            <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#0B4A8B]" style={{ writingMode: 'vertical-rl' }}>
              SCROLL TO EXPLORE
            </span>
            <div className="w-[1px] h-12 bg-[#0B4A8B]/20 overflow-hidden relative">
              <motion.div 
                animate={{ y: [0, 48] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                className="w-full h-full bg-[#00A99D] absolute top-[-100%]"
              />
            </div>
          </div>
        </div>

      </div>

      {/* Floating Call & WhatsApp Action Buttons (Mobile View - matching reference) */}
      <div className="fixed right-3 bottom-20 z-[990] flex flex-col gap-2.5 lg:hidden">
        {/* Phone Call Button */}
        <a
          href="tel:+914222442200"
          className="w-11 h-11 rounded-2xl bg-[#0B4A8B] text-white flex items-center justify-center shadow-[0_8px_20px_rgba(11,74,139,0.35)] hover:bg-[#00A99D] active:scale-95 transition-all"
          aria-label="Call Hospital"
        >
          <Phone className="w-5 h-5" />
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919443335152"
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 rounded-2xl bg-[#25D366] text-white flex items-center justify-center shadow-[0_8px_20px_rgba(37,211,102,0.35)] hover:bg-[#20ba5a] active:scale-95 transition-all"
          aria-label="Chat on WhatsApp"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
        </a>
      </div>
    </section>
  );
}
