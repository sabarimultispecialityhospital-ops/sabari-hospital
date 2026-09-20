import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Footer } from '../../sections/Footer';
import { 
  facilityServicesData, 
  facilityCategories, 
  orderedFacilityServices 
} from '../../data/facilitiesExperienceData';

export function FacilityServicePage() {
  const { categorySlug, serviceSlug } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categorySlug, serviceSlug]);

  const serviceKey = `${categorySlug}/${serviceSlug}`;
  const service = facilityServicesData[serviceKey];

  if (!service) {
    return <Navigate to={`/facilities/${categorySlug || ''}`} replace />;
  }

  // Find index in global ordered facility services for sequential prev/next navigation
  const currentIndex = orderedFacilityServices.findIndex(
    item => item.categorySlug === categorySlug && item.serviceSlug === serviceSlug
  );

  const prevItem = currentIndex > 0 
    ? orderedFacilityServices[currentIndex - 1] 
    : orderedFacilityServices[orderedFacilityServices.length - 1];

  const nextItem = currentIndex < orderedFacilityServices.length - 1 
    ? orderedFacilityServices[currentIndex + 1] 
    : orderedFacilityServices[0];

  const prevServiceData = prevItem ? facilityServicesData[`${prevItem.categorySlug}/${prevItem.serviceSlug}`] : null;
  const nextServiceData = nextItem ? facilityServicesData[`${nextItem.categorySlug}/${nextItem.serviceSlug}`] : null;

  return (
    <div data-nav-theme="light" className="w-full min-h-screen bg-white text-black selection:bg-neutral-200">
      
      {/* 1. Facility Service Hero (40-50% image, large typography) */}
      <section className="w-full pt-32 pb-16 lg:pt-40 lg:pb-24 px-6 lg:px-16 border-b border-neutral-200 bg-white">
        <div className="max-w-[1600px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">
          
          <div className="lg:col-span-7 flex flex-col">
            {/* Small Eyebrow / Breadcrumbs */}
            <div className="flex items-center gap-3 mb-6">
              <Link 
                to="/facilities" 
                className="text-[12px] font-mono font-semibold tracking-[0.2em] uppercase text-neutral-400 hover:text-black transition-colors"
              >
                FACILITIES
              </Link>
              <span className="text-neutral-300 text-xs">/</span>
              <Link 
                to={`/facilities/${service.categorySlug}`} 
                className="text-[12px] font-mono font-semibold tracking-[0.2em] uppercase text-neutral-400 hover:text-black transition-colors"
              >
                {service.categoryTitle}
              </Link>
              <span className="text-neutral-300 text-xs">/</span>
              <span className="text-[12px] font-mono font-semibold tracking-[0.2em] uppercase text-black">
                {service.serviceNumber}
              </span>
            </div>

            {/* Large Typographic Title */}
            <h1 className="text-[48px] sm:text-[72px] lg:text-[92px] font-medium leading-[0.94] tracking-[-0.035em] text-black mb-8">
              {service.title.split(' ').map((word, idx) => (
                <React.Fragment key={idx}>
                  {word}
                  {idx < service.title.split(' ').length - 1 && <br />}
                </React.Fragment>
              ))}
            </h1>

            <p className="text-[18px] sm:text-[21px] text-neutral-600 leading-relaxed max-w-xl font-light">
              {service.introduction}
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-end">
            <div className="relative aspect-[16/11] w-full overflow-hidden bg-neutral-100 border border-neutral-200">
              <img 
                src={service.heroImage} 
                alt={service.alt || service.title} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center justify-between text-[11px] font-mono tracking-widest text-neutral-400 uppercase mt-3">
              <span>{service.categoryTitle} // {service.title}</span>
              <span>HOSPITAL FACILITY</span>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Overview */}
      <section className="w-full py-20 lg:py-28 px-6 lg:px-16 border-b border-neutral-200 bg-white">
        <div className="max-w-[1600px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          <div className="lg:col-span-4 flex flex-col">
            <span className="text-[12px] font-mono font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-4 block">
              FACILITY SUMMARY
            </span>
            <h2 className="text-[30px] lg:text-[40px] font-medium leading-[1.1] tracking-[-0.02em] text-black">
              OVERVIEW.
            </h2>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-6 text-[17px] lg:text-[19px] text-neutral-700 leading-relaxed font-light">
            <p>
              {service.overview || "[Overview to be added by hospital administration team]"}
            </p>
          </div>

        </div>
      </section>

      {/* 3. How It Works */}
      <section className="w-full py-20 lg:py-28 px-6 lg:px-16 border-b border-neutral-200 bg-neutral-50/50">
        <div className="max-w-[1600px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          <div className="lg:col-span-4 flex flex-col">
            <span className="text-[12px] font-mono font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-4 block">
              OPERATIONAL WORKFLOW
            </span>
            <h2 className="text-[30px] lg:text-[40px] font-medium leading-[1.1] tracking-[-0.02em] text-black">
              HOW IT WORKS.
            </h2>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-6 text-[17px] lg:text-[19px] text-neutral-700 leading-relaxed font-light">
            <p>
              {service.howItWorks || "[Operational workflow to be added by hospital administration team]"}
            </p>
          </div>

        </div>
      </section>

      {/* 4. Patient Information */}
      <section className="w-full py-20 lg:py-28 px-6 lg:px-16 border-b border-neutral-200 bg-white">
        <div className="max-w-[1600px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          <div className="lg:col-span-4 flex flex-col">
            <span className="text-[12px] font-mono font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-4 block">
              PRACTICAL GUIDANCE
            </span>
            <h2 className="text-[30px] lg:text-[40px] font-medium leading-[1.1] tracking-[-0.02em] text-black">
              PATIENT INFORMATION.
            </h2>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-6 text-[17px] lg:text-[19px] text-neutral-700 leading-relaxed font-light">
            <p>
              {service.patientInformation || "[Patient information to be added by hospital administration team]"}
            </p>
          </div>

        </div>
      </section>

      {/* 5. Related Services (Simple editorial links, not cards) */}
      {service.relatedServices && service.relatedServices.length > 0 && (
        <section className="w-full py-16 lg:py-24 px-6 lg:px-16 border-b border-neutral-200 bg-neutral-50/30">
          <div className="max-w-[1600px] w-full mx-auto">
            
            <div className="flex flex-col md:flex-row md:items-baseline justify-between pb-6 mb-8 border-b border-neutral-200">
              <span className="text-[11px] font-mono tracking-widest uppercase text-neutral-400">
                CONNECTED INFRASTRUCTURE
              </span>
              <h3 className="text-[24px] sm:text-[28px] font-medium tracking-tight text-black mt-2 md:mt-0">
                RELATED SERVICES
              </h3>
            </div>

            <div className="flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-neutral-200 border-t border-b border-neutral-200">
              {service.relatedServices.map((rel) => (
                <div key={rel.serviceSlug} className="py-6 sm:py-8 sm:px-8 first:pl-0 last:pr-0 flex-1">
                  <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-widest block mb-2">
                    HOSPITAL FACILITY
                  </span>
                  <Link
                    to={`/facilities/${rel.categorySlug}/${rel.serviceSlug}`}
                    className="inline-flex items-center gap-3 text-[18px] sm:text-[20px] font-medium text-black hover:text-neutral-600 transition-colors group"
                  >
                    <span>{rel.title}</span>
                    <span className="text-neutral-400 group-hover:text-black group-hover:translate-x-1 transition-all">
                      &rarr;
                    </span>
                  </Link>
                </div>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* 6. Consultation CTA */}
      <section className="w-full py-20 px-6 lg:px-16 bg-white">
        <div className="max-w-[1600px] w-full mx-auto flex flex-col md:flex-row md:items-center justify-between gap-8 p-12 border border-neutral-200">
          <div className="flex flex-col">
            <span className="text-[11px] font-mono tracking-widest uppercase text-neutral-400 mb-2">
              PATIENT INQUIRIES & ADMISSION ACCESS
            </span>
            <h3 className="text-[26px] lg:text-[32px] font-medium tracking-tight text-black">
              Questions Regarding Our {service.title}?
            </h3>
            <p className="text-[15px] text-neutral-600 font-light mt-1">
              Contact our patient reception desk for assistance with scheduling, admission details, or facilities.
            </p>
          </div>
          <a
            href="tel:+18001234567"
            className="px-8 py-4 bg-black text-white text-[12px] font-semibold tracking-widest uppercase hover:bg-neutral-800 transition-colors self-start md:self-auto shrink-0"
          >
            Book Appointment &rarr;
          </a>
        </div>
      </section>

      {/* 7. Footer Navigation (Previous, Back to Facilities, Next) */}
      <section className="w-full py-12 px-6 lg:px-16 border-t border-neutral-200 bg-neutral-50/50">
        <div className="max-w-[1600px] w-full mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          {prevServiceData && prevItem ? (
            <Link
              to={`/facilities/${prevItem.categorySlug}/${prevItem.serviceSlug}`}
              className="inline-flex items-center gap-3 text-[13px] font-mono tracking-wider uppercase text-neutral-600 hover:text-black transition-colors"
            >
              <span>&larr;</span>
              <span>PREV: {prevServiceData.title}</span>
            </Link>
          ) : <div />}

          <Link
            to="/facilities"
            className="text-[12px] font-semibold tracking-widest uppercase text-black hover:opacity-70 transition-opacity"
          >
            BACK TO FACILITIES
          </Link>

          {nextServiceData && nextItem ? (
            <Link
              to={`/facilities/${nextItem.categorySlug}/${nextItem.serviceSlug}`}
              className="inline-flex items-center gap-3 text-[13px] font-mono tracking-wider uppercase text-neutral-600 hover:text-black transition-colors"
            >
              <span>NEXT: {nextServiceData.title}</span>
              <span>&rarr;</span>
            </Link>
          ) : <div />}
        </div>
      </section>

      <Footer />
    </div>
  );
}
