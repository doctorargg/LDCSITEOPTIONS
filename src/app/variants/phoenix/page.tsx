'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { 
  FaFire, 
  FaHeart, 
  FaUserMd, 
  FaStar,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaChevronRight,
  FaFeatherAlt,
  FaFlame,
  FaSun
} from 'react-icons/fa'

export default function PhoenixVariant() {
  const [fireParticles, setFireParticles] = useState<{ x: number; y: number; id: number }[]>([])
  const { scrollY } = useScroll()
  const phoenixY = useTransform(scrollY, [0, 500], [0, -100])
  const [isRising, setIsRising] = useState(false)

  // Fire particle animation
  useEffect(() => {
    const interval = setInterval(() => {
      const newParticle = {
        x: Math.random() * window.innerWidth,
        y: window.innerHeight,
        id: Date.now() + Math.random()
      }
      setFireParticles(prev => [...prev.slice(-30), newParticle])
    }, 100)
    return () => clearInterval(interval)
  }, [])

  // Phoenix rise animation trigger
  useEffect(() => {
    const handleScroll = () => {
      setIsRising(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Flame effect component
  const FlameEffect = ({ size = 'small' }: { size?: 'small' | 'large' }) => (
    <motion.div
      className={`absolute ${size === 'large' ? 'w-32 h-32' : 'w-16 h-16'}`}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.6, 1, 0.6],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <div className="relative w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-t from-red-600 via-orange-500 to-yellow-400 rounded-full blur-xl"></div>
        <div className="absolute inset-2 bg-gradient-to-t from-red-500 via-orange-400 to-yellow-300 rounded-full blur-lg"></div>
      </div>
    </motion.div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-950 via-red-950 to-amber-950 relative overflow-hidden">
      {/* Fire particles background */}
      <div className="fixed inset-0 pointer-events-none">
        {fireParticles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-2 h-2 bg-gradient-to-t from-red-500 to-yellow-400 rounded-full"
            style={{
              left: particle.x,
              top: particle.y,
              boxShadow: '0 0 10px rgba(255, 100, 0, 0.8)',
            }}
            animate={{
              y: -window.innerHeight - 100,
              x: particle.x + (Math.random() - 0.5) * 100,
              opacity: [1, 0],
              scale: [1, 0],
            }}
            transition={{
              duration: 4,
              ease: 'easeOut',
            }}
          />
        ))}
      </div>

      {/* Phoenix silhouette */}
      <motion.div
        className="fixed right-10 top-20 opacity-10"
        animate={isRising ? { y: -200, opacity: 0.3 } : { y: 0, opacity: 0.1 }}
        transition={{ duration: 2 }}
      >
        <FaFeatherAlt className="w-64 h-64 text-orange-500" />
      </motion.div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-orange-950/80 backdrop-blur-lg shadow-lg z-50 border-b border-orange-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <FaFire className="h-8 w-8 text-orange-500" />
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Lotus Phoenix
              </span>
            </motion.div>
            <div className="flex space-x-8">
              {['Services', 'About', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-orange-100 hover:text-orange-400 transition-colors relative group"
                  whileHover={{ y: -2 }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full"></span>
                </motion.a>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full shadow-lg hover:shadow-orange-500/25 transition-all"
              >
                Rise Again
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Phoenix Theme */}
      <motion.section 
        className="relative min-h-screen flex items-center justify-center pt-16"
        style={{ y: phoenixY }}
      >
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'radial-gradient(circle at 30% 40%, rgba(255, 100, 0, 0.2) 0%, transparent 50%)',
                'radial-gradient(circle at 70% 60%, rgba(255, 50, 0, 0.2) 0%, transparent 50%)',
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
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Rise From the Ashes
              </span>
            </h1>
            <p className="text-xl text-orange-100 mb-8 leading-relaxed">
              Transform your health journey through the power of renewal. 
              Like the mythical phoenix, emerge stronger and more vibrant than ever before.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full shadow-xl hover:shadow-orange-500/25 transition-all flex items-center justify-center space-x-2"
              >
                <FaFlame className="w-5 h-5" />
                <span>Ignite Your Transformation</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent text-orange-400 rounded-full shadow-xl hover:shadow-orange-500/25 transition-all border border-orange-500/50"
              >
                Discover Rebirth
              </motion.button>
            </div>

            {/* Rising indicator */}
            <motion.div className="mt-12 flex items-center space-x-4">
              <div className="flex space-x-2">
                {[0, 1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-8 bg-gradient-to-t from-red-500 to-orange-400 rounded-full"
                    animate={{
                      scaleY: isRising ? [0.3, 1, 0.3] : 0.3,
                      opacity: isRising ? [0.3, 1, 0.3] : 0.3,
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.1,
                    }}
                  />
                ))}
              </div>
              <span className="text-orange-300">Rising</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Phoenix wing effects */}
            <motion.div
              className="absolute -inset-20"
              animate={{
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <FlameEffect size="large" />
              <div className="absolute top-10 right-10">
                <FlameEffect />
              </div>
              <div className="absolute bottom-10 left-10">
                <FlameEffect />
              </div>
            </motion.div>
            
            <Image
              src="/Lotus Midjourney Flowers/lotus-homepage-new.png"
              alt="Phoenix Lotus"
              width={600}
              height={600}
              className="relative z-10 rounded-3xl shadow-2xl"
              style={{
                filter: 'hue-rotate(-20deg) saturate(1.5) brightness(1.1)',
              }}
            />
            
            {/* Feather particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `${50 + 40 * Math.cos((i * Math.PI * 2) / 6)}%`,
                  top: `${50 + 40 * Math.sin((i * Math.PI * 2) / 6)}%`,
                }}
                animate={{
                  y: [-20, 20, -20],
                  rotate: [0, 360],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              >
                <FaFeatherAlt className="w-8 h-8 text-orange-400/50" />
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
            <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-4">
              The Phoenix Healer
            </h2>
            <p className="text-xl text-orange-100">Guiding your journey of transformation</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl blur-3xl opacity-20"></div>
              <Image
                src="/dr_rosenberg.jpg"
                alt="Dr. Aaron Rosenberg"
                width={500}
                height={600}
                className="relative z-10 rounded-3xl shadow-2xl border border-orange-500/20"
              />
              {/* Rising flames decoration */}
              <motion.div
                className="absolute -bottom-10 left-1/2 transform -translate-x-1/2"
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <FaFire className="w-24 h-24 text-orange-500/30" />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-orange-100 mb-4">Dr. Aaron Rosenberg</h3>
              <p className="text-lg text-orange-200 mb-6 leading-relaxed">
                Like the phoenix that rises renewed from the ashes, Dr. Rosenberg specializes 
                in transformative healthcare that helps you emerge stronger from life's challenges. 
                His approach combines ancient wisdom with modern medicine for complete renewal.
              </p>
              <div className="space-y-4">
                {[
                  { icon: FaFlame, text: 'Transformative Healing Programs', glow: true },
                  { icon: FaFeatherAlt, text: 'Renewal & Regeneration Therapies', glow: false },
                  { icon: FaSun, text: 'Vitality Restoration Protocols', glow: true }
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
                      className="p-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full border border-orange-500/50"
                      animate={item.glow ? { 
                        boxShadow: [
                          '0 0 20px rgba(255, 100, 0, 0.5)',
                          '0 0 40px rgba(255, 100, 0, 0.8)',
                          '0 0 20px rgba(255, 100, 0, 0.5)',
                        ]
                      } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <item.icon className="w-5 h-5 text-orange-400" />
                    </motion.div>
                    <span className="text-orange-200">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section with Phoenix Cards */}
      <section id="services" className="py-20 bg-gradient-to-b from-red-950 to-orange-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-4">
              Services of Renewal
            </h2>
            <p className="text-xl text-orange-100">Each treatment ignites your transformation</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Regenerative Medicine',
                description: 'Rise stronger with cellular renewal',
                icon: FaHeart,
                image: '/Lotus Midjourney Flowers/lotus_dpc_hero.png',
                flame: 'from-red-500 to-orange-500',
                delay: 0
              },
              {
                title: 'Transformation Therapy',
                description: 'Emerge renewed from within',
                icon: FaFlame,
                image: '/Lotus Midjourney Flowers/lotus-functional-medicine-hero.png',
                flame: 'from-orange-500 to-yellow-500',
                delay: 0.2
              },
              {
                title: 'Vitality Restoration',
                description: 'Reignite your inner fire',
                icon: FaSun,
                image: '/Lotus Midjourney Flowers/lotus-ketamine-therapy-hero.png',
                flame: 'from-yellow-500 to-red-500',
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
                {/* Flame effect on hover */}
                <motion.div
                  className={`absolute -inset-4 bg-gradient-to-r ${service.flame} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />
                
                <div className="relative bg-gradient-to-b from-orange-900/80 to-red-900/80 backdrop-blur-xl rounded-3xl overflow-hidden border border-orange-500/20 hover:border-orange-500/50 transition-colors">
                  <div className="h-48 relative overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      style={{
                        filter: 'hue-rotate(-20deg) saturate(1.5) brightness(0.9)',
                      }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.flame} opacity-60`}></div>
                    
                    {/* Rising flame animation */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-32 opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ y: 0 }}
                      animate={{ y: [-10, -30, -10] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    >
                      <div className={`h-full bg-gradient-to-t ${service.flame} blur-xl`}></div>
                    </motion.div>
                  </div>
                  <div className="p-8">
                    <motion.div 
                      className={`w-16 h-16 bg-gradient-to-r ${service.flame} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}
                      whileHover={{ rotate: 180, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-orange-100 mb-3">{service.title}</h3>
                    <p className="text-orange-200 mb-4">{service.description}</p>
                    <motion.a
                      href="#"
                      className="inline-flex items-center text-orange-400 hover:text-orange-300 font-medium"
                      whileHover={{ x: 5 }}
                    >
                      Rise Higher <FaChevronRight className="ml-2 w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Phoenix Rising Animation */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-4">
              Your Phoenix Journey
            </h2>
            <p className="text-xl text-orange-100">Watch your transformation unfold</p>
          </motion.div>

          <motion.div
            className="relative h-96 rounded-3xl overflow-hidden bg-gradient-to-b from-orange-900/50 to-red-900/50 backdrop-blur-xl border border-orange-500/20"
            whileHover={{ scale: 1.02 }}
          >
            {/* Phoenix rising visualization */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="relative"
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2 }}
              >
                <motion.div
                  className="text-orange-500"
                  animate={{
                    y: [0, -30, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <FaFeatherAlt className="w-48 h-48" />
                </motion.div>
                
                {/* Rising flames */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                >
                  <div className="w-64 h-64 bg-gradient-to-t from-red-500 via-orange-500 to-transparent rounded-full blur-3xl"></div>
                </motion.div>
              </motion.div>
            </div>
            
            <div className="relative z-10 flex items-end justify-center h-full pb-12">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h3 className="text-3xl font-bold text-white mb-4">From Ashes to Glory</h3>
                <p className="text-lg text-orange-100 max-w-2xl mx-auto">
                  Your transformation begins with a single spark of change
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600"></div>
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundImage: [
              'radial-gradient(circle at 20% 50%, rgba(255, 200, 0, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(255, 100, 0, 0.3) 0%, transparent 50%)',
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
            Ready to Rise?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-orange-100 mb-8"
          >
            Begin your transformation today and emerge renewed
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
              className="px-8 py-4 bg-white text-orange-600 rounded-full shadow-xl hover:shadow-2xl transition-all font-semibold"
            >
              Ignite Your Journey
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent text-white rounded-full border-2 border-white hover:bg-white hover:text-orange-600 transition-all font-semibold"
            >
              Learn About Phoenix Care
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-orange-950 to-red-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-4">
              Rise With Us
            </h2>
            <p className="text-xl text-orange-100">Your transformation awaits</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-orange-900/80 to-red-900/80 backdrop-blur-xl rounded-3xl shadow-xl p-8 md:p-12 border border-orange-500/20"
          >
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                { icon: FaPhone, label: 'Phoenix Line', value: '(555) 123-4567' },
                { icon: FaEnvelope, label: 'Rising Portal', value: 'phoenix@lotusdirect.care' },
                { icon: FaMapMarkerAlt, label: 'Nest Location', value: 'Tampa, FL' }
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
                    className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-orange-500/25"
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: '0 0 30px rgba(255, 100, 0, 0.6)',
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="font-semibold text-orange-100 mb-1">{item.label}</h3>
                  <p className="text-orange-200">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-red-950 text-orange-100 border-t border-orange-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 Lotus Direct Care. Rising from the ashes of conventional healthcare.</p>
        </div>
      </footer>
    </div>
  )
}