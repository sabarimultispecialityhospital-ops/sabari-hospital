import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { doctorsData } from '../data/landingData';
import CircularGallery from '../components/ui/CircularGallery';

export function DoctorsSection() {
  const navigate = useNavigate();

  return (
    <section data-nav-theme="dark" className="w-full bg-neutral-900 py-[140px] border-t border-neutral-800 overflow-hidden">
      <div className="max-w-[1600px] w-full mx-auto flex flex-col px-6 lg:px-16">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="flex flex-col">
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-6 block">
              05 &mdash; OUR EXPERTS
            </span>
            <h2 className="text-[44px] lg:text-[56px] font-medium leading-[1.05] tracking-[-0.02em] text-white">
              THE PEOPLE<br />
              BEHIND THE CARE.
            </h2>
          </div>
          <Link
            to="/doctors"
            className="inline-flex items-center gap-3 text-[13px] font-semibold tracking-[0.1em] uppercase text-neutral-300 hover:text-white border-b border-neutral-700 hover:border-white pb-2 transition-all w-max"
          >
            <span>Explore All Specialists</span>
            <span>&rarr;</span>
          </Link>
        </div>
      </div>

      <div className="w-full h-[50vh] lg:h-[70vh] relative pointer-events-auto mt-10">
        <CircularGallery
          items={doctorsData.map(doctor => ({ 
            id: doctor.id, 
            image: doctor.image, 
            text: doctor.name.includes(',') ? doctor.name.split(',')[0].trim() : doctor.name 
          }))}
          bend={1}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollEase={0.05}
          font="600 20px 'Plus Jakarta Sans', Manrope, sans-serif"
          fontUrl="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600;700&display=swap"
          scrollSpeed={2}
          onItemClick={(item) => navigate(`/doctor/${item.id}`)}
        />
      </div>
    </section>
  );
}
