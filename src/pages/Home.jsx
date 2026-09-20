import React from 'react';
import { Hero } from '../sections/Hero';
import { OurApproach } from '../sections/OurApproach';
import { NumbersSection } from '../sections/NumbersSection';
import { CentresOfExcellence } from '../sections/CentresOfExcellence';
import { HumanCare } from '../sections/HumanCare';
import { FacilitiesSection } from '../sections/FacilitiesSection';
import { DoctorsSection } from '../sections/DoctorsSection';
import { PatientExperience } from '../sections/PatientExperience';
import { Footer } from '../sections/Footer';

export function Home() {
  return (
    <div className="w-full bg-white flex flex-col items-center justify-start selection:bg-neutral-200">
      <Hero />
      <OurApproach />
      <NumbersSection />
      <CentresOfExcellence />
      <HumanCare />
      <FacilitiesSection />
      <DoctorsSection />
      <PatientExperience />
      <Footer />
    </div>
  );
}
