import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PhilosophyBanner } from './components/PhilosophyBanner';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { LearningJourneySection } from './components/LearningJourneySection';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AdmissionModal } from './components/AdmissionModal';
import { FloatingActions } from './components/FloatingActions';
import { NotFoundView } from './components/NotFoundView';
import { LanguageProvider, useLanguage } from './i18n/LanguageContext';

function AppContent() {
  const { isRTL, currentLang } = useLanguage();
  const [isAdmissionOpen, setIsAdmissionOpen] = useState(false);
  const [selectedCourseForInquiry, setSelectedCourseForInquiry] = useState<string>('');
  const [is404, setIs404] = useState(false);

  // Check URL hash or path for 404 testing
  useEffect(() => {
    const handleHashCheck = () => {
      const hash = window.location.hash;
      if (hash === '#404' || hash === '#not-found') {
        setIs404(true);
      } else {
        setIs404(false);
      }
    };

    window.addEventListener('hashchange', handleHashCheck);
    handleHashCheck();

    return () => window.removeEventListener('hashchange', handleHashCheck);
  }, []);

  const handleOpenAdmission = (courseTitle?: string) => {
    if (courseTitle) {
      setSelectedCourseForInquiry(courseTitle);
    }
    setIsAdmissionOpen(true);
  };

  const handleSelectServiceForInquiry = (courseTitle: string) => {
    setSelectedCourseForInquiry(courseTitle);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsAdmissionOpen(true);
    }
  };

  const handleExploreServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (is404) {
    return <NotFoundView onReturnHome={() => { window.location.hash = '#home'; setIs404(false); }} />;
  }

  return (
    <div
      dir={isRTL ? 'rtl' : 'ltr'}
      lang={currentLang}
      className={`min-h-screen bg-[#031d17] text-slate-100 flex flex-col selection:bg-[#d4af37] selection:text-[#031d17] overflow-x-hidden ${
        currentLang === 'ur' ? 'font-urdu' : currentLang === 'ar' ? 'font-arabic' : 'font-sans'
      }`}
    >
      {/* Sticky Navigation Bar */}
      <Navbar onOpenAdmission={handleOpenAdmission} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onExploreServices={handleExploreServices}
          onOpenAdmission={handleOpenAdmission}
        />

        {/* 2. Educational Philosophy & Purpose */}
        <PhilosophyBanner />

        {/* 3. Comprehensive Services & Courses */}
        <ServicesSection
          onSelectServiceForInquiry={handleSelectServiceForInquiry}
        />

        {/* 4. About the Academy */}
        <AboutSection />

        {/* 5. Why Choose Us (8 Pillars) */}
        <WhyChooseSection
          onOpenAdmission={() => handleOpenAdmission()}
        />

        {/* 6. Learning Journey (5 Stages) */}
        <LearningJourneySection
          onOpenAdmission={() => handleOpenAdmission()}
        />

        {/* 7. Activities & Learning Showcase Gallery */}
        <GallerySection />

        {/* 8. Parent & Student Testimonials */}
        <TestimonialsSection />

        {/* 9. Interactive FAQ Accordion */}
        <FAQSection />

        {/* 10. Admission & Contact Section */}
        <ContactSection
          preselectedCourse={selectedCourseForInquiry}
          onInquirySubmitted={() => {}}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Instant Action Buttons (WhatsApp + Quick Enroll) */}
      <FloatingActions onOpenAdmission={() => handleOpenAdmission()} />

      {/* Admission / Enroll Modal */}
      <AdmissionModal
        isOpen={isAdmissionOpen}
        onClose={() => setIsAdmissionOpen(false)}
        preselectedCourse={selectedCourseForInquiry}
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
