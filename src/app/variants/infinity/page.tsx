'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { 
  FaInfinity, 
  FaHeart, 
  FaUserMd, 
  FaStar,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaChevronRight,
  FaRecycle
} from 'react-icons/fa'

export default function InfinityVariant() {
  const [loopCount, setLoopCount] = useState(0)
  const { scrollY } = useScroll()
  const infinityRotation = useTransform(scrollY, [0, 1000], [0, 360])
  
  useEffect(() => {
    const interval = setInterval(() => {
      setLoopCount(prev => (prev + 1) % 100)
    }, 100)
    return () => clearInterval(interval)
  }, [])

  // Infinity path animation
  const InfinityPath = ({ size, color }: { size: number; color: string }) => (
    <svg width={size} height={size / 2} viewBox="0 0 200 100" className="absolute">
      <motion.path
        d="M50,50 C50,20 20,20 20,50 C20,80 50,80 50,50 C50,20 80,20 80,50 C80,80 50,80 50,50 C50,20 120,20 120,50 C120,80 150,80 150,50 C150,20 180,20 180,50 C180,80 150,80 150,50"
        stroke={color}
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </svg>
  )

  // Mobius strip effect
  const MobiusStrip = ({ delay }: { delay: number }) => (
    <motion.div
      className="absolute w-64 h-32 border-2 border-purple-400/30 rounded-full"
      animate={{
        rotateX: [0, 180, 360],
        rotateY: [0, 180, 360],
      }}
      transition={{
        duration: 10,
        delay,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  )

  // Fractal pattern
  const FractalCircle = ({ size, depth }: { size: number; depth: number }) => {
    if (depth === 0) return null
    return (
      <motion.div
        className="absolute rounded-full border border-purple-300/20"
        style={{
          width: size,
          height: size,
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20 / depth,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <FractalCircle size={size * 0.7} depth={depth - 1} />
      </motion.div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-indigo-950 to-violet-950 relative overflow-hidden">
      {/* Infinity patterns background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-20">
          <InfinityPath size={300} color="rgba(168, 85, 247, 0.3)" />
        </div>
        <div className="absolute bottom-20 right-20">
          <InfinityPath size={200} color="rgba(139, 92, 246, 0.3)" />
        </div>
      </div>

      {/* Mobius strips */}
      <MobiusStrip delay={0} />
      <MobiusStrip delay={2} />
      <MobiusStrip delay={4} />

      {/* Fractal patterns */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
        <FractalCircle size={600} depth={5} />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-purple-950/80 backdrop-blur-lg shadow-lg z-50 border-b border-purple-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <FaInfinity className="h-8 w-8 text-purple-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                Lotus Infinity
              </span>
            </motion.div>
            <div className="flex space-x-8">
              {['Services', 'About', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-purple-200 hover:text-purple-400 transition-colors relative group"
                  whileHover={{ y: -2 }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all group-hover:w-full"></span>
                </motion.a>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-gradient-to-r from-purple-500 to-violet-500 text-white rounded-full shadow-lg hover:shadow-purple-500/50 transition-all"
              >
                Enter the Loop
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Infinity Theme */}
      <motion.section 
        className="relative min-h-screen flex items-center justify-center pt-16"
      >
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'radial-gradient(circle at 30% 40%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 70% 60%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)',
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
              <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                Endless Wellness Possibilities
              </span>
            </h1>
            <p className="text-xl text-purple-200 mb-8 leading-relaxed">
              Experience healthcare without limits. Like the infinite loop, your wellness 
              journey continues endlessly, always evolving, always improving.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-violet-500 text-white rounded-full shadow-xl hover:shadow-2xl transition-all flex items-center justify-center space-x-2"
              >
                <FaInfinity className="w-5 h-5" />
                <span>Begin Infinite Journey</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent text-purple-400 rounded-full shadow-xl hover:shadow-2xl transition-all border border-purple-500/50"
              >
                Explore Forever
              </motion.button>
            </div>

            {/* Loop counter */}
            <div className="mt-12 flex items-center space-x-4">
              <motion.div
                className="relative w-24 h-12"
                style={{ rotate: infinityRotation }}
              >
                <FaInfinity className="w-full h-full text-purple-400" />
              </motion.div>
              <div>
                <p className="text-purple-300 text-sm">Wellness Loops</p>
                <p className="text-2xl font-bold text-purple-400">{loopCount}∞</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Infinity symbol animation */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              <svg width="400" height="200" viewBox="0 0 400 200">
                <motion.path
                  d="M100,100 C100,40 40,40 40,100 C40,160 100,160 100,100 C100,40 160,40 160,100 C160,160 100,160 100,100 C100,40 260,40 260,100 C260,160 300,160 300,100 C300,40 360,40 360,100 C360,160 300,160 300,100"
                  stroke="url(#infinity-gradient)"
                  strokeWidth="4"
                  fill="none"
                  opacity="0.3"
                />
                <defs>
                  <linearGradient id="infinity-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#A855F7" />
                    <stop offset="50%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#A855F7" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
            
            <Image
              src="/Lotus Midjourney Flowers/lotus_contact_hero.png"
              alt="Infinity Lotus"
              width={600}
              height={600}
              className="relative z-10 rounded-3xl shadow-2xl"
              style={{
                filter: 'hue-rotate(270deg) saturate(1.5)',
              }}
            />
            
            {/* Orbiting particles */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 bg-purple-400 rounded-full"
                style={{
                  left: '50%',
                  top: '50%',
                }}
                animate={{
                  x: [
                    Math.cos((angle * Math.PI) / 180) * 200,
                    Math.cos(((angle + 180) * Math.PI) / 180) * 200,
                    Math.cos((angle * Math.PI) / 180) * 200,
                  ],
                  y: [
                    Math.sin((angle * Math.PI) / 180) * 100,
                    Math.sin(((angle + 180) * Math.PI) / 180) * 100,
                    Math.sin((angle * Math.PI) / 180) * 100,
                  ],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  delay: i * 0.5,
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
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent mb-4">
              Your Infinite Guide
            </h2>
            <p className="text-xl text-purple-200">Endless dedication to your wellness</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-violet-500 rounded-3xl blur-3xl opacity-20"></div>
              <Image
                src="/dr_rosenberg.jpg"
                alt="Dr. Aaron Rosenberg"
                width={500}
                height={600}
                className="relative z-10 rounded-3xl shadow-2xl border border-purple-500/20"
              />
              {/* Infinity symbol decoration */}
              <motion.div
                className="absolute -top-10 -right-10"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                <FaInfinity className="w-24 h-24 text-purple-400/30" />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-purple-100 mb-4">Dr. Aaron Rosenberg</h3>
              <p className="text-lg text-purple-200 mb-6 leading-relaxed">
                Dr. Rosenberg believes in the infinite potential of human health. His approach 
                creates continuous loops of improvement, where each cycle builds upon the last, 
                creating an endless spiral of wellness and vitality.
              </p>
              <div className="space-y-4">
                {[
                  { icon: FaInfinity, text: 'Continuous Care Cycles' },
                  { icon: FaRecycle, text: 'Regenerative Health Loops' },
                  { icon: FaInfinity, text: 'Balanced Infinity Approach' }
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
                      className="p-2 bg-purple-500/20 rounded-full border border-purple-500/50"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <item.icon className="w-5 h-5 text-purple-400" />
                    </motion.div>
                    <span className="text-purple-200">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section with Infinity Cards */}
      <section id="services" className="py-20 bg-purple-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent mb-4">
              Infinite Services
            </h2>
            <p className="text-xl text-purple-200">Endless possibilities for your health</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Eternal Primary Care',
                description: 'Never-ending health support',
                icon: FaUserMd,
                image: '/Lotus Midjourney Flowers/lotus_dpc_hero.png',
                symbol: '∞',
                gradient: 'from-purple-500 to-indigo-500'
              },
              {
                title: 'Cyclical Medicine',
                description: 'Continuous healing loops',
                icon: FaRecycle,
                image: '/Lotus Midjourney Flowers/lotus-functional-medicine-hero.png',
                symbol: '∞',
                gradient: 'from-indigo-500 to-violet-500'
              },
              {
                title: 'Perpetual Therapies',
                description: 'Ongoing wellness evolution',
                icon: FaInfinity,
                image: '/Lotus Midjourney Flowers/lotus-ketamine-therapy-hero.png',
                symbol: '∞',
                gradient: 'from-violet-500 to-purple-500'
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
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-violet-400 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                <div className="relative bg-purple-900/80 backdrop-blur-xl rounded-3xl overflow-hidden border border-purple-500/20 hover:border-purple-500/50 transition-all">
                  <div className="h-48 relative overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      style={{
                        filter: 'hue-rotate(270deg) saturate(1.5)',
                      }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-60`}></div>
                    <div className="absolute top-4 right-4 text-4xl font-bold text-white/80">
                      {service.symbol}
                    </div>
                    
                    {/* Infinity loop overlay */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                    >
                      <FaInfinity className="w-32 h-32 text-white/20" />
                    </motion.div>
                  </div>
                  <div className="p-8">
                    <motion.div 
                      className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.7 }}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-purple-100 mb-3">{service.title}</h3>
                    <p className="text-purple-300 mb-4">{service.description}</p>
                    <motion.a
                      href="#"
                      className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium"
                      whileHover={{ x: 5 }}
                    >
                      Loop In <FaChevronRight className="ml-2 w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Infinity Visualization */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent mb-4">
              Your Wellness Loop
            </h2>
            <p className="text-xl text-purple-200">Continuous cycles of improvement</p>
          </motion.div>

          <motion.div
            className="relative h-96 rounded-3xl overflow-hidden bg-purple-900/50 backdrop-blur-xl border border-purple-500/20"
            whileHover={{ scale: 1.02 }}
          >
            {/* Interactive infinity visualization */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.svg
                width="600"
                height="300"
                viewBox="0 0 600 300"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              >
                {/* Multiple infinity loops */}
                {[0, 1, 2].map((i) => (
                  <motion.path
                    key={i}
                    d="M150,150 C150,90 90,90 90,150 C90,210 150,210 150,150 C150,90 210,90 210,150 C210,210 150,210 150,150 C150,90 390,90 390,150 C390,210 450,210 450,150 C450,90 510,90 510,150 C510,210 450,210 450,150"
                    stroke={`rgba(168, 85, 247, ${0.6 - i * 0.2})`}
                    strokeWidth={4 - i}
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                      duration: 5,
                      delay: i * 0.5,
                      repeat: Infinity,
                    }}
                  />
                ))}
              </motion.svg>
            </div>
            
            <div className="relative z-10 flex items-center justify-center h-full">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h3 className="text-3xl font-bold text-white mb-4">Endless Possibilities</h3>
                <p className="text-lg text-purple-200 max-w-2xl mx-auto">
                  Your health journey continues infinitely, always growing, always improving
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-violet-600"></div>
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundImage: [
              'radial-gradient(circle at 20% 50%, rgba(168, 85, 247, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)',
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
            Join the Infinite Loop
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-purple-100 mb-8"
          >
            Your wellness journey has no limits
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
              Enter Infinity
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent text-white rounded-full border-2 border-white hover:bg-white hover:text-purple-600 transition-all font-semibold"
            >
              Explore Endless Care
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-purple-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent mb-4">
              Connect Forever
            </h2>
            <p className="text-xl text-purple-200">Begin your infinite journey</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-purple-900/80 backdrop-blur-xl rounded-3xl shadow-xl p-8 md:p-12 border border-purple-500/20"
          >
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                { icon: FaPhone, label: 'Infinity Line', value: '(555) 123-4567' },
                { icon: FaEnvelope, label: 'Loop Mail', value: 'infinity@lotusdirect.care' },
                { icon: FaMapMarkerAlt, label: 'Center Point', value: 'Tampa, FL' }
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
                    className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-500/25"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="font-semibold text-purple-100 mb-1">{item.label}</h3>
                  <p className="text-purple-300">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-purple-950 text-purple-300 border-t border-purple-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 Lotus Direct Care. Endless possibilities for your wellness journey.</p>
        </div>
      </footer>
    </div>
  )
}