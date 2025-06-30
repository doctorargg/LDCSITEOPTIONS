'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaBriefcase, FaChartLine, FaUserTie, FaHandshake, FaAward, FaBars, FaTimes, FaShieldAlt, FaClock, FaGlobe } from 'react-icons/fa'
import { MdBusinessCenter, MdHealthAndSafety, MdDashboard } from 'react-icons/md'
import { BsGraphUpArrow, BsPersonCheck, BsCurrencyDollar } from 'react-icons/bs'
import { variantConfig } from '../../../lib/variant-utils'

export default function ExecutiveVariant() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeMetric, setActiveMetric] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % 4)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const services = [
    {
      icon: <MdBusinessCenter className="text-5xl mb-4" />,
      title: "Executive Health Program",
      description: "Comprehensive health management designed for C-suite professionals",
      link: "/direct-primary-care",
      features: ["Annual executive physicals", "24/7 concierge access", "Health optimization"]
    },
    {
      icon: <BsGraphUpArrow className="text-5xl mb-4" />,
      title: "Performance Medicine",
      description: "Optimize your physical and cognitive performance",
      link: "/functional-medicine",
      features: ["Biomarker analysis", "Cognitive enhancement", "Energy optimization"]
    },
    {
      icon: <MdHealthAndSafety className="text-5xl mb-4" />,
      title: "Preventive Strategies",
      description: "Stay ahead of health issues with proactive care",
      link: "/ketamine-therapy",
      features: ["Advanced screening", "Risk assessment", "Preventive protocols"]
    },
    {
      icon: <FaHandshake className="text-5xl mb-4" />,
      title: "Corporate Wellness",
      description: "Enhance your organization's health capital",
      link: "/prp-injections",
      features: ["Executive team programs", "Corporate packages", "Wellness consulting"]
    }
  ]

  const metrics = [
    { label: "Client Retention", value: "98%", icon: <BsPersonCheck /> },
    { label: "Response Time", value: "<2h", icon: <FaClock /> },
    { label: "Health ROI", value: "3.2x", icon: <BsCurrencyDollar /> },
    { label: "Global Coverage", value: "24/7", icon: <FaGlobe /> }
  ]

  const testimonials = [
    {
      name: "Michael Chen",
      title: "CEO, Tech Ventures Inc.",
      content: "Lotus Direct Care has been instrumental in optimizing my health while managing a demanding schedule. The executive program is unparalleled."
    },
    {
      name: "Sarah Williams",
      title: "CFO, Global Finance Corp",
      content: "The proactive approach and 24/7 access give me peace of mind. It's healthcare that understands executive lifestyle demands."
    },
    {
      name: "David Morrison",
      title: "Managing Partner, Morrison & Associates",
      content: "Finally, a healthcare partner that values my time as much as I do. Efficient, professional, and results-driven."
    }
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy-900/95 backdrop-blur-md shadow-xl' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-5">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative w-12 h-12">
                <Image 
                  src="/images/lotus_logo_full_gold.png" 
                  alt="Lotus Direct Care" 
                  width={48} 
                  height={48} 
                  className="object-contain filter brightness-150 contrast-125"
                />
              </div>
              <div>
                <span className="text-2xl font-bold text-white">Lotus Direct Care</span>
                <span className="block text-xs text-silver-400 uppercase tracking-wider">Executive Health</span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {variantConfig.navigation.main.map((item) => (
                <Link 
                  key={item.name}
                  href={item.href} 
                  className="text-silver-300 hover:text-white transition-colors font-medium"
                >
                  {item.name}
                </Link>
              ))}
              <Link 
                href={variantConfig.external.booking}
                className="bg-gradient-to-r from-silver-400 to-silver-500 text-navy-900 px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg hover:shadow-silver-400/20 transition-all"
              >
                Schedule Consultation
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white"
            >
              {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-navy-900/95 backdrop-blur-md border-t border-silver-800">
            <div className="container mx-auto px-4 py-4 space-y-4">
              {variantConfig.navigation.main.map((item) => (
                <Link 
                  key={item.name}
                  href={item.href} 
                  className="block text-silver-300 hover:text-white"
                >
                  {item.name}
                </Link>
              ))}
              <Link 
                href={variantConfig.external.booking}
                className="block bg-gradient-to-r from-silver-400 to-silver-500 text-navy-900 px-6 py-2.5 rounded-lg text-center font-semibold"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-slate-900 pt-32 pb-20 px-4">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyMDMsMjEzLDIyNSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
          <div className="absolute top-10 right-10 opacity-10">
            <Image 
              src="/images/lotus_logo_full_gold.png" 
              alt="" 
              width={400} 
              height={400} 
              className="filter brightness-200"
            />
          </div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Healthcare for
              <span className="block text-transparent bg-gradient-to-r from-silver-300 to-silver-500 bg-clip-text">
                Industry Leaders
              </span>
            </h1>
            <p className="text-xl text-silver-300 max-w-3xl mx-auto mb-8">
              Premium concierge medicine designed for executives who demand excellence in healthcare. 
              Your health is your most valuable asset—invest accordingly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href={variantConfig.external.membership}
                className="bg-gradient-to-r from-silver-400 to-silver-500 text-navy-900 px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-silver-400/20 transition-all"
              >
                <FaUserTie className="inline mr-2" /> Join Executive Program
              </Link>
              <Link 
                href="/services"
                className="border-2 border-silver-400 text-silver-300 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-silver-400/10 transition-all"
              >
                <MdDashboard className="inline mr-2" /> View Services
              </Link>
            </div>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {metrics.map((metric, index) => (
              <div 
                key={index}
                className={`bg-navy-800/50 backdrop-blur-sm rounded-xl p-6 border transition-all duration-500 ${
                  activeMetric === index ? 'border-silver-400 shadow-lg shadow-silver-400/20' : 'border-navy-700'
                }`}
              >
                <div className="text-silver-400 text-3xl mb-2">{metric.icon}</div>
                <div className="text-3xl font-bold text-white mb-1">{metric.value}</div>
                <div className="text-sm text-silver-400">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-navy-900">
              Executive Healthcare Solutions
            </h2>
            <p className="text-xl text-gray-600">Tailored programs for peak performance and longevity</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.link}
                className="group bg-gradient-to-br from-gray-50 to-silver-50 rounded-xl p-8 hover:shadow-2xl transition-all duration-300 border border-silver-200"
              >
                <div className="text-navy-900 group-hover:text-silver-600 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-navy-900">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <FaAward className="text-silver-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-navy-900 to-slate-900">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-white">
                The Executive Advantage
              </h2>
              <p className="text-lg text-silver-300 mb-6">
                At Lotus Direct Care, we understand that executive health requires a different approach. 
                Our concierge model provides:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <FaBriefcase className="text-silver-400 mt-1" />
                  <div>
                    <span className="text-white font-semibold">Time-Efficient Care</span>
                    <p className="text-silver-400 text-sm">Minimal wait times, flexible scheduling, virtual options</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FaChartLine className="text-silver-400 mt-1" />
                  <div>
                    <span className="text-white font-semibold">Data-Driven Insights</span>
                    <p className="text-silver-400 text-sm">Advanced diagnostics and personalized health metrics</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FaShieldAlt className="text-silver-400 mt-1" />
                  <div>
                    <span className="text-white font-semibold">Complete Confidentiality</span>
                    <p className="text-silver-400 text-sm">Discrete, private healthcare for high-profile individuals</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -top-20 -right-20 opacity-5">
                <Image 
                  src="/images/LOGOTRANSPARENTFLOWERONLY1.png" 
                  alt="" 
                  width={300} 
                  height={300} 
                  className="filter brightness-200"
                />
              </div>
              <div className="bg-gradient-to-br from-silver-400/10 to-silver-600/10 backdrop-blur-sm rounded-2xl p-8 border border-silver-800 relative">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-silver-300 mb-2">15+</div>
                    <div className="text-sm text-silver-500">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-silver-300 mb-2">500+</div>
                    <div className="text-sm text-silver-500">Executive Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-silver-300 mb-2">24/7</div>
                    <div className="text-sm text-silver-500">Concierge Access</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-silver-300 mb-2">100%</div>
                    <div className="text-sm text-silver-500">Confidential</div>
                  </div>
                </div>
                <div className="mt-8 flex justify-center">
                  <Image 
                    src="/images/dr_rosenberg.jpg" 
                    alt="Dr. Aaron Rosenberg" 
                    width={200} 
                    height={200} 
                    className="rounded-full border-4 border-silver-400 shadow-xl"
                  />
                </div>
                <p className="text-center text-silver-400 text-sm mt-4">Dr. Aaron Rosenberg, MD</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]">
          <Image 
            src="/images/lotus_logo_full.png" 
            alt="" 
            width={800} 
            height={800} 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>
        <div className="container mx-auto max-w-6xl relative">
          <h2 className="text-4xl font-bold text-center mb-12 text-navy-900">
            Trusted by Industry Leaders
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 border border-silver-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-silver-400 to-silver-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-navy-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.title}</div>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-navy-900 to-slate-900">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Elevate Your Healthcare Experience
          </h2>
          <p className="text-xl text-silver-300 mb-8">
            Join an exclusive network of executives who prioritize their health as a strategic advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href={variantConfig.external.booking}
              className="bg-gradient-to-r from-silver-400 to-silver-500 text-navy-900 px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-silver-400/20 transition-all"
            >
              Schedule Executive Consultation
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-silver-400 text-silver-300 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-silver-400/10 transition-all"
            >
              Contact Concierge Team
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-950 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <Image 
              src="/images/lotus_logo_full_gold.png" 
              alt="Lotus Direct Care" 
              width={60} 
              height={60} 
              className="filter brightness-150"
            />
          </div>
          <p className="mb-2">&copy; 2025 Lotus Direct Care - Executive Health Division</p>
          <p className="text-sm text-silver-500">
            Premium Healthcare. Executive Excellence.
          </p>
        </div>
      </footer>

      <style jsx>{`
        .bg-navy-800 { background-color: #1e3a5f; }
        .bg-navy-900 { background-color: #0f2942; }
        .bg-navy-950 { background-color: #0a1929; }
        .text-navy-900 { color: #0f2942; }
        .border-navy-700 { border-color: #2c4964; }
        .bg-silver-50 { background-color: #f8f9fa; }
        .bg-silver-400 { background-color: #c0c0c0; }
        .bg-silver-500 { background-color: #a8a8a8; }
        .bg-silver-600 { background-color: #909090; }
        .text-silver-300 { color: #d4d4d4; }
        .text-silver-400 { color: #c0c0c0; }
        .text-silver-500 { color: #a8a8a8; }
        .text-silver-600 { color: #909090; }
        .border-silver-200 { border-color: #e5e5e5; }
        .border-silver-400 { border-color: #c0c0c0; }
        .border-silver-800 { border-color: #707070; }
        .from-silver-300 { --tw-gradient-from: #d4d4d4; }
        .from-silver-400 { --tw-gradient-from: #c0c0c0; }
        .to-silver-500 { --tw-gradient-to: #a8a8a8; }
        .to-silver-600 { --tw-gradient-to: #909090; }
      `}</style>
    </div>
  )
}