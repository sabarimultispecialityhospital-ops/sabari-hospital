import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../../sections/Footer';

export function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      num: "01",
      title: "Information We Collect",
      body: (
        <div className="space-y-4">
          <p className="text-neutral-600 leading-relaxed font-light">
            When you use our website or request an appointment, we may collect personal information necessary to deliver quality healthcare services, including:
          </p>
          <ul className="grid sm:grid-cols-2 gap-2.5 pt-2 text-neutral-700 text-[14px]">
            {[
              "Full name",
              "Gender & Age",
              "Phone number",
              "Email address",
              "Preferred department or speciality",
              "Preferred consulting doctor",
              "Preferred appointment date & time",
              "Reason for visit / symptoms summary",
              "Messages submitted via contact forms",
              "Device, browser & usage data (IP, browser type)"
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-2.5 bg-neutral-50 px-3.5 py-2 rounded border border-neutral-100 font-normal">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 p-4 bg-neutral-50 border-l-2 border-black text-[13px] text-neutral-600 leading-relaxed">
            <strong>Important:</strong> Please do not submit unnecessary or sensitive medical records through general website forms. Medical histories are documented directly in-clinic during your consultation.
          </div>
        </div>
      )
    },
    {
      num: "02",
      title: "How We Use Your Information",
      body: (
        <div className="space-y-4">
          <p className="text-neutral-600 leading-relaxed font-light">
            We use the collected information for specified, legitimate healthcare and operational purposes in compliance with applicable Indian data protection standards:
          </p>
          <ul className="space-y-2 text-neutral-700 text-[14px]">
            {[
              "Process, schedule, and manage patient consultation requests",
              "Contact you to confirm slot availability, appointment timing, and doctor schedules",
              "Respond promptly to medical enquiries, support requests, and hospital services guidance",
              "Address patient feedback or clinical service queries with our administration team",
              "Communicate essential service advisories, department notices, or hospital guidelines",
              "Maintain platform security, prevent unauthorized access, and protect hospital infrastructure",
              "Comply with statutory healthcare regulations, clinical governance, and legal obligations"
            ].map((point, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="text-neutral-400 font-mono text-xs mt-0.5">&bull;</span>
                <span className="font-light">{point}</span>
              </li>
            ))}
          </ul>
          <p className="text-[13px] text-neutral-500 font-light pt-2">
            In accordance with India’s Digital Personal Data Protection (DPDP) framework, personal data is processed solely for specified, lawful purposes with appropriate consent mechanisms.
          </p>
        </div>
      )
    },
    {
      num: "03",
      title: "Appointment Information",
      body: (
        <div className="space-y-3 text-neutral-600 leading-relaxed font-light">
          <p>
            When you submit an appointment request through our website, your information is routed directly to the designated clinical coordination and administrative desk at Sabari Hospitals to facilitate your visit.
          </p>
          <p>
            <strong>Confirmation Notice:</strong> Submitting an online appointment request constitutes a preliminary enquiry and does not by itself guarantee a confirmed slot. Our hospital desk will verify doctor schedules and reach out to you via call or WhatsApp/SMS to confirm availability.
          </p>
        </div>
      )
    },
    {
      num: "04",
      title: "Communications",
      body: (
        <div className="space-y-3 text-neutral-600 leading-relaxed font-light">
          <p>
            We may communicate with you using the phone number, WhatsApp, or email address you provided to:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-neutral-700 text-[14px]">
            <li>Confirm, reschedule, or follow up on your appointment request</li>
            <li>Clarify patient details or doctor preferences submitted through forms</li>
            <li>Respond to direct healthcare enquiries and patient care assistance</li>
            <li>Send service-related alerts or emergency operational updates</li>
          </ul>
          <p className="text-[13px] text-neutral-500">
            Where necessary, transactional communications (e.g. appointment notifications) may be routed through certified communication gateways.
          </p>
        </div>
      )
    },
    {
      num: "05",
      title: "Sharing of Personal Information",
      body: (
        <div className="space-y-3 text-neutral-600 leading-relaxed font-light">
          <p className="font-medium text-black">
            We never sell, trade, or rent your personal information to third parties.
          </p>
          <p>
            Personal data is disclosed only on a strict need-to-know basis to:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-neutral-700 text-[14px]">
            <li>Authorized hospital medical and administrative personnel directly involved in your care</li>
            <li>Healthcare specialists assigned to your consultation or treatment plan</li>
            <li>Trusted technology and communication service providers bound by confidentiality and security obligations</li>
            <li>Regulatory, clinical, or judicial authorities when mandated by applicable Indian law</li>
          </ul>
        </div>
      )
    },
    {
      num: "06",
      title: "Data Security",
      body: (
        <p className="text-neutral-600 leading-relaxed font-light">
          Sabari Hospitals implements organizational and technical safeguards—including TLS encryption, access controls, restricted database access, and server-side validation—to protect your personal details against unauthorized access, loss, alteration, or disclosure. While we uphold stringent digital safeguards, no internet transmission can be guaranteed to be 100% immune from external risks.
        </p>
      )
    },
    {
      num: "07",
      title: "Data Retention",
      body: (
        <p className="text-neutral-600 leading-relaxed font-light">
          We retain personal data only for as long as necessary to fulfill the purpose for which it was gathered, maintain accurate medical records under healthcare establishment regulations, handle patient follow-ups, resolve disputes, and comply with statutory retention timelines. Data is securely deleted or anonymized once retention periods expire.
        </p>
      )
    },
    {
      num: "08",
      title: "Cookies and Website Technologies",
      body: (
        <p className="text-neutral-600 leading-relaxed font-light">
          Our website utilizes minimal, essential session cookies and performance telemetry to maintain system responsiveness, remember interface preferences, and analyze anonymized traffic. You can adjust cookie preferences through your web browser; disabling necessary cookies may impact certain interactive features.
        </p>
      )
    },
    {
      num: "09",
      title: "Third-Party Websites and Services",
      body: (
        <p className="text-neutral-600 leading-relaxed font-light">
          Our website may provide reference links or embedded maps (such as Google Maps for hospital location). Sabari Hospitals does not govern third-party privacy protocols. We encourage users to inspect third-party privacy notices prior to providing identifiable information.
        </p>
      )
    },
    {
      num: "10",
      title: "Your Privacy Rights",
      body: (
        <div className="space-y-3 text-neutral-600 leading-relaxed font-light">
          <p>
            Under applicable data protection laws, including India’s DPDP framework, you retain rights concerning your personal data:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-neutral-700 text-[14px]">
            <li><strong>Right to Access:</strong> Request a summary of personal information processed by the hospital.</li>
            <li><strong>Right to Correction:</strong> Request updating of inaccurate, outdated, or incomplete details.</li>
            <li><strong>Right to Withdrawal:</strong> Withdraw consent for non-essential communications at any time.</li>
            <li><strong>Right to Grievance Redressal:</strong> Submit inquiries or grievances to our data administration desk.</li>
          </ul>
        </div>
      )
    },
    {
      num: "11",
      title: "Children's Privacy",
      body: (
        <p className="text-neutral-600 leading-relaxed font-light">
          Our website does not knowingly solicit or collect personal information directly from minors under the age of 18 without parental involvement. Consultation requests for pediatric care must be submitted by a parent, legal guardian, or authorized caregiver.
        </p>
      )
    },
    {
      num: "12",
      title: "Changes to This Privacy Policy",
      body: (
        <p className="text-neutral-600 leading-relaxed font-light">
          We may revise this Privacy Policy periodically to reflect technological updates, changes in hospital procedures, or regulatory amendments. Any revisions will take effect upon posting with an updated “Last Updated” date at the top of this notice.
        </p>
      )
    },
    {
      num: "13",
      title: "Contact & Grievance Desk",
      body: (
        <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 space-y-2 text-[14px] text-neutral-800">
          <p className="font-semibold text-black text-base">Sabari Hospitals — Administration & Privacy Desk</p>
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
                LEGAL & COMPLIANCE
              </span>
              <span className="text-neutral-300">&bull;</span>
              <span className="text-[11px] font-mono text-neutral-500">
                LAST UPDATED: 27 SEPTEMBER 2026
              </span>
            </div>
            
            <h1 className="text-[34px] sm:text-[52px] lg:text-[68px] font-medium leading-[1.05] tracking-[-0.03em] text-black mb-6">
              PRIVACY POLICY.
            </h1>
            
            <p className="text-[16px] sm:text-[19px] text-neutral-600 leading-relaxed max-w-3xl font-light">
              At Sabari Hospitals, we respect your privacy and are committed to protecting the personal information you provide when using our website, contacting us, or requesting an appointment.
            </p>

            {/* Quick Switch to Terms */}
            <div className="flex items-center gap-3 pt-8">
              <span className="px-3.5 py-1.5 bg-black text-white text-[12px] font-semibold tracking-wider uppercase rounded-full">
                Privacy Policy
              </span>
              <Link 
                to="/terms-of-service"
                className="px-3.5 py-1.5 border border-neutral-300 text-neutral-600 hover:text-black hover:border-black text-[12px] font-semibold tracking-wider uppercase rounded-full transition-colors"
              >
                Terms of Service &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Policy Content Sections */}
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
