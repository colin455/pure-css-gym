import React, { useState, memo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter, LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

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
    <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-blue-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-red-500/50 transition-all duration-300">
      <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        <info.icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-white font-bold mb-2">{info.title}</h3>
      <p className="text-gray-400 text-sm">{info.content}</p>
    </div>
  </div>
));

InfoCard.displayName = 'InfoCard';

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    toast.success('Message sent! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  }, []);

  const handleInputChange = useCallback((field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  }, []);

  return (
    <section className="relative py-32 px-6 bg-black">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
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
            <span className="text-red-500 text-sm font-bold tracking-wider">GET IN TOUCH</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              START YOUR
            </span>
            <br />
            <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
              TRANSFORMATION
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to unleash your power? Reach out to us and begin your journey to greatness.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Info Cards */}
            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {contactInfo.map((info, index) => (
                <InfoCard key={info.title} info={info} index={index} />
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="relative rounded-2xl overflow-hidden h-64 mb-8">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-red-500 mx-auto mb-3" />
                  <p className="text-gray-400">Interactive Map</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-white font-bold mb-4 text-lg">Follow Us</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="group w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center hover:border-red-500/50 hover:bg-red-500/10 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-gray-400 group-hover:text-red-500 transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-blue-600/10 rounded-3xl blur-2xl" />
              <form onSubmit={handleSubmit} className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 space-y-6">
                <div>
                  <label htmlFor="name" className="text-white font-semibold mb-2 block">Full Name</label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-red-500/50 focus:ring-red-500/20 rounded-xl h-12"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="text-white font-semibold mb-2 block">Email</label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-red-500/50 focus:ring-red-500/20 rounded-xl h-12"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="text-white font-semibold mb-2 block">Phone</label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-red-500/50 focus:ring-red-500/20 rounded-xl h-12"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-white font-semibold mb-2 block">Message</label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your fitness goals..."
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    required
                    rows={5}
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-red-500/50 focus:ring-red-500/20 rounded-xl resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-bold rounded-xl h-14 shadow-lg shadow-red-500/50 hover:shadow-red-500/70 transition-all duration-300 hover:scale-[1.02]"
                >
                  SEND MESSAGE
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="relative mt-24 pt-12 border-t border-white/10"
      >
        <div className="container mx-auto max-w-7xl text-center">
          <h3 className="text-3xl font-black mb-4">
            <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
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
