'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { 
  FaPray, 
  FaHeart, 
  FaUserMd, 
  FaStar,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaChevronRight,
  FaOm,
  FaDharmachakra,
  FaBalanceScale
} from 'react-icons/fa'

export default function SanctuaryVariant() {
  const [candleFlicker, setCandleFlicker] = useState(true)
  const { scrollY } = useScroll()
  const templeY = useTransform(scrollY, [0, 500], [0, -50])
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCandleFlicker(prev => !prev)
    }, 200)
    return () => clearInterval(interval)
  }, [])

  // Incense smoke effect
  const IncenseSmoke = ({ delay }: { delay: number }) => (
    <motion.div
      className="absolute w-0.5 h-32 bg-gradient-to-t from-amber-300/50 to-transparent"
      initial={{ opacity: 0, y: 0 }}
      animate={{
        opacity: [0, 0.6, 0],
        y: -200,
        x: [0, 10, -10, 5, -5, 0],
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: 'easeOut',
      }}
    />
  )

  // Sacred geometry pattern
  const SacredGeometry = ({ size }: { size: number }) => (
    <svg width={size} height={size} className="absolute opacity-10">
      <motion.g
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
      >
        {[0, 60, 120, 180, 240, 300].map((angle) => (
          <circle
            key={angle}
            cx={size / 2}
            cy={size / 2}
            r={size / 3}
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            transform={`rotate(${angle} ${size / 2} ${size / 2})`}
          />
        ))}
        <circle cx={size / 2} cy={size / 2} r={size / 4} fill="none" stroke="currentColor" strokeWidth="0.5" />
      </motion.g>
    </svg>
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-yellow-50 relative overflow-hidden">
      {/* Sacred geometry patterns */}
      <div className="fixed inset-0 pointer-events-none text-amber-600">
        <div className="absolute top-20 left-20">
          <SacredGeometry size={200} />
        </div>
        <div className="absolute bottom-20 right-20">
          <SacredGeometry size={150} />
        </div>
      </div>

      {/* Floating light particles */}
      <div className="fixed inset-0 pointer-events-none">
        {Array.from({ length: 20 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-amber-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -40, -20],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-amber-50/90 backdrop-blur-lg shadow-sm z-50 border-b border-amber-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <FaOm className="h-8 w-8 text-amber-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Lotus Sanctuary
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
                className="px-4 py-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                Enter Sacred Space
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Temple Theme */}
      <motion.section 
        className="relative min-h-screen flex items-center justify-center pt-16"
        style={{ y: templeY }}
      >
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'radial-gradient(circle at 30% 40%, rgba(245, 158, 11, 0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 70% 60%, rgba(251, 146, 60, 0.1) 0%, transparent 50%)',
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
              <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Sacred Healing Temple
              </span>
            </h1>
            <p className="text-xl text-amber-800 mb-8 leading-relaxed">
              Enter a sanctuary where ancient wisdom meets modern medicine. 
              Find peace, healing, and spiritual renewal in our sacred space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-full shadow-xl hover:shadow-2xl transition-all flex items-center justify-center space-x-2"
              >
                <FaPray className="w-5 h-5" />
                <span>Begin Your Pilgrimage</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-amber-600 rounded-full shadow-xl hover:shadow-2xl transition-all border border-amber-200"
              >
                Explore Sanctuary
              </motion.button>
            </div>

            {/* Temple bells */}
            <div className="mt-12 flex items-center space-x-4">
              <motion.div
                animate={{
                  rotate: [-5, 5, -5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="text-amber-600"
              >
                <svg width="40" height="40" viewBox="0 0 40 40">
                  <path d="M20 5 Q15 10 15 20 Q15 30 20 35 Q25 30 25 20 Q25 10 20 5" fill="currentColor" />
                  <circle cx="20" cy="35" r="3" fill="currentColor" />
                </svg>
              </motion.div>
              <span className="text-amber-700">Sacred bells ringing</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Temple glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full blur-3xl opacity-20"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            />
            
            {/* Candle lights around image */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `${50 + 45 * Math.cos((angle * Math.PI) / 180)}%`,
                  top: `${50 + 45 * Math.sin((angle * Math.PI) / 180)}%`,
                }}
              >
                <motion.div
                  className="w-3 h-6 bg-gradient-to-t from-orange-500 to-yellow-400 rounded-t-full"
                  animate={{
                    scaleY: candleFlicker ? 1 : 0.9,
                    opacity: candleFlicker ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.2 }}
                />
                <div className="w-3 h-2 bg-amber-800 rounded-b-full" />
              </motion.div>
            ))}
            
            <Image
              src="/Lotus Midjourney Flowers/lotus_contact_hero.png"
              alt="Sacred Lotus"
              width={600}
              height={600}
              className="relative z-10 rounded-3xl shadow-2xl"
              style={{
                filter: 'sepia(0.2) saturate(1.5)',
              }}
            />
            
            {/* Incense smoke */}
            <div className="absolute bottom-10 left-10">
              <IncenseSmoke delay={0} />
              <IncenseSmoke delay={2} />
              <IncenseSmoke delay={4} />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Meet Dr. Rosenberg Section */}
      <section className="py-20 relative bg-gradient-to-b from-yellow-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-4">
              Your Spiritual Guide
            </h2>
            <p className="text-xl text-amber-700">Leading you to holistic enlightenment</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 rounded-3xl blur-2xl opacity-20"></div>
              <Image
                src="/dr_rosenberg.jpg"
                alt="Dr. Aaron Rosenberg"
                width={500}
                height={600}
                className="relative z-10 rounded-3xl shadow-2xl"
              />
              {/* Sacred symbol decoration */}
              <motion.div
                className="absolute -top-10 -right-10"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              >
                <FaDharmachakra className="w-24 h-24 text-amber-400/30" />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-amber-800 mb-4">Dr. Aaron Rosenberg</h3>
              <p className="text-lg text-amber-700 mb-6 leading-relaxed">
                Dr. Rosenberg creates a sacred healing space where mind, body, and spirit unite. 
                His practice honors the temple of your body, combining reverent care with 
                advanced medical expertise to guide you toward complete wellness.
              </p>
              <div className="space-y-4">
                {[
                  { icon: FaOm, text: 'Mind-Body-Spirit Integration' },
                  { icon: FaBalanceScale, text: 'Balanced Healing Approach' },
                  { icon: FaDharmachakra, text: 'Holistic Wellness Pathways' }
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
                      whileHover={{ scale: 1.1, rotate: 180 }}
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

      {/* Services Section with Temple Cards */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-4">
              Sacred Healing Offerings
            </h2>
            <p className="text-xl text-amber-700">Each service is a sacred ritual of wellness</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Temple of Primary Care',
                description: 'Your body as a sacred vessel',
                icon: FaPray,
                image: '/Lotus Midjourney Flowers/lotus_dpc_hero.png',
                blessing: 'Body Temple',
                gradient: 'from-amber-500 to-orange-500'
              },
              {
                title: 'Sacred Medicine',
                description: 'Ancient wisdom, modern healing',
                icon: FaOm,
                image: '/Lotus Midjourney Flowers/lotus-functional-medicine-hero.png',
                blessing: 'Mind Spirit',
                gradient: 'from-orange-500 to-yellow-500'
              },
              {
                title: 'Spiritual Wellness',
                description: 'Align your chakras and health',
                icon: FaDharmachakra,
                image: '/Lotus Midjourney Flowers/lotus-ketamine-therapy-hero.png',
                blessing: 'Soul Journey',
                gradient: 'from-yellow-500 to-amber-500'
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
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border border-amber-100">
                  <div className="h-48 relative overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      style={{
                        filter: 'sepia(0.3) saturate(1.3)',
                      }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-60`}></div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full">
                      <span className="text-sm font-semibold text-amber-700">{service.blessing}</span>
                    </div>
                  </div>
                  <div className="p-8">
                    <motion.div 
                      className="w-16 h-16 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full flex items-center justify-center mb-4"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.7 }}
                    >
                      <service.icon className="w-8 h-8 text-amber-600" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-amber-800 mb-3">{service.title}</h3>
                    <p className="text-amber-600 mb-4">{service.description}</p>
                    <motion.a
                      href="#"
                      className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium"
                      whileHover={{ x: 5 }}
                    >
                      Enter Temple <FaChevronRight className="ml-2 w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sacred Ritual Animation */}
      <section className="py-20 relative bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-4">
              Your Healing Ceremony
            </h2>
            <p className="text-xl text-amber-700">Sacred rituals for modern wellness</p>
          </motion.div>

          <motion.div
            className="relative h-96 rounded-3xl overflow-hidden bg-gradient-to-r from-amber-100/50 to-orange-100/50 backdrop-blur-xl border border-amber-200"
            whileHover={{ scale: 1.02 }}
          >
            {/* Mandala pattern */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.svg
                width="300"
                height="300"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
              >
                {/* Outer circle */}
                {Array.from({ length: 12 }, (_, i) => (
                  <motion.circle
                    key={i}
                    cx={150 + 100 * Math.cos((i * 30 * Math.PI) / 180)}
                    cy={150 + 100 * Math.sin((i * 30 * Math.PI) / 180)}
                    r="20"
                    fill="none"
                    stroke="#F59E0B"
                    strokeWidth="1"
                    opacity="0.5"
                  />
                ))}
                {/* Inner lotus petals */}
                {Array.from({ length: 8 }, (_, i) => (
                  <motion.path
                    key={i}
                    d="M150,150 Q170,120 150,100 Q130,120 150,150"
                    fill="#FB923C"
                    opacity="0.3"
                    transform={`rotate(${i * 45} 150 150)`}
                  />
                ))}
                {/* Center */}
                <circle cx="150" cy="150" r="30" fill="#F59E0B" opacity="0.5" />
              </motion.svg>
            </div>
            
            <div className="relative z-10 flex items-center justify-center h-full">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h3 className="text-3xl font-bold text-amber-800 mb-4">Sacred Space Awaits</h3>
                <p className="text-lg text-amber-700 max-w-2xl mx-auto">
                  Step into our sanctuary where healing becomes a sacred ceremony
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-600"></div>
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundImage: [
              'radial-gradient(circle at 20% 50%, rgba(245, 158, 11, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(251, 146, 60, 0.3) 0%, transparent 50%)',
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
            Enter the Sacred Circle
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-amber-100 mb-8"
          >
            Your sanctuary of healing awaits your presence
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
              Begin Sacred Journey
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent text-white rounded-full border-2 border-white hover:bg-white hover:text-amber-600 transition-all font-semibold"
            >
              Visit Our Temple
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
            <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-4">
              Sacred Connection
            </h2>
            <p className="text-xl text-amber-700">Reach out and touch the divine</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl shadow-xl p-8 md:p-12"
          >
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                { icon: FaPhone, label: 'Sacred Line', value: '(555) 123-4567' },
                { icon: FaEnvelope, label: 'Temple Mail', value: 'sanctuary@lotusdirect.care' },
                { icon: FaMapMarkerAlt, label: 'Holy Ground', value: 'Tampa, FL' }
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
                    className="w-16 h-16 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
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
      <footer className="py-8 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 Lotus Direct Care. A sacred sanctuary for modern healing.</p>
        </div>
      </footer>
    </div>
  )
}