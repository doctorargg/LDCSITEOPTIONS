'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FiSun, FiMapPin, FiUsers, FiHeart, FiStar, FiMenu, FiX, FiPhone, FiMail, FiClock } from 'react-icons/fi'
import JourneySection from '@/components/JourneySection'
import PricingSection from '@/components/PricingSection'
import FeaturesSection from '@/components/FeaturesSection'
import DoctorSection from '@/components/DoctorSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import BlogPreviewSection from '@/components/BlogPreviewSection'

export default function LocalVegasVariant() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeNeighborhood, setActiveNeighborhood] = useState(0)
  const [isNightMode, setIsNightMode] = useState(false)

  const neighborhoods = [
    { name: 'Downtown', icon: '🏙️', distance: '5 miles' },
    { name: 'Summerlin', icon: '🏡', distance: '8 miles' },
    { name: 'Henderson', icon: '🌴', distance: '12 miles' },
    { name: 'Spring Valley', icon: '🌸', distance: '6 miles' },
    { name: 'North Las Vegas', icon: '🌵', distance: '10 miles' }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNeighborhood((prev) => (prev + 1) % neighborhoods.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const hour = new Date().getHours()
    setIsNightMode(hour >= 18 || hour < 6)
  }, [])

  const services = [
    {
      icon: <FiSun className="text-4xl" />,
      title: "Desert Climate Care",
      description: "Healthcare tailored for Vegas's unique climate challenges",
      features: ["Hydration therapy", "Heat stress management", "Allergy treatment"]
    },
    {
      icon: <FiUsers className="text-4xl" />,
      title: "24/7 City Support",
      description: "Care that fits the Vegas lifestyle - any time, any day",
      features: ["Extended hours", "Weekend availability", "Urgent care access"]
    },
    {
      icon: <FiMapPin className="text-4xl" />,
      title: "Community Health",
      description: "Serving our neighbors from the Strip to the suburbs",
      features: ["Local partnerships", "Community events", "Health education"]
    }
  ]

  const localTestimonials = [
    {
      name: "Maria Rodriguez",
      location: "Spring Valley Resident",
      quote: "As a casino worker with irregular hours, finding healthcare that fits my schedule was impossible until I found Lotus. Dr. Rosenberg truly understands Vegas life!"
    },
    {
      name: "James Chen",
      location: "Summerlin Local",
      quote: "My family has been in Vegas for 20 years. Finally, we have a doctor who treats us like neighbors, not numbers. The personal touch makes all the difference."
    },
    {
      name: "Sarah Thompson",
      location: "Downtown Business Owner",
      quote: "Running a business on Fremont Street means no time for health issues. The convenience and care at Lotus keeps me and my employees healthy and working."
    }
  ]

  return (
    <div className={`min-h-screen ${isNightMode ? 'bg-gradient-to-br from-purple-900 via-red-900 to-yellow-900' : 'bg-gradient-to-br from-yellow-50 via-red-50 to-orange-50'}`}>
      {/* Vegas-themed Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {isNightMode ? (
          <>
            {/* Night lights effect */}
            <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-400 rounded-full opacity-20 blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400 rounded-full opacity-20 blur-3xl animate-pulse" />
            <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-red-400 rounded-full opacity-20 blur-3xl animate-pulse" />
          </>
        ) : (
          <>
            {/* Desert sun effect */}
            <div className="absolute top-20 right-20 w-96 h-96 bg-yellow-300 rounded-full opacity-30 blur-3xl" />
            <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-orange-300 rounded-full opacity-20 blur-3xl" />
          </>
        )}
        {/* Desert elements */}
        <div className="absolute bottom-10 left-20 text-8xl opacity-10">🌵</div>
        <div className="absolute top-1/3 right-1/4 text-8xl opacity-10">☀️</div>
        <div className="absolute bottom-1/4 right-10 text-8xl opacity-10">🎰</div>
      </div>

      {/* Navigation */}
      <nav className={`relative z-50 ${isNightMode ? 'bg-black/70' : 'bg-white/80'} backdrop-blur-lg shadow-md`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className={`${isNightMode ? 'bg-gradient-to-r from-yellow-400 to-red-500' : 'bg-gradient-to-r from-red-500 to-orange-500'} p-2 rounded-lg`}>
                <FiMapPin className="text-2xl text-white" />
              </div>
              <div>
                <span className={`text-2xl font-bold ${isNightMode ? 'text-white' : 'text-gray-800'}`}>
                  Lotus Vegas Care
                </span>
                <span className={`block text-xs ${isNightMode ? 'text-yellow-400' : 'text-red-600'} tracking-wider`}>
                  YOUR LOCAL HEALTH PARTNER
                </span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/about" className={`${isNightMode ? 'text-gray-300 hover:text-yellow-400' : 'text-gray-700 hover:text-red-600'} transition-colors`}>About</Link>
              <Link href="/services" className={`${isNightMode ? 'text-gray-300 hover:text-yellow-400' : 'text-gray-700 hover:text-red-600'} transition-colors`}>Services</Link>
              <Link href="/blog" className={`${isNightMode ? 'text-gray-300 hover:text-yellow-400' : 'text-gray-700 hover:text-red-600'} transition-colors`}>Vegas Health Tips</Link>
              <Link href="/contact" className={`${isNightMode ? 'text-gray-300 hover:text-yellow-400' : 'text-gray-700 hover:text-red-600'} transition-colors`}>Contact</Link>
              <Link 
                href="https://app.elationemr.com/book/lotusdirectcare/"
                className={`${isNightMode ? 'bg-gradient-to-r from-yellow-500 to-red-500' : 'bg-gradient-to-r from-red-500 to-orange-500'} text-white px-6 py-2.5 rounded-full hover:shadow-lg transition-all font-semibold`}
              >
                Book Local Visit
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden ${isNightMode ? 'text-white' : 'text-gray-700'}`}
            >
              {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden ${isNightMode ? 'bg-black/90' : 'bg-white/95'} backdrop-blur-lg border-t ${isNightMode ? 'border-yellow-500/20' : 'border-red-100'}`}>
            <div className="container mx-auto px-4 py-4 space-y-4">
              <Link href="/about" className={`block ${isNightMode ? 'text-gray-300' : 'text-gray-700'}`}>About</Link>
              <Link href="/services" className={`block ${isNightMode ? 'text-gray-300' : 'text-gray-700'}`}>Services</Link>
              <Link href="/blog" className={`block ${isNightMode ? 'text-gray-300' : 'text-gray-700'}`}>Vegas Health Tips</Link>
              <Link href="/contact" className={`block ${isNightMode ? 'text-gray-300' : 'text-gray-700'}`}>Contact</Link>
              <Link 
                href="https://app.elationemr.com/book/lotusdirectcare/"
                className={`block ${isNightMode ? 'bg-gradient-to-r from-yellow-500 to-red-500' : 'bg-gradient-to-r from-red-500 to-orange-500'} text-white px-6 py-2.5 rounded-full text-center`}
              >
                Book Local Visit
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
                <span className="text-2xl">🎰</span>
                <span className={`${isNightMode ? 'text-yellow-400' : 'text-red-600'} font-semibold`}>Vegas Strong</span>
                <span className="text-2xl">💪</span>
              </div>
              
              <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${isNightMode ? 'text-white' : 'text-gray-800'}`}>
                Healthcare for
                <br />
                <span className={`bg-gradient-to-r ${isNightMode ? 'from-yellow-400 to-red-400' : 'from-red-600 to-orange-600'} bg-clip-text text-transparent`}>
                  Our Vegas Community
                </span>
              </h1>
              
              <p className={`text-xl ${isNightMode ? 'text-gray-300' : 'text-gray-600'} mb-8 leading-relaxed`}>
                From casino workers to entrepreneurs, retirees to families - we understand the unique 
                health needs of Las Vegas locals. Experience healthcare that fits your Vegas lifestyle.
              </p>

              {/* Neighborhood Showcase */}
              <div className={`${isNightMode ? 'bg-black/50' : 'bg-white/60'} backdrop-blur-lg rounded-2xl p-6 mb-8`}>
                <h3 className={`text-lg font-semibold ${isNightMode ? 'text-white' : 'text-gray-800'} mb-4`}>
                  Serving All Vegas Neighborhoods
                </h3>
                <div className="relative h-16 overflow-hidden">
                  {neighborhoods.map((neighborhood, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-all duration-500 ${
                        index === activeNeighborhood ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <span className="text-3xl">{neighborhood.icon}</span>
                          <div>
                            <h4 className={`font-semibold ${isNightMode ? 'text-white' : 'text-gray-800'}`}>
                              {neighborhood.name}
                            </h4>
                            <p className={`text-sm ${isNightMode ? 'text-gray-400' : 'text-gray-600'}`}>
                              Just {neighborhood.distance} away
                            </p>
                          </div>
                        </div>
                        <FiMapPin className={`${isNightMode ? 'text-yellow-400' : 'text-red-500'}`} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="https://lotusdirectcare.hint.com/signup/"
                  className={`${isNightMode ? 'bg-gradient-to-r from-yellow-500 to-red-500' : 'bg-gradient-to-r from-red-500 to-orange-500'} text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all inline-flex items-center justify-center gap-2`}
                >
                  <FiUsers /> Join Your Neighbors
                </Link>
                <a 
                  href="tel:4245449007"
                  className={`${isNightMode ? 'bg-transparent border-2 border-yellow-400 text-yellow-400' : 'bg-white/80 backdrop-blur text-red-600 border-2 border-red-200'} px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all inline-flex items-center justify-center gap-2`}
                >
                  <FiPhone /> Call Local: (424) 544-9007
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <Image 
                  src="/Lotus Midjourney Flowers/lotus-homepage-new.png"
                  alt="Vegas Healthcare"
                  width={600}
                  height={600}
                  className="rounded-2xl shadow-2xl"
                />
                {/* Vegas badges */}
                <div className={`absolute -top-4 -right-4 ${isNightMode ? 'bg-yellow-500' : 'bg-red-500'} text-white p-3 rounded-full shadow-lg`}>
                  <span className="text-2xl">🌵</span>
                </div>
                <div className={`absolute -bottom-4 -left-4 ${isNightMode ? 'bg-purple-500' : 'bg-orange-500'} text-white p-3 rounded-full shadow-lg`}>
                  <FiHeart className="text-2xl" />
                </div>
                <div className={`absolute top-1/2 -right-8 ${isNightMode ? 'bg-black/80' : 'bg-white/80'} backdrop-blur rounded-lg p-3 shadow-lg`}>
                  <p className={`text-sm font-bold ${isNightMode ? 'text-yellow-400' : 'text-red-600'}`}>Vegas Born</p>
                  <p className={`text-xs ${isNightMode ? 'text-gray-300' : 'text-gray-600'}`}>Vegas Proud</p>
                </div>
              </div>
              <div className={`absolute inset-0 bg-gradient-to-r ${isNightMode ? 'from-yellow-400 to-red-400' : 'from-red-400 to-orange-400'} rounded-2xl blur-3xl opacity-30 -z-10`} />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={`py-20 px-4 ${isNightMode ? 'bg-black/30' : 'bg-white/50'} backdrop-blur-sm`}>
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className={`text-3xl md:text-4xl font-bold ${isNightMode ? 'text-white' : 'text-gray-800'} mb-4`}>
              Healthcare That Understands Vegas Life
            </h2>
            <p className={`text-lg ${isNightMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Tailored services for our unique desert community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`${isNightMode ? 'bg-black/50 border border-yellow-500/20' : 'bg-white'} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all`}
              >
                <div className={`${isNightMode ? 'text-yellow-400' : 'text-red-500'} mb-6`}>
                  {service.icon}
                </div>
                <h3 className={`text-xl font-bold ${isNightMode ? 'text-white' : 'text-gray-800'} mb-3`}>
                  {service.title}
                </h3>
                <p className={`${isNightMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className={`flex items-center gap-2 ${isNightMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      <FiStar className={`${isNightMode ? 'text-yellow-400' : 'text-orange-400'} text-sm`} />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Testimonials */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className={`text-3xl md:text-4xl font-bold text-center ${isNightMode ? 'text-white' : 'text-gray-800'} mb-12`}>
            Your Vegas Neighbors Trust Us
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {localTestimonials.map((testimonial, index) => (
              <div key={index} className={`${isNightMode ? 'bg-gradient-to-br from-purple-900/50 to-red-900/50' : 'bg-gradient-to-br from-red-100 to-orange-100'} rounded-2xl p-8 shadow-lg`}>
                <div className="flex items-center mb-4">
                  <FiMapPin className={`text-2xl ${isNightMode ? 'text-yellow-400' : 'text-red-500'} mr-2`} />
                  <div>
                    <h4 className={`font-bold ${isNightMode ? 'text-white' : 'text-gray-800'}`}>
                      {testimonial.name}
                    </h4>
                    <p className={`text-sm ${isNightMode ? 'text-yellow-400' : 'text-red-600'}`}>
                      {testimonial.location}
                    </p>
                  </div>
                </div>
                <p className={`${isNightMode ? 'text-gray-300' : 'text-gray-700'} italic`}>
                  "{testimonial.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vegas Community Section */}
      <section className={`py-20 px-4 ${isNightMode ? 'bg-black/30' : 'bg-white/50'} backdrop-blur-sm`}>
        <div className="container mx-auto max-w-6xl">
          <div className={`${isNightMode ? 'bg-gradient-to-r from-purple-900 to-red-900' : 'bg-gradient-to-r from-red-100 to-orange-100'} rounded-3xl p-12`}>
            <h2 className={`text-3xl font-bold text-center ${isNightMode ? 'text-white' : 'text-gray-800'} mb-8`}>
              Proud to Serve Las Vegas Since 2020
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl mb-4">🏥</div>
                <h3 className={`text-xl font-semibold ${isNightMode ? 'text-white' : 'text-gray-800'} mb-2`}>
                  Local Partnerships
                </h3>
                <p className={`${isNightMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Working with Vegas hospitals and specialists
                </p>
              </div>
              <div>
                <div className="text-5xl mb-4">🤝</div>
                <h3 className={`text-xl font-semibold ${isNightMode ? 'text-white' : 'text-gray-800'} mb-2`}>
                  Community Events
                </h3>
                <p className={`${isNightMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Free health screenings and wellness workshops
                </p>
              </div>
              <div>
                <div className="text-5xl mb-4">💪</div>
                <h3 className={`text-xl font-semibold ${isNightMode ? 'text-white' : 'text-gray-800'} mb-2`}>
                  Vegas Strong
                </h3>
                <p className={`${isNightMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Supporting our community through every challenge
                </p>
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
      <section className={`py-20 px-4 bg-gradient-to-r ${isNightMode ? 'from-yellow-600 to-red-600' : 'from-red-600 to-orange-600'}`}>
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Your Vegas Healthcare Family
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Experience healthcare that's as unique as our city. Built for Vegas, by Vegas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="https://app.elationemr.com/book/lotusdirectcare/"
              className="bg-white text-red-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all"
            >
              Book Your Local Visit
            </Link>
            <Link 
              href="/variants"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-red-600 transition-all"
            >
              Explore All Variants
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`${isNightMode ? 'bg-black' : 'bg-gray-900'} text-white py-12`}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <FiMapPin className={`text-2xl ${isNightMode ? 'text-yellow-400' : 'text-red-400'}`} />
                <span className="text-xl font-bold">Lotus Vegas Care</span>
              </div>
              <p className="text-gray-400">Your local healthcare partner</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Vegas Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/services" className="hover:text-white">Desert Climate Care</Link></li>
                <li><Link href="/services" className="hover:text-white">24/7 Support</Link></li>
                <li><Link href="/services" className="hover:text-white">Community Health</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact Us</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <FiPhone /> (424) 544-9007
                </li>
                <li className="flex items-center gap-2">
                  <FiMail /> vegas@lotusdirectcare.com
                </li>
                <li className="flex items-center gap-2">
                  <FiMapPin /> Santa Monica, CA
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Vegas Hours</h4>
              <p className="text-gray-400 mb-4">
                <FiClock className="inline mr-2" />
                Mon-Fri: 8:00 AM - 5:00 PM
              </p>
              <p className="text-sm text-gray-500 mb-4">
                Extended hours for shift workers available
              </p>
              <Link 
                href="https://app.elationemr.com/book/lotusdirectcare/"
                className={`inline-block ${isNightMode ? 'bg-yellow-600 hover:bg-yellow-700' : 'bg-red-600 hover:bg-red-700'} text-white px-6 py-2 rounded-full transition-all`}
              >
                Book Now
              </Link>
            </div>
          </div>
          <div className={`border-t ${isNightMode ? 'border-yellow-800' : 'border-red-800'} mt-8 pt-8 text-center text-gray-400`}>
            <p>&copy; 2025 Lotus Direct Care. Proudly serving the Las Vegas community.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}