import React from 'react';
import { Link } from 'react-router-dom';
import { BrandLogo } from '../components/brand/BrandLogo';
import { useAppointment } from '../context/AppointmentContext';

export function Footer() {
  const { openAppointmentModal } = useAppointment();
  const scrollToTop = (e) => {
    if (e) e.preventDefault();
    try {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    } catch {
      window.scrollTo(0, 0);
    }
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
        
        <div className="flex flex-col gap-4 text-[14px] lg:text-right">
          <div>
            <p className="text-white/40 font-mono tracking-widest uppercase text-[10px] mb-1">Direct Helpline</p>
            <a href="tel:+914222442200" className="text-[17px] sm:text-lg lg:text-xl font-light hover:text-white/80 transition-colors inline-block">
              0422-2442200
            </a>
          </div>
          <div>
            <p className="text-white/40 font-mono tracking-widest uppercase text-[10px] mb-1">Direct Enquiries</p>
            <a href="mailto:sabarimultispecialityhospital@gmail.com" className="text-[15px] sm:text-lg lg:text-xl font-light hover:text-white/80 transition-colors break-all inline-block">
              sabarimultispecialityhospital@gmail.com
            </a>
          </div>
          <div>
            <p className="text-white/40 font-mono tracking-widest uppercase text-[10px] mb-1">Location</p>
            <p className="text-white/80 leading-relaxed font-light text-base sm:text-lg">
              Coimbatore, Tamil Nadu<br/>India
            </p>
          </div>
        </div>
      </div>

      {/* Massive Typography */}
      <div className="max-w-[1600px] w-full mx-auto pt-10 sm:pt-16 pb-2 overflow-hidden flex flex-col items-center">
        <h1 className="text-[11vw] leading-none font-bold tracking-[-0.04em] bg-gradient-to-b from-white/60 via-white/30 to-white/10 bg-clip-text text-transparent text-center whitespace-nowrap overflow-hidden max-w-full pointer-events-none select-none">
          SABARI HOSPITAL
        </h1>
        
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] font-mono uppercase tracking-widest text-white/30 mt-12 relative z-10">
          {/* Left Side: Copyright, Privacy Policy, Terms of Service */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6 text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} Sabari Hospital.</p>
            <span className="hidden sm:inline text-white/10">&bull;</span>
            <Link to="/privacy-policy" className="hover:text-white transition-colors py-1">Privacy Policy</Link>
            <span className="hidden sm:inline text-white/10">&bull;</span>
            <Link to="/terms-of-service" className="hover:text-white transition-colors py-1">Terms of Service</Link>
          </div>

          {/* Right Side: Design & Developed by Javix Technologies + Back to top */}
          <div className="flex items-center gap-4 sm:gap-6">
            <a 
              href="https://javixtechnologies.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors py-1 group flex items-center gap-1.5"
            >
              <span>Design & Developed by</span>
              <span className="text-white/60 group-hover:text-white font-semibold transition-colors">Javix Technologies</span>
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center justify-center w-9 h-9 rounded-full border border-white/20 text-white/70 hover:text-black hover:bg-white hover:border-white active:scale-95 transition-all duration-300 cursor-pointer shrink-0"
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
