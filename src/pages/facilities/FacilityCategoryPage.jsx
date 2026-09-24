import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Footer } from '../../sections/Footer';
import { facilityCategories, facilityServicesData } from '../../data/facilitiesExperienceData';
import { useAppointment } from '../../context/AppointmentContext';

export function FacilityCategoryPage() {
  const { openAppointmentModal } = useAppointment();
  const { categorySlug } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categorySlug]);

  const categoryIndex = facilityCategories.findIndex(c => c.slug === categorySlug);
  const category = facilityCategories[categoryIndex];

  if (!category) {
    return <Navigate to="/facilities" replace />;
  }

  const prevCategory = categoryIndex > 0 ? facilityCategories[categoryIndex - 1] : facilityCategories[facilityCategories.length - 1];
  const nextCategory = categoryIndex < facilityCategories.length - 1 ? facilityCategories[categoryIndex + 1] : facilityCategories[0];

  return (
    <div data-nav-theme="light" className="w-full min-h-screen bg-white text-black selection:bg-neutral-200">
      
      {/* 1. Category Hero */}
      <section className="w-full pt-32 pb-16 lg:pt-40 lg:pb-24 px-6 lg:px-16 border-b border-neutral-200 bg-white">
        <div className="max-w-[1600px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">
          
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <Link 
                to="/facilities" 
                className="text-[12px] font-mono font-semibold tracking-[0.2em] uppercase text-neutral-400 hover:text-black transition-colors"
              >
                FACILITIES
              </Link>
              <span className="text-neutral-300 text-xs">/</span>
              <span className="text-[12px] font-mono font-semibold tracking-[0.2em] uppercase text-black">
                DIVISION {category.number}
              </span>
            </div>

            <h1 className="text-[44px] sm:text-[64px] lg:text-[84px] font-medium leading-[0.98] tracking-[-0.03em] text-black mb-8">
              {category.tagline}
            </h1>

            <p className="text-[17px] sm:text-[19px] text-neutral-600 leading-relaxed max-w-xl font-light">
              {category.shortDescription}
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-end">
            <div className="relative aspect-[16/11] w-full overflow-hidden bg-neutral-100 border border-neutral-200">
              <img 
                src={category.heroImage} 
                alt={category.alt} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center justify-between text-[11px] font-mono tracking-widest text-neutral-400 uppercase mt-3">
              <span>{category.number} // {category.title}</span>
              <span>{category.services.length} DEDICATED SECTIONS</span>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Vertical Editorial List (Not Cards) */}
      <section className="w-full py-20 lg:py-32 px-6 lg:px-16 bg-white">
        <div className="max-w-[1600px] w-full mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-16 border-b border-neutral-200">
            <div>
              <span className="text-[11px] font-mono tracking-widest uppercase text-neutral-400 block mb-2">
                SERVICES IN THIS DIVISION
              </span>
              <h2 className="text-[32px] sm:text-[42px] font-medium tracking-tight text-black">
                Facility & Infrastructure Directory.
              </h2>
            </div>
            <span className="text-[13px] font-mono text-neutral-400 mt-2 md:mt-0">
              0{category.services.length} INTEGRATED SECTIONS
            </span>
          </div>

          <div className="flex flex-col divide-y divide-neutral-200 border-t border-b border-neutral-200">
            {category.services.map((svc, sIdx) => {
              const fullServiceKey = `${category.slug}/${svc.slug}`;
              const serviceDetail = facilityServicesData[fullServiceKey];
              const serviceNumStr = String(sIdx + 1).padStart(2, '0');

              return (
                <div 
                  key={svc.slug}
                  className="py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start group"
                >
                  <div className="lg:col-span-2">
                    <span className="text-[13px] font-mono font-semibold tracking-widest text-neutral-400 group-hover:text-black transition-colors">
                      {category.number}.{serviceNumStr}
                    </span>
                  </div>

                  <div className="lg:col-span-6">
                    <Link
                      to={`/facilities/${category.slug}/${svc.slug}`}
                      className="text-[28px] sm:text-[34px] font-medium tracking-tight text-black leading-tight hover:text-neutral-600 transition-colors block mb-4"
                    >
                      {svc.title}
                    </Link>
                    <p className="text-[15px] text-neutral-600 leading-relaxed font-light mb-4">
                      {serviceDetail ? serviceDetail.introduction : "Comprehensive hospital infrastructure and dedicated patient services."}
                    </p>
                    {serviceDetail && (
                      <p className="text-[14px] text-neutral-500 font-light leading-relaxed">
                        {serviceDetail.overview}
                      </p>
                    )}
                  </div>

                  <div className="lg:col-span-4 flex flex-col justify-between h-full gap-6 lg:items-end">
                    {serviceDetail && serviceDetail.heroImage && (
                      <div className="aspect-[16/10] w-full max-w-[280px] overflow-hidden bg-neutral-100 border border-neutral-200">
                        <img 
                          src={serviceDetail.heroImage} 
                          alt={serviceDetail.alt || svc.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}

                    <Link
                      to={`/facilities/${category.slug}/${svc.slug}`}
                      className="inline-flex items-center gap-3 text-[12px] font-semibold tracking-wider uppercase text-black hover:opacity-70 transition-opacity"
                    >
                      <span>Explore {svc.title}</span>
                      <span>&rarr;</span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. Category Navigation (Prev / Next) */}
      <section className="w-full py-12 px-6 lg:px-16 border-t border-neutral-200 bg-neutral-50/40">
        <div className="max-w-[1600px] w-full mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link
            to={`/facilities/${prevCategory.slug}`}
            className="inline-flex items-center gap-3 text-[13px] font-mono tracking-wider uppercase text-neutral-600 hover:text-black transition-colors"
          >
            <span>&larr;</span>
            <span>PREVIOUS: {prevCategory.title}</span>
          </Link>

          <Link
            to="/facilities"
            className="text-[12px] font-semibold tracking-widest uppercase text-black hover:opacity-70 transition-opacity"
          >
            ALL FACILITIES DIVISIONS
          </Link>

          <Link
            to={`/facilities/${nextCategory.slug}`}
            className="inline-flex items-center gap-3 text-[13px] font-mono tracking-wider uppercase text-neutral-600 hover:text-black transition-colors"
          >
            <span>NEXT: {nextCategory.title}</span>
            <span>&rarr;</span>
          </Link>
        </div>
      </section>

      {/* 4. Consultation CTA */}
      <section className="w-full py-20 px-6 lg:px-16 bg-white border-t border-neutral-200">
        <div className="max-w-[1600px] w-full mx-auto flex flex-col md:flex-row md:items-center justify-between gap-8 p-12 border border-neutral-200">
          <div className="flex flex-col">
            <span className="text-[11px] font-mono tracking-widest uppercase text-neutral-400 mb-2">
              HOSPITAL DESK & INPATIENT CARE
            </span>
            <h3 className="text-[26px] lg:text-[32px] font-medium tracking-tight text-black">
              Connect with Our {category.title} Team.
            </h3>
            <p className="text-[15px] text-neutral-600 font-light mt-1">
              Contact our facility reception desk for assistance with scheduling, admissions, or patient amenities.
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
