'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLeaf, FaYinYang, FaBrain, FaMedkit, FaHeart, FaEnvelope, FaPhone, FaMapMarkerAlt, FaQuoteLeft, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { GiLotus, GiBamboo, GiMeditation, GiStoneStack } from 'react-icons/gi';
import { getVariantConfig } from '../../../lib/variant-utils';

const config = getVariantConfig();

// Zen garden particles
const ZenParticle = ({ delay }: { delay: number }) => {
  const x = Math.random() * 100;
  const duration = 15 + Math.random() * 10;
  
  return (
    <motion.div
      className="absolute w-1 h-1 bg-pink-300/30 rounded-full"
      initial={{ x: `${x}vw`, y: -20 }}
      animate={{
        y: '110vh',
        x: [`${x}vw`, `${x + (Math.random() - 0.5) * 20}vw`],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  );
};

// Zen circle animation
const ZenCircle = () => {
  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <motion.div
        className="w-96 h-96 border border-gray-300/20 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      <motion.div
        className="absolute w-64 h-64 border border-gray-300/10 rounded-full"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: -360,
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </motion.div>
  );
};

export default function ZenWellnessPage() {
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
      description: 'Mindful healthcare with unlimited access to your physician',
      icon: <GiLotus className="w-12 h-12" />,
      link: '/direct-primary-care',
      color: 'from-rose-400 to-pink-500',
    },
    {
      title: 'Functional Medicine',
      description: 'Harmonize body systems through natural healing approaches',
      icon: <FaYinYang className="w-12 h-12" />,
      link: '/functional-medicine',
      color: 'from-purple-400 to-indigo-500',
    },
    {
      title: 'Ketamine Therapy',
      description: 'Inner peace through transformative mental health treatment',
      icon: <GiMeditation className="w-12 h-12" />,
      link: '/ketamine-therapy',
      color: 'from-blue-400 to-cyan-500',
    },
    {
      title: 'PRP Injections',
      description: 'Natural regeneration using your body\'s healing wisdom',
      icon: <GiBamboo className="w-12 h-12" />,
      link: '/prp-injections',
      color: 'from-green-400 to-emerald-500',
    },
    {
      title: 'Addiction Treatment',
      description: 'Compassionate path to recovery and renewed wellness',
      icon: <GiStoneStack className="w-12 h-12" />,
      link: '/addiction-treatment',
      color: 'from-amber-400 to-orange-500',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Wellness Enthusiast',
      content: 'Dr. Rosenberg brings a zen-like calm to healthcare. His mindful approach has transformed my wellness journey.',
      rating: 5,
    },
    {
      name: 'Michael Wong',
      role: 'Meditation Teacher',
      content: 'Finally found a doctor who understands the mind-body connection. The holistic care here is exceptional.',
      rating: 5,
    },
    {
      name: 'Emma Thompson',
      role: 'Yoga Instructor',
      content: 'The peaceful environment and thoughtful care make every visit a healing experience. Highly recommended!',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-rose-50 text-gray-800 overflow-hidden">
      {/* Zen background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <ZenCircle />
        {[...Array(20)].map((_, i) => (
          <ZenParticle key={i} delay={i * 0.5} />
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
              <FaLeaf className="w-10 h-10 text-pink-500" />
              <span className="text-2xl font-light tracking-wide">Lotus Zen</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="hover:text-pink-500 transition-colors">Home</Link>
              <Link href="/about" className="hover:text-pink-500 transition-colors">About</Link>
              
              <div className="relative group">
                <button
                  className="flex items-center space-x-1 hover:text-pink-500 transition-colors"
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
                          className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-100 transition-colors"
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

              <Link href="/blog" className="hover:text-pink-500 transition-colors">Blog</Link>
              <Link href="/contact" className="hover:text-pink-500 transition-colors">Contact</Link>
              <Link 
                href={config.external.booking}
                className="px-6 py-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full hover:shadow-lg transition-all"
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
                <Link href="/" className="block hover:text-pink-500">Home</Link>
                <Link href="/about" className="block hover:text-pink-500">About</Link>
                <Link href="/blog" className="block hover:text-pink-500">Blog</Link>
                <Link href="/contact" className="block hover:text-pink-500">Contact</Link>
                <div className="pt-4 space-y-2">
                  <p className="font-semibold text-gray-600">Services:</p>
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      href={service.link}
                      className="block pl-4 py-2 hover:text-pink-500"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
                <Link
                  href={config.external.booking}
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full"
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
            <GiLotus className="w-24 h-24 mx-auto text-pink-500 mb-8" />
            <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-wide">
              Find Your Inner
              <span className="block text-transparent bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text">
                Balance & Wellness
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 font-light max-w-3xl mx-auto">
              Where Eastern wisdom meets Western medicine for a harmonious approach to your health journey
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href={config.external.booking}
                className="px-10 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full text-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                Begin Your Journey
              </Link>
              <Link
                href={config.external.membership}
                className="px-10 py-4 border-2 border-pink-500 text-pink-500 rounded-full text-lg hover:bg-pink-50 transition-all"
              >
                Explore Membership
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
              Pathways to <span className="text-pink-500">Wellness</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each service is a stepping stone on your journey to optimal health and inner peace
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
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all"
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.color} text-white mb-6`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link
                  href={service.link}
                  className="inline-flex items-center text-pink-500 hover:text-pink-600 font-medium"
                >
                  Learn More
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
      <section className="py-20 px-4 bg-gradient-to-b from-white to-pink-50">
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
                Meet Your <span className="text-pink-500">Wellness Guide</span>
              </h2>
              <div className="space-y-6 text-gray-600">
                <p className="text-lg">
                  Dr. Aaron Rosenberg brings a unique blend of traditional medical expertise and holistic wellness philosophy to every patient interaction.
                </p>
                <p className="text-lg">
                  With years of experience in Direct Primary Care and functional medicine, he believes in treating the whole person - mind, body, and spirit.
                </p>
                <div className="flex items-center space-x-6 pt-4">
                  <div className="text-center">
                    <GiMeditation className="w-12 h-12 text-pink-500 mx-auto mb-2" />
                    <p className="text-sm">Mindful Care</p>
                  </div>
                  <div className="text-center">
                    <FaYinYang className="w-12 h-12 text-purple-500 mx-auto mb-2" />
                    <p className="text-sm">Balanced Approach</p>
                  </div>
                  <div className="text-center">
                    <GiLotus className="w-12 h-12 text-indigo-500 mx-auto mb-2" />
                    <p className="text-sm">Natural Healing</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-200 to-purple-200 rounded-3xl transform rotate-6"></div>
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
              Stories of <span className="text-pink-500">Transformation</span>
            </h2>
            <p className="text-xl text-gray-600">
              Hear from those who have found their path to wellness
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
                <FaQuoteLeft className="text-3xl text-pink-300 mb-4" />
                <p className="text-gray-700 mb-6 italic">{testimonial.content}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaLeaf key={i} className="w-5 h-5 text-pink-400" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <GiStoneStack className="w-16 h-16 mx-auto text-purple-500 mb-6" />
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Begin Your Journey to <span className="text-pink-500">Inner Peace</span>
            </h2>
            <p className="text-xl text-gray-700 mb-10">
              Take the first step towards balanced health and mindful wellness
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href={config.external.booking}
                className="px-10 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full text-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                Schedule Consultation
              </Link>
              <Link
                href="/contact"
                className="px-10 py-4 border-2 border-purple-500 text-purple-500 rounded-full text-lg hover:bg-purple-50 transition-all"
              >
                Contact Us
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
              <h2 className="text-4xl font-light mb-8">
                Find Your <span className="text-pink-500">Center</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <FaMapMarkerAlt className="w-6 h-6 text-pink-500 mt-1" />
                  <div>
                    <p className="font-semibold">Visit Our Sanctuary</p>
                    <p className="text-gray-600">{config.contact.address}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <FaPhone className="w-6 h-6 text-pink-500 mt-1" />
                  <div>
                    <p className="font-semibold">Call Us</p>
                    <p className="text-gray-600">{config.contact.phone}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <FaEnvelope className="w-6 h-6 text-pink-500 mt-1" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-600">{config.contact.email}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl p-8">
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-6 py-3 bg-white/80 backdrop-blur-sm rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-400 resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full hover:shadow-lg transition-all"
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
          <FaLeaf className="w-12 h-12 text-pink-400 mx-auto mb-4" />
          <p className="text-gray-400 mb-4">
            © 2024 Lotus Direct Care. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Nurturing wellness through mindful medicine
          </p>
        </div>
      </footer>
    </div>
  );
}