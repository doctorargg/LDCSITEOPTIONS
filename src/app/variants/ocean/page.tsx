'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWater, FaAnchor, FaShip, FaFish, FaUmbrellaBeach, FaEnvelope, FaPhone, FaMapMarkerAlt, FaQuoteLeft, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { GiWaveCrest, GiSeashell, GiDolphin, GiCoral, GiLighthouse } from 'react-icons/gi';
import { BiWater } from 'react-icons/bi';
import { getVariantConfig } from '../../../lib/variant-utils';

const config = getVariantConfig();

// Wave animation component
const WaveLayer = ({ index }: { index: number }) => {
  return (
    <motion.div
      className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
      style={{ zIndex: index }}
      initial={{ x: 0 }}
      animate={{
        x: [0, 100, 0],
      }}
      transition={{
        duration: 8 + index * 2,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
        <path
          d={`M0,${60 + index * 10} C${200 + index * 50},${80 + index * 10} ${400 + index * 50},${40 + index * 10} 600,${60 + index * 10} C${800 + index * 50},${80 + index * 10} ${1000 + index * 50},${40 + index * 10} 1200,${60 + index * 10} V120 H0 Z`}
          fill={`rgba(59, 130, 246, ${0.1 - index * 0.02})`}
        />
      </svg>
    </motion.div>
  );
};

// Bubble animation
const Bubble = ({ delay }: { delay: number }) => {
  const size = Math.random() * 20 + 10;
  const x = Math.random() * 100;
  
  return (
    <motion.div
      className="absolute rounded-full bg-blue-300/20 border border-blue-400/30"
      style={{
        width: size,
        height: size,
        left: `${x}%`,
        bottom: -50,
      }}
      animate={{
        y: [0, -window.innerHeight - 100],
        x: [0, (Math.random() - 0.5) * 100],
        scale: [1, 1.2, 0.8],
      }}
      transition={{
        duration: 10 + Math.random() * 5,
        delay,
        repeat: Infinity,
        ease: 'easeOut',
      }}
    />
  );
};

// Fish swimming animation
const Fish = ({ delay }: { delay: number }) => {
  const y = Math.random() * 80 + 10;
  const direction = Math.random() > 0.5 ? 1 : -1;
  
  return (
    <motion.div
      className="absolute text-blue-400/40"
      style={{
        top: `${y}%`,
        fontSize: '24px',
      }}
      initial={{ x: direction > 0 ? -50 : window.innerWidth + 50 }}
      animate={{
        x: direction > 0 ? window.innerWidth + 50 : -50,
      }}
      transition={{
        duration: 20 + Math.random() * 10,
        delay,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      <FaFish style={{ transform: direction > 0 ? 'scaleX(1)' : 'scaleX(-1)' }} />
    </motion.div>
  );
};

export default function OceanPage() {
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
      description: 'Navigate your health journey with steady guidance',
      icon: <GiLighthouse className="w-12 h-12" />,
      link: '/direct-primary-care',
      color: 'from-blue-500 to-cyan-600',
    },
    {
      title: 'Functional Medicine',
      description: 'Dive deep into the currents of holistic healing',
      icon: <GiCoral className="w-12 h-12" />,
      link: '/functional-medicine',
      color: 'from-teal-500 to-emerald-600',
    },
    {
      title: 'Ketamine Therapy',
      description: 'Float into tranquil waters of mental clarity',
      icon: <GiDolphin className="w-12 h-12" />,
      link: '/ketamine-therapy',
      color: 'from-indigo-500 to-purple-600',
    },
    {
      title: 'PRP Injections',
      description: 'Harness the regenerative power of ocean vitality',
      icon: <GiSeashell className="w-12 h-12" />,
      link: '/prp-injections',
      color: 'from-cyan-500 to-blue-600',
    },
    {
      title: 'Addiction Treatment',
      description: 'Chart a course to calmer shores of recovery',
      icon: <FaAnchor className="w-12 h-12" />,
      link: '/addiction-treatment',
      color: 'from-navy-500 to-slate-600',
    },
  ];

  const testimonials = [
    {
      name: 'Marina Wells',
      role: 'Sailing Instructor',
      content: 'Dr. Rosenberg\'s calming presence is like a peaceful harbor. His care has anchored my wellness journey.',
      rating: 5,
    },
    {
      name: 'Thomas Bay',
      role: 'Marine Biologist',
      content: 'The ocean-inspired atmosphere creates such a healing environment. I feel renewed after every visit.',
      rating: 5,
    },
    {
      name: 'Coral Reeves',
      role: 'Surf Shop Owner',
      content: 'Finally found healthcare that flows with my lifestyle. The therapeutic approach here is remarkable.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 via-blue-50 to-blue-100 text-gray-800 overflow-hidden">
      {/* Ocean background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-100/20 to-blue-200/30"></div>
        {[...Array(4)].map((_, i) => (
          <WaveLayer key={i} index={i} />
        ))}
        {[...Array(15)].map((_, i) => (
          <Bubble key={i} delay={i * 0.5} />
        ))}
        {[...Array(5)].map((_, i) => (
          <Fish key={i} delay={i * 3} />
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
              <GiWaveCrest className="w-10 h-10 text-blue-600" />
              <span className="text-2xl font-medium tracking-wide">Ocean Therapy</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
              <Link href="/about" className="hover:text-blue-600 transition-colors">About</Link>
              
              <div className="relative group">
                <button
                  className="flex items-center space-x-1 hover:text-blue-600 transition-colors"
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
                          className="flex items-center space-x-3 p-3 rounded-xl hover:bg-blue-50 transition-colors"
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

              <Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
              <Link href="/contact" className="hover:text-blue-600 transition-colors">Contact</Link>
              <Link 
                href={config.appointmentUrl}
                className="px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-full hover:shadow-lg transition-all"
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
                <Link href="/" className="block hover:text-blue-600">Home</Link>
                <Link href="/about" className="block hover:text-blue-600">About</Link>
                <Link href="/blog" className="block hover:text-blue-600">Blog</Link>
                <Link href="/contact" className="block hover:text-blue-600">Contact</Link>
                <div className="pt-4 space-y-2">
                  <p className="font-semibold text-gray-600">Services:</p>
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      href={service.link}
                      className="block pl-4 py-2 hover:text-blue-600"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
                <Link
                  href={config.appointmentUrl}
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-full"
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
            <BiWater className="w-24 h-24 mx-auto text-blue-600 mb-8" />
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Dive Into
              <span className="block text-transparent bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text">
                Healing Waters
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto">
              Experience the therapeutic power of ocean-inspired healthcare that flows with your natural rhythms
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href={config.appointmentUrl}
                className="px-10 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-full text-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                Sail to Wellness
              </Link>
              <Link
                href={config.membershipUrl}
                className="px-10 py-4 border-2 border-blue-600 text-blue-600 rounded-full text-lg hover:bg-blue-50 transition-all"
              >
                Explore the Depths
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
              Currents of <span className="text-blue-600">Care</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Navigate your wellness journey through our therapeutic ocean of services
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
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border border-blue-100"
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.color} text-white mb-6`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link
                  href={service.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  Dive Deeper
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
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-blue-50/50">
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
                Your <span className="text-blue-600">Harbor Guide</span>
              </h2>
              <div className="space-y-6 text-gray-700">
                <p className="text-lg">
                  Dr. Aaron Rosenberg brings the calming presence of ocean wisdom to modern healthcare, creating a sanctuary for healing and growth.
                </p>
                <p className="text-lg">
                  Like a skilled navigator, he guides patients through the tides of health challenges with expertise, compassion, and unwavering support.
                </p>
                <div className="flex items-center space-x-6 pt-4">
                  <div className="text-center">
                    <FaShip className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                    <p className="text-sm">Steady Navigation</p>
                  </div>
                  <div className="text-center">
                    <GiLighthouse className="w-12 h-12 text-cyan-600 mx-auto mb-2" />
                    <p className="text-sm">Guiding Light</p>
                  </div>
                  <div className="text-center">
                    <FaUmbrellaBeach className="w-12 h-12 text-teal-600 mx-auto mb-2" />
                    <p className="text-sm">Peaceful Shores</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-3xl transform rotate-3"></div>
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
              Waves of <span className="text-blue-600">Gratitude</span>
            </h2>
            <p className="text-xl text-gray-700">
              Stories from those who've found their sea legs in wellness
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
                <FaQuoteLeft className="text-3xl text-blue-300 mb-4" />
                <p className="text-gray-700 mb-6 italic">{testimonial.content}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <GiSeashell key={i} className="w-5 h-5 text-blue-400" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-100 via-cyan-100 to-teal-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <FaWater className="w-16 h-16 mx-auto text-blue-600 mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Set <span className="text-blue-600">Sail?</span>
            </h2>
            <p className="text-xl text-gray-700 mb-10">
              Chart your course to optimal health and wellness today
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href={config.appointmentUrl}
                className="px-10 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-full text-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                Book Your Voyage
              </Link>
              <Link
                href="/contact"
                className="px-10 py-4 border-2 border-blue-600 text-blue-600 rounded-full text-lg hover:bg-blue-50 transition-all"
              >
                Contact Harbor
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
                Your Safe <span className="text-blue-600">Harbor</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <FaMapMarkerAlt className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold">Visit Our Shore</p>
                    <p className="text-gray-600">{config.contactInfo.address}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <FaPhone className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold">Call the Lighthouse</p>
                    <p className="text-gray-600">{config.contactInfo.phone}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <FaEnvelope className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold">Message in a Bottle</p>
                    <p className="text-gray-600">{config.contactInfo.email}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8">
              <h3 className="text-2xl font-semibold mb-6">Send a Signal</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-6 py-3 bg-white/80 backdrop-blur-sm rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-full hover:shadow-lg transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <GiWaveCrest className="w-12 h-12 text-blue-400 mx-auto mb-4" />
          <p className="text-gray-400 mb-4">
            © 2024 Lotus Direct Care. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Healing flows like the ocean tide
          </p>
        </div>
      </footer>
    </div>
  );
}