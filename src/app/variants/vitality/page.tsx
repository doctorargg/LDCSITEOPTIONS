'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { FiMenu, FiX, FiPhone, FiMail, FiCalendar, FiArrowRight, FiActivity, FiZap, FiTarget, FiTrendingUp, FiAward } from 'react-icons/fi';

export default function VitalityVariant() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [energyLevel, setEnergyLevel] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        mouseX.set(x);
        mouseY.set(y);
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setEnergyLevel((prev) => (prev + 1) % 101);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      title: 'Performance Medicine',
      description: 'Optimize your body\'s peak potential',
      icon: FiTrendingUp,
      color: 'from-orange-400 to-red-600',
      image: '/Lotus Midjourney Flowers/lotus_dpc_hero.png',
      stats: '95% energy boost'
    },
    {
      title: 'Biohacking Therapies',
      description: 'Cutting-edge wellness technology',
      icon: FiZap,
      color: 'from-yellow-400 to-orange-600',
      image: '/Lotus Midjourney Flowers/lotus-functional-medicine-hero.png',
      stats: '3x faster recovery'
    },
    {
      title: 'Athletic Recovery',
      description: 'Elite-level regeneration protocols',
      icon: FiActivity,
      color: 'from-green-400 to-emerald-600',
      image: '/Lotus Midjourney Flowers/lotus-prp-injections-hero.png',
      stats: '80% performance gain'
    },
    {
      title: 'Mental Edge',
      description: 'Sharpen focus and clarity',
      icon: FiTarget,
      color: 'from-purple-400 to-indigo-600',
      image: '/Lotus Midjourney Flowers/lotus-ketamine-therapy-hero.png',
      stats: '10x mental clarity'
    }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-white overflow-hidden">
      {/* Dynamic Energy Grid Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/20 to-purple-900/20" />
        <svg className="absolute inset-0 w-full h-full">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(255,165,0,0.1)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        
        {/* Energy Particles */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-orange-500 rounded-full"
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080)
            }}
            animate={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080)
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              boxShadow: '0 0 10px rgba(255,165,0,0.8)'
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <motion.nav
        className="fixed w-full z-50 bg-black/80 backdrop-blur-xl border-b border-orange-500/20"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center space-x-3">
              <motion.div 
                className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center relative overflow-hidden"
                whileHover={{ scale: 1.1, rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                <FiZap className="text-white text-2xl z-10" />
                <motion.div
                  className="absolute inset-0 bg-yellow-400"
                  animate={{
                    scale: [0, 1.5, 0],
                    opacity: [0, 0.5, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity
                  }}
                />
              </motion.div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">
                  LOTUS VITALITY
                </span>
                <p className="text-xs text-orange-400">ENERGY LEVEL: {energyLevel}%</p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {['POWER', 'PERFORMANCE', 'RECOVERY', 'RESULTS'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-orange-400 font-bold tracking-wider transition-colors relative group"
                  whileHover={{ scale: 1.1 }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-orange-400 to-red-600 group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
              <motion.button
                className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-3 rounded-lg font-bold tracking-wider hover:shadow-[0_0_30px_rgba(255,165,0,0.6)] transition-shadow relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">IGNITE NOW</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-orange-400"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section with Interactive Energy Field */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-br from-orange-500/30 to-red-600/30 rounded-full blur-3xl"
          style={{
            x: springX,
            y: springY,
            translateX: '-50%',
            translateY: '-50%'
          }}
        />

        <div className="absolute inset-0 z-0">
          <Image
            src="/Lotus Midjourney Flowers/lotus-homepage-new.png"
            alt="Vitality lotus"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <motion.h1
              className="text-6xl md:text-8xl font-black mb-6 tracking-tighter"
              animate={{
                textShadow: [
                  '0 0 20px rgba(255,165,0,0.5)',
                  '0 0 40px rgba(255,165,0,0.8)',
                  '0 0 20px rgba(255,165,0,0.5)'
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity
              }}
            >
              <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
                UNLEASH
              </span>
              <br />
              <span className="text-white">YOUR POWER</span>
            </motion.h1>
            
            <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-bold">
              MAXIMUM PERFORMANCE. OPTIMAL HEALTH. LIMITLESS ENERGY.
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-12">
              {['100% NATURAL', 'SCIENCE-BACKED', 'ELITE PROTOCOLS'].map((tag, index) => (
                <motion.div
                  key={tag}
                  className="bg-orange-500/20 border border-orange-500/50 px-6 py-2 rounded-full text-orange-400 font-bold"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <FiAward className="inline mr-2" />
                  {tag}
                </motion.div>
              ))}
            </div>

            <motion.div
              className="inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-12 py-6 rounded-lg font-black text-xl tracking-wider hover:shadow-[0_0_50px_rgba(255,165,0,0.8)] transition-all relative overflow-hidden group">
                <span className="relative z-10 flex items-center gap-3">
                  START YOUR TRANSFORMATION
                  <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Energy Meter */}
        <motion.div
          className="absolute bottom-10 left-10 bg-black/80 backdrop-blur-xl border border-orange-500/50 rounded-lg p-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
        >
          <h3 className="text-orange-400 font-bold mb-2">VITALITY METER</h3>
          <div className="w-48 h-4 bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-orange-500 to-red-600"
              style={{ width: `${energyLevel}%` }}
            />
          </div>
          <p className="text-xs text-gray-400 mt-2">CHARGING YOUR POTENTIAL</p>
        </motion.div>
      </section>

      {/* Services Section - Power Grid */}
      <section id="power" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              <span className="bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">
                POWER PROTOCOLS
              </span>
            </h2>
            <p className="text-xl text-gray-400 font-bold">
              ELITE TREATMENTS FOR PEAK PERFORMANCE
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-gray-900 to-black border border-orange-500/20 hover:border-orange-500/50 transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 40px rgba(255,165,0,0.5)'
                }}
              >
                <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="relative z-10 p-6">
                  <motion.div
                    className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${service.color} mb-4`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <service.icon size={30} />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-orange-400 font-bold text-lg">{service.stats}</span>
                    <motion.div
                      className="w-16 h-1 bg-gradient-to-r from-orange-500 to-red-600"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    />
                  </div>
                  
                  <motion.button
                    className="w-full bg-orange-500/20 border border-orange-500/50 text-orange-400 py-3 rounded-lg font-bold hover:bg-orange-500 hover:text-white transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    ACTIVATE
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-lg overflow-hidden">
                <Image
                  src="/dr_rosenberg.jpg"
                  alt="Dr. Aaron Rosenberg"
                  width={600}
                  height={700}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-600/30 to-transparent" />
              </div>
              <motion.div
                className="absolute -bottom-6 -right-6 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg p-6 shadow-2xl"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(255,165,0,0.5)',
                    '0 0 40px rgba(255,165,0,0.8)',
                    '0 0 20px rgba(255,165,0,0.5)'
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity
                }}
              >
                <h3 className="text-2xl font-bold mb-2">DR. ROSENBERG</h3>
                <p className="text-sm">PERFORMANCE OPTIMIZATION EXPERT</p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                PROVEN
                <span className="block bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">
                  RESULTS
                </span>
              </h2>
              
              <div className="space-y-6 mb-8">
                {[
                  { label: 'ENERGY BOOST', value: 95 },
                  { label: 'RECOVERY SPEED', value: 87 },
                  { label: 'MENTAL CLARITY', value: 92 },
                  { label: 'PERFORMANCE GAIN', value: 89 }
                ].map((stat, index) => (
                  <div key={stat.label}>
                    <div className="flex justify-between mb-2">
                      <span className="font-bold text-gray-300">{stat.label}</span>
                      <span className="text-orange-400 font-bold">{stat.value}%</span>
                    </div>
                    <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-orange-500 to-red-600"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${stat.value}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2, duration: 1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <motion.button
                className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-lg font-bold hover:shadow-[0_0_30px_rgba(255,165,0,0.6)] transition-shadow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                GET YOUR RESULTS
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/Lotus Midjourney Flowers/lotus_pricing_hero.png"
            alt="CTA background"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/90 to-red-600/90" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <motion.h2
            className="text-5xl md:text-6xl font-black mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            READY TO LEVEL UP?
          </motion.h2>
          <motion.p
            className="text-2xl mb-8 font-bold"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            JOIN THE ELITE. UNLOCK YOUR POTENTIAL.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <motion.button
              className="bg-white text-black px-10 py-5 rounded-lg font-black text-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-shadow inline-flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiZap />
              ACTIVATE NOW
            </motion.button>
            <motion.button
              className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-lg font-black text-lg hover:bg-white hover:text-black transition-all inline-flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiPhone />
              CALL: (555) 123-4567
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-orange-500/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 font-bold">&copy; 2025 LOTUS VITALITY. POWER UP YOUR LIFE.</p>
        </div>
      </footer>
    </div>
  );
}