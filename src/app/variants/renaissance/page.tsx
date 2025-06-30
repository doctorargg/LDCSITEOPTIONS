'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { 
  FaPalette, 
  FaHeart, 
  FaUserMd, 
  FaStar,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaChevronRight,
  FaPaintBrush,
  FaFeatherAlt,
  FaScroll
} from 'react-icons/fa'

export default function RenaissanceVariant() {
  const [brushStrokes, setBrushStrokes] = useState<Array<{x: number, y: number, color: string}>>([])
  const [artProgress, setArtProgress] = useState(0)
  const { scrollY } = useScroll()
  const canvasRotation = useTransform(scrollY, [0, 1000], [0, 5])
  
  useEffect(() => {
    const interval = setInterval(() => {
      setArtProgress(prev => Math.min(prev + 1, 100))
    }, 50)
    return () => clearInterval(interval)
  }, [])

  // Add brush stroke on mouse move occasionally
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (Math.random() > 0.98 && brushStrokes.length < 50) {
        const colors = ['#D4AF37', '#8B4513', '#DC143C', '#4169E1', '#228B22']
        setBrushStrokes(prev => [...prev, {
          x: e.clientX,
          y: e.clientY,
          color: colors[Math.floor(Math.random() * colors.length)]
        }])
      }
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [brushStrokes])

  // Paint stroke animation
  const PaintStroke = ({ stroke, index }: { stroke: {x: number, y: number, color: string}, index: number }) => (
    <motion.div
      className="absolute pointer-events-none"
      initial={{
        left: stroke.x,
        top: stroke.y,
        scale: 0,
        rotate: Math.random() * 360,
      }}
      animate={{
        scale: [0, 1.5, 1],
        opacity: [0, 0.8, 0],
        y: [0, -50, -100],
      }}
      transition={{
        duration: 3,
        ease: 'easeOut',
      }}
      onAnimationComplete={() => {
        setBrushStrokes(prev => prev.filter((_, i) => i !== index))
      }}
    >
      <FaPaintBrush className="w-8 h-8" style={{ color: stroke.color }} />
    </motion.div>
  )

  // Ornate frame decoration
  const OrnateFrame = () => (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
      <defs>
        <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4AF37" />
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
      </defs>
      {/* Corner ornaments */}
      <path d="M0,10 Q10,0 10,0 L0,0 Z" fill="url(#gold-gradient)" />
      <path d="M90,0 Q100,0 100,10 L100,0 Z" fill="url(#gold-gradient)" />
      <path d="M100,90 Q100,100 90,100 L100,100 Z" fill="url(#gold-gradient)" />
      <path d="M10,100 Q0,100 0,90 L0,100 Z" fill="url(#gold-gradient)" />
    </svg>
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-rose-50 to-amber-100 relative overflow-hidden">
      {/* Canvas texture background */}
      <div className="fixed inset-0 opacity-30" 
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="100" height="100" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="turbulence" baseFrequency="0.9" numOctaves="4" /%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)" opacity="0.1"/%3E%3C/svg%3E")',
        }}
      />

      {/* Paint strokes */}
      <AnimatePresence>
        {brushStrokes.map((stroke, index) => (
          <PaintStroke key={`${stroke.x}-${stroke.y}-${index}`} stroke={stroke} index={index} />
        ))}
      </AnimatePresence>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-amber-950/90 backdrop-blur-lg shadow-lg z-50 border-b border-amber-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <FaPalette className="h-8 w-8 text-amber-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-rose-400 bg-clip-text text-transparent">
                Lotus Renaissance
              </span>
            </motion.div>
            <div className="flex space-x-8">
              {['Gallery', 'Masters', 'Atelier'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-amber-100 hover:text-amber-400 transition-colors relative group font-serif"
                  whileHover={{ y: -2 }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-rose-400 transition-all group-hover:w-full"></span>
                </motion.a>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-gradient-to-r from-amber-500 to-rose-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all font-serif"
              >
                Commission Art
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Renaissance Theme */}
      <motion.section 
        className="relative min-h-screen flex items-center justify-center pt-16"
        style={{ rotate: canvasRotation }}
      >
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'radial-gradient(circle at 30% 40%, rgba(217, 119, 6, 0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 70% 60%, rgba(244, 63, 94, 0.1) 0%, transparent 50%)',
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif">
              <span className="bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">
                The Art of Healing Reborn
              </span>
            </h1>
            <p className="text-xl text-amber-800 mb-8 leading-relaxed font-serif">
              Experience a renaissance in healthcare where classical wisdom meets modern innovation. 
              Your wellness journey becomes a masterpiece, carefully crafted with artistic precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-amber-600 to-rose-600 text-white rounded-full shadow-xl hover:shadow-2xl transition-all flex items-center justify-center space-x-2 font-serif"
              >
                <FaFeatherAlt className="w-5 h-5" />
                <span>Begin Your Masterpiece</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent text-amber-700 rounded-full shadow-xl hover:shadow-2xl transition-all border-2 border-amber-600/50 font-serif"
              >
                View Gallery
              </motion.button>
            </div>

            {/* Art creation progress */}
            <div className="mt-12">
              <div className="flex items-center justify-between mb-2">
                <span className="text-amber-600 text-sm font-serif">Masterpiece Progress</span>
                <span className="text-amber-700 font-mono">{artProgress}%</span>
              </div>
              <div className="relative h-3 bg-amber-200/50 rounded-full overflow-hidden border border-amber-400/30">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-amber-500 to-rose-500"
                  style={{ width: `${artProgress}%` }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
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
            {/* Ornate golden frame */}
            <div className="absolute -inset-8 border-8 border-amber-400/30 rounded-3xl">
              <OrnateFrame />
            </div>
            
            {/* Canvas effect overlay */}
            <motion.div
              className="absolute inset-0 rounded-2xl"
              style={{
                background: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(212, 175, 55, 0.1) 10px, rgba(212, 175, 55, 0.1) 20px)',
              }}
            />
            
            <Image
              src="/Lotus Midjourney Flowers/lotus-services-hero.png"
              alt="Renaissance Lotus"
              width={600}
              height={600}
              className="relative z-10 rounded-2xl shadow-2xl"
              style={{
                filter: 'sepia(0.3) contrast(1.2) brightness(1.1)',
              }}
            />
            
            {/* Floating art elements */}
            <motion.div
              className="absolute -top-5 -right-5"
              animate={{
                rotate: [0, 10, -10, 0],
                y: [0, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
            >
              <div className="bg-gradient-to-br from-amber-400 to-rose-400 rounded-full p-3 shadow-lg">
                <FaPalette className="w-8 h-8 text-white" />
              </div>
            </motion.div>
            
            <motion.div
              className="absolute -bottom-5 -left-5"
              animate={{
                rotate: [0, -10, 10, 0],
                y: [0, 10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 3,
              }}
            >
              <div className="bg-gradient-to-br from-rose-400 to-amber-400 rounded-full p-3 shadow-lg">
                <FaFeatherAlt className="w-8 h-8 text-white" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Meet Dr. Rosenberg Section */}
      <section id="masters" className="py-20 relative bg-gradient-to-b from-amber-100 to-rose-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent mb-4 font-serif">
              Your Renaissance Master
            </h2>
            <p className="text-xl text-amber-700 font-serif">A virtuoso in the art of healing</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-rose-400 rounded-3xl blur-3xl opacity-20"></div>
              
              {/* Portrait frame effect */}
              <div className="relative border-8 border-amber-400/30 rounded-3xl p-2 bg-gradient-to-br from-amber-100 to-rose-100">
                <Image
                  src="/dr_rosenberg.jpg"
                  alt="Dr. Aaron Rosenberg"
                  width={500}
                  height={600}
                  className="rounded-2xl shadow-2xl"
                  style={{
                    filter: 'sepia(0.2) contrast(1.1)',
                  }}
                />
              </div>
              
              {/* Artist signature */}
              <motion.div
                className="absolute bottom-4 right-4 bg-amber-50/90 backdrop-blur px-4 py-2 rounded-lg shadow-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <p className="font-serif text-amber-800 italic">Dr. A. Rosenberg</p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-amber-800 mb-4 font-serif">Dr. Aaron Rosenberg</h3>
              <p className="text-lg text-amber-700 mb-6 leading-relaxed font-serif">
                Like the great masters of the Renaissance, Dr. Rosenberg combines art and science 
                to create healthcare masterpieces. His approach views each patient as a unique canvas, 
                deserving of personalized attention and artistic precision in treatment.
              </p>
              <div className="space-y-4">
                {[
                  { icon: FaPalette, text: 'Artisanal Medicine Crafting' },
                  { icon: FaScroll, text: 'Classical Wisdom Integration' },
                  { icon: FaFeatherAlt, text: 'Masterful Treatment Design' }
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
                      className="p-2 bg-gradient-to-br from-amber-200 to-rose-200 rounded-full border border-amber-400/50"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <item.icon className="w-5 h-5 text-amber-700" />
                    </motion.div>
                    <span className="text-amber-700 font-serif">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section with Gallery Cards */}
      <section id="gallery" className="py-20 bg-gradient-to-b from-rose-100 to-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent mb-4 font-serif">
              The Gallery of Care
            </h2>
            <p className="text-xl text-amber-700 font-serif">Each service a masterpiece</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Primary Care Portraiture',
                description: 'Your health captured in detail',
                icon: FaUserMd,
                image: '/Lotus Midjourney Flowers/lotus_dpc_hero.png',
                frame: 'baroque',
                gradient: 'from-amber-600 to-orange-600'
              },
              {
                title: 'Functional Fresco',
                description: 'Holistic health compositions',
                icon: FaHeart,
                image: '/Lotus Midjourney Flowers/lotus-functional-medicine-hero.png',
                frame: 'renaissance',
                gradient: 'from-rose-600 to-pink-600'
              },
              {
                title: 'Therapeutic Tableau',
                description: 'Advanced healing artworks',
                icon: FaStar,
                image: '/Lotus Midjourney Flowers/lotus-ketamine-therapy-hero.png',
                frame: 'rococo',
                gradient: 'from-purple-600 to-rose-600'
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
                {/* Ornate frame shadow */}
                <div className="absolute -inset-2 bg-gradient-to-r from-amber-300 to-rose-300 rounded-3xl blur-lg opacity-50 group-hover:opacity-70 transition-opacity"></div>
                
                <div className="relative bg-gradient-to-br from-amber-50 to-rose-50 rounded-3xl overflow-hidden border-4 border-amber-300/50">
                  {/* Gallery label */}
                  <div className="absolute top-4 left-4 bg-amber-50/90 backdrop-blur px-3 py-1 rounded-lg z-10">
                    <p className="text-xs font-serif text-amber-700">Gallery #{index + 1}</p>
                  </div>
                  
                  <div className="h-48 relative overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      style={{
                        filter: 'sepia(0.3) contrast(1.2)',
                      }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-40`}></div>
                    
                    {/* Frame overlay effect */}
                    <div className="absolute inset-0 border-8 border-amber-400/20 pointer-events-none"></div>
                  </div>
                  <div className="p-8">
                    <motion.div 
                      className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-4 shadow-lg border-2 border-amber-300/50`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.7 }}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-amber-800 mb-3 font-serif">{service.title}</h3>
                    <p className="text-amber-600 mb-4 font-serif">{service.description}</p>
                    <motion.a
                      href="#"
                      className="inline-flex items-center text-amber-700 hover:text-rose-700 font-medium font-serif"
                      whileHover={{ x: 5 }}
                    >
                      View Masterpiece <FaChevronRight className="ml-2 w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Atelier (Workshop) Visualization */}
      <section id="atelier" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent mb-4 font-serif">
              The Healing Atelier
            </h2>
            <p className="text-xl text-amber-700 font-serif">Where wellness masterpieces are created</p>
          </motion.div>

          <motion.div
            className="relative h-96 rounded-3xl overflow-hidden bg-gradient-to-br from-amber-100 to-rose-100 border-8 border-amber-300/30"
            whileHover={{ scale: 1.02 }}
          >
            {/* Artist palette visualization */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.svg
                width="400"
                height="300"
                viewBox="0 0 400 300"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
              >
                {/* Palette shape */}
                <ellipse cx="200" cy="150" rx="180" ry="120" fill="#D4AF37" opacity="0.3" />
                <circle cx="120" cy="100" r="30" fill="#DC143C" opacity="0.7" />
                <circle cx="200" cy="80" r="30" fill="#4169E1" opacity="0.7" />
                <circle cx="280" cy="100" r="30" fill="#228B22" opacity="0.7" />
                <circle cx="150" cy="180" r="30" fill="#FFD700" opacity="0.7" />
                <circle cx="250" cy="180" r="30" fill="#8B008B" opacity="0.7" />
                {/* Brush */}
                <rect x="300" y="150" width="80" height="10" fill="#8B4513" />
                <path d="M380,150 L400,155 L380,160 Z" fill="#C0C0C0" />
              </motion.svg>
            </div>
            
            <div className="relative z-10 flex items-center justify-center h-full">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 border-2 border-amber-400/30"
              >
                <h3 className="text-3xl font-bold text-amber-800 mb-4 font-serif">Your Canvas Awaits</h3>
                <p className="text-lg text-amber-700 max-w-2xl mx-auto font-serif">
                  Every patient is a blank canvas, every treatment a brushstroke of healing
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-700 to-rose-700"></div>
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundImage: [
              'radial-gradient(circle at 20% 50%, rgba(212, 175, 55, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(212, 175, 55, 0.3) 0%, transparent 50%)',
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
            className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif"
          >
            Commission Your Health Masterpiece
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-amber-100 mb-8 font-serif"
          >
            Begin your renaissance of wellness today
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
              className="px-8 py-4 bg-white text-amber-700 rounded-full shadow-xl hover:shadow-2xl transition-all font-semibold font-serif"
            >
              Start Your Portrait
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent text-white rounded-full border-2 border-white hover:bg-white hover:text-amber-700 transition-all font-semibold font-serif"
            >
              Visit the Gallery
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-amber-100 to-rose-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent mb-4 font-serif">
              The Studio Awaits
            </h2>
            <p className="text-xl text-amber-700 font-serif">Commission your wellness art</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-amber-50 to-rose-50 rounded-3xl shadow-xl p-8 md:p-12 border-4 border-amber-300/30"
          >
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                { icon: FaPhone, label: 'Studio Line', value: '(555) 123-4567' },
                { icon: FaEnvelope, label: 'Artisan Mail', value: 'renaissance@lotusdirect.care' },
                { icon: FaMapMarkerAlt, label: 'The Atelier', value: 'Tampa, FL' }
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
                    className="w-16 h-16 bg-gradient-to-r from-amber-400 to-rose-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg border-2 border-amber-300/50"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="font-semibold text-amber-800 mb-1 font-serif">{item.label}</h3>
                  <p className="text-amber-600 font-serif">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-amber-950 text-amber-300 border-t border-amber-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-serif">&copy; 2025 Lotus Direct Care. Where healing becomes art.</p>
        </div>
      </footer>
    </div>
  )
}