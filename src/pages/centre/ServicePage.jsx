import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Footer } from '../../sections/Footer';
import { 
  subServicesData, 
  centreCategories, 
  orderedSubServices 
} from '../../data/centresOfExcellenceData';
import { useAppointment } from '../../context/AppointmentContext';

export function ServicePage() {
  const { openAppointmentModal } = useAppointment();
  const { categorySlug, serviceSlug } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categorySlug, serviceSlug]);

  const serviceKey = `${categorySlug}/${serviceSlug}`;
  const service = subServicesData[serviceKey];

  if (!service) {
    return <Navigate to={`/centre-of-excellence/${categorySlug || ''}`} replace />;
  }

  // Find index in global ordered sub-services for sequential prev/next navigation
  const currentIndex = orderedSubServices.findIndex(
    item => item.categorySlug === categorySlug && item.serviceSlug === serviceSlug
  );

  const prevItem = currentIndex > 0 
    ? orderedSubServices[currentIndex - 1] 
    : orderedSubServices[orderedSubServices.length - 1];

  const nextItem = currentIndex < orderedSubServices.length - 1 
    ? orderedSubServices[currentIndex + 1] 
    : orderedSubServices[0];

  const prevServiceData = prevItem ? subServicesData[`${prevItem.categorySlug}/${prevItem.serviceSlug}`] : null;
  const nextServiceData = nextItem ? subServicesData[`${nextItem.categorySlug}/${nextItem.serviceSlug}`] : null;

  return (
    <div data-nav-theme="light" className="w-full min-h-screen bg-white text-black selection:bg-neutral-200">
      
      {/* 1. Service Hero (40-50% image, large typography) */}
      <section className="w-full pt-28 pb-12 sm:pt-32 sm:pb-16 lg:pt-40 lg:pb-24 px-6 lg:px-16 border-b border-neutral-200 bg-white">
        <div className="max-w-[1600px] w-full mx-auto">
          
          <div className="flex flex-col max-w-5xl">
            {/* Small Eyebrow / Breadcrumbs */}
            <div className="flex items-center gap-2 mb-4 sm:mb-6 flex-wrap">
              <Link 
                to="/centre-of-excellence" 
                className="text-[12px] font-mono font-semibold tracking-[0.2em] uppercase text-neutral-400 hover:text-black transition-colors"
              >
                CENTRE OF EXCELLENCE
              </Link>
              <span className="text-neutral-300 text-xs">/</span>
              <Link 
                to={`/centre-of-excellence/${service.categorySlug}`} 
                className="text-[12px] font-mono font-semibold tracking-[0.2em] uppercase text-neutral-400 hover:text-black transition-colors"
              >
                {service.categoryTitle}
              </Link>
            </div>

            {/* Large Typographic Title in Single Line */}
            <h1 className="text-[34px] sm:text-[54px] md:text-[68px] lg:text-[80px] xl:text-[92px] font-medium leading-[1.05] tracking-[-0.03em] break-words text-black mb-6 sm:mb-8">
              {service.title}.
            </h1>

            <p className="text-[16px] sm:text-[18px] lg:text-[21px] text-neutral-600 leading-relaxed max-w-2xl font-light">
              {service.introduction}
            </p>
          </div>

        </div>
      </section>

      {/* 2. Why This Service Matters */}
      <section className="w-full py-20 lg:py-28 px-6 lg:px-16 border-b border-neutral-200 bg-white">
        <div className="max-w-[1600px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          <div className="lg:col-span-4 flex flex-col">
            <span className="text-[12px] font-mono font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-4 block">
              CLINICAL RATIONALE
            </span>
            <h2 className="text-[30px] lg:text-[40px] font-medium leading-[1.1] tracking-[-0.02em] text-black">
              WHY THIS SERVICE MATTERS.
            </h2>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-6 text-[17px] lg:text-[19px] text-neutral-700 leading-relaxed font-light">
            <p>
              {service.whyItMatters || "[Content to be added by clinical department team]"}
            </p>
          </div>

        </div>
      </section>

      {/* 3. Our Approach & Key Services */}
      <section className="w-full py-20 lg:py-28 px-6 lg:px-16 border-b border-neutral-200 bg-neutral-50/50">
        <div className="max-w-[1600px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          <div className="lg:col-span-4 flex flex-col">
            <span className="text-[12px] font-mono font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-4 block">
              OUR CLINICAL METHODOLOGY
            </span>
            <h2 className="text-[30px] lg:text-[40px] font-medium leading-[1.1] tracking-[-0.02em] text-black">
              OUR APPROACH TO CARE.
            </h2>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-8">
            <p className="text-[17px] lg:text-[19px] text-neutral-700 leading-relaxed font-light">
              {service.ourApproach || "[Content to be added by clinical department team]"}
            </p>

            {/* Key Services Breakdown */}
            {service.keyServices && service.keyServices.length > 0 && (
              <div className="pt-6 border-t border-neutral-200">
                <span className="text-[11px] font-mono font-semibold tracking-widest uppercase text-neutral-400 mb-4 block">
                  CLINICAL FOCUS & PROCEDURAL HIGHLIGHTS
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.keyServices.map((point, pIdx) => (
                    <div 
                      key={pIdx} 
                      className="p-5 border border-neutral-200 bg-white flex items-start gap-4"
                    >
                      <span className="text-[12px] font-mono font-semibold text-neutral-400 shrink-0 mt-0.5">
                        {String(pIdx + 1).padStart(2, '0')}
                      </span>
                      <span className="text-[14px] text-neutral-700 font-light leading-relaxed">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* 4. Related Care (Simple editorial links, not cards) */}
      {service.relatedServices && service.relatedServices.length > 0 && (
        <section className="w-full py-16 lg:py-24 px-6 lg:px-16 border-b border-neutral-200 bg-white">
          <div className="max-w-[1600px] w-full mx-auto">
            
            <div className="flex flex-col md:flex-row md:items-baseline justify-between pb-6 mb-8 border-b border-neutral-200">
              <span className="text-[11px] font-mono tracking-widest uppercase text-neutral-400">
                COORDINATED DISCIPLINES
              </span>
              <h3 className="text-[24px] sm:text-[28px] font-medium tracking-tight text-black mt-2 md:mt-0">
                RELATED CARE
              </h3>
            </div>

            <div className="flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-neutral-200 border-t border-b border-neutral-200">
              {service.relatedServices.map((rel) => (
                <div key={rel.serviceSlug} className="py-6 sm:py-8 sm:px-8 first:pl-0 last:pr-0 flex-1">
                  <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-widest block mb-2">
                    CONTINUITY OF CARE
                  </span>
                  <Link
                    to={`/centre-of-excellence/${rel.categorySlug}/${rel.serviceSlug}`}
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

      {/* 5. Consultation CTA */}
      <section className="w-full py-14 sm:py-20 px-6 lg:px-16 bg-neutral-50">
        <div className="max-w-[1600px] w-full mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6 sm:gap-8 p-6 sm:p-10 lg:p-12 border border-neutral-200 bg-white">
          <div className="flex flex-col">
            <span className="text-[11px] font-mono tracking-widest uppercase text-neutral-400 mb-2">
              APPOINTMENTS & CLINICAL ACCESS
            </span>
            <h3 className="text-[24px] sm:text-[28px] lg:text-[32px] font-medium tracking-tight text-black">
              Consult with Our {service.title} Specialists.
            </h3>
            <p className="text-[14px] sm:text-[15px] text-neutral-600 font-light mt-1">
              Connect with our department desk for scheduling outpatient visits or procedural consults.
            </p>
          </div>
          <button
            type="button"
            onClick={() => openAppointmentModal()}
            className="px-8 py-4 bg-black text-white text-[12px] font-semibold tracking-widest uppercase hover:bg-neutral-800 transition-colors w-full sm:w-auto text-center shrink-0"
          >
            Book Appointment &rarr;
          </button>
        </div>
      </section>

      {/* 6. Footer Navigation (Previous, Back to Centre of Excellence, Next) */}
      <section className="w-full py-12 px-6 lg:px-16 border-t border-neutral-200 bg-white">
        <div className="max-w-[1600px] w-full mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          {prevServiceData && prevItem ? (
            <Link
              to={`/centre-of-excellence/${prevItem.categorySlug}/${prevItem.serviceSlug}`}
              className="inline-flex items-center gap-3 text-[13px] font-mono tracking-wider uppercase text-neutral-600 hover:text-black transition-colors"
            >
              <span>&larr;</span>
              <span>PREV: {prevServiceData.title}</span>
            </Link>
          ) : <div />}

          <Link
            to="/centre-of-excellence"
            className="text-[12px] font-semibold tracking-widest uppercase text-black hover:opacity-70 transition-opacity"
          >
            BACK TO CENTRE OF EXCELLENCE
          </Link>

          {nextServiceData && nextItem ? (
            <Link
              to={`/centre-of-excellence/${nextItem.categorySlug}/${nextItem.serviceSlug}`}
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
