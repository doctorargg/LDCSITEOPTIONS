'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaGem, FaRing, FaCrown, FaStar, FaBars, FaTimes, FaInfinity, FaShieldAlt } from 'react-icons/fa'
import { GiDiamondTrophy, GiCrystalShine, GiSparkles, GiPearlNecklace } from 'react-icons/gi'
import { HiSparkles } from 'react-icons/hi'
import { BiDiamond } from 'react-icons/bi'
import { variantConfig } from '../../../lib/variant-utils'

export default function PlatinumVariant() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [shimmerPosition, setShimmerPosition] = useState(0)
  const [hoveredService, setHoveredService] = useState<number | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const shimmerInterval = setInterval(() => {
      setShimmerPosition((prev) => (prev + 1) % 100)
    }, 50)
    return () => clearInterval(shimmerInterval)
  }, [])

  const services = [
    {
      icon: <GiDiamondTrophy className="text-5xl mb-4" />,
      title: "Platinum Membership",
      description: "The pinnacle of personalized healthcare excellence",
      link: "/direct-primary-care",
      features: ["Unlimited consultations", "Priority scheduling", "Global health coverage"]
    },
    {
      icon: <GiCrystalShine className="text-5xl mb-4" />,
      title: "Precision Medicine",
      description: "Cutting-edge diagnostics and tailored treatments",
      link: "/functional-medicine",
      features: ["Genetic profiling", "Advanced biomarkers", "Personalized protocols"]
    },
    {
      icon: <FaInfinity className="text-5xl mb-4" />,
      title: "Longevity Program",
      description: "Science-based strategies for optimal aging",
      link: "/ketamine-therapy",
      features: ["Age reversal protocols", "Cellular optimization", "Vitality enhancement"]
    },
    {
      icon: <GiPearlNecklace className="text-5xl mb-4" />,
      title: "Aesthetic Excellence",
      description: "Premium regenerative and aesthetic treatments",
      link: "/prp-injections",
      features: ["PRP therapy", "Advanced aesthetics", "Regenerative medicine"]
    }
  ]

  const benefits = [
    { icon: <FaGem />, title: "White Glove Service", description: "Personalized attention at every touchpoint" },
    { icon: <FaCrown />, title: "Elite Access", description: "Same-day appointments and 24/7 concierge" },
    { icon: <FaGem />, title: "Premium Facilities", description: "Luxurious, private healthcare environment" },
    { icon: <FaStar />, title: "Top 1% Physicians", description: "Board-certified specialists in every field" }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-5">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-platinum-300 to-white rounded-lg flex items-center justify-center shadow-inner">
                  <GiDiamondTrophy className="text-2xl text-platinum-600" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-platinum-400 rounded-full animate-pulse"></div>
              </div>
              <div>
                <span className={`text-2xl font-light ${scrolled ? 'text-gray-900' : 'text-white'}`}>
                  Lotus Direct Care
                </span>
                <span className={`block text-xs uppercase tracking-[0.2em] ${scrolled ? 'text-platinum-600' : 'text-platinum-200'}`}>
                  Platinum
                </span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {variantConfig.navigation.main.map((item) => (
                <Link 
                  key={item.name}
                  href={item.href} 
                  className={`font-light transition-colors ${
                    scrolled ? 'text-gray-700 hover:text-platinum-600' : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link 
                href={variantConfig.external.booking}
                className="relative bg-gradient-to-r from-platinum-400 to-platinum-500 text-white px-8 py-3 rounded-full font-light hover:shadow-xl transition-all overflow-hidden group"
              >
                <span className="relative z-10">Begin Your Journey</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/50 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden ${scrolled ? 'text-gray-900' : 'text-white'}`}
            >
              {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-platinum-200">
            <div className="container mx-auto px-4 py-4 space-y-4">
              {variantConfig.navigation.main.map((item) => (
                <Link 
                  key={item.name}
                  href={item.href} 
                  className="block text-gray-700 hover:text-platinum-600"
                >
                  {item.name}
                </Link>
              ))}
              <Link 
                href={variantConfig.external.booking}
                className="block bg-gradient-to-r from-platinum-400 to-platinum-500 text-white px-6 py-3 rounded-full text-center"
              >
                Begin Your Journey
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-platinum-100 via-white to-silver-50 min-h-screen flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-platinum-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-silver-200/20 rounded-full blur-3xl"></div>
          {/* Floating diamonds */}
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${20 + i * 15}%`,
                top: `${10 + i * 10}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i}s`
              }}
            >
              <BiDiamond className="text-platinum-300/30 text-3xl" />
            </div>
          ))}
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 relative inline-block">
              <HiSparkles className="text-platinum-400 text-6xl animate-pulse" />
              <GiSparkles className="text-platinum-300 text-4xl absolute -top-4 -right-4 animate-pulse" />
              <GiSparkles className="text-platinum-300 text-3xl absolute -bottom-2 -left-4 animate-pulse" />
            </div>
            <h1 className="text-5xl md:text-7xl font-light mb-6 text-gray-900 leading-tight">
              Exceptional Healthcare
              <span className="block text-transparent bg-gradient-to-r from-platinum-400 to-platinum-600 bg-clip-text font-normal">
                Refined to Perfection
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 font-light">
              Experience the platinum standard in concierge medicine. Where unparalleled expertise meets 
              uncompromising luxury in every aspect of your health journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href={variantConfig.external.membership}
                className="group relative bg-gradient-to-r from-platinum-400 to-platinum-500 text-white px-10 py-4 rounded-full text-lg font-light hover:shadow-2xl transition-all overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <GiDiamondTrophy className="mr-2" /> Apply for Platinum Membership
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </Link>
              <Link 
                href="/services"
                className="border-2 border-platinum-400 text-platinum-600 px-10 py-4 rounded-full text-lg font-light hover:bg-platinum-50 transition-all"
              >
                Discover Excellence
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-platinum-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4 text-gray-900">
              The Platinum Difference
            </h2>
            <p className="text-xl text-gray-600 font-light">Unmatched quality in every detail</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="text-center group"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-platinum-100 to-white rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all">
                  <div className="text-platinum-500 text-3xl">{benefit.icon}</div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600 font-light">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4 text-gray-900">
              Platinum Services
            </h2>
            <p className="text-xl text-gray-600 font-light">Curated healthcare solutions for discerning individuals</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.link}
                className="group relative bg-gradient-to-br from-white to-platinum-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-platinum-100/0 via-platinum-100/50 to-platinum-100/0 transform -skew-x-12 transition-transform duration-700"
                  style={{
                    transform: hoveredService === index ? 'translateX(0) skewX(-12deg)' : 'translateX(-200%) skewX(-12deg)'
                  }}
                ></div>
                <div className="relative z-10">
                  <div className="text-platinum-500 group-hover:text-platinum-600 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mb-4 font-light">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <HiSparkles className="text-platinum-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-platinum-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-light mb-6 text-gray-900">
                A Sanctuary of
                <span className="block font-normal text-transparent bg-gradient-to-r from-platinum-400 to-platinum-600 bg-clip-text">
                  Health & Wellness
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 font-light">
                Step into an environment designed for your comfort and privacy. Our platinum care 
                experience combines state-of-the-art medical technology with luxurious amenities.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <FaShieldAlt className="text-platinum-500 text-xl mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Complete Privacy</h4>
                    <p className="text-gray-600 font-light">Discrete entrances and private consultation suites</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <FaGem className="text-platinum-500 text-xl mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Bespoke Care Plans</h4>
                    <p className="text-gray-600 font-light">Tailored to your unique health goals and lifestyle</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <FaStar className="text-platinum-500 text-xl mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">World-Class Expertise</h4>
                    <p className="text-gray-600 font-light">Access to leading specialists across all disciplines</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-platinum-100 to-white rounded-2xl p-12 shadow-xl">
                <div className="text-center">
                  <GiCrystalShine className="text-6xl text-platinum-400 mx-auto mb-6" />
                  <h3 className="text-2xl font-light mb-4 text-gray-900">Join the Elite</h3>
                  <p className="text-gray-600 mb-6 font-light">
                    Limited memberships ensure personalized attention
                  </p>
                  <div className="flex justify-center space-x-4 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-platinum-400 text-xl" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 font-light italic">
                    "The most refined healthcare experience available"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-platinum-600 to-platinum-700">
        <div className="container mx-auto max-w-4xl text-center">
          <GiPearlNecklace className="text-6xl text-white/30 mx-auto mb-6" />
          <h2 className="text-4xl font-light text-white mb-6">
            Your Health Deserves Platinum
          </h2>
          <p className="text-xl text-white/90 mb-8 font-light">
            Experience healthcare reimagined for those who expect nothing but the best.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href={variantConfig.external.booking}
              className="bg-white text-platinum-600 px-10 py-4 rounded-full text-lg font-light hover:shadow-xl transition-all"
            >
              Schedule Private Consultation
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-white text-white px-10 py-4 rounded-full text-lg font-light hover:bg-white/10 transition-all"
            >
              Request Information
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-platinum-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <GiDiamondTrophy className="text-4xl text-platinum-400" />
          </div>
          <p className="mb-2 font-light">&copy; 2025 Lotus Direct Care - Platinum</p>
          <p className="text-sm text-platinum-300 font-light">
            Where Excellence Meets Elegance in Healthcare
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .bg-platinum-50 { background-color: #fafafa; }
        .bg-platinum-100 { background-color: #f5f5f5; }
        .bg-platinum-200 { background-color: #e5e5e5; }
        .bg-platinum-300 { background-color: #d4d4d4; }
        .bg-platinum-400 { background-color: #a3a3a3; }
        .bg-platinum-500 { background-color: #737373; }
        .bg-platinum-600 { background-color: #525252; }
        .bg-platinum-700 { background-color: #404040; }
        .bg-platinum-900 { background-color: #171717; }
        .text-platinum-200 { color: #e5e5e5; }
        .text-platinum-300 { color: #d4d4d4; }
        .text-platinum-400 { color: #a3a3a3; }
        .text-platinum-500 { color: #737373; }
        .text-platinum-600 { color: #525252; }
        .border-platinum-200 { border-color: #e5e5e5; }
        .border-platinum-400 { border-color: #a3a3a3; }
        .from-platinum-100 { --tw-gradient-from: #f5f5f5; }
        .from-platinum-300 { --tw-gradient-from: #d4d4d4; }
        .from-platinum-400 { --tw-gradient-from: #a3a3a3; }
        .from-platinum-600 { --tw-gradient-from: #525252; }
        .to-platinum-500 { --tw-gradient-to: #737373; }
        .to-platinum-600 { --tw-gradient-to: #525252; }
        .to-platinum-700 { --tw-gradient-to: #404040; }
        .to-platinum-900 { --tw-gradient-to: #171717; }
        .bg-silver-50 { background-color: #fafafa; }
        .bg-silver-200 { background-color: #e5e5e5; }
      `}</style>
    </div>
  )
}