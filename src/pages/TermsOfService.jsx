import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../sections/Footer';
import { FileText, ArrowLeft, Mail, Phone, MapPin, AlertCircle } from 'lucide-react';

export function TermsOfService() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div data-nav-theme="light" className="w-full min-h-screen bg-white text-black selection:bg-neutral-200">
      
      {/* 1. Header / Hero */}
      <section className="w-full pt-28 pb-12 sm:pt-36 sm:pb-16 lg:pt-40 lg:pb-20 px-6 lg:px-16 border-b border-neutral-200 bg-neutral-50/50">
        <div className="max-w-[1200px] w-full mx-auto">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-500 hover:text-black transition-colors mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
          <div className="flex flex-col max-w-4xl">
            <div className="flex items-center gap-2.5 mb-3">
              <FileText className="w-5 h-5 text-black" />
              <span className="text-[12px] font-mono font-semibold tracking-[0.25em] uppercase text-neutral-400">
                LEGAL & COMPLIANCE
              </span>
            </div>
            <h1 className="text-[36px] sm:text-[54px] md:text-[64px] font-medium leading-[1.08] tracking-[-0.03em] text-black mb-4">
              TERMS & CONDITIONS
            </h1>
            <p className="text-sm font-mono text-neutral-500 uppercase tracking-wider">
              Last Updated: 27 September 2026
            </p>
          </div>
        </div>
      </section>

      {/* 2. Main Content Body */}
      <section className="w-full py-12 sm:py-16 lg:py-24 px-6 lg:px-16">
        <div className="max-w-[1200px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Table of Contents Sticky Sidebar */}
          <aside className="hidden lg:block lg:col-span-4">
            <div className="sticky top-28 space-y-3 p-6 rounded-2xl bg-neutral-50 border border-neutral-200/80 text-[13px]">
              <p className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 mb-3 font-semibold">
                Table of Contents
              </p>
              <nav className="flex flex-col space-y-2 text-neutral-600 max-h-[60vh] overflow-y-auto pr-2">
                <a href="#section-1" className="hover:text-black transition-colors">1. About This Website</a>
                <a href="#section-2" className="hover:text-black transition-colors">2. Medical Disclaimer</a>
                <a href="#section-3" className="hover:text-black transition-colors">3. Doctors & Specialists</a>
                <a href="#section-4" className="hover:text-black transition-colors">4. Appointment Requests</a>
                <a href="#section-5" className="hover:text-black transition-colors">5. Accuracy of Info</a>
                <a href="#section-6" className="hover:text-black transition-colors">6. Website Availability</a>
                <a href="#section-7" className="hover:text-black transition-colors">7. Acceptable Use</a>
                <a href="#section-8" className="hover:text-black transition-colors">8. Intellectual Property</a>
                <a href="#section-9" className="hover:text-black transition-colors">9. Third-Party Links</a>
                <a href="#section-10" className="hover:text-black transition-colors">10. User Submitted Info</a>
                <a href="#section-11" className="hover:text-black transition-colors">11. Privacy Policy</a>
                <a href="#section-12" className="hover:text-black transition-colors">12. Limitation of Liability</a>
                <a href="#section-13" className="hover:text-black transition-colors">13. Changes to Terms</a>
                <a href="#section-14" className="hover:text-black transition-colors">14. Governing Law</a>
                <a href="#section-15" className="hover:text-black transition-colors">15. Contact Us</a>
              </nav>

              <div className="pt-4 mt-4 border-t border-neutral-200">
                <p className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-2">Related Link</p>
                <Link to="/privacy-policy" className="text-black font-medium hover:underline flex items-center justify-between">
                  <span>Privacy Policy</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </div>
          </aside>

          {/* Right Main Text */}
          <article className="lg:col-span-8 prose-neutral max-w-none text-neutral-700 leading-relaxed space-y-10">
            
            <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200/80 text-[15px] sm:text-[16px] leading-relaxed text-neutral-800">
              <p>
                Welcome to the website of <strong>Sabari Hospitals</strong>. By accessing or using this website, you agree to the following Terms & Conditions. If you do not agree with these terms, please discontinue use of the website.
              </p>
            </div>

            {/* 1 */}
            <section id="section-1" className="pt-4 scroll-mt-28">
              <h2 className="text-2xl font-medium text-black tracking-tight mb-4 flex items-center gap-3">
                <span className="font-mono text-sm text-neutral-400">01</span>
                <span>About This Website</span>
              </h2>
              <p className="mb-3">
                This website is provided to share information about Sabari Hospitals, its healthcare services, departments, facilities, doctors, contact information and appointment-request facilities.
              </p>
              <p>
                The information provided on the website is intended for general informational and healthcare-service purposes.
              </p>
            </section>

            {/* 2 */}
            <section id="section-2" className="pt-4 scroll-mt-28">
              <h2 className="text-2xl font-medium text-black tracking-tight mb-4 flex items-center gap-3">
                <span className="font-mono text-sm text-neutral-400">02</span>
                <span>Medical Information Disclaimer</span>
              </h2>
              <div className="p-4 rounded-xl bg-red-50/70 border border-red-200/70 text-red-900 text-sm mb-4 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <strong>Medical Disclaimer:</strong> The information available on this website is not a substitute for professional medical advice, diagnosis or treatment.
                </div>
              </div>
              <p className="mb-3">
                Information about medical conditions, treatments, procedures, departments or healthcare services should not be used to diagnose or treat a medical condition without consultation with an appropriately qualified healthcare professional.
              </p>
              <p className="font-medium text-black">
                If you have a medical emergency, please contact the appropriate emergency medical service immediately (Helpline: 0422-2442200) or visit the nearest hospital emergency department.
              </p>
            </section>

            {/* 3 */}
            <section id="section-3" className="pt-4 scroll-mt-28">
              <h2 className="text-2xl font-medium text-black tracking-tight mb-4 flex items-center gap-3">
                <span className="font-mono text-sm text-neutral-400">03</span>
                <span>Doctor and Specialist Information</span>
              </h2>
              <p className="mb-3">
                Information about doctors, specialists, qualifications, departments, areas of expertise and availability is provided for general informational purposes.
              </p>
              <p className="mb-3">
                Doctor availability, consultation timings, services and schedules may change without prior notice.
              </p>
              <p className="text-sm text-neutral-500">
                Displaying a doctor or speciality on this website does not guarantee availability for a particular date or time.
              </p>
            </section>

            {/* 4 */}
            <section id="section-4" className="pt-4 scroll-mt-28">
              <h2 className="text-2xl font-medium text-black tracking-tight mb-4 flex items-center gap-3">
                <span className="font-mono text-sm text-neutral-400">04</span>
                <span>Appointment Requests</span>
              </h2>
              <p className="mb-3">
                The appointment facility available on this website is a request and enquiry mechanism.
              </p>
              <p className="mb-3 font-medium text-black">
                Submitting an appointment form does not constitute confirmation of an appointment.
              </p>
              <p className="mb-3">
                An appointment may be confirmed only after verification by Sabari Hospitals or its authorized representatives.
              </p>
              <p className="text-sm text-neutral-500">
                The hospital may contact you using the information provided in your appointment request.
              </p>
            </section>

            {/* 5 */}
            <section id="section-5" className="pt-4 scroll-mt-28">
              <h2 className="text-2xl font-medium text-black tracking-tight mb-4 flex items-center gap-3">
                <span className="font-mono text-sm text-neutral-400">05</span>
                <span>Accuracy of Information</span>
              </h2>
              <p className="mb-3">
                We make reasonable efforts to keep the information on this website accurate and up to date.
              </p>
              <p className="mb-3">
                However, information may occasionally change or contain errors, omissions or outdated details.
              </p>
              <p className="text-sm text-neutral-500">
                Sabari Hospitals reserves the right to update, modify or remove website content without prior notice.
              </p>
            </section>

            {/* 6 */}
            <section id="section-6" className="pt-4 scroll-mt-28">
              <h2 className="text-2xl font-medium text-black tracking-tight mb-4 flex items-center gap-3">
                <span className="font-mono text-sm text-neutral-400">06</span>
                <span>Website Availability</span>
              </h2>
              <p className="mb-3">
                We aim to keep the website available and functional, but we do not guarantee uninterrupted or error-free access.
              </p>
              <p className="mb-2">The website may occasionally be unavailable because of:</p>
              <ul className="list-disc pl-6 space-y-1.5 marker:text-neutral-400">
                <li>Maintenance</li>
                <li>Technical issues</li>
                <li>Updates</li>
                <li>Security measures</li>
                <li>Network or hosting problems</li>
                <li>Circumstances beyond our reasonable control</li>
              </ul>
            </section>

            {/* 7 */}
            <section id="section-7" className="pt-4 scroll-mt-28">
              <h2 className="text-2xl font-medium text-black tracking-tight mb-4 flex items-center gap-3">
                <span className="font-mono text-sm text-neutral-400">07</span>
                <span>Acceptable Use</span>
              </h2>
              <p className="mb-3">You agree not to:</p>
              <ul className="list-disc pl-6 space-y-1.5 marker:text-neutral-400">
                <li>Use the website for unlawful purposes</li>
                <li>Attempt to gain unauthorized access to the website or its systems</li>
                <li>Introduce malicious software or harmful code</li>
                <li>Interfere with website security or functionality</li>
                <li>Submit false, misleading or fraudulent information</li>
                <li>Use automated systems to misuse or overload the website</li>
                <li>Copy or misuse website content without authorization</li>
              </ul>
            </section>

            {/* 8 */}
            <section id="section-8" className="pt-4 scroll-mt-28">
              <h2 className="text-2xl font-medium text-black tracking-tight mb-4 flex items-center gap-3">
                <span className="font-mono text-sm text-neutral-400">08</span>
                <span>Intellectual Property</span>
              </h2>
              <p className="mb-3">
                Unless otherwise stated, the content of this website, including Sabari Hospitals branding, logos, text, photographs, graphics, videos, design elements, website layout, and other original materials, is owned by or used with authorization by Sabari Hospitals and may be protected by applicable intellectual-property laws.
              </p>
              <p className="text-sm text-neutral-500">
                You may not reproduce, distribute, modify, publish or commercially exploit such content without prior written permission.
              </p>
            </section>

            {/* 9 */}
            <section id="section-9" className="pt-4 scroll-mt-28">
              <h2 className="text-2xl font-medium text-black tracking-tight mb-4 flex items-center gap-3">
                <span className="font-mono text-sm text-neutral-400">09</span>
                <span>Third-Party Links</span>
              </h2>
              <p className="mb-3">
                The website may contain links to third-party websites or services.
              </p>
              <p className="text-sm text-neutral-500">
                These links are provided for convenience. Sabari Hospitals does not necessarily control or endorse third-party websites and is not responsible for their content, availability, security or privacy practices.
              </p>
            </section>

            {/* 10 */}
            <section id="section-10" className="pt-4 scroll-mt-28">
              <h2 className="text-2xl font-medium text-black tracking-tight mb-4 flex items-center gap-3">
                <span className="font-mono text-sm text-neutral-400">10</span>
                <span>User-Submitted Information</span>
              </h2>
              <p className="mb-3">
                When submitting information through our forms, you confirm that the information provided by you is accurate and that you have the necessary authority to provide it.
              </p>
              <p className="text-sm text-neutral-500">
                You should not submit information belonging to another person without appropriate authorization.
              </p>
            </section>

            {/* 11 */}
            <section id="section-11" className="pt-4 scroll-mt-28">
              <h2 className="text-2xl font-medium text-black tracking-tight mb-4 flex items-center gap-3">
                <span className="font-mono text-sm text-neutral-400">11</span>
                <span>Privacy</span>
              </h2>
              <p>
                Your use of this website is also subject to our{' '}
                <Link to="/privacy-policy" className="text-black font-medium underline">
                  Privacy Policy
                </Link>
                , which explains how personal information submitted through the website may be collected, used and protected.
              </p>
            </section>

            {/* 12 */}
            <section id="section-12" className="pt-4 scroll-mt-28">
              <h2 className="text-2xl font-medium text-black tracking-tight mb-4 flex items-center gap-3">
                <span className="font-mono text-sm text-neutral-400">12</span>
                <span>Limitation of Liability</span>
              </h2>
              <p className="mb-3">
                To the extent permitted by applicable law, Sabari Hospitals shall not be responsible for losses arising solely from reliance on general website information, website interruptions, third-party services, technical failures or unauthorized access beyond our reasonable control.
              </p>
              <p className="text-sm text-neutral-500">
                Nothing in these Terms is intended to exclude or limit any liability that cannot lawfully be excluded or limited.
              </p>
            </section>

            {/* 13 */}
            <section id="section-13" className="pt-4 scroll-mt-28">
              <h2 className="text-2xl font-medium text-black tracking-tight mb-4 flex items-center gap-3">
                <span className="font-mono text-sm text-neutral-400">13</span>
                <span>Changes to These Terms</span>
              </h2>
              <p className="mb-3">
                Sabari Hospitals may update these Terms & Conditions from time to time.
              </p>
              <p className="text-sm text-neutral-500">
                Updated terms will be published on this page with a revised “Last Updated” date. Your continued use of the website after an update constitutes use of the website subject to the updated terms, to the extent permitted by applicable law.
              </p>
            </section>

            {/* 14 */}
            <section id="section-14" className="pt-4 scroll-mt-28">
              <h2 className="text-2xl font-medium text-black tracking-tight mb-4 flex items-center gap-3">
                <span className="font-mono text-sm text-neutral-400">14</span>
                <span>Governing Law</span>
              </h2>
              <p className="mb-3">
                These Terms & Conditions shall be governed by the applicable laws of India.
              </p>
              <p className="text-sm text-neutral-500">
                Any disputes shall be subject to the jurisdiction of the appropriate courts having jurisdiction over Coimbatore, Tamil Nadu, unless applicable law requires otherwise.
              </p>
            </section>

            {/* 15 */}
            <section id="section-15" className="pt-4 scroll-mt-28">
              <h2 className="text-2xl font-medium text-black tracking-tight mb-4 flex items-center gap-3">
                <span className="font-mono text-sm text-neutral-400">15</span>
                <span>Contact Us</span>
              </h2>
              <p className="mb-4">
                For questions regarding these Terms & Conditions, please contact us:
              </p>
              
              <div className="p-6 rounded-2xl bg-neutral-900 text-white space-y-4">
                <h3 className="text-lg font-medium text-white">Sabari Hospitals</h3>
                <div className="flex items-start gap-3 text-neutral-300 text-sm">
                  <MapPin className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                  <span>Coimbatore, Tamil Nadu, India</span>
                </div>
                <div className="flex items-center gap-3 text-neutral-300 text-sm">
                  <Phone className="w-4 h-4 text-neutral-400 shrink-0" />
                  <a href="tel:+914222442200" className="hover:text-white transition-colors underline">0422-2442200</a>
                </div>
                <div className="flex items-center gap-3 text-neutral-300 text-sm">
                  <Mail className="w-4 h-4 text-neutral-400 shrink-0" />
                  <a href="mailto:sabarimultispecialityhospital@gmail.com" className="hover:text-white transition-colors underline">sabarimultispecialityhospital@gmail.com</a>
                </div>
              </div>
            </section>

          </article>
        </div>
      </section>

      <Footer />
    </div>
  );
}
