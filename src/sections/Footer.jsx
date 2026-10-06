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
    <footer data-nav-theme="dark" className="w-full bg-[#111827] text-white pt-16 sm:pt-24 lg:pt-32 pb-8 px-6 lg:px-16 relative overflow-hidden flex flex-col justify-between">
      
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
            <p className="text-white/40 font-sans tracking-[0.16em] uppercase text-[11px] font-medium mb-1">Direct Helpline</p>
            <a href="tel:+914222442200" className="text-[17px] sm:text-lg lg:text-xl font-light hover:text-white/80 transition-colors inline-block">
              0422-2442200
            </a>
          </div>
          <div>
            <p className="text-white/40 font-sans tracking-[0.16em] uppercase text-[11px] font-medium mb-1">Direct Enquiries</p>
            <a href="mailto:sabarimultispecialityhospital@gmail.com" className="text-[15px] sm:text-lg lg:text-xl font-light hover:text-white/80 transition-colors break-all inline-block">
              sabarimultispecialityhospital@gmail.com
            </a>
          </div>
          <div>
            <p className="text-white/40 font-sans tracking-[0.16em] uppercase text-[11px] font-medium mb-1">Location</p>
            <p className="text-white/80 leading-relaxed font-light text-base sm:text-lg">
              Coimbatore, Tamil Nadu<br/>India
            </p>
          </div>
          <div>
            <p className="text-white/40 font-sans tracking-[0.16em] uppercase text-[11px] font-medium mb-2">Connect With Us</p>
            <div className="flex items-center gap-2.5 lg:justify-end">
              <a
                href="https://wa.me/919443335152"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] hover:bg-[#25D366] text-white/80 hover:text-white border border-white/10 hover:border-[#25D366] transition-all duration-300 text-[12px] font-medium"
                aria-label="Chat on WhatsApp"
              >
                <svg className="w-3.5 h-3.5 fill-current text-[#25D366] group-hover:text-white transition-colors" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                <span>WhatsApp</span>
              </a>
              <a
                href="https://www.instagram.com/sabarihospitalcbe?stkn=MXIzdHV4MWFhdm1jdQ%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] hover:bg-[#E1306C] text-white/80 hover:text-white border border-white/10 hover:border-[#E1306C] transition-all duration-300 text-[12px] font-medium"
                aria-label="Follow on Instagram"
              >
                <svg className="w-3.5 h-3.5 fill-current text-[#E1306C] group-hover:text-white transition-colors" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Massive Typography */}
      <div className="max-w-[1600px] w-full mx-auto pt-10 sm:pt-16 pb-2 overflow-hidden flex flex-col items-center">
        <h1 className="text-[11vw] leading-none font-bold tracking-[-0.04em] bg-gradient-to-b from-white/60 via-white/30 to-white/10 bg-clip-text text-transparent text-center whitespace-nowrap overflow-hidden max-w-full pointer-events-none select-none">
          SABARI HOSPITAL
        </h1>
        
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] sm:text-[12px] font-sans uppercase tracking-[0.12em] text-white/40 mt-12 relative z-10">
          {/* Left Side: Copyright */}
          <div className="flex items-center justify-center md:justify-start text-center md:text-left">
            <p>&copy; 2026 Sabari Hospital. All Rights Reserved.</p>
          </div>

          {/* Center: Social Links */}
          <div className="flex items-center gap-4 lowercase">
            <a
              href="https://wa.me/919443335152"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-white/50 hover:text-[#25D366] transition-colors"
            >
              <span className="capitalize">WhatsApp</span>
            </a>
            <span className="text-white/20">&bull;</span>
            <a
              href="https://www.instagram.com/sabarihospitalcbe?stkn=MXIzdHV4MWFhdm1jdQ%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-white/50 hover:text-[#E1306C] transition-colors"
            >
              <span className="capitalize">Instagram</span>
            </a>
          </div>

          {/* Right Side: Privacy Policy, Terms of Service + Back to top */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-4 gap-y-2">
            <Link to="/privacy-policy" className="hover:text-white transition-colors py-1">Privacy Policy</Link>
            <span className="text-white/20">&bull;</span>
            <Link to="/terms-of-service" className="hover:text-white transition-colors py-1">Terms of Service</Link>
            <button
              type="button"
              onClick={scrollToTop}
              className="ml-2 flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/20 text-white/70 hover:text-black hover:bg-white hover:border-white active:scale-95 transition-all duration-300 cursor-pointer shrink-0"
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
