import React, { useEffect, useState } from 'react';
import { motion, useAnimation, useReducedMotion } from 'framer-motion';
import { BrandLogo } from '../brand/BrandLogo';

export function Preloader({ onComplete, className = "" }) {
  const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 });
  const circleControls = useAnimation();
  const brandControls = useAnimation();
  const containerControls = useAnimation();
  const prefersReducedMotion = useReducedMotion();

  // Prevent scrolling while preloader is active
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Get accurate window dimensions on mount
  useEffect(() => {
    setWindowDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    async function sequence() {
      const diagonal = Math.hypot(windowDimensions.width, windowDimensions.height);
      const targetScale = (diagonal / 12) + 2; // +2 for safety margin

      // If user prefers reduced motion, skip the expansion and just fade
      if (prefersReducedMotion) {
        circleControls.set({ scale: targetScale });
        await brandControls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
        await new Promise(r => setTimeout(r, 1000));
        await containerControls.start({ opacity: 0, transition: { duration: 0.5 } });
        onComplete?.();
        return;
      }

      // Stage 1: Hold the initial white screen with tiny dot
      await new Promise(resolve => setTimeout(resolve, 300));

      // Stage 2: Circle Expansion
      await circleControls.start({
        scale: targetScale,
        transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] }
      });

      // Stage 3: Brand Reveal
      await brandControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
      });

      // Stage 4: Hold
      await new Promise(resolve => setTimeout(resolve, 600));

      // Stage 5: Page Reveal
      await containerControls.start({
        opacity: 0,
        transition: { duration: 0.6, ease: "easeInOut" }
      });

      onComplete?.();
    }

    if (windowDimensions.width > 0) {
      sequence();
    }
  }, [windowDimensions, circleControls, brandControls, containerControls, prefersReducedMotion, onComplete]);

  return (
    <motion.div
      animate={containerControls}
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white ${className}`}
    >
      {/* Expanding Black Circle */}
      <motion.div
        initial={{ scale: 1 }}
        animate={circleControls}
        className="absolute w-[12px] h-[12px] bg-black rounded-full"
      />
      
      {/* Brand Reveal */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={brandControls}
        className="relative z-10"
      >
        <BrandLogo size="lg" dark={true} />
      </motion.div>
    </motion.div>
  );
}
