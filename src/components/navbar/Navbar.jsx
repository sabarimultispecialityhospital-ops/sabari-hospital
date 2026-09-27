import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Menu, X, ChevronDown, Calendar, Phone, ArrowRight } from 'lucide-react';
// import { BrandLogo } from '../brand/BrandLogo';
import { NavItem } from './NavItem';
import { MegaMenu } from './MegaMenu';
import { DropdownPanel } from './DropdownPanel';
import { CentreNavMenu } from './CentreNavMenu';
import { FacilitiesNavMenu } from './FacilitiesNavMenu';
import { SimpleDropdown } from './SimpleDropdown';
import { useNavbarTheme } from '../../hooks/useNavbarTheme';
import { 
  aboutSimpleData, 
  internationalPatientsData 
} from '../../data/navigationData';
import { centreCategories } from '../../data/centresOfExcellenceData';
import { facilityCategories } from '../../data/facilitiesExperienceData';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useAppointment } from '../../context/AppointmentContext';

export function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState(null); // 'about' | 'specialities' | 'facilities' | null
  const { theme, isDark } = useNavbarTheme();
  const { openAppointmentModal } = useAppointment();
  const navRef = useRef(null);
  const location = useLocation();
  const isAboutActive = location.pathname.startsWith('/about');
  const isCentreActive = location.pathname.startsWith('/centre-of-excellence');
  const isFacilitiesActive = location.pathname.startsWith('/facilities');
  const isContactActive = location.pathname.startsWith('/contact');

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close mobile drawer on route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileSubmenu(null);
  }, [location.pathname]);

  // Close menu on click outside or escape
  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveMenu(null);
      }
    }
    
    function handleEscape(event) {
      if (event.key === 'Escape') {
        setActiveMenu(null);
        setMobileMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const toggleMobileSubmenu = (section) => {
    setMobileSubmenu(prev => (prev === section ? null : section));
  };

  const toggleMenu = (menuName) => {
    if (activeMenu === menuName) {
      setActiveMenu(null);
    } else {
      setActiveMenu(menuName);
    }
  };

  return (
    <nav ref={navRef} onMouseLeave={() => setActiveMenu(null)} className="fixed top-0 left-0 right-0 z-[1000] w-full bg-white/95 backdrop-blur-md border-b border-neutral-100 shadow-[0_1px_3px_rgba(0,0,0,0.03)] transition-colors duration-200">
      <div className="max-w-[1600px] w-full mx-auto px-6 lg:px-16">
        {/* Desktop Layout - Equally Distributed Across the Navbar */}
        <div className="hidden lg:flex justify-between h-[88px] items-center relative w-full">
          
          {/* 1. Left Brand Logo */}
          <Link to="/" className="flex items-center justify-center shrink-0">
            <img src="/logo.png" alt="Sabari Hospital" className="h-16 w-auto object-contain" />
          </Link>

          {/* 2. About Us */}
          <div className="relative h-full flex items-center" onMouseEnter={() => setActiveMenu('about')}>
            <NavItem 
              label="About Us" 
              hasDropdown={true} 
              isActive={activeMenu === 'about' || isAboutActive} 
              theme={theme}
            />
            <SimpleDropdown 
              isOpen={activeMenu === 'about'} 
              data={aboutSimpleData} 
              onItemClick={() => setActiveMenu(null)} 
            />
          </div>
          
          {/* 3. Doctors */}
          <div className="h-full flex items-center" onMouseEnter={() => setActiveMenu(null)}>
            <NavItem label="Doctors" href="/doctors" theme={theme} />
          </div>
          
          {/* 4. Centre of Excellence */}
          <div className="h-full flex items-center" onMouseEnter={() => setActiveMenu('specialities')}>
            <NavItem 
              label="Centre of Excellence" 
              hasDropdown={true} 
              isActive={activeMenu === 'specialities' || isCentreActive} 
              theme={theme}
            />
          </div>

          {/* 5. Facilities */}
          <div className="h-full flex items-center" onMouseEnter={() => setActiveMenu('facilities')}>
            <NavItem 
              label="Facilities" 
              hasDropdown={true} 
              isActive={activeMenu === 'facilities' || isFacilitiesActive} 
              theme={theme}
            />
          </div>
          
          {/* 6. Contact Us */}
          <div className="h-full flex items-center" onMouseEnter={() => setActiveMenu(null)}>
            <NavItem 
              label="Contact Us" 
              href="/contact"
              isActive={isContactActive} 
              theme={theme}
            />
          </div>

          {/* 7. Book Appointment */}
          <button
            type="button"
            onClick={() => openAppointmentModal()}
            className="text-[13px] font-semibold tracking-[0.02em] uppercase px-6 py-[14px] rounded border border-black bg-black text-white hover:bg-neutral-800 transition-all duration-200 ease-in-out shrink-0"
          >
            Book Appointment
          </button>
        </div>

        {/* Mobile Header Bar - Luxury Aesthetic */}
        <div className="lg:hidden flex items-center justify-between h-[74px] sm:h-[80px]">
          
          {/* Left: Architectural Bespoke Menu Trigger */}
          <button 
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="group flex items-center gap-2 p-1.5 -ml-1 text-black focus:outline-none active:scale-95 transition-transform cursor-pointer"
            aria-label="Open Menu"
          >
            <div className="w-10 h-10 rounded-full border border-neutral-200/90 bg-neutral-50/90 backdrop-blur-md flex flex-col items-center justify-center gap-[5px] group-hover:bg-neutral-100 group-hover:border-neutral-300 transition-all shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
              <span className="w-4 h-[1.5px] bg-neutral-900 rounded-full transition-all group-hover:w-4.5" />
              <span className="w-3.5 h-[1.5px] bg-neutral-900 rounded-full transition-all group-hover:w-4.5" />
            </div>
            <span className="hidden xs:inline-block text-[10px] font-mono tracking-[0.16em] uppercase text-neutral-500 font-semibold">
              MENU
            </span>
          </button>
          
          {/* Center: Centered Logo with Subtle Elegance */}
          <Link to="/" className="flex items-center justify-center shrink-0 py-1 transition-transform duration-200 active:scale-95">
            <img 
              src="/logo.png" 
              alt="Sabari Hospital" 
              className="h-10 sm:h-12 w-auto object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.04)]" 
            />
          </Link>
          
          {/* Right: Quick Action Helpline & Consultation Button */}
          <div className="flex items-center gap-2">
            <a
              href="tel:+914222442200"
              aria-label="Call Hospital 24/7"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-neutral-200/90 bg-neutral-50/90 backdrop-blur-md flex items-center justify-center text-neutral-800 hover:text-black hover:bg-neutral-100 transition-all active:scale-95 shadow-[0_2px_8px_rgba(0,0,0,0.03)]"
            >
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-neutral-800" />
            </a>

            <button
              type="button"
              onClick={() => openAppointmentModal()}
              className="group inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full bg-black text-white text-[11px] font-semibold tracking-[0.08em] uppercase hover:bg-neutral-800 active:scale-95 transition-all shadow-[0_4px_12px_rgba(0,0,0,0.12)] shrink-0 cursor-pointer"
            >
              <Calendar className="w-3 h-3 text-white/90" />
              <span>Book</span>
            </button>
          </div>
        </div>
      </div>

      {/* New Centre of Excellence Editorial Navigation */}
      <CentreNavMenu 
        isOpen={activeMenu === 'specialities'} 
        onClose={() => setActiveMenu(null)} 
      />
      
      {/* New Facilities Editorial Navigation */}
      <FacilitiesNavMenu 
        isOpen={activeMenu === 'facilities'} 
        onClose={() => setActiveMenu(null)} 
      />

      {/* Mobile Drawer - Concierge Style Fullscreen Experience */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-0 z-[99999] bg-white lg:hidden flex flex-col w-full h-[100dvh] overflow-hidden selection:bg-neutral-200"
            >
              {/* Drawer Top Navigation Header */}
              <div className="flex items-center justify-between px-6 h-[74px] sm:h-[80px] border-b border-neutral-100 shrink-0 bg-white/95 backdrop-blur-md">
                <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2">
                  <img src="/logo.png" alt="Sabari Hospital" className="h-10 sm:h-11 w-auto object-contain" />
                </Link>
                
                <button 
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-10 h-10 rounded-full border border-neutral-200 bg-neutral-50 flex items-center justify-center text-neutral-800 hover:text-black hover:bg-neutral-100 transition-all active:scale-90 cursor-pointer"
                  aria-label="Close Menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Status Ticker */}
              <div className="px-6 py-2.5 bg-neutral-50/80 border-b border-neutral-100 flex items-center justify-between text-[11px] font-mono tracking-wider uppercase text-neutral-500 shrink-0">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-semibold text-neutral-800">24/7 Emergency</span>
                </div>
                <span>Coimbatore, TN</span>
              </div>
              
              {/* Drawer Scrollable Content */}
              <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-6">
                
                {/* 01. About Us (Accordion) */}
                <div className="border-b border-neutral-100 pb-5">
                  <button
                    type="button"
                    onClick={() => toggleMobileSubmenu('about')}
                    className="w-full flex items-center justify-between text-left py-2 group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] font-mono font-semibold tracking-wider text-neutral-400">01</span>
                      <span className="text-[22px] font-display font-medium text-black tracking-tight group-hover:text-neutral-600 transition-colors">
                        About Us
                      </span>
                    </div>
                    <div className={`w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center transition-transform duration-300 ${mobileSubmenu === 'about' ? 'rotate-180 bg-black text-white border-black' : 'text-neutral-500 bg-neutral-50'}`}>
                      <ChevronDown size={16} />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {mobileSubmenu === 'about' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="overflow-hidden mt-3 pl-4 border-l-2 border-black/80 flex flex-col gap-3 py-2 bg-neutral-50/60 rounded-r-xl"
                      >
                        <Link to="/about/our-story" onClick={() => setMobileMenuOpen(false)} className="text-[15px] font-medium text-neutral-700 hover:text-black py-0.5 transition-colors">Our Story</Link>
                        <Link to="/about/leadership" onClick={() => setMobileMenuOpen(false)} className="text-[15px] font-medium text-neutral-700 hover:text-black py-0.5 transition-colors">Leadership</Link>
                        <Link to="/about/why-sabari" onClick={() => setMobileMenuOpen(false)} className="text-[15px] font-medium text-neutral-700 hover:text-black py-0.5 transition-colors">Why Sabari</Link>
                        <Link to="/about/accreditations" onClick={() => setMobileMenuOpen(false)} className="text-[15px] font-medium text-neutral-700 hover:text-black py-0.5 transition-colors">Accreditations</Link>
                        <Link to="/about/patient-experience" onClick={() => setMobileMenuOpen(false)} className="text-[15px] font-medium text-neutral-700 hover:text-black py-0.5 transition-colors">Patient Experience</Link>
                        <Link to="/about/careers" onClick={() => setMobileMenuOpen(false)} className="text-[15px] font-medium text-neutral-700 hover:text-black py-0.5 transition-colors">Careers</Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* 02. Doctors Direct Link */}
                <div className="border-b border-neutral-100 pb-5">
                  <Link 
                    to="/doctors" 
                    onClick={() => setMobileMenuOpen(false)} 
                    className="flex items-center justify-between py-2 group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] font-mono font-semibold tracking-wider text-neutral-400">02</span>
                      <span className="text-[22px] font-display font-medium text-black tracking-tight group-hover:text-neutral-600 transition-colors">
                        Doctors
                      </span>
                    </div>
                    <span className="text-[12px] font-mono tracking-wider uppercase text-neutral-400 group-hover:text-black group-hover:translate-x-1 transition-all">
                      &rarr;
                    </span>
                  </Link>
                </div>
                
                {/* 03. Centre of Excellence (Accordion) */}
                <div className="border-b border-neutral-100 pb-5">
                  <button
                    type="button"
                    onClick={() => toggleMobileSubmenu('specialities')}
                    className="w-full flex items-center justify-between text-left py-2 group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] font-mono font-semibold tracking-wider text-neutral-400">03</span>
                      <span className="text-[22px] font-display font-medium text-black tracking-tight group-hover:text-neutral-600 transition-colors">
                        Centre of Excellence
                      </span>
                    </div>
                    <div className={`w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center transition-transform duration-300 ${mobileSubmenu === 'specialities' ? 'rotate-180 bg-black text-white border-black' : 'text-neutral-500 bg-neutral-50'}`}>
                      <ChevronDown size={16} />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {mobileSubmenu === 'specialities' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="overflow-hidden mt-3 pl-4 border-l-2 border-black/80 flex flex-col gap-4 py-3 bg-neutral-50/60 rounded-r-xl"
                      >
                        <Link
                          to="/centre-of-excellence"
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-[11px] font-mono tracking-wider uppercase text-neutral-900 font-bold py-1 flex items-center justify-between pr-2"
                        >
                          <span>Explore All Centres</span>
                          <span>&rarr;</span>
                        </Link>
                        {centreCategories.map((cat) => (
                          <div key={cat.id} className="flex flex-col gap-1.5 pt-1.5 border-t border-neutral-200/50">
                            <Link
                              to={`/centre-of-excellence/${cat.slug}`}
                              onClick={() => setMobileMenuOpen(false)}
                              className="text-[14px] font-semibold text-black uppercase tracking-wide flex items-center justify-between pr-2"
                            >
                              <span>{cat.number} {cat.title}</span>
                              <span className="text-neutral-400 text-xs">&rarr;</span>
                            </Link>
                            <div className="flex flex-wrap gap-x-2.5 gap-y-1 pl-1">
                              {cat.services.map((svc) => (
                                <Link
                                  key={svc.slug}
                                  to={`/centre-of-excellence/${cat.slug}/${svc.slug}`}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="text-[12px] text-neutral-600 hover:text-black py-0.5"
                                >
                                  {svc.title}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* 04. Facilities (Accordion) */}
                <div className="border-b border-neutral-100 pb-5">
                  <button
                    type="button"
                    onClick={() => toggleMobileSubmenu('facilities')}
                    className="w-full flex items-center justify-between text-left py-2 group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] font-mono font-semibold tracking-wider text-neutral-400">04</span>
                      <span className="text-[22px] font-display font-medium text-black tracking-tight group-hover:text-neutral-600 transition-colors">
                        Facilities
                      </span>
                    </div>
                    <div className={`w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center transition-transform duration-300 ${mobileSubmenu === 'facilities' ? 'rotate-180 bg-black text-white border-black' : 'text-neutral-500 bg-neutral-50'}`}>
                      <ChevronDown size={16} />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {mobileSubmenu === 'facilities' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="overflow-hidden mt-3 pl-4 border-l-2 border-black/80 flex flex-col gap-4 py-3 bg-neutral-50/60 rounded-r-xl"
                      >
                        <Link
                          to="/facilities"
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-[11px] font-mono tracking-wider uppercase text-neutral-900 font-bold py-1 flex items-center justify-between pr-2"
                        >
                          <span>Explore All Facilities</span>
                          <span>&rarr;</span>
                        </Link>
                        {facilityCategories.map((cat) => (
                          <div key={cat.id} className="flex flex-col gap-1.5 pt-1.5 border-t border-neutral-200/50">
                            <Link
                              to={`/facilities/${cat.slug}`}
                              onClick={() => setMobileMenuOpen(false)}
                              className="text-[14px] font-semibold text-black uppercase tracking-wide flex items-center justify-between pr-2"
                            >
                              <span>{cat.number} {cat.title}</span>
                              <span className="text-neutral-400 text-xs">&rarr;</span>
                            </Link>
                            <div className="flex flex-wrap gap-x-2.5 gap-y-1 pl-1">
                              {cat.services.map((svc) => (
                                <Link
                                  key={svc.slug}
                                  to={`/facilities/${cat.slug}/${svc.slug}`}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="text-[12px] text-neutral-600 hover:text-black py-0.5"
                                >
                                  {svc.title}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* 05. Contact Us Direct Link */}
                <div className="pb-4">
                  <Link 
                    to="/contact" 
                    onClick={() => setMobileMenuOpen(false)} 
                    className="flex items-center justify-between py-2 group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] font-mono font-semibold tracking-wider text-neutral-400">05</span>
                      <span className="text-[22px] font-display font-medium text-black tracking-tight group-hover:text-neutral-600 transition-colors">
                        Contact Us
                      </span>
                    </div>
                    <span className="text-[12px] font-mono tracking-wider uppercase text-neutral-400 group-hover:text-black group-hover:translate-x-1 transition-all">
                      &rarr;
                    </span>
                  </Link>
                </div>
              </div>

              {/* Bottom Sticky Concierge Bar */}
              <div className="p-5 border-t border-neutral-200/80 bg-neutral-900 text-white shrink-0 flex flex-col gap-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openAppointmentModal();
                  }}
                  className="w-full py-4 bg-white text-black text-[12px] font-semibold tracking-[0.14em] uppercase text-center rounded-xl hover:bg-neutral-100 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <Calendar className="w-4 h-4 text-black" />
                  <span>Book a Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 uppercase tracking-wider px-1 pt-1">
                  <span>24/7 HELPLINE</span>
                  <a href="tel:+914222442200" className="text-white font-medium hover:underline flex items-center gap-1.5">
                    <Phone className="w-3 h-3 text-emerald-400" />
                    <span>0422-2442200</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </nav>
  );
}
