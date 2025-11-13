import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter, LucideIcon } from 'lucide-react';

interface ContactInfo {
  icon: LucideIcon;
  title: string;
  content: string;
}

interface SocialLink {
  icon: LucideIcon;
  label: string;
  href: string;
}

interface InfoCardProps {
  info: ContactInfo;
  index: number;
}

const contactInfo: ContactInfo[] = [
  {
    icon: MapPin,
    title: 'Location',
    content: '123 Fitness Street, Gym City, GC 12345'
  },
  {
    icon: Phone,
    title: 'Phone',
    content: '+1 (555) 123-4567'
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'hello@fitnessworld.com'
  },
  {
    icon: Clock,
    title: 'Hours',
    content: 'Mon-Sun: 5AM - 11PM'
  }
];

const socialLinks: SocialLink[] = [
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' }
];

// Memoized Info Card
const InfoCard = memo(({ info, index }: InfoCardProps) => (
  <div className="group relative">
    <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-amber-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-yellow-500/50 transition-all duration-300">
      <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-amber-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        <info.icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-white font-bold mb-2">{info.title}</h3>
      <p className="text-gray-400 text-sm">{info.content}</p>
    </div>
  </div>
));

InfoCard.displayName = 'InfoCard';

function ContactSection() {
  return (
    <section className="relative py-32 px-6 bg-black">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px]" />
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
            <span className="text-yellow-500 text-sm font-bold tracking-wider">GET IN TOUCH</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              START YOUR
            </span>
            <br />
            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
              TRANSFORMATION
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to unleash your power? Reach out to us and begin your journey to greatness.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-center"
          >
            {/* Info Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
              {contactInfo.map((info, index) => (
                <InfoCard key={info.title} info={info} index={index} />
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="relative rounded-2xl overflow-hidden h-64 mb-8 w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-yellow-500 mx-auto mb-3" />
                  <p className="text-gray-400">Interactive Map</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-white font-bold mb-4 text-lg">Follow Us</h3>
              <div className="flex gap-4 justify-center">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="group w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center hover:border-yellow-500/50 hover:bg-yellow-500/10 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-gray-400 group-hover:text-yellow-500 transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
        className="relative mt-24 pt-12 border-t border-white/10"
      >
        <div className="container mx-auto max-w-7xl text-center">
          <h3 className="text-3xl font-black mb-4">
            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
              FITNESS WORLD
            </span>
          </h3>
          <p className="text-gray-400 mb-6">Where Champions Are Made</p>
          <p className="text-gray-500 text-sm">
            © 2024 Fitness World. All rights reserved. | Unleash Your Power.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

export default memo(ContactSection);
