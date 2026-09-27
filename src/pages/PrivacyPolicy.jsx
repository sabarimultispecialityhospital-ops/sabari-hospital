import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../sections/Footer';
import { ShieldCheck, ArrowLeft, Mail, Phone, MapPin } from 'lucide-react';

export function PrivacyPolicy() {
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
              <ShieldCheck className="w-5 h-5 text-black" />
              <span className="text-[12px] font-mono font-semibold tracking-[0.25em] uppercase text-neutral-400">
                LEGAL & COMPLIANCE
              </span>
            </div>
            <h1 className="text-[36px] sm:text-[54px] md:text-[64px] font-medium leading-[1.08] tracking-[-0.03em] text-black mb-4">
              PRIVACY POLICY
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
              <nav className="flex flex-col space-y-2 text-neutral-600">
                <a href="#section-1" className="hover:text-black transition-colors">1. Information We Collect</a>
                <a href="#section-2" className="hover:text-black transition-colors">2. How We Use Information</a>
                <a href="#section-3" className="hover:text-black transition-colors">3. Appointment Information</a>
                <a href="#section-4" className="hover:text-black transition-colors">4. Communications</a>
                <a href="#section-5" className="hover:text-black transition-colors">5. Sharing Personal Info</a>
                <a href="#section-6" className="hover:text-black transition-colors">6. Data Security</a>
                <a href="#section-7" className="hover:text-black transition-colors">7. Data Retention</a>
                <a href="#section-8" className="hover:text-black transition-colors">8. Cookies & Technologies</a>
                <a href="#section-9" className="hover:text-black transition-colors">9. Third-Party Websites</a>
                <a href="#section-10" className="hover:text-black transition-colors">10. Your Privacy Rights</a>
                <a href="#section-11" className="hover:text-black transition-colors">11. Children's Privacy</a>
                <a href="#section-12" className="hover:text-black transition-colors">12. Changes to Policy</a>
                <a href="#section-13" className="hover:text-black transition-colors">13. Contact Us</a>
              </nav>

              <div className="pt-4 mt-4 border-t border-neutral-200">
                <p className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-2">Related Link</p>
                <Link to="/terms-of-service" className="text-black font-medium hover:underline flex items-center justify-between">
                  <span>Terms & Conditions</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </div>
          </aside>

          {/* Right Main Text */}
          <article className="lg:col-span-8 prose-neutral max-w-none text-neutral-700 leading-relaxed space-y-10">
            
            <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200/80 text-[15px] sm:text-[16px] leading-relaxed text-neutral-800">
              <p className="mb-3">
                At <strong>Sabari Hospitals</strong> (“Sabari Hospitals”, “we”, “us”, or “our”), we respect your privacy and are committed to protecting the personal information you provide when using our website, contacting us, or requesting an appointment.
              </p>
              <p>
                This Privacy Policy explains what information we collect, why we collect it, how we use it, how we protect it, and the choices available to you.
              </p>
            </div>

            {/* 1 */}
            <section id="section-1" className="pt-4 scroll-mt-28">
              <h2 className="text-2xl font-medium text-black tracking-tight mb-4 flex items-center gap-3">
                <span className="font-mono text-sm text-neutral-400">01</span>
                <span>Information We Collect</span>
              </h2>
              <p className="mb-4">When you use our website or request an appointment, we may collect information such as:</p>
              <ul className="list-disc pl-6 space-y-1.5 marker:text-neutral-400">
                <li>Full name</li>
                <li>Gender</li>
                <li>Age</li>
                <li>Phone number</li>
                <li>Email address</li>
                <li>Preferred department or speciality</li>
                <li>Preferred doctor</li>
                <li>Preferred appointment date and time</li>
                <li>Information provided in the reason-for-visit field</li>
                <li>Messages or information submitted through our contact forms</li>
                <li>Technical information such as IP address, browser type, device information and website usage information, where applicable</li>
              </ul>
              <div className="mt-4 p-4 rounded-xl bg-amber-50/70 border border-amber-200/70 text-amber-900 text-sm">
                <strong>Important Notice:</strong> Please do not provide unnecessary medical or other sensitive health information through general website forms.
              </div>
            </section>

            {/* 2 */}
            <section id="section-2" className="pt-4 scroll-mt-28">
              <h2 className="text-2xl font-medium text-black tracking-tight mb-4 flex items-center gap-3">
                <span className="font-mono text-sm text-neutral-400">02</span>
                <span>How We Use Your Information</span>
              </h2>
              <p className="mb-3">We may use the information collected to:</p>
              <ul className="list-disc pl-6 space-y-1.5 marker:text-neutral-400 mb-4">
                <li>Process and manage appointment requests</li>
                <li>Contact you regarding your appointment</li>
                <li>Respond to enquiries and requests</li>
                <li>Provide patient support</li>
                <li>Respond to feedback or complaints</li>
                <li>Communicate important information relating to our services</li>
                <li>Improve our website and digital services</li>
                <li>Maintain website security and prevent misuse</li>
                <li>Comply with applicable legal and regulatory requirements</li>
              </ul>
              <p className="text-sm text-neutral-500">
                We will use personal data for specified and legitimate purposes and seek consent where required under applicable law, including India's Digital Personal Data Protection (DPDP) framework.
              </p>
            </section>

            {/* 3 */}
            <section id="section-3" className="pt-4 scroll-mt-28">
              <h2 className="text-2xl font-medium text-black tracking-tight mb-4 flex items-center gap-3">
                <span className="font-mono text-sm text-neutral-400">03</span>
                <span>Appointment Information</span>
              </h2>
              <p className="mb-3">
                When you submit an appointment request through our website, the information you provide may be shared with the relevant administrative or healthcare personnel within Sabari Hospitals for the purpose of handling your request.
              </p>
              <p className="text-neutral-800 font-medium">
                Submitting an online appointment request does not by itself guarantee an appointment. The hospital may contact you to confirm availability, timing, doctor and other relevant details.
              </p>
            </section>

            {/* 4 */}
            <section id="section-4" className="pt-4 scroll-mt-28">
              <h2 className="text-2xl font-medium text-black tracking-tight mb-4 flex items-center gap-3">
                <span className="font-mono text-sm text-neutral-400">04</span>
                <span>Communications</span>
              </h2>
              <p className="mb-3">We may contact you using the phone number or email address provided by you to:</p>
              <ul className="list-disc pl-6 space-y-1.5 marker:text-neutral-400 mb-4">
                <li>Confirm or respond to an appointment request</li>
                <li>Clarify information submitted through the website</li>
                <li>Respond to an enquiry</li>
                <li>Provide service-related communication</li>
              </ul>
              <p className="text-sm text-neutral-500">
                Where applicable, communications may be facilitated through secure third-party communication providers.
              </p>
            </section>

            {/* 5 */}
            <section id="section-5" className="pt-4 scroll-mt-28">
              <h2 className="text-2xl font-medium text-black tracking-tight mb-4 flex items-center gap-3">
                <span className="font-mono text-sm text-neutral-400">05</span>
                <span>Sharing of Personal Information</span>
              </h2>
              <p className="mb-3 font-medium text-black">We do not sell your personal information.</p>
              <p className="mb-3">Your information may be shared only with:</p>
              <ul className="list-disc pl-6 space-y-1.5 marker:text-neutral-400 mb-4">
                <li>Authorized hospital staff</li>
                <li>Healthcare professionals involved in responding to your request</li>
                <li>Service providers who support our website, communication or technology infrastructure</li>
                <li>Government authorities or other parties where required by applicable law</li>
              </ul>
              <p className="text-sm text-neutral-500">
                Third-party service providers may process information only for the services they provide to us and subject to appropriate contractual and legal safeguards.
              </p>
            </section>

            {/* 6 */}
            <section id="section-6" className="pt-4 scroll-mt-28">
              <h2 className="text-2xl font-medium text-black tracking-tight mb-4 flex items-center gap-3">
                <span className="font-mono text-sm text-neutral-400">06</span>
                <span>Data Security</span>
              </h2>
              <p className="mb-3">
                Sabari Hospitals takes reasonable technical and organizational measures to protect personal information against unauthorized access, alteration, disclosure, misuse or loss.
              </p>
              <p className="text-sm text-neutral-500">
                However, no website, online transmission or electronic storage system can be guaranteed to be completely secure.
              </p>
            </section>

            {/* 7 */}
            <section id="section-7" className="pt-4 scroll-mt-28">
              <h2 className="text-2xl font-medium text-black tracking-tight mb-4 flex items-center gap-3">
                <span className="font-mono text-sm text-neutral-400">07</span>
                <span>Data Retention</span>
              </h2>
              <p className="mb-3">
                We retain personal information only for as long as reasonably necessary for the purpose for which it was collected, to provide services, maintain appropriate medical and administrative records, resolve disputes, meet legal obligations, and protect our legitimate interests.
              </p>
              <p className="text-sm text-neutral-500">
                Retention periods may vary depending on the type and purpose of the information.
              </p>
            </section>

            {/* 8 */}
            <section id="section-8" className="pt-4 scroll-mt-28">
              <h2 className="text-2xl font-medium text-black tracking-tight mb-4 flex items-center gap-3">
                <span className="font-mono text-sm text-neutral-400">08</span>
                <span>Cookies and Website Technologies</span>
              </h2>
              <p className="mb-3">Our website may use cookies or similar technologies to:</p>
              <ul className="list-disc pl-6 space-y-1.5 marker:text-neutral-400 mb-4">
                <li>Maintain essential website functionality</li>
                <li>Understand website usage and traffic patterns</li>
                <li>Improve website performance</li>
                <li>Remember certain user preferences</li>
              </ul>
              <p className="text-sm text-neutral-500">
                You may control cookies through your browser settings. Disabling certain cookies may affect some website functionality.
              </p>
            </section>

            {/* 9 */}
            <section id="section-9" className="pt-4 scroll-mt-28">
              <h2 className="text-2xl font-medium text-black tracking-tight mb-4 flex items-center gap-3">
                <span className="font-mono text-sm text-neutral-400">09</span>
                <span>Third-Party Websites and Services</span>
              </h2>
              <p className="mb-3">
                Our website may contain links to third-party websites, services or platforms.
              </p>
              <p className="text-sm text-neutral-500">
                Sabari Hospitals is not responsible for the privacy practices, content or security of third-party websites. We recommend reviewing the privacy policies of those external websites before providing personal information.
              </p>
            </section>

            {/* 10 */}
            <section id="section-10" className="pt-4 scroll-mt-28">
              <h2 className="text-2xl font-medium text-black tracking-tight mb-4 flex items-center gap-3">
                <span className="font-mono text-sm text-neutral-400">10</span>
                <span>Your Privacy Rights</span>
              </h2>
              <p className="mb-3">Subject to applicable Indian law (including DPDP regulations), you may have rights relating to your personal data, including the ability to:</p>
              <ul className="list-disc pl-6 space-y-1.5 marker:text-neutral-400 mb-4">
                <li>Request information about personal data processed about you</li>
                <li>Request correction of inaccurate or incomplete information</li>
                <li>Withdraw consent where processing is based on consent</li>
                <li>Request deletion of personal data where applicable</li>
                <li>Raise a grievance regarding the processing of your personal data</li>
              </ul>
              <p className="text-sm text-neutral-500">
                The applicable rights, procedures and limitations depend on the nature of the processing and the law in force at the relevant time.
              </p>
            </section>

            {/* 11 */}
            <section id="section-11" className="pt-4 scroll-mt-28">
              <h2 className="text-2xl font-medium text-black tracking-tight mb-4 flex items-center gap-3">
                <span className="font-mono text-sm text-neutral-400">11</span>
                <span>Children's Privacy</span>
              </h2>
              <p className="mb-3">
                Our website is not intended to independently collect personal information from children.
              </p>
              <p className="text-sm text-neutral-600">
                Where an appointment or enquiry relates to a child, information should be submitted by or with the involvement of the child's parent, legal guardian or another person authorized to provide it.
              </p>
            </section>

            {/* 12 */}
            <section id="section-12" className="pt-4 scroll-mt-28">
              <h2 className="text-2xl font-medium text-black tracking-tight mb-4 flex items-center gap-3">
                <span className="font-mono text-sm text-neutral-400">12</span>
                <span>Changes to This Privacy Policy</span>
              </h2>
              <p className="mb-3">
                We may update this Privacy Policy from time to time to reflect changes in our services, technology, legal requirements or privacy practices.
              </p>
              <p className="text-sm text-neutral-500">
                Any updated version will be published on this page with a revised “Last Updated” date.
              </p>
            </section>

            {/* 13 */}
            <section id="section-13" className="pt-4 scroll-mt-28">
              <h2 className="text-2xl font-medium text-black tracking-tight mb-4 flex items-center gap-3">
                <span className="font-mono text-sm text-neutral-400">13</span>
                <span>Contact Us</span>
              </h2>
              <p className="mb-4">
                If you have questions, requests or concerns regarding this Privacy Policy or the processing of your personal information, please contact us:
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
                <div className="pt-3 border-t border-neutral-800 text-xs text-neutral-400 font-mono">
                  Grievance Officer: sabarimultispecialityhospital@gmail.com
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
