'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FiActivity, FiTarget, FiTrendingUp, FiZap, FiAward, FiClock, FiMenu, FiX, FiBarChart2, FiShield } from 'react-icons/fi'
import JourneySection from '@/components/JourneySection'
import PricingSection from '@/components/PricingSection'
import FeaturesSection from '@/components/FeaturesSection'
import DoctorSection from '@/components/DoctorSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import BlogPreviewSection from '@/components/BlogPreviewSection'

export default function AthleticPerformanceVariant() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeMetric, setActiveMetric] = useState(0)
  const [counter, setCounter] = useState(0)

  const performanceMetrics = [
    { label: 'Recovery Time', value: '50% Faster', icon: <FiClock /> },
    { label: 'Performance Gains', value: '25% Increase', icon: <FiTrendingUp /> },
    { label: 'Injury Prevention', value: '80% Success', icon: <FiShield /> },
    { label: 'Energy Levels', value: '40% Boost', icon: <FiZap /> }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % performanceMetrics.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prev) => (prev < 100 ? prev + 1 : 0))
    }, 50)
    return () => clearInterval(timer)
  }, [])

  const services = [
    {
      icon: <FiActivity className="text-4xl" />,
      title: "Sports Medicine",
      description: "Advanced treatment for athletic injuries and performance optimization",
      stats: "95% Return to Sport Rate"
    },
    {
      icon: <FiTarget className="text-4xl" />,
      title: "Performance Testing",
      description: "Comprehensive assessments to identify strengths and areas for improvement",
      stats: "200+ Pro Athletes Tested"
    },
    {
      icon: <FiZap className="text-4xl" />,
      title: "Recovery Protocols",
      description: "Cutting-edge therapies including PRP, IV therapy, and cryotherapy",
      stats: "48hr Recovery Time"
    }
  ]

  const athleteTestimonials = [
    {
      name: "Michael Chen",
      sport: "Professional Triathlete",
      quote: "Dr. Rosenberg's performance protocols took my endurance to the next level. I shaved 15 minutes off my Ironman time!",
      achievement: "3x Ironman Champion"
    },
    {
      name: "Sarah Johnson", 
      sport: "CrossFit Athlete",
      quote: "The personalized nutrition and recovery plan transformed my training. I'm stronger and recovering faster than ever.",
      achievement: "Regional Champion 2024"
    },
    {
      name: "David Martinez",
      sport: "Marathon Runner",
      quote: "After struggling with injuries for years, their preventive care approach kept me healthy through my Boston qualifier.",
      achievement: "Sub-3 Hour Marathon"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Dynamic Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full opacity-20 blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500 rounded-full opacity-20 blur-3xl animate-pulse" />
        {/* Animated lines */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-slide"
              style={{
                top: `${20 + i * 20}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: '3s'
              }}
            />
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 bg-black/50 backdrop-blur-lg border-b border-blue-500/20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-lg">
                <FiActivity className="text-2xl text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold text-white">
                  LOTUS <span className="text-blue-400">PERFORMANCE</span>
                </span>
                <span className="block text-xs text-blue-400 tracking-[0.3em] uppercase">Elite Athletic Care</span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors font-medium">About</Link>
              <Link href="/services" className="text-gray-300 hover:text-blue-400 transition-colors font-medium">Services</Link>
              <Link href="/blog" className="text-gray-300 hover:text-blue-400 transition-colors font-medium">Performance Blog</Link>
              <Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors font-medium">Contact</Link>
              <Link 
                href="https://app.elationemr.com/book/lotusdirectcare/"
                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2.5 rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all font-bold uppercase tracking-wider text-sm"
              >
                Book Assessment
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white"
            >
              {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-lg border-t border-blue-500/20">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <Link href="/about" className="block text-gray-300 hover:text-blue-400">About</Link>
              <Link href="/services" className="block text-gray-300 hover:text-blue-400">Services</Link>
              <Link href="/blog" className="block text-gray-300 hover:text-blue-400">Performance Blog</Link>
              <Link href="/contact" className="block text-gray-300 hover:text-blue-400">Contact</Link>
              <Link 
                href="https://app.elationemr.com/book/lotusdirectcare/"
                className="block bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2.5 rounded-lg text-center"
              >
                Book Assessment
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="h-px bg-gradient-to-r from-transparent to-blue-400 flex-1" />
                <span className="text-blue-400 font-mono text-sm uppercase tracking-wider">Peak Performance Medicine</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-black mb-6 text-white">
                UNLOCK YOUR
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  ATHLETIC POTENTIAL
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Elite sports medicine meets cutting-edge performance optimization. 
                Train harder, recover faster, and achieve more with personalized athletic healthcare.
              </p>

              {/* Live Performance Metrics */}
              <div className="bg-black/50 backdrop-blur-lg rounded-xl p-6 mb-8 border border-blue-500/20">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-white">LIVE PERFORMANCE METRICS</h3>
                  <FiBarChart2 className="text-blue-400 animate-pulse" />
                </div>
                <div className="space-y-3">
                  {performanceMetrics.map((metric, index) => (
                    <div
                      key={index}
                      className={`transition-all duration-500 ${
                        index === activeMetric ? 'scale-105' : 'opacity-50'
                      }`}
                    >
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="text-gray-400 flex items-center gap-2">
                          {metric.icon} {metric.label}
                        </span>
                        <span className="text-blue-400 font-mono font-bold">{metric.value}</span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-1000 ${
                            index === activeMetric ? 'w-full' : 'w-0'
                          }`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="https://lotusdirectcare.hint.com/signup/"
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-lg text-lg font-bold hover:shadow-lg hover:shadow-blue-500/50 transition-all inline-flex items-center justify-center gap-2 uppercase tracking-wider"
                >
                  <FiZap /> Start Training
                </Link>
                <Link 
                  href="/services"
                  className="bg-transparent text-blue-400 px-8 py-4 rounded-lg text-lg font-bold border-2 border-blue-500 hover:bg-blue-500/10 transition-all uppercase tracking-wider"
                >
                  View Programs
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <Image 
                  src="/Lotus Midjourney Flowers/lotus-homepage-new.png"
                  alt="Athletic Performance"
                  width={600}
                  height={600}
                  className="rounded-2xl"
                  style={{ filter: 'hue-rotate(200deg) saturate(1.5) brightness(0.9)' }}
                />
                {/* Performance indicators */}
                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur rounded-lg p-4 border border-blue-500/50">
                  <div className="text-blue-400 font-mono text-sm mb-1">POWER OUTPUT</div>
                  <div className="text-3xl font-black text-white">{counter}%</div>
                </div>
                <div className="absolute bottom-4 left-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-3 rounded-lg shadow-lg">
                  <FiAward className="text-2xl" />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-3xl opacity-30 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase tracking-wider">
              Elite Performance Services
            </h2>
            <p className="text-lg text-gray-400">Scientifically proven methods to maximize your athletic potential</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-black/50 backdrop-blur-lg rounded-xl p-8 border border-blue-500/20 hover:border-blue-500/50 transition-all group"
              >
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-4 rounded-lg inline-block text-white mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <div className="text-blue-400 font-mono font-bold text-sm">{service.stats}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Athlete Testimonials */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-black text-center text-white mb-12 uppercase tracking-wider">
            Champion Athletes Trust Us
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {athleteTestimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-900/50 to-black/50 backdrop-blur-lg rounded-xl p-8 border border-blue-500/20">
                <div className="flex items-center mb-4">
                  <FiAward className="text-3xl text-blue-400 mr-3" />
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-blue-400 text-sm">{testimonial.sport}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic mb-4">"{testimonial.quote}"</p>
                <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full inline-block text-sm font-mono">
                  {testimonial.achievement}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shared Components */}
      <div className="athletic-themed">
        <JourneySection />
        <PricingSection />
        <FeaturesSection />
        <DoctorSection />
        <TestimonialsSection />
        <BlogPreviewSection />
      </div>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6 uppercase tracking-wider">
            Ready to Dominate?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join elite athletes who trust Lotus Performance for their competitive edge.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="https://app.elationemr.com/book/lotusdirectcare/"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-bold hover:shadow-xl transition-all uppercase tracking-wider"
            >
              Book Performance Assessment
            </Link>
            <Link 
              href="/variants"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-white hover:text-blue-600 transition-all uppercase tracking-wider"
            >
              Explore All Variants
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-blue-500/20 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <FiActivity className="text-2xl text-blue-400" />
                <span className="text-xl font-bold text-white">LOTUS PERFORMANCE</span>
              </div>
              <p className="text-gray-400">Elite athletic healthcare</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">Programs</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/services" className="hover:text-blue-400">Sports Medicine</Link></li>
                <li><Link href="/services" className="hover:text-blue-400">Performance Testing</Link></li>
                <li><Link href="/services" className="hover:text-blue-400">Recovery Protocols</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>(424) 544-9007</li>
                <li>performance@lotusdirectcare.com</li>
                <li>Santa Monica, CA</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">Training Hours</h4>
              <p className="text-gray-400 mb-4">Mon-Fri: 6:00 AM - 8:00 PM</p>
              <Link 
                href="https://app.elationemr.com/book/lotusdirectcare/"
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all font-bold uppercase text-sm"
              >
                Book Session
              </Link>
            </div>
          </div>
          <div className="border-t border-blue-500/20 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Lotus Performance. Elevating athletes to their peak potential.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes slide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        .animate-slide {
          animation: slide linear infinite;
        }
      `}</style>
    </div>
  )
}