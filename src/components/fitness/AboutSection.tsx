import React, { lazy, Suspense, memo } from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Dumbbell, Target, LucideIcon } from 'lucide-react';

// Lazy load PulseRing animation
const PulseRing = lazy(() => import('./PulseRing'));

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

const features: Feature[] = [
  {
    icon: Award,
    title: 'Certified Trainers',
    description: 'Expert coaches with years of experience and proven results',
    color: 'red'
  },
  {
    icon: Dumbbell,
    title: 'Modern Equipment',
    description: 'State-of-the-art machines and free weights for every workout',
    color: 'blue'
  },
  {
    icon: Target,
    title: 'Personalized Plans',
    description: 'Custom training programs designed for your specific goals',
    color: 'orange'
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Join a supportive network of dedicated fitness enthusiasts',
    color: 'green'
  }
];

// Memoized Feature Card
const FeatureCard = memo(({ feature, index }: FeatureCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="group relative"
  >
    {/* Glow Effect */}
    <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-blue-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    {/* Card */}
    <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-red-500/50 transition-all duration-300">
      {/* Icon Container with Pulse Ring */}
      <div className="mb-6 relative flex items-center gap-4">
        <div className="relative">
          <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-500 rounded-xl flex items-center justify-center shadow-lg shadow-red-500/50 group-hover:shadow-red-500/70 transition-all duration-300 group-hover:scale-110 relative z-10">
            <feature.icon className="w-8 h-8 text-white" />
          </div>
          {/* Pulse Ring Animation - Lazy loaded */}
          <div className="absolute -top-2 -left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Suspense fallback={null}>
              <PulseRing color={feature.color} delay={index * 0.2} />
            </Suspense>
          </div>
        </div>
      </div>

      {/* Content */}
      <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-red-500 transition-colors duration-300">
        {feature.title}
      </h3>
      <p className="text-gray-400 leading-relaxed">
        {feature.description}
      </p>

      {/* Animated Line */}
      <motion.div
        className="mt-4 h-1 bg-gradient-to-r from-red-600 to-orange-500 rounded-full"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
        style={{ transformOrigin: 'left' }}
      />
    </div>
  </motion.div>
));

FeatureCard.displayName = 'FeatureCard';

function AboutSection() {
  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at center, #ff3131 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-2 bg-red-600/10 border border-red-600/20 rounded-full mb-6">
            <span className="text-red-500 text-sm font-bold tracking-wider">ABOUT US</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              WHERE CHAMPIONS
            </span>
            <br />
            <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
              ARE MADE
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            At Fitness World, we're more than just a gym. We're a movement dedicated to transforming lives through
            strength, discipline, and unwavering commitment. Your journey to greatness starts here.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-transparent to-blue-600/10 rounded-3xl blur-2xl" />
          <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12 md:p-16">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-3xl md:text-4xl font-black mb-6 text-white">
                OUR MISSION
              </h3>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                To empower every individual who walks through our doors with the tools, knowledge, and
                motivation to achieve their fitness goals and unlock their full potential. We believe
                that transformation begins with a single rep, a single step, a single decision to be better.
              </p>
              <motion.div
                className="h-1 w-32 bg-gradient-to-r from-red-600 to-orange-500 mx-auto rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default memo(AboutSection);
