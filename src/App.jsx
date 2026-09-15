import React, { useState } from 'react';
import { Preloader } from './components/ui/Preloader';
import { Navbar } from './components/navbar/Navbar';

// Sections
import { Hero } from './sections/Hero';
import { OurApproach } from './sections/OurApproach';
import { NumbersSection } from './sections/NumbersSection';
import { CentresOfExcellence } from './sections/CentresOfExcellence';
import { HumanCare } from './sections/HumanCare';
import { FacilitiesSection } from './sections/FacilitiesSection';
import { DoctorsSection } from './sections/DoctorsSection';
import { PatientExperience } from './sections/PatientExperience';
import { AppointmentCTA } from './sections/AppointmentCTA';
import { Footer } from './sections/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && (
        <Preloader onComplete={() => setLoading(false)} />
      )}
      
      <Navbar />
      
      <main className="w-full bg-white flex flex-col items-center justify-start selection:bg-neutral-200">
        <Hero />
        <OurApproach />
        <NumbersSection />
        <CentresOfExcellence />
        <HumanCare />
        <FacilitiesSection />
        <DoctorsSection />
        <PatientExperience />
        <AppointmentCTA />
        <Footer />
      </main>
    </>
  );
}

export default App;
