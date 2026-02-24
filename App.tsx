
import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation, Navigate, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MediaPresence from './components/MediaPresence';
import BackgroundEffect from './components/BackgroundEffect';
import FoundationalBrand from './components/FoundationalBrand';
import Services from './components/Services';
import FooterCTA from './components/FooterCTA';
import AISystems from './components/AISystems';
import CaseStudiesSection from './components/CaseStudiesSection';
import CaseStudyDetailPage from './components/CaseStudyDetailPage';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import Testimonials from './components/Testimonials';

// ScrollToTop helper for router navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const HomePage = () => (
  <>
    <Hero />
    <MediaPresence />
    <FoundationalBrand />
    <Services />
    <AISystems />
    <CaseStudiesSection />
    <Testimonials />
    <FooterCTA />
  </>
);

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="relative min-h-screen selection:bg-[#A3E635] selection:text-[#06120E] bg-[#06120E]">
        <BackgroundEffect />
        <Navbar />

        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/case-studies/:slug" element={<CaseStudyDetailPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            {/* Catch-all route to prevent matching errors */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Footer Minimalist */}
        <footer className="py-12 px-6 relative z-10 bg-[#06120E]">
          <div className="max-w-7xl mx-auto flex flex-col items-center text-center text-sm text-gray-500 space-y-6">

            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
              <a href="https://www.linkedin.com/company/kanpy/" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="https://www.instagram.com/kanpy_official?igsh=MWYwMzFrY3pldDUyeA==" className="hover:text-white transition-colors">Instagram</a>
              <a href="https://x.com/KanpyOfficial" className="hover:text-white transition-colors">Twitter</a>
              <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
              <a href="mailto:info@kanpy.in" className="hover:text-white transition-colors">info@kanpy.in</a>
              <a href="tel:+918233668773" className="hover:text-white transition-colors">Contact: +91 82336 68773, +91 74260 79381</a>
            </div>

            <div>
              © 2026 Kanpy. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </HashRouter>
  );
};

export default App;
