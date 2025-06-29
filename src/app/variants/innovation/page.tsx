'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaRobot, FaDna, FaMicrochip, FaChartLine, FaFlask, FaBars, FaTimes, FaBrain, FaVial } from 'react-icons/fa'
import { MdBiotech, MdScience, MdPrecisionManufacturing, MdAnalytics } from 'react-icons/md'
import { GiMolecule, GiDna2, GiMicroscope, GiChemicalDrop } from 'react-icons/gi'
import { HiOutlineChip, HiOutlineDatabase } from 'react-icons/hi'
import { variantConfig } from '../../../lib/variant-utils'

export default function InnovationVariant() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDataPoint, setActiveDataPoint] = useState(0)
  const [animatedStats, setAnimatedStats] = useState({
    accuracy: 0,
    efficiency: 0,
    satisfaction: 0,
    innovation: 0
  })

  useEffect(() => {
    // Animate stats on mount
    const timer = setTimeout(() => {
      setAnimatedStats({
        accuracy: 99.7,
        efficiency: 85,
        satisfaction: 98,
        innovation: 100
      })
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Rotate through data points
    const interval = setInterval(() => {
      setActiveDataPoint(prev => (prev + 1) % 4)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const services = [
    {
      icon: <MdBiotech className="text-4xl mb-4" />,
      title: "Direct Primary Care",
      description: "AI-enhanced diagnostics meet personalized medicine",
      link: "/direct-primary-care",
      tech: "Predictive Health Analytics",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: <GiDna2 className="text-4xl mb-4" />,
      title: "Functional Medicine",
      description: "Genomic insights for precision health optimization",
      link: "/functional-medicine",
      tech: "Biomarker Analysis",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: <FaBrain className="text-4xl mb-4" />,
      title: "Ketamine Therapy",
      description: "Neuroscience-backed protocols for mental wellness",
      link: "/ketamine-therapy",
      tech: "Neuroplasticity Enhancement",
      gradient: "from-pink-500 to-red-600"
    },
    {
      icon: <GiMolecule className="text-4xl mb-4" />,
      title: "PRP Injections",
      description: "Bioengineered regenerative therapy solutions",
      link: "/prp-injections",
      tech: "Cellular Regeneration",
      gradient: "from-orange-500 to-yellow-600"
    },
    {
      icon: <MdPrecisionManufacturing className="text-4xl mb-4" />,
      title: "Addiction Treatment",
      description: "Data-driven recovery with precision medicine",
      link: "/addiction-treatment",
      tech: "Behavioral Analytics",
      gradient: "from-teal-500 to-green-600"
    }
  ]

  const innovations = [
    {
      title: "AI Diagnostics",
      description: "Machine learning algorithms for early disease detection",
      icon: <FaRobot />,
      stat: "99.7%"
    },
    {
      title: "Genomic Medicine",
      description: "Personalized treatment based on genetic profiles",
      icon: <FaDna />,
      stat: "3x Better"
    },
    {
      title: "Real-time Monitoring",
      description: "Continuous health tracking with smart devices",
      icon: <FaMicrochip />,
      stat: "24/7"
    },
    {
      title: "Predictive Analytics",
      description: "Forecast health trends before symptoms appear",
      icon: <FaChartLine />,
      stat: "85% Accurate"
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20" />
        {/* Grid Pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 bg-black/50 backdrop-blur-xl border-b border-blue-500/20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur animate-pulse" />
                <div className="relative bg-black p-2 rounded-lg border border-blue-500/50">
                  <MdBiotech className="text-2xl text-blue-400" />
                </div>
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Lotus Direct Care
                </span>
                <span className="block text-xs text-blue-400 tracking-wider">MEDICAL INNOVATION</span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors">
                About
              </Link>
              <div className="relative group">
                <button className="text-gray-300 hover:text-blue-400 transition-colors">
                  Technologies
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-black/90 backdrop-blur-xl border border-blue-500/20 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      href={service.link}
                      className="block px-4 py-3 hover:bg-blue-500/10 transition-colors border-b border-blue-500/10 last:border-0"
                    >
                      <span className="text-sm font-medium text-blue-400">{service.title}</span>
                      <span className="block text-xs text-gray-500">{service.tech}</span>
                    </Link>
                  ))}
                </div>
              </div>
              <Link href="/blog" className="text-gray-300 hover:text-blue-400 transition-colors">
                Research
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">
                Contact
              </Link>
              <Link 
                href={variantConfig.external.booking}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2.5 rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all"
              >
                Start Consultation
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-300"
            >
              {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-blue-500/20">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <Link href="/about" className="block text-gray-300 hover:text-blue-400">About</Link>
              <Link href="/services" className="block text-gray-300 hover:text-blue-400">Technologies</Link>
              <Link href="/blog" className="block text-gray-300 hover:text-blue-400">Research</Link>
              <Link href="/contact" className="block text-gray-300 hover:text-blue-400">Contact</Link>
              <Link 
                href={variantConfig.external.booking}
                className="block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2.5 rounded-lg text-center"
              >
                Start Consultation
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 px-4 py-2 rounded-full mb-8">
              <HiOutlineChip className="text-blue-400" />
              <span className="text-sm text-blue-400">Next-Generation Healthcare</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                The Future of Medicine
              </span>
              <br />
              <span className="text-3xl md:text-4xl text-gray-400">Is Here Today</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
              Pioneering medical innovation through AI diagnostics, genomic medicine, 
              and precision health technologies. Experience healthcare reimagined.
            </p>

            {/* Live Stats Display */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg p-4">
                <div className="text-3xl font-bold text-blue-400" style={{
                  transition: 'all 2s ease-out'
                }}>{animatedStats.accuracy}%</div>
                <div className="text-sm text-gray-500">Diagnostic Accuracy</div>
              </div>
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg p-4">
                <div className="text-3xl font-bold text-purple-400" style={{
                  transition: 'all 2s ease-out'
                }}>{animatedStats.efficiency}%</div>
                <div className="text-sm text-gray-500">Treatment Efficiency</div>
              </div>
              <div className="bg-gradient-to-br from-pink-500/10 to-red-500/10 border border-pink-500/20 rounded-lg p-4">
                <div className="text-3xl font-bold text-pink-400" style={{
                  transition: 'all 2s ease-out'
                }}>{animatedStats.satisfaction}%</div>
                <div className="text-sm text-gray-500">Patient Satisfaction</div>
              </div>
              <div className="bg-gradient-to-br from-teal-500/10 to-green-500/10 border border-teal-500/20 rounded-lg p-4">
                <div className="text-3xl font-bold text-teal-400" style={{
                  transition: 'all 2s ease-out'
                }}>{animatedStats.innovation}%</div>
                <div className="text-sm text-gray-500">Innovation Score</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href={variantConfig.external.membership}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all inline-flex items-center justify-center gap-2"
              >
                <FaRobot /> Access Advanced Care
              </Link>
              <Link 
                href="/services"
                className="border border-blue-500/50 text-blue-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-500/10 transition-all inline-flex items-center justify-center gap-2"
              >
                <MdScience /> Explore Technologies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Showcase */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Medical Innovations
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {innovations.map((innovation, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-gray-900 to-black border rounded-lg p-6 transition-all duration-300 ${
                  activeDataPoint === index 
                    ? 'border-blue-400 shadow-lg shadow-blue-500/20' 
                    : 'border-gray-800 hover:border-gray-700'
                }`}
              >
                <div className="text-3xl mb-4 text-blue-400">{innovation.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{innovation.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{innovation.description}</p>
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {innovation.stat}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Advanced Medical Services
            </span>
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Each service enhanced with cutting-edge technology for optimal outcomes
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.link}
                className="group relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity`} />
                <div className="relative z-10">
                  <div className={`text-transparent bg-gradient-to-br ${service.gradient} bg-clip-text`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <div className="flex items-center gap-2 text-sm">
                    <HiOutlineChip className="text-blue-400" />
                    <span className="text-blue-400">{service.tech}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-teal-400 to-green-400 bg-clip-text text-transparent">
              Our Technology Stack
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black/50 border border-teal-500/20 rounded-xl p-8">
              <GiMicroscope className="text-4xl text-teal-400 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Diagnostic Tech</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <FaVial className="text-teal-400 text-sm" />
                  Advanced Lab Analytics
                </li>
                <li className="flex items-center gap-2">
                  <FaFlask className="text-teal-400 text-sm" />
                  AI-Powered Imaging
                </li>
                <li className="flex items-center gap-2">
                  <GiChemicalDrop className="text-teal-400 text-sm" />
                  Biomarker Detection
                </li>
              </ul>
            </div>

            <div className="bg-black/50 border border-purple-500/20 rounded-xl p-8">
              <HiOutlineDatabase className="text-4xl text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Data Systems</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <MdAnalytics className="text-purple-400 text-sm" />
                  Predictive Analytics
                </li>
                <li className="flex items-center gap-2">
                  <FaChartLine className="text-purple-400 text-sm" />
                  Health Monitoring
                </li>
                <li className="flex items-center gap-2">
                  <FaRobot className="text-purple-400 text-sm" />
                  Machine Learning
                </li>
              </ul>
            </div>

            <div className="bg-black/50 border border-pink-500/20 rounded-xl p-8">
              <FaDna className="text-4xl text-pink-400 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Treatment Tech</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <GiDna2 className="text-pink-400 text-sm" />
                  Genomic Sequencing
                </li>
                <li className="flex items-center gap-2">
                  <FaBrain className="text-pink-400 text-sm" />
                  Neuromodulation
                </li>
                <li className="flex items-center gap-2">
                  <GiMolecule className="text-pink-400 text-sm" />
                  Precision Medicine
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="relative bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-xl border border-blue-500/20 rounded-2xl p-12 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Experience Tomorrow's Healthcare Today
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join the medical revolution. Access cutting-edge treatments and 
                personalized care powered by the latest innovations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href={variantConfig.external.booking}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all"
                >
                  Schedule Innovation Consultation
                </Link>
                <Link 
                  href="/contact"
                  className="border border-blue-500/50 text-blue-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-500/10 transition-all"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <MdBiotech className="text-2xl text-blue-400" />
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Lotus Direct Care
                </span>
              </div>
              <p className="text-sm text-gray-500">Pioneering the future of medicine</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-gray-300">Technologies</h4>
              <ul className="space-y-2 text-sm text-gray-500">
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
              <h4 className="font-semibold mb-4 text-gray-300">Innovation Lab</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>{variantConfig.contact.phone}</li>
                <li>{variantConfig.contact.email}</li>
                <li>{variantConfig.contact.address}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-gray-300">Access Hours</h4>
              <p className="text-sm text-gray-500 mb-4">{variantConfig.contact.hours}</p>
              <Link 
                href={variantConfig.external.booking}
                className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all text-sm"
              >
                Start Journey
              </Link>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-600">
            <p>&copy; 2025 Lotus Direct Care. Advancing healthcare through innovation.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}