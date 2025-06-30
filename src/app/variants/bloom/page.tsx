'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiPhone, FiMail, FiCalendar, FiArrowRight, FiHeart, FiShield, FiUsers, FiStar } from 'react-icons/fi';

export default function BloomVariant() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeFlower, setActiveFlower] = useState(0);

  const flowerImages = [
    '/Lotus Midjourney Flowers/lotus-homepage-new.png',
    '/Lotus Midjourney Flowers/artistic_lotus_hero.png',
    '/Lotus Midjourney Flowers/lotus_dpc_hero.png',
    '/Lotus Midjourney Flowers/lotus_services_hero.png'
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFlower((prev) => (prev + 1) % flowerImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      title: 'Direct Primary Care',
      description: 'Personalized healthcare that blooms with your needs',
      icon: FiHeart,
      color: 'from-pink-400 to-rose-600',
      image: '/Lotus Midjourney Flowers/lotus_dpc_hero.png'
    },
    {
      title: 'Functional Medicine',
      description: 'Root-cause healing for lifelong wellness',
      icon: FiShield,
      color: 'from-purple-400 to-indigo-600',
      image: '/Lotus Midjourney Flowers/lotus-functional-medicine-hero.png'
    },
    {
      title: 'Ketamine Therapy',
      description: 'Innovative treatment for mental health',
      icon: FiUsers,
      color: 'from-blue-400 to-cyan-600',
      image: '/Lotus Midjourney Flowers/lotus-ketamine-therapy-hero.png'
    },
    {
      title: 'PRP Injections',
      description: 'Natural regeneration and healing',
      icon: FiStar,
      color: 'from-green-400 to-emerald-600',
      image: '/Lotus Midjourney Flowers/lotus-prp-injections-hero.png'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      {/* Animated Background Petals */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-8 h-8 bg-pink-200 rounded-full opacity-20"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: -50,
              rotate: 0
            }}
            animate={{
              y: window.innerHeight + 100,
              x: Math.random() * window.innerWidth,
              rotate: 360
            }}
            transition={{
              duration: 15 + Math.random() * 20,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "linear"
            }}
            style={{
              clipPath: 'ellipse(50% 20% at 50% 50%)'
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <motion.nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center space-x-3">
              <motion.div 
                className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-600 rounded-full flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-white font-bold text-xl">L</span>
              </motion.div>
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Lotus Direct Care
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {['Services', 'About', 'Blog', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-pink-600 font-medium transition-colors relative group"
                  whileHover={{ y: -2 }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-purple-600 group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
              <motion.button
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Appointment
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section with Rotating Flowers */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFlower}
            className="absolute inset-0 z-0"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
            <Image
              src={flowerImages[activeFlower]}
              alt="Lotus flower"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-white/80" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Where Healthcare
            </span>
            <br />
            <span className="text-gray-800">Blooms With Care</span>
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Experience personalized medicine with Dr. Aaron Rosenberg, where each patient is nurtured like a precious flower
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.button
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-shadow inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiCalendar />
              Schedule Your Visit
            </motion.button>
            <motion.button
              className="bg-white/80 backdrop-blur text-gray-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:shadow-xl transition-all inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiPhone />
              Call Us Today
            </motion.button>
          </motion.div>
        </div>

        {/* Floating Flower Indicators */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-2">
          {flowerImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveFlower(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeFlower 
                  ? 'bg-gradient-to-r from-pink-500 to-purple-600 w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Services Section with Flower Cards */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Our Garden of Services
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each service is carefully cultivated to help you bloom into your healthiest self
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="group relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="aspect-w-16 aspect-h-12 relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-60 group-hover:opacity-70 transition-opacity`} />
                </div>
                
                <div className="p-6">
                  <div className={`inline-flex p-3 rounded-full bg-gradient-to-br ${service.color} text-white mb-4`}>
                    <service.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <motion.a
                    href="#"
                    className="inline-flex items-center gap-2 text-pink-600 hover:text-purple-600 font-semibold"
                    whileHover={{ x: 5 }}
                  >
                    Learn More <FiArrowRight />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section with Dr. Rosenberg */}
      <section className="py-20 bg-white/50 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/dr_rosenberg.jpg"
                  alt="Dr. Aaron Rosenberg"
                  width={600}
                  height={700}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-600/20 to-transparent" />
              </div>
              <motion.div
                className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-pink-400 to-purple-600 rounded-full opacity-20"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Meet Dr. Aaron Rosenberg
                </span>
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                With over a decade of experience in personalized medicine, Dr. Rosenberg brings a unique approach to healthcare that treats each patient as an individual, not just a number.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                "I believe healthcare should be as unique as each person who walks through our doors. Like a lotus flower that blooms in its own time, your health journey deserves personalized attention and care."
              </p>
              <motion.button
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-shadow inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiCalendar />
                Meet Dr. Rosenberg
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/Lotus Midjourney Flowers/lotus_contact_hero.png"
            alt="Contact background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-pink-600/90 to-purple-600/90" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to Bloom Into Better Health?
          </motion.h2>
          <motion.p
            className="text-xl text-white/90 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Join our garden of patients who have discovered the power of personalized care
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <motion.button
              className="bg-white text-pink-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-shadow inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiPhone />
              (555) 123-4567
            </motion.button>
            <motion.button
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-pink-600 transition-all inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiMail />
              Email Us
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 Lotus Direct Care. Nurturing health, one patient at a time.</p>
        </div>
      </footer>
    </div>
  );
}