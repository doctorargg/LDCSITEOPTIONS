'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { 
  FaRunning, 
  FaHeart, 
  FaUserMd, 
  FaStar,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaChevronRight,
  FaRocket,
  FaTachometerAlt,
  FaWind
} from 'react-icons/fa'

// Speed lines component
const SpeedLine = ({ delay, position }: { delay: number; position: number }) => (
  <motion.div
    className="absolute h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
    style={{
      top: `${position}%`,
      width: '200px',
    }}
    initial={{ x: -200, opacity: 0 }}
    animate={{
      x: 2000,
      opacity: [0, 1, 0],
    }}
    transition={{
      duration: 1.5,
      delay,
      repeat: Infinity,
      ease: 'linear',
    }}
  />
)

// Motion trail component
const MotionTrail = ({ index }: { index: number }) => (
  <motion.div
    className="absolute w-4 h-4 bg-cyan-500 rounded-full"
    style={{
      left: '20%',
      top: '50%',
    }}
    animate={{
      x: [0, -50 * (index + 1)],
      opacity: [0.8, 0],
      scale: [1, 0.5],
    }}
    transition={{
      duration: 0.5,
      delay: index * 0.1,
      repeat: Infinity,
    }}
  />
)

export default function MomentumVariant() {
  const [velocity, setVelocity] = useState(0)
  const { scrollY } = useScroll()
  const dynamicY = useTransform(scrollY, [0, 1000], [0, -200])
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 })
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2)
      mouseY.set(e.clientY - window.innerHeight / 2)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  useEffect(() => {
    const interval = setInterval(() => {
      setVelocity(prev => (prev + 1) % 100)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 relative overflow-hidden">
      {/* Dynamic speed lines */}
      <div className="fixed inset-0 pointer-events-none">
        {Array.from({ length: 10 }, (_, i) => (
          <SpeedLine key={i} delay={i * 0.3} position={10 + i * 8} />
        ))}
      </div>

      {/* Motion blur background */}
      <motion.div
        className="fixed inset-0 pointer-events-none"
        style={{
          x: springX,
          y: springY,
          scale: 1.1,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-transparent blur-3xl" />
      </motion.div>

      {/* Navigation with motion */}
      <motion.nav 
        className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-lg shadow-lg z-50 border-b border-cyan-500/20"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05, x: 10 }}
            >
              <FaRunning className="h-8 w-8 text-cyan-500" />
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Lotus Momentum
              </span>
            </motion.div>
            <div className="flex space-x-8">
              {['Services', 'About', 'Contact'].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-cyan-400 transition-colors relative group"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  {item}
                  <motion.span 
                    className="absolute -bottom-1 left-0 h-0.5 bg-cyan-500"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full shadow-lg hover:shadow-cyan-500/50 transition-all"
              >
                Accelerate Now
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section with Dynamic Motion */}
      <motion.section 
        className="relative min-h-screen flex items-center justify-center pt-16"
        style={{ y: dynamicY }}
      >
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'radial-gradient(circle at 30% 40%, rgba(6, 182, 212, 0.2) 0%, transparent 50%)',
                'radial-gradient(circle at 70% 60%, rgba(59, 130, 246, 0.2) 0%, transparent 50%)',
              ],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 50 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <motion.span 
                className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                Healthcare in Motion
              </motion.span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Accelerate your wellness journey with dynamic, forward-thinking healthcare. 
              We keep pace with your life, propelling you toward optimal health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05, x: 10 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full shadow-xl hover:shadow-cyan-500/50 transition-all flex items-center justify-center space-x-2"
              >
                <FaRocket className="w-5 h-5" />
                <span>Launch Forward</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, x: 10 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent text-cyan-400 rounded-full shadow-xl hover:shadow-cyan-500/50 transition-all border border-cyan-500/50"
              >
                Track Progress
              </motion.button>
            </div>

            {/* Velocity meter */}
            <motion.div className="mt-12 relative">
              <div className="flex items-center space-x-4">
                <FaTachometerAlt className="text-cyan-500 w-8 h-8" />
                <div className="flex-1 h-4 bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
                    animate={{ width: `${velocity}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <span className="text-cyan-400 font-mono">{velocity}%</span>
              </div>
              <p className="text-sm text-gray-500 mt-2">Wellness Velocity</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 50, delay: 0.3 }}
            className="relative"
          >
            {/* Motion trails */}
            <div className="absolute inset-0">
              {[0, 1, 2, 3, 4].map((i) => (
                <MotionTrail key={i} index={i} />
              ))}
            </div>
            
            {/* Dynamic rotation effect */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-full border border-cyan-500/20"
            />
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Image
                src="/Lotus Midjourney Flowers/lotus-pricing-hero.png"
                alt="Dynamic Lotus"
                width={600}
                height={600}
                className="relative z-10 rounded-3xl shadow-2xl"
                style={{
                  filter: 'hue-rotate(180deg) saturate(1.5)',
                }}
              />
            </motion.div>
            
            {/* Orbiting particles */}
            {[0, 90, 180, 270].map((angle, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 bg-cyan-400 rounded-full"
                style={{
                  left: '50%',
                  top: '50%',
                }}
                animate={{
                  x: Math.cos((angle * Math.PI) / 180) * 250,
                  y: Math.sin((angle * Math.PI) / 180) * 250,
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'linear',
                  delay: i * 1.25,
                }}
              />
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Meet Dr. Rosenberg Section with Motion */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 50 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
              Your Momentum Coach
            </h2>
            <p className="text-xl text-gray-300">Accelerating your path to wellness</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 50 }}
              className="relative"
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl blur-3xl opacity-20"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <Image
                src="/dr_rosenberg.jpg"
                alt="Dr. Aaron Rosenberg"
                width={500}
                height={600}
                className="relative z-10 rounded-3xl shadow-2xl border border-cyan-500/20"
              />
              {/* Speed effect */}
              <motion.div
                className="absolute -right-10 top-1/2 -translate-y-1/2"
                animate={{ x: [0, 20, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <FaWind className="w-24 h-24 text-cyan-500/20" />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 50 }}
            >
              <h3 className="text-3xl font-bold text-white mb-4">Dr. Aaron Rosenberg</h3>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Dr. Rosenberg keeps your health journey in constant forward motion. With dynamic 
                treatment plans that adapt to your changing needs, he ensures you never lose 
                momentum on your path to optimal wellness.
              </p>
              <div className="space-y-4">
                {[
                  { icon: FaRocket, text: 'Rapid Response Healthcare', speed: 3 },
                  { icon: FaTachometerAlt, text: 'Performance Optimization', speed: 4 },
                  { icon: FaWind, text: 'Dynamic Treatment Plans', speed: 5 }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, type: 'spring' }}
                  >
                    <motion.div 
                      className="p-2 bg-cyan-500/20 rounded-full border border-cyan-500/50"
                      animate={{ x: [0, 10, 0] }}
                      transition={{ duration: item.speed, repeat: Infinity }}
                    >
                      <item.icon className="w-5 h-5 text-cyan-400" />
                    </motion.div>
                    <span className="text-gray-300">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section with Dynamic Cards */}
      <section id="services" className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
              Services in Motion
            </h2>
            <p className="text-xl text-gray-300">Dynamic healthcare that keeps pace with you</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Velocity Care',
                description: 'Fast-track your health goals',
                icon: FaRocket,
                image: '/Lotus Midjourney Flowers/lotus_dpc_hero.png',
                gradient: 'from-cyan-500 to-blue-500',
                delay: 0
              },
              {
                title: 'Flow State Medicine',
                description: 'Seamless healthcare experience',
                icon: FaWind,
                image: '/Lotus Midjourney Flowers/lotus-functional-medicine-hero.png',
                gradient: 'from-blue-500 to-indigo-500',
                delay: 0.2
              },
              {
                title: 'Acceleration Therapy',
                description: 'Boost your recovery speed',
                icon: FaTachometerAlt,
                image: '/Lotus Midjourney Flowers/lotus-ketamine-therapy-hero.png',
                gradient: 'from-indigo-500 to-purple-500',
                delay: 0.4
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: service.delay, type: 'spring', stiffness: 50 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="group relative"
              >
                {/* Motion blur effect */}
                <motion.div
                  className={`absolute -inset-1 bg-gradient-to-r ${service.gradient} rounded-3xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                
                <div className="relative bg-slate-800/80 backdrop-blur-xl rounded-3xl overflow-hidden border border-cyan-500/20 hover:border-cyan-500/50 transition-all">
                  <div className="h-48 relative overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      className="h-full"
                    >
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        style={{
                          filter: 'hue-rotate(180deg) saturate(1.5)',
                        }}
                      />
                    </motion.div>
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-60`}></div>
                    
                    {/* Speed lines on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          className="absolute h-0.5 w-full bg-white/20"
                          style={{ top: `${30 + i * 20}%` }}
                          initial={{ x: '-100%' }}
                          animate={{ x: '100%' }}
                          transition={{
                            duration: 1,
                            delay: i * 0.2,
                            repeat: Infinity,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="p-8">
                    <motion.div 
                      className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-400 mb-4">{service.description}</p>
                    <motion.a
                      href="#"
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium"
                      whileHover={{ x: 10 }}
                    >
                      Accelerate <FaChevronRight className="ml-2 w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Momentum Visualization */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
              Your Health Trajectory
            </h2>
            <p className="text-xl text-gray-300">Watch your wellness accelerate</p>
          </motion.div>

          <motion.div
            className="relative h-96 rounded-3xl overflow-hidden bg-slate-800/50 backdrop-blur-xl border border-cyan-500/20"
            whileHover={{ scale: 1.02 }}
          >
            {/* Motion graph */}
            <svg className="absolute inset-0 w-full h-full">
              <motion.path
                d="M0,200 Q100,150 200,180 T400,120 T600,80 T800,40"
                stroke="url(#motion-gradient)"
                strokeWidth="3"
                fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: 'easeOut' }}
              />
              <defs>
                <linearGradient id="motion-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#06B6D4" />
                  <stop offset="100%" stopColor="#3B82F6" />
                </linearGradient>
              </defs>
            </motion.path>
            
            {/* Moving dot */}
            <motion.circle
              r="8"
              fill="#06B6D4"
              initial={{ x: 0, y: 200 }}
              animate={{
                x: [0, 200, 400, 600, 800],
                y: [200, 180, 120, 80, 40],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <animate attributeName="r" values="8;12;8" dur="1s" repeatCount="indefinite" />
            </motion.circle>
          </motion.div>
          
          <div className="relative z-10 flex items-center justify-center h-full">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mt-8"
            >
              <h3 className="text-3xl font-bold text-white mb-4">Accelerating Progress</h3>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Your health journey gains momentum with every step forward
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600"></div>
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundImage: [
              'radial-gradient(circle at 0% 50%, rgba(6, 182, 212, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 100% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)',
            ],
          }}
          transition={{
            duration: 4,
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
            Ready to Build Momentum?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-cyan-100 mb-8"
          >
            Start accelerating your health journey today
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, x: 10 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-cyan-600 rounded-full shadow-xl hover:shadow-2xl transition-all font-semibold"
            >
              Start Moving Forward
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, x: 10 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent text-white rounded-full border-2 border-white hover:bg-white hover:text-cyan-600 transition-all font-semibold"
            >
              Track Your Progress
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
              Connect at Speed
            </h2>
            <p className="text-xl text-gray-300">Quick access to accelerated care</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-800/80 backdrop-blur-xl rounded-3xl shadow-xl p-8 md:p-12 border border-cyan-500/20"
          >
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                { icon: FaPhone, label: 'Speed Dial', value: '(555) 123-4567' },
                { icon: FaEnvelope, label: 'Quick Mail', value: 'momentum@lotusdirect.care' },
                { icon: FaMapMarkerAlt, label: 'Launch Pad', value: 'Tampa, FL' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: 'spring' }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-cyan-500/25"
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
      <footer className="py-8 bg-slate-950 text-gray-400 border-t border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 Lotus Direct Care. Healthcare at the speed of life.</p>
        </div>
      </footer>
    </div>
  )
}