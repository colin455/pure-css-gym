import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Zap, Heart, Target, User, LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Program {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  color: string;
  bgGradient: string;
}

interface ProgramCardProps {
  program: Program;
  index: number;
}

const programs: Program[] = [
  {
    icon: Zap,
    title: 'Strength Training',
    description: 'Build raw power and muscle mass with our comprehensive strength programs',
    features: ['Heavy compound lifts', 'Progressive overload', 'Muscle hypertrophy focus'],
    color: 'from-red-600 to-orange-500',
    bgGradient: 'from-red-600/20 to-orange-600/20'
  },
  {
    icon: Heart,
    title: 'Cardio & Endurance',
    description: 'Boost your cardiovascular health and stamina with high-intensity workouts',
    features: ['HIIT sessions', 'Running programs', 'Metabolic conditioning'],
    color: 'from-blue-600 to-cyan-500',
    bgGradient: 'from-blue-600/20 to-cyan-600/20'
  },
  {
    icon: Target,
    title: 'CrossFit',
    description: 'Experience functional fitness through varied, high-intensity movements',
    features: ['Olympic lifts', 'Gymnastics skills', 'Metabolic workouts'],
    color: 'from-purple-600 to-pink-500',
    bgGradient: 'from-purple-600/20 to-pink-600/20'
  },
  {
    icon: User,
    title: 'Personal Coaching',
    description: 'One-on-one attention with customized plans tailored to your goals',
    features: ['Custom programming', 'Form correction', 'Nutrition guidance'],
    color: 'from-green-600 to-emerald-500',
    bgGradient: 'from-green-600/20 to-emerald-600/20'
  }
];

// Simplified Program Card
const ProgramCard = memo(({ program, index }: ProgramCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ amount: 0.3 }}
    transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
    className="group relative"
  >
    {/* Hover Glow */}
    <div className={`absolute inset-0 bg-gradient-to-br ${program.bgGradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

    {/* Card */}
    <div className="relative bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-300 h-full">
      {/* Icon */}
      <div className="mb-6">
        <div className={`w-16 h-16 bg-gradient-to-br ${program.color} rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300`}>
          <program.icon className="w-8 h-8 text-white" />
        </div>
      </div>

      {/* Content */}
      <h3 className="text-3xl font-black mb-4 text-white group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
        {program.title}
      </h3>
      <p className="text-gray-400 mb-6 leading-relaxed">
        {program.description}
      </p>

      {/* Features */}
      <ul className="space-y-3">
        {program.features.map((feature, idx) => (
          <li
            key={idx}
            className="flex items-center text-gray-300"
          >
            <div className={`w-1.5 h-1.5 bg-gradient-to-r ${program.color} rounded-full mr-3`} />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
));

ProgramCard.displayName = 'ProgramCard';

function ProgramsSection() {
  return (
    <section className="relative py-32 px-6 bg-black">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] animate-pulse" />
      </div>

      <div className="relative container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full mb-6">
            <span className="text-yellow-500 text-sm font-bold tracking-wider">OUR PROGRAMS</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              CHOOSE YOUR
            </span>
            <br />
            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
              PATH TO GREATNESS
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Whether you're building strength, improving endurance, or seeking personalized guidance,
            we have the perfect program for your fitness journey.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <ProgramCard
              key={program.title}
              program={program}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">Not sure which program is right for you?</p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-white px-10 py-6 text-lg font-bold rounded-full shadow-lg shadow-yellow-500/50 hover:shadow-yellow-500/70 transition-all duration-300 hover:scale-105"
          >
            SCHEDULE A CONSULTATION
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

export default memo(ProgramsSection);
