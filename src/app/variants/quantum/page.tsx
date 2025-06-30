'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { 
  FaAtom, 
  FaHeart, 
  FaUserMd, 
  FaStar,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaChevronRight,
  FaDna,
  FaFlask,
  FaMicroscope
} from 'react-icons/fa'

export default function QuantumVariant() {
  const [particlePositions, setParticlePositions] = useState<{ x: number; y: number; id: number }[]>([])
  const { scrollY } = useScroll()
  const moleculeRotation = useTransform(scrollY, [0, 1000], [0, 360])

  // Quantum particle animation
  useEffect(() => {
    const particles = Array.from({ length: 20 }, (_, i) => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      id: i
    }))
    setParticlePositions(particles)
  }, [])

  // Electron orbit paths
  const ElectronOrbit = ({ radius, duration, delay }: { radius: number; duration: number; delay: number }) => (
    <motion.div
      className="absolute w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(0,255,255,0.8)]"
      style={{
        left: '50%',
        top: '50%',
        marginLeft: '-4px',
        marginTop: '-4px',
      }}
      animate={{
        x: [
          0,
          radius * Math.cos(0),
          radius * Math.cos(Math.PI / 2),
          radius * Math.cos(Math.PI),
          radius * Math.cos(3 * Math.PI / 2),
          0,
        ],
        y: [
          -radius,
          -radius * Math.sin(0),
          -radius * Math.sin(Math.PI / 2),
          -radius * Math.sin(Math.PI),
          -radius * Math.sin(3 * Math.PI / 2),
          -radius,
        ],
      }}
      transition={{
        duration,
        repeat: Infinity,
        delay,
        ease: 'linear',
      }}
    />
  )

  // Molecular structure component
  const MolecularStructure = () => (
    <motion.svg
      width="200"
      height="200"
      className="absolute opacity-20"
      style={{ rotate: moleculeRotation }}
    >
      {/* Central atom */}
      <circle cx="100" cy="100" r="15" fill="url(#atomGradient)" />
      
      {/* Bonds */}
      <line x1="100" y1="100" x2="50" y2="50" stroke="#00ffff" strokeWidth="2" />
      <line x1="100" y1="100" x2="150" y2="50" stroke="#00ffff" strokeWidth="2" />
      <line x1="100" y1="100" x2="50" y2="150" stroke="#00ffff" strokeWidth="2" />
      <line x1="100" y1="100" x2="150" y2="150" stroke="#00ffff" strokeWidth="2" />
      
      {/* Surrounding atoms */}
      <circle cx="50" cy="50" r="10" fill="#00ffff" />
      <circle cx="150" cy="50" r="10" fill="#00ffff" />
      <circle cx="50" cy="150" r="10" fill="#00ffff" />
      <circle cx="150" cy="150" r="10" fill="#00ffff" />
      
      <defs>
        <radialGradient id="atomGradient">
          <stop offset="0%" stopColor="#00ffff" />
          <stop offset="100%" stopColor="#0088cc" />
        </radialGradient>
      </defs>
    </motion.svg>
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 relative overflow-hidden">
      {/* Quantum particle field */}
      <div className="fixed inset-0 pointer-events-none">
        {particlePositions.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: particle.x,
              top: particle.y,
              boxShadow: '0 0 6px rgba(0, 255, 255, 0.8)',
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Molecular structures */}
      <div className="fixed left-20 top-40">
        <MolecularStructure />
      </div>
      <div className="fixed right-20 bottom-40">
        <MolecularStructure />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-lg shadow-lg z-50 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <FaAtom className="h-8 w-8 text-cyan-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Lotus Quantum
              </span>
            </motion.div>
            <div className="flex space-x-8">
              {['Services', 'About', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-cyan-400 transition-colors relative group"
                  whileHover={{ y: -2 }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
                </motion.a>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full shadow-lg hover:shadow-cyan-500/25 transition-all"
              >
                Enter Quantum State
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Quantum Effects */}
      <motion.section 
        className="relative min-h-screen flex items-center justify-center pt-16"
      >
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'radial-gradient(circle at 30% 40%, rgba(0, 255, 255, 0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 70% 60%, rgba(0, 136, 204, 0.1) 0%, transparent 50%)',
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
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Quantum Healing Revolution
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Experience healthcare at the molecular level. Where cutting-edge science 
              meets personalized medicine in perfect quantum harmony.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full shadow-xl hover:shadow-cyan-500/25 transition-all flex items-center justify-center space-x-2"
              >
                <FaFlask className="w-5 h-5" />
                <span>Discover Your Formula</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent text-cyan-400 rounded-full shadow-xl hover:shadow-cyan-500/25 transition-all border border-cyan-500/50"
              >
                Explore Quantum
              </motion.button>
            </div>

            {/* Quantum wave visualization */}
            <motion.div className="mt-12 relative h-20">
              <svg width="100%" height="100%" className="absolute inset-0">
                <motion.path
                  d="M 0 40 Q 50 20 100 40 T 200 40 T 300 40 T 400 40"
                  stroke="cyan"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
              </svg>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Atomic structure background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="relative w-96 h-96"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                {/* Electron orbits */}
                <div className="absolute inset-0 border border-cyan-500/20 rounded-full"></div>
                <div className="absolute inset-4 border border-cyan-500/20 rounded-full"></div>
                <div className="absolute inset-8 border border-cyan-500/20 rounded-full"></div>
                
                <ElectronOrbit radius={180} duration={8} delay={0} />
                <ElectronOrbit radius={140} duration={6} delay={1} />
                <ElectronOrbit radius={100} duration={4} delay={2} />
              </motion.div>
            </div>
            
            <Image
              src="/Lotus Midjourney Flowers/lotus_about_hero.png"
              alt="Quantum Lotus"
              width={600}
              height={600}
              className="relative z-10 rounded-3xl shadow-2xl border border-cyan-500/20"
              style={{
                filter: 'hue-rotate(180deg) brightness(1.1)',
              }}
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Meet Dr. Rosenberg Section */}
      <section className="py-20 relative bg-gradient-to-b from-slate-950 to-blue-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
              The Quantum Physician
            </h2>
            <p className="text-xl text-gray-300">Pioneering molecular-level healing</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl blur-3xl opacity-20"></div>
              <Image
                src="/dr_rosenberg.jpg"
                alt="Dr. Aaron Rosenberg"
                width={500}
                height={600}
                className="relative z-10 rounded-3xl shadow-2xl border border-cyan-500/20"
              />
              {/* Floating molecules */}
              <motion.div
                className="absolute -top-10 -right-10"
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              >
                <FaDna className="w-24 h-24 text-cyan-500/20" />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-white mb-4">Dr. Aaron Rosenberg</h3>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                A pioneer in quantum medicine, Dr. Rosenberg harnesses the power of molecular 
                science to deliver precision healthcare. His approach examines health at the 
                smallest scales to create the biggest impacts on your wellness.
              </p>
              <div className="space-y-4">
                {[
                  { icon: FaAtom, text: 'Molecular Precision Medicine', pulse: true },
                  { icon: FaMicroscope, text: 'Advanced Diagnostic Technologies', pulse: false },
                  { icon: FaDna, text: 'Genetic Optimization Protocols', pulse: true }
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
                      animate={item.pulse ? { scale: [1, 1.1, 1] } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
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

      {/* Services Section with Quantum Cards */}
      <section id="services" className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
              Quantum Services Matrix
            </h2>
            <p className="text-xl text-gray-300">Precision healthcare at the molecular level</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Molecular Medicine',
                description: 'Targeted treatments at the cellular level',
                icon: FaAtom,
                image: '/Lotus Midjourney Flowers/lotus_dpc_hero.png',
                particles: 15,
                gradient: 'from-cyan-500 to-blue-500'
              },
              {
                title: 'Genetic Optimization',
                description: 'Unlock your DNA\'s full potential',
                icon: FaDna,
                image: '/Lotus Midjourney Flowers/lotus-functional-medicine-hero.png',
                particles: 20,
                gradient: 'from-blue-500 to-indigo-500'
              },
              {
                title: 'Quantum Therapies',
                description: 'Revolutionary healing modalities',
                icon: FaFlask,
                image: '/Lotus Midjourney Flowers/lotus-ketamine-therapy-hero.png',
                particles: 25,
                gradient: 'from-indigo-500 to-cyan-500'
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
                {/* Quantum particle effect */}
                <div className="absolute inset-0 overflow-hidden rounded-3xl">
                  {Array.from({ length: service.particles }, (_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        x: [0, Math.random() * 50 - 25, 0],
                        y: [0, Math.random() * 50 - 25, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: Math.random() * 3,
                      }}
                    />
                  ))}
                </div>
                
                <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-3xl overflow-hidden border border-cyan-500/20 hover:border-cyan-500/50 transition-colors">
                  <div className="h-48 relative overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      style={{
                        filter: 'brightness(0.7) hue-rotate(180deg)',
                      }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-60`}></div>
                  </div>
                  <div className="p-8">
                    <motion.div 
                      className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-cyan-500/25`}
                      whileHover={{ rotate: 180 }}
                      transition={{ duration: 0.5 }}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-400 mb-4">{service.description}</p>
                    <motion.a
                      href="#"
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium"
                      whileHover={{ x: 5 }}
                    >
                      Analyze <FaChevronRight className="ml-2 w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quantum Lab Animation */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
              The Quantum Laboratory
            </h2>
            <p className="text-xl text-gray-300">Where science meets healing</p>
          </motion.div>

          <motion.div
            className="relative h-96 rounded-3xl overflow-hidden bg-slate-900/50 backdrop-blur-xl border border-cyan-500/20"
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Central quantum core */}
              <motion.div
                className="relative w-64 h-64"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-3xl opacity-30"></div>
                <div className="absolute inset-8 bg-slate-900 rounded-full border-2 border-cyan-500/50"></div>
                <div className="absolute inset-16 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-pulse"></div>
                
                {/* Orbiting particles */}
                {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-3 h-3 bg-cyan-400 rounded-full"
                    style={{
                      left: '50%',
                      top: '50%',
                      marginLeft: '-6px',
                      marginTop: '-6px',
                    }}
                    animate={{
                      x: Math.cos((angle * Math.PI) / 180) * 100,
                      y: Math.sin((angle * Math.PI) / 180) * 100,
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
                <h3 className="text-3xl font-bold text-white mb-4">Precision at Every Level</h3>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  Our quantum approach analyzes your health at the molecular level for unprecedented precision
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600"></div>
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundImage: [
              'radial-gradient(circle at 20% 50%, rgba(0, 255, 255, 0.2) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(0, 136, 204, 0.2) 0%, transparent 50%)',
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
            Enter the Quantum Realm
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-cyan-100 mb-8"
          >
            Transform your health at the molecular level
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
            >
              Start Quantum Analysis
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent text-white rounded-full border-2 border-white hover:bg-white hover:text-cyan-600 transition-all font-semibold"
            >
              Learn Quantum Medicine
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
            <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
              Quantum Connection
            </h2>
            <p className="text-xl text-gray-300">Entangle with us today</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900/80 backdrop-blur-xl rounded-3xl shadow-xl p-8 md:p-12 border border-cyan-500/20"
          >
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                { icon: FaPhone, label: 'Quantum Line', value: '(555) 123-4567' },
                { icon: FaEnvelope, label: 'Digital Portal', value: 'quantum@lotusdirect.care' },
                { icon: FaMapMarkerAlt, label: 'Lab Location', value: 'Tampa, FL' }
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
                    className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-cyan-500/25"
                    whileHover={{ scale: 1.1, rotate: 180 }}
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
      <footer className="py-8 bg-slate-900 text-white border-t border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 Lotus Direct Care. Quantum healing for a new era.</p>
        </div>
      </footer>
    </div>
  )
}