import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../sections/Hero';
import { OurApproach } from '../sections/OurApproach';
import { NumbersSection } from '../sections/NumbersSection';
import { VisionMissionSection } from '../sections/VisionMissionSection';
import { CentresOfExcellence } from '../sections/CentresOfExcellence';
import { HumanCare } from '../sections/HumanCare';
import { FacilitiesSection } from '../sections/FacilitiesSection';
import { HeartOfSabariSection } from '../sections/HeartOfSabariSection';
import { DoctorsSection } from '../sections/DoctorsSection';
import { PatientExperience } from '../sections/PatientExperience';
import { Footer } from '../sections/Footer';

export function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#centres-of-excellence') {
      const timer = setTimeout(() => {
        const el = document.getElementById('centres-of-excellence');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 120);
      return () => clearTimeout(timer);
    }
  }, [location.hash]);

  return (
    <div className="w-full bg-white flex flex-col items-center justify-start selection:bg-neutral-200">
      <Hero />
      <OurApproach />
      <NumbersSection />
      <VisionMissionSection />
      <CentresOfExcellence />
      <HumanCare />
      <FacilitiesSection />
      <HeartOfSabariSection />
      <DoctorsSection />
      <PatientExperience />
      <Footer />
    </div>
  );
}
