import React, { lazy, Suspense, memo } from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LazyImage from './LazyImage';

// Lazy load heavy animation components
const AnimatedDumbbell = lazy(() => import('./AnimatedDumbbell'));
const FloatingElements = lazy(() => import('./FloatingElements'));
const AnimatedStats = lazy(() => import('./AnimatedStats'));

interface Stat {
  value: string;
  label: string;
  suffix: string;
}

interface StatCardProps {
  stat: Stat;
  index: number;
}

// Memoized stat card component
const StatCard = memo(({ stat, index }: StatCardProps) => (
  <div className="relative group">
    <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-amber-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:border-yellow-500/50 transition-all duration-300">
      <div className="text-4xl font-black text-yellow-500 mb-2">
        <Suspense fallback={<span>{stat.value}{stat.suffix}</span>}>
          <AnimatedStats value={stat.value} suffix={stat.suffix} />
        </Suspense>
      </div>
      <div className="text-sm text-gray-400 tracking-widest">{stat.label}</div>
    </div>
  </div>
));

StatCard.displayName = 'StatCard';

function HeroSection() {
  const stats = [
    { value: '500', label: 'MEMBERS', suffix: '+' },
    { value: '10', label: 'TRAINERS', suffix: '+' },
    { value: '24', label: 'ACCESS', suffix: '/7' }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dark Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, #fbbf24 1px, transparent 1px),
                           linear-gradient(to bottom, #fbbf24 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          opacity: 0.1
        }} />
      </div>

      {/* Floating Elements Animation - Lazy loaded */}
      <Suspense fallback={null}>
        <FloatingElements />
      </Suspense>

      {/* Silhouette Image - Lazy loaded */}
      <div className="absolute inset-0 opacity-30">
        <LazyImage
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&h=1080&fit=crop"
          alt="Athlete"
          className="w-full h-full object-cover mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>

      {/* Glowing Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500 rounded-full blur-[150px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500 rounded-full blur-[150px]"
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Animated Dumbbell - Lazy loaded */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex justify-center mb-6"
        >
          <Suspense fallback={<div className="w-20 h-20" />}>
            <AnimatedDumbbell className="w-20 h-20" />
          </Suspense>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-8">
            <Zap className="w-4 h-4 text-yellow-500" />
            <span className="text-sm tracking-wider text-gray-300">PREMIUM FITNESS EXPERIENCE</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-6xl md:text-8xl font-black mb-6 tracking-tight"
        >
          <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            UNLEASH YOUR
          </span>
          <br />
          <span className="bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 bg-clip-text text-transparent">
            POWER
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto font-light tracking-wide"
        >
          Strength. Endurance. Transformation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            size="lg"
            className="relative group bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-white px-8 py-6 text-lg font-bold rounded-full shadow-lg shadow-yellow-500/50 hover:shadow-yellow-500/70 transition-all duration-300 hover:scale-105"
          >
            <Dumbbell className="w-5 h-5 mr-2" />
            START TRAINING
            <span className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white px-8 py-6 text-lg font-bold rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105"
          >
            EXPLORE PROGRAMS
          </Button>
        </motion.div>

        {/* Stats with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-3xl mx-auto"
        >
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-yellow-500 rounded-full mx-auto"
          />
        </div>
      </motion.div>
    </section>
  );
}

export default memo(HeroSection);
