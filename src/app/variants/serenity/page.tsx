'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiMenu, FiX, FiPhone, FiMail, FiCalendar, FiArrowRight, FiHeart, FiShield, FiUsers, FiStar, FiFeather, FiDroplet } from 'react-icons/fi';

export default function SerenityVariant() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const timeOfDay = currentTime.getHours() < 12 ? 'morning' : currentTime.getHours() < 18 ? 'afternoon' : 'evening';
  const gradient = {
    morning: 'from-blue-100 via-teal-50 to-cyan-100',
    afternoon: 'from-amber-100 via-orange-50 to-yellow-100',
    evening: 'from-purple-100 via-pink-50 to-indigo-100'
  }[timeOfDay];

  return (
    <div className={`min-h-screen bg-gradient-to-br ${gradient} transition-all duration-1000`}>
      {/* Ripple Effect Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-teal-300/20"
            initial={{ width: 0, height: 0, opacity: 0 }}
            animate={{
              width: [0, 500, 1000],
              height: [0, 500, 1000],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 2,
              ease: "easeOut"
            }}
            style={{
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)'
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center space-x-3">
              <motion.div 
                className="relative w-14 h-14"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src="/images/LOGOTRANSPARENTFLOWERONLY1.png"
                  alt="Lotus"
                  fill
                  className="object-contain"
                />
              </motion.div>
              <div>
                <span className="text-2xl font-light text-gray-800">Lotus Direct Care</span>
                <p className="text-xs text-gray-600">Good {timeOfDay}, welcome to serenity</p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {['Services', 'Philosophy', 'Journey', 'Connect'].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-teal-600 font-light transition-colors relative"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item}
                  <FiFeather className="inline-block ml-1 w-3 h-3" />
                </motion.a>
              ))}
              <motion.button
                className="bg-gradient-to-r from-teal-400 to-cyan-500 text-white px-6 py-3 rounded-full font-light hover:shadow-lg transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Begin Your Journey
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section with Parallax */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <motion.div
          className="absolute inset-0 z-0"
          style={{ opacity, scale }}
        >
          <Image
            src="/Lotus Midjourney Flowers/lotus_services_hero.png"
            alt="Serenity lotus"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-white/70" />
        </motion.div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-light mb-6 text-gray-800">
              Find Your
              <br />
              <span className="font-normal bg-gradient-to-r from-teal-500 to-cyan-600 bg-clip-text text-transparent">
                Inner Balance
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
              Where ancient wisdom meets modern medicine, creating a sanctuary for your health and wellbeing
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.div
                className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-xl"
                whileHover={{ y: -5 }}
              >
                <FiDroplet className="text-teal-500 mb-4" size={40} />
                <h3 className="text-lg font-medium mb-2">Holistic Care</h3>
                <p className="text-gray-600 text-sm">Mind, body, and spirit in harmony</p>
              </motion.div>
              
              <motion.div
                className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-xl"
                whileHover={{ y: -5 }}
              >
                <FiFeather className="text-cyan-500 mb-4" size={40} />
                <h3 className="text-lg font-medium mb-2">Gentle Healing</h3>
                <p className="text-gray-600 text-sm">Natural approaches to wellness</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Floating Meditation Timer */}
        <motion.div
          className="absolute bottom-10 right-10 bg-white/80 backdrop-blur-md rounded-full p-4 shadow-lg"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="text-sm text-gray-600">Breathe with us</p>
          <p className="text-2xl font-light text-teal-600">
            {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </p>
        </motion.div>
      </section>

      {/* Services as Journey Steps */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-light mb-4 text-gray-800">
              Your Wellness Journey
            </h2>
            <p className="text-xl text-gray-600 font-light">
              Each step brings you closer to optimal health
            </p>
          </motion.div>

          <div className="relative">
            {/* Journey Path */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-teal-300 to-cyan-300" />
            
            {[
              {
                title: 'Direct Primary Care',
                description: 'Begin with personalized attention',
                image: '/Lotus Midjourney Flowers/lotus_dpc_hero.png',
                icon: FiHeart
              },
              {
                title: 'Functional Medicine',
                description: 'Discover root causes',
                image: '/Lotus Midjourney Flowers/lotus-functional-medicine-hero.png',
                icon: FiShield
              },
              {
                title: 'Mind-Body Therapies',
                description: 'Heal from within',
                image: '/Lotus Midjourney Flowers/lotus-ketamine-therapy-hero.png',
                icon: FiUsers
              },
              {
                title: 'Regenerative Treatments',
                description: 'Restore and renew',
                image: '/Lotus Midjourney Flowers/lotus-prp-injections-hero.png',
                icon: FiStar
              }
            ].map((step, index) => (
              <motion.div
                key={step.title}
                className={`relative flex items-center mb-16 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                  <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
                    <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-teal-500/30 to-transparent" />
                    </div>
                    <step.icon className="text-teal-500 mb-4" size={32} />
                    <h3 className="text-2xl font-medium mb-2 text-gray-800">{step.title}</h3>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    <motion.a
                      href="#"
                      className="inline-flex items-center gap-2 text-teal-600 hover:text-cyan-600 font-medium"
                      whileHover={{ x: 5 }}
                    >
                      Explore <FiArrowRight />
                    </motion.a>
                  </div>
                </div>
                
                {/* Journey Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                  {index + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-20 bg-white/50 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-light mb-6 text-gray-800">
                The Art of
                <span className="block font-normal bg-gradient-to-r from-teal-500 to-cyan-600 bg-clip-text text-transparent">
                  Mindful Medicine
                </span>
              </h2>
              <p className="text-lg text-gray-700 mb-6 font-light leading-relaxed">
                Dr. Aaron Rosenberg brings a unique blend of traditional medical expertise and holistic understanding to create a healthcare experience that honors your whole being.
              </p>
              <blockquote className="border-l-4 border-teal-400 pl-6 italic text-gray-600 mb-8">
                "Like water that finds its way, true healing flows naturally when we create the right conditions for wellness."
                <cite className="block mt-2 not-italic font-medium">- Dr. Aaron Rosenberg</cite>
              </blockquote>
              <motion.button
                className="bg-gradient-to-r from-teal-400 to-cyan-500 text-white px-8 py-4 rounded-full font-light hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Discover Our Approach
              </motion.button>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/dr_rosenberg.jpg"
                  alt="Dr. Aaron Rosenberg"
                  width={600}
                  height={700}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-500/20 to-transparent" />
              </div>
              <motion.div
                className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-teal-300 to-cyan-300 rounded-full opacity-50"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
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
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-600/80 to-cyan-600/80" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-light text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Begin Your Journey to Wellness
          </motion.h2>
          <motion.p
            className="text-xl text-white/90 mb-8 font-light"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Take the first step towards balanced, mindful health
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <motion.button
              className="bg-white text-teal-600 px-8 py-4 rounded-full font-medium hover:shadow-xl transition-shadow inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiCalendar />
              Schedule Consultation
            </motion.button>
            <motion.button
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-teal-600 transition-all inline-flex items-center gap-2"
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
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-light">&copy; 2025 Lotus Direct Care. Creating space for healing.</p>
        </div>
      </footer>
    </div>
  );
}