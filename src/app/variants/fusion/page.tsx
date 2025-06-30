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
  FaBolt,
  FaFireAlt,
  FaCircleNotch,
  FaBalanceScale
} from 'react-icons/fa'

export default function FusionVariant() {
  const [energyLevel, setEnergyLevel] = useState(0)
  const { scrollY } = useScroll()
  const fusionY = useTransform(scrollY, [0, 500], [0, -50])
  
  useEffect(() => {
    const interval = setInterval(() => {
      setEnergyLevel(prev => (prev + 5) % 100)
    }, 100)
    return () => clearInterval(interval)
  }, [])

  // Energy particle component
  const EnergyParticle = ({ delay, startPos }: { delay: number; startPos: { x: number; y: number } }) => (
    <motion.div
      className="absolute w-2 h-2 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full"
      style={{
        left: startPos.x,
        top: startPos.y,
        boxShadow: '0 0 10px rgba(251, 146, 60, 0.8)',
      }}
      animate={{
        x: [0, (Math.random() - 0.5) * 200],
        y: [0, (Math.random() - 0.5) * 200],
        scale: [0, 1, 0],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: 2,
        delay,
        repeat: Infinity,
        ease: 'easeOut',
      }}
    />
  )

  // Fusion core animation
  const FusionCore = () => (
    <motion.div className="relative w-64 h-64">
      {/* Core layers */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      />
      <motion.div
        className="absolute inset-8 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
      />
      <motion.div
        className="absolute inset-16 bg-white rounded-full blur-xl"
        animate={{
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />
      
      {/* Orbiting energy rings */}
      {[0, 45, 90].map((rotation, i) => (
        <motion.div
          key={i}
          className="absolute inset-0"
          style={{ transform: `rotateX(60deg) rotateZ(${rotation}deg)` }}
          animate={{ rotateZ: rotation + 360 }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <div className="w-full h-full border-2 border-orange-400/50 rounded-full" />
        </motion.div>
      ))}
    </motion.div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-950 via-orange-950 to-pink-950 relative overflow-hidden">
      {/* Energy field background */}
      <div className="fixed inset-0 pointer-events-none">
        {Array.from({ length: 50 }, (_, i) => (
          <EnergyParticle
            key={i}
            delay={i * 0.1}
            startPos={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080),
            }}
          />
        ))}
      </div>

      {/* Fusion waves */}
      <motion.div
        className="fixed inset-0 pointer-events-none"
        style={{ y: fusionY }}
      >
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(251, 146, 60, 0.2) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(236, 72, 153, 0.2) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 50%, rgba(239, 68, 68, 0.2) 0%, transparent 50%)',
            ],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
        />
      </motion.div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-red-950/80 backdrop-blur-lg shadow-lg z-50 border-b border-orange-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <FaAtom className="h-8 w-8 text-orange-500" />
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
                Lotus Fusion
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
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-pink-500 transition-all group-hover:w-full"></span>
                </motion.a>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full shadow-lg hover:shadow-orange-500/50 transition-all"
              >
                Ignite Fusion
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Fusion Theme */}
      <motion.section 
        className="relative min-h-screen flex items-center justify-center pt-16"
      >
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'radial-gradient(circle at 30% 40%, rgba(251, 146, 60, 0.15) 0%, transparent 60%)',
                'radial-gradient(circle at 70% 60%, rgba(239, 68, 68, 0.15) 0%, transparent 60%)',
              ],
            }}
            transition={{
              duration: 8,
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
              <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                Energy Fusion Healing
              </span>
            </h1>
            <p className="text-xl text-orange-100 mb-8 leading-relaxed">
              Experience the power of merged modalities. Where traditional wisdom 
              fuses with cutting-edge science to create explosive healing potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full shadow-xl hover:shadow-orange-500/50 transition-all flex items-center justify-center space-x-2"
              >
                <FaBolt className="w-5 h-5" />
                <span>Activate Fusion</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent text-orange-400 rounded-full shadow-xl hover:shadow-orange-500/50 transition-all border border-orange-500/50"
              >
                Explore Energy
              </motion.button>
            </div>

            {/* Energy meter */}
            <div className="mt-12">
              <div className="flex items-center justify-between mb-2">
                <span className="text-orange-300 text-sm">Fusion Energy</span>
                <span className="text-orange-400 font-mono">{energyLevel}%</span>
              </div>
              <div className="relative h-6 bg-red-900/50 rounded-full overflow-hidden">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500"
                  style={{ width: `${energyLevel}%` }}
                >
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                    }}
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex items-center justify-center"
          >
            <FusionCore />
            
            {/* Lotus image with fusion effect */}
            <motion.div
              className="absolute"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            >
              <Image
                src="/Lotus Midjourney Flowers/lotus-blog-hero.png"
                alt="Fusion Lotus"
                width={300}
                height={300}
                className="rounded-full shadow-2xl"
                style={{
                  filter: 'hue-rotate(-30deg) saturate(2) brightness(1.2)',
                  mixBlendMode: 'screen',
                }}
              />
            </motion.div>
            
            {/* Energy bolts */}
            {Array.from({ length: 8 }, (_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: '50%',
                  top: '50%',
                  width: '100px',
                  height: '2px',
                  transformOrigin: 'left center',
                  transform: `translateX(-50%) translateY(-50%) rotate(${i * 45}deg)`,
                }}
                animate={{
                  scaleX: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.25,
                }}
              >
                <div className="w-full h-full bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
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
            <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent mb-4">
              The Fusion Master
            </h2>
            <p className="text-xl text-orange-100">Merging modalities for maximum impact</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 rounded-3xl blur-3xl opacity-20"></div>
              <Image
                src="/dr_rosenberg.jpg"
                alt="Dr. Aaron Rosenberg"
                width={500}
                height={600}
                className="relative z-10 rounded-3xl shadow-2xl border border-orange-500/20"
              />
              {/* Energy field decoration */}
              <motion.div
                className="absolute -inset-4"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                <FaCircleNotch className="w-full h-full text-orange-500/10" />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-orange-100 mb-4">Dr. Aaron Rosenberg</h3>
              <p className="text-lg text-orange-200 mb-6 leading-relaxed">
                Dr. Rosenberg is a master of fusion medicine, seamlessly blending Eastern and 
                Western approaches, traditional and innovative therapies. His unique ability to 
                merge different healing modalities creates powerful synergies for optimal results.
              </p>
              <div className="space-y-4">
                {[
                  { icon: FaFireAlt, text: 'Integrated Treatment Fusion', energy: 'high' },
                  { icon: FaBolt, text: 'Synergistic Healing Protocols', energy: 'medium' },
                  { icon: FaAtom, text: 'Multi-Modal Therapy Synthesis', energy: 'high' }
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
                      className="p-2 bg-gradient-to-r from-orange-500/20 to-pink-500/20 rounded-full border border-orange-500/50"
                      animate={item.energy === 'high' ? {
                        boxShadow: [
                          '0 0 20px rgba(251, 146, 60, 0.5)',
                          '0 0 40px rgba(236, 72, 153, 0.8)',
                          '0 0 20px rgba(251, 146, 60, 0.5)',
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

      {/* Services Section with Fusion Cards */}
      <section id="services" className="py-20 bg-gradient-to-b from-orange-950 to-red-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent mb-4">
              Fusion Services
            </h2>
            <p className="text-xl text-orange-100">Where healing modalities merge and multiply</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'East-West Fusion',
                description: 'Ancient wisdom meets modern science',
                icon: FaBalanceScale,
                image: '/Lotus Midjourney Flowers/lotus_dpc_hero.png',
                gradient: 'from-orange-500 to-red-500',
                fusion: ['Traditional Medicine', 'Modern Technology']
              },
              {
                title: 'Mind-Body Merger',
                description: 'Psychological and physical unity',
                icon: FaBolt,
                image: '/Lotus Midjourney Flowers/lotus-functional-medicine-hero.png',
                gradient: 'from-red-500 to-pink-500',
                fusion: ['Mental Health', 'Physical Wellness']
              },
              {
                title: 'Treatment Synthesis',
                description: 'Multiple therapies, exponential results',
                icon: FaAtom,
                image: '/Lotus Midjourney Flowers/lotus-ketamine-therapy-hero.png',
                gradient: 'from-pink-500 to-purple-500',
                fusion: ['Innovative Therapies', 'Proven Methods']
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
                {/* Fusion energy effect */}
                <motion.div
                  className={`absolute -inset-1 bg-gradient-to-r ${service.gradient} rounded-3xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-500`}
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />
                
                <div className="relative bg-gradient-to-b from-red-900/80 to-orange-900/80 backdrop-blur-xl rounded-3xl overflow-hidden border border-orange-500/20 hover:border-orange-500/50 transition-all">
                  <div className="h-48 relative overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      style={{
                        filter: 'hue-rotate(-20deg) saturate(1.8)',
                      }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-60`}></div>
                    
                    {/* Fusion animation overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <motion.div
                        className="text-white text-center"
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                      >
                        <div className="text-sm font-semibold">{service.fusion[0]}</div>
                        <FaBolt className="w-6 h-6 mx-auto my-2" />
                        <div className="text-sm font-semibold">{service.fusion[1]}</div>
                      </motion.div>
                    </div>
                  </div>
                  <div className="p-8">
                    <motion.div 
                      className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-full flex items-center justify-center mb-4 shadow-lg relative overflow-hidden`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.7 }}
                    >
                      <service.icon className="w-8 h-8 text-white z-10" />
                      <motion.div
                        className="absolute inset-0 bg-white/30"
                        animate={{
                          scale: [0, 2],
                          opacity: [1, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                      />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-orange-100 mb-3">{service.title}</h3>
                    <p className="text-orange-200 mb-4">{service.description}</p>
                    <motion.a
                      href="#"
                      className="inline-flex items-center text-orange-400 hover:text-orange-300 font-medium"
                      whileHover={{ x: 5 }}
                    >
                      Merge & Heal <FaChevronRight className="ml-2 w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fusion Reactor Visualization */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent mb-4">
              The Healing Reactor
            </h2>
            <p className="text-xl text-orange-100">Where treatments merge into transformation</p>
          </motion.div>

          <motion.div
            className="relative h-96 rounded-3xl overflow-hidden bg-gradient-to-b from-red-900/50 to-orange-900/50 backdrop-blur-xl border border-orange-500/20"
            whileHover={{ scale: 1.02 }}
          >
            {/* Central fusion reactor */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div className="relative">
                {/* Colliding particles */}
                {[0, 120, 240].map((angle, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-4 h-4 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full"
                    style={{
                      left: '50%',
                      top: '50%',
                      marginLeft: '-8px',
                      marginTop: '-8px',
                    }}
                    animate={{
                      x: [
                        Math.cos((angle * Math.PI) / 180) * 150,
                        0,
                        Math.cos((angle * Math.PI) / 180) * 150,
                      ],
                      y: [
                        Math.sin((angle * Math.PI) / 180) * 150,
                        0,
                        Math.sin((angle * Math.PI) / 180) * 150,
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 1,
                    }}
                  />
                ))}
                
                {/* Central fusion burst */}
                <motion.div
                  className="w-32 h-32 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-full blur-2xl"
                  animate={{
                    scale: [0.5, 1.5, 0.5],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />
              </motion.div>
            </div>
            
            <div className="relative z-10 flex items-center justify-center h-full">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h3 className="text-3xl font-bold text-white mb-4">Fusion in Action</h3>
                <p className="text-lg text-orange-100 max-w-2xl mx-auto">
                  Watch as different healing modalities combine to create powerful new possibilities
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600"></div>
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundImage: [
              'radial-gradient(circle at 20% 50%, rgba(251, 146, 60, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)',
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
            Ready to Fuse Your Healing?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-orange-100 mb-8"
          >
            Experience the power of integrated wellness
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
              Start Fusion Process
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent text-white rounded-full border-2 border-white hover:bg-white hover:text-orange-600 transition-all font-semibold"
            >
              Learn About Fusion
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-red-950 to-orange-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent mb-4">
              Connect & Combine
            </h2>
            <p className="text-xl text-orange-100">Let's fuse your wellness journey</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-red-900/80 to-orange-900/80 backdrop-blur-xl rounded-3xl shadow-xl p-8 md:p-12 border border-orange-500/20"
          >
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                { icon: FaPhone, label: 'Fusion Hotline', value: '(555) 123-4567' },
                { icon: FaEnvelope, label: 'Energy Mail', value: 'fusion@lotusdirect.care' },
                { icon: FaMapMarkerAlt, label: 'Reactor Location', value: 'Tampa, FL' }
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
                    className="w-16 h-16 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-orange-500/25 relative overflow-hidden"
                    whileHover={{ scale: 1.1 }}
                  >
                    <item.icon className="w-8 h-8 text-white z-10" />
                    <motion.div
                      className="absolute inset-0 bg-white/30"
                      animate={{
                        scale: [0, 2],
                        opacity: [1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    />
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
      <footer className="py-8 bg-red-950 text-orange-200 border-t border-orange-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 Lotus Direct Care. Fusing healing modalities for exponential wellness.</p>
        </div>
      </footer>
    </div>
  )
}