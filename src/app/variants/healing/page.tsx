'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaStethoscope, FaLeaf, FaHeart, FaUserMd, FaSeedling, FaBars, FaTimes, FaHandHoldingMedical, FaCertificate } from 'react-icons/fa'
import { GiHealingShield, GiHealthNormal, GiMedicines, GiFlowerPot, GiButterfly } from 'react-icons/gi'
import { MdLocalHospital, MdMedicalServices, MdHealthAndSafety } from 'react-icons/md'
import { variantConfig } from '../../../lib/variant-utils'

export default function HealingVariant() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [butterflyPosition, setButterflyPosition] = useState({ x: 50, y: 50 })

  useEffect(() => {
    // Animate butterfly movement
    const interval = setInterval(() => {
      setButterflyPosition({
        x: 20 + Math.random() * 60,
        y: 20 + Math.random() * 60
      })
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    // Rotate testimonials
    const timer = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % 3)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const services = [
    {
      icon: <FaStethoscope className="text-4xl mb-4" />,
      title: "Direct Primary Care",
      description: "Comprehensive medical care rooted in trust and continuity",
      link: "/direct-primary-care",
      features: ["Extended appointments", "Same-day access", "Preventive focus"],
      color: "emerald"
    },
    {
      icon: <GiHealthNormal className="text-4xl mb-4" />,
      title: "Functional Medicine",
      description: "Nurturing your body's natural healing capabilities",
      link: "/functional-medicine",
      features: ["Root cause analysis", "Natural therapies", "Holistic approach"],
      color: "teal"
    },
    {
      icon: <GiHealingShield className="text-4xl mb-4" />,
      title: "Ketamine Therapy",
      description: "Gentle pathways to mental wellness and healing",
      link: "/ketamine-therapy",
      features: ["Medical supervision", "Comfortable setting", "Proven protocols"],
      color: "blue"
    },
    {
      icon: <MdMedicalServices className="text-4xl mb-4" />,
      title: "PRP Injections",
      description: "Natural regeneration for lasting wellness",
      link: "/prp-injections",
      features: ["Advanced techniques", "Natural healing", "Minimal downtime"],
      color: "indigo"
    },
    {
      icon: <FaHandHoldingMedical className="text-4xl mb-4" />,
      title: "Addiction Treatment",
      description: "Compassionate support for sustainable recovery",
      link: "/addiction-treatment",
      features: ["Personalized plans", "Medical support", "Long-term care"],
      color: "purple"
    }
  ]

  const gardenValues = [
    {
      icon: <FaSeedling className="text-3xl" />,
      title: "Growth",
      description: "Nurturing your health journey from seed to bloom"
    },
    {
      icon: <FaLeaf className="text-3xl" />,
      title: "Natural",
      description: "Harmonizing medical excellence with natural healing"
    },
    {
      icon: <GiFlowerPot className="text-3xl" />,
      title: "Rooted Care",
      description: "Deep, lasting relationships built on trust"
    },
    {
      icon: <FaHeart className="text-3xl" />,
      title: "Compassion",
      description: "Every patient tended with genuine care"
    }
  ]

  const testimonials = [
    {
      quote: "Dr. Rosenberg's approach is like having a gardener for your health - patient, knowledgeable, and deeply caring.",
      author: "Patricia M.",
      specialty: "Primary Care Patient"
    },
    {
      quote: "The healing environment here is extraordinary. It feels more like a wellness sanctuary than a medical office.",
      author: "Robert K.",
      specialty: "Functional Medicine"
    },
    {
      quote: "Their holistic approach helped me bloom into the healthiest version of myself. Truly transformative care.",
      author: "Amanda L.",
      specialty: "Integrative Health"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-emerald-50 to-teal-50">
      {/* Animated Garden Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Floating Leaves */}
        <div className="absolute top-0 left-1/4 animate-float-slow">
          <FaLeaf className="text-green-300 text-4xl opacity-20" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-float-reverse">
          <FaSeedling className="text-emerald-300 text-3xl opacity-20" />
        </div>
        <div className="absolute bottom-1/4 left-1/3 animate-float-slow">
          <GiFlowerPot className="text-teal-300 text-5xl opacity-20" />
        </div>
        
        {/* Animated Butterfly */}
        <div 
          className="absolute transition-all duration-3000 ease-in-out"
          style={{ 
            left: `${butterflyPosition.x}%`, 
            top: `${butterflyPosition.y}%` 
          }}
        >
          <GiButterfly className="text-purple-400 text-3xl opacity-30 animate-pulse" />
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-2.5 rounded-xl shadow-lg">
                <GiHealingShield className="text-2xl text-white" />
              </div>
              <div>
                <span className="text-2xl font-semibold text-gray-800">Lotus Direct Care</span>
                <span className="block text-xs text-emerald-600 tracking-wider">HEALING GARDEN</span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/about" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                About Us
              </Link>
              <div className="relative group">
                <button className="text-gray-700 hover:text-emerald-600 transition-colors font-medium flex items-center gap-1">
                  Our Services <FaLeaf className="text-xs" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-72 bg-white shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <div className="p-2">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        href={service.link}
                        className="block px-4 py-3 hover:bg-emerald-50 rounded-lg transition-colors"
                      >
                        <span className="font-medium text-gray-800">{service.title}</span>
                        <span className="block text-xs text-gray-600 mt-1">{service.description}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <Link href="/blog" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                Health Garden Blog
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                Contact
              </Link>
              <Link 
                href={variantConfig.external.booking}
                className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-2.5 rounded-xl hover:shadow-lg transition-all font-medium"
              >
                Plant Your Visit
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
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-emerald-100">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <Link href="/about" className="block text-gray-700 hover:text-emerald-600">About Us</Link>
              <Link href="/services" className="block text-gray-700 hover:text-emerald-600">Our Services</Link>
              <Link href="/blog" className="block text-gray-700 hover:text-emerald-600">Health Garden Blog</Link>
              <Link href="/contact" className="block text-gray-700 hover:text-emerald-600">Contact</Link>
              <Link 
                href={variantConfig.external.booking}
                className="block bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-2.5 rounded-xl text-center"
              >
                Plant Your Visit
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-emerald-100 px-4 py-2 rounded-full mb-6">
                <FaCertificate className="text-emerald-600" />
                <span className="text-sm font-medium text-emerald-800">Board Certified Excellence</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Where Medical Excellence
                <span className="text-emerald-600"> Meets Natural Serenity</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Experience healthcare that combines the precision of modern medicine with 
                the gentle wisdom of natural healing. Your wellness journey begins in our 
                healing garden.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href={variantConfig.external.booking}
                  className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-xl transition-all inline-flex items-center justify-center gap-2"
                >
                  <GiFlowerPot /> Begin Your Healing Journey
                </Link>
                <Link 
                  href="/services"
                  className="bg-white text-emerald-600 px-8 py-4 rounded-xl text-lg font-semibold border-2 border-emerald-300 hover:bg-emerald-50 transition-all inline-flex items-center justify-center gap-2"
                >
                  <FaLeaf /> Explore Our Garden
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  {gardenValues.map((value, index) => (
                    <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                      <div className="text-emerald-600 mb-3 flex justify-center">{value.icon}</div>
                      <h4 className="font-semibold text-gray-800 mb-1">{value.title}</h4>
                      <p className="text-xs text-gray-600">{value.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Garden */}
      <section className="py-20 px-4 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Garden of Healing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each service is carefully cultivated to help you bloom into your healthiest self
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
                  <div className={`text-${service.color}-600 mb-4`}>{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <FaSeedling className={`text-${service.color}-500 text-xs`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`h-2 bg-gradient-to-r from-${service.color}-400 to-${service.color}-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Dr. Rosenberg Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Dr. Aaron Rosenberg: Your Healthcare Gardener
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  With over 15 years of medical experience, Dr. Rosenberg combines 
                  board-certified expertise with a deeply personal approach to patient care.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <FaUserMd className="text-emerald-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Medical Excellence</h4>
                      <p className="text-sm text-gray-600">Board-certified physician with specialized training</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <GiHealthNormal className="text-emerald-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Holistic Approach</h4>
                      <p className="text-sm text-gray-600">Integrating conventional and functional medicine</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaHeart className="text-emerald-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Patient-Centered</h4>
                      <p className="text-sm text-gray-600">Your health goals guide every treatment plan</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-xl text-center">
                  <GiHealingShield className="text-6xl text-emerald-600 mx-auto mb-4" />
                  <blockquote className="text-lg text-gray-700 italic mb-4">
                    "True healing occurs when we address the whole person - 
                    body, mind, and spirit - with both medical expertise and genuine compassion."
                  </blockquote>
                  <p className="text-sm font-medium text-emerald-600">- Dr. Aaron Rosenberg</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20 px-4 bg-gradient-to-r from-teal-50 to-emerald-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Stories from Our Healing Garden
          </h2>
          
          <div className="relative bg-white rounded-3xl shadow-xl p-12 overflow-hidden">
            <div className="absolute top-4 right-4">
              <GiButterfly className="text-6xl text-purple-200" />
            </div>
            <div className="relative z-10">
              <div className="transition-all duration-500">
                <p className="text-xl text-gray-700 italic mb-6 leading-relaxed">
                  "{testimonials[currentTestimonial].quote}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-800">
                      - {testimonials[currentTestimonial].author}
                    </p>
                    <p className="text-sm text-emerald-600">
                      {testimonials[currentTestimonial].specialty}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentTestimonial 
                            ? 'w-8 bg-emerald-600' 
                            : 'bg-emerald-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <GiFlowerPot className="text-white text-[30rem] absolute -right-32 -top-32" />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Plant the Seeds of Your Wellness Today
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join our healing garden where medical excellence and natural wellness 
                bloom together. Your journey to optimal health starts here.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href={variantConfig.external.booking}
                  className="bg-white text-emerald-600 px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-xl transition-all"
                >
                  Schedule Your Garden Visit
                </Link>
                <Link 
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-emerald-600 transition-all"
                >
                  Contact Our Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-emerald-800 to-teal-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <GiHealingShield className="text-3xl text-emerald-300" />
                <span className="text-xl font-semibold">Lotus Direct Care</span>
              </div>
              <p className="text-emerald-200 text-sm">Where healing blooms naturally</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Our Services</h4>
              <ul className="space-y-2 text-sm text-emerald-200">
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
              <h4 className="font-semibold mb-4">Visit Our Garden</h4>
              <ul className="space-y-2 text-sm text-emerald-200">
                <li>{variantConfig.contact.phone}</li>
                <li>{variantConfig.contact.email}</li>
                <li>{variantConfig.contact.address}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Garden Hours</h4>
              <p className="text-sm text-emerald-200 mb-4">{variantConfig.contact.hours}</p>
              <Link 
                href={variantConfig.external.booking}
                className="inline-block bg-emerald-600 text-white px-6 py-2 rounded-xl hover:bg-emerald-700 transition-all text-sm"
              >
                Plant Your Visit
              </Link>
            </div>
          </div>
          <div className="border-t border-emerald-700 mt-8 pt-8 text-center text-sm text-emerald-200">
            <p>&copy; 2025 Lotus Direct Care. Growing health, nurturing wellness.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(20px); }
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        .animate-float-reverse {
          animation: float-reverse 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}