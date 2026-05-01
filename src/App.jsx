import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { RequestProvider } from './context/RequestContext';
import { SettingsProvider } from './context/SettingsContext';
import RequestInfoFAB from './components/RequestInfoFAB';
import CookieConsent from './components/CookieConsent';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

import Home from './pages/Home';

// Lazy load other pages for code splitting
const About = lazy(() => import('./pages/About'));
const Topics = lazy(() => import('./pages/Topics'));
const Contact = lazy(() => import('./pages/Contact'));
const FAQPage = lazy(() => import('./pages/FAQ'));
const TopicDetails = lazy(() => import('./pages/TopicDetails'));
const GuideDetails = lazy(() => import('./pages/GuideDetails'));
const Guides = lazy(() => import('./pages/Guides'));
const PrivacyPolicy = lazy(() => import('./pages/policies/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/policies/TermsOfService'));
const RefundPolicy = lazy(() => import('./pages/policies/RefundPolicy'));
const CookiePolicy = lazy(() => import('./pages/policies/CookiePolicy'));
const Disclaimer = lazy(() => import('./pages/policies/Disclaimer'));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const AppContent = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  // No longer hiding header/footer for specific appliance pages as they are removed
  const hideHeaderFooter = false;

  return (
    <div className="App overflow-x-hidden">
      {!hideHeaderFooter && !isHomePage && <Header />}
      <CookieConsent />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/drivers" element={<Topics />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />

          {/* Dynamic route for all Drivers */}
          <Route path="/driver/:slug" element={<TopicDetails />} />

          {/* Dynamic route for all Guides */}
          <Route path="/guide/:slug" element={<GuideDetails />} />


        </Routes>
        {!hideHeaderFooter && <Footer />}
      </Suspense>
    </div>
  );
};

function App() {
  return (
    <SettingsProvider>
      <RequestProvider>
        <Router>
          <ScrollToTop />
          <AppContent />
        </Router>
      </RequestProvider>
    </SettingsProvider>
  );
}

export default App;