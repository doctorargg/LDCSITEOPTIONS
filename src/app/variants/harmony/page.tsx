'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiPhone, FiMail, FiCalendar, FiArrowRight, FiHeart, FiShield, FiUsers, FiStar, FiCircle } from 'react-icons/fi';

export default function HarmonyVariant() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('mind');
  const [breathCount, setBreathCount] = useState(0);
  const [isBreathing, setIsBreathing] = useState(false);

  useEffect(() => {
    if (isBreathing) {
      const interval = setInterval(() => {
        setBreathCount((prev) => (prev + 1) % 8);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isBreathing]);

  const wellnessAspects = [
    {
      id: 'mind',
      title: 'Mind',
      description: 'Mental clarity and emotional balance',
      color: 'from-purple-400 to-indigo-600',
      image: '/Lotus Midjourney Flowers/lotus-ketamine-therapy-hero.png',
      practices: ['Meditation', 'Mindfulness', 'Therapy']
    },
    {
      id: 'body',
      title: 'Body',
      description: 'Physical vitality and strength',
      color: 'from-green-400 to-emerald-600',
      image: '/Lotus Midjourney Flowers/lotus-prp-injections-hero.png',
      practices: ['Nutrition', 'Movement', 'Recovery']
    },
    {
      id: 'spirit',
      title: 'Spirit',
      description: 'Purpose and connection',
      color: 'from-pink-400 to-rose-600',
      image: '/Lotus Midjourney Flowers/lotus-functional-medicine-hero.png',
      practices: ['Community', 'Gratitude', 'Growth']
    }
  ];

  const activeAspect = wellnessAspects.find(a => a.id === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-rose-50">
      {/* Animated Mandala Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute rounded-full border-2 ${
                i === 0 ? 'border-purple-200' : i === 1 ? 'border-green-200' : 'border-pink-200'
              }`}
              style={{
                width: `${(i + 1) * 300}px`,
                height: `${(i + 1) * 300}px`,
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)'
              }}
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                delay: i * 0.5
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-lg shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center space-x-3">
              <motion.div 
                className="relative w-14 h-14"
                whileHover={{ scale: 1.1, rotate: 15 }}
              >
                <Image
                  src="/images/LOGOTRANSPARENTFLOWERONLY1.png"
                  alt="Lotus"
                  fill
                  className="object-contain"
                />
              </motion.div>
              <div>
                <span className="text-2xl font-light text-gray-800">Lotus Direct Care</span>
                <p className="text-xs text-gray-600">Balance • Wellness • Harmony</p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {['Services', 'Philosophy', 'Journey', 'Community'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-purple-600 font-medium transition-colors relative"
                  whileHover={{ y: -2 }}
                >
                  {item}
                </motion.a>
              ))}
              <motion.button
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-shadow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Journey
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
      </nav>

      {/* Hero Section with Balance Theme */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Lotus Midjourney Flowers/lotus-homepage-new.png"
            alt="Harmony lotus"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/70 to-white/90" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-light mb-6 text-gray-800">
              Find Your
              <span className="block font-normal bg-gradient-to-r from-purple-600 via-pink-600 to-green-600 bg-clip-text text-transparent">
                Perfect Balance
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Integrative healthcare that harmonizes mind, body, and spirit for complete wellness
            </p>
          </motion.div>

          {/* Interactive Wellness Wheel */}
          <motion.div
            className="relative w-80 h-80 mx-auto mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <svg className="w-full h-full" viewBox="0 0 200 200">
              {wellnessAspects.map((aspect, index) => {
                const angle = (index * 120 - 90) * (Math.PI / 180);
                const x = 100 + 70 * Math.cos(angle);
                const y = 100 + 70 * Math.sin(angle);
                
                return (
                  <g key={aspect.id}>
                    <motion.circle
                      cx={x}
                      cy={y}
                      r="40"
                      className={`fill-current ${
                        activeTab === aspect.id ? 'text-purple-500' : 'text-gray-300'
                      } cursor-pointer`}
                      whileHover={{ scale: 1.1 }}
                      onClick={() => setActiveTab(aspect.id)}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    />
                    <text
                      x={x}
                      y={y}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className="fill-white font-medium pointer-events-none"
                    >
                      {aspect.title}
                    </text>
                  </g>
                );
              })}
              <motion.circle
                cx="100"
                cy="100"
                r="30"
                className="fill-current text-amber-400"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity
                }}
              />
            </svg>
          </motion.div>

          {/* Active Aspect Display */}
          <AnimatePresence mode="wait">
            {activeAspect && (
              <motion.div
                key={activeTab}
                className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-xl max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className={`text-2xl font-semibold mb-4 bg-gradient-to-r ${activeAspect.color} bg-clip-text text-transparent`}>
                  {activeAspect.title}: {activeAspect.description}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {activeAspect.practices.map((practice) => (
                    <span
                      key={practice}
                      className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm"
                    >
                      {practice}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-light mb-4 text-gray-800">
              Harmonious Healthcare Services
            </h2>
            <p className="text-xl text-gray-600">
              Each service designed to restore and maintain your natural balance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Integrative Primary Care',
                description: 'Whole-person healthcare that addresses root causes',
                image: '/Lotus Midjourney Flowers/lotus_dpc_hero.png',
                features: ['Comprehensive wellness exams', 'Preventive care', 'Chronic disease management']
              },
              {
                title: 'Mind-Body Medicine',
                description: 'Therapies that connect mental and physical health',
                image: '/Lotus Midjourney Flowers/lotus-ketamine-therapy-hero.png',
                features: ['Ketamine therapy', 'Meditation guidance', 'Stress management']
              },
              {
                title: 'Regenerative Wellness',
                description: 'Natural healing and rejuvenation treatments',
                image: '/Lotus Midjourney Flowers/lotus-prp-injections-hero.png',
                features: ['PRP therapy', 'Bioidentical hormones', 'Anti-aging protocols']
              },
              {
                title: 'Functional Medicine',
                description: 'Personalized approaches to optimal health',
                image: '/Lotus Midjourney Flowers/lotus-functional-medicine-hero.png',
                features: ['Advanced testing', 'Nutritional therapy', 'Detoxification']
              },
              {
                title: 'Addiction Recovery',
                description: 'Compassionate support for lasting recovery',
                image: '/Lotus Midjourney Flowers/lotus-addiction-treatment-hero.png',
                features: ['Suboxone treatment', 'Counseling support', 'Holistic recovery']
              },
              {
                title: 'Wellness Coaching',
                description: 'Guidance for sustainable lifestyle changes',
                image: '/Lotus Midjourney Flowers/lotus_blog_hero.png',
                features: ['Personal health plans', 'Lifestyle optimization', 'Accountability support']
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-600/30 to-transparent" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-600">
                        <FiCircle className="mr-2 text-purple-500" size={8} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <motion.a
                    href="#"
                    className="inline-flex items-center gap-2 text-purple-600 hover:text-pink-600 font-medium"
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

      {/* Interactive Breathing Exercise */}
      <section className="py-20 bg-gradient-to-br from-purple-100 to-pink-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-light mb-8 text-gray-800">
            Take a Moment to Breathe
          </h2>
          
          <motion.div
            className="relative w-48 h-48 mx-auto mb-8"
            animate={{
              scale: isBreathing ? [1, 1.3, 1] : 1
            }}
            transition={{
              duration: 4,
              repeat: isBreathing ? Infinity : 0,
              ease: "easeInOut"
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-30" />
            <div className="absolute inset-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-50" />
            <div className="absolute inset-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white">
              <span className="text-3xl font-light">
                {isBreathing ? breathCount : '∞'}
              </span>
            </div>
          </motion.div>
          
          <motion.button
            className={`px-8 py-4 rounded-full font-medium transition-all ${
              isBreathing 
                ? 'bg-gray-500 text-white' 
                : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg'
            }`}
            onClick={() => setIsBreathing(!isBreathing)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isBreathing ? 'Stop' : 'Start Breathing Exercise'}
          </motion.button>
          
          {isBreathing && (
            <motion.p
              className="mt-4 text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {breathCount < 4 ? 'Breathe in...' : 'Breathe out...'}
            </motion.p>
          )}
        </div>
      </section>

      {/* Meet Dr. Rosenberg */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/dr_rosenberg.jpg"
                  alt="Dr. Aaron Rosenberg"
                  width={600}
                  height={700}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent" />
              </div>
              <motion.div
                className="absolute -bottom-6 -right-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-6 text-white shadow-xl"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-xl font-semibold mb-2">15+ Years</h3>
                <p className="text-sm">Integrative Medicine Experience</p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-light mb-6 text-gray-800">
                Dr. Aaron Rosenberg
                <span className="block text-2xl font-normal bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Your Partner in Balanced Health
                </span>
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                "I believe in treating the whole person, not just symptoms. By harmonizing conventional medicine with holistic approaches, we create a path to lasting wellness that honors your unique needs and goals."
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <FiHeart className="text-purple-600" />
                  </div>
                  <p className="text-gray-700">Board-certified in Family Medicine</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                    <FiShield className="text-pink-600" />
                  </div>
                  <p className="text-gray-700">Fellowship in Integrative Medicine</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <FiStar className="text-green-600" />
                  </div>
                  <p className="text-gray-700">Certified in Functional Medicine</p>
                </div>
              </div>
              <motion.button
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-medium hover:shadow-xl transition-shadow inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiCalendar />
                Book a Consultation
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
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/90 to-pink-600/90" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-light text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Begin Your Journey to Balance
          </motion.h2>
          <motion.p
            className="text-xl text-white/90 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Experience healthcare that nurtures every aspect of your wellbeing
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <motion.button
              className="bg-white text-purple-600 px-8 py-4 rounded-full font-medium hover:shadow-xl transition-shadow inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiPhone />
              (555) 123-4567
            </motion.button>
            <motion.button
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-purple-600 transition-all inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiMail />
              hello@lotusdirectcare.com
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 Lotus Direct Care. Harmonizing health, nurturing wellness.</p>
        </div>
      </footer>
    </div>
  );
}