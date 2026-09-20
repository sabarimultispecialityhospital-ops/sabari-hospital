import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { BrandLogo } from '../brand/BrandLogo';
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

export function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, isDark } = useNavbarTheme();
  const navRef = useRef(null);
  const location = useLocation();
  const isAboutActive = location.pathname.startsWith('/about');
  const isCentreActive = location.pathname.startsWith('/centre-of-excellence');
  const isFacilitiesActive = location.pathname.startsWith('/facilities');
  const isContactActive = location.pathname.startsWith('/contact');

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
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const toggleMenu = (menuName) => {
    if (activeMenu === menuName) {
      setActiveMenu(null);
    } else {
      setActiveMenu(menuName);
    }
  };

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-[1000] w-full bg-white/95 backdrop-blur-md border-b border-neutral-100 shadow-[0_1px_3px_rgba(0,0,0,0.03)] transition-colors duration-200">
      <div className="max-w-[1600px] w-full mx-auto" style={{ paddingInline: 'clamp(32px, 5vw, 80px)' }}>
        {/* Desktop Layout */}
        <div className="hidden lg:flex justify-between h-[88px] items-center relative">
          
          {/* Left Navigation */}
          <div className="flex items-center justify-start h-full" style={{ gap: 'clamp(28px, 2.8vw, 52px)' }}>
            <div className="relative">
              <NavItem 
                label="About Us" 
                hasDropdown={true} 
                isActive={activeMenu === 'about' || isAboutActive} 
                onClick={() => toggleMenu('about')} 
                theme={theme}
              />
              <SimpleDropdown 
                isOpen={activeMenu === 'about'} 
                data={aboutSimpleData} 
                onItemClick={() => setActiveMenu(null)} 
              />
            </div>
            
            <NavItem label="Doctors" href="/doctors" theme={theme} />
            
            <NavItem 
              label="Centre of Excellence" 
              hasDropdown={true} 
              isActive={activeMenu === 'specialities' || isCentreActive} 
              onClick={() => toggleMenu('specialities')} 
              theme={theme}
            />
          </div>

          {/* Center Brand */}
          <div className="absolute left-[47%] top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
            <Link to="/" className="flex items-center justify-center">
              <BrandLogo size="lg" dark={isDark} />
            </Link>
          </div>

          {/* Right Navigation */}
          <div className="flex items-center justify-end h-full" style={{ gap: 'clamp(28px, 2.8vw, 48px)' }}>
            <NavItem 
              label="Facilities" 
              hasDropdown={true} 
              isActive={activeMenu === 'facilities' || isFacilitiesActive} 
              onClick={() => toggleMenu('facilities')} 
              theme={theme}
            />
            
            <NavItem 
              label="Contact Us" 
              href="/contact"
              isActive={isContactActive} 
              theme={theme}
            />
            <a 
              href="/book-appointment" 
              className="text-[13px] font-semibold tracking-[0.02em] uppercase px-6 py-[14px] rounded border border-black bg-black text-white hover:bg-neutral-800 transition-all duration-200 ease-in-out"
              style={{ marginLeft: 'clamp(8px, 1vw, 18px)' }}
            >
              Book Appointment
            </a>
          </div>
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
            <BrandLogo size="sm" />
          </Link>
          
          <Link 
            to="/book-appointment" 
            className="bg-black text-white text-[11px] font-medium tracking-[0.02em] uppercase px-4 py-2 rounded-md hover:bg-neutral-800 transition-colors duration-200"
          >
            Book
          </Link>
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

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-50 bg-white lg:hidden overflow-y-auto"
          >
            <div className="flex items-center justify-between px-6 h-[80px] border-b border-neutral-100">
              <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                <BrandLogo size="sm" />
              </Link>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 -mr-2 text-black hover:bg-neutral-50 rounded-md transition-colors"
                aria-label="Close Menu"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="px-6 py-8 flex flex-col gap-6">
              {/* About Us */}
              <div className="flex flex-col gap-3">
                <span className="text-[11px] font-mono tracking-widest uppercase text-neutral-400">About Us</span>
                <div className="flex flex-col gap-2.5 pl-2 border-l border-neutral-200">
                  <Link to="/about/our-story" onClick={() => setMobileMenuOpen(false)} className="text-base text-neutral-700 hover:text-black">Our Story</Link>
                  <Link to="/about/leadership" onClick={() => setMobileMenuOpen(false)} className="text-base text-neutral-700 hover:text-black">Leadership</Link>
                  <Link to="/about/why-sabari" onClick={() => setMobileMenuOpen(false)} className="text-base text-neutral-700 hover:text-black">Why Sabari</Link>
                  <Link to="/about/accreditations" onClick={() => setMobileMenuOpen(false)} className="text-base text-neutral-700 hover:text-black">Accreditations</Link>
                  <Link to="/about/patient-experience" onClick={() => setMobileMenuOpen(false)} className="text-base text-neutral-700 hover:text-black">Patient Experience</Link>
                  <Link to="/about/careers" onClick={() => setMobileMenuOpen(false)} className="text-base text-neutral-700 hover:text-black">Careers</Link>
                </div>
              </div>

              <Link to="/doctors" onClick={() => setMobileMenuOpen(false)} className="text-xl font-display font-medium text-black">Doctors</Link>
              
              {/* Centre of Excellence Mobile Section */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <Link 
                    to="/centre-of-excellence" 
                    onClick={() => setMobileMenuOpen(false)} 
                    className="text-xl font-display font-medium text-black"
                  >
                    Centre of Excellence
                  </Link>
                  <Link
                    to="/centre-of-excellence"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-[11px] font-mono tracking-wider uppercase text-neutral-500"
                  >
                    View All &rarr;
                  </Link>
                </div>
                <div className="flex flex-col gap-3 pl-2 border-l border-neutral-200">
                  {centreCategories.map((cat) => (
                    <div key={cat.id} className="flex flex-col gap-1 py-1">
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
                            className="text-[12px] text-neutral-600 hover:text-black"
                          >
                            {svc.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Facilities Mobile Section */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <Link 
                    to="/facilities" 
                    onClick={() => setMobileMenuOpen(false)} 
                    className="text-xl font-display font-medium text-black"
                  >
                    Facilities
                  </Link>
                  <Link
                    to="/facilities"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-[11px] font-mono tracking-wider uppercase text-neutral-500"
                  >
                    View All &rarr;
                  </Link>
                </div>
                <div className="flex flex-col gap-3 pl-2 border-l border-neutral-200">
                  {facilityCategories.map((cat) => (
                    <div key={cat.id} className="flex flex-col gap-1 py-1">
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
                            className="text-[12px] text-neutral-600 hover:text-black"
                          >
                            {svc.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Link 
                to="/contact" 
                onClick={() => setMobileMenuOpen(false)} 
                className="text-xl font-display font-medium text-black"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
