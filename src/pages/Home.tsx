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
        <div className="absolute top-20 left-10 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse delay-1000" />
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
    </div>
  );
}