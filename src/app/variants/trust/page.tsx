'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaHandsHelping, FaUserShield, FaHeart, FaAward, FaCertificate, FaBars, FaTimes, FaHandHoldingHeart, FaShieldAlt } from 'react-icons/fa'
import { MdVerified, MdSecurity, MdPeople, MdFamilyRestroom } from 'react-icons/md'
import { GiHealthCapsule, GiMedicalPack, GiHeartBeats } from 'react-icons/gi'
import { HiOutlineSparkles } from 'react-icons/hi'
import { variantConfig } from '../../../lib/variant-utils'

export default function TrustVariant() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [trustScore, setTrustScore] = useState(0)
  const [activeFeature, setActiveFeature] = useState(0)

  useEffect(() => {
    // Animate trust score
    const timer = setTimeout(() => {
      setTrustScore(98)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Cycle through features
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % 4)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const services = [
    {
      icon: <FaHandHoldingHeart className="text-4xl mb-4" />,
      title: "Direct Primary Care",
      description: "Your trusted health partner for comprehensive, continuous care",
      link: "/direct-primary-care",
      trust: "Personal physician relationship"
    },
    {
      icon: <GiHealthCapsule className="text-4xl mb-4" />,
      title: "Functional Medicine",
      description: "Evidence-based holistic care you can trust",
      link: "/functional-medicine",
      trust: "Scientifically validated approaches"
    },
    {
      icon: <GiHeartBeats className="text-4xl mb-4" />,
      title: "Ketamine Therapy",
      description: "Safe, supervised treatment in caring hands",
      link: "/ketamine-therapy",
      trust: "Medical expertise you can rely on"
    },
    {
      icon: <GiMedicalPack className="text-4xl mb-4" />,
      title: "PRP Injections",
      description: "Trusted regenerative treatments with proven results",
      link: "/prp-injections",
      trust: "Advanced care, gentle approach"
    },
    {
      icon: <GiMedicalPack className="text-4xl mb-4" />,
      title: "Addiction Treatment",
      description: "Compassionate support on your recovery journey",
      link: "/addiction-treatment",
      trust: "Judgment-free, confidential care"
    }
  ]

  const trustPillars = [
    {
      icon: <FaCertificate className="text-4xl" />,
      title: "Board Certified",
      description: "Our physicians maintain the highest medical credentials",
      stat: "100%"
    },
    {
      icon: <FaShieldAlt className="text-4xl" />,
      title: "HIPAA Compliant",
      description: "Your privacy and security are our top priorities",
      stat: "100%"
    },
    {
      icon: <MdPeople className="text-4xl" />,
      title: "Patient Satisfaction",
      description: "Consistently rated excellent by our patients",
      stat: "98%"
    },
    {
      icon: <FaAward className="text-4xl" />,
      title: "Years of Trust",
      description: "Building lasting relationships since 2010",
      stat: "15+"
    }
  ]

  const careFeatures = [
    {
      title: "Extended Appointments",
      description: "We take the time to truly listen and understand",
      icon: <HiOutlineSparkles />
    },
    {
      title: "24/7 Access",
      description: "Your health concerns don't follow office hours",
      icon: <MdSecurity />
    },
    {
      title: "Transparent Pricing",
      description: "No surprises, just honest healthcare",
      icon: <MdVerified />
    },
    {
      title: "Continuous Care",
      description: "We're with you every step of your health journey",
      icon: <FaHandsHelping />
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-rose-50">
      {/* Warm Background Pattern */}
      <div className="fixed inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(251, 146, 60, 0.3) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 bg-white/90 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-3 rounded-2xl shadow-lg">
                <FaHandsHelping className="text-2xl text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold text-gray-800">Lotus Direct Care</span>
                <span className="block text-xs text-orange-600 tracking-wider">TRUST & CARE</span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/about" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
                About Us
              </Link>
              <div className="relative group">
                <button className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
                  Our Services
                </button>
                <div className="absolute top-full left-0 mt-2 w-72 bg-white shadow-xl rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all overflow-hidden">
                  <div className="p-2">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        href={service.link}
                        className="block px-4 py-3 hover:bg-orange-50 rounded-xl transition-colors"
                      >
                        <span className="font-medium text-gray-800">{service.title}</span>
                        <span className="block text-xs text-gray-600 mt-1">{service.trust}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <Link href="/blog" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
                Patient Stories
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
                Contact
              </Link>
              <Link 
                href={variantConfig.external.booking}
                className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all font-medium"
              >
                Book with Confidence
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
          <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-orange-100">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <Link href="/about" className="block text-gray-700 hover:text-orange-600">About Us</Link>
              <Link href="/services" className="block text-gray-700 hover:text-orange-600">Our Services</Link>
              <Link href="/blog" className="block text-gray-700 hover:text-orange-600">Patient Stories</Link>
              <Link href="/contact" className="block text-gray-700 hover:text-orange-600">Contact</Link>
              <Link 
                href={variantConfig.external.booking}
                className="block bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-3 rounded-full text-center"
              >
                Book with Confidence
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="absolute top-10 right-10 opacity-5">
          <Image 
            src="/images/lotus_logo.png" 
            alt="Lotus Trust Symbol" 
            width={400} 
            height={400}
          />
        </div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-orange-100 px-5 py-2.5 rounded-full mb-8">
              <MdVerified className="text-orange-600" />
              <span className="text-sm font-semibold text-orange-800">Trusted by Thousands of Patients</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Healthcare Built on
              <span className="text-transparent bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text"> Trust & Care</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              Experience the warmth of personalized medicine where every patient is family. 
              We combine medical excellence with genuine compassion to create a healthcare 
              experience you can trust.
            </p>

            {/* Trust Score Display */}
            <div className="bg-white rounded-3xl shadow-xl p-8 max-w-md mx-auto mb-12">
              <div className="relative h-32 flex items-center justify-center mb-4">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-28 h-28 rounded-full border-8 border-orange-100" />
                </div>
                <div className="relative text-center">
                  <div className="text-4xl font-bold text-orange-600" style={{
                    transition: 'all 1.5s ease-out'
                  }}>{trustScore}%</div>
                  <div className="text-sm text-gray-600">Trust Score</div>
                </div>
              </div>
              <p className="text-gray-700 font-medium">Based on patient satisfaction and outcomes</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href={variantConfig.external.membership}
                className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all inline-flex items-center justify-center gap-2"
              >
                <FaHandHoldingHeart /> Join Our Care Family
              </Link>
              <Link 
                href="/services"
                className="bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-semibold border-2 border-orange-300 hover:bg-orange-50 transition-all inline-flex items-center justify-center gap-2"
              >
                <MdFamilyRestroom /> Meet Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Pillars */}
      <section className="py-20 px-4 bg-white/60">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Why Patients Trust Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPillars.map((pillar, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                <div className="text-orange-600 mb-4 flex justify-center">{pillar.icon}</div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{pillar.stat}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{pillar.title}</h3>
                <p className="text-sm text-gray-600">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services with Care */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Comprehensive Care Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each service delivered with the same commitment to trust and compassionate care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.link}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="p-8">
                  <div className="text-orange-600 mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <p className="text-sm text-orange-600 font-medium flex items-center gap-1">
                    <FaShieldAlt className="text-xs" /> {service.trust}
                  </p>
                </div>
                <div className="h-1 bg-gradient-to-r from-amber-400 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Care Features */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-50 to-amber-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            The Lotus Care Difference
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {careFeatures.map((feature, index) => (
              <div 
                key={index} 
                className={`flex items-start gap-4 p-6 rounded-2xl transition-all duration-300 ${
                  activeFeature === index ? 'bg-white shadow-xl scale-105' : 'bg-white/50'
                }`}
              >
                <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-3 rounded-xl text-white">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              <div className="p-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Dr. Aaron Rosenberg
                  <span className="block text-lg font-normal text-orange-600 mt-2">
                    Your Trusted Healthcare Partner
                  </span>
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  With over 15 years of experience, Dr. Rosenberg has built his practice 
                  on a foundation of trust, compassion, and medical excellence. Every patient 
                  receives personalized attention and care tailored to their unique needs.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <FaCertificate className="text-orange-600" />
                    <span className="text-gray-700">Board Certified in Family Medicine</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaAward className="text-orange-600" />
                    <span className="text-gray-700">Top Doctor Award Recipient</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaHeart className="text-orange-600" />
                    <span className="text-gray-700">Dedicated to Patient-Centered Care</span>
                  </div>
                </div>
                <div className="mt-8">
                  <Link 
                    href={variantConfig.external.booking}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all"
                  >
                    <FaUserShield /> Meet Dr. Rosenberg
                  </Link>
                </div>
              </div>
              <div className="bg-gradient-to-br from-orange-100 to-amber-100 p-12 relative overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                  <Image 
                    src="/images/dr_rosenberg_optimized.jpg" 
                    alt="Dr. Aaron Rosenberg" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-orange-100/90 to-amber-100/90" />
                <div className="relative z-10 text-center">
                  <FaHandsHelping className="text-8xl text-orange-600 mx-auto mb-6" />
                  <blockquote className="text-xl text-gray-700 italic max-w-sm">
                    "Healthcare is not just about treating illness; it's about building 
                    relationships based on trust and genuine care for each person's wellbeing."
                  </blockquote>
                  <p className="text-sm font-medium text-orange-600 mt-4">- Dr. Aaron Rosenberg</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Stories */}
      <section className="py-20 px-4 bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Stories of Trust & Healing
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Dr. Rosenberg doesn't just treat symptoms; he treats me as a whole person. The trust I have in his care is invaluable.",
                author: "Emily R.",
                years: "Patient for 8 years"
              },
              {
                quote: "From day one, I felt like family here. The warmth and genuine care make all the difference in my healthcare journey.",
                author: "James M.",
                years: "Patient for 5 years"
              },
              {
                quote: "Finding a doctor you can truly trust is rare. Dr. Rosenberg and his team have earned my complete confidence.",
                author: "Susan K.",
                years: "Patient for 10 years"
              }
            ].map((story, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaHeart key={i} className="text-orange-400 text-sm" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{story.quote}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-800">- {story.author}</p>
                  <p className="text-sm text-orange-600">{story.years}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <FaHandHoldingHeart className="text-white text-[40rem] absolute -right-48 -top-48" />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Experience Healthcare Built on Trust
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join our family of patients who have discovered what healthcare 
                should be - personal, compassionate, and trustworthy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href={variantConfig.external.booking}
                  className="bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all"
                >
                  Schedule Your First Visit
                </Link>
                <Link 
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-orange-600 transition-all"
                >
                  Contact Our Caring Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-orange-800 to-amber-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <FaHandsHelping className="text-3xl text-orange-300" />
                <span className="text-xl font-semibold">Lotus Direct Care</span>
              </div>
              <p className="text-orange-200 text-sm">Healthcare with heart, trust in every visit</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Our Services</h4>
              <ul className="space-y-2 text-sm text-orange-200">
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
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2 text-sm text-orange-200">
                <li>{variantConfig.contact.phone}</li>
                <li>{variantConfig.contact.email}</li>
                <li>{variantConfig.contact.address}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Office Hours</h4>
              <p className="text-sm text-orange-200 mb-4">{variantConfig.contact.hours}</p>
              <Link 
                href={variantConfig.external.booking}
                className="inline-block bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition-all text-sm"
              >
                Book Your Visit
              </Link>
            </div>
          </div>
          <div className="border-t border-orange-700 mt-8 pt-8 text-center text-sm text-orange-200">
            <p>&copy; 2025 Lotus Direct Care. Building trust, delivering care, one patient at a time.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}