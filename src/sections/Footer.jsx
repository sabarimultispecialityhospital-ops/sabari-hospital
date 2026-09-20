import React from 'react';
import { Link } from 'react-router-dom';
import { BrandLogo } from '../components/brand/BrandLogo';

export function Footer() {
  return (
    <footer data-nav-theme="dark" className="w-full bg-[#050505] text-white pt-[120px] pb-8 px-6 lg:px-16">
      <div className="max-w-[1600px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 mb-24">
        
        {/* Brand */}
        <div className="lg:col-span-4 flex flex-col items-start">
          <BrandLogo size="lg" dark={true} className="mb-6 items-start" />
        </div>

        {/* Quick Links */}
        <div className="lg:col-span-4 flex flex-col">
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/50 mb-8 block">
            QUICK LINKS
          </span>
          <div className="flex flex-col gap-4">
            <Link to="/about/our-story" className="text-[14px] text-white/80 hover:text-white transition-colors">ABOUT US</Link>
            <Link to="/doctors" className="text-[14px] text-white/80 hover:text-white transition-colors">DOCTORS</Link>
            <Link to="/centre-of-excellence" className="text-[14px] text-white/80 hover:text-white transition-colors">CENTRE OF EXCELLENCE</Link>
            <Link to="/facilities" className="text-[14px] text-white/80 hover:text-white transition-colors">FACILITIES</Link>
            <Link to="/contact" className="text-[14px] text-white/80 hover:text-white transition-colors">CONTACT US</Link>
          </div>
        </div>

        {/* Contact */}
        <div className="lg:col-span-4 flex flex-col">
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/50 mb-8 block">
            CONTACT
          </span>
          <div className="flex flex-col gap-4 text-[14px] text-white/80">
            <p>123 Medical Boulevard<br />Healthcare District<br />City, ST 12345</p>
            <p className="mt-4">
              <a href="tel:+18001234567" className="hover:text-white transition-colors">+1 (800) 123-4567</a>
            </p>
            <p>
              <a href="mailto:care@sabarihospitals.com" className="hover:text-white transition-colors">care@sabarihospitals.com</a>
            </p>
          </div>
        </div>

      </div>

      <div className="max-w-[1600px] w-full mx-auto flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-[12px] text-white/40">
        <p>&copy; {new Date().getFullYear()} Sabari Hospitals. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
