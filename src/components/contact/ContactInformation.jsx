import React from 'react';
import { motion } from 'framer-motion';

export function ContactInformation({ data, onSelectAction }) {
  const handleScrollToDirections = (e) => {
    e.preventDefault();
    const el = document.getElementById('find-sabari');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="get-in-touch" className="w-full py-16 md:py-24 border-b border-neutral-200 bg-white">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-12 border-b border-neutral-200">
          <div>
            <span className="text-[12px] font-mono tracking-[0.2em] uppercase text-neutral-400 block mb-2">
              01 // DIRECT CHANNELS
            </span>
            <h2 className="text-[32px] sm:text-[42px] font-display font-light text-black tracking-tight uppercase">
              {data.sectionTitle}
            </h2>
          </div>
          <p className="text-[14px] text-neutral-500 font-light max-w-md mt-4 md:mt-0 leading-relaxed">
            {data.description}
          </p>
        </div>

        {/* Channels Grid: Editorial Minimalist Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 divide-y md:divide-y-0 md:divide-x divide-neutral-200">
          {data.channels.map((channel, idx) => {
            const isDirections = channel.label === 'CAMPUS ADDRESS';

            return (
              <motion.div
                key={channel.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                className={`flex flex-col justify-between pt-6 md:pt-0 ${idx > 0 ? 'md:pl-8 lg:pl-12' : ''}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-neutral-400">
                      {channel.label}
                    </span>
                    {channel.isEmergency && (
                      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 text-[10px] font-mono tracking-wider text-rose-600 bg-rose-50 border border-rose-200 uppercase font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse"></span>
                        CRITICAL
                      </span>
                    )}
                  </div>

                  <div className="text-[20px] sm:text-[22px] font-medium text-black tracking-tight mb-2">
                    {channel.primary}
                  </div>

                  <p className="text-[13px] text-neutral-500 font-light leading-relaxed mb-6">
                    {channel.secondary}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-150">
                  {isDirections ? (
                    <a
                      href="#find-sabari"
                      onClick={handleScrollToDirections}
                      className="group inline-flex items-center gap-2 text-[12px] font-mono font-semibold tracking-wider uppercase text-black hover:text-neutral-600 transition-colors cursor-pointer"
                    >
                      <span>{channel.action}</span>
                    </a>
                  ) : (
                    <a
                      href={channel.href}
                      className="group inline-flex items-center gap-2 text-[12px] font-mono font-semibold tracking-wider uppercase text-black hover:text-neutral-600 transition-colors"
                    >
                      <span>{channel.action}</span>
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
