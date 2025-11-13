import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Zap, Target, Award } from 'lucide-react';

const icons = [Dumbbell, Zap, Target, Award];

export default function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map((Icon, index) => {
        const randomX = Math.random() * 100;
        const randomDelay = Math.random() * 2;
        const randomDuration = 10 + Math.random() * 10;

        return (
          <motion.div
            key={index}
            className="absolute"
            style={{
              left: `${randomX}%`,
              top: '-50px',
            }}
            initial={{ y: 0, opacity: 0 }}
            animate={{
              y: ['0vh', '110vh'],
              opacity: [0, 0.3, 0.3, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: randomDuration,
              delay: randomDelay,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <Icon className="w-8 h-8 text-yellow-500" />
          </motion.div>
        );
      })}
    </div>
  );
}
