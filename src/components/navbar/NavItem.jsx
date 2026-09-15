import React from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

export function NavItem({ label, href, hasDropdown, isActive, onClick, className = "", theme = "light" }) {
  const isDark = theme === "dark";
  
  const innerContent = (
    <span className="relative flex items-center gap-2 py-1">
      {label}
      {hasDropdown && (
        <motion.div
          animate={{ rotate: isActive ? 180 : 0 }}
          className="group-hover:translate-y-[1px] transition-transform duration-200"
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={14} className="opacity-70 group-hover:opacity-100 transition-opacity" />
        </motion.div>
      )}
      {/* Underline indicator */}
      <div 
        className={`absolute bottom-0 left-0 right-0 h-[1.5px] transition-transform duration-[220ms] ease-out origin-left ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'} ${isDark ? 'bg-white' : 'bg-black'}`}
      />
    </span>
  );

  const baseClasses = `relative flex items-center h-full text-[13px] font-semibold tracking-[0.04em] uppercase transition-colors duration-300 group ${className} ${
    isDark 
      ? (isActive ? 'text-white' : 'text-neutral-400 hover:text-white') 
      : (isActive ? 'text-black' : 'text-neutral-600 hover:text-black')
  }`;

  if (href) {
    return (
      <a href={href} className={baseClasses}>
        {innerContent}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      {innerContent}
    </button>
  );
}
