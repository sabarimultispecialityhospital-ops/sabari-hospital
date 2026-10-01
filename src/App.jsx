import React, { useState } from 'react';
import { Preloader } from './components/ui/Preloader';
import { Navbar } from './components/navbar/Navbar';
import { AppointmentProvider } from './context/AppointmentContext';
import { AppointmentModal } from './components/appointment/AppointmentModal';

import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Home } from './pages/Home';
import { DoctorProfile } from './pages/DoctorProfile';
import { DoctorsDirectory } from './pages/DoctorsDirectory';
import { OurStory } from './pages/about/OurStory';
import { Leadership } from './pages/about/Leadership';
import { WhySabari } from './pages/about/WhySabari';
import { Accreditations } from './pages/about/Accreditations';
import { PatientExperiencePage } from './pages/about/PatientExperiencePage';
import { Careers } from './pages/about/Careers';
import { ContactPage } from './pages/ContactPage';
import { GalleryPage } from './pages/GalleryPage';
import { PrivacyPolicy } from './pages/legal/PrivacyPolicy';
import { TermsOfService } from './pages/legal/TermsOfService';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  React.useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, hash]);

  return null;
}

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <Router>
      <ScrollToTop />
      <AppointmentProvider>
      {loading && (
        <Preloader onComplete={() => setLoading(false)} />
      )}

      <Navbar />

      <AppointmentModal />

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

        {/* Centre of Excellence - Removed specific pages, redirecting */}
        <Route path="/centre-of-excellence" element={<Navigate to="/#centres-of-excellence" replace />} />
        <Route path="/centre-of-excellence/*" element={<Navigate to="/contact" replace />} />

        {/* Gallery Experience */}
        <Route path="/gallery" element={<GalleryPage />} />

        {/* Facilities redirect to Gallery */}
        <Route path="/facilities" element={<Navigate to="/gallery" replace />} />
        <Route path="/facilities/*" element={<Navigate to="/gallery" replace />} />

        {/* Contact Us Experience */}
        <Route path="/contact" element={<ContactPage />} />

        {/* Legal & Compliance Pages */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/privacy" element={<Navigate to="/privacy-policy" replace />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/terms" element={<Navigate to="/terms-of-service" replace />} />

        {/* Book Appointment routes redirecting to /contact */}
        <Route path="/book-appointment" element={<Navigate to="/contact" replace />} />
        <Route path="/appointment" element={<Navigate to="/contact" replace />} />
        <Route path="/appointments" element={<Navigate to="/contact" replace />} />
      </Routes>
      </AppointmentProvider>
    </Router>
  );
}

export default App;
