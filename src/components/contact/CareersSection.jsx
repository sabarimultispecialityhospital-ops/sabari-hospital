import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export function CareersSection({ data }) {
  return (
    <section id="careers" className="w-full py-16 md:py-20 border-b border-neutral-200 bg-white">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 py-4">
          
          <div className="max-w-2xl">
            <span className="text-[12px] font-mono tracking-[0.2em] uppercase text-neutral-400 block mb-2">
              05 // CLINICAL & ADMINISTRATIVE TALENT
            </span>
            <h2 className="text-[28px] sm:text-[36px] font-display font-light text-black tracking-tight uppercase mb-2">
              {data.title}
            </h2>
            <p className="text-[15px] text-neutral-600 font-light leading-relaxed">
              {data.text}
            </p>
          </div>

          <div className="shrink-0">
            <Link
              to={data.href}
              className="group inline-flex items-center gap-3 px-7 py-4 border border-black text-black text-[13px] font-mono font-semibold tracking-wider uppercase hover:bg-black hover:text-white transition-all duration-200"
            >
              <span>{data.ctaText}</span>
              <span className="group-hover:translate-x-1.5 transition-transform duration-200">&rarr;</span>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
