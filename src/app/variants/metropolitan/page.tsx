'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaCity, FaBuilding, FaTaxi, FaSubway, FaBriefcase, FaBars, FaTimes, FaMapMarkerAlt, FaCoffee } from 'react-icons/fa'
import { MdApartment, MdLocationCity, MdElevator, MdLocalHospital } from 'react-icons/md'
import { GiModernCity, GiStreetLight } from 'react-icons/gi'
import { BiBuildings } from 'react-icons/bi'
import { variantConfig } from '../../../lib/variant-utils'

export default function MetropolitanVariant() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [currentHour, setCurrentHour] = useState(new Date().getHours())
  const [cityLights, setCityLights] = useState<Array<{id: number, on: boolean}>>([])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Update time
    const timer = setInterval(() => {
      setCurrentHour(new Date().getHours())
    }, 60000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    // Animate city lights
    const lights = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      on: Math.random() > 0.3
    }))
    setCityLights(lights)

    const lightInterval = setInterval(() => {
      setCityLights(prev => prev.map(light => ({
        ...light,
        on: Math.random() > 0.2
      })))
    }, 2000)

    return () => clearInterval(lightInterval)
  }, [])

  const isEvening = currentHour >= 18 || currentHour < 6

  const services = [
    {
      icon: <MdLocationCity className="text-5xl mb-4" />,
      title: "Urban Executive Care",
      description: "Healthcare designed for the metropolitan professional",
      link: "/direct-primary-care",
      features: ["Downtown locations", "Extended hours", "Virtual consultations"]
    },
    {
      icon: <FaSubway className="text-5xl mb-4" />,
      title: "Fast-Track Medicine",
      description: "Efficient care that moves at city speed",
      link: "/functional-medicine",
      features: ["Express appointments", "Mobile health units", "Same-day service"]
    },
    {
      icon: <GiModernCity className="text-5xl mb-4" />,
      title: "Metropolitan Wellness",
      description: "Comprehensive health solutions for urban life",
      link: "/ketamine-therapy",
      features: ["Stress management", "Urban health issues", "Lifestyle optimization"]
    },
    {
      icon: <BiBuildings className="text-5xl mb-4" />,
      title: "Corporate Health",
      description: "Specialized care for business professionals",
      link: "/prp-injections",
      features: ["Executive physicals", "Corporate packages", "Workplace wellness"]
    }
  ]

  const urbanFeatures = [
    { icon: <FaTaxi />, title: "Convenient Access", description: "Multiple city locations" },
    { icon: <FaCoffee />, title: "Early & Late Hours", description: "7AM - 9PM availability" },
    { icon: <FaBriefcase />, title: "Business Integration", description: "Seamless with work life" },
    { icon: <MdElevator />, title: "Premium Facilities", description: "Modern urban clinics" }
  ]

  return (
    <div className={`min-h-screen ${isEvening ? 'bg-slate-900' : 'bg-gray-50'} transition-colors duration-1000`}>
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? (isEvening ? 'bg-slate-900/95' : 'bg-white/95') + ' backdrop-blur-md shadow-xl' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-5">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-900 rounded-lg flex items-center justify-center">
                  <FaCity className="text-2xl text-cyan-400" />
                </div>
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              </div>
              <div>
                <span className={`text-2xl font-light ${scrolled ? (isEvening ? 'text-white' : 'text-gray-900') : 'text-white'}`}>
                  Lotus Direct Care
                </span>
                <span className={`block text-xs uppercase tracking-[0.15em] ${scrolled ? 'text-cyan-500' : 'text-cyan-400'}`}>
                  Metropolitan
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
                    scrolled 
                      ? (isEvening ? 'text-gray-300 hover:text-cyan-400' : 'text-gray-700 hover:text-cyan-600')
                      : 'text-white/90 hover:text-cyan-400'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link 
                href={variantConfig.external.booking}
                className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-6 py-2.5 rounded-lg font-light hover:shadow-lg hover:shadow-cyan-500/25 transition-all flex items-center gap-2"
              >
                <FaMapMarkerAlt /> Book Downtown
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden ${scrolled ? (isEvening ? 'text-white' : 'text-gray-900') : 'text-white'}`}
            >
              {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden ${isEvening ? 'bg-slate-900/95' : 'bg-white/95'} backdrop-blur-md border-t ${isEvening ? 'border-slate-800' : 'border-gray-200'}`}>
            <div className="container mx-auto px-4 py-4 space-y-4">
              {variantConfig.navigation.main.map((item) => (
                <Link 
                  key={item.name}
                  href={item.href} 
                  className={`block ${isEvening ? 'text-gray-300 hover:text-cyan-400' : 'text-gray-700 hover:text-cyan-600'}`}
                >
                  {item.name}
                </Link>
              ))}
              <Link 
                href={variantConfig.external.booking}
                className="block bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-6 py-2.5 rounded-lg text-center"
              >
                Book Downtown
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with Skyline */}
      <section className="relative min-h-screen flex items-center pt-20">
        {/* Animated Skyline Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute bottom-0 left-0 right-0 h-96">
            {/* Building silhouettes */}
            <div className="absolute bottom-0 left-0 w-full flex items-end justify-center">
              <div className="w-20 h-64 bg-slate-800 mx-1"></div>
              <div className="w-16 h-80 bg-slate-900 mx-1"></div>
              <div className="w-24 h-72 bg-slate-800 mx-1"></div>
              <div className="w-20 h-96 bg-slate-900 mx-1"></div>
              <div className="w-28 h-80 bg-slate-800 mx-1"></div>
              <div className="w-16 h-64 bg-slate-900 mx-1"></div>
              <div className="w-24 h-88 bg-slate-800 mx-1"></div>
            </div>
            {/* City lights */}
            <div className="absolute bottom-0 left-0 w-full">
              {cityLights.map((light, i) => (
                <div
                  key={light.id}
                  className={`absolute w-1 h-1 ${light.on ? 'bg-yellow-400' : 'bg-transparent'} transition-all duration-500`}
                  style={{
                    left: `${5 + (i % 10) * 10}%`,
                    bottom: `${20 + Math.floor(i / 10) * 30}px`
                  }}
                ></div>
              ))}
            </div>
          </div>
          {/* Gradient overlay */}
          <div className={`absolute inset-0 bg-gradient-to-t ${isEvening ? 'from-slate-900 via-slate-900/50 to-transparent' : 'from-gray-200 via-gray-100/50 to-transparent'}`}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="mb-8">
              <GiModernCity className="text-6xl text-cyan-400 animate-pulse" />
            </div>
            <h1 className={`text-5xl md:text-7xl font-light mb-6 ${isEvening ? 'text-white' : 'text-gray-900'}`}>
              Healthcare for the
              <span className="block text-transparent bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text font-normal">
                Urban Professional
              </span>
            </h1>
            <p className={`text-xl ${isEvening ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mb-8 font-light`}>
              Navigate your health journey with the same efficiency you navigate the city. 
              Premium medical care designed for metropolitan life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href={variantConfig.external.membership}
                className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-light hover:shadow-xl hover:shadow-cyan-500/25 transition-all flex items-center justify-center gap-2"
              >
                <MdApartment /> Join Metropolitan Health
              </Link>
              <Link 
                href="/services"
                className={`border-2 ${isEvening ? 'border-cyan-400 text-cyan-400 hover:bg-cyan-400/10' : 'border-gray-300 text-gray-700 hover:border-cyan-500 hover:text-cyan-600'} px-8 py-4 rounded-lg text-lg font-light transition-all`}
              >
                Explore Urban Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Urban Features */}
      <section className={`py-20 px-4 ${isEvening ? 'bg-slate-800' : 'bg-white'}`}>
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className={`text-4xl font-light mb-4 ${isEvening ? 'text-white' : 'text-gray-900'}`}>
              Built for City Life
            </h2>
            <p className={`text-xl ${isEvening ? 'text-gray-300' : 'text-gray-600'} font-light`}>
              Healthcare that understands your urban lifestyle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {urbanFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className={`w-20 h-20 mx-auto mb-4 ${isEvening ? 'bg-slate-700' : 'bg-gray-100'} rounded-lg flex items-center justify-center text-cyan-500 text-3xl`}>
                  {feature.icon}
                </div>
                <h3 className={`text-xl font-medium mb-2 ${isEvening ? 'text-white' : 'text-gray-900'}`}>
                  {feature.title}
                </h3>
                <p className={`${isEvening ? 'text-gray-400' : 'text-gray-600'} font-light`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={`py-20 px-4 ${isEvening ? 'bg-slate-900' : 'bg-gray-50'}`}>
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className={`text-4xl font-light mb-4 ${isEvening ? 'text-white' : 'text-gray-900'}`}>
              Metropolitan Services
            </h2>
            <p className={`text-xl ${isEvening ? 'text-gray-300' : 'text-gray-600'} font-light`}>
              Healthcare solutions for the modern urban dweller
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.link}
                className={`group ${isEvening ? 'bg-slate-800' : 'bg-white'} rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border ${isEvening ? 'border-slate-700 hover:border-cyan-500' : 'border-gray-200 hover:border-cyan-500'}`}
              >
                <div className="text-cyan-500 group-hover:text-cyan-400 transition-colors">
                  {service.icon}
                </div>
                <h3 className={`text-2xl font-medium mb-3 ${isEvening ? 'text-white' : 'text-gray-900'}`}>
                  {service.title}
                </h3>
                <p className={`${isEvening ? 'text-gray-300' : 'text-gray-600'} mb-4 font-light`}>
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className={`flex items-center text-sm ${isEvening ? 'text-gray-400' : 'text-gray-600'}`}>
                      <GiStreetLight className="text-cyan-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* City Life Integration */}
      <section className={`py-20 px-4 ${isEvening ? 'bg-slate-800' : 'bg-white'}`}>
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className={`text-4xl font-light mb-6 ${isEvening ? 'text-white' : 'text-gray-900'}`}>
                Healthcare That
                <span className="block text-transparent bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text font-normal">
                  Moves With You
                </span>
              </h2>
              <p className={`text-lg ${isEvening ? 'text-gray-300' : 'text-gray-600'} mb-6 font-light`}>
                From the financial district to the creative quarters, our network of urban health 
                centers ensures you're never far from premium care.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <FaBuilding className="text-cyan-500 text-xl mt-1" />
                  <div>
                    <h4 className={`font-medium ${isEvening ? 'text-white' : 'text-gray-900'}`}>
                      Strategic Locations
                    </h4>
                    <p className={`${isEvening ? 'text-gray-400' : 'text-gray-600'} font-light`}>
                      Centers in major business districts and residential hubs
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MdLocalHospital className="text-cyan-500 text-xl mt-1" />
                  <div>
                    <h4 className={`font-medium ${isEvening ? 'text-white' : 'text-gray-900'}`}>
                      Urban Health Expertise
                    </h4>
                    <p className={`${isEvening ? 'text-gray-400' : 'text-gray-600'} font-light`}>
                      Specialists in city-specific health challenges
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <FaSubway className="text-cyan-500 text-xl mt-1" />
                  <div>
                    <h4 className={`font-medium ${isEvening ? 'text-white' : 'text-gray-900'}`}>
                      Transit Accessible
                    </h4>
                    <p className={`${isEvening ? 'text-gray-400' : 'text-gray-600'} font-light`}>
                      Near major transit hubs for easy access
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className={`${isEvening ? 'bg-slate-700' : 'bg-gray-100'} rounded-xl p-8`}>
                <h3 className={`text-2xl font-light mb-6 text-center ${isEvening ? 'text-white' : 'text-gray-900'}`}>
                  City Coverage Map
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {['Downtown', 'Midtown', 'Uptown', 'Financial District', 'Tech Hub', 'Arts District'].map((area, i) => (
                    <div key={i} className={`${isEvening ? 'bg-slate-600' : 'bg-white'} rounded-lg p-3 text-center`}>
                      <FaMapMarkerAlt className="text-cyan-500 mx-auto mb-1" />
                      <p className={`text-xs ${isEvening ? 'text-gray-300' : 'text-gray-700'}`}>{area}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metropolitan Stats */}
      <section className={`py-20 px-4 ${isEvening ? 'bg-slate-900' : 'bg-gray-50'}`}>
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-cyan-500 mb-2">6</div>
              <p className={`${isEvening ? 'text-gray-300' : 'text-gray-600'} font-light`}>City Locations</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-500 mb-2">24/7</div>
              <p className={`${isEvening ? 'text-gray-300' : 'text-gray-600'} font-light`}>Urban Access</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-500 mb-2">15min</div>
              <p className={`${isEvening ? 'text-gray-300' : 'text-gray-600'} font-light`}>Average Wait</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyan-500 mb-2">10k+</div>
              <p className={`${isEvening ? 'text-gray-300' : 'text-gray-600'} font-light`}>City Members</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 px-4 ${isEvening ? 'bg-gradient-to-r from-slate-800 to-slate-900' : 'bg-gradient-to-r from-gray-100 to-white'}`}>
        <div className="container mx-auto max-w-4xl text-center">
          <GiModernCity className={`text-6xl ${isEvening ? 'text-cyan-400/30' : 'text-cyan-500/30'} mx-auto mb-6`} />
          <h2 className={`text-4xl font-light ${isEvening ? 'text-white' : 'text-gray-900'} mb-6`}>
            Join the Metropolitan Health Network
          </h2>
          <p className={`text-xl ${isEvening ? 'text-gray-300' : 'text-gray-600'} mb-8 font-light`}>
            Experience healthcare designed for the pace and demands of urban life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href={variantConfig.external.booking}
              className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-light hover:shadow-xl hover:shadow-cyan-500/25 transition-all"
            >
              Book City Appointment
            </Link>
            <Link 
              href="/contact"
              className={`border-2 ${isEvening ? 'border-cyan-400 text-cyan-400 hover:bg-cyan-400/10' : 'border-gray-300 text-gray-700 hover:border-cyan-500 hover:text-cyan-600'} px-8 py-4 rounded-lg text-lg font-light transition-all`}
            >
              Find Your Location
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`${isEvening ? 'bg-slate-950' : 'bg-gray-900'} text-white py-12`}>
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <FaCity className="text-4xl text-cyan-400" />
          </div>
          <p className="mb-2 font-light">&copy; 2025 Lotus Direct Care - Metropolitan</p>
          <p className="text-sm text-gray-400 font-light">
            Healthcare at the Heart of the City
          </p>
        </div>
      </footer>

      <style jsx>{`
        .h-88 { height: 22rem; }
      `}</style>
    </div>
  )
}