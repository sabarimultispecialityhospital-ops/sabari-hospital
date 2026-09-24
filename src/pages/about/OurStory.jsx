import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Footer } from '../../sections/Footer';
import { ArrowRight, Clock, ShieldCheck, HeartHandshake } from 'lucide-react';
import { useAppointment } from '../../context/AppointmentContext';

export function OurStory() {
  const { openAppointmentModal } = useAppointment();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const milestones = [
    {
      year: "1999",
      title: "THE BEGINNING",
      description: "Sabari Hospital was founded in Coimbatore with a foundational mission: to bring dependable, compassionate, and high-quality clinical healthcare to families."
    },
    {
      year: "2012",
      title: "SURGICAL & CRITICAL CARE EXPANSION",
      description: "Under the leadership of Dr. Saravana Kumar S, advanced surgical operating theatres, dedicated intensive care units, and modern anaesthetic safety standards were established."
    },
    {
      year: "PRESENT",
      title: "INTEGRATED MULTISPECIALITY INSTITUTION",
      description: "Today, Sabari Hospital stands as an integrated multispeciality healthcare centre encompassing surgical care, women's health, diabetology, pulmonology, rehabilitation, and round-the-clock emergency support."
    }
  ];

  return (
    <div data-nav-theme="light" className="w-full min-h-screen bg-white text-black selection:bg-neutral-200">
      
      {/* 1. Editorial Hero */}
      <section className="w-full pt-32 pb-16 lg:pt-40 lg:pb-20 px-6 lg:px-16 border-b border-neutral-200">
        <div className="max-w-[1600px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">
          
          <div className="lg:col-span-7 flex flex-col">
            <span className="text-[12px] font-mono font-semibold tracking-[0.25em] uppercase text-neutral-400 mb-6 block">
              01 &mdash; ABOUT SABARI
            </span>
            <h1 className="text-[52px] sm:text-[72px] lg:text-[96px] font-medium leading-[0.95] tracking-[-0.03em] text-black mb-8">
              OUR<br />
              STORY.
            </h1>
            <p className="text-[18px] sm:text-[21px] text-neutral-600 leading-relaxed max-w-xl font-light">
              A journey shaped by experience, care and a commitment to accessible healthcare since 1999.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-end">
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100 border border-neutral-200">
              <img 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200" 
                alt="Sabari Hospital Architecture" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-[11px] font-mono tracking-widest text-neutral-400 uppercase mt-3">
              INSTITUTIONAL ARCHIVE // ESTABLISHED 1999 &bull; COIMBATORE
            </span>
          </div>

        </div>
      </section>

      {/* 2. Founding Vision Narrative */}
      <section className="w-full py-20 lg:py-32 px-6 lg:px-16 border-b border-neutral-200">
        <div className="max-w-[1600px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          <div className="lg:col-span-4 flex flex-col">
            <span className="text-[12px] font-mono font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-4 block">
              THE VISION
            </span>
            <h2 className="text-[32px] lg:text-[42px] font-medium leading-[1.1] tracking-[-0.02em] text-black">
              FROM ONE VISION<br />
              TO A PLACE<br />
              OF CARE.
            </h2>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-8 text-[17px] lg:text-[19px] text-neutral-700 leading-relaxed font-light">
            <p>
              Since 1999, Sabari Hospital has served the people of Coimbatore and neighbouring regions as a multispeciality healthcare destination grounded in medical integrity, clinical expertise, and personal empathy.
            </p>
            <p>
              Founded under the guiding values of Dr. Mangaleeswari, who dedicated over 25 years of service at Coimbatore Medical College, the institution was shaped to offer women, mothers, and families compassionate clinical care with absolute diagnostic clarity.
            </p>
            <p>
              Under the institutional direction of Dr. Saravana Kumar S, Chairman & Managing Director, Sabari Hospital has continually expanded its critical care, anaesthesiology standards, modern surgical suites, and multi-disciplinary medical departments, remaining true to its core philosophy: healthcare must be personal, transparent, and built on trust.
            </p>
          </div>

        </div>
      </section>

      {/* 3. Verified Timeline */}
      <section className="w-full py-20 lg:py-32 px-6 lg:px-16 bg-neutral-50/60 border-b border-neutral-200">
        <div className="max-w-[1600px] w-full mx-auto">
          
          <div className="flex flex-col mb-16 max-w-xl">
            <span className="text-[12px] font-mono font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-4 block">
              CHRONOLOGY
            </span>
            <h2 className="text-[36px] lg:text-[48px] font-medium tracking-[-0.02em] text-black">
              MILESTONES OF CARE.
            </h2>
          </div>

          <div className="flex flex-col divide-y divide-neutral-200 border-t border-b border-neutral-200">
            {milestones.map((item, idx) => (
              <div key={idx} className="py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-baseline">
                <div className="lg:col-span-3">
                  <span className="text-[36px] lg:text-[48px] font-mono font-medium tracking-tight text-black">
                    {item.year}
                  </span>
                </div>
                <div className="lg:col-span-4">
                  <h3 className="text-[20px] lg:text-[24px] font-medium text-black tracking-tight">
                    {item.title}
                  </h3>
                </div>
                <div className="lg:col-span-5">
                  <p className="text-[16px] lg:text-[17px] text-neutral-600 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Visual Storytelling Section */}
      <section className="w-full py-24 lg:py-36 px-6 lg:px-16 border-b border-neutral-200">
        <div className="max-w-[1600px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-6 overflow-hidden aspect-[4/3] bg-neutral-100 border border-neutral-200">
            <img 
              src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=1200" 
              alt="Caring medical team consultation" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="lg:col-span-6 flex flex-col pl-0 lg:pl-8">
            <span className="text-[12px] font-mono font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-6 block">
              INSTITUTIONAL CREED
            </span>
            <blockquote className="text-[26px] sm:text-[34px] lg:text-[40px] font-medium leading-[1.15] tracking-[-0.02em] text-black mb-8">
              &ldquo;Care is not merely a clinical protocol &mdash; it is a relationship built with families across generations.&rdquo;
            </blockquote>
            <p className="text-[16px] text-neutral-600 leading-relaxed max-w-lg font-light mb-8">
              Every consultation at Sabari Hospital is guided by experienced clinicians who take time to listen, explain, and stand beside patients at each step of recovery.
            </p>
            <div className="flex items-center gap-6">
              <Link 
                to="/about/leadership"
                className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-widest uppercase text-black hover:opacity-70 transition-opacity"
              >
                <span>Read About Our Leadership</span>
                <span>&rarr;</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Relevant Call to Action */}
      <section className="w-full py-20 px-6 lg:px-16 bg-neutral-50">
        <div className="max-w-[1600px] w-full mx-auto flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="flex flex-col">
            <span className="text-[12px] font-mono tracking-widest uppercase text-neutral-400 mb-2">
              CONSULTATIONS & CARE
            </span>
            <h3 className="text-[28px] lg:text-[36px] font-medium tracking-tight text-black">
              Schedule a Consultation.
            </h3>
            <p className="text-[15px] text-neutral-600 font-light mt-1">
              Connect with our medical team for personalized outpatient and specialist consultations.
            </p>
          </div>
          <button
            type="button"
            onClick={() => openAppointmentModal()}
            className="px-8 py-4 bg-black text-white text-[12px] font-semibold tracking-widest uppercase hover:bg-neutral-800 transition-colors self-start md:self-auto shrink-0"
            >
            Book Appointment &rarr;
            </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
