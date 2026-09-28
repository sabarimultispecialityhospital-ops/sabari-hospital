import React, { useEffect, useRef } from 'react';
import { numbersData } from '../data/landingData';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';

function AnimatedNumber({ value }) {
  // Extract number and suffix from string (e.g. "100K+" -> num=100, suffix="K+")
  const match = value.match(/(\d+)(.*)/);
  const targetNumber = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : '';

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
    mass: 1
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(targetNumber);
    }
  }, [isInView, targetNumber, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.round(latest) + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref}>{0 + suffix}</span>;
}

export function NumbersSection() {
  return (
    <section data-nav-theme="light" className="w-full bg-white py-12 sm:py-16 lg:py-[80px] px-6 lg:px-16 border-y border-neutral-100">
      <div className="max-w-[1600px] w-full mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 sm:gap-x-8 gap-y-10 sm:gap-y-16">
          {numbersData.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
              className={`flex flex-col ${idx !== 0 ? 'lg:border-l lg:border-neutral-200 lg:pl-16' : ''}`}
            >
              <h3 className="text-[38px] sm:text-[56px] lg:text-[72px] font-medium leading-none tracking-tight text-[#0B4A8B] mb-3 sm:mb-4">
                <AnimatedNumber value={stat.value} />
              </h3>
              <p className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-[#00A99D]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
