import React from 'react';
import { Link } from 'react-router-dom';
import { BrandLogo } from '../components/brand/BrandLogo';
import { useAppointment } from '../context/AppointmentContext';

export function Footer() {
  const { openAppointmentModal } = useAppointment();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer data-nav-theme="dark" className="w-full bg-[#0a0a0a] text-white pt-16 sm:pt-24 lg:pt-32 pb-8 px-6 lg:px-16 relative overflow-hidden flex flex-col justify-between">
      
      {/* Top Statement & Action Strip */}
      <div className="max-w-[1600px] w-full mx-auto flex flex-col lg:flex-row lg:items-end justify-between gap-10 lg:gap-12 border-b border-white/[0.06] pb-12 sm:pb-16 lg:pb-24">
        <div className="max-w-3xl">
          <h2 className="text-[34px] sm:text-[54px] lg:text-[80px] font-medium tracking-[-0.03em] leading-[1.05] text-white mb-6 sm:mb-10">
            Ready to prioritize<br />
            <span className="text-white/30">your health?</span>
          </h2>
          <button
            type="button"
            onClick={() => openAppointmentModal()}
            className="group inline-flex items-center justify-center px-8 py-4 bg-white text-black text-[12px] font-semibold tracking-[0.15em] uppercase rounded-full hover:bg-neutral-200 transition-all duration-300 w-full sm:w-auto"
          >
            <span>Book a Consultation</span>
            <span className="ml-3 group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
          </button>
        </div>
        
        <div className="flex flex-col gap-3 sm:gap-4 text-[14px] lg:text-right">
          <p className="text-white/40 font-mono tracking-widest uppercase text-[10px] mb-1">Direct Enquiries</p>
          <a href="mailto:sabarimultispecialityhospital@gmail.com" className="text-[15px] sm:text-lg lg:text-xl font-light hover:text-white/80 transition-colors break-all">sabarimultispecialityhospital@gmail.com</a>
          <p className="text-white/40 font-mono tracking-widest uppercase text-[10px] mt-4 sm:mt-6 mb-1">Location</p>
          <p className="text-white/80 leading-relaxed font-light text-base sm:text-lg">Coimbatore, Tamil Nadu<br/>India</p>
        </div>
      </div>

      {/* Massive Typography */}
      <div className="max-w-[1600px] w-full mx-auto pt-10 sm:pt-16 pb-2 overflow-hidden flex flex-col items-center pointer-events-none select-none">
        <h1 className="text-[11vw] leading-none font-bold tracking-[-0.04em] text-white/[0.02] text-center whitespace-nowrap overflow-hidden max-w-full">
          SABARI HOSPITAL
        </h1>
        
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono uppercase tracking-widest text-white/30 mt-12">
          <p>&copy; {new Date().getFullYear()} Sabari Hospital.</p>
          <div className="flex items-center gap-6">
            <Link to="/contact" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Terms of Service</Link>
            <button
              onClick={scrollToTop}
              className="ml-4 flex items-center justify-center w-8 h-8 rounded-full border border-white/10 hover:bg-white hover:text-black hover:border-white transition-all duration-300"
              aria-label="Back to top"
            >
              &uarr;
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
