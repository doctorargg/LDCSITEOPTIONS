'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMountain, FaTree, FaHiking, FaCompass, FaSnowflake, FaEnvelope, FaPhone, FaMapMarkerAlt, FaQuoteLeft, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { GiMountainClimbing, GiPineTree, GiEagleHead, GiStonePath, GiMountainCave } from 'react-icons/gi';
import { BiWind } from 'react-icons/bi';
import { getVariantConfig } from '../../../lib/variant-utils';

const config = getVariantConfig();

// Floating mist effect
const MistLayer = ({ index }: { index: number }) => {
  return (
    <motion.div
      className="absolute inset-0 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.3 }}
      transition={{ duration: 2 }}
    >
      <motion.div
        className="absolute w-full h-64 bg-gradient-to-t from-gray-100/50 to-transparent"
        style={{ bottom: `${index * 100}px` }}
        animate={{
          x: [0, 100, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 20 + index * 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </motion.div>
  );
};

// Snowflake animation
const Snowflake = ({ delay }: { delay: number }) => {
  const x = Math.random() * 100;
  const size = Math.random() * 10 + 5;
  
  return (
    <motion.div
      className="absolute text-white/40"
      style={{
        left: `${x}%`,
        fontSize: `${size}px`,
      }}
      initial={{ y: -20 }}
      animate={{
        y: '110vh',
        x: [`0%`, `${(Math.random() - 0.5) * 30}%`],
        rotate: [0, 360],
      }}
      transition={{
        duration: 10 + Math.random() * 10,
        delay,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      <FaSnowflake />
    </motion.div>
  );
};

export default function MountainPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        setScrolled(window.scrollY > 50);
      }
    };
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const services = [
    {
      title: 'Direct Primary Care',
      description: 'Elevated healthcare with personal summit guides',
      icon: <GiMountainClimbing className="w-12 h-12" />,
      link: '/direct-primary-care',
      color: 'from-sky-600 to-blue-700',
    },
    {
      title: 'Functional Medicine',
      description: 'Navigate your health terrain with natural wisdom',
      icon: <FaCompass className="w-12 h-12" />,
      link: '/functional-medicine',
      color: 'from-emerald-600 to-teal-700',
    },
    {
      title: 'Ketamine Therapy',
      description: 'Find clarity at the peak of mental wellness',
      icon: <GiEagleHead className="w-12 h-12" />,
      link: '/ketamine-therapy',
      color: 'from-purple-600 to-indigo-700',
    },
    {
      title: 'PRP Injections',
      description: 'Natural restoration from mountain-pure sources',
      icon: <GiPineTree className="w-12 h-12" />,
      link: '/prp-injections',
      color: 'from-green-600 to-emerald-700',
    },
    {
      title: 'Addiction Treatment',
      description: 'Guided journey to recovery\'s summit',
      icon: <GiStonePath className="w-12 h-12" />,
      link: '/addiction-treatment',
      color: 'from-slate-600 to-gray-700',
    },
  ];

  const testimonials = [
    {
      name: 'David Mitchell',
      role: 'Mountain Guide',
      content: 'Dr. Rosenberg\'s approach is like finding a clear trail through difficult terrain. His guidance has been invaluable.',
      rating: 5,
    },
    {
      name: 'Jennifer Alps',
      role: 'Outdoor Enthusiast',
      content: 'The mountain retreat atmosphere makes healing feel natural. Best healthcare experience I\'ve ever had.',
      rating: 5,
    },
    {
      name: 'Robert Stone',
      role: 'Park Ranger',
      content: 'Finally found a doctor who understands the connection between nature and wellness. Highly recommend!',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-blue-50 to-gray-100 text-gray-800 overflow-hidden">
      {/* Mountain background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-200/20 to-transparent"></div>
        {[...Array(3)].map((_, i) => (
          <MistLayer key={i} index={i} />
        ))}
        {[...Array(15)].map((_, i) => (
          <Snowflake key={i} delay={i * 0.8} />
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
              <FaMountain className="w-10 h-10 text-slate-700" />
              <span className="text-2xl font-bold tracking-wide">Mountain Wellness</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="hover:text-sky-600 transition-colors font-medium">Home</Link>
              <Link href="/about" className="hover:text-sky-600 transition-colors font-medium">About</Link>
              
              <div className="relative group">
                <button
                  className="flex items-center space-x-1 hover:text-sky-600 transition-colors font-medium"
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
                      className="absolute left-0 mt-2 w-64 bg-white/95 backdrop-blur-md rounded-xl shadow-xl p-2"
                      onMouseEnter={() => setServicesDropdownOpen(true)}
                      onMouseLeave={() => setServicesDropdownOpen(false)}
                    >
                      {services.map((service, index) => (
                        <Link
                          key={index}
                          href={service.link}
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                          <div className={`text-transparent bg-gradient-to-r ${service.color} bg-clip-text`}>
                            {service.icon}
                          </div>
                          <span className="text-sm font-medium">{service.title}</span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/blog" className="hover:text-sky-600 transition-colors font-medium">Blog</Link>
              <Link href="/contact" className="hover:text-sky-600 transition-colors font-medium">Contact</Link>
              <Link 
                href={config.external.booking}
                className="px-6 py-2 bg-gradient-to-r from-sky-600 to-blue-700 text-white rounded-lg hover:shadow-lg transition-all font-semibold"
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
                <Link href="/" className="block font-medium hover:text-sky-600">Home</Link>
                <Link href="/about" className="block font-medium hover:text-sky-600">About</Link>
                <Link href="/blog" className="block font-medium hover:text-sky-600">Blog</Link>
                <Link href="/contact" className="block font-medium hover:text-sky-600">Contact</Link>
                <div className="pt-4 space-y-2">
                  <p className="font-bold text-gray-600">Services:</p>
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      href={service.link}
                      className="block pl-4 py-2 hover:text-sky-600"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
                <Link
                  href={config.external.booking}
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-sky-600 to-blue-700 text-white rounded-lg font-semibold"
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
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-100/30 to-gray-200/50"></div>
        <div className="max-w-6xl mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <GiMountainCave className="w-24 h-24 mx-auto text-slate-700 mb-8" />
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Reach New
              <span className="block text-transparent bg-gradient-to-r from-sky-600 to-blue-700 bg-clip-text">
                Heights of Health
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-12 font-medium max-w-3xl mx-auto">
              Elevate your wellness journey with mountain-inspired healthcare that takes you to the summit of vitality
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href={config.external.booking}
                className="px-10 py-4 bg-gradient-to-r from-sky-600 to-blue-700 text-white rounded-lg text-lg hover:shadow-xl transition-all transform hover:scale-105 font-semibold"
              >
                Start Your Ascent
              </Link>
              <Link
                href={config.external.membership}
                className="px-10 py-4 border-2 border-slate-700 text-slate-700 rounded-lg text-lg hover:bg-slate-50 transition-all font-semibold"
              >
                View Trail Map
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 relative bg-white/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Your <span className="text-sky-600">Wellness Trails</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
              Choose your path to peak health with our specialized mountain medicine services
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
                className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-200"
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.color} text-white mb-6`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link
                  href={service.link}
                  className="inline-flex items-center text-sky-600 hover:text-sky-700 font-semibold"
                >
                  Explore Trail
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
      <section className="py-20 px-4 bg-gradient-to-b from-white/50 to-blue-50/50">
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
                Your <span className="text-sky-600">Mountain Guide</span>
              </h2>
              <div className="space-y-6 text-gray-700">
                <p className="text-lg">
                  Dr. Aaron Rosenberg approaches healthcare like an experienced mountain guide - with patience, expertise, and a deep respect for the journey.
                </p>
                <p className="text-lg">
                  His practice combines altitude-tested resilience with compassionate care, helping patients navigate their health challenges with confidence.
                </p>
                <div className="flex items-center space-x-6 pt-4">
                  <div className="text-center">
                    <FaHiking className="w-12 h-12 text-sky-600 mx-auto mb-2" />
                    <p className="text-sm font-semibold">Personal Guide</p>
                  </div>
                  <div className="text-center">
                    <FaCompass className="w-12 h-12 text-emerald-600 mx-auto mb-2" />
                    <p className="text-sm font-semibold">Clear Direction</p>
                  </div>
                  <div className="text-center">
                    <FaMountain className="w-12 h-12 text-slate-600 mx-auto mb-2" />
                    <p className="text-sm font-semibold">Peak Health</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-sky-200 to-blue-200 rounded-xl transform rotate-3"></div>
              <Image
                src="/images/dr-rosenberg.jpg"
                alt="Dr. Aaron Rosenberg"
                width={500}
                height={600}
                className="relative rounded-xl shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Summit <span className="text-sky-600">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-700 font-medium">
              Hear from those who've reached their health peaks
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
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-200"
              >
                <FaQuoteLeft className="text-3xl text-sky-300 mb-4" />
                <p className="text-gray-700 mb-6 italic">{testimonial.content}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaMountain key={i} className="w-5 h-5 text-sky-500" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-100 via-sky-100 to-blue-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <BiWind className="w-16 h-16 mx-auto text-sky-600 mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Begin Your <span className="text-sky-600">Ascent?</span>
            </h2>
            <p className="text-xl text-gray-700 mb-10 font-medium">
              Take the first step towards your wellness summit today
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href={config.external.booking}
                className="px-10 py-4 bg-gradient-to-r from-sky-600 to-blue-700 text-white rounded-lg text-lg hover:shadow-xl transition-all transform hover:scale-105 font-semibold"
              >
                Schedule Base Camp Visit
              </Link>
              <Link
                href="/contact"
                className="px-10 py-4 border-2 border-slate-700 text-slate-700 rounded-lg text-lg hover:bg-slate-50 transition-all font-semibold"
              >
                Contact Our Guides
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-white">
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
                Find Your <span className="text-sky-600">Base Camp</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <FaMapMarkerAlt className="w-6 h-6 text-sky-600 mt-1" />
                  <div>
                    <p className="font-bold">Visit Our Lodge</p>
                    <p className="text-gray-600">{config.contact.address}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <FaPhone className="w-6 h-6 text-sky-600 mt-1" />
                  <div>
                    <p className="font-bold">Call Base Camp</p>
                    <p className="text-gray-600">{config.contact.phone}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <FaEnvelope className="w-6 h-6 text-sky-600 mt-1" />
                  <div>
                    <p className="font-bold">Send a Message</p>
                    <p className="text-gray-600">{config.contact.email}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Plan Your Journey</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-6 py-3 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-6 py-3 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-6 py-3 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-gradient-to-r from-sky-600 to-blue-700 text-white rounded-lg hover:shadow-lg transition-all font-semibold"
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
          <FaMountain className="w-12 h-12 text-sky-400 mx-auto mb-4" />
          <p className="text-gray-400 mb-4">
            © 2024 Lotus Direct Care. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Elevating healthcare to new heights
          </p>
        </div>
      </footer>
    </div>
  );
}