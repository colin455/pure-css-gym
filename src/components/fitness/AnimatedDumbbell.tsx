import React from 'react';
import { motion } from 'framer-motion';

export default function AnimatedDumbbell({ className = "w-24 h-24" }) {
  return (
    <div className={`relative ${className} flex items-center justify-center`}>
      <svg viewBox="0 0 200 100" className="w-full h-full">
        {/* Left Weight */}
        <motion.rect
          x="10"
          y="20"
          width="30"
          height="60"
          rx="5"
          fill="url(#gradient1)"
          animate={{
            y: [20, 25, 20],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Left Bar */}
        <motion.rect
          x="40"
          y="45"
          width="20"
          height="10"
          fill="#fbbf24"
          animate={{
            scaleY: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Center Bar */}
        <motion.rect
          x="60"
          y="47"
          width="80"
          height="6"
          rx="3"
          fill="#999"
          animate={{
            scaleX: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Right Bar */}
        <motion.rect
          x="140"
          y="45"
          width="20"
          height="10"
          fill="#fbbf24"
          animate={{
            scaleY: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.1
          }}
        />
        
        {/* Right Weight */}
        <motion.rect
          x="160"
          y="20"
          width="30"
          height="60"
          rx="5"
          fill="url(#gradient1)"
          animate={{
            y: [20, 25, 20],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Gradients */}
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
