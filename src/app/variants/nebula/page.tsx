'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { 
  FaRocket, 
  FaHeart, 
  FaUserMd, 
  FaStar,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaChevronRight,
  FaMeteor,
  FaSatellite,
  FaGlobe
} from 'react-icons/fa'

export default function NebulaVariant() {
  const [stars, setStars] = useState<{ x: number; y: number; size: number; id: number }[]>([])
  const { scrollY } = useScroll()
  const nebulaY = useTransform(scrollY, [0, 1000], [0, -300])
  
  useEffect(() => {
    const starField = Array.from({ length: 100 }, (_, i) => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 3,
      id: i
    }))
    setStars(starField)
  }, [])

  // Nebula cloud effect
  const NebulaCloud = ({ color, position, size }: { color: string; position: { x: string; y: string }; size: number }) => (
    <motion.div
      className={`absolute rounded-full ${color} blur-3xl`}
      style={{
        left: position.x,
        top: position.y,
        width: `${size}px`,
        height: `${size}px`,
      }}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3],
        x: [0, 50, 0],
        y: [0, -30, 0],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  )

  // Shooting star component
  const ShootingStar = ({ delay }: { delay: number }) => (
    <motion.div
      className="absolute w-1 h-1 bg-white"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 50}%`,
      }}
      animate={{
        x: [0, -200],
        y: [0, 100],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: 1.5,
        delay,
        repeat: Infinity,
        repeatDelay: Math.random() * 10 + 5,
      }}
    >
      <div className="absolute inset-0 w-20 h-0.5 bg-gradient-to-l from-white to-transparent -rotate-45 origin-right" />
    </motion.div>
  )

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Star field */}
      <div className="fixed inset-0">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute bg-white rounded-full"
            style={{
              left: star.x,
              top: star.y,
              width: star.size,
              height: star.size,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Nebula clouds */}
      <motion.div
        className="fixed inset-0"
        style={{ y: nebulaY }}
      >
        <NebulaCloud color="bg-purple-600" position={{ x: '10%', y: '20%' }} size={400} />
        <NebulaCloud color="bg-blue-600" position={{ x: '60%', y: '10%' }} size={500} />
        <NebulaCloud color="bg-pink-600" position={{ x: '80%', y: '60%' }} size={350} />
        <NebulaCloud color="bg-indigo-600" position={{ x: '20%', y: '70%' }} size={450} />
      </motion.div>

      {/* Shooting stars */}
      <div className="fixed inset-0 pointer-events-none">
        <ShootingStar delay={0} />
        <ShootingStar delay={3} />
        <ShootingStar delay={6} />
        <ShootingStar delay={9} />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/50 backdrop-blur-lg shadow-lg z-50 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <FaRocket className="h-8 w-8 text-purple-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 bg-clip-text text-transparent">
                Lotus Nebula
              </span>
            </motion.div>
            <div className="flex space-x-8">
              {['Services', 'About', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-purple-400 transition-colors relative group"
                  whileHover={{ y: -2 }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all group-hover:w-full"></span>
                </motion.a>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-lg hover:shadow-purple-500/50 transition-all"
              >
                Launch Journey
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Nebula Theme */}
      <motion.section 
        className="relative min-h-screen flex items-center justify-center pt-16"
      >
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'radial-gradient(circle at 30% 40%, rgba(147, 51, 234, 0.1) 0%, transparent 70%)',
                'radial-gradient(circle at 70% 60%, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
              ],
            }}
            transition={{
              duration: 15,
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
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 bg-clip-text text-transparent">
                Cosmic Healthcare
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Journey through the cosmos of wellness. Your health is as infinite as the universe, 
              and we're here to explore every star in your constellation of care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-xl hover:shadow-purple-500/50 transition-all flex items-center justify-center space-x-2"
              >
                <FaRocket className="w-5 h-5" />
                <span>Launch Your Mission</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent text-purple-400 rounded-full shadow-xl hover:shadow-purple-500/50 transition-all border border-purple-500/50"
              >
                Explore the Cosmos
              </motion.button>
            </div>

            {/* Orbital indicator */}
            <motion.div className="mt-12 relative w-48 h-48">
              <svg className="absolute inset-0" viewBox="0 0 100 100">
                <motion.circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="url(#nebula-gradient)"
                  strokeWidth="1"
                  strokeDasharray="5 5"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                />
                <defs>
                  <linearGradient id="nebula-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#9333EA" />
                    <stop offset="50%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#EC4899" />
                  </linearGradient>
                </defs>
              </svg>
              <motion.div
                className="absolute w-3 h-3 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                style={{ left: '50%', top: '10%', marginLeft: '-6px' }}
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Galaxy swirl effect */}
            <motion.div
              className="absolute inset-0"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 60,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-transparent to-pink-600/20 rounded-full blur-2xl" />
            </motion.div>
            
            <Image
              src="/Lotus Midjourney Flowers/lotus_blog_hero.png"
              alt="Nebula Lotus"
              width={600}
              height={600}
              className="relative z-10 rounded-3xl shadow-2xl"
              style={{
                filter: 'hue-rotate(240deg) saturate(1.5) brightness(0.9)',
              }}
            />
            
            {/* Orbiting planets */}
            {[0, 120, 240].map((angle, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: '50%',
                  top: '50%',
                  marginLeft: '-12px',
                  marginTop: '-12px',
                }}
                animate={{
                  x: Math.cos((angle * Math.PI) / 180) * 200,
                  y: Math.sin((angle * Math.PI) / 180) * 200,
                }}
                transition={{
                  duration: 20 + i * 5,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                <div className={`w-6 h-6 rounded-full ${
                  ['bg-purple-400', 'bg-blue-400', 'bg-pink-400'][i]
                } shadow-lg`} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Meet Dr. Rosenberg Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 bg-clip-text text-transparent mb-4">
              Your Cosmic Navigator
            </h2>
            <p className="text-xl text-gray-300">Guiding you through the universe of wellness</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-3xl opacity-20"></div>
              <Image
                src="/dr_rosenberg.jpg"
                alt="Dr. Aaron Rosenberg"
                width={500}
                height={600}
                className="relative z-10 rounded-3xl shadow-2xl border border-purple-500/20"
              />
              {/* Constellation decoration */}
              <svg className="absolute -top-10 -right-10 w-32 h-32 text-purple-400/30">
                <motion.g
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                >
                  {[
                    { x: 20, y: 20 }, { x: 80, y: 30 }, { x: 60, y: 70 },
                    { x: 30, y: 80 }, { x: 50, y: 50 }
                  ].map((pos, i) => (
                    <circle key={i} cx={pos.x} cy={pos.y} r="2" fill="currentColor" />
                  ))}
                  <path d="M20,20 L80,30 L60,70 L30,80 L20,20 M50,50 L80,30" stroke="currentColor" fill="none" strokeWidth="0.5" />
                </motion.g>
              </svg>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-white mb-4">Dr. Aaron Rosenberg</h3>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Like an astronaut exploring new frontiers, Dr. Rosenberg navigates the vast cosmos 
                of modern medicine to bring you healthcare that's truly out of this world. His approach 
                combines cutting-edge technology with the timeless wisdom of personalized care.
              </p>
              <div className="space-y-4">
                {[
                  { icon: FaRocket, text: 'Space-Age Treatment Technologies' },
                  { icon: FaSatellite, text: 'Advanced Diagnostic Systems' },
                  { icon: FaGlobe, text: 'Universal Wellness Approach' }
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
                      className="p-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/50"
                      whileHover={{ scale: 1.1, rotate: 180 }}
                      transition={{ duration: 0.5 }}
                    >
                      <item.icon className="w-5 h-5 text-purple-400" />
                    </motion.div>
                    <span className="text-gray-300">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section with Nebula Cards */}
      <section id="services" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 bg-clip-text text-transparent mb-4">
              Stellar Services
            </h2>
            <p className="text-xl text-gray-300">Each treatment is a star in your wellness constellation</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Cosmic Primary Care',
                description: 'Universal healthcare coverage',
                icon: FaGlobe,
                image: '/Lotus Midjourney Flowers/lotus_dpc_hero.png',
                nebula: 'from-purple-600 to-blue-600',
                stars: 8
              },
              {
                title: 'Stellar Medicine',
                description: 'Star-powered healing protocols',
                icon: FaStar,
                image: '/Lotus Midjourney Flowers/lotus-functional-medicine-hero.png',
                nebula: 'from-blue-600 to-pink-600',
                stars: 10
              },
              {
                title: 'Galactic Therapy',
                description: 'Journey to wellness infinity',
                icon: FaMeteor,
                image: '/Lotus Midjourney Flowers/lotus-ketamine-therapy-hero.png',
                nebula: 'from-pink-600 to-purple-600',
                stars: 12
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
                {/* Nebula cloud effect */}
                <motion.div
                  className={`absolute -inset-4 bg-gradient-to-r ${service.nebula} rounded-3xl blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                />
                
                <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-3xl overflow-hidden border border-purple-500/20 hover:border-purple-500/50 transition-all">
                  <div className="h-48 relative overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      style={{
                        filter: 'hue-rotate(240deg) saturate(1.2)',
                      }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.nebula} opacity-60`}></div>
                    
                    {/* Floating stars */}
                    <div className="absolute inset-0">
                      {Array.from({ length: service.stars }, (_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-white rounded-full"
                          style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                          }}
                          animate={{
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0],
                          }}
                          transition={{
                            duration: 2,
                            delay: Math.random() * 2,
                            repeat: Infinity,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="p-8">
                    <motion.div 
                      className={`w-16 h-16 bg-gradient-to-r ${service.nebula} rounded-full flex items-center justify-center mb-4 shadow-lg`}
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.7 }}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-400 mb-4">{service.description}</p>
                    <motion.a
                      href="#"
                      className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium"
                      whileHover={{ x: 5 }}
                    >
                      Explore Galaxy <FaChevronRight className="ml-2 w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Galaxy Visualization */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 bg-clip-text text-transparent mb-4">
              Your Health Galaxy
            </h2>
            <p className="text-xl text-gray-300">Navigate through your personal cosmos of wellness</p>
          </motion.div>

          <motion.div
            className="relative h-96 rounded-3xl overflow-hidden bg-gray-900/50 backdrop-blur-xl border border-purple-500/20"
            whileHover={{ scale: 1.02 }}
          >
            {/* Central galaxy */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="relative w-80 h-80"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/40 via-transparent to-pink-600/40 rounded-full blur-3xl" />
                <div className="absolute inset-8 bg-gradient-to-r from-blue-600/30 via-transparent to-purple-600/30 rounded-full blur-2xl" />
                <div className="absolute inset-16 bg-white/10 rounded-full blur-xl" />
                
                {/* Spiral arms */}
                <svg className="absolute inset-0" viewBox="0 0 200 200">
                  <motion.path
                    d="M100,100 Q150,100 150,50 Q150,0 100,0 Q50,0 50,50 Q50,100 100,100 Q150,100 150,150 Q150,200 100,200 Q50,200 50,150 Q50,100 100,100"
                    fill="none"
                    stroke="url(#spiral-gradient)"
                    strokeWidth="2"
                    opacity="0.5"
                  />
                  <defs>
                    <linearGradient id="spiral-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#9333EA" />
                      <stop offset="50%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#EC4899" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>
            </div>
            
            <div className="relative z-10 flex items-center justify-center h-full">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h3 className="text-3xl font-bold text-white mb-4">Infinite Possibilities</h3>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  Your health journey spans the entire universe of potential
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"></div>
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundImage: [
              'radial-gradient(circle at 20% 50%, rgba(147, 51, 234, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)',
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
            Ready for Liftoff?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-purple-100 mb-8"
          >
            Your cosmic wellness journey begins with a single step
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
              className="px-8 py-4 bg-white text-purple-600 rounded-full shadow-xl hover:shadow-2xl transition-all font-semibold"
            >
              Launch Your Journey
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent text-white rounded-full border-2 border-white hover:bg-white hover:text-purple-600 transition-all font-semibold"
            >
              Explore the Universe
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 bg-clip-text text-transparent mb-4">
              Mission Control
            </h2>
            <p className="text-xl text-gray-300">Connect with our space station</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-900/80 backdrop-blur-xl rounded-3xl shadow-xl p-8 md:p-12 border border-purple-500/20"
          >
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                { icon: FaPhone, label: 'Space Line', value: '(555) 123-4567' },
                { icon: FaEnvelope, label: 'Cosmic Mail', value: 'nebula@lotusdirect.care' },
                { icon: FaMapMarkerAlt, label: 'Earth Base', value: 'Tampa, FL' }
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
                    className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-500/25"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="font-semibold text-white mb-1">{item.label}</h3>
                  <p className="text-gray-400">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black text-gray-400 border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 Lotus Direct Care. Exploring the universe of wellness.</p>
        </div>
      </footer>
    </div>
  )
}