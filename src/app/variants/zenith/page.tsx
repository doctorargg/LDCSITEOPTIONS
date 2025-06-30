'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { 
  FaMountain, 
  FaHeart, 
  FaUserMd, 
  FaStar,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaChevronRight,
  FaFlag,
  FaTrophy,
  FaChartLine
} from 'react-icons/fa'

export default function ZenithVariant() {
  const [altitude, setAltitude] = useState(0)
  const { scrollY } = useScroll()
  const peakY = useTransform(scrollY, [0, 1000], [0, -200])
  
  useEffect(() => {
    const interval = setInterval(() => {
      setAltitude(prev => Math.min(prev + 1, 100))
    }, 100)
    return () => clearInterval(interval)
  }, [])

  // Cloud layer component
  const CloudLayer = ({ opacity, speed, yPos }: { opacity: number; speed: number; yPos: string }) => (
    <motion.div
      className="absolute w-full h-32"
      style={{ top: yPos, opacity }}
      animate={{
        x: ['-100%', '100%'],
      }}
      transition={{
        duration: speed,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      <div className="w-96 h-32 bg-white rounded-full blur-2xl" />
    </motion.div>
  )

  // Achievement stars
  const AchievementStar = ({ delay, position }: { delay: number; position: { x: number; y: number } }) => (
    <motion.div
      className="absolute"
      style={{ left: position.x, top: position.y }}
      initial={{ scale: 0, rotate: 0 }}
      animate={{
        scale: [0, 1, 1],
        rotate: [0, 180, 360],
        opacity: [0, 1, 0.7],
      }}
      transition={{
        duration: 3,
        delay,
        repeat: Infinity,
        repeatDelay: 5,
      }}
    >
      <FaStar className="w-6 h-6 text-yellow-400" />
    </motion.div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-700 to-sky-500 relative overflow-hidden">
      {/* Sky gradient layers */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-sky-300 to-transparent opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900 to-transparent opacity-40" />
      </div>

      {/* Cloud layers */}
      <CloudLayer opacity={0.3} speed={60} yPos="20%" />
      <CloudLayer opacity={0.2} speed={80} yPos="40%" />
      <CloudLayer opacity={0.1} speed={100} yPos="60%" />

      {/* Achievement stars */}
      <div className="fixed inset-0 pointer-events-none">
        {Array.from({ length: 15 }, (_, i) => (
          <AchievementStar
            key={i}
            delay={i * 0.5}
            position={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight * 0.5,
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-indigo-950/80 backdrop-blur-lg shadow-lg z-50 border-b border-blue-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <FaMountain className="h-8 w-8 text-sky-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
                Lotus Zenith
              </span>
            </motion.div>
            <div className="flex space-x-8">
              {['Services', 'About', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-blue-100 hover:text-sky-400 transition-colors relative group"
                  whileHover={{ y: -2 }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-400 transition-all group-hover:w-full"></span>
                </motion.a>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-gradient-to-r from-sky-500 to-blue-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                Reach Summit
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Mountain Peak Theme */}
      <motion.section 
        className="relative min-h-screen flex items-center justify-center pt-16"
        style={{ y: peakY }}
      >
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'radial-gradient(circle at 50% 30%, rgba(56, 189, 248, 0.2) 0%, transparent 50%)',
                'radial-gradient(circle at 50% 20%, rgba(59, 130, 246, 0.2) 0%, transparent 50%)',
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
              <span className="bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
                Peak Performance Health
              </span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Ascend to the summit of wellness. Experience healthcare that elevates you 
              to your highest potential, where excellence meets achievement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-sky-500 to-blue-500 text-white rounded-full shadow-xl hover:shadow-2xl transition-all flex items-center justify-center space-x-2"
              >
                <FaFlag className="w-5 h-5" />
                <span>Start Your Ascent</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/20 backdrop-blur text-white rounded-full shadow-xl hover:shadow-2xl transition-all border border-white/30"
              >
                View Summit
              </motion.button>
            </div>

            {/* Altitude meter */}
            <div className="mt-12">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sky-300 text-sm">Current Altitude</span>
                <span className="text-sky-400 font-mono">{altitude}%</span>
              </div>
              <div className="relative h-4 bg-blue-900/50 rounded-full overflow-hidden">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-sky-400 to-blue-400"
                  style={{ width: `${altitude}%` }}
                />
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
              </div>
              <p className="text-sm text-sky-300 mt-2">Climbing to optimal health</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Mountain peak visualization */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg viewBox="0 0 400 400" className="w-full h-full">
                <motion.path
                  d="M100,350 L200,100 L300,350 Z"
                  fill="url(#mountain-gradient)"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2 }}
                />
                <motion.path
                  d="M150,250 L200,100 L250,250 Z"
                  fill="white"
                  opacity="0.3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.3 }}
                  transition={{ delay: 1 }}
                />
                <defs>
                  <linearGradient id="mountain-gradient" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="#0EA5E9" />
                    <stop offset="100%" stopColor="#3B82F6" />
                  </linearGradient>
                </defs>
              </svg>
              
              {/* Summit flag */}
              <motion.div
                className="absolute"
                style={{ top: '25%', left: '50%', transform: 'translateX(-50%)' }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 2, type: 'spring' }}
              >
                <FaFlag className="w-8 h-8 text-red-500" />
              </motion.div>
            </div>
            
            <Image
              src="/Lotus Midjourney Flowers/lotus-contact-hero.png"
              alt="Zenith Lotus"
              width={600}
              height={600}
              className="relative z-10 rounded-3xl shadow-2xl opacity-90"
              style={{
                filter: 'brightness(1.2) contrast(1.1)',
              }}
            />
            
            {/* Rising achievement particles */}
            {Array.from({ length: 5 }, (_, i) => (
              <motion.div
                key={i}
                className="absolute w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"
                style={{
                  left: `${20 + i * 15}%`,
                  bottom: 0,
                }}
                animate={{
                  y: [-400, -600],
                  opacity: [1, 0],
                  scale: [1, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.8,
                }}
              />
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Meet Dr. Rosenberg Section */}
      <section className="py-20 relative bg-gradient-to-b from-blue-800 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent mb-4">
              Your Summit Guide
            </h2>
            <p className="text-xl text-blue-200">Leading you to healthcare excellence</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-blue-500 rounded-3xl blur-3xl opacity-20"></div>
              <Image
                src="/dr_rosenberg.jpg"
                alt="Dr. Aaron Rosenberg"
                width={500}
                height={600}
                className="relative z-10 rounded-3xl shadow-2xl border border-sky-500/20"
              />
              {/* Achievement badge */}
              <motion.div
                className="absolute -top-5 -right-5"
                animate={{
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              >
                <div className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full p-4 shadow-lg">
                  <FaTrophy className="w-12 h-12 text-white" />
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-white mb-4">Dr. Aaron Rosenberg</h3>
              <p className="text-lg text-blue-100 mb-6 leading-relaxed">
                Like an experienced mountaineer, Dr. Rosenberg guides you to the peak of your 
                health potential. His expertise in performance medicine helps you achieve heights 
                you never thought possible in your wellness journey.
              </p>
              <div className="space-y-4">
                {[
                  { icon: FaMountain, text: 'Peak Performance Protocols', level: 'Summit' },
                  { icon: FaChartLine, text: 'Progressive Health Elevation', level: 'Ascending' },
                  { icon: FaTrophy, text: 'Achievement-Based Wellness', level: 'Victory' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <motion.div 
                      className="p-2 bg-sky-500/20 rounded-full border border-sky-500/50"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <item.icon className="w-5 h-5 text-sky-400" />
                    </motion.div>
                    <span className="text-blue-100 flex-1">{item.text}</span>
                    <span className="text-xs text-sky-400 bg-sky-900/50 px-2 py-1 rounded-full">
                      {item.level}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section with Summit Cards */}
      <section id="services" className="py-20 bg-gradient-to-b from-blue-900 to-sky-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent mb-4">
              Summit Services
            </h2>
            <p className="text-xl text-blue-200">Elevate every aspect of your health</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Base Camp Care',
                description: 'Essential foundation for your ascent',
                icon: FaUserMd,
                image: '/Lotus Midjourney Flowers/lotus_dpc_hero.png',
                elevation: '5,000ft',
                gradient: 'from-green-500 to-blue-500'
              },
              {
                title: 'Altitude Medicine',
                description: 'Advanced care for peak performance',
                icon: FaChartLine,
                image: '/Lotus Midjourney Flowers/lotus-functional-medicine-hero.png',
                elevation: '15,000ft',
                gradient: 'from-blue-500 to-indigo-500'
              },
              {
                title: 'Summit Therapies',
                description: 'Elite treatments for ultimate wellness',
                icon: FaTrophy,
                image: '/Lotus Midjourney Flowers/lotus-ketamine-therapy-hero.png',
                elevation: '29,029ft',
                gradient: 'from-indigo-500 to-purple-500'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-blue-400 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="relative bg-gradient-to-b from-blue-800/80 to-blue-900/80 backdrop-blur-xl rounded-3xl overflow-hidden border border-sky-500/20 hover:border-sky-500/50 transition-all">
                  <div className="h-48 relative overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      style={{
                        filter: 'brightness(0.9) contrast(1.2)',
                      }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-60`}></div>
                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur px-3 py-1 rounded-full">
                      <span className="text-sm font-semibold text-white">{service.elevation}</span>
                    </div>
                  </div>
                  <div className="p-8">
                    <motion.div 
                      className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.7 }}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-blue-200 mb-4">{service.description}</p>
                    <motion.a
                      href="#"
                      className="inline-flex items-center text-sky-400 hover:text-sky-300 font-medium"
                      whileHover={{ x: 5 }}
                    >
                      Climb Higher <FaChevronRight className="ml-2 w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievement Timeline */}
      <section className="py-20 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent mb-4">
              Your Ascent Path
            </h2>
            <p className="text-xl text-blue-200">Milestones on your journey to the summit</p>
          </motion.div>

          <div className="relative">
            {/* Mountain path line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-sky-400 to-blue-400"></div>

            {/* Milestones */}
            {[
              { title: 'Health Assessment', desc: 'Map your starting point', icon: FaMapMarkerAlt, achieved: true },
              { title: 'Custom Plan', desc: 'Chart your unique path', icon: FaChartLine, achieved: true },
              { title: 'Active Progress', desc: 'Steady climb upward', icon: FaMountain, achieved: false },
              { title: 'Peak Wellness', desc: 'Summit achievement', icon: FaFlag, achieved: false }
            ].map((milestone, index) => (
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
                  <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                  <p className="text-blue-200">{milestone.desc}</p>
                </div>
                <motion.div
                  className={`absolute left-1/2 transform -translate-x-1/2 w-12 h-12 ${
                    milestone.achieved ? 'bg-sky-500' : 'bg-blue-800'
                  } rounded-full border-4 border-blue-900 flex items-center justify-center`}
                  whileHover={{ scale: 1.2 }}
                >
                  <milestone.icon className="w-6 h-6 text-white" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-600 to-blue-600"></div>
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundImage: [
              'radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.2) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(255, 255, 255, 0.2) 0%, transparent 50%)',
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
            Ready to Reach Your Peak?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-sky-100 mb-8"
          >
            Begin your ascent to optimal health today
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
              className="px-8 py-4 bg-white text-blue-600 rounded-full shadow-xl hover:shadow-2xl transition-all font-semibold"
            >
              Start Climbing
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent text-white rounded-full border-2 border-white hover:bg-white hover:text-blue-600 transition-all font-semibold"
            >
              View Summit Path
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-blue-900 to-indigo-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent mb-4">
              Base Camp Contact
            </h2>
            <p className="text-xl text-blue-200">Your journey begins here</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-blue-800/50 backdrop-blur-xl rounded-3xl shadow-xl p-8 md:p-12 border border-sky-500/20"
          >
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                { icon: FaPhone, label: 'Summit Line', value: '(555) 123-4567' },
                { icon: FaEnvelope, label: 'Peak Mail', value: 'zenith@lotusdirect.care' },
                { icon: FaMapMarkerAlt, label: 'Base Camp', value: 'Tampa, FL' }
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
                    className="w-16 h-16 bg-gradient-to-r from-sky-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-sky-500/25"
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="font-semibold text-white mb-1">{item.label}</h3>
                  <p className="text-blue-200">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-indigo-950 text-blue-300 border-t border-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 Lotus Direct Care. Elevating healthcare to new heights.</p>
        </div>
      </footer>
    </div>
  )
}