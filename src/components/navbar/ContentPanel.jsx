import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function ContentPanel({ activeCategoryData, footerAction }) {
  if (!activeCategoryData) return null;

  return (
    <div className="flex-1 bg-white relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategoryData.id}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 10 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="absolute inset-0 py-10 px-12 lg:px-16 overflow-y-auto"
        >
          <h4 className="text-[12px] font-semibold tracking-wider text-neutral-400 uppercase mb-8">
            {activeCategoryData.label}
          </h4>
          
          <div className="grid grid-cols-2 xl:grid-cols-3 gap-x-16 gap-y-6">
            {activeCategoryData.items.map((item, idx) => (
              <a 
                href="#" 
                key={idx}
                className="group block border-b border-neutral-100 pb-3"
              >
                <span className="text-[15px] text-black font-medium transition-colors group-hover:text-neutral-600">
                  {item}
                </span>
              </a>
            ))}
          </div>


        </motion.div>
      </AnimatePresence>
    </div>
  );
}
