import React, { useState } from 'react';
import { Preloader } from './components/ui/Preloader';
import { Navbar } from './components/navbar/Navbar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { DoctorProfile } from './pages/DoctorProfile';
import { DoctorsDirectory } from './pages/DoctorsDirectory';
import { OurStory } from './pages/about/OurStory';
import { Leadership } from './pages/about/Leadership';
import { WhySabari } from './pages/about/WhySabari';
import { Accreditations } from './pages/about/Accreditations';
import { PatientExperiencePage } from './pages/about/PatientExperiencePage';
import { Careers } from './pages/about/Careers';
import { CentresLanding } from './pages/centre/CentresLanding';
import { CategoryPage } from './pages/centre/CategoryPage';
import { ServicePage } from './pages/centre/ServicePage';
import { FacilitiesLanding } from './pages/facilities/FacilitiesLanding';
import { FacilityCategoryPage } from './pages/facilities/FacilityCategoryPage';
import { FacilityServicePage } from './pages/facilities/FacilityServicePage';
import { ContactPage } from './pages/ContactPage';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <Router>
      {loading && (
        <Preloader onComplete={() => setLoading(false)} />
      )}
      
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<DoctorsDirectory />} />
        <Route path="/doctors/:id" element={<DoctorProfile />} />
        <Route path="/doctor/:id" element={<DoctorProfile />} />
        
        {/* About Us Destination Pages */}
        <Route path="/about/our-story" element={<OurStory />} />
        <Route path="/about/leadership" element={<Leadership />} />
        <Route path="/about/why-sabari" element={<WhySabari />} />
        <Route path="/about/accreditations" element={<Accreditations />} />
        <Route path="/about/patient-experience" element={<PatientExperiencePage />} />
        <Route path="/about/careers" element={<Careers />} />

        {/* Centre of Excellence Experience */}
        <Route path="/centre-of-excellence" element={<CentresLanding />} />
        <Route path="/centre-of-excellence/:categorySlug" element={<CategoryPage />} />
        <Route path="/centre-of-excellence/:categorySlug/:serviceSlug" element={<ServicePage />} />

        {/* Facilities Experience */}
        <Route path="/facilities" element={<FacilitiesLanding />} />
        <Route path="/facilities/:categorySlug" element={<FacilityCategoryPage />} />
        <Route path="/facilities/:categorySlug/:serviceSlug" element={<FacilityServicePage />} />

        {/* Contact Us Experience */}
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
