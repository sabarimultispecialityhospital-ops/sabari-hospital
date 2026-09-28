import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X, ChevronDown, Calendar, Phone, ArrowRight, Menu } from 'lucide-react';
import { NavItem } from './NavItem';
import { SimpleDropdown } from './SimpleDropdown';
import { useNavbarTheme } from '../../hooks/useNavbarTheme';
import { aboutSimpleData } from '../../data/navigationData';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAppointment } from '../../context/AppointmentContext';

export function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState(null); // 'about' | null
  const { theme } = useNavbarTheme();
  const { openAppointmentModal } = useAppointment();
  const navRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const isAboutActive = location.pathname.startsWith('/about');
  const isGalleryActive = location.pathname.startsWith('/gallery');
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

  // Handle hash scrolling when navigating to /#centres-of-excellence
  useEffect(() => {
    if (location.pathname === '/' && location.hash === '#centres-of-excellence') {
      const timer = setTimeout(() => {
        const el = document.getElementById('centres-of-excellence');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location.pathname, location.hash]);

  const handleScrollToCentres = (e) => {
    if (e) e.preventDefault();
    setActiveMenu(null);
    if (location.pathname === '/') {
      const element = document.getElementById('centres-of-excellence');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/#centres-of-excellence');
    }
  };

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
          <div className="h-full flex items-center" onMouseEnter={() => setActiveMenu(null)}>
            <NavItem 
              label="Centre of Excellence" 
              onClick={handleScrollToCentres}
              theme={theme}
            />
          </div>

          {/* 5. Gallery */}
          <div className="h-full flex items-center" onMouseEnter={() => setActiveMenu(null)}>
            <NavItem 
              label="Gallery" 
              href="/gallery"
              isActive={isGalleryActive} 
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

        {/* Mobile Header Bar - Simple & Clean */}
        <div className="lg:hidden flex items-center justify-between h-[72px] sm:h-[80px]">
          {/* Brand Logo on Left */}
          <Link to="/" className="flex items-center shrink-0">
            <img 
              src="/logo.png" 
              alt="Sabari Hospital" 
              className="h-10 sm:h-12 w-auto object-contain" 
            />
          </Link>
          
          {/* Right Action Buttons */}
          <div className="flex items-center gap-2">
            <a
              href="tel:+914222442200"
              aria-label="Call Hospital"
              className="w-10 h-10 rounded-full border border-neutral-200 bg-neutral-50 flex items-center justify-center text-neutral-800 hover:text-black hover:bg-neutral-100 active:scale-95 transition-all"
            >
              <Phone className="w-4 h-4 text-neutral-800" />
            </a>

            <button
              type="button"
              onClick={() => openAppointmentModal()}
              className="px-3.5 py-2 rounded-full bg-black text-white text-[11px] font-semibold tracking-wider uppercase active:scale-95 transition-all"
            >
              Book
            </button>

            <button 
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="w-10 h-10 rounded-full border border-neutral-200 bg-neutral-50 flex items-center justify-center text-black hover:bg-neutral-100 active:scale-95 transition-all cursor-pointer ml-0.5"
              aria-label="Open Navigation Menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer - Simple, Clean Navigation */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="fixed inset-0 z-[99999] bg-white lg:hidden flex flex-col w-full h-[100dvh] overflow-hidden"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-6 h-[72px] sm:h-[80px] border-b border-neutral-100 shrink-0">
                <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center">
                  <img src="/logo.png" alt="Sabari Hospital" className="h-10 sm:h-11 w-auto object-contain" />
                </Link>
                
                <button 
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-10 h-10 rounded-full border border-neutral-200 bg-neutral-50 flex items-center justify-center text-neutral-800 hover:text-black active:scale-90 transition-all cursor-pointer"
                  aria-label="Close Menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Navigation Links - Simple & Clean */}
              <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-4">
                
                {/* About Us */}
                <div>
                  <button
                    type="button"
                    onClick={() => toggleMobileSubmenu('about')}
                    className="w-full flex items-center justify-between text-left py-2 text-[20px] font-medium text-black cursor-pointer"
                  >
                    <span>About Us</span>
                    <ChevronDown 
                      size={18} 
                      className={`text-neutral-400 transition-transform duration-200 ${mobileSubmenu === 'about' ? 'rotate-180 text-black' : ''}`} 
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {mobileSubmenu === 'about' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden pl-4 flex flex-col gap-2.5 pt-2 pb-1"
                      >
                        <Link 
                          to="/about/our-story" 
                          onClick={() => setMobileMenuOpen(false)} 
                          className="text-[16px] text-neutral-600 hover:text-black py-1 transition-colors"
                        >
                          Our Story
                        </Link>
                        <Link 
                          to="/about/leadership" 
                          onClick={() => setMobileMenuOpen(false)} 
                          className="text-[16px] text-neutral-600 hover:text-black py-1 transition-colors"
                        >
                          Leadership
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="h-[1px] bg-neutral-100" />

                {/* Doctors */}
                <Link 
                  to="/doctors" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="text-[20px] font-medium text-black py-2 hover:text-neutral-600 transition-colors"
                >
                  Doctors
                </Link>

                <div className="h-[1px] bg-neutral-100" />
                
                {/* Centre of Excellence */}
                <button 
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleScrollToCentres();
                  }} 
                  className="text-left text-[20px] font-medium text-black py-2 hover:text-neutral-600 transition-colors cursor-pointer"
                >
                  Centre of Excellence
                </button>

                <div className="h-[1px] bg-neutral-100" />

                {/* Gallery */}
                <Link 
                  to="/gallery" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="text-[20px] font-medium text-black py-2 hover:text-neutral-600 transition-colors"
                >
                  Gallery
                </Link>

                <div className="h-[1px] bg-neutral-100" />

                {/* Contact Us */}
                <Link 
                  to="/contact" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="text-[20px] font-medium text-black py-2 hover:text-neutral-600 transition-colors"
                >
                  Contact Us
                </Link>
              </div>

              {/* Simple Bottom Action Section */}
              <div className="p-6 border-t border-neutral-100 bg-white shrink-0 flex flex-col gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openAppointmentModal();
                  }}
                  className="w-full py-3.5 bg-black text-white text-[13px] font-semibold tracking-wider uppercase text-center rounded-xl hover:bg-neutral-800 active:scale-[0.98] transition-all cursor-pointer shadow-sm"
                >
                  Book Appointment
                </button>
                <div className="text-center pt-1">
                  <a href="tel:+914222442200" className="text-[13px] text-neutral-600 hover:text-black font-medium transition-colors">
                    Emergency Helpline: <span className="text-black font-semibold">0422-2442200</span>
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
