'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FiFeather, FiSun, FiCircle, FiHeart, FiMenu, FiX, FiDroplet, FiWind } from 'react-icons/fi'
import JourneySection from '@/components/JourneySection'
import PricingSection from '@/components/PricingSection'
import FeaturesSection from '@/components/FeaturesSection'
import DoctorSection from '@/components/DoctorSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import BlogPreviewSection from '@/components/BlogPreviewSection'

type BreathPhase = 'inhale' | 'hold' | 'exhale' | 'pause'

export default function MindfulnessMedicalVariant() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [breathPhase, setBreathPhase] = useState<BreathPhase>('inhale')
  const [isBreathing, setIsBreathing] = useState(false)
  const [zenQuoteIndex, setZenQuoteIndex] = useState(0)

  const zenQuotes = [
    "In stillness, healing begins",
    "Your breath is your medicine",
    "Peace is the path to wellness",
    "Mindful moments, healthier life",
    "Present awareness, future health"
  ]

  useEffect(() => {
    if (isBreathing) {
      const phases: BreathPhase[] = ['inhale', 'hold', 'exhale', 'pause']
      let currentPhaseIndex = 0
      
      const interval = setInterval(() => {
        currentPhaseIndex = (currentPhaseIndex + 1) % phases.length
        setBreathPhase(phases[currentPhaseIndex])
      }, 4000)
      
      return () => clearInterval(interval)
    }
  }, [isBreathing])

  useEffect(() => {
    const interval = setInterval(() => {
      setZenQuoteIndex((prev) => (prev + 1) % zenQuotes.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const services = [
    {
      icon: <FiFeather className="text-4xl" />,
      title: "Mindful Medicine",
      description: "Integrating meditation and mindfulness into your treatment plan",
      practices: ["Guided meditation", "Breathwork therapy", "Mind-body healing"]
    },
    {
      icon: <FiSun className="text-4xl" />,
      title: "Stress Reduction",
      description: "Evidence-based techniques for managing stress and anxiety",
      practices: ["MBSR programs", "Yoga therapy", "Progressive relaxation"]
    },
    {
      icon: <FiHeart className="text-4xl" />,
      title: "Holistic Wellness",
      description: "Treating the whole person - mind, body, and spirit",
      practices: ["Functional medicine", "Nutritional counseling", "Lifestyle medicine"]
    }
  ]

  const breathingColors: Record<BreathPhase, string> = {
    inhale: 'from-teal-400 to-blue-500',
    hold: 'from-blue-500 to-purple-500',
    exhale: 'from-purple-500 to-pink-500',
    pause: 'from-pink-500 to-teal-400'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-teal-50">
      {/* Peaceful Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-96 h-96 bg-purple-300 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-teal-300 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-pink-200 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s' }} />
        </div>
        {/* Floating zen circles */}
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 10}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: '20s'
            }}
          >
            <FiCircle className="text-purple-200 text-6xl opacity-20" />
          </div>
        ))}
      </div>

      {/* Navigation */}
      <nav className="relative z-50 bg-white/70 backdrop-blur-lg shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-teal-400 rounded-full flex items-center justify-center">
                  <FiDroplet className="text-white text-2xl" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-teal-400 rounded-full blur opacity-30 animate-pulse" />
              </div>
              <div>
                <span className="text-2xl font-light text-gray-800">Lotus Mindful Care</span>
                <span className="block text-xs text-purple-600 tracking-[0.2em]">CONSCIOUS HEALING</span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/about" className="text-gray-700 hover:text-purple-600 transition-colors font-light">About</Link>
              <Link href="/services" className="text-gray-700 hover:text-purple-600 transition-colors font-light">Healing Services</Link>
              <Link href="/blog" className="text-gray-700 hover:text-purple-600 transition-colors font-light">Wellness Wisdom</Link>
              <Link href="/contact" className="text-gray-700 hover:text-purple-600 transition-colors font-light">Connect</Link>
              <Link 
                href="https://app.elationemr.com/book/lotusdirectcare/"
                className="bg-gradient-to-r from-purple-400 to-teal-400 text-white px-6 py-2.5 rounded-full hover:shadow-lg transition-all font-light"
              >
                Begin Your Journey
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-700"
            >
              {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-purple-100">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <Link href="/about" className="block text-gray-700 hover:text-purple-600">About</Link>
              <Link href="/services" className="block text-gray-700 hover:text-purple-600">Healing Services</Link>
              <Link href="/blog" className="block text-gray-700 hover:text-purple-600">Wellness Wisdom</Link>
              <Link href="/contact" className="block text-gray-700 hover:text-purple-600">Connect</Link>
              <Link 
                href="https://app.elationemr.com/book/lotusdirectcare/"
                className="block bg-gradient-to-r from-purple-400 to-teal-400 text-white px-6 py-2.5 rounded-full text-center"
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
          <div className="text-center mb-12">
            {/* Zen Quote Carousel */}
            <div className="mb-8 h-8">
              {zenQuotes.map((quote, index) => (
                <p
                  key={index}
                  className={`text-purple-600 text-lg font-light italic transition-all duration-1000 ${
                    index === zenQuoteIndex ? 'opacity-100' : 'opacity-0 absolute'
                  }`}
                >
                  "{quote}"
                </p>
              ))}
            </div>

            <h1 className="text-4xl md:text-6xl font-light mb-6">
              <span className="text-gray-800">Where Medicine Meets</span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent font-normal">
                Mindfulness
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              Experience healthcare that nurtures your inner peace while healing your body. 
              Our mindful approach integrates meditation, breathwork, and conscious living 
              into every aspect of your care.
            </p>

            {/* Interactive Breathing Circle */}
            <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-12 max-w-md mx-auto mb-12 shadow-xl">
              <h3 className="text-lg font-medium text-gray-800 mb-6">Breathe With Us</h3>
              <div className="relative h-48 flex items-center justify-center mb-6">
                <div 
                  className={`absolute w-32 h-32 bg-gradient-to-r ${breathingColors[breathPhase]} rounded-full transition-all duration-4000 ${
                    isBreathing ? (breathPhase === 'inhale' || breathPhase === 'hold' ? 'scale-150' : 'scale-100') : 'scale-100'
                  }`}
                  style={{ opacity: 0.3 }}
                />
                <div 
                  className={`absolute w-24 h-24 bg-gradient-to-r ${breathingColors[breathPhase]} rounded-full transition-all duration-4000 ${
                    isBreathing ? (breathPhase === 'inhale' || breathPhase === 'hold' ? 'scale-150' : 'scale-100') : 'scale-100'
                  }`}
                  style={{ opacity: 0.5 }}
                />
                <div 
                  className={`relative w-16 h-16 bg-gradient-to-r ${breathingColors[breathPhase]} rounded-full transition-all duration-4000 ${
                    isBreathing ? (breathPhase === 'inhale' || breathPhase === 'hold' ? 'scale-150' : 'scale-100') : 'scale-100'
                  }`}
                />
                <div className="absolute text-gray-700 font-light text-sm">
                  {isBreathing ? breathPhase : 'ready'}
                </div>
              </div>
              <button
                onClick={() => setIsBreathing(!isBreathing)}
                className="bg-gradient-to-r from-purple-400 to-teal-400 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all font-light"
              >
                {isBreathing ? 'End Session' : 'Start Breathing'}
              </button>
              <p className="text-sm text-gray-600 mt-4">
                {isBreathing ? 'Follow the rhythm: 4 seconds each phase' : 'Click to begin a guided breathing exercise'}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <Image 
                  src="/Lotus Midjourney Flowers/lotus-homepage-new.png"
                  alt="Mindful Healing"
                  width={600}
                  height={600}
                  className="rounded-3xl shadow-2xl"
                />
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 to-teal-400 rounded-3xl blur-2xl opacity-20" />
                {/* Floating meditation icons */}
                <div className="absolute -top-4 -right-4 bg-white/80 backdrop-blur p-3 rounded-full shadow-lg animate-float">
                  <FiWind className="text-2xl text-purple-600" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white/80 backdrop-blur p-3 rounded-full shadow-lg animate-float" style={{ animationDelay: '2s' }}>
                  <FiDroplet className="text-2xl text-teal-600" />
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="https://lotusdirectcare.hint.com/signup/"
                  className="bg-gradient-to-r from-purple-400 to-teal-400 text-white px-8 py-4 rounded-full text-lg font-medium hover:shadow-xl transition-all inline-flex items-center justify-center gap-2"
                >
                  <FiFeather /> Join Our Mindful Community
                </Link>
                <Link 
                  href="/services"
                  className="bg-white/80 backdrop-blur text-purple-600 px-8 py-4 rounded-full text-lg font-medium border border-purple-200 hover:border-purple-400 transition-all"
                >
                  Explore Healing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">
              Conscious Healthcare Services
            </h2>
            <p className="text-lg text-gray-600">Healing modalities that honor your whole being</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-lg rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all group"
              >
                <div className="text-purple-600 mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-medium text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.practices.map((practice, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-600">
                      <FiCircle className="text-teal-400 text-xs" />
                      <span className="text-sm">{practice}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mindfulness Benefits */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-gradient-to-r from-purple-100 to-teal-100 rounded-3xl p-12">
            <h2 className="text-3xl font-light text-center text-gray-800 mb-12">
              The Science of Mindful Medicine
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8">
                <h3 className="text-xl font-medium text-purple-800 mb-4">Research-Backed Benefits</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <FiHeart className="text-purple-600 mt-1" />
                    <span>40% reduction in chronic pain symptoms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FiHeart className="text-purple-600 mt-1" />
                    <span>58% decrease in anxiety levels</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FiHeart className="text-purple-600 mt-1" />
                    <span>Improved immune system function</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FiHeart className="text-purple-600 mt-1" />
                    <span>Better sleep quality and duration</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8">
                <h3 className="text-xl font-medium text-teal-800 mb-4">Patient Testimonial</h3>
                <p className="text-gray-700 italic mb-4">
                  "Dr. Rosenberg's mindful approach transformed my healthcare experience. 
                  The combination of traditional medicine with meditation and breathwork has 
                  given me tools to manage my anxiety and chronic pain that I never had before."
                </p>
                <p className="text-teal-600 font-medium">- Sarah M., Mindful Patient</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shared Components */}
      <JourneySection />
      <PricingSection />
      <FeaturesSection />
      <DoctorSection />
      <TestimonialsSection />
      <BlogPreviewSection />

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-500 to-teal-500">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
            Begin Your Mindful Healing Journey
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Experience healthcare that treats your whole being with presence and compassion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="https://app.elationemr.com/book/lotusdirectcare/"
              className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-medium hover:shadow-xl transition-all"
            >
              Schedule Mindful Consultation
            </Link>
            <Link 
              href="/variants"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-purple-600 transition-all"
            >
              Explore All Variants
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-purple-800 to-teal-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <FiDroplet className="text-2xl" />
                <span className="text-xl font-light">Lotus Mindful Care</span>
              </div>
              <p className="text-purple-200">Conscious healing for modern life</p>
            </div>
            <div>
              <h4 className="font-medium mb-4">Healing Services</h4>
              <ul className="space-y-2 text-purple-200">
                <li><Link href="/services" className="hover:text-white transition-colors">Mindful Medicine</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Stress Reduction</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Holistic Wellness</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Connect</h4>
              <ul className="space-y-2 text-purple-200">
                <li>(424) 544-9007</li>
                <li>mindful@lotusdirectcare.com</li>
                <li>Santa Monica, CA</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Peaceful Hours</h4>
              <p className="text-purple-200 mb-4">Mon-Fri: 8:00 AM - 5:00 PM</p>
              <Link 
                href="https://app.elationemr.com/book/lotusdirectcare/"
                className="inline-block bg-purple-700 text-white px-6 py-2 rounded-full hover:bg-purple-600 transition-all"
              >
                Book Session
              </Link>
            </div>
          </div>
          <div className="border-t border-purple-700 mt-8 pt-8 text-center text-purple-200">
            <p>&copy; 2025 Lotus Direct Care. Healing with mindfulness and compassion.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}