'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { 
  FaRocket, 
  FaHeart, 
  FaUserMd, 
  FaStar,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaChevronRight,
  FaArrowUp,
  FaCloudUploadAlt,
  FaDove
} from 'react-icons/fa'

export default function AscensionVariant() {
  const [elevation, setElevation] = useState(0)
  const [particles, setParticles] = useState<Array<{id: number, x: number}>>([])
  const { scrollY } = useScroll()
  const ascendY = useTransform(scrollY, [0, 1000], [0, -300])
  
  useEffect(() => {
    const interval = setInterval(() => {
      setElevation(prev => Math.min(prev + 1, 100))
      // Create ascending particles
      if (Math.random() > 0.7) {
        setParticles(prev => [...prev, {
          id: Date.now(),
          x: Math.random() * window.innerWidth
        }])
      }
    }, 100)
    return () => clearInterval(interval)
  }, [])

  // Clean up particles that have ascended
  useEffect(() => {
    const cleanup = setInterval(() => {
      setParticles(prev => prev.filter(p => Date.now() - p.id < 5000))
    }, 1000)
    return () => clearInterval(cleanup)
  }, [])

  // Ascending particle component
  const AscendingParticle = ({ particle }: { particle: {id: number, x: number} }) => {
    const icons = [FaStar, FaHeart, FaDove]
    const Icon = icons[Math.floor(Math.random() * icons.length)]
    const color = ['#60A5FA', '#A78BFA', '#F472B6'][Math.floor(Math.random() * 3)]
    
    return (
      <motion.div
        className="absolute bottom-0 pointer-events-none"
        initial={{
          x: particle.x,
          y: 0,
          scale: 0,
          rotate: 0,
        }}
        animate={{
          y: -window.innerHeight - 100,
          scale: [0, 1, 0.5],
          rotate: 360,
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 5,
          ease: 'easeOut',
        }}
      >
        <Icon className="w-6 h-6" style={{ color }} />
      </motion.div>
    )
  }

  // Ascending light beams
  const LightBeam = ({ delay, x }: { delay: number, x: string }) => (
    <motion.div
      className="absolute bottom-0 w-1 h-screen pointer-events-none"
      style={{ left: x }}
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 0.3, 0],
        scaleY: [0, 1, 0],
      }}
      transition={{
        duration: 3,
        delay,
        repeat: Infinity,
        repeatDelay: 2,
      }}
    >
      <div className="w-full h-full bg-gradient-to-t from-blue-400 via-purple-400 to-transparent" />
    </motion.div>
  )

  // Floating clouds
  const Cloud = ({ yPos, duration, delay }: { yPos: string, duration: number, delay: number }) => (
    <motion.div
      className="absolute"
      style={{ top: yPos }}
      initial={{ x: '-20%' }}
      animate={{ x: '120%' }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      <FaCloudUploadAlt className="w-32 h-32 text-white/20" />
    </motion.div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-t from-indigo-900 via-purple-800 to-pink-600 relative overflow-hidden">
      {/* Ascending particles */}
      <AnimatePresence>
        {particles.map(particle => (
          <AscendingParticle key={particle.id} particle={particle} />
        ))}
      </AnimatePresence>

      {/* Light beams */}
      <div className="fixed inset-0 pointer-events-none">
        <LightBeam delay={0} x="10%" />
        <LightBeam delay={1} x="30%" />
        <LightBeam delay={2} x="50%" />
        <LightBeam delay={3} x="70%" />
        <LightBeam delay={4} x="90%" />
      </div>

      {/* Floating clouds */}
      <div className="fixed inset-0 pointer-events-none">
        <Cloud yPos="20%" duration={30} delay={0} />
        <Cloud yPos="50%" duration={40} delay={10} />
        <Cloud yPos="70%" duration={35} delay={20} />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-indigo-950/80 backdrop-blur-lg shadow-lg z-50 border-b border-purple-500/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <FaRocket className="h-8 w-8 text-purple-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Lotus Ascension
              </span>
            </motion.div>
            <div className="flex space-x-8">
              {['Elevate', 'Transcend', 'Connect'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-purple-100 hover:text-purple-400 transition-colors relative group"
                  whileHover={{ y: -2 }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all group-hover:w-full"></span>
                </motion.a>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                Begin Ascent
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Ascension Theme */}
      <motion.section 
        className="relative min-h-screen flex items-center justify-center pt-16"
        style={{ y: ascendY }}
      >
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'radial-gradient(circle at 50% 100%, rgba(96, 165, 250, 0.3) 0%, transparent 70%)',
                'radial-gradient(circle at 50% 80%, rgba(167, 139, 250, 0.3) 0%, transparent 70%)',
                'radial-gradient(circle at 50% 60%, rgba(244, 114, 182, 0.3) 0%, transparent 70%)',
              ],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Elevate Your Wellness
              </span>
            </h1>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Experience healthcare that lifts you higher. Like a gentle ascension, 
              we guide your journey upward to transcendent health and vitality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-full shadow-xl hover:shadow-2xl transition-all flex items-center justify-center space-x-2"
              >
                <FaArrowUp className="w-5 h-5" />
                <span>Start Rising</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent text-purple-300 rounded-full shadow-xl hover:shadow-2xl transition-all border border-purple-400/50"
              >
                View Heights
              </motion.button>
            </div>

            {/* Elevation meter */}
            <div className="mt-12">
              <div className="flex items-center justify-between mb-2">
                <span className="text-purple-300 text-sm">Current Elevation</span>
                <span className="text-purple-400 font-mono">{elevation}m</span>
              </div>
              <div className="relative h-2 bg-purple-900/50 rounded-full overflow-hidden">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
                  style={{ width: `${elevation}%` }}
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
              <p className="text-sm text-purple-300 mt-2">Ascending to optimal health</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Levitating effect */}
            <motion.div
              className="relative"
              animate={{
                y: [0, -30, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              {/* Ascending aura */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  boxShadow: [
                    '0 20px 60px rgba(96, 165, 250, 0.4)',
                    '0 40px 100px rgba(167, 139, 250, 0.6)',
                    '0 20px 60px rgba(244, 114, 182, 0.4)',
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />
              
              <Image
                src="/Lotus Midjourney Flowers/lotus-about-hero.png"
                alt="Ascension Lotus"
                width={600}
                height={600}
                className="relative z-10 rounded-full shadow-2xl"
                style={{
                  filter: 'brightness(1.2) contrast(1.1)',
                }}
              />
              
              {/* Rising energy rings */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 border-2 border-purple-400 rounded-full"
                  initial={{ scale: 1, opacity: 0 }}
                  animate={{
                    scale: [1, 1.5, 2],
                    opacity: [0, 0.5, 0],
                    y: [0, -100, -200],
                  }}
                  transition={{
                    duration: 3,
                    delay: i,
                    repeat: Infinity,
                  }}
                />
              ))}
            </motion.div>
            
            {/* Ascending particles around image */}
            <div className="absolute inset-0">
              {Array.from({ length: 6 }, (_, i) => {
                const angle = (i * 60 * Math.PI) / 180
                return (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{
                      left: `${50 + 40 * Math.cos(angle)}%`,
                      top: `${50 + 40 * Math.sin(angle)}%`,
                    }}
                    animate={{
                      y: [-20, -40, -20],
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      delay: i * 0.3,
                      repeat: Infinity,
                    }}
                  >
                    <FaStar className="w-4 h-4 text-purple-300" />
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Meet Dr. Rosenberg Section */}
      <section id="transcend" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              Your Elevation Guide
            </h2>
            <p className="text-xl text-purple-200">Lifting you to new heights of health</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-3xl opacity-20"></div>
              <Image
                src="/dr_rosenberg.jpg"
                alt="Dr. Aaron Rosenberg"
                width={500}
                height={600}
                className="relative z-10 rounded-3xl shadow-2xl border border-purple-500/20"
              />
              {/* Ascending light effect */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-32"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                <div className="h-full bg-gradient-to-t from-purple-400/50 to-transparent blur-xl" />
              </motion.div>
              
              {/* Floating halo */}
              <motion.div
                className="absolute -top-10 left-1/2 transform -translate-x-1/2"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                }}
              >
                <div className="w-24 h-24 rounded-full border-2 border-purple-400/50" />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-purple-100 mb-4">Dr. Aaron Rosenberg</h3>
              <p className="text-lg text-purple-200 mb-6 leading-relaxed">
                Dr. Rosenberg elevates healthcare to transcendent levels. His approach lifts 
                you beyond conventional medicine, ascending through layers of wellness to reach 
                heights of health you never imagined possible.
              </p>
              <div className="space-y-4">
                {[
                  { icon: FaRocket, text: 'Accelerated Healing Protocols' },
                  { icon: FaArrowUp, text: 'Elevation Medicine Techniques' },
                  { icon: FaDove, text: 'Transcendent Wellness Programs' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <motion.div 
                      className="p-2 bg-purple-500/20 rounded-full border border-purple-500/50"
                      whileHover={{ scale: 1.1, y: -5 }}
                      transition={{ duration: 0.3 }}
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

      {/* Services Section with Elevation Cards */}
      <section id="elevate" className="py-20 bg-indigo-950/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              Ascending Services
            </h2>
            <p className="text-xl text-purple-200">Each level lifts you higher</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Foundation Lift',
                description: 'Essential elevation care',
                icon: FaUserMd,
                image: '/Lotus Midjourney Flowers/lotus_dpc_hero.png',
                level: 'Ground',
                height: '0m',
                gradient: 'from-blue-600 to-blue-400'
              },
              {
                title: 'Ascension Medicine',
                description: 'Rising wellness protocols',
                icon: FaArrowUp,
                image: '/Lotus Midjourney Flowers/lotus-functional-medicine-hero.png',
                level: 'Midway',
                height: '500m',
                gradient: 'from-purple-600 to-purple-400'
              },
              {
                title: 'Transcendent Therapy',
                description: 'Peak elevation treatments',
                icon: FaDove,
                image: '/Lotus Midjourney Flowers/lotus-ketamine-therapy-hero.png',
                level: 'Summit',
                height: '1000m',
                gradient: 'from-pink-600 to-pink-400'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -20 }}
                className="group relative"
              >
                {/* Ascending glow effect */}
                <motion.div
                  className={`absolute -inset-1 bg-gradient-to-t ${service.gradient} rounded-3xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
                
                <div className="relative bg-indigo-900/80 backdrop-blur-xl rounded-3xl overflow-hidden border border-purple-500/20 hover:border-purple-500/50 transition-all">
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
                      <span className="text-sm font-semibold text-white">{service.height}</span>
                    </div>
                    
                    {/* Rising particles overlay */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-32 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      {Array.from({ length: 5 }, (_, i) => (
                        <motion.div
                          key={i}
                          className="absolute bottom-0 w-1 h-full bg-gradient-to-t from-white to-transparent"
                          style={{ left: `${20 + i * 15}%` }}
                          animate={{
                            y: [0, -100],
                            opacity: [0, 1, 0],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                        />
                      ))}
                    </motion.div>
                  </div>
                  <div className="p-8">
                    <motion.div 
                      className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}
                      whileHover={{ y: -10, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-purple-100 mb-3">{service.title}</h3>
                    <p className="text-purple-300 mb-2">{service.description}</p>
                    <p className="text-sm text-purple-400 mb-4">Level: {service.level}</p>
                    <motion.a
                      href="#"
                      className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium"
                      whileHover={{ x: 5, y: -2 }}
                    >
                      Ascend Higher <FaChevronRight className="ml-2 w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ascension Path Visualization */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              Your Ascension Journey
            </h2>
            <p className="text-xl text-purple-200">Rising through levels of wellness</p>
          </motion.div>

          <motion.div
            className="relative h-96 rounded-3xl overflow-hidden bg-gradient-to-t from-indigo-900 via-purple-800 to-pink-600 border border-purple-500/20"
            whileHover={{ scale: 1.02 }}
          >
            {/* Ascending path visualization */}
            <div className="absolute inset-0">
              <svg className="w-full h-full" viewBox="0 0 400 300">
                {/* Ascending spiral path */}
                <motion.path
                  d="M200,280 Q100,250 150,200 T200,100 Q300,50 250,0"
                  stroke="url(#ascension-gradient)"
                  strokeWidth="3"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <defs>
                  <linearGradient id="ascension-gradient" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="#60A5FA" />
                    <stop offset="50%" stopColor="#A78BFA" />
                    <stop offset="100%" stopColor="#F472B6" />
                  </linearGradient>
                </defs>
                
                {/* Milestone points */}
                <circle cx="200" cy="280" r="8" fill="#60A5FA" />
                <circle cx="150" cy="200" r="8" fill="#A78BFA" />
                <circle cx="200" cy="100" r="8" fill="#F472B6" />
              </svg>
            </div>
            
            {/* Rising particles animation */}
            <div className="absolute inset-0">
              {Array.from({ length: 20 }, (_, i) => (
                <motion.div
                  key={i}
                  className="absolute bottom-0 w-1 h-1 bg-white rounded-full"
                  style={{ left: `${Math.random() * 100}%` }}
                  animate={{
                    y: [-10, -400],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: 'easeOut',
                  }}
                />
              ))}
            </div>
            
            <div className="relative z-10 flex items-center justify-center h-full">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center bg-black/30 backdrop-blur-sm rounded-2xl p-8"
              >
                <h3 className="text-3xl font-bold text-white mb-4">Continuous Elevation</h3>
                <p className="text-lg text-purple-200 max-w-2xl mx-auto">
                  Your health journey is an endless ascent toward greater vitality
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>
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
            Ready to Ascend?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-purple-100 mb-8"
          >
            Begin your elevation to transcendent health
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-purple-600 rounded-full shadow-xl hover:shadow-2xl transition-all font-semibold"
            >
              Start Ascending
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent text-white rounded-full border-2 border-white hover:bg-white hover:text-purple-600 transition-all font-semibold"
            >
              Learn to Rise
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="connect" className="py-20 bg-indigo-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              Connect & Elevate
            </h2>
            <p className="text-xl text-purple-200">Reach higher together</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-purple-900/50 backdrop-blur-xl rounded-3xl shadow-xl p-8 md:p-12 border border-purple-500/20"
          >
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                { icon: FaPhone, label: 'Ascension Line', value: '(555) 123-4567' },
                { icon: FaEnvelope, label: 'Sky Mail', value: 'ascension@lotusdirect.care' },
                { icon: FaMapMarkerAlt, label: 'Launch Point', value: 'Tampa, FL' }
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
                    className="w-16 h-16 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-500/25"
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ duration: 0.3 }}
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
      <footer className="py-8 bg-indigo-950 text-purple-300 border-t border-purple-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 Lotus Direct Care. Elevating wellness to transcendent heights.</p>
        </div>
      </footer>
    </div>
  )
}