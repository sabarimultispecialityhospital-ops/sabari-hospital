import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Footer } from '../../sections/Footer';
import { ShieldCheck, Award, ArrowRight } from 'lucide-react';

export function Leadership() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const leaders = [
    {
      id: "dr-saravana-kumar",
      name: "Dr. Saravana Kumar S",
      title: "CHAIRMAN & MANAGING DIRECTOR",
      speciality: "Anaesthesiologist & Critical Care Specialist",
      image: "/doctors/doctor-2.png",
      qualifications: "M.B.B.S. (JSS Medical College) • DA (Kasturba Medical College, Manipal)",
      experience: "Over 20 years of clinical experience • Former ICU Specialist at GKNM Hospital",
      bio: "Dr. Saravana Kumar S leads the clinical direction and operational governance of Sabari Hospital. A distinguished anaesthesiologist and intensive care specialist with over two decades of practice, he has played key leadership roles across medical associations including serving as President of the Indian Society of Anaesthesiologists, Coimbatore (2022–2024) and Chairman of the IMA Nursing Home Board (2021–2024). He was honoured with the Best Doctor Award in Anaesthesiology by IMA Coimbatore in 2022.",
      keyContributions: [
        "President, Indian Society of Anaesthesiologists, Coimbatore (2022–2024)",
        "Chairman, IMA Nursing Home Board (2021–2024)",
        "Best Doctor Award in Anaesthesiology — IMA Coimbatore (2022)",
        "Spearheading modern surgical theatres & patient-safety protocols"
      ]
    },
    {
      id: "dr-mangaleeswari",
      name: "Dr. Mangaleeswari",
      title: "FOUNDER",
      speciality: "Obstetrician & Gynaecologist",
      image: "/doctors/doctor-1.png",
      qualifications: "MBBS • DGO (Obstetrics & Gynaecology)",
      experience: "25 Years Clinical Service at Coimbatore Medical College",
      bio: "Dr. Mangaleeswari is the Founder and guiding pillar of Sabari Hospital. With 25 years of distinguished public medical service at Coimbatore Medical College, her career has been devoted to maternal wellness, high-risk pregnancy care, and gynaecological health. Honoured with the Lifetime Achievement Award by IMA Coimbatore in 2019, her patient-first ethos remains the foundational cornerstone of the entire hospital.",
      keyContributions: [
        "Founder of Sabari Hospital (Est. 1999)",
        "25 Years Clinical Practice at Coimbatore Medical College",
        "Lifetime Achievement Award — IMA Coimbatore (2019)",
        "Pioneering compassionate maternal & family wellness care"
      ]
    }
  ];

  return (
    <div data-nav-theme="light" className="w-full min-h-screen bg-white text-black selection:bg-neutral-200">
      
      {/* 1. Editorial Hero */}
      <section className="w-full pt-32 pb-16 lg:pt-40 lg:pb-20 px-6 lg:px-16 border-b border-neutral-200">
        <div className="max-w-[1600px] w-full mx-auto">
          <div className="flex flex-col max-w-4xl">
            <span className="text-[12px] font-mono font-semibold tracking-[0.25em] uppercase text-neutral-400 mb-6 block">
              02 &mdash; ABOUT SABARI
            </span>
            <h1 className="text-[52px] sm:text-[72px] lg:text-[96px] font-medium leading-[0.95] tracking-[-0.03em] text-black mb-8">
              GUIDED BY<br />
              EXPERIENCE.
            </h1>
            <p className="text-[18px] sm:text-[21px] text-neutral-600 leading-relaxed max-w-2xl font-light">
              Clinical leadership committed to medical integrity, patient safety, and compassionate care.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Institutional Leadership Profiles */}
      <section className="w-full py-20 lg:py-32 px-6 lg:px-16 border-b border-neutral-200">
        <div className="max-w-[1600px] w-full mx-auto flex flex-col gap-28 lg:gap-36">
          
          {leaders.map((leader, idx) => (
            <div 
              key={leader.id} 
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              
              {/* Leader Portrait */}
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-100 border border-neutral-200">
                  <img 
                    src={leader.image} 
                    alt={leader.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between text-[11px] font-mono text-neutral-400 uppercase tracking-widest">
                  <span>LEADERSHIP PROFILE // 0{idx + 1}</span>
                  <span>SABARI HOSPITAL</span>
                </div>
              </div>

              {/* Leader Content */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <span className="text-[12px] font-mono font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-3 block">
                  {leader.title}
                </span>
                <h2 className="text-[36px] sm:text-[48px] lg:text-[56px] font-medium leading-[1] tracking-[-0.02em] text-black mb-4">
                  {leader.name}
                </h2>
                <p className="text-[17px] lg:text-[19px] text-neutral-800 font-medium mb-6">
                  {leader.speciality}
                </p>

                <div className="p-5 bg-neutral-50 border border-neutral-200 text-[14px] text-neutral-600 mb-8 flex flex-col gap-1">
                  <span className="font-semibold text-black uppercase text-[11px] tracking-wider">Credentials & Experience:</span>
                  <span>{leader.qualifications}</span>
                  <span>{leader.experience}</span>
                </div>

                <p className="text-[16px] lg:text-[17px] text-neutral-700 leading-relaxed font-light mb-8">
                  {leader.bio}
                </p>

                {/* Key Contributions */}
                <div className="mb-10 flex flex-col gap-2.5">
                  <span className="text-[12px] font-mono font-semibold tracking-wider text-neutral-400 uppercase">
                    Institutional Highlights:
                  </span>
                  <ul className="flex flex-col gap-2">
                    {leader.keyContributions.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-3 text-[14px] text-neutral-700">
                        <span className="text-neutral-400 text-xs mt-1">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={`/doctor/${leader.id}`}
                  className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-widest uppercase text-black hover:opacity-70 transition-opacity self-start group"
                >
                  <span>View Full Clinical Profile</span>
                  <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </Link>
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* 3. Leadership Philosophy */}
      <section className="w-full py-24 lg:py-32 px-6 lg:px-16 bg-neutral-50/60 border-b border-neutral-200">
        <div className="max-w-[1600px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <span className="text-[12px] font-mono font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-4 block">
              STEWARDSHIP
            </span>
            <h3 className="text-[32px] lg:text-[44px] font-medium leading-[1.1] tracking-[-0.02em] text-black">
              INSTITUTIONAL INTEGRITY WITH A PATIENT-FIRST FOUNDATION.
            </h3>
          </div>
          <div className="lg:col-span-7 flex flex-col gap-6 text-[16px] lg:text-[18px] text-neutral-600 font-light leading-relaxed">
            <p>
              At Sabari Hospital, clinical decisions are guided exclusively by patient outcomes, medical ethics, and evidence-based practice. Our leadership maintains active clinical presence &mdash; actively performing anaesthetic, surgical, and diagnostic procedures alongside our department clinicians daily.
            </p>
            <p>
              This hands-on stewardship ensures that investments in medical infrastructure directly translate into superior patient safety, shorter hospital stays, and compassionate healthcare delivery.
            </p>
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="w-full py-20 px-6 lg:px-16 bg-white">
        <div className="max-w-[1600px] w-full mx-auto flex flex-col md:flex-row md:items-center justify-between gap-8 p-12 border border-neutral-200">
          <div className="flex flex-col">
            <span className="text-[11px] font-mono tracking-widest uppercase text-neutral-400 mb-2">
              CONSULTATIONS
            </span>
            <h3 className="text-[26px] lg:text-[32px] font-medium tracking-tight text-black">
              Schedule a Consultation.
            </h3>
            <p className="text-[15px] text-neutral-600 font-light mt-1">
              Connect with our clinical leadership and department specialists for consultations.
            </p>
          </div>
          <Link
            to="/contact"
            className="px-8 py-4 bg-black text-white text-[12px] font-semibold tracking-widest uppercase hover:bg-neutral-800 transition-colors self-start md:self-auto shrink-0"
          >
            Book Appointment &rarr;
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
