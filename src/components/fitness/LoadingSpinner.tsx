import React from 'react';
import { motion } from 'framer-motion';

export default function LoadingSpinner({ size = "md", text = "LOADING..." }) {
  const sizes = {
    sm: "w-8 h-8",
    md: "w-16 h-16",
    lg: "w-24 h-24"
  };

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      {/* Spinning Rings */}
      <div className={`relative ${sizes[size]}`}>
        {/* Outer Ring */}
        <motion.div
          className="absolute inset-0 border-4 border-transparent border-t-yellow-500 border-r-yellow-500 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
        {/* Middle Ring */}
        <motion.div
          className="absolute inset-2 border-4 border-transparent border-b-amber-500 border-l-amber-500 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        {/* Inner Ring */}
        <motion.div
          className="absolute inset-4 border-4 border-transparent border-t-yellow-400 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        {/* Center Pulse */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-2 h-2 bg-yellow-500 rounded-full" />
        </motion.div>
        {/* Glow Effect */}
        <motion.div
          className="absolute inset-0 bg-yellow-500 rounded-full blur-xl opacity-50"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Loading Text */}
      {text && (
        <motion.div
          className="text-white font-bold tracking-widest text-sm"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          {text}
        </motion.div>
      )}
    </div>
  );
}
