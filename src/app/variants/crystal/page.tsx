'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { 
  FaGem, 
  FaHeart, 
  FaUserMd, 
  FaStar,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaChevronRight,
  FaMagic,
  FaCube,
  FaRegGem
} from 'react-icons/fa'

export default function CrystalVariant() {
  const [crystalRotation, setCrystalRotation] = useState(0)
  const { scrollY } = useScroll()
  const prismY = useTransform(scrollY, [0, 500], [0, -50])
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCrystalRotation(prev => (prev + 1) % 360)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  // Prismatic light effect
  const PrismLight = ({ delay, color }: { delay: number; color: string }) => (
    <motion.div
      className={`absolute w-1 h-64 ${color} opacity-30`}
      style={{
        filter: 'blur(2px)',
        background: `linear-gradient(to bottom, transparent, ${color}, transparent)`,
      }}
      animate={{
        rotate: [0, 360],
        x: [-100, 100],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        delay,
        ease: 'linear',
      }}
    />
  )

  // Crystal facet component
  const CrystalFacet = ({ size, position }: { size: number; position: { x: string; y: string } }) => (
    <motion.div
      className="absolute"
      style={{ left: position.x, top: position.y }}
      animate={{
        rotate: [0, 180, 360],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      <div
        className={`w-${size} h-${size} bg-gradient-to-br from-purple-300 via-pink-300 to-blue-300 opacity-20`}
        style={{
          clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
          backdropFilter: 'blur(10px)',
        }}
      />
    </motion.div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-950 via-indigo-950 to-pink-950 relative overflow-hidden">
      {/* Crystal particles background */}
      <div className="fixed inset-0 pointer-events-none">
        {Array.from({ length: 30 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [0.5, 1, 0.5],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          >
            <FaGem className="w-4 h-4 text-purple-300" />
          </motion.div>
        ))}
      </div>

      {/* Prismatic light rays */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-full h-full">
          <PrismLight delay={0} color="bg-purple-400" />
          <PrismLight delay={1} color="bg-pink-400" />
          <PrismLight delay={2} color="bg-blue-400" />
          <PrismLight delay={3} color="bg-indigo-400" />
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-purple-950/80 backdrop-blur-lg shadow-lg z-50 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <FaGem className="h-8 w-8 text-purple-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Lotus Crystal
              </span>
            </motion.div>
            <div className="flex space-x-8">
              {['Services', 'About', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-purple-100 hover:text-purple-400 transition-colors relative group"
                  whileHover={{ y: -2 }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all group-hover:w-full"></span>
                </motion.a>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-lg hover:shadow-purple-500/25 transition-all"
              >
                Crystallize Health
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Crystal Theme */}
      <motion.section 
        className="relative min-h-screen flex items-center justify-center pt-16"
        style={{ y: prismY }}
      >
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'radial-gradient(circle at 30% 40%, rgba(147, 51, 234, 0.2) 0%, transparent 50%)',
                'radial-gradient(circle at 70% 60%, rgba(236, 72, 153, 0.2) 0%, transparent 50%)',
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
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Crystal Clear Wellness
              </span>
            </h1>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Experience healthcare that reflects your inner brilliance. 
              Like a perfectly cut crystal, we help you shine from every angle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-xl hover:shadow-purple-500/25 transition-all flex items-center justify-center space-x-2"
              >
                <FaRegGem className="w-5 h-5" />
                <span>Discover Your Facets</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent text-purple-400 rounded-full shadow-xl hover:shadow-purple-500/25 transition-all border border-purple-500/50 backdrop-blur-sm"
              >
                Explore Crystal Care
              </motion.button>
            </div>

            {/* Crystal formation indicator */}
            <div className="mt-12 flex items-center space-x-4">
              <div className="flex space-x-2">
                {[0, 1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    className="w-3 h-3 bg-gradient-to-br from-purple-400 to-pink-400"
                    style={{
                      clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                    }}
                    animate={{
                      rotate: [0, 180, 360],
                      scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </div>
              <span className="text-purple-300">Crystallizing</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Crystal facets decoration */}
            <CrystalFacet size={32} position={{ x: '10%', y: '10%' }} />
            <CrystalFacet size={24} position={{ x: '80%', y: '20%' }} />
            <CrystalFacet size={28} position={{ x: '15%', y: '70%' }} />
            <CrystalFacet size={20} position={{ x: '75%', y: '75%' }} />
            
            {/* Prismatic glow */}
            <motion.div
              className="absolute inset-0 rounded-3xl"
              style={{
                background: `conic-gradient(from ${crystalRotation}deg, purple, pink, blue, indigo, purple)`,
                filter: 'blur(60px)',
                opacity: 0.3,
              }}
            />
            
            <Image
              src="/Lotus Midjourney Flowers/lotus_pricing_hero.png"
              alt="Crystal Lotus"
              width={600}
              height={600}
              className="relative z-10 rounded-3xl shadow-2xl"
              style={{
                filter: 'hue-rotate(270deg) saturate(1.5) brightness(1.2)',
              }}
            />
            
            {/* Floating crystal shards */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `${50 + 45 * Math.cos((i * Math.PI * 2) / 6)}%`,
                  top: `${50 + 45 * Math.sin((i * Math.PI * 2) / 6)}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              >
                <div className="w-6 h-6 bg-gradient-to-br from-purple-400 to-pink-400 opacity-70"
                  style={{
                    clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
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
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-4">
              The Crystal Healer
            </h2>
            <p className="text-xl text-purple-100">Reflecting your best self through precision care</p>
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
              {/* Crystal decoration */}
              <motion.div
                className="absolute -top-10 -left-10"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                <FaCube className="w-24 h-24 text-purple-400/20" />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-purple-100 mb-4">Dr. Aaron Rosenberg</h3>
              <p className="text-lg text-purple-200 mb-6 leading-relaxed">
                Like a master gem cutter revealing the beauty within each crystal, Dr. Rosenberg 
                uses precision medicine to unveil your body's natural healing brilliance. His 
                multifaceted approach ensures every aspect of your health sparkles.
              </p>
              <div className="space-y-4">
                {[
                  { icon: FaGem, text: 'Precision-Cut Treatment Plans', sparkle: true },
                  { icon: FaMagic, text: 'Crystal-Clear Diagnostics', sparkle: false },
                  { icon: FaStar, text: 'Multifaceted Wellness Approach', sparkle: true }
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
                      className="p-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg border border-purple-500/50 backdrop-blur-sm"
                      animate={item.sparkle ? {
                        boxShadow: [
                          '0 0 20px rgba(147, 51, 234, 0.5)',
                          '0 0 40px rgba(236, 72, 153, 0.8)',
                          '0 0 20px rgba(147, 51, 234, 0.5)',
                        ]
                      } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
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

      {/* Services Section with Crystal Cards */}
      <section id="services" className="py-20 bg-gradient-to-b from-indigo-950 to-purple-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-4">
              Facets of Care
            </h2>
            <p className="text-xl text-purple-100">Each service reflects a different dimension of wellness</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Clarity Medicine',
                description: 'Crystal-clear path to health',
                icon: FaGem,
                image: '/Lotus Midjourney Flowers/lotus_dpc_hero.png',
                gradient: 'from-purple-500 to-indigo-500',
                facets: 6
              },
              {
                title: 'Prism Therapy',
                description: 'Refracting wellness into all aspects',
                icon: FaCube,
                image: '/Lotus Midjourney Flowers/lotus-functional-medicine-hero.png',
                gradient: 'from-pink-500 to-purple-500',
                facets: 8
              },
              {
                title: 'Diamond Care',
                description: 'Premium brilliance in healing',
                icon: FaRegGem,
                image: '/Lotus Midjourney Flowers/lotus-ketamine-therapy-hero.png',
                gradient: 'from-blue-500 to-purple-500',
                facets: 10
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
                {/* Crystal shimmer effect */}
                <motion.div
                  className={`absolute -inset-1 bg-gradient-to-r ${service.gradient} rounded-3xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />
                
                <div className="relative bg-gradient-to-b from-purple-900/80 to-indigo-900/80 backdrop-blur-xl rounded-3xl overflow-hidden border border-purple-500/20 hover:border-purple-500/50 transition-all">
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
                    
                    {/* Crystal facet overlay */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity">
                      <svg className="w-full h-full" viewBox="0 0 100 100">
                        {Array.from({ length: service.facets }, (_, i) => {
                          const angle = (i * 360) / service.facets
                          const x = 50 + 40 * Math.cos((angle * Math.PI) / 180)
                          const y = 50 + 40 * Math.sin((angle * Math.PI) / 180)
                          return <line key={i} x1="50" y1="50" x2={x} y2={y} stroke="white" strokeWidth="0.5" opacity="0.5" />
                        })}
                      </svg>
                    </div>
                  </div>
                  <div className="p-8">
                    <motion.div 
                      className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}
                      style={{
                        clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
                      }}
                      whileHover={{ rotate: 180, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-purple-100 mb-3">{service.title}</h3>
                    <p className="text-purple-200 mb-4">{service.description}</p>
                    <motion.a
                      href="#"
                      className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium"
                      whileHover={{ x: 5 }}
                    >
                      Polish Your Health <FaChevronRight className="ml-2 w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Crystal Formation Animation */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-4">
              Your Wellness Crystal
            </h2>
            <p className="text-xl text-purple-100">Watch your health crystallize into perfection</p>
          </motion.div>

          <motion.div
            className="relative h-96 rounded-3xl overflow-hidden bg-gradient-to-b from-purple-900/50 to-indigo-900/50 backdrop-blur-xl border border-purple-500/20"
            whileHover={{ scale: 1.02 }}
          >
            {/* Central crystal formation */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="relative"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                {/* Main crystal */}
                <motion.div
                  className="w-48 h-48 bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400"
                  style={{
                    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                  }}
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                
                {/* Orbiting smaller crystals */}
                {[0, 120, 240].map((angle, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-16 h-16 bg-gradient-to-br from-purple-300 to-pink-300"
                    style={{
                      clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                      left: '50%',
                      top: '50%',
                      marginLeft: '-32px',
                      marginTop: '-32px',
                    }}
                    animate={{
                      x: Math.cos((angle * Math.PI) / 180) * 100,
                      y: Math.sin((angle * Math.PI) / 180) * 100,
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                ))}
              </motion.div>
            </div>
            
            <div className="relative z-10 flex items-center justify-center h-full">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h3 className="text-3xl font-bold text-white mb-4">Crystalline Clarity</h3>
                <p className="text-lg text-purple-100 max-w-2xl mx-auto">
                  Your health journey forms a unique crystal, beautiful and strong
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
            Ready to Crystallize Your Health?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-purple-100 mb-8"
          >
            Begin your transformation into your most brilliant self
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
              Start Crystallization
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent text-white rounded-full border-2 border-white hover:bg-white hover:text-purple-600 transition-all font-semibold"
            >
              Explore Crystal Healing
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-purple-950 to-indigo-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-4">
              Crystal Connection
            </h2>
            <p className="text-xl text-purple-100">Reflect with us today</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-900/80 to-pink-900/80 backdrop-blur-xl rounded-3xl shadow-xl p-8 md:p-12 border border-purple-500/20"
          >
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                { icon: FaPhone, label: 'Crystal Line', value: '(555) 123-4567' },
                { icon: FaEnvelope, label: 'Prism Portal', value: 'crystal@lotusdirect.care' },
                { icon: FaMapMarkerAlt, label: 'Gem Location', value: 'Tampa, FL' }
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
                    style={{
                      clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 180,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="font-semibold text-purple-100 mb-1">{item.label}</h3>
                  <p className="text-purple-200">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-indigo-950 text-purple-100 border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 Lotus Direct Care. Crystallizing wellness, one facet at a time.</p>
        </div>
      </footer>
    </div>
  )
}