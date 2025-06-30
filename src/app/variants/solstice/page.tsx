'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { 
  FaSun, 
  FaMoon, 
  FaHeart, 
  FaUserMd, 
  FaStar,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaChevronRight,
  FaLeaf,
  FaSnowflake,
  FaCloudSun
} from 'react-icons/fa'

export default function SolsticeVariant() {
  const [season, setSeason] = useState<'summer' | 'winter'>('summer')
  const [dayProgress, setDayProgress] = useState(0)
  const { scrollY } = useScroll()
  const sunRotation = useTransform(scrollY, [0, 1000], [0, 360])
  
  useEffect(() => {
    const interval = setInterval(() => {
      setDayProgress(prev => (prev + 1) % 100)
      if (Math.random() > 0.98) {
        setSeason(prev => prev === 'summer' ? 'winter' : 'summer')
      }
    }, 100)
    return () => clearInterval(interval)
  }, [])

  // Seasonal particle (leaf or snowflake)
  const SeasonalParticle = ({ index }: { index: number }) => {
    const Icon = season === 'summer' ? FaLeaf : FaSnowflake
    const color = season === 'summer' ? '#10B981' : '#60A5FA'
    
    return (
      <motion.div
        className="absolute"
        initial={{
          x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
          y: -50,
          rotate: 0,
        }}
        animate={{
          y: (typeof window !== 'undefined' ? window.innerHeight : 1080) + 50,
          x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
          rotate: season === 'summer' ? 360 : 720,
        }}
        transition={{
          duration: season === 'summer' ? 15 : 10,
          delay: index * 0.5,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <Icon className="w-6 h-6" style={{ color }} />
      </motion.div>
    )
  }

  // Sun/Moon cycle
  const CelestialBody = () => (
    <motion.div
      className="absolute"
      animate={{
        x: ['-100%', '100%'],
        y: ['50%', '-50%', '50%'],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <AnimatePresence mode="wait">
        {season === 'summer' ? (
          <motion.div
            key="sun"
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: 1, rotate: 360 }}
            exit={{ scale: 0, rotate: 720 }}
            transition={{ duration: 1 }}
          >
            <FaSun className="w-24 h-24 text-yellow-400" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: 1, rotate: -360 }}
            exit={{ scale: 0, rotate: -720 }}
            transition={{ duration: 1 }}
          >
            <FaMoon className="w-20 h-20 text-blue-200" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )

  const bgGradient = season === 'summer' 
    ? 'from-orange-400 via-pink-500 to-purple-600'
    : 'from-blue-900 via-indigo-800 to-purple-900'

  return (
    <div className={`min-h-screen bg-gradient-to-b ${bgGradient} relative overflow-hidden transition-all duration-3000`}>
      {/* Celestial body animation */}
      <div className="fixed inset-0 pointer-events-none">
        <CelestialBody />
      </div>

      {/* Seasonal particles */}
      <div className="fixed inset-0 pointer-events-none">
        {Array.from({ length: 20 }, (_, i) => (
          <SeasonalParticle key={i} index={i} />
        ))}
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full ${season === 'summer' ? 'bg-orange-950/80' : 'bg-blue-950/80'} backdrop-blur-lg shadow-lg z-50 border-b ${season === 'summer' ? 'border-orange-800/50' : 'border-blue-800/50'} transition-all duration-1000`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <FaCloudSun className={`h-8 w-8 ${season === 'summer' ? 'text-orange-400' : 'text-blue-400'} transition-colors duration-1000`} />
              <span className={`text-2xl font-bold bg-gradient-to-r ${season === 'summer' ? 'from-orange-400 to-pink-400' : 'from-blue-400 to-indigo-400'} bg-clip-text text-transparent transition-all duration-1000`}>
                Lotus Solstice
              </span>
            </motion.div>
            <div className="flex space-x-8">
              {['Services', 'About', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`${season === 'summer' ? 'text-orange-100 hover:text-orange-400' : 'text-blue-100 hover:text-blue-400'} transition-colors relative group`}
                  whileHover={{ y: -2 }}
                >
                  {item}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 ${season === 'summer' ? 'bg-orange-400' : 'bg-blue-400'} transition-all group-hover:w-full`}></span>
                </motion.a>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 bg-gradient-to-r ${season === 'summer' ? 'from-orange-500 to-pink-500' : 'from-blue-500 to-indigo-500'} text-white rounded-full shadow-lg hover:shadow-xl transition-all`}
              >
                {season === 'summer' ? 'Summer Bloom' : 'Winter Rest'}
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Seasonal Theme */}
      <motion.section 
        className="relative min-h-screen flex items-center justify-center pt-16"
      >
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0"
            animate={{
              background: season === 'summer' ? [
                'radial-gradient(circle at 30% 40%, rgba(251, 146, 60, 0.2) 0%, transparent 50%)',
                'radial-gradient(circle at 70% 60%, rgba(236, 72, 153, 0.2) 0%, transparent 50%)',
              ] : [
                'radial-gradient(circle at 30% 40%, rgba(59, 130, 246, 0.2) 0%, transparent 50%)',
                'radial-gradient(circle at 70% 60%, rgba(99, 102, 241, 0.2) 0%, transparent 50%)',
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
              <span className={`bg-gradient-to-r ${season === 'summer' ? 'from-orange-400 to-pink-400' : 'from-blue-400 to-indigo-400'} bg-clip-text text-transparent transition-all duration-1000`}>
                Seasonal Wellness Cycles
              </span>
            </h1>
            <p className={`text-xl ${season === 'summer' ? 'text-orange-100' : 'text-blue-100'} mb-8 leading-relaxed transition-colors duration-1000`}>
              Experience healthcare that flows with nature's rhythms. Like the changing seasons, 
              we adapt our care to meet your evolving needs throughout the year.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-4 bg-gradient-to-r ${season === 'summer' ? 'from-orange-500 to-pink-500' : 'from-blue-500 to-indigo-500'} text-white rounded-full shadow-xl hover:shadow-2xl transition-all flex items-center justify-center space-x-2`}
              >
                {season === 'summer' ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
                <span>Embrace the Season</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-4 bg-transparent text-white rounded-full shadow-xl hover:shadow-2xl transition-all border ${season === 'summer' ? 'border-orange-300/50' : 'border-blue-300/50'}`}
              >
                Seasonal Guide
              </motion.button>
            </div>

            {/* Day/Night progress */}
            <div className="mt-12">
              <div className="flex items-center justify-between mb-2">
                <span className={`${season === 'summer' ? 'text-orange-300' : 'text-blue-300'} text-sm transition-colors duration-1000`}>
                  {season === 'summer' ? 'Day Progress' : 'Night Progress'}
                </span>
                <span className={`${season === 'summer' ? 'text-orange-400' : 'text-blue-400'} font-mono transition-colors duration-1000`}>
                  {dayProgress}%
                </span>
              </div>
              <div className="relative h-2 bg-white/20 rounded-full overflow-hidden">
                <motion.div
                  className={`absolute inset-y-0 left-0 bg-gradient-to-r ${season === 'summer' ? 'from-yellow-400 to-orange-400' : 'from-blue-400 to-indigo-400'}`}
                  style={{ width: `${dayProgress}%` }}
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
            {/* Seasonal glow effect */}
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{
                boxShadow: season === 'summer' ? [
                  '0 0 60px rgba(251, 146, 60, 0.4)',
                  '0 0 100px rgba(236, 72, 153, 0.6)',
                  '0 0 60px rgba(251, 146, 60, 0.4)',
                ] : [
                  '0 0 60px rgba(59, 130, 246, 0.4)',
                  '0 0 100px rgba(99, 102, 241, 0.6)',
                  '0 0 60px rgba(59, 130, 246, 0.4)',
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            />
            
            <Image
              src="/Lotus Midjourney Flowers/lotus-blog-hero.png"
              alt="Solstice Lotus"
              width={600}
              height={600}
              className="relative z-10 rounded-3xl shadow-2xl"
              style={{
                filter: season === 'summer' 
                  ? 'brightness(1.2) saturate(1.5) hue-rotate(-20deg)'
                  : 'brightness(0.8) saturate(0.8) hue-rotate(200deg)',
              }}
            />
            
            {/* Orbiting seasonal elements */}
            <motion.div
              className="absolute inset-0"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            >
              {Array.from({ length: 8 }, (_, i) => {
                const angle = (i * 45 * Math.PI) / 180
                const Icon = i % 2 === 0 ? (season === 'summer' ? FaSun : FaSnowflake) : FaStar
                return (
                  <div
                    key={i}
                    className="absolute"
                    style={{
                      left: `${50 + 45 * Math.cos(angle)}%`,
                      top: `${50 + 45 * Math.sin(angle)}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    <Icon className={`w-4 h-4 ${season === 'summer' ? 'text-yellow-400' : 'text-blue-300'}`} />
                  </div>
                )
              })}
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
            <h2 className={`text-4xl font-bold bg-gradient-to-r ${season === 'summer' ? 'from-orange-400 to-pink-400' : 'from-blue-400 to-indigo-400'} bg-clip-text text-transparent mb-4 transition-all duration-1000`}>
              Your Seasonal Guide
            </h2>
            <p className={`text-xl ${season === 'summer' ? 'text-orange-200' : 'text-blue-200'} transition-colors duration-1000`}>
              Harmonizing healthcare with nature's cycles
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${season === 'summer' ? 'from-orange-500 to-pink-500' : 'from-blue-500 to-indigo-500'} rounded-3xl blur-3xl opacity-20 transition-all duration-1000`}></div>
              <Image
                src="/dr_rosenberg.jpg"
                alt="Dr. Aaron Rosenberg"
                width={500}
                height={600}
                className={`relative z-10 rounded-3xl shadow-2xl border ${season === 'summer' ? 'border-orange-500/20' : 'border-blue-500/20'} transition-all duration-1000`}
              />
              {/* Seasonal decoration */}
              <motion.div
                className="absolute -top-10 -right-10"
                animate={{
                  rotate: season === 'summer' ? [0, 360] : [0, -360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                {season === 'summer' ? 
                  <FaSun className="w-24 h-24 text-yellow-400/50" /> : 
                  <FaMoon className="w-20 h-20 text-blue-300/50" />
                }
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className={`text-3xl font-bold ${season === 'summer' ? 'text-orange-100' : 'text-blue-100'} mb-4 transition-colors duration-1000`}>
                Dr. Aaron Rosenberg
              </h3>
              <p className={`text-lg ${season === 'summer' ? 'text-orange-200' : 'text-blue-200'} mb-6 leading-relaxed transition-colors duration-1000`}>
                Dr. Rosenberg understands that health is not static—it ebbs and flows like 
                the seasons. His approach synchronizes your care with natural rhythms, providing 
                energizing treatments in summer and restorative therapies in winter.
              </p>
              <div className="space-y-4">
                {[
                  { icon: FaSun, text: 'Summer Vitality Programs', season: 'summer' },
                  { icon: FaSnowflake, text: 'Winter Restoration Protocols', season: 'winter' },
                  { icon: FaLeaf, text: 'Seasonal Transition Support', season: 'both' }
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
                      className={`p-2 ${season === 'summer' ? 'bg-orange-500/20' : 'bg-blue-500/20'} rounded-full border ${season === 'summer' ? 'border-orange-500/50' : 'border-blue-500/50'} transition-all duration-1000`}
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <item.icon className={`w-5 h-5 ${season === 'summer' ? 'text-orange-400' : 'text-blue-400'} transition-colors duration-1000`} />
                    </motion.div>
                    <span className={`${season === 'summer' ? 'text-orange-200' : 'text-blue-200'} transition-colors duration-1000`}>
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section with Seasonal Cards */}
      <section id="services" className={`py-20 ${season === 'summer' ? 'bg-orange-950/30' : 'bg-blue-950/30'} transition-colors duration-1000`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl font-bold bg-gradient-to-r ${season === 'summer' ? 'from-orange-400 to-pink-400' : 'from-blue-400 to-indigo-400'} bg-clip-text text-transparent mb-4 transition-all duration-1000`}>
              Seasonal Services
            </h2>
            <p className={`text-xl ${season === 'summer' ? 'text-orange-200' : 'text-blue-200'} transition-colors duration-1000`}>
              Care that changes with the seasons
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Spring Renewal',
                description: 'Detox and rejuvenation',
                icon: FaLeaf,
                image: '/Lotus Midjourney Flowers/lotus_dpc_hero.png',
                season: 'spring',
                gradient: 'from-green-500 to-emerald-500'
              },
              {
                title: 'Summer Energy',
                description: 'Peak performance protocols',
                icon: FaSun,
                image: '/Lotus Midjourney Flowers/lotus-functional-medicine-hero.png',
                season: 'summer',
                gradient: 'from-orange-500 to-yellow-500'
              },
              {
                title: 'Winter Wellness',
                description: 'Immune and restoration focus',
                icon: FaSnowflake,
                image: '/Lotus Midjourney Flowers/lotus-ketamine-therapy-hero.png',
                season: 'winter',
                gradient: 'from-blue-500 to-indigo-500'
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
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                <div className={`relative ${season === 'summer' ? 'bg-orange-900/50' : 'bg-blue-900/50'} backdrop-blur-xl rounded-3xl overflow-hidden border ${season === 'summer' ? 'border-orange-500/20 hover:border-orange-500/50' : 'border-blue-500/20 hover:border-blue-500/50'} transition-all duration-1000`}>
                  <div className="h-48 relative overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      style={{
                        filter: service.season === 'summer' 
                          ? 'brightness(1.1) saturate(1.3)' 
                          : 'brightness(0.9) saturate(0.8)',
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
                    <h3 className={`text-2xl font-bold ${season === 'summer' ? 'text-orange-100' : 'text-blue-100'} mb-3 transition-colors duration-1000`}>
                      {service.title}
                    </h3>
                    <p className={`${season === 'summer' ? 'text-orange-300' : 'text-blue-300'} mb-4 transition-colors duration-1000`}>
                      {service.description}
                    </p>
                    <motion.a
                      href="#"
                      className={`inline-flex items-center ${season === 'summer' ? 'text-orange-400 hover:text-orange-300' : 'text-blue-400 hover:text-blue-300'} font-medium transition-colors duration-1000`}
                      whileHover={{ x: 5 }}
                    >
                      Seasonal Care <FaChevronRight className="ml-2 w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Cycle Visualization */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl font-bold bg-gradient-to-r ${season === 'summer' ? 'from-orange-400 to-pink-400' : 'from-blue-400 to-indigo-400'} bg-clip-text text-transparent mb-4 transition-all duration-1000`}>
              Your Wellness Year
            </h2>
            <p className={`text-xl ${season === 'summer' ? 'text-orange-200' : 'text-blue-200'} transition-colors duration-1000`}>
              Health that flows with time
            </p>
          </motion.div>

          <motion.div
            className={`relative h-96 rounded-3xl overflow-hidden ${season === 'summer' ? 'bg-gradient-to-br from-orange-900/50 to-pink-900/50' : 'bg-gradient-to-br from-blue-900/50 to-indigo-900/50'} backdrop-blur-xl border ${season === 'summer' ? 'border-orange-500/20' : 'border-blue-500/20'} transition-all duration-1000`}
            whileHover={{ scale: 1.02 }}
          >
            {/* Seasonal wheel */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.svg
                width="300"
                height="300"
                viewBox="0 0 300 300"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
              >
                {/* Spring */}
                <path
                  d="M150,150 L150,50 A100,100 0 0,1 250,150 Z"
                  fill="#10B981"
                  opacity="0.6"
                />
                {/* Summer */}
                <path
                  d="M150,150 L250,150 A100,100 0 0,1 150,250 Z"
                  fill="#F59E0B"
                  opacity="0.6"
                />
                {/* Fall */}
                <path
                  d="M150,150 L150,250 A100,100 0 0,1 50,150 Z"
                  fill="#DC2626"
                  opacity="0.6"
                />
                {/* Winter */}
                <path
                  d="M150,150 L50,150 A100,100 0 0,1 150,50 Z"
                  fill="#3B82F6"
                  opacity="0.6"
                />
                <circle cx="150" cy="150" r="30" fill="white" opacity="0.8" />
              </motion.svg>
            </div>
            
            <div className="relative z-10 flex items-center justify-center h-full">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h3 className={`text-3xl font-bold text-white mb-4`}>
                  {season === 'summer' ? 'Summer Solstice' : 'Winter Solstice'}
                </h3>
                <p className={`text-lg ${season === 'summer' ? 'text-orange-200' : 'text-blue-200'} max-w-2xl mx-auto transition-colors duration-1000`}>
                  Embrace the turning point of the year with transformative care
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-r ${season === 'summer' ? 'from-orange-600 to-pink-600' : 'from-blue-600 to-indigo-600'} transition-all duration-1000`}></div>
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
            Ready for Your Season?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/90 mb-8"
          >
            Begin your journey through the wellness seasons
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
              Start Seasonal Care
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent text-white rounded-full border-2 border-white hover:bg-white hover:text-gray-800 transition-all font-semibold"
            >
              Learn Your Season
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 ${season === 'summer' ? 'bg-orange-950' : 'bg-blue-950'} transition-colors duration-1000`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className={`text-4xl font-bold bg-gradient-to-r ${season === 'summer' ? 'from-orange-400 to-pink-400' : 'from-blue-400 to-indigo-400'} bg-clip-text text-transparent mb-4 transition-all duration-1000`}>
              Connect Any Season
            </h2>
            <p className={`text-xl ${season === 'summer' ? 'text-orange-200' : 'text-blue-200'} transition-colors duration-1000`}>
              We're here through every cycle
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`${season === 'summer' ? 'bg-orange-900/50' : 'bg-blue-900/50'} backdrop-blur-xl rounded-3xl shadow-xl p-8 md:p-12 border ${season === 'summer' ? 'border-orange-500/20' : 'border-blue-500/20'} transition-all duration-1000`}
          >
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                { icon: FaPhone, label: 'Seasonal Line', value: '(555) 123-4567' },
                { icon: FaEnvelope, label: 'Solstice Mail', value: 'solstice@lotusdirect.care' },
                { icon: FaMapMarkerAlt, label: 'All Seasons', value: 'Tampa, FL' }
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
                    className={`w-16 h-16 bg-gradient-to-r ${season === 'summer' ? 'from-orange-500 to-pink-500' : 'from-blue-500 to-indigo-500'} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg transition-all duration-1000`}
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className={`font-semibold ${season === 'summer' ? 'text-orange-100' : 'text-blue-100'} mb-1 transition-colors duration-1000`}>
                    {item.label}
                  </h3>
                  <p className={`${season === 'summer' ? 'text-orange-300' : 'text-blue-300'} transition-colors duration-1000`}>
                    {item.value}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 ${season === 'summer' ? 'bg-orange-950' : 'bg-blue-950'} ${season === 'summer' ? 'text-orange-300' : 'text-blue-300'} border-t ${season === 'summer' ? 'border-orange-800' : 'border-blue-800'} transition-all duration-1000`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 Lotus Direct Care. Wellness through every season of life.</p>
        </div>
      </footer>
    </div>
  )
}