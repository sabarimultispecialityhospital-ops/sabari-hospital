import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { BrandLogo } from '../brand/BrandLogo';
import { NavItem } from './NavItem';
import { MegaMenu } from './MegaMenu';
import { DropdownPanel } from './DropdownPanel';
import { SimpleDropdown } from './SimpleDropdown';
import { useNavbarTheme } from '../../hooks/useNavbarTheme';
import { 
  aboutSimpleData, 
  specialitiesData, 
  facilitiesData, 
  internationalPatientsData, 
  contactSimpleData 
} from '../../data/navigationData';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, isDark } = useNavbarTheme();
  const navRef = useRef(null);

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
    <nav ref={navRef} className={`fixed top-0 left-0 right-0 z-[1000] w-full transition-colors duration-300 ${isDark ? 'bg-transparent' : 'bg-white'}`}>
      <div className="max-w-[1600px] w-full mx-auto" style={{ paddingInline: 'clamp(32px, 5vw, 80px)' }}>
        {/* Desktop Layout */}
        <div className="hidden lg:flex justify-between h-[88px] items-center relative">
          
          {/* Left Navigation */}
          <div className="flex items-center justify-start h-full" style={{ gap: 'clamp(28px, 2.8vw, 52px)' }}>
            <div className="relative">
              <NavItem 
                label="About Us" 
                hasDropdown={true} 
                isActive={activeMenu === 'about'} 
                onClick={() => toggleMenu('about')} 
                theme={theme}
              />
              <SimpleDropdown isOpen={activeMenu === 'about'} data={aboutSimpleData} />
            </div>
            
            <NavItem label="Doctors" href="/doctors" theme={theme} />
            
            <NavItem 
              label="Centre of Excellence" 
              hasDropdown={true} 
              isActive={activeMenu === 'specialities'} 
              onClick={() => toggleMenu('specialities')} 
              theme={theme}
            />
          </div>

          {/* Center Brand */}
          <div className="absolute left-[47%] top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
            <a href="/" className="flex items-center justify-center">
              <BrandLogo size="lg" dark={isDark} />
            </a>
          </div>

          {/* Right Navigation */}
          <div className="flex items-center justify-end h-full" style={{ gap: 'clamp(28px, 2.8vw, 48px)' }}>
            <NavItem 
              label="Facilities" 
              hasDropdown={true} 
              isActive={activeMenu === 'facilities'} 
              onClick={() => toggleMenu('facilities')} 
              theme={theme}
            />
            
            <div className="relative">
              <NavItem 
                label="Contact Us" 
                hasDropdown={true} 
                isActive={activeMenu === 'contact'} 
                onClick={() => toggleMenu('contact')} 
                theme={theme}
              />
              <SimpleDropdown isOpen={activeMenu === 'contact'} data={contactSimpleData} />
            </div>
            <a 
              href="/book-appointment" 
              className={`text-[13px] font-semibold tracking-[0.02em] uppercase px-6 py-[14px] rounded border transition-all duration-300 ease-in-out ${
                isDark 
                  ? 'bg-white text-black border-white hover:bg-black hover:text-white' 
                  : 'bg-black text-white border-black hover:bg-white hover:text-black'
              }`}
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
          
          <a href="/">
            <BrandLogo size="sm" />
          </a>
          
          <a 
            href="/book-appointment" 
            className="bg-black text-white text-[11px] font-medium tracking-[0.02em] uppercase px-4 py-2 rounded-md hover:bg-neutral-800 transition-colors duration-200"
          >
            Book
          </a>
        </div>
      </div>

      {/* Full-width Mega Menus (Attached below navbar) */}
      <MegaMenu isOpen={activeMenu === 'specialities'} fullWidth={true}>
        <DropdownPanel data={specialitiesData} />
      </MegaMenu>
      
      <MegaMenu isOpen={activeMenu === 'facilities'} fullWidth={true}>
        <DropdownPanel data={facilitiesData} />
      </MegaMenu>

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
              <a href="/">
                <BrandLogo size="sm" />
              </a>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 -mr-2 text-black hover:bg-neutral-50 rounded-md transition-colors"
                aria-label="Close Menu"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="px-6 py-8 flex flex-col gap-6">
              {/* Mobile menu content would be expanded here later */}
              <a href="#" className="text-xl font-display font-medium text-black">About Us</a>
              <a href="#" className="text-xl font-display font-medium text-black">Doctors</a>
              <a href="#" className="text-xl font-display font-medium text-black">Centre of Excellence</a>
              <a href="#" className="text-xl font-display font-medium text-black">Facilities</a>
              <a href="#" className="text-xl font-display font-medium text-black">Contact Us</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
