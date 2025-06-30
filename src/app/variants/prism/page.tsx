'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { 
  FaPalette, 
  FaHeart, 
  FaUserMd, 
  FaStar,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaChevronRight,
  FaAdjust,
  FaLightbulb,
  FaGem
} from 'react-icons/fa'

export default function PrismVariant() {
  const [lightAngle, setLightAngle] = useState(0)
  const { scrollY } = useScroll()
  const prismRotation = useTransform(scrollY, [0, 1000], [0, 180])
  
  useEffect(() => {
    const interval = setInterval(() => {
      setLightAngle(prev => (prev + 1) % 360)
    }, 30)
    return () => clearInterval(interval)
  }, [])

  // Rainbow spectrum colors
  const spectrumColors = [
    '#FF0000', // Red
    '#FF7F00', // Orange
    '#FFFF00', // Yellow
    '#00FF00', // Green
    '#0000FF', // Blue
    '#4B0082', // Indigo
    '#9400D3', // Violet
  ]

  // Light beam component
  const LightBeam = ({ color, index, total }: { color: string; index: number; total: number }) => {
    const angle = (index / total) * 60 - 30 // Spread from -30 to 30 degrees
    return (
      <motion.div
        className="absolute w-2 h-96 origin-top"
        style={{
          background: `linear-gradient(to bottom, ${color}88, transparent)`,
          left: '50%',
          top: '50%',
          transform: `translateX(-50%) rotate(${angle}deg)`,
          filter: 'blur(4px)',
        }}
        animate={{
          opacity: [0.3, 0.8, 0.3],
          scaleY: [0.8, 1.2, 0.8],
        }}
        transition={{
          duration: 3,
          delay: index * 0.1,
          repeat: Infinity,
        }}
      />
    )
  }

  // Prism shape
  const PrismShape = () => (
    <motion.div
      className="relative w-64 h-64"
      style={{
        rotate: prismRotation,
      }}
    >
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <defs>
          <linearGradient id="prism-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            {spectrumColors.map((color, i) => (
              <stop key={i} offset={`${(i / spectrumColors.length) * 100}%`} stopColor={color} stopOpacity="0.5" />
            ))}
          </linearGradient>
        </defs>
        <path
          d="M100,20 L180,150 L20,150 Z"
          fill="url(#prism-gradient)"
          stroke="white"
          strokeWidth="2"
        />
        <path
          d="M100,20 L180,150 L100,180 Z"
          fill="rgba(255,255,255,0.2)"
          stroke="white"
          strokeWidth="1"
        />
        <path
          d="M100,20 L20,150 L100,180 Z"
          fill="rgba(255,255,255,0.1)"
          stroke="white"
          strokeWidth="1"
        />
      </svg>
    </motion.div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-slate-950 to-black relative overflow-hidden">
      {/* Rainbow light particles */}
      <div className="fixed inset-0 pointer-events-none">
        {Array.from({ length: 50 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: spectrumColors[i % spectrumColors.length],
              boxShadow: `0 0 10px ${spectrumColors[i % spectrumColors.length]}`,
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
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-950/80 backdrop-blur-lg shadow-lg z-50 border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <FaAdjust className="h-8 w-8 text-transparent bg-gradient-to-r from-red-500 via-yellow-500 to-purple-500 bg-clip-text" />
              <span className="text-2xl font-bold bg-gradient-to-r from-red-500 via-yellow-500 to-purple-500 bg-clip-text text-transparent">
                Lotus Prism
              </span>
            </motion.div>
            <div className="flex space-x-8">
              {['Services', 'About', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-white transition-colors relative group"
                  whileHover={{ y: -2 }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 via-yellow-500 to-purple-500 transition-all group-hover:w-full"></span>
                </motion.a>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-gradient-to-r from-red-500 via-yellow-500 to-purple-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                Refract Light
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Prism Theme */}
      <motion.section 
        className="relative min-h-screen flex items-center justify-center pt-16"
      >
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'radial-gradient(circle at 30% 40%, rgba(255, 0, 0, 0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 50% 50%, rgba(0, 255, 0, 0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 70% 60%, rgba(0, 0, 255, 0.1) 0%, transparent 50%)',
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
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-400 via-yellow-400 to-purple-400 bg-clip-text text-transparent">
                Spectrum of Wellness
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Experience healthcare that reveals every color of your health. 
              Like light through a prism, we illuminate all aspects of your wellness journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-red-500 via-yellow-500 to-purple-500 text-white rounded-full shadow-xl hover:shadow-2xl transition-all flex items-center justify-center space-x-2"
              >
                <FaPalette className="w-5 h-5" />
                <span>Discover Your Spectrum</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent text-white rounded-full shadow-xl hover:shadow-2xl transition-all border border-gray-500"
              >
                Explore Colors
              </motion.button>
            </div>

            {/* Color wheel indicator */}
            <div className="mt-12 flex items-center space-x-4">
              <div className="flex space-x-2">
                {spectrumColors.map((color, i) => (
                  <motion.div
                    key={i}
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: color }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      delay: i * 0.1,
                      repeat: Infinity,
                    }}
                  />
                ))}
              </div>
              <span className="text-gray-400">Full spectrum care</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex items-center justify-center"
          >
            {/* Light beam through prism */}
            <div className="absolute">
              {/* White light beam */}
              <motion.div
                className="absolute w-4 h-96 bg-gradient-to-b from-white to-transparent"
                style={{
                  left: '50%',
                  bottom: '60%',
                  transform: 'translateX(-50%) rotate(180deg)',
                  filter: 'blur(2px)',
                }}
              />
              
              {/* Refracted rainbow beams */}
              <div className="absolute" style={{ left: '50%', top: '60%', transform: 'translateX(-50%)' }}>
                {spectrumColors.map((color, i) => (
                  <LightBeam key={i} color={color} index={i} total={spectrumColors.length} />
                ))}
              </div>
            </div>
            
            {/* Prism */}
            <PrismShape />
            
            {/* Lotus image with rainbow effect */}
            <motion.div
              className="absolute opacity-50"
              animate={{
                filter: [
                  'hue-rotate(0deg)',
                  'hue-rotate(360deg)',
                ],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <Image
                src="/Lotus Midjourney Flowers/lotus_pricing_hero.png"
                alt="Prism Lotus"
                width={400}
                height={400}
                className="rounded-full"
                style={{
                  mixBlendMode: 'screen',
                }}
              />
            </motion.div>
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
            <h2 className="text-4xl font-bold bg-gradient-to-r from-red-400 via-yellow-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Your Spectrum Guide
            </h2>
            <p className="text-xl text-gray-300">Revealing every dimension of health</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-yellow-500 to-purple-500 rounded-3xl blur-3xl opacity-20"></div>
              <Image
                src="/dr_rosenberg.jpg"
                alt="Dr. Aaron Rosenberg"
                width={500}
                height={600}
                className="relative z-10 rounded-3xl shadow-2xl border border-gray-800"
              />
              {/* Rainbow aura effect */}
              <motion.div
                className="absolute -inset-4"
                animate={{
                  background: [
                    'conic-gradient(from 0deg, red, orange, yellow, green, blue, indigo, violet, red)',
                    'conic-gradient(from 360deg, red, orange, yellow, green, blue, indigo, violet, red)',
                  ],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{
                  borderRadius: '1.5rem',
                  opacity: 0.2,
                  filter: 'blur(20px)',
                }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-white mb-4">Dr. Aaron Rosenberg</h3>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Like a prism revealing the hidden spectrum of light, Dr. Rosenberg uncovers 
                the full spectrum of your health potential. His comprehensive approach examines 
                every wavelength of wellness, creating a complete picture of your health.
              </p>
              <div className="space-y-4">
                {[
                  { icon: FaAdjust, text: 'Full-Spectrum Diagnostics', color: 'from-red-500 to-purple-500' },
                  { icon: FaLightbulb, text: 'Illuminating Health Insights', color: 'from-yellow-500 to-orange-500' },
                  { icon: FaPalette, text: 'Colorful Treatment Options', color: 'from-blue-500 to-green-500' }
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
                      className={`p-2 bg-gradient-to-r ${item.color} rounded-full`}
                      whileHover={{ scale: 1.1, rotate: 360 }}
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

      {/* Services Section with Spectrum Cards */}
      <section id="services" className="py-20 bg-gray-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-red-400 via-yellow-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Spectrum Services
            </h2>
            <p className="text-xl text-gray-300">Every color of care you need</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Red Vitality',
                description: 'Energizing primary care',
                icon: FaHeart,
                image: '/Lotus Midjourney Flowers/lotus_dpc_hero.png',
                color: '#FF0000',
                gradient: 'from-red-600 to-pink-600'
              },
              {
                title: 'Green Balance',
                description: 'Natural healing harmony',
                icon: FaLeaf,
                image: '/Lotus Midjourney Flowers/lotus-functional-medicine-hero.png',
                color: '#00FF00',
                gradient: 'from-green-600 to-emerald-600'
              },
              {
                title: 'Violet Transform',
                description: 'Advanced therapeutic spectrum',
                icon: FaStar,
                image: '/Lotus Midjourney Flowers/lotus-ketamine-therapy-hero.png',
                color: '#9400D3',
                gradient: 'from-purple-600 to-indigo-600'
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
                {/* Prismatic shimmer effect */}
                <motion.div
                  className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `conic-gradient(from ${lightAngle}deg, ${spectrumColors.join(', ')})`,
                    filter: 'blur(10px)',
                  }}
                />
                
                <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-3xl overflow-hidden border border-gray-800 hover:border-gray-600 transition-all">
                  <div className="h-48 relative overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      style={{
                        filter: `hue-rotate(${index * 120}deg) saturate(1.5)`,
                      }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-60`}></div>
                    
                    {/* Prism light effect on hover */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{
                        background: `linear-gradient(135deg, transparent 40%, ${service.color}44 50%, transparent 60%)`,
                      }}
                      animate={{
                        backgroundPosition: ['200% 200%', '-200% -200%'],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    />
                  </div>
                  <div className="p-8">
                    <motion.div 
                      className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}
                      style={{
                        boxShadow: `0 0 30px ${service.color}66`,
                      }}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.7 }}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-400 mb-4">{service.description}</p>
                    <motion.a
                      href="#"
                      className="inline-flex items-center font-medium"
                      style={{ color: service.color }}
                      whileHover={{ x: 5 }}
                    >
                      Explore Spectrum <FaChevronRight className="ml-2 w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Spectrum Visualization */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-red-400 via-yellow-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Your Health Rainbow
            </h2>
            <p className="text-xl text-gray-300">See your wellness in full color</p>
          </motion.div>

          <motion.div
            className="relative h-96 rounded-3xl overflow-hidden bg-gray-900/50 backdrop-blur-xl border border-gray-800"
            whileHover={{ scale: 1.02 }}
          >
            {/* Rainbow spectrum visualization */}
            <div className="absolute inset-0 flex">
              {spectrumColors.map((color, i) => (
                <motion.div
                  key={i}
                  className="flex-1 h-full"
                  style={{ backgroundColor: color }}
                  animate={{
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.2,
                    repeat: Infinity,
                  }}
                />
              ))}
            </div>
            
            <div className="relative z-10 flex items-center justify-center h-full bg-black/50">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h3 className="text-3xl font-bold text-white mb-4">Complete Spectrum Analysis</h3>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  Every aspect of your health illuminated in brilliant color
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-yellow-600 to-purple-600"></div>
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
            Ready to See Your True Colors?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/90 mb-8"
          >
            Discover the full spectrum of your health potential
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
              className="px-8 py-4 bg-white text-gray-800 rounded-full shadow-xl hover:shadow-2xl transition-all font-semibold"
            >
              Reveal Your Spectrum
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent text-white rounded-full border-2 border-white hover:bg-white hover:text-gray-800 transition-all font-semibold"
            >
              Learn About Prism Care
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-red-400 via-yellow-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Connect Through the Spectrum
            </h2>
            <p className="text-xl text-gray-300">Every wavelength of communication</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-900/80 backdrop-blur-xl rounded-3xl shadow-xl p-8 md:p-12 border border-gray-800"
          >
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                { icon: FaPhone, label: 'Spectrum Line', value: '(555) 123-4567', color: '#FF0000' },
                { icon: FaEnvelope, label: 'Rainbow Mail', value: 'prism@lotusdirect.care', color: '#00FF00' },
                { icon: FaMapMarkerAlt, label: 'Light Source', value: 'Tampa, FL', color: '#0000FF' }
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
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${item.color}, ${spectrumColors[(index + 3) % spectrumColors.length]})`,
                      boxShadow: `0 0 30px ${item.color}66`,
                    }}
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
      <footer className="py-8 bg-black text-gray-500 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 Lotus Direct Care. Revealing the full spectrum of wellness.</p>
        </div>
      </footer>
    </div>
  )
}