'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSun, FaSpa, FaHotjar, FaMortarPestle, FaGem, FaEnvelope, FaPhone, FaMapMarkerAlt, FaQuoteLeft, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { GiCactus, GiDesert, GiOasis, GiSandsOfTime, GiFlowerPot } from 'react-icons/gi';
import { BiSpa } from 'react-icons/bi';
import { getVariantConfig } from '../../../lib/variant-utils';

const config = getVariantConfig();

// Sand particle animation
const SandParticle = ({ delay }: { delay: number }) => {
  const x = Math.random() * 100;
  const size = Math.random() * 3 + 1;
  
  return (
    <motion.div
      className="absolute rounded-full bg-amber-200/20"
      style={{
        width: size,
        height: size,
        left: `${x}%`,
      }}
      initial={{ y: -20, opacity: 0 }}
      animate={{
        y: window.innerHeight + 50,
        x: [0, Math.random() * 100 - 50],
        opacity: [0, 0.5, 0],
      }}
      transition={{
        duration: 20 + Math.random() * 10,
        delay,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  );
};

// Mirage effect
const MirageWave = ({ index }: { index: number }) => {
  return (
    <motion.div
      className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
      style={{ zIndex: index }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.15 }}
      transition={{ duration: 2 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-orange-100/30 to-transparent"
        animate={{
          scaleY: [1, 1.2, 1],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8 + index * 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </motion.div>
  );
};

// Cactus flower bloom animation
const CactusFlower = ({ delay }: { delay: number }) => {
  const flowers = ['🌸', '🌺', '🌵'];
  const flower = flowers[Math.floor(Math.random() * flowers.length)];
  
  return (
    <motion.div
      className="absolute text-2xl pointer-events-none"
      style={{
        left: `${Math.random() * 80 + 10}%`,
        bottom: `${Math.random() * 200 + 100}px`,
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: [0, 1.2, 1],
        opacity: [0, 1, 1],
      }}
      transition={{
        duration: 3,
        delay,
        repeat: Infinity,
        repeatDelay: 15,
        ease: 'easeOut',
      }}
    >
      {flower}
    </motion.div>
  );
};

export default function DesertBloomPage() {
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
      description: 'Oasis of personalized healthcare in life\'s desert',
      icon: <GiOasis className="w-12 h-12" />,
      link: '/direct-primary-care',
      color: 'from-amber-500 to-orange-600',
    },
    {
      title: 'Functional Medicine',
      description: 'Ancient desert wisdom meets modern healing arts',
      icon: <GiSandsOfTime className="w-12 h-12" />,
      link: '/functional-medicine',
      color: 'from-rose-500 to-pink-600',
    },
    {
      title: 'Ketamine Therapy',
      description: 'Transform consciousness like desert blooms after rain',
      icon: <GiFlowerPot className="w-12 h-12" />,
      link: '/ketamine-therapy',
      color: 'from-purple-500 to-pink-600',
    },
    {
      title: 'PRP Injections',
      description: 'Regenerate with the resilience of desert life',
      icon: <GiCactus className="w-12 h-12" />,
      link: '/prp-injections',
      color: 'from-teal-500 to-emerald-600',
    },
    {
      title: 'Addiction Treatment',
      description: 'Find renewal in the clarity of desert healing',
      icon: <GiDesert className="w-12 h-12" />,
      link: '/addiction-treatment',
      color: 'from-indigo-500 to-purple-600',
    },
  ];

  const testimonials = [
    {
      name: 'Sahara Rose',
      role: 'Wellness Coach',
      content: 'Dr. Rosenberg\'s practice is like finding an oasis. His spa-like approach to medicine is truly transformative.',
      rating: 5,
    },
    {
      name: 'Canyon Wells',
      role: 'Spa Director',
      content: 'The desert bloom aesthetic creates such a healing sanctuary. Every visit feels like a luxurious wellness retreat.',
      rating: 5,
    },
    {
      name: 'Mesa Stone',
      role: 'Yoga Therapist',
      content: 'Finally found healthcare that honors the desert\'s wisdom of resilience and renewal. Exceptional care!',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-rose-50 to-orange-50 text-gray-800 overflow-hidden">
      {/* Desert background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-100/10 to-orange-200/20"></div>
        {[...Array(3)].map((_, i) => (
          <MirageWave key={i} index={i} />
        ))}
        {[...Array(20)].map((_, i) => (
          <SandParticle key={i} delay={i * 0.5} />
        ))}
        {[...Array(6)].map((_, i) => (
          <CactusFlower key={i} delay={i * 4} />
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
              <GiCactus className="w-10 h-10 text-amber-600" />
              <span className="text-2xl font-light tracking-wide">Desert Bloom Spa</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="hover:text-amber-600 transition-colors">Home</Link>
              <Link href="/about" className="hover:text-amber-600 transition-colors">About</Link>
              
              <div className="relative group">
                <button
                  className="flex items-center space-x-1 hover:text-amber-600 transition-colors"
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
                          className="flex items-center space-x-3 p-3 rounded-xl hover:bg-amber-50 transition-colors"
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

              <Link href="/blog" className="hover:text-amber-600 transition-colors">Blog</Link>
              <Link href="/contact" className="hover:text-amber-600 transition-colors">Contact</Link>
              <Link 
                href={config.external.booking}
                className="px-6 py-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-full hover:shadow-lg transition-all"
              >
                Book Wellness Session
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
                <Link href="/" className="block hover:text-amber-600">Home</Link>
                <Link href="/about" className="block hover:text-amber-600">About</Link>
                <Link href="/blog" className="block hover:text-amber-600">Blog</Link>
                <Link href="/contact" className="block hover:text-amber-600">Contact</Link>
                <div className="pt-4 space-y-2">
                  <p className="font-semibold text-gray-600">Services:</p>
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      href={service.link}
                      className="block pl-4 py-2 hover:text-amber-600"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
                <Link
                  href={config.external.booking}
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-full"
                >
                  Book Wellness Session
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
            <BiSpa className="w-24 h-24 mx-auto text-amber-600 mb-8" />
            <h1 className="text-5xl md:text-7xl font-light mb-6">
              Where Desert Meets
              <span className="block text-transparent bg-gradient-to-r from-amber-500 to-rose-600 bg-clip-text">
                Luxury Wellness
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-12 font-light max-w-3xl mx-auto">
              Experience the transformative power of desert-inspired healing in our luxurious wellness sanctuary
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href={config.external.booking}
                className="px-10 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-full text-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                Begin Your Bloom
              </Link>
              <Link
                href={config.external.membership}
                className="px-10 py-4 border-2 border-amber-600 text-amber-600 rounded-full text-lg hover:bg-amber-50 transition-all"
              >
                Spa Memberships
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
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Wellness <span className="text-amber-600">Rituals</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Discover healing treatments inspired by desert resilience and spa luxury
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
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border border-amber-100"
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.color} text-white mb-6`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link
                  href={service.link}
                  className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium"
                >
                  Explore Treatment
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
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-rose-50/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-light mb-6">
                Your <span className="text-amber-600">Wellness Artisan</span>
              </h2>
              <div className="space-y-6 text-gray-700">
                <p className="text-lg">
                  Dr. Aaron Rosenberg transforms healthcare into a luxurious wellness experience, blending desert wisdom with spa sophistication.
                </p>
                <p className="text-lg">
                  Like a master spa therapist, he curates personalized healing journeys that nurture body, mind, and spirit in equal measure.
                </p>
                <div className="flex items-center space-x-6 pt-4">
                  <div className="text-center">
                    <FaSpa className="w-12 h-12 text-amber-600 mx-auto mb-2" />
                    <p className="text-sm">Spa Wellness</p>
                  </div>
                  <div className="text-center">
                    <FaMortarPestle className="w-12 h-12 text-rose-600 mx-auto mb-2" />
                    <p className="text-sm">Healing Arts</p>
                  </div>
                  <div className="text-center">
                    <FaGem className="w-12 h-12 text-purple-600 mx-auto mb-2" />
                    <p className="text-sm">Luxury Care</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-200 to-rose-200 rounded-3xl transform rotate-3"></div>
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
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Desert <span className="text-amber-600">Testimonials</span>
            </h2>
            <p className="text-xl text-gray-700">
              Stories of transformation from our wellness oasis
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
                <FaQuoteLeft className="text-3xl text-amber-300 mb-4" />
                <p className="text-gray-700 mb-6 italic">{testimonial.content}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaSun key={i} className="w-5 h-5 text-amber-400" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-amber-100 via-rose-100 to-orange-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <FaHotjar className="w-16 h-16 mx-auto text-amber-600 mb-6" />
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Ready to <span className="text-amber-600">Bloom?</span>
            </h2>
            <p className="text-xl text-gray-700 mb-10">
              Transform your wellness journey in our desert sanctuary
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href={config.external.booking}
                className="px-10 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-full text-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                Book Spa Session
              </Link>
              <Link
                href="/contact"
                className="px-10 py-4 border-2 border-amber-600 text-amber-600 rounded-full text-lg hover:bg-amber-50 transition-all"
              >
                Visit Our Oasis
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
              <h2 className="text-4xl font-light mb-8">
                Visit Your <span className="text-amber-600">Sanctuary</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <FaMapMarkerAlt className="w-6 h-6 text-amber-600 mt-1" />
                  <div>
                    <p className="font-semibold">Desert Oasis Location</p>
                    <p className="text-gray-600">{config.contact.address}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <FaPhone className="w-6 h-6 text-amber-600 mt-1" />
                  <div>
                    <p className="font-semibold">Spa Concierge</p>
                    <p className="text-gray-600">{config.contact.phone}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <FaEnvelope className="w-6 h-6 text-amber-600 mt-1" />
                  <div>
                    <p className="font-semibold">Wellness Inquiries</p>
                    <p className="text-gray-600">{config.contact.email}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-rose-50 rounded-3xl p-8">
              <h3 className="text-2xl font-semibold mb-6">Reserve Your Experience</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
                <textarea
                  placeholder="Your Wellness Goals"
                  rows={4}
                  className="w-full px-6 py-3 bg-white/80 backdrop-blur-sm rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-full hover:shadow-lg transition-all"
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
          <GiCactus className="w-12 h-12 text-amber-400 mx-auto mb-4" />
          <p className="text-gray-400 mb-4">
            © 2024 Lotus Direct Care. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Where wellness blooms in the desert
          </p>
        </div>
      </footer>
    </div>
  );
}