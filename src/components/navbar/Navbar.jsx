import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
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

        {/* Mobile Layout */}
        <div className="lg:hidden flex items-center justify-between h-[80px]">
          <button 
            onClick={() => setMobileMenuOpen(true)}
            className="p-2 -ml-2 text-black hover:bg-neutral-50 rounded-md transition-colors"
            aria-label="Open Menu"
          >
            <Menu size={24} />
          </button>
          
          <Link to="/">
            <img src="/logo.png" alt="Sabari Hospital" className="h-12 w-auto object-contain" />
          </Link>
          
          <button
            type="button"
            onClick={() => openAppointmentModal()}
            className="bg-black text-white text-[11px] font-medium tracking-[0.02em] uppercase px-4 py-2 rounded-md hover:bg-neutral-800 transition-colors duration-200"
          >
            Book
          </button>
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

      {/* Mobile Drawer - Rendered via createPortal directly to document.body to avoid backdrop-filter containing-block entrapment */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed inset-0 z-[99999] bg-white lg:hidden flex flex-col w-full h-[100dvh] overflow-hidden"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-6 h-[80px] border-b border-neutral-100 shrink-0 bg-white">
                <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                  <img src="/logo.png" alt="Sabari Hospital" className="h-11 w-auto object-contain" />
                </Link>
                <button 
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 -mr-2 text-black hover:bg-neutral-50 rounded-md transition-colors cursor-pointer"
                  aria-label="Close Menu"
                >
                  <X size={26} />
                </button>
              </div>
              
              {/* Drawer Content */}
              <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-5">
                {/* 1. About Us (Accordion) */}
                <div className="border-b border-neutral-100 pb-4">
                  <button
                    type="button"
                    onClick={() => toggleMobileSubmenu('about')}
                    className="w-full flex items-center justify-between text-left py-2 text-xl font-display font-medium text-black cursor-pointer"
                  >
                    <span>About Us</span>
                    <ChevronDown
                      size={20}
                      className={`text-neutral-500 transition-transform duration-300 ${mobileSubmenu === 'about' ? 'rotate-180' : ''}`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {mobileSubmenu === 'about' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden pl-3 border-l-2 border-black/80 mt-2 flex flex-col gap-3 py-2"
                      >
                        <Link to="/about/our-story" onClick={() => setMobileMenuOpen(false)} className="text-[15px] text-neutral-700 hover:text-black py-0.5">Our Story</Link>
                        <Link to="/about/leadership" onClick={() => setMobileMenuOpen(false)} className="text-[15px] text-neutral-700 hover:text-black py-0.5">Leadership</Link>
                        <Link to="/about/why-sabari" onClick={() => setMobileMenuOpen(false)} className="text-[15px] text-neutral-700 hover:text-black py-0.5">Why Sabari</Link>
                        <Link to="/about/accreditations" onClick={() => setMobileMenuOpen(false)} className="text-[15px] text-neutral-700 hover:text-black py-0.5">Accreditations</Link>
                        <Link to="/about/patient-experience" onClick={() => setMobileMenuOpen(false)} className="text-[15px] text-neutral-700 hover:text-black py-0.5">Patient Experience</Link>
                        <Link to="/about/careers" onClick={() => setMobileMenuOpen(false)} className="text-[15px] text-neutral-700 hover:text-black py-0.5">Careers</Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* 2. Doctors Direct Link */}
                <div className="border-b border-neutral-100 pb-4">
                  <Link 
                    to="/doctors" 
                    onClick={() => setMobileMenuOpen(false)} 
                    className="block py-2 text-xl font-display font-medium text-black hover:text-neutral-600 transition-colors"
                  >
                    Doctors
                  </Link>
                </div>
                
                {/* 3. Centre of Excellence (Accordion) */}
                <div className="border-b border-neutral-100 pb-4">
                  <button
                    type="button"
                    onClick={() => toggleMobileSubmenu('specialities')}
                    className="w-full flex items-center justify-between text-left py-2 text-xl font-display font-medium text-black cursor-pointer"
                  >
                    <span>Centre of Excellence</span>
                    <ChevronDown
                      size={20}
                      className={`text-neutral-500 transition-transform duration-300 ${mobileSubmenu === 'specialities' ? 'rotate-180' : ''}`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {mobileSubmenu === 'specialities' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden pl-3 border-l-2 border-black/80 mt-2 flex flex-col gap-4 py-2"
                      >
                        <Link
                          to="/centre-of-excellence"
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-[12px] font-mono tracking-wider uppercase text-neutral-900 font-semibold py-1"
                        >
                          View All Specialities &rarr;
                        </Link>
                        {centreCategories.map((cat) => (
                          <div key={cat.id} className="flex flex-col gap-1.5 pt-1">
                            <Link
                              to={`/centre-of-excellence/${cat.slug}`}
                              onClick={() => setMobileMenuOpen(false)}
                              className="text-[14px] font-semibold text-black uppercase tracking-wide flex items-center justify-between"
                            >
                              <span>{cat.number} {cat.title}</span>
                              <span className="text-neutral-400">&rarr;</span>
                            </Link>
                            <div className="flex flex-wrap gap-x-3 gap-y-1 pl-2">
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

                {/* 4. Facilities (Accordion) */}
                <div className="border-b border-neutral-100 pb-4">
                  <button
                    type="button"
                    onClick={() => toggleMobileSubmenu('facilities')}
                    className="w-full flex items-center justify-between text-left py-2 text-xl font-display font-medium text-black cursor-pointer"
                  >
                    <span>Facilities</span>
                    <ChevronDown
                      size={20}
                      className={`text-neutral-500 transition-transform duration-300 ${mobileSubmenu === 'facilities' ? 'rotate-180' : ''}`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {mobileSubmenu === 'facilities' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden pl-3 border-l-2 border-black/80 mt-2 flex flex-col gap-4 py-2"
                      >
                        <Link
                          to="/facilities"
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-[12px] font-mono tracking-wider uppercase text-neutral-900 font-semibold py-1"
                        >
                          View All Facilities &rarr;
                        </Link>
                        {facilityCategories.map((cat) => (
                          <div key={cat.id} className="flex flex-col gap-1.5 pt-1">
                            <Link
                              to={`/facilities/${cat.slug}`}
                              onClick={() => setMobileMenuOpen(false)}
                              className="text-[14px] font-semibold text-black uppercase tracking-wide flex items-center justify-between"
                            >
                              <span>{cat.number} {cat.title}</span>
                              <span className="text-neutral-400">&rarr;</span>
                            </Link>
                            <div className="flex flex-wrap gap-x-3 gap-y-1 pl-2">
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

                {/* 5. Contact Us Direct Link */}
                <div className="pb-4">
                  <Link 
                    to="/contact" 
                    onClick={() => setMobileMenuOpen(false)} 
                    className="block py-2 text-xl font-display font-medium text-black hover:text-neutral-600 transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>

              {/* Bottom Sticky Action Bar */}
              <div className="p-6 border-t border-neutral-100 bg-neutral-50 shrink-0 flex flex-col gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openAppointmentModal();
                  }}
                  className="w-full py-3.5 bg-black text-white text-[13px] font-semibold tracking-[0.1em] uppercase text-center rounded hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  Book Appointment
                </button>
                <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500 uppercase tracking-wider px-1">
                  <span>Direct Help:</span>
                  <a href="tel:+914222442200" className="text-black font-semibold hover:underline">
                    0422-2442200
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
