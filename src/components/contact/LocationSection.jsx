import React from 'react';
import { motion } from 'framer-motion';

export function LocationSection({ data }) {
  const encodedAddress = encodeURIComponent(data.address);
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

  return (
    <section id="find-sabari" className="w-full py-16 md:py-24 border-b border-neutral-200 bg-white">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-12 border-b border-neutral-200">
          <div>
            <span className="text-[12px] font-mono tracking-[0.2em] uppercase text-neutral-400 block mb-2">
              04 // CAMPUS LOCATION & ACCESS
            </span>
            <h2 className="text-[32px] sm:text-[44px] font-display font-light text-black tracking-tight uppercase">
              {data.title}
            </h2>
          </div>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-[12px] font-mono font-semibold tracking-wider uppercase text-black hover:opacity-70 transition-opacity mt-4 md:mt-0"
          >
            <span>Open in Google Maps</span>
            <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
          </a>
        </div>

        {/* Location Grid: Information + Architectural Map Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Campus Information & Hours */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Address */}
            <div className="border-b border-neutral-200 pb-6">
              <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-neutral-400 block mb-2">
                HOSPITAL ADDRESS
              </span>
              <p className="text-[20px] font-medium text-black leading-snug tracking-tight mb-2">
                {data.address}
              </p>
              <p className="text-[14px] text-neutral-500 font-light">
                {data.landmark}
              </p>
            </div>

            {/* Operating Timings */}
            <div className="border-b border-neutral-200 pb-6">
              <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-neutral-400 block mb-3">
                OPENING INFORMATION & HOURS
              </span>
              <div className="space-y-3">
                {data.timings.map((item) => (
                  <div key={item.label} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between text-[13px] gap-1">
                    <span className="font-medium text-black">{item.label}</span>
                    <span className="font-mono text-neutral-500">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Parking & Access */}
            <div className="pt-2">
              <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-neutral-400 block mb-2">
                PARKING & ACCESSIBILITY
              </span>
              <p className="text-[14px] text-neutral-600 font-light leading-relaxed mb-6">
                {data.parking}
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:+18001234567"
                  className="inline-flex items-center gap-2 px-5 py-3 border border-neutral-300 text-[12px] font-mono uppercase font-medium text-black hover:border-black transition-colors"
                >
                  <span>Front Desk: +1 (800) 123-4567</span>
                </a>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-black text-white text-[12px] font-mono uppercase font-semibold hover:bg-neutral-800 transition-colors"
                >
                  <span>Get Navigation Directions</span>
                  <span>&rarr;</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right: Architectural Map Placeholder with Minimalist Controls */}
          <div className="lg:col-span-7">
            <div className="relative w-full h-[400px] md:h-[480px] bg-neutral-100 border border-neutral-200 overflow-hidden flex flex-col justify-between p-6 md:p-8">
              
              {/* Subtle architectural schematic grid lines */}
              <div 
                className="absolute inset-0 opacity-[0.07] pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
                  backgroundSize: '40px 40px'
                }}
              />

              {/* Map Top Metadata Header */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="bg-white/90 backdrop-blur-xs px-3 py-1.5 border border-neutral-200 text-[11px] font-mono tracking-widest uppercase text-neutral-600">
                  <span>SABARI CAMPUS SCHEMATIC</span>
                </div>
                <div className="hidden sm:flex items-center gap-2 bg-white/90 backdrop-blur-xs px-3 py-1.5 border border-neutral-200 text-[11px] font-mono text-neutral-500 uppercase">
                  <span className="w-2 h-2 rounded-full bg-black"></span>
                  <span>LAT / LONG POSITION VERIFIED</span>
                </div>
              </div>

              {/* Central Map Pin & Hospital Marker */}
              <div className="relative z-10 my-auto self-center flex flex-col items-center text-center">
                <div className="relative flex items-center justify-center">
                  <span className="absolute w-12 h-12 rounded-full bg-black/10 animate-ping"></span>
                  <div className="relative w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-serif text-[18px] font-bold shadow-md">
                    S
                  </div>
                </div>
                <div className="mt-3 bg-white px-4 py-2 border border-neutral-200 shadow-sm max-w-xs">
                  <div className="text-[13px] font-semibold text-black tracking-tight uppercase">
                    Sabari Hospitals Main Campus
                  </div>
                  <div className="text-[11px] font-mono text-neutral-500 mt-0.5">
                    123 Medical Boulevard
                  </div>
                </div>
              </div>

              {/* Bottom Controls / Direction Launcher */}
              <div className="relative z-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-4 border-t border-neutral-200 bg-white/90 backdrop-blur-xs p-4 border">
                <div className="text-[12px] font-light text-neutral-600">
                  Ready for live GPS routing via your navigation app
                </div>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-black text-white text-[11px] font-mono font-semibold uppercase hover:bg-neutral-800 transition-colors"
                >
                  <span>Launch Directions</span>
                  <span>&rarr;</span>
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
