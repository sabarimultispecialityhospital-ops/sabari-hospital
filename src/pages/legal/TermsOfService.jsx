import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../../sections/Footer';

export function TermsOfService() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      num: "01",
      title: "About This Website",
      body: (
        <p className="text-neutral-600 leading-relaxed font-light">
          This website is provided to share information about Sabari Hospitals, its healthcare services, departments, facilities, consulting specialists, contact directories, and digital appointment-request facilities. All information published on the site is intended for general informational and patient-guidance purposes.
        </p>
      )
    },
    {
      num: "02",
      title: "Medical Information Disclaimer",
      body: (
        <div className="space-y-4">
          <p className="text-neutral-600 leading-relaxed font-light">
            The information available on this website is not a substitute for professional medical advice, clinical diagnosis, or active treatment. Information regarding medical conditions, surgical procedures, diagnostic screenings, or specialty departments should never be used to self-diagnose or self-treat.
          </p>
          <div className="p-4 bg-red-50/60 border-l-2 border-red-500 rounded-r text-[13px] text-red-900 leading-relaxed">
            <strong>Emergency Medical Notice:</strong> If you are experiencing a medical emergency, acute symptoms, or immediate trauma, please call our 24/7 Helpline at <a href="tel:+914222442200" className="underline font-mono font-bold">0422-2442200</a>, contact emergency medical services, or visit the Sabari Hospital Emergency Department immediately.
          </div>
        </div>
      )
    },
    {
      num: "03",
      title: "Doctor and Specialist Information",
      body: (
        <p className="text-neutral-600 leading-relaxed font-light">
          Information concerning doctors, visiting consultants, clinical qualifications, departmental attachments, and OPD timings is provided for general patient orientation. Doctor availability, consultation schedules, and emergency clinical duties may change without prior notice. Mention of a doctor or specialty does not guarantee immediate availability for any specific date or time.
        </p>
      )
    },
    {
      num: "04",
      title: "Appointment Requests",
      body: (
        <div className="space-y-3 text-neutral-600 leading-relaxed font-light">
          <p>
            The appointment facility available on this website is a digital request and enquiry mechanism.
          </p>
          <p>
            Submitting an appointment request form does not constitute a confirmed appointment booking. An appointment is confirmed only following direct scheduling verification by Sabari Hospitals' reception desk via call, WhatsApp, or SMS.
          </p>
        </div>
      )
    },
    {
      num: "05",
      title: "Accuracy of Information",
      body: (
        <p className="text-neutral-600 leading-relaxed font-light">
          We make all reasonable efforts to ensure that the content and health guides on this website are accurate and up to date. However, medical knowledge, tariff regulations, and hospital facilities evolve. Sabari Hospitals reserves the right to modify, revise, or update website content at any time without prior notice.
        </p>
      )
    },
    {
      num: "06",
      title: "Website Availability",
      body: (
        <p className="text-neutral-600 leading-relaxed font-light">
          We strive to keep the website available 24/7, but we do not guarantee uninterrupted, error-free access. The website may occasionally undergo maintenance, technical upgrades, network downtime, or hosting modifications beyond our immediate control.
        </p>
      )
    },
    {
      num: "07",
      title: "Acceptable Use",
      body: (
        <div className="space-y-3 text-neutral-600 leading-relaxed font-light">
          <p>When accessing our website, you agree not to:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-neutral-700 text-[14px]">
            <li>Use the website for any unlawful, harassing, or fraudulent purpose</li>
            <li>Attempt unauthorized access to backend servers, databases, or API infrastructure</li>
            <li>Introduce malicious code, viruses, automated crawlers, or harmful payloads</li>
            <li>Interfere with website operational security or compromise patient booking systems</li>
            <li>Submit false, misleading, or fraudulent patient identities or appointment requests</li>
            <li>Scrape, duplicate, or misuse hospital medical content without explicit written consent</li>
          </ul>
        </div>
      )
    },
    {
      num: "08",
      title: "Intellectual Property",
      body: (
        <p className="text-neutral-600 leading-relaxed font-light">
          All brand marks, logos, typography, editorial text, clinical photographs, icons, diagrams, videos, and layout architecture displayed on this website are the proprietary property of Sabari Hospitals (or used with permission). You may not reproduce, distribute, republish, or commercially exploit any material without prior written permission.
        </p>
      )
    },
    {
      num: "09",
      title: "Third-Party Links",
      body: (
        <p className="text-neutral-600 leading-relaxed font-light">
          Our website may contain hyperlinks to external reference websites, medical research repositories, or third-party mapping systems. Sabari Hospitals does not control or endorse external third-party content and assumes no liability for their accuracy, security, or privacy policies.
        </p>
      )
    },
    {
      num: "10",
      title: "User-Submitted Information",
      body: (
        <p className="text-neutral-600 leading-relaxed font-light">
          When submitting information through contact or consultation forms, you confirm that all details provided are accurate, truthful, and that you possess the lawful authority to provide them. You agree not to submit third-party personal or medical information without appropriate consent.
        </p>
      )
    },
    {
      num: "11",
      title: "Privacy",
      body: (
        <p className="text-neutral-600 leading-relaxed font-light">
          Your use of this website is also governed by our <Link to="/privacy-policy" className="text-black font-medium underline">Privacy Policy</Link>, which details how personal data is collected, processed, and safeguarded.
        </p>
      )
    },
    {
      num: "12",
      title: "Limitation of Liability",
      body: (
        <p className="text-neutral-600 leading-relaxed font-light">
          To the maximum extent permitted by applicable Indian law, Sabari Hospitals, its trustees, doctors, and staff shall not be liable for any direct, indirect, or incidental damages arising from reliance on general web information, temporary service outages, third-party integrations, or technical failures beyond our reasonable control.
        </p>
      )
    },
    {
      num: "13",
      title: "Changes to These Terms",
      body: (
        <p className="text-neutral-600 leading-relaxed font-light">
          Sabari Hospitals may revise these Terms & Conditions from time to time. The latest revision will always be accessible on this page with the updated effective date. Continued usage of the website following changes constitutes acceptance of the amended terms.
        </p>
      )
    },
    {
      num: "14",
      title: "Governing Law & Jurisdiction",
      body: (
        <p className="text-neutral-600 leading-relaxed font-light">
          These Terms & Conditions are governed by and construed in accordance with the substantive laws of India. Any legal dispute or claim arising out of or in connection with the website shall be subject to the exclusive jurisdiction of the competent courts in Coimbatore, Tamil Nadu, India.
        </p>
      )
    },
    {
      num: "15",
      title: "Contact & Enquiries",
      body: (
        <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 space-y-2 text-[14px] text-neutral-800">
          <p className="font-semibold text-black text-base">Sabari Hospitals</p>
          <p className="font-light text-neutral-600">Coimbatore, Tamil Nadu, India</p>
          <p className="pt-2"><strong>Direct Helpline:</strong> <a href="tel:+914222442200" className="text-black underline font-mono">0422-2442200</a></p>
          <p><strong>Official Email:</strong> <a href="mailto:sabarimultispecialityhospital@gmail.com" className="text-black underline">sabarimultispecialityhospital@gmail.com</a></p>
        </div>
      )
    }
  ];

  return (
    <div data-nav-theme="light" className="w-full min-h-screen bg-white text-black selection:bg-neutral-200">
      
      {/* Header / Hero */}
      <section className="w-full pt-28 pb-12 sm:pt-36 sm:pb-16 px-6 lg:px-16 border-b border-neutral-200">
        <div className="max-w-[1200px] w-full mx-auto">
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span className="text-[12px] font-mono font-semibold tracking-[0.25em] uppercase text-neutral-500">
                LEGAL & GOVERNANCE
              </span>
              <span className="text-neutral-300">&bull;</span>
              <span className="text-[11px] font-mono text-neutral-500">
                LAST UPDATED: 27 SEPTEMBER 2026
              </span>
            </div>
            
            <h1 className="text-[34px] sm:text-[52px] lg:text-[68px] font-medium leading-[1.05] tracking-[-0.03em] text-black mb-6">
              TERMS & CONDITIONS.
            </h1>
            
            <p className="text-[16px] sm:text-[19px] text-neutral-600 leading-relaxed max-w-3xl font-light">
              Welcome to the website of Sabari Hospitals. By accessing or using this website, you agree to these Terms & Conditions.
            </p>

            {/* Quick Switch to Privacy */}
            <div className="flex items-center gap-3 pt-8">
              <span className="px-3.5 py-1.5 bg-black text-white text-[12px] font-semibold tracking-wider uppercase rounded-full">
                Terms of Service
              </span>
              <Link 
                to="/privacy-policy"
                className="px-3.5 py-1.5 border border-neutral-300 text-neutral-600 hover:text-black hover:border-black text-[12px] font-semibold tracking-wider uppercase rounded-full transition-colors"
              >
                Privacy Policy &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Content Sections */}
      <section className="w-full py-16 sm:py-24 px-6 lg:px-16">
        <div className="max-w-[1200px] w-full mx-auto">
          <div className="divide-y divide-neutral-200">
            {sections.map((section) => (
              <div key={section.num} className="py-10 sm:py-14 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-10">
                <div className="md:col-span-4 flex items-start gap-4">
                  <span className="font-mono text-xs font-semibold tracking-wider text-neutral-400">
                    {section.num}
                  </span>
                  <h2 className="text-[20px] sm:text-[24px] font-medium tracking-tight text-black">
                    {section.title}
                  </h2>
                </div>
                <div className="md:col-span-8">
                  {section.body}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
