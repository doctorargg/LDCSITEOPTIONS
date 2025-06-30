'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { 
  FaSeedling, 
  FaHeart, 
  FaUserMd, 
  FaStar,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaChevronRight,
  FaDna,
  FaAtom,
  FaLeaf
} from 'react-icons/fa'

export default function GenesisVariant() {
  const [growthStage, setGrowthStage] = useState(0)
  const { scrollY } = useScroll()
  const parallaxY = useTransform(scrollY, [0, 500], [0, -100])

  useEffect(() => {
    const interval = setInterval(() => {
      setGrowthStage((prev) => (prev + 1) % 5)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  // DNA Helix animation
  const DNAHelix = () => (
    <svg width="100" height="300" className="absolute opacity-10">
      <motion.path
        d="M 50 0 Q 25 50 50 100 T 50 200 T 50 300"
        stroke="url(#gradient)"
        strokeWidth="3"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.path
        d="M 50 0 Q 75 50 50 100 T 50 200 T 50 300"
        stroke="url(#gradient)"
        strokeWidth="3"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
      />
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
      </defs>
    </svg>
  )

  // Growing plant animation stages
  const plantStages = [
    { scale: 0.2, opacity: 0.3, rotate: 0 },
    { scale: 0.4, opacity: 0.5, rotate: -5 },
    { scale: 0.6, opacity: 0.7, rotate: 5 },
    { scale: 0.8, opacity: 0.9, rotate: -3 },
    { scale: 1, opacity: 1, rotate: 0 }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-emerald-50 to-white relative overflow-hidden">
      {/* Animated background cells */}
      <div className="fixed inset-0 pointer-events-none">
        {Array.from({ length: 15 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          >
            <div className="w-32 h-32 border-2 border-green-300 rounded-full" />
          </motion.div>
        ))}
      </div>

      {/* DNA Helixes */}
      <div className="fixed left-10 top-20">
        <DNAHelix />
      </div>
      <div className="fixed right-10 bottom-20">
        <DNAHelix />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-lg shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <FaSeedling className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Lotus Genesis
              </span>
            </motion.div>
            <div className="flex space-x-8">
              {['Services', 'About', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-green-600 transition-colors relative group"
                  whileHover={{ y: -2 }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full"></span>
                </motion.a>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                Begin Your Journey
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Growing Animation */}
      <motion.section 
        className="relative min-h-screen flex items-center justify-center pt-16"
        style={{ y: parallaxY }}
      >
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'radial-gradient(circle at 30% 40%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 70% 60%, rgba(52, 211, 153, 0.1) 0%, transparent 50%)',
              ],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Your Health Genesis
              </span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Witness the birth of a new approach to healthcare. 
              Where every journey begins with understanding your unique DNA.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full shadow-xl hover:shadow-2xl transition-all flex items-center justify-center space-x-2"
              >
                <FaDna className="w-5 h-5" />
                <span>Start Your Evolution</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-green-600 rounded-full shadow-xl hover:shadow-2xl transition-all border border-green-200"
              >
                Explore Genesis
              </motion.button>
            </div>

            {/* Growing progress indicators */}
            <div className="mt-12 flex space-x-4">
              {[0, 1, 2, 3, 4].map((stage) => (
                <motion.div
                  key={stage}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    stage <= growthStage ? 'bg-green-500 w-16' : 'bg-gray-300 w-8'
                  }`}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Growing lotus animation */}
            <AnimatePresence mode="wait">
              <motion.div
                key={growthStage}
                className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full blur-3xl"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{
                  scale: plantStages[growthStage].scale + 0.3,
                  opacity: plantStages[growthStage].opacity * 0.3,
                }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ duration: 1 }}
              />
            </AnimatePresence>
            <motion.div
              animate={{
                scale: plantStages[growthStage].scale,
                rotate: plantStages[growthStage].rotate,
              }}
              transition={{ duration: 1 }}
            >
              <Image
                src="/Lotus Midjourney Flowers/lotus_services_hero.png"
                alt="Growing Lotus"
                width={600}
                height={600}
                className="relative z-10 rounded-3xl shadow-2xl"
              />
            </motion.div>

            {/* Floating particles around the lotus */}
            {Array.from({ length: 8 }, (_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-green-400 rounded-full"
                style={{
                  left: `${50 + 40 * Math.cos((i * Math.PI * 2) / 8)}%`,
                  top: `${50 + 40 * Math.sin((i * Math.PI * 2) / 8)}%`,
                }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Meet Dr. Rosenberg Section */}
      <section className="py-20 relative bg-gradient-to-b from-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4">
              The Architect of Your Genesis
            </h2>
            <p className="text-xl text-gray-600">Creating new beginnings in healthcare</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 rounded-3xl blur-2xl opacity-20"></div>
              <Image
                src="/dr_rosenberg.jpg"
                alt="Dr. Aaron Rosenberg"
                width={500}
                height={600}
                className="relative z-10 rounded-3xl shadow-2xl"
              />
              {/* Growing vine decoration */}
              <motion.div
                className="absolute -bottom-10 -right-10 w-32 h-32"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, type: "spring" }}
              >
                <FaLeaf className="w-full h-full text-green-200" />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Dr. Aaron Rosenberg</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Pioneering a revolutionary approach to healthcare, Dr. Rosenberg combines 
                cutting-edge functional medicine with the timeless wisdom of personalized care. 
                Your health journey begins with understanding your unique biological blueprint.
              </p>
              <div className="space-y-4">
                {[
                  { icon: FaDna, text: 'Genetic-Based Treatment Plans', delay: 0 },
                  { icon: FaAtom, text: 'Molecular Level Healing', delay: 0.1 },
                  { icon: FaSeedling, text: 'Growth-Focused Healthcare', delay: 0.2 }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: item.delay }}
                  >
                    <motion.div 
                      className="p-2 bg-green-100 rounded-full"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <item.icon className="w-5 h-5 text-green-600" />
                    </motion.div>
                    <span className="text-gray-700">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section with Growth Animations */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4">
              Services That Evolve With You
            </h2>
            <p className="text-xl text-gray-600">Each treatment is a seed for your wellness journey</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Direct Primary Care',
                description: 'The foundation of your health genesis',
                icon: FaUserMd,
                image: '/Lotus Midjourney Flowers/lotus_dpc_hero.png',
                stage: 'Foundation',
                color: 'from-green-400 to-green-600'
              },
              {
                title: 'Functional Medicine',
                description: 'Nurturing your body\'s natural growth',
                icon: FaLeaf,
                image: '/Lotus Midjourney Flowers/lotus-functional-medicine-hero.png',
                stage: 'Growth',
                color: 'from-emerald-400 to-emerald-600'
              },
              {
                title: 'Specialized Treatments',
                description: 'Blossoming into optimal wellness',
                icon: FaHeart,
                image: '/Lotus Midjourney Flowers/lotus-ketamine-therapy-hero.png',
                stage: 'Bloom',
                color: 'from-green-500 to-emerald-500'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border border-green-100">
                  <div className="h-48 relative overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-60`}></div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full">
                      <span className="text-sm font-semibold text-green-700">{service.stage}</span>
                    </div>
                  </div>
                  <div className="p-8">
                    <motion.div 
                      className="w-16 h-16 bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center mb-4"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.7 }}
                    >
                      <service.icon className="w-8 h-8 text-green-600" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <motion.a
                      href="#"
                      className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
                      whileHover={{ x: 5 }}
                    >
                      Begin Growing <FaChevronRight className="ml-2 w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Journey Timeline */}
      <section className="py-20 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4">
              Your Genesis Timeline
            </h2>
            <p className="text-xl text-gray-600">Watch your wellness journey unfold</p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-300 to-emerald-300"></div>

            {/* Timeline items */}
            {[
              { title: 'Initial Consultation', desc: 'Plant the seed of change', icon: FaSeedling },
              { title: 'Personalized Plan', desc: 'Nurture your unique needs', icon: FaDna },
              { title: 'Active Treatment', desc: 'Watch your health grow', icon: FaLeaf },
              { title: 'Optimal Wellness', desc: 'Bloom into your best self', icon: FaStar }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
                <motion.div
                  className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full border-4 border-green-500 flex items-center justify-center"
                  whileHover={{ scale: 1.2 }}
                >
                  <item.icon className="w-6 h-6 text-green-600" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600"></div>
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundImage: [
              'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Begin Your Genesis Today
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-green-100 mb-8"
          >
            Every great journey starts with a single step. Take yours now.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-green-600 rounded-full shadow-xl hover:shadow-2xl transition-all font-semibold"
            >
              Start Your Evolution
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent text-white rounded-full border-2 border-white hover:bg-white hover:text-green-600 transition-all font-semibold"
            >
              Learn About Genesis
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4">
              Plant Your Seed
            </h2>
            <p className="text-xl text-gray-600">Let's grow together</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl shadow-xl p-8 md:p-12"
          >
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                { icon: FaPhone, label: 'Call', value: '(555) 123-4567' },
                { icon: FaEnvelope, label: 'Email', value: 'genesis@lotusdirect.care' },
                { icon: FaMapMarkerAlt, label: 'Visit', value: 'Tampa, FL' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <motion.div 
                    className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <item.icon className="w-8 h-8 text-green-600" />
                  </motion.div>
                  <h3 className="font-semibold text-gray-800 mb-1">{item.label}</h3>
                  <p className="text-gray-600">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 Lotus Direct Care. Where new beginnings bloom.</p>
        </div>
      </footer>
    </div>
  )
}