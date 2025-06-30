'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { 
  FaLightbulb, 
  FaHeart, 
  FaUserMd, 
  FaStar,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaChevronRight,
  FaMagic,
  FaFirefly,
  FaSun
} from 'react-icons/fa'

export default function LuminaVariant() {
  const [glowIntensity, setGlowIntensity] = useState(0)
  const { scrollY } = useScroll()
  const luminaY = useTransform(scrollY, [0, 500], [0, -50])
  
  useEffect(() => {
    const interval = setInterval(() => {
      setGlowIntensity(prev => (prev + 1) % 100)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  // Bioluminescent particle
  const BioParticle = ({ delay, startPos }: { delay: number; startPos: { x: number; y: number } }) => (
    <motion.div
      className="absolute w-2 h-2"
      style={{
        left: startPos.x,
        top: startPos.y,
      }}
      animate={{
        y: [0, -100, -200],
        x: [0, Math.random() * 100 - 50],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: 5,
        delay,
        repeat: Infinity,
        ease: 'easeOut',
      }}
    >
      <div className="w-full h-full bg-cyan-400 rounded-full blur-sm" 
        style={{
          boxShadow: '0 0 20px rgba(34, 211, 238, 0.8)',
        }}
      />
    </motion.div>
  )

  // Glowing orb animation
  const GlowingOrb = ({ size, color, position }: { size: number; color: string; position: { x: string; y: string } }) => (
    <motion.div
      className="absolute"
      style={{
        width: size,
        height: size,
        left: position.x,
        top: position.y,
      }}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.5, 0.8, 0.5],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <div 
        className="w-full h-full rounded-full"
        style={{
          background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
          filter: 'blur(10px)',
        }}
      />
    </motion.div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-cyan-950 to-teal-950 relative overflow-hidden">
      {/* Bioluminescent particles */}
      <div className="fixed inset-0 pointer-events-none">
        {Array.from({ length: 30 }, (_, i) => (
          <BioParticle
            key={i}
            delay={i * 0.3}
            startPos={{
              x: Math.random() * window.innerWidth,
              y: window.innerHeight - 100 + Math.random() * 100,
            }}
          />
        ))}
      </div>

      {/* Glowing orbs background */}
      <GlowingOrb size={200} color="rgba(34, 211, 238, 0.3)" position={{ x: '10%', y: '20%' }} />
      <GlowingOrb size={150} color="rgba(45, 212, 191, 0.3)" position={{ x: '70%', y: '60%' }} />
      <GlowingOrb size={180} color="rgba(94, 234, 212, 0.3)" position={{ x: '80%', y: '10%' }} />

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-lg shadow-lg z-50 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <FaLightbulb className="h-8 w-8 text-cyan-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Lotus Lumina
              </span>
            </motion.div>
            <div className="flex space-x-8">
              {['Services', 'About', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-cyan-100 hover:text-cyan-400 transition-colors relative group"
                  whileHover={{ y: -2 }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
                </motion.a>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-full shadow-lg hover:shadow-cyan-500/50 transition-all"
                style={{
                  boxShadow: '0 0 20px rgba(34, 211, 238, 0.5)',
                }}
              >
                Illuminate Health
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Bioluminescence Theme */}
      <motion.section 
        className="relative min-h-screen flex items-center justify-center pt-16"
        style={{ y: luminaY }}
      >
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'radial-gradient(circle at 30% 40%, rgba(34, 211, 238, 0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 70% 60%, rgba(45, 212, 191, 0.1) 0%, transparent 50%)',
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
              <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Bioluminescent Healing
              </span>
            </h1>
            <p className="text-xl text-cyan-100 mb-8 leading-relaxed">
              Experience healthcare that glows from within. Like nature's own light, 
              we illuminate your path to wellness with radiant, living energy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-full shadow-xl hover:shadow-2xl transition-all flex items-center justify-center space-x-2"
                style={{
                  boxShadow: '0 0 30px rgba(34, 211, 238, 0.6)',
                }}
              >
                <FaMagic className="w-5 h-5" />
                <span>Activate Your Glow</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent text-cyan-400 rounded-full shadow-xl hover:shadow-2xl transition-all border border-cyan-500/50"
              >
                Explore Lumina
              </motion.button>
            </div>

            {/* Glow intensity meter */}
            <div className="mt-12">
              <div className="flex items-center justify-between mb-2">
                <span className="text-cyan-300 text-sm">Bioluminescence Level</span>
                <span className="text-cyan-400 font-mono">{glowIntensity}%</span>
              </div>
              <div className="relative h-2 bg-slate-800/50 rounded-full overflow-hidden">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-500 to-teal-400"
                  style={{ 
                    width: `${glowIntensity}%`,
                    boxShadow: '0 0 20px rgba(34, 211, 238, 0.8)',
                  }}
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Glowing aura effect */}
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{
                boxShadow: [
                  '0 0 60px rgba(34, 211, 238, 0.4)',
                  '0 0 100px rgba(45, 212, 191, 0.6)',
                  '0 0 60px rgba(34, 211, 238, 0.4)',
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            />
            
            <Image
              src="/Lotus Midjourney Flowers/lotus_blog_hero.png"
              alt="Lumina Lotus"
              width={600}
              height={600}
              className="relative z-10 rounded-3xl shadow-2xl"
              style={{
                filter: 'hue-rotate(180deg) saturate(1.5) brightness(1.2)',
              }}
            />
            
            {/* Floating light particles */}
            {Array.from({ length: 8 }, (_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `${50 + 45 * Math.cos((i * Math.PI * 2) / 8)}%`,
                  top: `${50 + 45 * Math.sin((i * Math.PI * 2) / 8)}%`,
                }}
                animate={{
                  scale: [0.5, 1.5, 0.5],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              >
                <div 
                  className="w-4 h-4 bg-cyan-400 rounded-full"
                  style={{
                    boxShadow: '0 0 15px rgba(34, 211, 238, 0.9)',
                  }}
                />
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
            <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent mb-4">
              Your Light Guide
            </h2>
            <p className="text-xl text-cyan-200">Illuminating wellness from within</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-3xl blur-3xl opacity-20"></div>
              <Image
                src="/dr_rosenberg.jpg"
                alt="Dr. Aaron Rosenberg"
                width={500}
                height={600}
                className="relative z-10 rounded-3xl shadow-2xl border border-cyan-500/20"
                style={{
                  boxShadow: '0 0 50px rgba(34, 211, 238, 0.3)',
                }}
              />
              {/* Glowing particles around image */}
              <motion.div
                className="absolute -inset-10"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                  <div
                    key={i}
                    className="absolute w-3 h-3 bg-cyan-400 rounded-full"
                    style={{
                      left: `${50 + 50 * Math.cos((angle * Math.PI) / 180)}%`,
                      top: `${50 + 50 * Math.sin((angle * Math.PI) / 180)}%`,
                      boxShadow: '0 0 10px rgba(34, 211, 238, 0.8)',
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-cyan-100 mb-4">Dr. Aaron Rosenberg</h3>
              <p className="text-lg text-cyan-200 mb-6 leading-relaxed">
                Dr. Rosenberg harnesses the body's natural luminescence - the innate healing 
                light within each patient. His approach activates your internal glow, creating 
                radiant health that shines from the cellular level outward.
              </p>
              <div className="space-y-4">
                {[
                  { icon: FaLightbulb, text: 'Photobiomodulation Therapy', glow: true },
                  { icon: FaSun, text: 'Light-Activated Healing', glow: false },
                  { icon: FaMagic, text: 'Bioluminescent Protocols', glow: true }
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
                      className="p-2 bg-cyan-500/20 rounded-full border border-cyan-500/50"
                      animate={item.glow ? {
                        boxShadow: [
                          '0 0 20px rgba(34, 211, 238, 0.5)',
                          '0 0 40px rgba(34, 211, 238, 0.8)',
                          '0 0 20px rgba(34, 211, 238, 0.5)',
                        ]
                      } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <item.icon className="w-5 h-5 text-cyan-400" />
                    </motion.div>
                    <span className="text-cyan-200">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section with Glowing Cards */}
      <section id="services" className="py-20 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent mb-4">
              Luminous Services
            </h2>
            <p className="text-xl text-cyan-200">Each treatment ignites your inner light</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Glow Primary Care',
                description: 'Activating your natural radiance',
                icon: FaLightbulb,
                image: '/Lotus Midjourney Flowers/lotus_dpc_hero.png',
                color: 'cyan',
                gradient: 'from-cyan-500 to-blue-500'
              },
              {
                title: 'Luminescent Medicine',
                description: 'Healing that lights up your life',
                icon: FaSun,
                image: '/Lotus Midjourney Flowers/lotus-functional-medicine-hero.png',
                color: 'teal',
                gradient: 'from-teal-500 to-cyan-500'
              },
              {
                title: 'Radiant Therapies',
                description: 'Brilliant solutions for wellness',
                icon: FaMagic,
                image: '/Lotus Midjourney Flowers/lotus-ketamine-therapy-hero.png',
                color: 'emerald',
                gradient: 'from-emerald-500 to-teal-500'
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
                {/* Glow effect */}
                <motion.div
                  className={`absolute -inset-1 bg-gradient-to-r ${service.gradient} rounded-3xl blur-lg opacity-50 group-hover:opacity-70 transition-opacity duration-500`}
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />
                
                <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-3xl overflow-hidden border border-cyan-500/20 hover:border-cyan-500/50 transition-all">
                  <div className="h-48 relative overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      style={{
                        filter: 'hue-rotate(180deg) saturate(1.5) brightness(0.9)',
                      }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-60`}></div>
                    
                    {/* Glowing overlay effect */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                      animate={{
                        background: [
                          `radial-gradient(circle at 50% 50%, rgba(34, 211, 238, 0.4) 0%, transparent 50%)`,
                          `radial-gradient(circle at 50% 50%, rgba(34, 211, 238, 0.6) 0%, transparent 70%)`,
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: 'reverse',
                      }}
                    />
                  </div>
                  <div className="p-8">
                    <motion.div 
                      className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}
                      style={{
                        boxShadow: `0 0 30px rgba(34, 211, 238, 0.6)`,
                      }}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.7 }}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-cyan-100 mb-3">{service.title}</h3>
                    <p className="text-cyan-300 mb-4">{service.description}</p>
                    <motion.a
                      href="#"
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium"
                      whileHover={{ x: 5 }}
                    >
                      Illuminate More <FaChevronRight className="ml-2 w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bioluminescent Ocean Visualization */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent mb-4">
              Your Healing Light
            </h2>
            <p className="text-xl text-cyan-200">Dive into luminescent wellness</p>
          </motion.div>

          <motion.div
            className="relative h-96 rounded-3xl overflow-hidden bg-gradient-to-b from-slate-900 to-cyan-950 border border-cyan-500/20"
            whileHover={{ scale: 1.02 }}
            style={{
              boxShadow: '0 0 50px rgba(34, 211, 238, 0.3)',
            }}
          >
            {/* Wave animation with glow */}
            <svg className="absolute inset-0 w-full h-full">
              <motion.path
                d="M0,200 Q100,150 200,200 T400,200 T600,200 T800,200"
                stroke="url(#glow-gradient)"
                strokeWidth="3"
                fill="none"
                animate={{
                  d: [
                    "M0,200 Q100,150 200,200 T400,200 T600,200 T800,200",
                    "M0,200 Q100,250 200,200 T400,200 T600,200 T800,200",
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
                style={{
                  filter: 'drop-shadow(0 0 10px rgba(34, 211, 238, 0.8))',
                }}
              />
              <defs>
                <linearGradient id="glow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#22D3EE" />
                  <stop offset="50%" stopColor="#5EEAD4" />
                  <stop offset="100%" stopColor="#22D3EE" />
                </linearGradient>
              </defs>
            </motion.path>
            
            {/* Glowing particles in water */}
            {Array.from({ length: 20 }, (_, i) => (
              <motion.circle
                key={i}
                r="2"
                fill="#22D3EE"
                animate={{
                  cx: [Math.random() * 800, Math.random() * 800],
                  cy: [300, 100],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
                style={{
                  filter: 'drop-shadow(0 0 5px rgba(34, 211, 238, 0.9))',
                }}
              />
            ))}
          </motion.div>
          
          <div className="relative z-10 flex items-center justify-center mt-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-3xl font-bold text-cyan-100 mb-4">Natural Luminescence</h3>
              <p className="text-lg text-cyan-200 max-w-2xl mx-auto">
                Your body's own healing light activated through advanced therapies
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-teal-600"></div>
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundImage: [
              'radial-gradient(circle at 20% 50%, rgba(34, 211, 238, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(45, 212, 191, 0.3) 0%, transparent 50%)',
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
            Ready to Glow?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-cyan-100 mb-8"
          >
            Activate your inner light and shine with radiant health
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
              className="px-8 py-4 bg-white text-cyan-600 rounded-full shadow-xl hover:shadow-2xl transition-all font-semibold"
              style={{
                boxShadow: '0 0 30px rgba(255, 255, 255, 0.5)',
              }}
            >
              Start Glowing
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent text-white rounded-full border-2 border-white hover:bg-white hover:text-cyan-600 transition-all font-semibold"
            >
              Learn About Lumina
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent mb-4">
              Connect & Glow
            </h2>
            <p className="text-xl text-cyan-200">Let your light reach us</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900/80 backdrop-blur-xl rounded-3xl shadow-xl p-8 md:p-12 border border-cyan-500/20"
            style={{
              boxShadow: '0 0 50px rgba(34, 211, 238, 0.2)',
            }}
          >
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                { icon: FaPhone, label: 'Glow Line', value: '(555) 123-4567' },
                { icon: FaEnvelope, label: 'Light Mail', value: 'lumina@lotusdirect.care' },
                { icon: FaMapMarkerAlt, label: 'Beacon', value: 'Tampa, FL' }
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
                    className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
                    style={{
                      boxShadow: '0 0 30px rgba(34, 211, 238, 0.5)',
                    }}
                    whileHover={{ scale: 1.1 }}
                    animate={{
                      boxShadow: [
                        '0 0 30px rgba(34, 211, 238, 0.5)',
                        '0 0 50px rgba(34, 211, 238, 0.8)',
                        '0 0 30px rgba(34, 211, 238, 0.5)',
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="font-semibold text-cyan-100 mb-1">{item.label}</h3>
                  <p className="text-cyan-300">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-950 text-cyan-300 border-t border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 Lotus Direct Care. Illuminating wellness through bioluminescent healing.</p>
        </div>
      </footer>
    </div>
  )
}