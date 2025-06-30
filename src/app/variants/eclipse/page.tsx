'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { 
  FaMoon, 
  FaHeart, 
  FaUserMd, 
  FaStar,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaChevronRight,
  FaSun,
  FaCircle,
  FaAdjust
} from 'react-icons/fa'

export default function EclipseVariant() {
  const [eclipsePhase, setEclipsePhase] = useState(0)
  const { scrollY } = useScroll()
  const eclipseY = useTransform(scrollY, [0, 500], [0, -100])
  
  useEffect(() => {
    const interval = setInterval(() => {
      setEclipsePhase(prev => (prev + 1) % 360)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  // Eclipse shadow effect
  const EclipseShadow = ({ size, delay }: { size: number; delay: number }) => (
    <motion.div
      className="absolute rounded-full bg-black"
      style={{
        width: size,
        height: size,
        left: '50%',
        top: '50%',
        marginLeft: -size / 2,
        marginTop: -size / 2,
      }}
      animate={{
        x: [-size, size],
      }}
      transition={{
        duration: 20,
        delay,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
      }}
    />
  )

  // Corona effect
  const CoronaRay = ({ angle }: { angle: number }) => (
    <motion.div
      className="absolute w-1 h-40 bg-gradient-to-t from-transparent via-yellow-400 to-transparent"
      style={{
        left: '50%',
        top: '50%',
        transformOrigin: 'center bottom',
        transform: `translateX(-50%) translateY(-100%) rotate(${angle}deg)`,
      }}
      animate={{
        opacity: [0.3, 0.8, 0.3],
        scaleY: [0.8, 1.2, 0.8],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        delay: angle / 360,
      }}
    />
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-slate-950 to-black relative overflow-hidden">
      {/* Star field background */}
      <div className="fixed inset-0">
        {Array.from({ length: 100 }, (_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: Math.random() * 2,
              height: Math.random() * 2,
              opacity: Math.random() * 0.8,
            }}
          />
        ))}
      </div>

      {/* Eclipse animation background */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="relative"
          style={{ y: eclipseY }}
        >
          {/* Sun */}
          <motion.div
            className="relative w-64 h-64 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          >
            {/* Corona rays */}
            {Array.from({ length: 12 }, (_, i) => (
              <CoronaRay key={i} angle={i * 30} />
            ))}
          </motion.div>
          
          {/* Moon shadow */}
          <EclipseShadow size={260} delay={0} />
        </motion.div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-950/80 backdrop-blur-lg shadow-lg z-50 border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <FaAdjust className="h-8 w-8 text-yellow-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-gray-400 bg-clip-text text-transparent">
                Lotus Eclipse
              </span>
            </motion.div>
            <div className="flex space-x-8">
              {['Services', 'About', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-yellow-400 transition-colors relative group"
                  whileHover={{ y: -2 }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-gray-400 transition-all group-hover:w-full"></span>
                </motion.a>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-gray-600 text-white rounded-full shadow-lg hover:shadow-yellow-500/25 transition-all"
              >
                Find Balance
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Eclipse Theme */}
      <motion.section 
        className="relative min-h-screen flex items-center justify-center pt-16"
      >
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'radial-gradient(circle at 30% 40%, rgba(250, 204, 21, 0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 70% 60%, rgba(107, 114, 128, 0.1) 0%, transparent 50%)',
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
              <span className="bg-gradient-to-r from-yellow-400 to-gray-400 bg-clip-text text-transparent">
                Balance of Light & Shadow
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Experience healthcare that embraces both the light and shadow of wellness. 
              Find perfect balance in your health journey through our eclipse approach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-gray-600 text-white rounded-full shadow-xl hover:shadow-yellow-500/25 transition-all flex items-center justify-center space-x-2"
              >
                <FaMoon className="w-5 h-5" />
                <span>Embrace Duality</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent text-yellow-400 rounded-full shadow-xl hover:shadow-yellow-500/25 transition-all border border-yellow-500/50"
              >
                Explore Eclipse
              </motion.button>
            </div>

            {/* Eclipse phase indicator */}
            <div className="mt-12 flex items-center space-x-4">
              <div className="relative w-32 h-32">
                <motion.div
                  className="absolute inset-0 bg-yellow-400 rounded-full"
                  animate={{
                    clipPath: `circle(50% at ${50 + 30 * Math.cos((eclipsePhase * Math.PI) / 180)}% 50%)`,
                  }}
                />
                <div className="absolute inset-0 bg-gray-800 rounded-full"></div>
              </div>
              <div>
                <p className="text-gray-400">Current Phase</p>
                <p className="text-xl text-yellow-400 font-semibold">
                  {eclipsePhase < 90 ? 'Waxing' : eclipsePhase < 180 ? 'Total' : eclipsePhase < 270 ? 'Waning' : 'New'}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Eclipse effect overlay */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-900 to-transparent"
              animate={{
                x: [-200, 200],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              style={{
                clipPath: 'circle(50%)',
              }}
            />
            
            <Image
              src="/Lotus Midjourney Flowers/lotus_services_hero.png"
              alt="Eclipse Lotus"
              width={600}
              height={600}
              className="relative z-10 rounded-3xl shadow-2xl"
              style={{
                filter: 'contrast(1.2) brightness(0.9)',
              }}
            />
            
            {/* Light and shadow particles */}
            {Array.from({ length: 8 }, (_, i) => (
              <motion.div
                key={i}
                className={`absolute w-3 h-3 rounded-full ${
                  i % 2 === 0 ? 'bg-yellow-400' : 'bg-gray-600'
                }`}
                style={{
                  left: `${50 + 45 * Math.cos((i * Math.PI * 2) / 8)}%`,
                  top: `${50 + 45 * Math.sin((i * Math.PI * 2) / 8)}%`,
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
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
      <section className="py-20 relative bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-gray-400 bg-clip-text text-transparent mb-4">
              Master of Balance
            </h2>
            <p className="text-xl text-gray-400">Navigating light and shadow in healthcare</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-gray-600 rounded-3xl blur-3xl opacity-20"></div>
              <Image
                src="/dr_rosenberg.jpg"
                alt="Dr. Aaron Rosenberg"
                width={500}
                height={600}
                className="relative z-10 rounded-3xl shadow-2xl border border-gray-800"
              />
              {/* Balance symbol */}
              <motion.div
                className="absolute -bottom-10 left-1/2 transform -translate-x-1/2"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                <FaAdjust className="w-24 h-24 text-yellow-400/30" />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-white mb-4">Dr. Aaron Rosenberg</h3>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Dr. Rosenberg understands that true wellness comes from embracing both the bright 
                moments and the shadows. His balanced approach to healthcare acknowledges all 
                aspects of your health journey, creating harmony between body and mind.
              </p>
              <div className="space-y-4">
                {[
                  { icon: FaSun, text: 'Illuminating Diagnostics', light: true },
                  { icon: FaMoon, text: 'Shadow Work Integration', light: false },
                  { icon: FaAdjust, text: 'Balanced Treatment Plans', light: true }
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
                      className={`p-2 ${
                        item.light ? 'bg-yellow-500/20' : 'bg-gray-600/20'
                      } rounded-full border ${
                        item.light ? 'border-yellow-500/50' : 'border-gray-600/50'
                      }`}
                      animate={{
                        boxShadow: item.light
                          ? ['0 0 20px rgba(250, 204, 21, 0.5)', '0 0 40px rgba(250, 204, 21, 0.8)', '0 0 20px rgba(250, 204, 21, 0.5)']
                          : ['0 0 20px rgba(107, 114, 128, 0.5)', '0 0 40px rgba(107, 114, 128, 0.8)', '0 0 20px rgba(107, 114, 128, 0.5)']
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <item.icon className={`w-5 h-5 ${item.light ? 'text-yellow-400' : 'text-gray-400'}`} />
                    </motion.div>
                    <span className="text-gray-300">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section with Eclipse Cards */}
      <section id="services" className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-gray-400 bg-clip-text text-transparent mb-4">
              Dual Aspect Services
            </h2>
            <p className="text-xl text-gray-400">Healthcare that honors all phases of wellness</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Solar Medicine',
                description: 'Bright, energizing treatments',
                icon: FaSun,
                image: '/Lotus Midjourney Flowers/lotus_dpc_hero.png',
                gradient: 'from-yellow-500 to-orange-500',
                shadow: false
              },
              {
                title: 'Lunar Healing',
                description: 'Gentle, restorative therapies',
                icon: FaMoon,
                image: '/Lotus Midjourney Flowers/lotus-functional-medicine-hero.png',
                gradient: 'from-gray-600 to-slate-700',
                shadow: true
              },
              {
                title: 'Eclipse Integration',
                description: 'Perfect balance of both worlds',
                icon: FaAdjust,
                image: '/Lotus Midjourney Flowers/lotus-ketamine-therapy-hero.png',
                gradient: 'from-yellow-500 to-gray-600',
                shadow: false
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
                {/* Eclipse shadow effect */}
                <motion.div
                  className={`absolute -inset-1 bg-gradient-to-r ${service.gradient} rounded-3xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                />
                
                <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-3xl overflow-hidden border border-gray-800 hover:border-yellow-500/50 transition-all">
                  <div className="h-48 relative overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      style={{
                        filter: service.shadow ? 'brightness(0.7) grayscale(0.3)' : 'brightness(1.1) saturate(1.2)',
                      }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-60`}></div>
                    
                    {/* Eclipse transition effect */}
                    <motion.div
                      className="absolute inset-0 bg-black"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 1 }}
                      style={{
                        clipPath: 'circle(70% at center)',
                      }}
                    />
                  </div>
                  <div className="p-8">
                    <motion.div 
                      className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-full flex items-center justify-center mb-4 shadow-lg relative overflow-hidden`}
                      whileHover={{ rotate: 180 }}
                      transition={{ duration: 0.5 }}
                    >
                      <service.icon className="w-8 h-8 text-white z-10" />
                      {/* Half shadow effect */}
                      <div className="absolute inset-0 bg-black opacity-50" style={{ clipPath: 'polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%)' }} />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-400 mb-4">{service.description}</p>
                    <motion.a
                      href="#"
                      className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-medium"
                      whileHover={{ x: 5 }}
                    >
                      Find Balance <FaChevronRight className="ml-2 w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eclipse Cycle Visualization */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-gray-400 bg-clip-text text-transparent mb-4">
              Your Wellness Cycle
            </h2>
            <p className="text-xl text-gray-400">Every phase has its purpose</p>
          </motion.div>

          <motion.div
            className="relative h-96 rounded-3xl overflow-hidden bg-gray-900/50 backdrop-blur-xl border border-gray-800"
            whileHover={{ scale: 1.02 }}
          >
            {/* Eclipse phases display */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-5 gap-8">
                {['New', 'Waxing', 'Full', 'Waning', 'Eclipse'].map((phase, index) => (
                  <motion.div
                    key={phase}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="relative w-20 h-20 mx-auto mb-4">
                      <div className="absolute inset-0 bg-yellow-400 rounded-full"></div>
                      <motion.div
                        className="absolute inset-0 bg-gray-800 rounded-full"
                        style={{
                          clipPath: `circle(50% at ${
                            index === 0 ? '150%' :
                            index === 1 ? '75%' :
                            index === 2 ? '-50%' :
                            index === 3 ? '25%' :
                            '50%'
                          } 50%)`,
                        }}
                      />
                    </div>
                    <p className="text-gray-300">{phase}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="relative z-10 flex items-end justify-center h-full pb-12">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h3 className="text-3xl font-bold text-white mb-4">Embrace Every Phase</h3>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                  Your health journey moves through cycles, each bringing its own wisdom
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-gray-700"></div>
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundImage: [
              'radial-gradient(circle at 20% 50%, rgba(250, 204, 21, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(107, 114, 128, 0.3) 0%, transparent 50%)',
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
            Ready to Find Your Balance?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-yellow-100 mb-8"
          >
            Embrace both light and shadow in your wellness journey
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
              Begin Eclipse Journey
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent text-white rounded-full border-2 border-white hover:bg-white hover:text-gray-800 transition-all font-semibold"
            >
              Learn About Balance
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
            <h2 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-gray-400 bg-clip-text text-transparent mb-4">
              Connect in Balance
            </h2>
            <p className="text-xl text-gray-400">Reach out from light or shadow</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-900/80 backdrop-blur-xl rounded-3xl shadow-xl p-8 md:p-12 border border-gray-800"
          >
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                { icon: FaPhone, label: 'Eclipse Line', value: '(555) 123-4567' },
                { icon: FaEnvelope, label: 'Balance Mail', value: 'eclipse@lotusdirect.care' },
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
                    className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-gray-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg relative overflow-hidden"
                    whileHover={{ scale: 1.1 }}
                  >
                    <item.icon className="w-8 h-8 text-white z-10" />
                    <motion.div
                      className="absolute inset-0 bg-black"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      style={{ clipPath: 'circle(50%)' }}
                    />
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
          <p>&copy; 2025 Lotus Direct Care. Balancing light and shadow in healthcare.</p>
        </div>
      </footer>
    </div>
  )
}