'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaSpa, FaLeaf, FaHeart, FaHandHoldingHeart, FaYinYang, FaBars, FaTimes, FaWater, FaSun } from 'react-icons/fa'
import { GiMeditation, GiHealing, GiLotus, GiBamboo, GiStoneStack } from 'react-icons/gi'
import { MdSelfImprovement, MdNaturePeople, MdPsychology } from 'react-icons/md'
import { variantConfig } from '../../../lib/variant-utils'

export default function WellnessVariant() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [breathCount, setBreathCount] = useState(0)
  const [isBreathing, setIsBreathing] = useState(false)

  useEffect(() => {
    if (isBreathing) {
      const interval = setInterval(() => {
        setBreathCount(prev => (prev + 1) % 4)
      }, 4000)
      return () => clearInterval(interval)
    }
  }, [isBreathing])

  const services = [
    {
      icon: <GiLotus className="text-5xl mb-4" />,
      title: "Direct Primary Care",
      description: "Holistic primary care that nurtures your complete well-being",
      link: "/direct-primary-care",
      color: "from-teal-400 to-cyan-500"
    },
    {
      icon: <GiHealing className="text-5xl mb-4" />,
      title: "Functional Medicine",
      description: "Restore balance and harmony to your body's natural systems",
      link: "/functional-medicine",
      color: "from-purple-400 to-pink-400"
    },
    {
      icon: <MdPsychology className="text-5xl mb-4" />,
      title: "Ketamine Therapy",
      description: "Transform your mental wellness with gentle, guided therapy",
      link: "/ketamine-therapy",
      color: "from-indigo-400 to-purple-500"
    },
    {
      icon: <FaSun className="text-5xl mb-4" />,
      title: "PRP Injections",
      description: "Natural rejuvenation for your body's healing journey",
      link: "/prp-injections",
      color: "from-yellow-400 to-orange-400"
    },
    {
      icon: <GiStoneStack className="text-5xl mb-4" />,
      title: "Addiction Treatment",
      description: "Find balance and peace on your path to recovery",
      link: "/addiction-treatment",
      color: "from-green-400 to-teal-500"
    }
  ]

  const wellnessFeatures = [
    {
      icon: <FaHeart />,
      title: "Compassionate Care",
      description: "Every interaction infused with kindness and understanding"
    },
    {
      icon: <MdSelfImprovement />,
      title: "Mind-Body Balance",
      description: "Integrating mental and physical wellness for optimal health"
    },
    {
      icon: <FaLeaf />,
      title: "Natural Healing",
      description: "Harnessing your body's innate ability to heal and thrive"
    },
    {
      icon: <FaWater />,
      title: "Flowing Wellness",
      description: "Adaptable care that flows with your life's rhythms"
    }
  ]

  const breathingStates = ['Inhale...', 'Hold...', 'Exhale...', 'Rest...']

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-teal-50 to-purple-50">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-teal-200 rounded-full opacity-20 blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200 rounded-full opacity-20 blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-100 rounded-full opacity-10 blur-3xl" />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 bg-white/70 backdrop-blur-lg shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative">
                <GiLotus className="text-4xl text-teal-600" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-purple-400 rounded-full animate-pulse" />
              </div>
              <div>
                <span className="text-2xl font-light text-gray-800">Lotus Direct Care</span>
                <span className="block text-xs text-teal-600 tracking-widest">WELLNESS HAVEN</span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/about" className="text-gray-700 hover:text-teal-600 transition-colors flex items-center gap-2">
                <FaSpa className="text-sm" /> About
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-teal-600 transition-colors flex items-center gap-2">
                <GiHealing className="text-sm" /> Services
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-teal-600 transition-colors flex items-center gap-2">
                <FaLeaf className="text-sm" /> Wellness Blog
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-teal-600 transition-colors flex items-center gap-2">
                <FaHeart className="text-sm" /> Contact
              </Link>
              <Link 
                href={variantConfig.external.booking}
                className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-6 py-2.5 rounded-full hover:shadow-lg transition-all"
              >
                Begin Your Journey
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-700"
            >
              {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-teal-100">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <Link href="/about" className="block text-gray-700 hover:text-teal-600">About</Link>
              <Link href="/services" className="block text-gray-700 hover:text-teal-600">Services</Link>
              <Link href="/blog" className="block text-gray-700 hover:text-teal-600">Wellness Blog</Link>
              <Link href="/contact" className="block text-gray-700 hover:text-teal-600">Contact</Link>
              <Link 
                href={variantConfig.external.booking}
                className="block bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-6 py-2.5 rounded-full text-center"
              >
                Begin Your Journey
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <GiMeditation className="text-8xl text-teal-600 animate-pulse" />
                <div className="absolute inset-0 bg-teal-400 opacity-20 blur-2xl" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-light mb-6">
              <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Your Sanctuary
              </span>
              <br />
              <span className="text-gray-800">for Healing & Wellness</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              Step into a space where modern medicine meets ancient wisdom. 
              Experience healthcare that honors your whole being - body, mind, and spirit.
            </p>

            {/* Interactive Breathing Widget */}
            <div className="bg-white/60 backdrop-blur-lg rounded-2xl p-8 max-w-md mx-auto mb-12">
              <h3 className="text-lg font-medium text-gray-800 mb-4">Take a Moment to Breathe</h3>
              <div className="relative h-32 flex items-center justify-center mb-4">
                <div className={`w-24 h-24 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full transition-all duration-4000 ${
                  isBreathing && breathCount % 2 === 0 ? 'scale-125' : 'scale-100'
                }`} />
                <div className="absolute text-white font-medium">
                  {isBreathing ? breathingStates[breathCount] : 'Ready'}
                </div>
              </div>
              <button
                onClick={() => setIsBreathing(!isBreathing)}
                className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all"
              >
                {isBreathing ? 'Stop' : 'Start'} Breathing Exercise
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href={variantConfig.external.membership}
                className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:shadow-xl transition-all inline-flex items-center justify-center gap-2"
              >
                <FaSpa /> Join Our Wellness Community
              </Link>
              <Link 
                href="/services"
                className="bg-white/80 backdrop-blur text-teal-600 px-8 py-4 rounded-full text-lg font-medium border border-teal-200 hover:bg-white transition-all inline-flex items-center justify-center gap-2"
              >
                <GiHealing /> Explore Healing Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">
              Pathways to Wellness
            </h2>
            <p className="text-lg text-gray-600">Choose your journey to optimal health and vitality</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.link}
                className="group relative bg-white/70 backdrop-blur-lg rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
                <div className="relative z-10 text-center">
                  <div className={`text-transparent bg-gradient-to-br ${service.color} bg-clip-text`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-medium text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Wellness Features */}
      <section className="py-20 px-4 bg-gradient-to-r from-teal-50 to-cyan-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-light text-center text-gray-800 mb-12">
            The Lotus Wellness Experience
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {wellnessFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-teal-500 to-cyan-600 p-3 rounded-full text-white">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Dr. Rosenberg */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-12 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-light text-gray-800 mb-6">
                  Meet Dr. Aaron Rosenberg
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  With over 15 years of experience in integrative medicine, Dr. Rosenberg 
                  brings a unique blend of medical expertise and holistic wisdom to every 
                  patient interaction.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  His approach combines evidence-based medicine with mindfulness practices, 
                  nutritional guidance, and personalized wellness plans that honor each 
                  patient's unique journey.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-teal-600">
                    <FaHeart />
                    <span className="text-sm">Compassionate Care</span>
                  </div>
                  <div className="flex items-center gap-2 text-teal-600">
                    <MdNaturePeople />
                    <span className="text-sm">Holistic Approach</span>
                  </div>
                  <div className="flex items-center gap-2 text-teal-600">
                    <GiHealing />
                    <span className="text-sm">Integrative Medicine</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-teal-100 to-cyan-100 rounded-2xl p-8 text-center">
                  <GiLotus className="text-8xl text-teal-600 mx-auto mb-4" />
                  <p className="text-xl font-light text-gray-800 mb-2">
                    "Healing happens when we treat the whole person, not just symptoms."
                  </p>
                  <p className="text-sm text-gray-600">- Dr. Aaron Rosenberg</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-light text-center text-gray-800 mb-12">
            Stories of Transformation
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Dr. Rosenberg helped me find balance in my life. His holistic approach transformed not just my health, but my entire outlook on wellness.",
                author: "Maria S.",
                theme: "Balance"
              },
              {
                quote: "The spa-like atmosphere and compassionate care make every visit a healing experience. I finally feel heard and understood.",
                author: "David K.",
                theme: "Compassion"
              },
              {
                quote: "Through functional medicine and mindfulness practices, I've discovered a level of vitality I didn't know was possible.",
                author: "Lisa P.",
                theme: "Vitality"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg">
                <div className="text-teal-600 mb-4">
                  <FaYinYang className="text-3xl" />
                </div>
                <p className="text-gray-700 mb-4 italic leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex items-center justify-between">
                  <p className="font-medium text-gray-800">- {testimonial.author}</p>
                  <span className="text-xs text-teal-600 bg-teal-50 px-3 py-1 rounded-full">
                    {testimonial.theme}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-gradient-to-r from-teal-500 to-cyan-600 rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <GiBamboo className="text-white text-[40rem] absolute -right-48 -top-48" />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
                Begin Your Wellness Journey Today
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Experience healthcare that nurtures your whole being. 
                Schedule your consultation and discover the path to optimal wellness.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href={variantConfig.external.booking}
                  className="bg-white text-teal-600 px-8 py-4 rounded-full text-lg font-medium hover:shadow-xl transition-all"
                >
                  Schedule Consultation
                </Link>
                <Link 
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-teal-600 transition-all"
                >
                  Contact Our Sanctuary
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-teal-800 to-cyan-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <GiLotus className="text-3xl text-teal-300" />
                <span className="text-xl font-light">Lotus Direct Care</span>
              </div>
              <p className="text-teal-200 text-sm">Your sanctuary for healing and wellness</p>
            </div>
            <div>
              <h4 className="font-medium mb-4">Wellness Services</h4>
              <ul className="space-y-2 text-sm text-teal-200">
                {services.slice(0, 3).map((service, index) => (
                  <li key={index}>
                    <Link href={service.link} className="hover:text-white transition-colors">
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Visit Us</h4>
              <ul className="space-y-2 text-sm text-teal-200">
                <li>{variantConfig.contact.phone}</li>
                <li>{variantConfig.contact.email}</li>
                <li>{variantConfig.contact.address}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Wellness Hours</h4>
              <p className="text-sm text-teal-200">{variantConfig.contact.hours}</p>
              <div className="mt-4">
                <Link 
                  href={variantConfig.external.booking}
                  className="inline-block bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition-all text-sm"
                >
                  Book Your Visit
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-teal-700 mt-8 pt-8 text-center text-sm text-teal-200">
            <p>&copy; 2025 Lotus Direct Care. Nurturing wellness, one patient at a time.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}