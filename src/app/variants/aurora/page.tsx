'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { 
  FaSun, 
  FaHeart, 
  FaUserMd, 
  FaStar,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaChevronRight,
  FaMagic,
  FaMoon
} from 'react-icons/fa'

export default function AuroraVariant() {
  const [colorPhase, setColorPhase] = useState(0)
  const { scrollY } = useScroll()
  const auroraY = useTransform(scrollY, [0, 1000], [0, -200])

  useEffect(() => {
    const interval = setInterval(() => {
      setColorPhase((prev) => (prev + 1) % 360)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  // Aurora wave colors
  const auroraColors = [
    'from-purple-500 via-pink-500 to-blue-500',
    'from-green-500 via-teal-500 to-purple-500',
    'from-blue-500 via-indigo-500 to-pink-500',
    'from-pink-500 via-purple-500 to-indigo-500'
  ]

  // Animated aurora waves
  const AuroraWave = ({ delay, duration, colors }: { delay: number; duration: number; colors: string }) => (
    <motion.div
      className={`absolute inset-0 bg-gradient-to-r ${colors} opacity-20`}
      animate={{
        transform: [
          'translateY(0%) scaleY(1)',
          'translateY(-20%) scaleY(1.2)',
          'translateY(0%) scaleY(1)',
        ],
      }}
      transition={{
        duration,
        repeat: Infinity,
        delay,
        ease: 'easeInOut',
      }}
      style={{
        filter: 'blur(40px)',
      }}
    />
  )

  // Sparkle particles
  const sparkles = Array.from({ length: 50 }, (_, i) => (
    <motion.div
      key={i}
      className="absolute w-1 h-1 bg-white rounded-full"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, 1.5, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        delay: Math.random() * 3,
      }}
    />
  ))

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-950 via-blue-950 to-indigo-950 relative overflow-hidden">
      {/* Aurora background effect */}
      <div className="fixed inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{ y: auroraY }}
        >
          <AuroraWave delay={0} duration={15} colors={auroraColors[0]} />
          <AuroraWave delay={2} duration={20} colors={auroraColors[1]} />
          <AuroraWave delay={4} duration={18} colors={auroraColors[2]} />
          <AuroraWave delay={6} duration={22} colors={auroraColors[3]} />
        </motion.div>
      </div>

      {/* Sparkles */}
      <div className="fixed inset-0 pointer-events-none">
        {sparkles}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/30 backdrop-blur-lg shadow-lg z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <FaSun className="h-8 w-8 text-yellow-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Lotus Aurora
              </span>
            </motion.div>
            <div className="flex space-x-8">
              {['Services', 'About', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-white/80 hover:text-white transition-colors relative group"
                  whileHover={{ y: -2 }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all group-hover:w-full"></span>
                </motion.a>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                Experience Magic
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Aurora Effects */}
      <motion.section 
        className="relative min-h-screen flex items-center justify-center pt-16"
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Northern Lights of Healing
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Experience healthcare that illuminates your path to wellness. 
              Like the aurora borealis, your journey with us is unique and breathtaking.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-xl hover:shadow-2xl transition-all flex items-center justify-center space-x-2"
              >
                <FaMagic className="w-5 h-5" />
                <span>Begin Your Journey</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 backdrop-blur text-white rounded-full shadow-xl hover:shadow-2xl transition-all border border-white/20"
              >
                Discover Aurora
              </motion.button>
            </div>

            {/* Color wave indicator */}
            <motion.div
              className="mt-12 h-2 rounded-full overflow-hidden bg-white/10"
              style={{ width: '200px' }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 3,
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
            {/* Animated aurora glow behind image */}
            <motion.div
              className="absolute inset-0 rounded-3xl"
              animate={{
                background: [
                  'radial-gradient(circle at 30% 30%, rgba(147, 51, 234, 0.3) 0%, transparent 50%)',
                  'radial-gradient(circle at 70% 70%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)',
                  'radial-gradient(circle at 30% 70%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)',
                ],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              style={{ filter: 'blur(60px)' }}
            />
            <Image
              src="/Lotus Midjourney Flowers/artistic_lotus_hero.png"
              alt="Aurora Lotus"
              width={600}
              height={600}
              className="relative z-10 rounded-3xl shadow-2xl"
              style={{
                filter: `hue-rotate(${colorPhase}deg) saturate(1.2)`,
              }}
            />
            
            {/* Orbiting lights */}
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="absolute w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-sm"
                style={{
                  left: '50%',
                  top: '50%',
                }}
                animate={{
                  x: [
                    0,
                    Math.cos((i * Math.PI) / 2) * 250,
                    0,
                    -Math.cos((i * Math.PI) / 2) * 250,
                    0,
                  ],
                  y: [
                    0,
                    Math.sin((i * Math.PI) / 2) * 250,
                    0,
                    -Math.sin((i * Math.PI) / 2) * 250,
                    0,
                  ],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  delay: i * 2.5,
                  ease: 'linear',
                }}
              />
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
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-4">
              Your Guide Through the Lights
            </h2>
            <p className="text-xl text-gray-300">Illuminating the path to optimal health</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-3xl opacity-30"></div>
              <Image
                src="/dr_rosenberg.jpg"
                alt="Dr. Aaron Rosenberg"
                width={500}
                height={600}
                className="relative z-10 rounded-3xl shadow-2xl border border-white/10"
              />
              {/* Aurora lights decoration */}
              <motion.div
                className="absolute -top-10 -right-10 w-32 h-32"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                <FaMagic className="w-full h-full text-purple-400/20" />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-white mb-4">Dr. Aaron Rosenberg</h3>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Like the aurora borealis that dances across the northern sky, Dr. Rosenberg brings 
                a unique blend of science and artistry to healthcare. His approach illuminates 
                the path to wellness with innovative treatments and personalized care.
              </p>
              <div className="space-y-4">
                {[
                  { icon: FaSun, text: 'Illuminating Health Solutions', glow: 'from-yellow-400 to-orange-400' },
                  { icon: FaMoon, text: 'Holistic Night & Day Care', glow: 'from-blue-400 to-purple-400' },
                  { icon: FaMagic, text: 'Breakthrough Treatments', glow: 'from-pink-400 to-purple-400' }
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
                      className={`p-2 rounded-full bg-gradient-to-r ${item.glow}`}
                      whileHover={{ scale: 1.2, rotate: 180 }}
                      transition={{ duration: 0.5 }}
                    >
                      <item.icon className="w-5 h-5 text-white" />
                    </motion.div>
                    <span className="text-gray-300">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section with Aurora Cards */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-4">
              Services That Shine
            </h2>
            <p className="text-xl text-gray-300">Each treatment is a different color in your wellness spectrum</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Direct Primary Care',
                description: 'Your constant northern star in healthcare',
                icon: FaUserMd,
                image: '/Lotus Midjourney Flowers/lotus_dpc_hero.png',
                gradient: 'from-purple-500 to-blue-500',
                delay: 0
              },
              {
                title: 'Functional Medicine',
                description: 'Illuminating the root causes',
                icon: FaHeart,
                image: '/Lotus Midjourney Flowers/lotus-functional-medicine-hero.png',
                gradient: 'from-pink-500 to-purple-500',
                delay: 0.2
              },
              {
                title: 'Innovative Therapies',
                description: 'Breakthrough treatments that dazzle',
                icon: FaMagic,
                image: '/Lotus Midjourney Flowers/lotus-ketamine-therapy-hero.png',
                gradient: 'from-blue-500 to-pink-500',
                delay: 0.4
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: service.delay }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                {/* Aurora glow effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500`}
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: service.delay,
                  }}
                />
                
                <div className="relative bg-black/40 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10">
                  <div className="h-48 relative overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      style={{
                        filter: 'brightness(0.8) saturate(1.5)',
                      }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-60`}></div>
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
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <motion.a
                      href="#"
                      className="inline-flex items-center text-white hover:text-gray-200 font-medium"
                      whileHover={{ x: 5 }}
                    >
                      Explore Light <FaChevronRight className="ml-2 w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Aurora Wave Animation Section */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-4">
              Experience the Spectrum
            </h2>
            <p className="text-xl text-gray-300">Your wellness journey in living color</p>
          </motion.div>

          {/* Interactive aurora display */}
          <motion.div
            className="relative h-96 rounded-3xl overflow-hidden bg-black/30 backdrop-blur-xl border border-white/10"
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute inset-0">
              {[0, 1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  className="absolute inset-x-0 h-full"
                  style={{
                    background: `linear-gradient(to right, transparent, ${
                      ['purple', 'pink', 'blue', 'green', 'indigo'][i]
                    }, transparent)`,
                    opacity: 0.3,
                  }}
                  animate={{
                    y: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 10 + i * 2,
                    repeat: Infinity,
                    delay: i * 1,
                    ease: 'linear',
                  }}
                />
              ))}
            </div>
            <div className="relative z-10 flex items-center justify-center h-full">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h3 className="text-3xl font-bold text-white mb-4">Your Unique Healing Spectrum</h3>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  Just as no two aurora displays are the same, your healthcare journey is uniquely yours
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'radial-gradient(circle at 20% 50%, rgba(147, 51, 234, 0.3) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 50%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)',
                'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)',
              ],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
            }}
          />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Let Your Health Shine Bright
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 mb-8"
          >
            Join us under the aurora and discover your brightest self
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
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-xl hover:shadow-2xl transition-all font-semibold"
            >
              Begin Your Aurora Journey
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/10 backdrop-blur text-white rounded-full border-2 border-white/30 hover:bg-white/20 transition-all font-semibold"
            >
              Watch the Lights
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
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-4">
              Connect Under the Lights
            </h2>
            <p className="text-xl text-gray-300">Let's illuminate your path together</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-xl rounded-3xl shadow-xl p-8 md:p-12 border border-white/10"
          >
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                { icon: FaPhone, label: 'Call', value: '(555) 123-4567', color: 'from-purple-400 to-blue-400' },
                { icon: FaEnvelope, label: 'Email', value: 'aurora@lotusdirect.care', color: 'from-pink-400 to-purple-400' },
                { icon: FaMapMarkerAlt, label: 'Visit', value: 'Tampa, FL', color: 'from-blue-400 to-pink-400' }
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
                    className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="font-semibold text-white mb-1">{item.label}</h3>
                  <p className="text-gray-300">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black/50 backdrop-blur-xl text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 Lotus Direct Care. Illuminating wellness, one patient at a time.</p>
        </div>
      </footer>
    </div>
  )
}