import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { centreCategories } from '../../data/centresOfExcellenceData';

export function CentreNavMenu({ isOpen, onClose }) {
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
            
            {/* Top Bar */}
            <div className="flex items-center justify-between pb-6 mb-8 border-b border-neutral-100">
              <h3 className="text-xl font-medium text-black">Centres of Excellence</h3>
              <Link
                to="/centre-of-excellence"
                onClick={onClose}
                className="text-[12px] font-semibold tracking-wider uppercase text-black hover:opacity-70 transition-opacity inline-flex items-center gap-2"
              >
                <span>View All Specialities</span>
                <span>&rarr;</span>
              </Link>
            </div>

            {/* Simple Grid Layout */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
              {centreCategories.map((cat) => (
                <div key={cat.id} className="flex flex-col">
                  <Link
                    to={`/centre-of-excellence/${cat.slug}`}
                    onClick={onClose}
                    className="text-base font-semibold text-black mb-4 hover:text-neutral-600 transition-colors"
                  >
                    {cat.title}
                  </Link>
                  <ul className="flex flex-col gap-2.5">
                    {cat.services.map((svc) => (
                      <li key={svc.slug}>
                        <Link
                          to={`/centre-of-excellence/${cat.slug}/${svc.slug}`}
                          onClick={onClose}
                          className="text-[14px] text-neutral-600 hover:text-black transition-colors"
                        >
                          {svc.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
