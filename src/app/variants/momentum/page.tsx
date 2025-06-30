'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
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
} from 'react-icons/fa';

export default function MomentumVariant() {
  const [velocity, setVelocity] = useState(0);
  const { scrollY } = useScroll();
  const dynamicY = useTransform(scrollY, [0, 1000], [0, -200]);

  useEffect(() => {
    const interval = setInterval(() => {
      setVelocity(prev => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 relative overflow-hidden">
      {/* Dynamic speed lines */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
            style={{
              top: `${10 + i * 8}%`,
              width: '200px',
            }}
            initial={{ x: -200, opacity: 0 }}
            animate={{
              x: 2000,
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1.5,
              delay: i * 0.3,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Motion trail */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-cyan-500 rounded-full"
            style={{
              left: '20%',
              top: '50%',
            }}
            animate={{
              x: [0, -50 * (i + 1)],
              opacity: [0.8, 0],
              scale: [1, 0.5],
            }}
            transition={{
              duration: 0.5,
              delay: i * 0.1,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

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
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 50 }}
          >
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6"
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Healthcare in Motion
              </span>
            </motion.h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Experience the velocity of modern medicine. We propel your health forward with 
              dynamic treatments and forward-thinking care that never stops moving.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05, x: 10 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-semibold shadow-lg flex items-center gap-2"
              >
                <FaRocket />
                Launch Your Health
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-cyan-400 text-cyan-400 rounded-full font-semibold hover:bg-cyan-400/10"
              >
                Track Progress
              </motion.button>
            </div>

            {/* Velocity meter */}
            <motion.div className="mt-8 p-4 bg-slate-800/50 rounded-lg border border-cyan-500/30">
              <div className="flex items-center justify-between mb-2">
                <span className="text-cyan-400 flex items-center gap-2">
                  <FaTachometerAlt />
                  Health Velocity
                </span>
                <span className="text-white font-bold">{velocity}%</span>
              </div>
              <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
                  style={{ width: `${velocity}%` }}
                />
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 50, delay: 0.2 }}
            className="relative"
          >
            <motion.div 
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              animate={{ 
                rotateY: [0, 5, 0],
                rotateX: [0, -5, 0]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Image
                src="/Lotus Midjourney Flowers/lotus-homepage-new.png"
                alt="Dynamic lotus"
                width={600}
                height={600}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" />
            </motion.div>
            
            {/* Motion blur effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-2xl"
              animate={{
                x: [-100, 100],
                opacity: [0, 0.5, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity
              }}
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section with Movement */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Services in Motion
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Dynamic healthcare solutions that keep pace with your life
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Direct Primary Care',
                icon: FaHeart,
                description: 'Healthcare that moves at your speed',
                image: '/Lotus Midjourney Flowers/lotus_dpc_hero.png',
                speed: '100mph'
              },
              {
                title: 'Functional Medicine',
                icon: FaUserMd,
                description: 'Accelerating your body\'s natural healing',
                image: '/Lotus Midjourney Flowers/lotus-functional-medicine-hero.png',
                speed: '150mph'
              },
              {
                title: 'Ketamine Therapy',
                icon: FaWind,
                description: 'Fast-track mental wellness',
                image: '/Lotus Midjourney Flowers/lotus-ketamine-therapy-hero.png',
                speed: '200mph'
              },
              {
                title: 'PRP Injections',
                icon: FaStar,
                description: 'Rapid regeneration technology',
                image: '/Lotus Midjourney Flowers/lotus-prp-injections-hero.png',
                speed: '250mph'
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 10, scale: 1.05 }}
                className="relative group"
              >
                <div className="bg-slate-800/80 backdrop-blur-lg rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-500/50 transition-all overflow-hidden">
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                    <motion.div
                      className="absolute top-2 right-2 bg-cyan-500/90 text-white px-3 py-1 rounded-full text-sm font-bold"
                      initial={{ x: -100 }}
                      whileInView={{ x: 0 }}
                      transition={{ type: 'spring', stiffness: 100 }}
                    >
                      {service.speed}
                    </motion.div>
                  </div>
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mb-4 shadow-lg"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                  
                  {/* Motion lines on hover */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute h-0.5 w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
                        style={{ top: `${30 + i * 20}%` }}
                        animate={{
                          x: [-300, 300],
                        }}
                        transition={{
                          duration: 1,
                          delay: i * 0.2,
                          repeat: Infinity,
                        }}
                      />
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section with Movement */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 50 }}
              className="relative"
            >
              <motion.div 
                className="relative rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src="/dr_rosenberg.jpg"
                  alt="Dr. Aaron Rosenberg"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" />
              </motion.div>
              
              {/* Speed indicators */}
              <motion.div
                className="absolute -bottom-6 -left-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg p-4 shadow-xl"
                animate={{
                  x: [0, 10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                <div className="flex items-center gap-2 text-white">
                  <FaRocket />
                  <span className="font-bold">Innovation Leader</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 50 }}
            >
              <h2 className="text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Dr. Aaron Rosenberg
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                Accelerating healthcare into the future
              </p>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Dr. Rosenberg brings momentum to medicine, combining rapid diagnostic techniques 
                with swift, effective treatments. His approach ensures your health journey moves 
                forward with purpose and velocity.
              </p>
              
              {/* Achievement metrics */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { label: 'Patients Helped', value: '5000+' },
                  { label: 'Years Experience', value: '15+' },
                  { label: 'Success Rate', value: '95%' }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <motion.div 
                      className="text-2xl font-bold text-cyan-400"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05, x: 10 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-semibold shadow-lg"
              >
                <FaChevronRight className="inline mr-2" />
                Meet Dr. Rosenberg
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0">
          <Image
            src="/Lotus Midjourney Flowers/lotus_contact_hero.png"
            alt="Contact background"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-cyan-900/90" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to Accelerate Your Health?
          </motion.h2>
          <motion.p
            className="text-xl text-cyan-100 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Join us in the fast lane to wellness
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <motion.button
              whileHover={{ scale: 1.05, x: 10 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold shadow-xl"
            >
              <FaPhone className="inline mr-2" />
              (555) 123-4567
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white/10"
            >
              <FaEnvelope className="inline mr-2" />
              Email Us
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-950 text-gray-400 border-t border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 Lotus Direct Care. Healthcare in perpetual motion.</p>
        </div>
      </footer>
    </div>
  );
}