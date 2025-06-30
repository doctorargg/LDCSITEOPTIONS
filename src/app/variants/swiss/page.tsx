'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaPlus, FaClock, FaShieldAlt, FaStethoscope, FaHeartbeat, FaBars, FaTimes, FaMicroscope, FaUserMd } from 'react-icons/fa'
import { MdPrecisionManufacturing, MdHealthAndSafety, MdMedicalServices } from 'react-icons/md'
import { GiSwissArmyKnife, GiMountaintop, GiCrossMark } from 'react-icons/gi'
import { BiTimer, BiPulse } from 'react-icons/bi'
import { variantConfig } from '../../../lib/variant-utils'

export default function SwissVariant() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())
  const [precision, setPrecision] = useState(99.97)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const precisionTimer = setInterval(() => {
      setPrecision(prev => {
        const newVal = prev + (Math.random() - 0.5) * 0.02
        return Math.max(99.95, Math.min(99.99, newVal))
      })
    }, 3000)
    return () => clearInterval(precisionTimer)
  }, [])

  const services = [
    {
      icon: <MdPrecisionManufacturing className="text-5xl mb-4" />,
      title: "Precision Primary Care",
      description: "Swiss-engineered healthcare with meticulous attention to detail",
      link: "/direct-primary-care",
      metrics: ["0.01% Error Rate", "60-Second Response", "24/7 Monitoring"]
    },
    {
      icon: <FaMicroscope className="text-5xl mb-4" />,
      title: "Diagnostic Excellence",
      description: "Laboratory precision meets clinical expertise",
      link: "/functional-medicine",
      metrics: ["99.99% Accuracy", "Same-Day Results", "Advanced Analytics"]
    },
    {
      icon: <MdMedicalServices className="text-5xl mb-4" />,
      title: "Therapeutic Precision",
      description: "Targeted treatments with Swiss-quality protocols",
      link: "/ketamine-therapy",
      metrics: ["Exact Dosing", "Real-Time Monitoring", "Precision Outcomes"]
    },
    {
      icon: <BiPulse className="text-5xl mb-4" />,
      title: "Regenerative Medicine",
      description: "Cutting-edge procedures with clockwork precision",
      link: "/prp-injections",
      metrics: ["Minimal Variance", "Optimal Timing", "Measured Results"]
    }
  ]

  const swissValues = [
    { icon: <FaClock />, label: "Punctuality", description: "Always on time, every time" },
    { icon: <FaShieldAlt />, label: "Reliability", description: "Consistent excellence guaranteed" },
    { icon: <GiSwissArmyKnife />, label: "Versatility", description: "Complete healthcare solutions" },
    { icon: <MdHealthAndSafety />, label: "Quality", description: "Uncompromising standards" }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-white/90 backdrop-blur-sm'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-white rounded-sm flex items-center justify-center border-2 border-red-600">
                  <Image 
                    src="/images/lotus_logo.png" 
                    alt="Lotus Direct Care" 
                    width={40} 
                    height={40} 
                    className="object-contain"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-red-600 rounded-full"></div>
              </div>
              <div>
                <span className="text-2xl font-light text-gray-900">Lotus Direct Care</span>
                <span className="block text-xs text-red-600 uppercase tracking-[0.2em]">Swiss Precision</span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="flex items-center space-x-2 text-sm text-gray-600 border-r pr-4">
                <FaClock className="text-red-600" />
                <span className="font-mono">{currentTime.toLocaleTimeString('en-US', { hour12: false })}</span>
              </div>
              {variantConfig.navigation.main.map((item) => (
                <Link 
                  key={item.name}
                  href={item.href} 
                  className="text-gray-700 hover:text-red-600 transition-colors font-light"
                >
                  {item.name}
                </Link>
              ))}
              <Link 
                href={variantConfig.external.booking}
                className="bg-red-600 text-white px-6 py-2.5 rounded-sm font-light hover:bg-red-700 transition-all flex items-center gap-2"
              >
                <FaPlus /> Book Appointment
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-900"
            >
              {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="container mx-auto px-4 py-4 space-y-4">
              {variantConfig.navigation.main.map((item) => (
                <Link 
                  key={item.name}
                  href={item.href} 
                  className="block text-gray-700 hover:text-red-600"
                >
                  {item.name}
                </Link>
              ))}
              <Link 
                href={variantConfig.external.booking}
                className="block bg-red-600 text-white px-6 py-2.5 rounded-sm text-center"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white pt-32 pb-20 px-4">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 opacity-5">
            <GiMountaintop className="text-[30rem] text-gray-900" />
          </div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                <span className="text-sm text-gray-600 font-mono">PRECISION: {precision.toFixed(2)}%</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-light mb-6 text-gray-900">
                Swiss Precision
                <span className="block text-red-600 font-normal">
                  in Healthcare
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 font-light">
                Experience medical care engineered with the same meticulous standards that define 
                Swiss excellence. Every detail calibrated for optimal health outcomes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href={variantConfig.external.membership}
                  className="bg-red-600 text-white px-8 py-4 rounded-sm text-lg font-light hover:bg-red-700 transition-all flex items-center justify-center gap-2"
                >
                  <GiCrossMark /> Start Precision Care
                </Link>
                <Link 
                  href="/services"
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-sm text-lg font-light hover:border-red-600 hover:text-red-600 transition-all"
                >
                  View Specifications
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-lg shadow-2xl p-8 border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-light text-gray-900">System Status</h3>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                <div className="space-y-4 font-mono text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Response Time:</span>
                    <span className="text-green-600">0.003s</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Accuracy Rate:</span>
                    <span className="text-green-600">99.98%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Uptime:</span>
                    <span className="text-green-600">100.00%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Quality Index:</span>
                    <span className="text-green-600">AAA+</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                    <FaShieldAlt /> ISO 9001:2015 Certified
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Swiss Values Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {swissValues.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-white rounded-lg shadow-md flex items-center justify-center text-red-600 text-2xl">
                  {value.icon}
                </div>
                <h4 className="font-medium text-gray-900 mb-1">{value.label}</h4>
                <p className="text-sm text-gray-600 font-light">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light mb-4 text-gray-900">
              Precision Medical Services
            </h2>
            <p className="text-xl text-gray-600 font-light">Engineered for excellence, delivered with accuracy</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.link}
                className="group bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-red-600"
              >
                <div className="text-gray-400 group-hover:text-red-600 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-medium mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-4 font-light">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.metrics.map((metric, idx) => (
                    <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-sm text-sm font-mono">
                      {metric}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Precision Metrics Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-light mb-6 text-gray-900">
                Measured Excellence
              </h2>
              <p className="text-lg text-gray-600 mb-6 font-light">
                Our commitment to precision is reflected in every metric. Like Swiss watchmaking, 
                we believe that perfection lies in the details.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <BiTimer className="text-red-600 text-xl mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Timely Care</h4>
                    <p className="text-gray-600 font-light">Average wait time under 5 minutes</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaUserMd className="text-red-600 text-xl mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Expert Physicians</h4>
                    <p className="text-gray-600 font-light">100% board-certified specialists</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaHeartbeat className="text-red-600 text-xl mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">Health Outcomes</h4>
                    <p className="text-gray-600 font-light">98% patient satisfaction rate</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-xl p-8 border border-gray-200">
              <h3 className="text-xl font-medium mb-6 text-gray-900 text-center">Quality Assurance</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Clinical Accuracy</span>
                    <span className="font-mono text-sm">{precision.toFixed(2)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-red-600 h-2 rounded-full transition-all duration-1000" style={{ width: `${precision}%` }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Patient Outcomes</span>
                    <span className="font-mono text-sm">98.50%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-red-600 h-2 rounded-full" style={{ width: '98.5%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Process Efficiency</span>
                    <span className="font-mono text-sm">99.20%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-red-600 h-2 rounded-full" style={{ width: '99.2%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Swiss Quality Section */}
      <section className="py-20 px-4 bg-red-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="/images/lotus_logo.png" 
            alt="" 
            width={500} 
            height={500} 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5 filter invert"
          />
        </div>
        <div className="container mx-auto max-w-6xl relative">
          <div className="text-center text-white">
            <GiMountaintop className="text-6xl mx-auto mb-6 opacity-50" />
            <h2 className="text-4xl font-light mb-6">
              Swiss Quality Healthcare
            </h2>
            <p className="text-xl mb-8 font-light max-w-3xl mx-auto">
              Like the finest Swiss timepieces, our healthcare services are crafted with 
              uncompromising attention to detail and an unwavering commitment to excellence.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <FaStethoscope className="text-4xl mb-4" />
                <h4 className="text-xl font-medium mb-2">Diagnostic Precision</h4>
                <p className="font-light">Advanced technology meets clinical expertise</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <MdHealthAndSafety className="text-4xl mb-4" />
                <h4 className="text-xl font-medium mb-2">Treatment Excellence</h4>
                <p className="font-light">Evidence-based protocols for optimal outcomes</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <FaShieldAlt className="text-4xl mb-4" />
                <h4 className="text-xl font-medium mb-2">Quality Guarantee</h4>
                <p className="font-light">Swiss standards in every interaction</p>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <Image 
              src="/images/dr_rosenberg.jpg" 
              alt="Dr. Aaron Rosenberg" 
              width={160} 
              height={160} 
              className="mx-auto rounded-full border-4 border-white shadow-2xl"
            />
            <p className="text-white/80 text-sm mt-4">Dr. Aaron Rosenberg, MD - Precision Medicine Expert</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-600 rounded-full"></div>
              <div className="w-16 h-0.5 bg-red-600"></div>
              <div className="w-3 h-3 bg-red-600 rounded-full"></div>
            </div>
          </div>
          <h2 className="text-4xl font-light text-gray-900 mb-6">
            Experience Precision Healthcare
          </h2>
          <p className="text-xl text-gray-600 mb-8 font-light">
            Join a healthcare system where every detail matters and excellence is standard.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href={variantConfig.external.booking}
              className="bg-red-600 text-white px-8 py-4 rounded-sm text-lg font-light hover:bg-red-700 transition-all"
            >
              Schedule Precision Consultation
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-sm text-lg font-light hover:border-red-600 hover:text-red-600 transition-all"
            >
              Contact Swiss Team
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <Image 
              src="/images/lotus_logo.png" 
              alt="Lotus Direct Care" 
              width={50} 
              height={50} 
              className="filter brightness-200"
            />
          </div>
          <p className="mb-2 font-light">&copy; 2025 Lotus Direct Care - Swiss Precision</p>
          <p className="text-sm text-gray-400 font-light">
            Precision. Quality. Excellence.
          </p>
        </div>
      </footer>
    </div>
  )
}