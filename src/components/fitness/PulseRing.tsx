import React from 'react';
import { motion } from 'framer-motion';

export default function PulseRing({ color = "red", delay = 0 }) {
  const colors = {
    red: "bg-yellow-500",
    blue: "bg-amber-500",
    orange: "bg-orange-500",
    green: "bg-green-500"
  };

  return (
    <div className="relative w-20 h-20">
      {/* Multiple Pulse Rings */}
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className={`absolute inset-0 ${colors[color]} rounded-full`}
          initial={{ scale: 0, opacity: 0.8 }}
          animate={{
            scale: [0, 2, 3],
            opacity: [0.8, 0.4, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeOut",
            delay: delay + index * 1,
          }}
        />
      ))}

      {/* Center Dot */}
      <div className={`absolute inset-0 flex items-center justify-center`}>
        <motion.div
          className={`w-4 h-4 ${colors[color]} rounded-full`}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
}
