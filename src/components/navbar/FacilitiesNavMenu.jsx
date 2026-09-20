import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { facilityCategories, facilityServicesData } from '../../data/facilitiesExperienceData';

export function FacilitiesNavMenu({ isOpen, onClose }) {
  const [hoveredCategoryIndex, setHoveredCategoryIndex] = useState(0);

  const activeCategory = facilityCategories[hoveredCategoryIndex] || facilityCategories[0];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="absolute left-0 top-full w-full bg-white border-t border-b border-neutral-200 shadow-sm z-40"
        >
          <div className="max-w-[1600px] mx-auto px-6 lg:px-16 py-10">
            
            {/* Top Bar inside Dropdown */}
            <div className="flex items-center justify-end pb-4 mb-6 border-b border-neutral-200">
              <Link
                to="/facilities"
                onClick={onClose}
                className="text-[12px] font-semibold tracking-wider uppercase text-black hover:opacity-70 transition-opacity inline-flex items-center gap-2"
              >
                <span>Explore Full Facilities</span>
                <span>&rarr;</span>
              </Link>
            </div>

            {/* Main Editorial Grid (Clean 2-Column without Image, matching Centre of Excellence) */}
            <div className="grid grid-cols-12 gap-16 items-start min-h-[300px]">
              
              {/* Left: 7 Numbered Categories */}
              <div className="col-span-5 flex flex-col divide-y divide-neutral-200 border-t border-b border-neutral-200">
                {facilityCategories.map((cat, idx) => {
                  const isActive = hoveredCategoryIndex === idx;

                  return (
                    <div
                      key={cat.id}
                      onMouseEnter={() => setHoveredCategoryIndex(idx)}
                      onFocus={() => setHoveredCategoryIndex(idx)}
                      className="py-3.5 flex items-center justify-between group cursor-default"
                    >
                      <div className="flex items-baseline gap-5">
                        <span className={`text-[12px] font-mono tracking-widest transition-colors ${isActive ? 'text-black font-semibold' : 'text-neutral-400'}`}>
                          {cat.number}
                        </span>
                        
                        {/* Only the link navigates */}
                        <Link
                          to={`/facilities/${cat.slug}`}
                          onClick={onClose}
                          className={`text-[19px] xl:text-[22px] font-medium tracking-tight transition-colors ${isActive ? 'text-black' : 'text-neutral-400 hover:text-black'}`}
                        >
                          {cat.title}
                        </Link>
                      </div>

                      <Link
                        to={`/facilities/${cat.slug}`}
                        onClick={onClose}
                        className={`text-[12px] font-mono tracking-wider uppercase transition-opacity ${isActive ? 'opacity-100 text-black' : 'opacity-0 group-hover:opacity-100 text-neutral-400'}`}
                      >
                        &rarr;
                      </Link>
                    </div>
                  );
                })}
              </div>

              {/* Right: Detailed Sub-Services & Category Details (Clean 2-Column without Image) */}
              <div className="col-span-7 flex flex-col justify-between h-full pl-12 border-l border-neutral-200">
                <div>
                  <h4 className="text-[20px] xl:text-[24px] font-medium text-black leading-snug tracking-tight mb-3">
                    {activeCategory.tagline}
                  </h4>

                  <p className="text-[14px] text-neutral-600 font-light leading-relaxed mb-8 max-w-xl">
                    {activeCategory.shortDescription}
                  </p>

                  <div className="flex flex-col divide-y divide-neutral-150 border-t border-b border-neutral-200">
                    {activeCategory.services.map((svc, sIdx) => {
                      const serviceDetail = facilityServicesData[`${activeCategory.slug}/${svc.slug}`];

                      return (
                        <Link
                          key={svc.slug}
                          to={`/facilities/${activeCategory.slug}/${svc.slug}`}
                          onClick={onClose}
                          className="py-3.5 flex items-center justify-between group/item hover:bg-neutral-50/70 px-3 -mx-3 transition-colors"
                        >
                          <div className="flex items-baseline gap-4">
                            <span className="text-[12px] font-mono text-neutral-400">
                              {activeCategory.number}.0{sIdx + 1}
                            </span>
                            <div>
                              <span className="text-[16px] font-medium text-black group-hover/item:text-neutral-700 transition-colors block">
                                {svc.title}
                              </span>
                              {serviceDetail && (
                                <span className="text-[13px] text-neutral-500 font-light line-clamp-1 mt-0.5">
                                  {serviceDetail.headline}
                                </span>
                              )}
                            </div>
                          </div>

                          <span className="text-neutral-400 group-hover/item:text-black group-hover/item:translate-x-1.5 transition-all text-sm">
                            &rarr;
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-neutral-200 flex items-center justify-between">
                  <span className="text-[13px] text-neutral-500 font-light">
                    Explore all medical facilities and infrastructure
                  </span>
                  <Link
                    to={`/facilities/${activeCategory.slug}`}
                    onClick={onClose}
                    className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-wider uppercase text-black hover:opacity-70 transition-opacity"
                  >
                    <span>View {activeCategory.title} Overview</span>
                    <span>&rarr;</span>
                  </Link>
                </div>

              </div>

            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
