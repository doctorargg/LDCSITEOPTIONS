'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiMenu, FiX, FiPhone, FiMail, FiCalendar, FiArrowRight, FiSun, FiMoon, FiStar, FiZap, FiFeather } from 'react-icons/fi';

export default function RadianceVariant() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentHour, setCurrentHour] = useState(new Date().getHours());
  const [sparkles, setSparkles] = useState<{x: number, y: number, id: number}[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const sunPosition = useTransform(scrollYProgress, [0, 1], [0, 180]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHour(new Date().getHours());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (Math.random() > 0.95) {
        const newSparkle = {
          x: e.clientX,
          y: e.clientY,
          id: Date.now()
        };
        setSparkles(prev => [...prev.slice(-20), newSparkle]);
        setTimeout(() => {
          setSparkles(prev => prev.filter(s => s.id !== newSparkle.id));
        }, 1000);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const timeGradient = currentHour < 6 || currentHour > 20 
    ? 'from-indigo-900 via-purple-800 to-pink-900'
    : currentHour < 12 
    ? 'from-amber-300 via-orange-200 to-yellow-100'
    : currentHour < 18
    ? 'from-blue-400 via-cyan-300 to-teal-200'
    : 'from-orange-400 via-pink-300 to-purple-400';

  return (
    <div ref={containerRef} className={`min-h-screen bg-gradient-to-br ${timeGradient} transition-all duration-3000`}>
      {/* Sparkle Effects */}
      {sparkles.map(sparkle => (
        <motion.div
          key={sparkle.id}
          className="fixed w-2 h-2 bg-white rounded-full pointer-events-none"
          initial={{ 
            x: sparkle.x, 
            y: sparkle.y, 
            scale: 0,
            opacity: 1
          }}
          animate={{ 
            scale: [0, 1, 0],
            opacity: [1, 1, 0],
            y: sparkle.y - 50
          }}
          transition={{ duration: 1 }}
          style={{
            boxShadow: '0 0 20px rgba(255,255,255,0.8)',
            position: 'fixed'
          }}
        />
      ))}

      {/* Radiant Light Rays */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20"
          style={{ rotate: sunPosition }}
        >
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-96 bg-gradient-to-b from-yellow-400/30 to-transparent"
              style={{
                transform: `rotate(${i * 30}deg)`,
                transformOrigin: 'top center'
              }}
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scaleY: [0.8, 1, 0.8]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/20 backdrop-blur-xl border-b border-white/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center space-x-3">
              <motion.div 
                className="relative w-14 h-14"
                animate={{
                  filter: [
                    'drop-shadow(0 0 10px rgba(255,255,255,0.5))',
                    'drop-shadow(0 0 20px rgba(255,255,255,0.8))',
                    'drop-shadow(0 0 10px rgba(255,255,255,0.5))'
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity
                }}
              >
                <Image
                  src="/images/LOGOTRANSPARENTFLOWERONLY1.png"
                  alt="Lotus"
                  fill
                  className="object-contain"
                />
              </motion.div>
              <div>
                <span className="text-2xl font-light text-white drop-shadow-lg">
                  Lotus Radiance
                </span>
                <p className="text-xs text-white/80">
                  {currentHour < 12 ? '☀️ Morning Glow' : currentHour < 18 ? '🌤️ Afternoon Light' : '🌙 Evening Radiance'}
                </p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {['Illuminate', 'Transform', 'Energize', 'Shine'].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-white/90 hover:text-white font-medium transition-colors relative"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ 
                    textShadow: '0 0 20px rgba(255,255,255,0.8)',
                    scale: 1.05 
                  }}
                >
                  {item}
                </motion.a>
              ))}
              <motion.button
                className="bg-white/30 backdrop-blur-md text-white px-6 py-3 rounded-full font-medium border border-white/50 hover:bg-white/40 transition-all"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 30px rgba(255,255,255,0.5)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                Begin Your Glow
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section with Radiant Effects */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Lotus Midjourney Flowers/lotus-homepage-new.png"
            alt="Radiant lotus"
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-white/40" />
        </div>

        {/* Floating Light Orbs */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 rounded-full"
            style={{
              background: `radial-gradient(circle, rgba(255,255,255,0.${3 + i}) 0%, transparent 70%)`,
              filter: 'blur(10px)'
            }}
            animate={{
              x: [0, 100, -100, 0],
              y: [0, -100, 100, 0],
              scale: [1, 1.2, 0.8, 1]
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              delay: i * 2
            }}
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080)
            }}
          />
        ))}

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-light mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              textShadow: '0 0 40px rgba(255,255,255,0.6)'
            }}
          >
            Discover Your
            <motion.span 
              className="block font-normal"
              animate={{
                filter: [
                  'brightness(1)',
                  'brightness(1.3)',
                  'brightness(1)'
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity
              }}
            >
              Inner Radiance
            </motion.span>
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Illuminate your path to wellness with light-infused healing and transformative care
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.button
              className="bg-white/90 text-gray-800 px-8 py-4 rounded-full font-medium hover:bg-white transition-all inline-flex items-center gap-2 shadow-xl"
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 40px rgba(255,255,255,0.8)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <FiSun className="text-yellow-500" />
              Illuminate Your Health
            </motion.button>
            <motion.button
              className="bg-transparent border-2 border-white/80 text-white px-8 py-4 rounded-full font-medium hover:bg-white/20 transition-all inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiCalendar />
              Schedule Consultation
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Services as Light Spectrum */}
      <section id="illuminate" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-light mb-4 text-white">
              Spectrum of Healing Light
            </h2>
            <p className="text-xl text-white/80">
              Each wavelength designed to restore your natural glow
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Golden Ray Therapy',
                description: 'Direct primary care with warmth and personal attention',
                color: 'from-yellow-300 to-amber-500',
                icon: FiSun,
                image: '/Lotus Midjourney Flowers/lotus_dpc_hero.png',
                wavelength: '570nm'
              },
              {
                title: 'Violet Light Medicine',
                description: 'Functional medicine for deep cellular healing',
                color: 'from-purple-400 to-indigo-600',
                icon: FiStar,
                image: '/Lotus Midjourney Flowers/lotus-functional-medicine-hero.png',
                wavelength: '430nm'
              },
              {
                title: 'Blue Wave Therapy',
                description: 'Mental clarity through ketamine treatment',
                color: 'from-blue-400 to-cyan-600',
                icon: FiZap,
                image: '/Lotus Midjourney Flowers/lotus-ketamine-therapy-hero.png',
                wavelength: '480nm'
              },
              {
                title: 'Green Regeneration',
                description: 'Natural healing with PRP treatments',
                color: 'from-green-400 to-emerald-600',
                icon: FiFeather,
                image: '/Lotus Midjourney Flowers/lotus-prp-injections-hero.png',
                wavelength: '530nm'
              },
              {
                title: 'Rose Light Recovery',
                description: 'Compassionate addiction treatment',
                color: 'from-pink-400 to-rose-600',
                icon: FiMoon,
                image: '/Lotus Midjourney Flowers/lotus-addiction-treatment-hero.png',
                wavelength: '640nm'
              },
              {
                title: 'White Light Integration',
                description: 'Holistic wellness consultations',
                color: 'from-gray-200 to-gray-400',
                icon: FiSun,
                image: '/Lotus Midjourney Flowers/lotus_services_hero.png',
                wavelength: 'Full Spectrum'
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                className="group relative"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: `linear-gradient(135deg, ${service.color.split(' ')[1]} 0%, ${service.color.split(' ')[3]} 100%)`,
                    filter: 'blur(20px)',
                    opacity: 0.5
                  }}
                  whileHover={{
                    scale: 1.1,
                    opacity: 0.8
                  }}
                />
                
                <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/30 hover:border-white/50 transition-all">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover opacity-70 group-hover:opacity-90 transition-opacity"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-50`} />
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md rounded-full px-3 py-1 text-white text-sm">
                      {service.wavelength}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className={`inline-flex p-3 rounded-full bg-gradient-to-br ${service.color} text-white mb-4`}>
                      <service.icon size={24} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
                    <p className="text-white/80 mb-4">{service.description}</p>
                    <motion.a
                      href="#"
                      className="inline-flex items-center gap-2 text-white hover:gap-3 transition-all"
                      whileHover={{ x: 5 }}
                    >
                      Explore Light <FiArrowRight />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Energy Flow Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)'
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 4,
              repeat: Infinity
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-light mb-6 text-white">
                Dr. Aaron Rosenberg
                <span className="block text-2xl font-normal mt-2">
                  Your Guide to Luminous Health
                </span>
              </h2>
              <p className="text-lg text-white/90 mb-6 leading-relaxed">
                "Like light that nourishes and heals, I believe healthcare should illuminate your path to wellness. My approach combines the science of modern medicine with the wisdom of natural healing."
              </p>
              <div className="space-y-4 mb-8">
                <motion.div 
                  className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/30"
                  whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.15)' }}
                >
                  <h4 className="font-semibold text-white mb-1">Light Therapy Pioneer</h4>
                  <p className="text-white/80 text-sm">Integrating photobiomodulation with traditional care</p>
                </motion.div>
                <motion.div 
                  className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/30"
                  whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.15)' }}
                >
                  <h4 className="font-semibold text-white mb-1">Energy Medicine Expert</h4>
                  <p className="text-white/80 text-sm">Balancing biofield energy for optimal wellness</p>
                </motion.div>
                <motion.div 
                  className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/30"
                  whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.15)' }}
                >
                  <h4 className="font-semibold text-white mb-1">Holistic Practitioner</h4>
                  <p className="text-white/80 text-sm">15+ years illuminating paths to health</p>
                </motion.div>
              </div>
              <motion.button
                className="bg-white/90 text-gray-800 px-8 py-4 rounded-full font-medium hover:bg-white transition-all inline-flex items-center gap-2 shadow-xl"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 40px rgba(255,255,255,0.8)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <FiStar />
                Meet Dr. Rosenberg
              </motion.button>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="absolute inset-0 rounded-3xl"
                style={{
                  background: 'radial-gradient(circle at center, rgba(255,255,255,0.3) 0%, transparent 70%)',
                  filter: 'blur(40px)'
                }}
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity
                }}
              />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/dr_rosenberg.jpg"
                  alt="Dr. Aaron Rosenberg"
                  width={600}
                  height={700}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/Lotus Midjourney Flowers/lotus_contact_hero.png"
            alt="Contact background"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/80 to-orange-600/80" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-light text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              textShadow: '0 0 30px rgba(255,255,255,0.5)'
            }}
          >
            Step Into the Light of Wellness
          </motion.h2>
          <motion.p
            className="text-xl text-white/90 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Begin your journey to radiant health today
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <motion.button
              className="bg-white text-amber-600 px-8 py-4 rounded-full font-medium hover:shadow-[0_0_40px_rgba(255,255,255,0.8)] transition-all inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiSun />
              Book Your Illumination
            </motion.button>
            <motion.button
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white/20 transition-all inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiPhone />
              (555) 123-4567
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-xl text-white py-12 border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/80">&copy; 2025 Lotus Direct Care. Illuminating your path to wellness.</p>
        </div>
      </footer>
    </div>
  );
}