import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function MegaMenu({ isOpen, children, fullWidth = true }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className={`absolute left-0 top-full bg-white border-t border-b border-neutral-200 shadow-sm overflow-hidden z-40 ${fullWidth ? 'w-full' : 'w-[400px] left-auto right-0'}`}
          style={{ maxHeight: 'calc(100vh - 88px)' }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
