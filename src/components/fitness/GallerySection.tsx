import React, { useState, memo, Dispatch, SetStateAction } from 'react';
import { motion } from 'framer-motion';
import LazyImage from './LazyImage';

interface Image {
  url: string;
  title: string;
  category: string;
}

interface GalleryItemProps {
  image: Image;
  index: number;
  hoveredIndex: number | null;
  setHoveredIndex: Dispatch<SetStateAction<number | null>>;
}

const images: Image[] = [
  {
    url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop',
    title: 'Strength Zone',
    category: 'EQUIPMENT'
  },
  {
    url: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=600&fit=crop',
    title: 'Cardio Area',
    category: 'TRAINING'
  },
  {
    url: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop',
    title: 'Group Classes',
    category: 'COMMUNITY'
  },
  {
    url: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&h=600&fit=crop',
    title: 'Free Weights',
    category: 'EQUIPMENT'
  },
  {
    url: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&h=600&fit=crop',
    title: 'CrossFit Box',
    category: 'TRAINING'
  },
  {
    url: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=800&h=600&fit=crop',
    title: 'Personal Training',
    category: 'COACHING'
  }
];

// Memoized Gallery Item
const GalleryItem = memo(({ image, index, hoveredIndex, setHoveredIndex }: GalleryItemProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ amount: 0.3 }}
    transition={{ duration: 0.8, delay: index * 0.12, ease: "easeOut" }}
    onMouseEnter={() => setHoveredIndex(index)}
    onMouseLeave={() => setHoveredIndex(null)}
    className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-[4/3]"
  >
    {/* Lazy Loaded Image */}
    <LazyImage
      src={image.url}
      alt={image.title}
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    />

    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

    {/* Gold Glow Effect */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
      className="absolute inset-0 bg-gradient-to-br from-yellow-500/30 to-transparent"
    />

    {/* Content */}
    <div className="absolute inset-0 p-6 flex flex-col justify-end">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{
          y: hoveredIndex === index ? 0 : 20,
          opacity: hoveredIndex === index ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <span className="inline-block px-3 py-1 bg-yellow-500/80 backdrop-blur-sm rounded-full text-xs font-bold text-white mb-3">
          {image.category}
        </span>
      </motion.div>

      <h3 className="text-2xl font-black text-white mb-2 transform group-hover:translate-y-0 translate-y-2 transition-transform duration-300">
        {image.title}
      </h3>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: hoveredIndex === index ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="h-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full origin-left"
      />
    </div>

    {/* Border Glow on Hover */}
    <div className="absolute inset-0 border-2 border-transparent group-hover:border-yellow-500/50 rounded-2xl transition-colors duration-300" />
  </motion.div>
));

GalleryItem.displayName = 'GalleryItem';

function GallerySection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, #fbbf24 1px, transparent 1px),
                           linear-gradient(to bottom, #fbbf24 1px, transparent 1px)`,
          backgroundSize: '100px 100px',
          opacity: 0.03
        }} />
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
            <span className="text-yellow-500 text-sm font-bold tracking-wider">GALLERY</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              EXPERIENCE
            </span>
            <br />
            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
              FITNESS WORLD
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Take a visual tour of our world-class facilities, equipment, and community
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <GalleryItem
              key={index}
              image={image}
              index={index}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
            />
          ))}
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="text-center mt-16"
        >
          <p className="text-2xl font-light text-gray-300">
            Step into a space where{' '}
            <span className="font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
              dedication meets excellence
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default memo(GallerySection);
