import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Footer } from '../../sections/Footer';
import { centreCategories } from '../../data/centresOfExcellenceData';

export function CentresLanding() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const activeCategory = centreCategories[activeCategoryIndex] || centreCategories[0];

  return (
    <div data-nav-theme="light" className="w-full min-h-screen bg-white text-black selection:bg-neutral-200">
      
      {/* 1. Hero */}
      <section className="w-full pt-32 pb-16 lg:pt-40 lg:pb-24 px-6 lg:px-16 border-b border-neutral-200 bg-white">
        <div className="max-w-[1600px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">
          
          <div className="lg:col-span-7 flex flex-col">
            <span className="text-[12px] font-mono font-semibold tracking-[0.25em] uppercase text-neutral-400 mb-6 block">
              02 &mdash; CENTRE OF EXCELLENCE
            </span>
            
            <h1 className="text-[52px] sm:text-[76px] lg:text-[100px] font-medium leading-[0.93] tracking-[-0.035em] text-black mb-8">
              CENTRE<br />
              OF<br />
              EXCELLENCE.
            </h1>
            
            <p className="text-[18px] sm:text-[21px] text-neutral-600 leading-relaxed max-w-xl font-light">
              Specialised care, clinical expertise and coordinated services across the hospital.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-end">
            <div className="relative aspect-[16/11] w-full overflow-hidden bg-neutral-100 border border-neutral-200">
              <img 
                src="/centres/landing-hero.jpg" 
                alt="Specialist clinical consultation environment at Sabari Hospital" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center justify-between text-[11px] font-mono tracking-widest text-neutral-400 uppercase mt-3">
              <span>EDITORIAL CLINICAL INDEX</span>
              <span>06 SPECIALISED CENTRES</span>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Main Editorial Service Index */}
      <section className="w-full py-20 lg:py-32 px-6 lg:px-16 bg-white">
        <div className="max-w-[1600px] w-full mx-auto">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-12 border-b border-neutral-200">
            <div>
              <span className="text-[11px] font-mono tracking-widest uppercase text-neutral-400 block mb-2">
                DISCOVER OUR DEPARTMENTS
              </span>
              <h2 className="text-[28px] sm:text-[36px] font-medium tracking-tight text-black">
                Clinical Chapters & Specialities.
              </h2>
            </div>
            <p className="text-[14px] text-neutral-500 font-light mt-3 md:mt-0 max-w-md">
              Hover over any discipline to explore its dedicated services and clinical team environment.
            </p>
          </div>

          {/* Desktop Dual-Column Editorial Composition */}
          <div className="hidden lg:grid grid-cols-12 gap-16 items-start">
            
            {/* Left: Category Chapters List */}
            <div className="col-span-7 flex flex-col divide-y divide-neutral-200 border-t border-b border-neutral-200">
              {centreCategories.map((cat, idx) => {
                const isActive = activeCategoryIndex === idx;

                return (
                  <div
                    key={cat.id}
                    onMouseEnter={() => setActiveCategoryIndex(idx)}
                    onFocus={() => setActiveCategoryIndex(idx)}
                    className="py-10 transition-colors group cursor-default"
                  >
                    <div className="flex items-baseline justify-between mb-4">
                      <div className="flex items-baseline gap-6">
                        <span className={`text-[13px] font-mono tracking-widest transition-colors ${isActive ? 'text-black font-semibold' : 'text-neutral-400'}`}>
                          {cat.number}
                        </span>
                        
                        {/* Only intentional link navigates */}
                        <Link 
                          to={`/centre-of-excellence/${cat.slug}`}
                          className={`text-[36px] xl:text-[44px] font-medium tracking-tight leading-none transition-colors ${isActive ? 'text-black' : 'text-neutral-400 hover:text-black'}`}
                        >
                          {cat.title}
                        </Link>
                      </div>

                      <Link
                        to={`/centre-of-excellence/${cat.slug}`}
                        className={`text-[12px] font-mono tracking-wider uppercase transition-opacity flex items-center gap-1 ${isActive ? 'opacity-100 text-black' : 'opacity-0 group-hover:opacity-100 text-neutral-500'}`}
                      >
                        <span>Chapter Details</span>
                        <span>&rarr;</span>
                      </Link>
                    </div>

                    {/* Sub-services reveal smoothly when category is active */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden pl-12 pt-2"
                        >
                          <p className="text-[15px] text-neutral-600 font-light mb-6 max-w-xl leading-relaxed">
                            {cat.shortDescription}
                          </p>
                          
                          <div className="flex flex-wrap gap-x-8 gap-y-3">
                            {cat.services.map((svc) => (
                              <Link
                                key={svc.slug}
                                to={`/centre-of-excellence/${cat.slug}/${svc.slug}`}
                                className="group/item inline-flex items-center gap-2 text-[13px] font-semibold tracking-wide uppercase text-neutral-800 hover:text-black py-1"
                              >
                                <span>{svc.title}</span>
                                <span className="text-neutral-400 group-hover/item:text-black group-hover/item:translate-x-1 transition-all duration-200">
                                  &rarr;
                                </span>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Right: Embedded Editorial Visual Window */}
            <div className="col-span-5 sticky top-36">
              <div className="border border-neutral-200 p-6 bg-neutral-50/50">
                
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-200 border border-neutral-200">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeCategory.id}
                      src={activeCategory.heroImage}
                      alt={activeCategory.alt}
                      initial={{ opacity: 0, scale: 1.03 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.45, ease: "easeOut" }}
                      className="w-full h-full object-cover"
                    />
                  </AnimatePresence>
                </div>

                <div className="mt-6 flex flex-col">
                  <div className="flex items-center justify-between text-[11px] font-mono tracking-widest text-neutral-400 uppercase mb-2">
                    <span>{activeCategory.number} // {activeCategory.title}</span>
                    <span>{activeCategory.services.length} SERVICES</span>
                  </div>
                  
                  <h4 className="text-[17px] font-medium text-black leading-snug tracking-tight mb-2">
                    {activeCategory.tagline}
                  </h4>
                  
                  <div className="pt-4 mt-2 border-t border-neutral-200 flex items-center justify-between">
                    <span className="text-[12px] text-neutral-500 font-light">
                      Explore full clinical department
                    </span>
                    <Link
                      to={`/centre-of-excellence/${activeCategory.slug}`}
                      className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-wider uppercase text-black hover:opacity-70 transition-opacity"
                    >
                      <span>Enter Chapter</span>
                      <span>&rarr;</span>
                    </Link>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Mobile & Tablet Editorial Accordion List */}
          <div className="lg:hidden flex flex-col divide-y divide-neutral-200 border-t border-b border-neutral-200">
            {centreCategories.map((cat) => (
              <div key={cat.id} className="py-8 flex flex-col">
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="text-[12px] font-mono tracking-widest text-neutral-400">
                    {cat.number}
                  </span>
                  <Link 
                    to={`/centre-of-excellence/${cat.slug}`}
                    className="text-[26px] sm:text-[32px] font-medium tracking-tight text-black"
                  >
                    {cat.title}
                  </Link>
                </div>

                <div className="aspect-[16/9] w-full overflow-hidden bg-neutral-100 border border-neutral-200 my-4">
                  <img 
                    src={cat.heroImage} 
                    alt={cat.alt} 
                    className="w-full h-full object-cover"
                  />
                </div>

                <p className="text-[14px] text-neutral-600 font-light mb-5 leading-relaxed">
                  {cat.shortDescription}
                </p>

                <div className="flex flex-col gap-2 pt-2 border-t border-neutral-100">
                  {cat.services.map((svc) => (
                    <Link
                      key={svc.slug}
                      to={`/centre-of-excellence/${cat.slug}/${svc.slug}`}
                      className="inline-flex items-center justify-between py-2 text-[14px] font-medium text-black border-b border-neutral-100 last:border-b-0 hover:text-neutral-600"
                    >
                      <span>{svc.title}</span>
                      <span>&rarr;</span>
                    </Link>
                  ))}
                </div>

                <div className="mt-4 pt-3">
                  <Link
                    to={`/centre-of-excellence/${cat.slug}`}
                    className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-wider uppercase text-black"
                  >
                    <span>View {cat.title} Department</span>
                    <span>&rarr;</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Consultation CTA */}
      <section className="w-full py-20 px-6 lg:px-16 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-[1600px] w-full mx-auto flex flex-col md:flex-row md:items-center justify-between gap-8 p-12 border border-neutral-200 bg-white">
          <div className="flex flex-col">
            <span className="text-[11px] font-mono tracking-widest uppercase text-neutral-400 mb-2">
              APPOINTMENTS & SPECIALIST ACCESS
            </span>
            <h3 className="text-[26px] lg:text-[32px] font-medium tracking-tight text-black">
              Schedule a Consultation.
            </h3>
            <p className="text-[15px] text-neutral-600 font-light mt-1">
              Connect with our medical team for personalized outpatient and specialist consultations.
            </p>
          </div>
          <Link
            to="/contact"
            className="px-8 py-4 bg-black text-white text-[12px] font-semibold tracking-widest uppercase hover:bg-neutral-800 transition-colors self-start md:self-auto shrink-0"
          >
            Book Appointment &rarr;
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
