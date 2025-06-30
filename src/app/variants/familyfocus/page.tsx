'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FiHeart, FiUsers, FiHome, FiShield, FiSmile, FiStar, FiPhone, FiMail, FiMapPin, FiClock, FiMenu, FiX } from 'react-icons/fi'
import JourneySection from '@/components/JourneySection'
import PricingSection from '@/components/PricingSection'
import FeaturesSection from '@/components/FeaturesSection'
import DoctorSection from '@/components/DoctorSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import BlogPreviewSection from '@/components/BlogPreviewSection'

export default function FamilyFocusVariant() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeFamily, setActiveFamily] = useState(0)

  const familyMembers = [
    { name: 'Grandparents', age: '65+', icon: '👴👵', needs: 'Chronic care, preventive medicine' },
    { name: 'Parents', age: '35-55', icon: '👨👩', needs: 'Stress management, wellness' },
    { name: 'Young Adults', age: '18-35', icon: '🧑👩', needs: 'Mental health, lifestyle guidance' },
    { name: 'Children', age: '5-17', icon: '👦👧', needs: 'Growth monitoring, vaccinations' },
    { name: 'Infants', age: '0-4', icon: '👶', needs: 'Pediatric care, development' }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFamily((prev) => (prev + 1) % familyMembers.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const services = [
    {
      icon: <FiUsers className="text-4xl" />,
      title: "Family Care Plans",
      description: "Comprehensive healthcare for every generation under one roof",
      color: "from-orange-400 to-amber-500"
    },
    {
      icon: <FiHeart className="text-4xl" />,
      title: "Pediatric Wellness",
      description: "Nurturing your children's health from infancy through adolescence",
      color: "from-pink-400 to-red-400"
    },
    {
      icon: <FiShield className="text-4xl" />,
      title: "Elder Care",
      description: "Compassionate care for your loved ones in their golden years",
      color: "from-purple-400 to-indigo-400"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Decorative Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-orange-200 rounded-full opacity-20 blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-200 rounded-full opacity-20 blur-3xl animate-pulse" />
        {/* Family icons floating */}
        <div className="absolute top-1/4 right-1/4 text-6xl opacity-10 animate-bounce">👨‍👩‍👧‍👦</div>
        <div className="absolute bottom-1/4 left-1/4 text-6xl opacity-10 animate-bounce" style={{ animationDelay: '1s' }}>🏠</div>
        <div className="absolute top-1/2 left-1/3 text-6xl opacity-10 animate-bounce" style={{ animationDelay: '2s' }}>❤️</div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 bg-white/80 backdrop-blur-lg shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-orange-400 to-amber-500 p-2 rounded-full">
                <FiHome className="text-2xl text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                  Lotus Family Care
                </span>
                <span className="block text-xs text-gray-600 tracking-wider">CARING FOR GENERATIONS</span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/about" className="text-gray-700 hover:text-orange-600 transition-colors">About Us</Link>
              <Link href="/services" className="text-gray-700 hover:text-orange-600 transition-colors">Family Services</Link>
              <Link href="/blog" className="text-gray-700 hover:text-orange-600 transition-colors">Family Health Blog</Link>
              <Link href="/contact" className="text-gray-700 hover:text-orange-600 transition-colors">Contact</Link>
              <Link 
                href="https://app.elationemr.com/book/lotusdirectcare/"
                className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-2.5 rounded-full hover:shadow-lg transition-all font-medium"
              >
                Schedule Family Visit
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
          <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-orange-100">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <Link href="/about" className="block text-gray-700 hover:text-orange-600">About Us</Link>
              <Link href="/services" className="block text-gray-700 hover:text-orange-600">Family Services</Link>
              <Link href="/blog" className="block text-gray-700 hover:text-orange-600">Family Health Blog</Link>
              <Link href="/contact" className="block text-gray-700 hover:text-orange-600">Contact</Link>
              <Link 
                href="https://app.elationemr.com/book/lotusdirectcare/"
                className="block bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-2.5 rounded-full text-center"
              >
                Schedule Family Visit
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                  Healthcare That Grows
                </span>
                <br />
                <span className="text-gray-800">With Your Family</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                From your baby's first checkup to grandma's golden years, we're here for every milestone. 
                Experience personalized care that understands your family's unique journey.
              </p>

              {/* Family Members Carousel */}
              <div className="bg-white/60 backdrop-blur-lg rounded-2xl p-6 mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">We Care For:</h3>
                <div className="relative h-24 overflow-hidden">
                  {familyMembers.map((member, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-all duration-500 ${
                        index === activeFamily ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                      }`}
                    >
                      <div className="flex items-center space-x-4">
                        <span className="text-4xl">{member.icon}</span>
                        <div>
                          <h4 className="font-semibold text-gray-800">{member.name}</h4>
                          <p className="text-sm text-gray-600">{member.needs}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="https://lotusdirectcare.hint.com/signup/"
                  className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all inline-flex items-center justify-center gap-2"
                >
                  <FiUsers /> Join Our Family
                </Link>
                <Link 
                  href="/services"
                  className="bg-white/80 backdrop-blur text-orange-600 px-8 py-4 rounded-full text-lg font-semibold border-2 border-orange-200 hover:border-orange-400 transition-all"
                >
                  Explore Family Services
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <Image 
                  src="/Lotus Midjourney Flowers/lotus-homepage-new.png"
                  alt="Lotus Direct Care"
                  width={600}
                  height={600}
                  className="rounded-2xl shadow-2xl"
                />
                {/* Family badges */}
                <div className="absolute -top-4 -right-4 bg-orange-500 text-white p-3 rounded-full shadow-lg animate-bounce">
                  <FiHeart className="text-2xl" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-amber-500 text-white p-3 rounded-full shadow-lg animate-bounce" style={{ animationDelay: '0.5s' }}>
                  <FiUsers className="text-2xl" />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-200 to-amber-200 rounded-2xl blur-3xl opacity-30 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Complete Care for Every Family Member
            </h2>
            <p className="text-lg text-gray-600">From cradle to golden years, we're with you every step</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all group"
              >
                <div className={`bg-gradient-to-r ${service.color} p-4 rounded-full inline-block text-white mb-6 group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Family Testimonial Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Families Who Trust Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8">
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-4">👨‍👩‍👧‍👦</span>
                  <div>
                    <h4 className="font-bold text-gray-800">The Rodriguez Family</h4>
                    <div className="flex text-orange-400">
                      {[...Array(5)].map((_, i) => (
                        <FiStar key={i} className="fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "Dr. Rosenberg has been caring for our family for 5 years. From my toddler's 
                  checkups to my parent's diabetes management, he treats us all with the same 
                  dedication and warmth. It's like having a doctor in the family!"
                </p>
              </div>
              <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8">
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-4">👨‍👩‍👦</span>
                  <div>
                    <h4 className="font-bold text-gray-800">The Chen Family</h4>
                    <div className="flex text-orange-400">
                      {[...Array(5)].map((_, i) => (
                        <FiStar key={i} className="fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "Having one doctor who knows our entire family's health history is invaluable. 
                  The convenience of scheduling multiple appointments together and the genuine care 
                  we receive makes healthcare stress-free."
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
      <section className="py-20 px-4 bg-gradient-to-r from-orange-500 to-amber-500">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Bring Your Whole Family to Lotus
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Experience healthcare that understands your family's unique needs at every stage of life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="https://app.elationemr.com/book/lotusdirectcare/"
              className="bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all"
            >
              Schedule Family Consultation
            </Link>
            <Link 
              href="/variants"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-orange-600 transition-all"
            >
              Explore All Variants
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-orange-800 to-amber-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <FiHome className="text-2xl" />
                <span className="text-xl font-bold">Lotus Family Care</span>
              </div>
              <p className="text-orange-200">Healthcare for every generation</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-orange-200">
                <li><Link href="/services" className="hover:text-white">Family Services</Link></li>
                <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                <li><Link href="/blog" className="hover:text-white">Health Resources</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-orange-200">
                <li className="flex items-center gap-2">
                  <FiPhone /> (424) 544-9007
                </li>
                <li className="flex items-center gap-2">
                  <FiMail /> info@lotusdirectcare.com
                </li>
                <li className="flex items-center gap-2">
                  <FiMapPin /> Santa Monica, CA
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Family Hours</h4>
              <p className="text-orange-200 mb-4">
                <FiClock className="inline mr-2" />
                Mon-Fri: 8:00 AM - 5:00 PM
              </p>
              <Link 
                href="https://app.elationemr.com/book/lotusdirectcare/"
                className="inline-block bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition-all"
              >
                Book Family Visit
              </Link>
            </div>
          </div>
          <div className="border-t border-orange-700 mt-8 pt-8 text-center text-orange-200">
            <p>&copy; 2025 Lotus Direct Care. Caring for families, one generation at a time.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}