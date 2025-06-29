'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTree, FaLeaf, FaSeedling, FaFeatherAlt, FaPaw, FaEnvelope, FaPhone, FaMapMarkerAlt, FaQuoteLeft, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { GiTreeBranch, GiOakLeaf, GiMushroomGills, GiBirch, GiSquirrel } from 'react-icons/gi';
import { BiLeaf } from 'react-icons/bi';
import { getVariantConfig } from '../../lib/variant-utils';

const config = getVariantConfig();

// Falling leaves animation
const FallingLeaf = ({ delay }: { delay: number }) => {
  const leafTypes = ['🍂', '🍃', '🌿'];
  const leaf = leafTypes[Math.floor(Math.random() * leafTypes.length)];
  const x = Math.random() * 100;
  const size = Math.random() * 20 + 15;
  
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        left: `${x}%`,
        fontSize: `${size}px`,
      }}
      initial={{ y: -50, rotate: 0 }}
      animate={{
        y: window.innerHeight + 100,
        x: [0, 50, -30, 70, 0],
        rotate: [0, 360, -180, 540, 360],
      }}
      transition={{
        duration: 15 + Math.random() * 10,
        delay,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      {leaf}
    </motion.div>
  );
};

// Forest mist effect
const ForestMist = ({ index }: { index: number }) => {
  return (
    <motion.div
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: index }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.2 }}
      transition={{ duration: 2 }}
    >
      <motion.div
        className="absolute w-full h-96 bg-gradient-to-t from-green-100/30 via-emerald-100/20 to-transparent"
        style={{ bottom: `${index * 150}px` }}
        animate={{
          x: [0, 200, -100, 0],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 25 + index * 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </motion.div>
  );
};

// Firefly animation
const Firefly = ({ delay }: { delay: number }) => {
  const startX = Math.random() * window.innerWidth;
  const startY = Math.random() * window.innerHeight;
  
  return (
    <motion.div
      className="absolute w-2 h-2 bg-yellow-300 rounded-full shadow-glow"
      style={{
        left: startX,
        top: startY,
        boxShadow: '0 0 10px yellow',
      }}
      animate={{
        x: [0, Math.random() * 200 - 100, Math.random() * 200 - 100, 0],
        y: [0, Math.random() * 200 - 100, Math.random() * 200 - 100, 0],
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration: 8 + Math.random() * 4,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
};

export default function ForestPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: 'Direct Primary Care',
      description: 'Rooted in personalized, nature-inspired healthcare',
      icon: <GiBirch className="w-12 h-12" />,
      link: '/direct-primary-care',
      color: 'from-emerald-600 to-green-700',
    },
    {
      title: 'Functional Medicine',
      description: 'Discover healing through forest wisdom and balance',
      icon: <GiMushroomGills className="w-12 h-12" />,
      link: '/functional-medicine',
      color: 'from-lime-600 to-green-700',
    },
    {
      title: 'Ketamine Therapy',
      description: 'Find clarity in the tranquil depths of the mind',
      icon: <FaFeatherAlt className="w-12 h-12" />,
      link: '/ketamine-therapy',
      color: 'from-teal-600 to-emerald-700',
    },
    {
      title: 'PRP Injections',
      description: 'Natural regeneration inspired by forest renewal',
      icon: <GiOakLeaf className="w-12 h-12" />,
      link: '/prp-injections',
      color: 'from-green-600 to-emerald-700',
    },
    {
      title: 'Addiction Treatment',
      description: 'Walk the healing path through recovery woods',
      icon: <GiTreeBranch className="w-12 h-12" />,
      link: '/addiction-treatment',
      color: 'from-amber-700 to-brown-700',
    },
  ];

  const testimonials = [
    {
      name: 'Forest Walker',
      role: 'Nature Photographer',
      content: 'Dr. Rosenberg\'s practice feels like a healing forest sanctuary. His natural approach to medicine is transformative.',
      rating: 5,
    },
    {
      name: 'Willow Greene',
      role: 'Environmental Educator',
      content: 'The forest-inspired atmosphere creates such a calming healing space. I leave feeling grounded and renewed.',
      rating: 5,
    },
    {
      name: 'Oak Strongwood',
      role: 'Trail Guide',
      content: 'Finally found healthcare that honors the connection between nature and wellness. Truly exceptional care.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-emerald-50 to-lime-50 text-gray-800 overflow-hidden">
      {/* Forest background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-100/10 to-emerald-200/20"></div>
        {[...Array(3)].map((_, i) => (
          <ForestMist key={i} index={i} />
        ))}
        {[...Array(10)].map((_, i) => (
          <FallingLeaf key={i} delay={i * 2} />
        ))}
        {[...Array(8)].map((_, i) => (
          <Firefly key={i} delay={i * 1.5} />
        ))}
      </div>

      {/* Navigation */}
      <motion.nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center space-x-3">
              <FaTree className="w-10 h-10 text-green-700" />
              <span className="text-2xl font-semibold tracking-wide">Forest Medicine</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="hover:text-green-700 transition-colors font-medium">Home</Link>
              <Link href="/about" className="hover:text-green-700 transition-colors font-medium">About</Link>
              
              <div className="relative group">
                <button
                  className="flex items-center space-x-1 hover:text-green-700 transition-colors font-medium"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <span>Services</span>
                  <FaChevronDown className="w-3 h-3" />
                </button>
                
                <AnimatePresence>
                  {servicesDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute left-0 mt-2 w-64 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl p-2"
                      onMouseEnter={() => setServicesDropdownOpen(true)}
                      onMouseLeave={() => setServicesDropdownOpen(false)}
                    >
                      {services.map((service, index) => (
                        <Link
                          key={index}
                          href={service.link}
                          className="flex items-center space-x-3 p-3 rounded-xl hover:bg-green-50 transition-colors"
                        >
                          <div className={`text-transparent bg-gradient-to-r ${service.color} bg-clip-text`}>
                            {service.icon}
                          </div>
                          <span className="text-sm">{service.title}</span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/blog" className="hover:text-green-700 transition-colors font-medium">Blog</Link>
              <Link href="/contact" className="hover:text-green-700 transition-colors font-medium">Contact</Link>
              <Link 
                href={config.appointmentUrl}
                className="px-6 py-2 bg-gradient-to-r from-green-600 to-emerald-700 text-white rounded-full hover:shadow-lg transition-all"
              >
                Book Consultation
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/95 backdrop-blur-md border-t"
            >
              <div className="px-4 py-6 space-y-4">
                <Link href="/" className="block font-medium hover:text-green-700">Home</Link>
                <Link href="/about" className="block font-medium hover:text-green-700">About</Link>
                <Link href="/blog" className="block font-medium hover:text-green-700">Blog</Link>
                <Link href="/contact" className="block font-medium hover:text-green-700">Contact</Link>
                <div className="pt-4 space-y-2">
                  <p className="font-semibold text-gray-600">Services:</p>
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      href={service.link}
                      className="block pl-4 py-2 hover:text-green-700"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
                <Link
                  href={config.appointmentUrl}
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-700 text-white rounded-full"
                >
                  Book Consultation
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-6xl mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <BiLeaf className="w-24 h-24 mx-auto text-green-700 mb-8" />
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Healing in the
              <span className="block text-transparent bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text">
                Heart of Nature
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto">
              Experience forest-inspired medicine where ancient wisdom meets modern healing
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href={config.appointmentUrl}
                className="px-10 py-4 bg-gradient-to-r from-green-600 to-emerald-700 text-white rounded-full text-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                Enter the Forest
              </Link>
              <Link
                href={config.membershipUrl}
                className="px-10 py-4 border-2 border-green-700 text-green-700 rounded-full text-lg hover:bg-green-50 transition-all"
              >
                Explore Pathways
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Forest <span className="text-green-700">Healing Paths</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Walk the ancient trails of wellness through our nature-based services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border border-green-100"
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.color} text-white mb-6`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link
                  href={service.link}
                  className="inline-flex items-center text-green-700 hover:text-green-800 font-medium"
                >
                  Follow Trail
                  <motion.span
                    className="ml-2"
                    whileHover={{ x: 5 }}
                  >
                    →
                  </motion.span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-green-50/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Your <span className="text-green-700">Forest Guide</span>
              </h2>
              <div className="space-y-6 text-gray-700">
                <p className="text-lg">
                  Dr. Aaron Rosenberg brings the wisdom of the forest to modern medicine, creating a healing sanctuary where nature and science unite.
                </p>
                <p className="text-lg">
                  Like a skilled forest guide, he helps patients navigate their health journey with deep knowledge, intuition, and respect for natural healing.
                </p>
                <div className="flex items-center space-x-6 pt-4">
                  <div className="text-center">
                    <GiSquirrel className="w-12 h-12 text-amber-600 mx-auto mb-2" />
                    <p className="text-sm">Gentle Approach</p>
                  </div>
                  <div className="text-center">
                    <FaSeedling className="w-12 h-12 text-green-600 mx-auto mb-2" />
                    <p className="text-sm">Growth Focus</p>
                  </div>
                  <div className="text-center">
                    <FaPaw className="w-12 h-12 text-brown-600 mx-auto mb-2" />
                    <p className="text-sm">Natural Path</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-200 to-emerald-200 rounded-3xl transform rotate-3"></div>
              <Image
                src="/images/dr-rosenberg.jpg"
                alt="Dr. Aaron Rosenberg"
                width={500}
                height={600}
                className="relative rounded-3xl shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Forest <span className="text-green-700">Whispers</span>
            </h2>
            <p className="text-xl text-gray-700">
              Stories of healing from our woodland community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg"
              >
                <FaQuoteLeft className="text-3xl text-green-300 mb-4" />
                <p className="text-gray-700 mb-6 italic">{testimonial.content}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaLeaf key={i} className="w-5 h-5 text-green-500" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-100 via-emerald-100 to-lime-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <GiTreeBranch className="w-16 h-16 mx-auto text-green-700 mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Walk the <span className="text-green-700">Healing Path?</span>
            </h2>
            <p className="text-xl text-gray-700 mb-10">
              Begin your journey through the forest of wellness today
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href={config.appointmentUrl}
                className="px-10 py-4 bg-gradient-to-r from-green-600 to-emerald-700 text-white rounded-full text-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                Start Your Journey
              </Link>
              <Link
                href="/contact"
                className="px-10 py-4 border-2 border-green-700 text-green-700 rounded-full text-lg hover:bg-green-50 transition-all"
              >
                Contact the Forest
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16"
          >
            <div>
              <h2 className="text-4xl font-bold mb-8">
                Find Our <span className="text-green-700">Grove</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <FaMapMarkerAlt className="w-6 h-6 text-green-700 mt-1" />
                  <div>
                    <p className="font-semibold">Visit Our Sanctuary</p>
                    <p className="text-gray-600">{config.contactInfo.address}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <FaPhone className="w-6 h-6 text-green-700 mt-1" />
                  <div>
                    <p className="font-semibold">Call the Treehouse</p>
                    <p className="text-gray-600">{config.contactInfo.phone}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <FaEnvelope className="w-6 h-6 text-green-700 mt-1" />
                  <div>
                    <p className="font-semibold">Send a Forest Note</p>
                    <p className="text-gray-600">{config.contactInfo.email}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8">
              <h3 className="text-2xl font-semibold mb-6">Leave a Message</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-6 py-3 bg-white/80 backdrop-blur-sm rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-400 resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-700 text-white rounded-full hover:shadow-lg transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <FaTree className="w-12 h-12 text-green-400 mx-auto mb-4" />
          <p className="text-gray-400 mb-4">
            © 2024 Lotus Direct Care. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Rooted in nature, growing in wellness
          </p>
        </div>
      </footer>
    </div>
  );
}