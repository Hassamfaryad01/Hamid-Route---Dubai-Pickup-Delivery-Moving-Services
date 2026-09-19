import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { AreasPage } from './pages/AreasPage';
import { LegalPage } from './pages/LegalPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { SERVICES, BUSINESS_INFO } from './data/content';
import { trackEvent } from './utils/analytics';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const pathname = window.location.pathname;
      return pathname.endsWith('/') || pathname === '' ? pathname || '/' : `${pathname}/`;
    }
    return '/';
  });

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const pathname = window.location.pathname;
      const normalized = pathname.endsWith('/') || pathname === '' ? pathname || '/' : `${pathname}/`;
      setCurrentPath(normalized);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Programmatic navigation
  const navigate = (path: string) => {
    const normalized = path.endsWith('/') || path === '' ? path || '/' : `${path}/`;
    if (normalized !== currentPath) {
      window.history.pushState({}, '', normalized);
      setCurrentPath(normalized);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Find matching service if on a service detail slug
  const matchedService = SERVICES.find(
    (s) => currentPath === `/${s.slug}/` || currentPath === `/${s.slug}`
  );

  // Synchronize Document Title, Meta Description & Analytics
  useEffect(() => {
    let title = 'Hamid Route - UAE Pickup, Delivery & Moving Services';
    let description = 'UAE pickup, delivery, moving & transport services. Direct Call or WhatsApp booking with founder Hamid Bajwa.';

    if (currentPath === '/') {
      title = 'Hamid Route - UAE Pickup, Delivery & Moving Services';
      description = 'UAE pickup, delivery, moving & transport services. Direct Call or WhatsApp booking with founder Hamid Bajwa.';
    } else if (currentPath === '/services/') {
      title = 'Services | Pickup, Delivery & Moving UAE | Hamid Route';
      description = 'Explore Hamid Route services in UAE: furniture pickup, appliance delivery, single items, office and apartment moving. Direct Call or WhatsApp.';
      trackEvent('service_page_view', { page: 'services_hub' });
    } else if (matchedService) {
      title = matchedService.metaTitle;
      description = matchedService.metaDescription;
      trackEvent('service_page_view', { serviceId: matchedService.id, slug: matchedService.slug });
    } else if (currentPath === '/how-it-works/') {
      title = 'How It Works | Simple 3-Step Route | Hamid Route';
      description = 'How Hamid Route works: Tell us what needs moving, share the details, and get it moving. No forms or calculators.';
    } else if (currentPath === '/reviews/') {
      title = 'Customer Reviews | UAE Moving & Transport | Hamid Route';
      description = 'Real customer experiences with Hamid Route pickup, delivery and moving services across UAE.';
      trackEvent('review_view');
    } else if (currentPath === '/about/') {
      title = 'About Hamid Route | Founder Hamid Bajwa';
      description = 'Learn about Hamid Route and founder Hamid Bajwa. Practical pickup, delivery and moving services across UAE.';
    } else if (currentPath === '/contact/') {
      title = 'Contact Hamid Route | UAE Pickup & Moving Services';
      description = 'Contact Hamid Route directly by phone or WhatsApp on 050 741 9304 to arrange your pickup or move in UAE.';
      trackEvent('contact_page_view');
    } else if (currentPath === '/areas/') {
      title = 'Areas We Serve in UAE | Hamid Route';
      description = 'Hamid Route provides pickup, moving and delivery services across Dubai Marina, Downtown, JLT, JVC, Business Bay, Dubai Hills, and beyond.';
    } else if (currentPath === '/privacy/') {
      title = 'Privacy Policy | Hamid Route';
      description = 'Privacy policy and data handling information for Hamid Route services in UAE.';
    } else if (currentPath === '/terms/') {
      title = 'Terms & Conditions | Hamid Route';
      description = 'Terms and conditions for Hamid Route pickup, delivery and moving services in UAE.';
    } else {
      title = 'Wrong Route? | Hamid Route';
    }

    document.title = title;
    const metaDescTag = document.querySelector('meta[name="description"]');
    if (metaDescTag) {
      metaDescTag.setAttribute('content', description);
    }
  }, [currentPath, matchedService]);

  // Determine current prefilled message for WhatsApp
  const currentWhatsAppMessage = matchedService?.whatsappMessage || BUSINESS_INFO.primaryWhatsAppMessage;

  // Render Route View
  const renderCurrentView = () => {
    if (currentPath === '/') {
      return <HomePage navigate={navigate} />;
    }
    if (currentPath === '/services/') {
      return <ServicesPage navigate={navigate} />;
    }
    if (matchedService) {
      return <ServiceDetailPage service={matchedService} navigate={navigate} />;
    }
    if (currentPath === '/how-it-works/') {
      return <HowItWorksPage navigate={navigate} />;
    }
    if (currentPath === '/reviews/') {
      return <ReviewsPage navigate={navigate} />;
    }
    if (currentPath === '/about/') {
      return <AboutPage navigate={navigate} />;
    }
    if (currentPath === '/contact/') {
      return <ContactPage navigate={navigate} />;
    }
    if (currentPath === '/areas/') {
      return <AreasPage navigate={navigate} />;
    }
    if (currentPath === '/privacy/') {
      return <LegalPage type="privacy" navigate={navigate} />;
    }
    if (currentPath === '/terms/') {
      return <LegalPage type="terms" navigate={navigate} />;
    }
    return <NotFoundPage navigate={navigate} />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F1EA] text-[#0B1830]">
      {/* Site Header with Logo, Navigation & CTAs */}
      <Header currentPath={currentPath} navigate={navigate} />

      {/* Primary Page Content */}
      <main className="flex-1">
        {renderCurrentView()}
      </main>

      {/* Persistent Bottom Mobile Action Bar (Section 39) */}
      <MobileBottomBar currentPrefilledMessage={currentWhatsAppMessage} />

      {/* Global Footer */}
      <Footer navigate={navigate} showPreFooterCTA={currentPath !== '/contact/'} />
    </div>
  );
}
