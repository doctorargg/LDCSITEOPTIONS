'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { 
  FaTint, 
  FaHeart, 
  FaUserMd, 
  FaStar,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaChevronRight,
  FaTint,
  FaStream,
  FaUmbrellaBeach
} from 'react-icons/fa'

export default function CascadeVariant() {
  const [flowSpeed, setFlowSpeed] = useState(50)
  const { scrollY } = useScroll()
  const waterfallY = useTransform(scrollY, [0, 1000], [0, 200])
  
  // Water droplet animation
  const WaterDroplet = ({ delay, startX }: { delay: number; startX: number }) => (
    <motion.div
      className="absolute w-2 h-3 bg-blue-400 rounded-full opacity-70"
      style={{
        left: startX,
        top: -20,
      }}
      animate={{
        y: [0, 1200],
        x: [0, Math.random() * 40 - 20],
      }}
      transition={{
        duration: 3,
        delay,
        repeat: Infinity,
        ease: 'easeIn',
      }}
    />
  )

  // Cascade flow lines
  const CascadeLine = ({ x, delay }: { x: string; delay: number }) => (
    <motion.div
      className="absolute w-0.5 bg-gradient-to-b from-transparent via-blue-300 to-transparent"
      style={{
        left: x,
        height: '100%',
      }}
      animate={{
        y: ['-100%', '100%'],
      }}
      transition={{
        duration: 2,
        delay,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  )

  // Mist effect
  const MistCloud = ({ position }: { position: { x: string; y: string } }) => (
    <motion.div
      className="absolute w-64 h-32 bg-blue-100 rounded-full blur-3xl"
      style={{
        left: position.x,
        bottom: position.y,
        opacity: 0.2,
      }}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.2, 0.3, 0.2],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 via-blue-50 to-cyan-50 relative overflow-hidden">
      {/* Cascade lines background */}
      <div className="fixed inset-0 pointer-events-none">
        {Array.from({ length: 20 }, (_, i) => (
          <CascadeLine key={i} x={i * 5 + '%'} delay={i * 0.1} />
        ))}
      </div>

      {/* Water droplets */}
      <div className="fixed inset-0 pointer-events-none">
        {Array.from({ length: 30 }, (_, i) => (
          <WaterDroplet 
            key={i} 
            delay={i * 0.3} 
            startX={Math.random() * 1920}
          />
        ))}
      </div>

      {/* Mist clouds */}
      <MistCloud position={{ x: '10%', y: '10%' }} />
      <MistCloud position={{ x: '70%', y: '20%' }} />

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg shadow-sm z-50 border-b border-blue-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <FaStream className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Lotus Cascade
              </span>
            </motion.div>
            <div className="flex space-x-8">
              {['Services', 'About', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-blue-600 transition-colors relative group"
                  whileHover={{ y: -2 }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
                </motion.a>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                Flow With Us
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Waterfall Theme */}
      <motion.section 
        className="relative min-h-screen flex items-center justify-center pt-16"
        style={{ y: waterfallY }}
      >
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'radial-gradient(circle at 30% 40%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 70% 60%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)',
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
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Cascading Wellness
              </span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Experience the power of flowing health. Like a majestic waterfall, 
              our care cascades through every aspect of your wellness journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full shadow-xl hover:shadow-2xl transition-all flex items-center justify-center space-x-2"
              >
                <FaTint className="w-5 h-5" />
                <span>Dive Into Wellness</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-blue-600 rounded-full shadow-xl hover:shadow-2xl transition-all border border-blue-200"
              >
                Explore Flow
              </motion.button>
            </div>

            {/* Flow meter */}
            <div className="mt-12">
              <div className="flex items-center justify-between mb-2">
                <span className="text-blue-600 text-sm">Flow Rate</span>
                <span className="text-blue-700 font-mono">{flowSpeed}%</span>
              </div>
              <motion.div className="relative h-3 bg-blue-100 rounded-full overflow-hidden">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 to-cyan-500"
                  animate={{ width: `${flowSpeed}%` }}
                  transition={{ duration: 0.5 }}
                />
                <motion.div
                  className="absolute inset-0 bg-white/30"
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Waterfall effect behind image */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
              {Array.from({ length: 10 }, (_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 bg-gradient-to-b from-blue-300 to-transparent"
                  style={{
                    left: `${10 + i * 8}%`,
                    height: '150%',
                    opacity: 0.3,
                  }}
                  animate={{
                    y: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 2 + Math.random(),
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                />
              ))}
            </div>
            
            <Image
              src="/Lotus Midjourney Flowers/lotus-homepage-new.png"
              alt="Cascade Lotus"
              width={600}
              height={600}
              className="relative z-10 rounded-3xl shadow-2xl"
              style={{
                filter: 'brightness(1.1) saturate(1.3)',
              }}
            />
            
            {/* Splash effects */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-32"
              animate={{
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-blue-200/50 to-transparent blur-xl" />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Meet Dr. Rosenberg Section */}
      <section className="py-20 relative bg-gradient-to-b from-cyan-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
              Your Flow Master
            </h2>
            <p className="text-xl text-gray-600">Guiding your wellness cascade</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-3xl blur-2xl opacity-20"></div>
              <Image
                src="/dr_rosenberg.jpg"
                alt="Dr. Aaron Rosenberg"
                width={500}
                height={600}
                className="relative z-10 rounded-3xl shadow-2xl"
              />
              {/* Flowing water decoration */}
              <motion.div
                className="absolute -top-10 -right-10"
                animate={{
                  y: [0, 20, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <FaTint className="w-24 h-24 text-blue-300/50" />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Dr. Aaron Rosenberg</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Dr. Rosenberg channels the healing power of cascading wellness. His approach 
                flows naturally through each layer of your health, creating a continuous 
                stream of vitality that refreshes and renews at every level.
              </p>
              <div className="space-y-4">
                {[
                  { icon: FaStream, text: 'Continuous Care Flow' },
                  { icon: FaTint, text: 'Purifying Health Protocols' },
                  { icon: FaTint, text: 'Cascading Treatment Plans' }
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
                      className="p-2 bg-blue-100 rounded-full"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <item.icon className="w-5 h-5 text-blue-600" />
                    </motion.div>
                    <span className="text-gray-700">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section with Cascade Cards */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
              Cascading Services
            </h2>
            <p className="text-xl text-gray-600">Each level flows into the next</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Upper Falls Care',
                description: 'Premium primary healthcare',
                icon: FaUserMd,
                image: '/Lotus Midjourney Flowers/lotus_dpc_hero.png',
                level: 'Summit',
                gradient: 'from-blue-400 to-blue-600'
              },
              {
                title: 'Middle Stream Medicine',
                description: 'Flowing functional wellness',
                icon: FaStream,
                image: '/Lotus Midjourney Flowers/lotus-functional-medicine-hero.png',
                level: 'Rapids',
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                title: 'Deep Pool Therapy',
                description: 'Profound healing depths',
                icon: FaTint,
                image: '/Lotus Midjourney Flowers/lotus-ketamine-therapy-hero.png',
                level: 'Basin',
                gradient: 'from-cyan-500 to-teal-500'
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
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border border-blue-100">
                  <div className="h-48 relative overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-60`}></div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full">
                      <span className="text-sm font-semibold text-blue-700">{service.level}</span>
                    </div>
                    
                    {/* Cascading water overlay */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{
                        background: 'linear-gradient(to bottom, transparent 0%, rgba(59, 130, 246, 0.2) 100%)',
                      }}
                    >
                      {Array.from({ length: 5 }, (_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-0.5 h-full bg-white/30"
                          style={{ left: `${20 + i * 15}%` }}
                          animate={{
                            y: ['-100%', '100%'],
                          }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            delay: i * 0.1,
                          }}
                        />
                      ))}
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
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <motion.a
                      href="#"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                      whileHover={{ x: 5 }}
                    >
                      Flow Deeper <FaChevronRight className="ml-2 w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Waterfall Visualization */}
      <section className="py-20 relative bg-gradient-to-b from-blue-50 to-cyan-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
              Your Wellness Cascade
            </h2>
            <p className="text-xl text-gray-600">Watch your health flow naturally</p>
          </motion.div>

          <motion.div
            className="relative h-96 rounded-3xl overflow-hidden bg-gradient-to-b from-sky-200 to-blue-300"
            whileHover={{ scale: 1.02 }}
          >
            {/* Waterfall animation */}
            <div className="absolute inset-0">
              {Array.from({ length: 15 }, (_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 bg-gradient-to-b from-white/60 to-blue-400/40"
                  style={{
                    left: `${20 + i * 4}%`,
                    height: '100%',
                  }}
                  animate={{
                    y: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 1.5 + Math.random(),
                    repeat: Infinity,
                    delay: i * 0.1,
                    ease: 'linear',
                  }}
                />
              ))}
            </div>
            
            {/* Rock formations */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-700 to-gray-600 opacity-50" 
              style={{
                clipPath: 'polygon(0 40%, 20% 20%, 40% 35%, 60% 15%, 80% 30%, 100% 25%, 100% 100%, 0 100%)',
              }}
            />
            
            <div className="relative z-10 flex items-center justify-center h-full">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-8"
              >
                <h3 className="text-3xl font-bold text-blue-800 mb-4">Continuous Flow</h3>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                  Your health journey cascades through multiple levels of care
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600"></div>
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
            Ready to Join the Flow?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-blue-100 mb-8"
          >
            Let your wellness cascade to new heights
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
              className="px-8 py-4 bg-white text-blue-600 rounded-full shadow-xl hover:shadow-2xl transition-all font-semibold"
            >
              Start Your Cascade
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent text-white rounded-full border-2 border-white hover:bg-white hover:text-blue-600 transition-all font-semibold"
            >
              Watch the Flow
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
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
              Connect to the Stream
            </h2>
            <p className="text-xl text-gray-600">Flow with us today</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl shadow-xl p-8 md:p-12"
          >
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                { icon: FaPhone, label: 'Flow Line', value: '(555) 123-4567' },
                { icon: FaEnvelope, label: 'Stream Mail', value: 'cascade@lotusdirect.care' },
                { icon: FaMapMarkerAlt, label: 'Falls Location', value: 'Tampa, FL' }
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
                    className="w-16 h-16 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <item.icon className="w-8 h-8 text-blue-600" />
                  </motion.div>
                  <h3 className="font-semibold text-gray-800 mb-1">{item.label}</h3>
                  <p className="text-gray-600">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 Lotus Direct Care. Cascading wellness for continuous health.</p>
        </div>
      </footer>
    </div>
  )
}