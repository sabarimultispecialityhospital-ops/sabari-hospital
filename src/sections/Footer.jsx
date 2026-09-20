import React from 'react';
import { Link } from 'react-router-dom';
import { BrandLogo } from '../components/brand/BrandLogo';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer data-nav-theme="dark" className="w-full bg-[#050505] text-white pt-20 lg:pt-28 pb-12 px-6 lg:px-16 border-t border-white/[0.08] relative overflow-hidden">
      
      {/* Top Statement & Action Strip */}
      <div className="max-w-[1600px] w-full mx-auto pb-16 lg:pb-20 border-b border-white/[0.08] flex flex-col lg:flex-row lg:items-end justify-between gap-10">
        <div className="max-w-2xl">
          <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-white/40 mb-4 block">
            ESTABLISHED 1999 &bull; COIMBATORE
          </span>
          <h2 className="text-[32px] sm:text-[44px] lg:text-[52px] font-medium tracking-[-0.02em] leading-[1.1] text-white">
            Care centered around you.<br />
            <span className="text-white/40">From consultation to recovery.</span>
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-4 shrink-0">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-black text-[13px] font-medium tracking-wider uppercase rounded-full hover:bg-neutral-200 transition-all duration-300 hover:scale-[1.02]"
          >
            <span>Book Consultation</span>
            <span className="ml-2">&rarr;</span>
          </Link>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Sabari+Multispeciality+Hospital+Coimbatore+Tamil+Nadu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-white text-[13px] font-medium tracking-wider uppercase rounded-full transition-all duration-300"
          >
            <span>Campus Directions</span>
            <span className="ml-2">&rarr;</span>
          </a>
        </div>
      </div>

      {/* Main 5-Column Navigation Grid */}
      <div className="max-w-[1600px] w-full mx-auto py-16 lg:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
        
        {/* Brand & Hospital Identity */}
        <div className="lg:col-span-4 flex flex-col items-start pr-0 lg:pr-12">
          <Link to="/" className="inline-block mb-8">
            <BrandLogo size="lg" dark={true} className="items-start" />
          </Link>
          <p className="text-[15px] text-white/60 leading-[1.7] mb-8 max-w-sm">
            Sabari Multispeciality Hospital delivers comprehensive, compassionate, and evidence-guided healthcare across Coimbatore and Western Tamil Nadu.
          </p>
          
          {/* Live Emergency Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-full bg-emerald-500/[0.08] border border-emerald-500/20 text-emerald-400 text-[12px] font-mono tracking-wide mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>24/7 Trauma &amp; Emergency Active</span>
          </div>

          <p className="text-[12px] font-mono uppercase tracking-widest text-white/30">
            Reg. Multispeciality Hospital &bull; Est. 1999
          </p>
        </div>

        {/* Centres of Excellence */}
        <div className="lg:col-span-2 flex flex-col">
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/40 mb-6 block font-mono">
            CENTRES
          </span>
          <div className="flex flex-col gap-3.5 text-[14px]">
            <Link to="/centre-of-excellence" className="text-white/70 hover:text-white hover:translate-x-1 transition-all duration-200">
              Obstetrics &amp; Gynaecology
            </Link>
            <Link to="/centre-of-excellence" className="text-white/70 hover:text-white hover:translate-x-1 transition-all duration-200">
              Critical Care &amp; Anaesthesia
            </Link>
            <Link to="/centre-of-excellence" className="text-white/70 hover:text-white hover:translate-x-1 transition-all duration-200">
              Diabetic Care &amp; Endocrine
            </Link>
            <Link to="/centre-of-excellence" className="text-white/70 hover:text-white hover:translate-x-1 transition-all duration-200">
              Pulmonology &amp; Chest
            </Link>
            <Link to="/centre-of-excellence" className="text-white/70 hover:text-white hover:translate-x-1 transition-all duration-200">
              Surgical Services
            </Link>
            <Link to="/centre-of-excellence" className="text-white/70 hover:text-white hover:translate-x-1 transition-all duration-200">
              Cardiac Services
            </Link>
            <Link to="/centre-of-excellence" className="text-white/40 hover:text-white text-[13px] pt-2 inline-flex items-center gap-1.5 transition-colors">
              <span>All 10+ Departments</span>
              <span>&rarr;</span>
            </Link>
          </div>
        </div>

        {/* About Sabari */}
        <div className="lg:col-span-2 flex flex-col">
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/40 mb-6 block font-mono">
            ABOUT US
          </span>
          <div className="flex flex-col gap-3.5 text-[14px]">
            <Link to="/about/our-story" className="text-white/70 hover:text-white hover:translate-x-1 transition-all duration-200">
              Our Story &amp; Heritage
            </Link>
            <Link to="/about/leadership" className="text-white/70 hover:text-white hover:translate-x-1 transition-all duration-200">
              Leadership &amp; Founders
            </Link>
            <Link to="/about/why-sabari" className="text-white/70 hover:text-white hover:translate-x-1 transition-all duration-200">
              Why Sabari
            </Link>
            <Link to="/about/accreditations" className="text-white/70 hover:text-white hover:translate-x-1 transition-all duration-200">
              Accreditations &amp; Safety
            </Link>
            <Link to="/about/patient-experience" className="text-white/70 hover:text-white hover:translate-x-1 transition-all duration-200">
              Patient Experience
            </Link>
            <Link to="/doctors" className="text-white/70 hover:text-white hover:translate-x-1 transition-all duration-200">
              Doctors Directory
            </Link>
            <Link to="/about/careers" className="text-white/70 hover:text-white hover:translate-x-1 transition-all duration-200">
              Careers &amp; Practice
            </Link>
          </div>
        </div>

        {/* Facilities */}
        <div className="lg:col-span-2 flex flex-col">
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/40 mb-6 block font-mono">
            FACILITIES
          </span>
          <div className="flex flex-col gap-3.5 text-[14px]">
            <Link to="/facilities" className="text-white/70 hover:text-white hover:translate-x-1 transition-all duration-200">
              Modular Operation Theatres
            </Link>
            <Link to="/facilities" className="text-white/70 hover:text-white hover:translate-x-1 transition-all duration-200">
              Intensive Care Units (ICU)
            </Link>
            <Link to="/facilities" className="text-white/70 hover:text-white hover:translate-x-1 transition-all duration-200">
              24/7 Diagnostics &amp; Lab
            </Link>
            <Link to="/facilities" className="text-white/70 hover:text-white hover:translate-x-1 transition-all duration-200">
              Inpatient Suites &amp; Rooms
            </Link>
            <Link to="/facilities" className="text-white/70 hover:text-white hover:translate-x-1 transition-all duration-200">
              Emergency &amp; Ambulance
            </Link>
            <Link to="/facilities" className="text-white/70 hover:text-white hover:translate-x-1 transition-all duration-200">
              Birthing Centre
            </Link>
          </div>
        </div>

        {/* Contact & Campus */}
        <div className="lg:col-span-2 flex flex-col">
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/40 mb-6 block font-mono">
            CAMPUS
          </span>
          <div className="flex flex-col gap-4 text-[14px]">
            <div>
              <p className="text-white/80 font-medium mb-1">Sabari Hospital</p>
              <p className="text-white/50 text-[13px] leading-relaxed">
                Coimbatore, Tamil Nadu,<br />
                India.
              </p>
            </div>

            <div className="pt-1">
              <span className="text-[10px] font-mono tracking-widest text-white/40 uppercase block mb-1">
                Direct Enquiries
              </span>
              <a
                href="mailto:sabarimultispecialityhospital@gmail.com"
                className="text-white/80 hover:text-white transition-colors text-[13px] break-all block"
              >
                sabarimultispecialityhospital@gmail.com
              </a>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <Link
                to="/contact"
                className="text-white/90 hover:text-white inline-flex items-center gap-2 text-[13px] font-medium transition-colors"
              >
                <span>Online Contact Form</span>
                <span>&rarr;</span>
              </Link>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Sabari+Multispeciality+Hospital+Coimbatore+Tamil+Nadu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white inline-flex items-center gap-2 text-[12px] transition-colors"
              >
                <span>Google Maps Pin</span>
                <span>&rarr;</span>
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Massive Typographic Watermark */}
      <div className="w-full pt-12 pb-6 flex justify-center select-none pointer-events-none overflow-hidden">
        <span className="text-[14vw] font-bold tracking-[-0.04em] text-white/[0.025] leading-none uppercase whitespace-nowrap block text-center">
          SABARI HOSPITAL
        </span>
      </div>

      {/* Bottom Legal & Architectural Bar */}
      <div className="max-w-[1600px] w-full mx-auto pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-6 text-[12px] text-white/40">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center sm:text-left">
          <p>&copy; {new Date().getFullYear()} Sabari Multispeciality Hospital. All rights reserved.</p>
          <span className="hidden sm:inline text-white/20">&bull;</span>
          <p className="text-white/30">Clinical Governance &bull; Compassionate Healthcare</p>
        </div>

        <div className="flex items-center gap-6">
          <Link to="/contact" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/contact" className="hover:text-white transition-colors">Terms of Service</Link>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-white/60 hover:text-white transition-colors cursor-pointer ml-4 group"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <span className="group-hover:-translate-y-0.5 transition-transform duration-200">&uarr;</span>
          </button>
        </div>
      </div>

    </footer>
  );
}
