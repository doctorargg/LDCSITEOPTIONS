'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { 
  FaTint, 
  FaHeart, 
  FaUserMd, 
  FaStar,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaChevronRight,
  FaSun,
  FaLeaf,
  FaUmbrellaBeach
} from 'react-icons/fa'

export default function OasisVariant() {
  const [mirageEffect, setMirageEffect] = useState(0)
  const { scrollY } = useScroll()
  const desertY = useTransform(scrollY, [0, 500], [0, -80])
  
  useEffect(() => {
    const interval = setInterval(() => {
      setMirageEffect(prev => (prev + 1) % 360)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  // Sand particle animation
  const SandParticle = ({ delay }: { delay: number }) => (
    <motion.div
      className="absolute w-1 h-1 bg-yellow-600/50 rounded-full"
      initial={{ 
        x: -100,
        y: Math.random() * window.innerHeight,
      }}
      animate={{
        x: window.innerWidth + 100,
        y: Math.random() * window.innerHeight,
      }}
      transition={{
        duration: 10 + Math.random() * 5,
        delay,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  )

  // Palm tree sway
  const PalmTree = ({ position, delay }: { position: 'left' | 'right'; delay: number }) => (
    <motion.div
      className="absolute bottom-0"
      style={{
        [position]: position === 'left' ? '10%' : '10%',
      }}
      animate={{
        rotate: [-2, 2, -2],
      }}
      transition={{
        duration: 6,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <FaLeaf className="text-green-600 w-32 h-32 opacity-30" />
    </motion.div>
  )

  // Mirage wave effect
  const MirageWave = () => (
    <motion.div
      className="absolute inset-x-0 bottom-0 h-32"
      style={{
        background: `linear-gradient(to top, rgba(251, 191, 36, 0.2), transparent)`,
        filter: 'blur(20px)',
      }}
      animate={{
        scaleY: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-100 via-amber-50 to-orange-50 relative overflow-hidden">
      {/* Desert sand particles */}
      <div className="fixed inset-0 pointer-events-none">
        {Array.from({ length: 20 }, (_, i) => (
          <SandParticle key={i} delay={i * 0.5} />
        ))}
      </div>

      {/* Sun glow */}
      <motion.div
        className="fixed top-20 right-20 w-48 h-48 bg-yellow-400 rounded-full blur-3xl opacity-50"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
      />

      {/* Palm trees */}
      <PalmTree position="left" delay={0} />
      <PalmTree position="right" delay={2} />

      {/* Mirage effect */}
      <MirageWave />

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-yellow-50/90 backdrop-blur-lg shadow-sm z-50 border-b border-yellow-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <FaUmbrellaBeach className="h-8 w-8 text-amber-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                Lotus Oasis
              </span>
            </motion.div>
            <div className="flex space-x-8">
              {['Services', 'About', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-amber-800 hover:text-amber-600 transition-colors relative group"
                  whileHover={{ y: -2 }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all group-hover:w-full"></span>
                </motion.a>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-gradient-to-r from-amber-600 to-yellow-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                Find Refuge
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Oasis Theme */}
      <motion.section 
        className="relative min-h-screen flex items-center justify-center pt-16"
        style={{ y: desertY }}
      >
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(ellipse at center bottom, rgba(34, 197, 94, 0.1) 0%, transparent 50%)`,
            }}
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
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
              <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                Your Wellness Oasis
              </span>
            </h1>
            <p className="text-xl text-amber-800 mb-8 leading-relaxed">
              Discover refreshing healthcare in the midst of life's desert. 
              A sanctuary where healing flows like water and wellness blooms abundantly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-amber-600 to-yellow-600 text-white rounded-full shadow-xl hover:shadow-2xl transition-all flex items-center justify-center space-x-2"
              >
                <FaTint className="w-5 h-5" />
                <span>Quench Your Health</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-amber-600 rounded-full shadow-xl hover:shadow-2xl transition-all border border-amber-200"
              >
                Explore Oasis
              </motion.button>
            </div>

            {/* Water ripple effect */}
            <motion.div className="mt-12 relative h-20 w-48">
              <svg className="absolute inset-0" viewBox="0 0 200 80">
                <motion.path
                  d="M0,40 Q50,20 100,40 T200,40"
                  stroke="url(#water-gradient)"
                  strokeWidth="2"
                  fill="none"
                  animate={{
                    d: [
                      "M0,40 Q50,20 100,40 T200,40",
                      "M0,40 Q50,60 100,40 T200,40",
                      "M0,40 Q50,20 100,40 T200,40",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />
                <defs>
                  <linearGradient id="water-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0EA5E9" />
                    <stop offset="100%" stopColor="#22D3EE" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Oasis pool effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-3xl opacity-20"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            />
            
            {/* Mirage distortion */}
            <motion.div
              className="absolute inset-0"
              style={{
                filter: `blur(${Math.sin(mirageEffect * 0.01) * 2}px)`,
              }}
            />
            
            <Image
              src="/Lotus Midjourney Flowers/lotus_about_hero.png"
              alt="Oasis Lotus"
              width={600}
              height={600}
              className="relative z-10 rounded-3xl shadow-2xl"
              style={{
                filter: 'saturate(1.3) brightness(1.1)',
              }}
            />
            
            {/* Water droplets */}
            {Array.from({ length: 6 }, (_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-blue-400 rounded-full"
                style={{
                  left: `${50 + 40 * Math.cos((i * Math.PI * 2) / 6)}%`,
                  top: `${50 + 40 * Math.sin((i * Math.PI * 2) / 6)}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.8, 0, 0.8],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              />
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Meet Dr. Rosenberg Section */}
      <section className="py-20 relative bg-gradient-to-b from-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent mb-4">
              Your Oasis Guide
            </h2>
            <p className="text-xl text-amber-700">Leading you to refreshing wellness</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-3xl blur-2xl opacity-20"></div>
              <Image
                src="/dr_rosenberg.jpg"
                alt="Dr. Aaron Rosenberg"
                width={500}
                height={600}
                className="relative z-10 rounded-3xl shadow-2xl"
              />
              {/* Palm frond decoration */}
              <motion.div
                className="absolute -top-10 -right-10"
                animate={{
                  rotate: [-5, 5, -5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <FaLeaf className="w-24 h-24 text-green-500/30" />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-amber-800 mb-4">Dr. Aaron Rosenberg</h3>
              <p className="text-lg text-amber-700 mb-6 leading-relaxed">
                In the desert of modern healthcare, Dr. Rosenberg has created a true oasis. 
                His practice offers respite from the harsh realities of rushed medicine, providing 
                refreshing, personalized care that nurtures your whole being.
              </p>
              <div className="space-y-4">
                {[
                  { icon: FaTint, text: 'Refreshing Healthcare Approach' },
                  { icon: FaLeaf, text: 'Natural Healing Environment' },
                  { icon: FaSun, text: 'Warmth & Compassionate Care' }
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
                      className="p-2 bg-amber-100 rounded-full"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <item.icon className="w-5 h-5 text-amber-600" />
                    </motion.div>
                    <span className="text-amber-700">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section with Oasis Cards */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent mb-4">
              Oasis Services
            </h2>
            <p className="text-xl text-amber-700">Life-giving treatments in your wellness desert</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Spring of Primary Care',
                description: 'Continuous flow of health support',
                icon: FaTint,
                image: '/Lotus Midjourney Flowers/lotus_dpc_hero.png',
                gradient: 'from-blue-400 to-cyan-400',
                element: 'Water'
              },
              {
                title: 'Garden of Medicine',
                description: 'Cultivating natural wellness',
                icon: FaLeaf,
                image: '/Lotus Midjourney Flowers/lotus-functional-medicine-hero.png',
                gradient: 'from-green-400 to-emerald-400',
                element: 'Earth'
              },
              {
                title: 'Sanctuary Therapies',
                description: 'Protected space for healing',
                icon: FaUmbrellaBeach,
                image: '/Lotus Midjourney Flowers/lotus-ketamine-therapy-hero.png',
                gradient: 'from-amber-400 to-yellow-400',
                element: 'Shelter'
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
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border border-amber-100">
                  <div className="h-48 relative overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      style={{
                        filter: 'saturate(1.2)',
                      }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-60`}></div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full">
                      <span className="text-sm font-semibold text-amber-700">{service.element}</span>
                    </div>
                  </div>
                  <div className="p-8">
                    <motion.div 
                      className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-full flex items-center justify-center mb-4 shadow-lg`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.7 }}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-amber-800 mb-3">{service.title}</h3>
                    <p className="text-amber-600 mb-4">{service.description}</p>
                    <motion.a
                      href="#"
                      className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium"
                      whileHover={{ x: 5 }}
                    >
                      Refresh Here <FaChevronRight className="ml-2 w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Oasis Pool Visualization */}
      <section className="py-20 relative bg-gradient-to-b from-yellow-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent mb-4">
              Your Healing Waters
            </h2>
            <p className="text-xl text-amber-700">Dive into wellness</p>
          </motion.div>

          <motion.div
            className="relative h-96 rounded-3xl overflow-hidden bg-gradient-to-b from-cyan-100 to-blue-200 border border-cyan-200"
            whileHover={{ scale: 1.02 }}
          >
            {/* Water ripple effect */}
            <div className="absolute inset-0">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 border-4 border-cyan-300 rounded-full"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                  animate={{
                    scale: [0, 3],
                    opacity: [1, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 1,
                  }}
                />
              ))}
            </div>
            
            {/* Floating lotus petals */}
            {Array.from({ length: 5 }, (_, i) => (
              <motion.div
                key={i}
                className="absolute w-8 h-8 bg-pink-300 rounded-full"
                style={{
                  left: `${20 + i * 15}%`,
                  clipPath: 'ellipse(50% 35% at 50% 50%)',
                }}
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 5 + i,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              />
            ))}
            
            <div className="relative z-10 flex items-center justify-center h-full">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h3 className="text-3xl font-bold text-blue-800 mb-4">Immerse in Healing</h3>
                <p className="text-lg text-blue-700 max-w-2xl mx-auto">
                  Your oasis awaits with refreshing treatments and revitalizing care
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-yellow-600"></div>
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundImage: [
              'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(34, 197, 94, 0.3) 0%, transparent 50%)',
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
            Find Your Oasis Today
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-amber-100 mb-8"
          >
            Escape to wellness in your personal healthcare sanctuary
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
              className="px-8 py-4 bg-white text-amber-600 rounded-full shadow-xl hover:shadow-2xl transition-all font-semibold"
            >
              Enter the Oasis
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent text-white rounded-full border-2 border-white hover:bg-white hover:text-amber-600 transition-all font-semibold"
            >
              Explore Sanctuary
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
            <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent mb-4">
              Reach the Oasis
            </h2>
            <p className="text-xl text-amber-700">Your journey to wellness begins here</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-3xl shadow-xl p-8 md:p-12"
          >
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                { icon: FaPhone, label: 'Oasis Line', value: '(555) 123-4567' },
                { icon: FaEnvelope, label: 'Spring Mail', value: 'oasis@lotusdirect.care' },
                { icon: FaMapMarkerAlt, label: 'Sanctuary', value: 'Tampa, FL' }
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
                    className="w-16 h-16 bg-gradient-to-r from-amber-100 to-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <item.icon className="w-8 h-8 text-amber-600" />
                  </motion.div>
                  <h3 className="font-semibold text-amber-800 mb-1">{item.label}</h3>
                  <p className="text-amber-600">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gradient-to-r from-amber-600 to-yellow-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 Lotus Direct Care. Your oasis in the healthcare desert.</p>
        </div>
      </footer>
    </div>
  )
}