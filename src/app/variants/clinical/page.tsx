'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaStethoscope, FaHeartbeat, FaUserMd, FaMicroscope, FaSyringe, FaBars, FaTimes, FaShieldAlt, FaAward, FaClipboardCheck } from 'react-icons/fa'
import { MdMedicalServices, MdHealthAndSafety, MdScience } from 'react-icons/md'
import { variantConfig } from '../../../lib/variant-utils'

export default function ClinicalVariant() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('excellence')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const services = [
    {
      icon: <FaStethoscope className="text-4xl mb-4" />,
      title: "Direct Primary Care",
      description: "Comprehensive, evidence-based primary care with extended appointments",
      link: "/direct-primary-care",
      features: ["Same-day appointments", "24/7 access", "Preventive care focus"]
    },
    {
      icon: <MdScience className="text-4xl mb-4" />,
      title: "Functional Medicine",
      description: "Advanced diagnostic testing and personalized treatment protocols",
      link: "/functional-medicine",
      features: ["Lab analysis", "Root cause approach", "Integrative therapies"]
    },
    {
      icon: <FaSyringe className="text-4xl mb-4" />,
      title: "Ketamine Therapy",
      description: "FDA-approved treatment for depression and chronic pain",
      link: "/ketamine-therapy",
      features: ["Clinical supervision", "Proven protocols", "Mental health support"]
    },
    {
      icon: <MdMedicalServices className="text-4xl mb-4" />,
      title: "PRP Injections",
      description: "Regenerative medicine using your body's own healing factors",
      link: "/prp-injections",
      features: ["Advanced techniques", "Sterile procedures", "Recovery monitoring"]
    },
    {
      icon: <FaHeartbeat className="text-4xl mb-4" />,
      title: "Addiction Treatment",
      description: "Evidence-based recovery programs with medical supervision",
      link: "/addiction-treatment",
      features: ["MAT programs", "Counseling support", "Long-term care plans"]
    }
  ]

  const qualityMetrics = [
    { value: "98%", label: "Patient Satisfaction", icon: <FaAward /> },
    { value: "24/7", label: "Clinical Support", icon: <MdHealthAndSafety /> },
    { value: "15+", label: "Years Experience", icon: <FaUserMd /> },
    { value: "100%", label: "HIPAA Compliant", icon: <FaShieldAlt /> }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <FaStethoscope className="text-2xl text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold text-gray-900">Lotus Direct Care</span>
                <span className="block text-xs text-blue-600 uppercase tracking-wider">Clinical Excellence</span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                About
              </Link>
              <div className="relative group">
                <button className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                  Services
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      href={service.link}
                      className="block px-4 py-3 hover:bg-blue-50 transition-colors border-b border-gray-100 last:border-0"
                    >
                      <span className="font-medium text-gray-900">{service.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
              <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Resources
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Contact
              </Link>
              <Link 
                href={variantConfig.external.booking}
                className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-all font-medium"
              >
                Book Appointment
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
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <Link href="/about" className="block text-gray-700 hover:text-blue-600">About</Link>
              <Link href="/services" className="block text-gray-700 hover:text-blue-600">Services</Link>
              <Link href="/blog" className="block text-gray-700 hover:text-blue-600">Resources</Link>
              <Link href="/contact" className="block text-gray-700 hover:text-blue-600">Contact</Link>
              <Link 
                href={variantConfig.external.booking}
                className="block bg-blue-600 text-white px-6 py-2.5 rounded-lg text-center"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-blue-50 to-white relative">
        <div className="absolute top-32 right-10 opacity-10">
          <Image 
            src="/images/lotus_logo.png" 
            alt="Lotus Direct Care Symbol" 
            width={300} 
            height={300}
            className="filter grayscale"
          />
        </div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-6">
                <MdHealthAndSafety className="text-blue-600" />
                <span className="text-sm font-medium text-blue-800">Board Certified Physicians</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Clinical Excellence in
                <span className="text-blue-600"> Personalized Healthcare</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Evidence-based medicine meets personalized care. Experience healthcare 
                delivered with precision, compassion, and clinical expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href={variantConfig.external.booking}
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all inline-flex items-center justify-center gap-2"
                >
                  <FaClipboardCheck /> Schedule Consultation
                </Link>
                <Link 
                  href="/services"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all inline-flex items-center justify-center gap-2"
                >
                  <MdMedicalServices /> View Services
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  {qualityMetrics.map((metric, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm">
                      <div className="text-blue-600 mb-2 flex justify-center">{metric.icon}</div>
                      <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
                      <div className="text-sm text-gray-600">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Services */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Medical Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our clinical team provides evidence-based treatments using the latest medical 
              protocols and technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.link}
                className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="p-8">
                  <div className="text-blue-600 mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-blue-600 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Excellence Tabs */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Our Commitment to Clinical Excellence
          </h2>
          
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 p-1 rounded-lg inline-flex">
              {['excellence', 'technology', 'safety'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-md font-medium capitalize transition-all ${
                    activeTab === tab
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            {activeTab === 'excellence' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Medical Excellence</h3>
                  <p className="text-gray-600 mb-6">
                    Our physicians are board-certified and continuously trained in the latest 
                    medical advances. We maintain the highest standards of clinical practice.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <FaShieldAlt className="text-blue-600 mt-1" />
                      <span className="text-gray-700">Board-certified physicians with specialized training</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaAward className="text-blue-600 mt-1" />
                      <span className="text-gray-700">Continuous medical education and training</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaClipboardCheck className="text-blue-600 mt-1" />
                      <span className="text-gray-700">Evidence-based treatment protocols</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-8 text-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20">
                    <Image 
                      src="/images/dr_rosenberg_optimized.jpg" 
                      alt="Dr. Aaron Rosenberg" 
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative z-10">
                    <FaUserMd className="text-6xl text-blue-600 mx-auto mb-4" />
                    <p className="text-xl font-semibold text-gray-900">Expert Medical Team</p>
                    <p className="text-gray-600 mt-2">Dedicated to your health outcomes</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'technology' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Advanced Technology</h3>
                  <p className="text-gray-600 mb-6">
                    We utilize state-of-the-art medical technology and diagnostic equipment 
                    to ensure accurate diagnoses and effective treatments.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <FaMicroscope className="text-blue-600 mt-1" />
                      <span className="text-gray-700">Advanced diagnostic laboratories</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <MdMedicalServices className="text-blue-600 mt-1" />
                      <span className="text-gray-700">Modern medical equipment</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <MdScience className="text-blue-600 mt-1" />
                      <span className="text-gray-700">Electronic health records system</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-8 text-center">
                  <MdScience className="text-6xl text-blue-600 mx-auto mb-4" />
                  <p className="text-xl font-semibold text-gray-900">Cutting-Edge Tools</p>
                  <p className="text-gray-600 mt-2">For precise diagnosis and treatment</p>
                </div>
              </div>
            )}

            {activeTab === 'safety' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Patient Safety</h3>
                  <p className="text-gray-600 mb-6">
                    Your safety is our top priority. We maintain strict safety protocols 
                    and HIPAA compliance to protect your health and privacy.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <FaShieldAlt className="text-blue-600 mt-1" />
                      <span className="text-gray-700">HIPAA-compliant practices</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <MdHealthAndSafety className="text-blue-600 mt-1" />
                      <span className="text-gray-700">Strict infection control protocols</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaClipboardCheck className="text-blue-600 mt-1" />
                      <span className="text-gray-700">Regular safety audits and reviews</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-8 text-center">
                  <FaShieldAlt className="text-6xl text-blue-600 mx-auto mb-4" />
                  <p className="text-xl font-semibold text-gray-900">100% HIPAA Compliant</p>
                  <p className="text-gray-600 mt-2">Your privacy and safety protected</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Patient Success Stories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "The level of care and attention to detail is exceptional. Dr. Rosenberg takes the time to truly understand my health concerns.",
                author: "Sarah M.",
                rating: 5
              },
              {
                quote: "Finally found a practice that combines modern medicine with personalized care. The clinical expertise here is outstanding.",
                author: "Michael T.",
                rating: 5
              },
              {
                quote: "The comprehensive approach to healthcare has transformed my life. I feel heard, understood, and properly cared for.",
                author: "Jennifer L.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                <p className="text-sm font-medium text-gray-900">- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-blue-600">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Experience Clinical Excellence
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of patients who have discovered a better way to receive healthcare.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href={variantConfig.external.booking}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all"
            >
              Schedule Your Consultation
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <FaStethoscope className="text-2xl text-blue-400" />
                <span className="text-xl font-bold text-white">Lotus Direct Care</span>
              </div>
              <p className="text-sm">Clinical excellence in personalized healthcare.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                {services.slice(0, 3).map((service, index) => (
                  <li key={index}>
                    <Link href={service.link} className="hover:text-blue-400 transition-colors">
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>{variantConfig.contact.phone}</li>
                <li>{variantConfig.contact.email}</li>
                <li>{variantConfig.contact.address}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Hours</h4>
              <p className="text-sm">{variantConfig.contact.hours}</p>
              <div className="mt-4">
                <Link 
                  href={variantConfig.external.booking}
                  className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all text-sm"
                >
                  Book Online
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2025 Lotus Direct Care. All rights reserved. | 
              <Link href="/privacy" className="ml-2 hover:text-blue-400">Privacy Policy</Link> | 
              <Link href="/hipaa" className="ml-2 hover:text-blue-400">HIPAA Notice</Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}