import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export function SimpleDropdown({ isOpen, data, onItemClick }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="absolute left-0 top-full mt-[24px] w-[240px] bg-white border border-neutral-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] rounded-md z-40 overflow-hidden"
        >
          <div className="py-2">
            {data.items.map((item, idx) => {
              const label = typeof item === 'string' ? item : item.label;
              const href = typeof item === 'object' && item.href ? item.href : null;

              if (href) {
                return (
                  <Link
                    key={idx}
                    to={href}
                    onClick={onItemClick}
                    className="block px-6 py-[10px] text-[14px] text-black font-medium hover:bg-[#f7f7f7] transition-colors"
                  >
                    {label}
                  </Link>
                );
              }

              return (
                <a 
                  key={idx}
                  href="#"
                  onClick={onItemClick}
                  className="block px-6 py-[10px] text-[14px] text-black font-medium hover:bg-[#f7f7f7] transition-colors"
                >
                  {label}
                </a>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
