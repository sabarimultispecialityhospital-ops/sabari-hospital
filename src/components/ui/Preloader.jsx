import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

export function Preloader({ onComplete, className = "" }) {
  const logoControls = useAnimation();
  const containerControls = useAnimation();

  // Prevent scrolling while preloader is active
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    let isMounted = true;

    async function sequence() {
      // 1. Logo smoothly fades and scales in
      await logoControls.start({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
      });

      // 2. Brief pause for pleasant brand recognition
      await new Promise(resolve => setTimeout(resolve, 800));

      // 3. Smooth fade out of the white preloader curtain
      if (isMounted) {
        await containerControls.start({
          opacity: 0,
          transition: { duration: 0.5, ease: "easeInOut" }
        });
        onComplete?.();
      }
    }

    sequence();

    return () => {
      isMounted = false;
    };
  }, [logoControls, containerControls, onComplete]);

  return (
    <motion.div
      animate={containerControls}
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white ${className}`}
    >
      {/* Hospital Logo only, centered on clean white background */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={logoControls}
        className="flex items-center justify-center p-6 select-none"
      >
        <img 
          src="/logo.png" 
          alt="Sabari Hospital" 
          className="h-20 sm:h-24 md:h-28 w-auto object-contain"
        />
      </motion.div>
    </motion.div>
  );
}
