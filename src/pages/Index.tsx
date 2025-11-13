import React, { useEffect, lazy, Suspense } from 'react';
import { motion, useScroll } from 'framer-motion';
import LoadingSpinner from '../components/fitness/LoadingSpinner';

// Lazy load heavy components for code splitting
const HeroSection = lazy(() => import('../components/fitness/HeroSection'));
const AboutSection = lazy(() => import('../components/fitness/AboutSection'));
const ProgramsSection = lazy(() => import('../components/fitness/ProgramsSection'));
const GallerySection = lazy(() => import('../components/fitness/GallerySection'));
const ContactSection = lazy(() => import('../components/fitness/ContactSection'));

// Loading fallback component
const SectionLoader = () => (
  <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black flex items-center justify-center">
    <LoadingSpinner size="md" text="LOADING SECTION..." />
  </div>
);

export default function Home() {
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    document.body.style.backgroundColor = '#000000';
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  return (
    <div className="relative bg-black text-white overflow-hidden">
      {/* Animated Background Elements - Static, no need to lazy load */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      {/* Main Content with Suspense boundaries */}
      <div className="relative z-10">
        <Suspense fallback={<SectionLoader />}>
          <HeroSection />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <AboutSection />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <ProgramsSection />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <GallerySection />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <ContactSection />
        </Suspense>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: scrollYProgress.get() > 0.2 ? 1 : 0 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full flex items-center justify-center shadow-lg shadow-yellow-500/50 hover:shadow-yellow-500/70 transition-all duration-300 hover:scale-110"
        aria-label="Scroll to top"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>
    </div>
  );
}
