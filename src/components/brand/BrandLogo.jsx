import React from 'react';

export function BrandLogo({ className = "", size = "md", dark = false }) {
  const sizeClasses = {
    sm: { title: "text-xl", subtitle: "text-[0.6rem]" },
    md: { title: "text-3xl", subtitle: "text-[0.75rem]" },
    lg: { title: "text-5xl", subtitle: "text-sm" },
  };

  const currentSize = sizeClasses[size] || sizeClasses.md;
  const textColor = dark ? "text-white" : "text-black";

  return (
    <div className={`flex flex-col items-center justify-center font-display ${className}`}>
      <span className={`font-semibold tracking-tight leading-none ${currentSize.title} ${textColor} transition-colors duration-300`}>
        Sabari
      </span>
      <span className={`font-medium tracking-[0.25em] uppercase opacity-70 mt-1 ${currentSize.subtitle} ${textColor} transition-colors duration-300`}>
        Hospital
      </span>
    </div>
  );
}
