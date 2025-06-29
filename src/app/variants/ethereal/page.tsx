'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FiPhone, FiMail, FiMapPin, FiCalendar, FiChevronDown, FiMenu, FiX } from 'react-icons/fi'
import { MdLocalHospital, MdScience, MdHealthAndSafety, MdPsychology, MdAutoAwesome } from 'react-icons/md'
import { IoMdFlower } from 'react-icons/io'
import { GiCrystalGrowth, GiCrystalShine, GiPrism, GiCrystalBall, GiGems } from 'react-icons/gi'
import { BsStars } from 'react-icons/bs'

export default function EtherealVariant() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const services = [
    { name: 'Direct Primary Care', icon: MdLocalHospital, href: '/direct-primary-care', color: 'from-pink-300 to-purple-300' },
    { name: 'Functional Medicine', icon: MdScience, href: '/functional-medicine', color: 'from-blue-300 to-teal-300' },
    { name: 'Ketamine Therapy', icon: MdPsychology, href: '/ketamine-therapy', color: 'from-purple-300 to-indigo-300' },
    { name: 'PRP Injections', icon: MdHealthAndSafety, href: '/prp-injections', color: 'from-rose-300 to-pink-300' },
    { name: 'Addiction Treatment', icon: IoMdFlower, href: '/addiction-treatment', color: 'from-teal-300 to-cyan-300' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 text-gray-800 overflow-hidden">
      {/* Ethereal Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Floating Crystals */}
        <div className="absolute inset-0">
          <GiCrystalGrowth className="absolute top-10 left-10 w-16 h-16 text-purple-200/30 animate-float" />
          <GiCrystalShine className="absolute top-40 right-20 w-12 h-12 text-pink-200/30 animate-float-delay-1" />
          <GiPrism className="absolute bottom-20 left-20 w-20 h-20 text-blue-200/30 animate-float-delay-2" />
          <GiGems className="absolute bottom-40 right-10 w-14 h-14 text-teal-200/30 animate-float" />
        </div>
        
        {/* Light Beams */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `
              linear-gradient(135deg, transparent 40%, rgba(168,85,247,0.1) 50%, transparent 60%),
              linear-gradient(45deg, transparent 40%, rgba(236,72,153,0.1) 50%, transparent 60%)
            `,
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        />
        
        {/* Prismatic Effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-red-300 via-yellow-300 to-green-300 mix-blend-screen blur-3xl" />
          <div className="absolute inset-0 bg-gradient-to-r from-green-300 via-blue-300 to-purple-300 mix-blend-screen blur-3xl" />
        </div>
      </div>

      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/70 backdrop-blur-xl shadow-lg' : 'bg-transparent'
      }`}>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-100/20 via-pink-100/20 to-blue-100/20 backdrop-blur-sm" />
        
        <nav className="relative container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="group">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-300/50 to-pink-300/50 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <IoMdFlower className="w-8 h-8 text-purple-600" />
                  </div>
                  <BsStars className="absolute -top-1 -right-1 w-5 h-5 text-pink-400 animate-twinkle" />
                </div>
                <div>
                  <h1 className="text-2xl font-light bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Lotus Crystal Care
                  </h1>
                  <p className="text-xs text-purple-500/80">Ethereal Wellness</p>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-purple-600 transition-colors font-light">
                Home
              </Link>
              
              <div className="relative">
                <button 
                  className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors font-light"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  <span>Services</span>
                  <FiChevronDown className={`transform transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>

                {isServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden border border-purple-200/30">
                    <div className="p-2">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="block px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-purple-100/50 hover:to-pink-100/50 transition-all group"
                        >
                          <div className="flex items-center space-x-3">
                            <div className={`w-8 h-8 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center`}>
                              <service.icon className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-sm text-gray-700 group-hover:text-purple-700">{service.name}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link href="/about" className="text-gray-700 hover:text-purple-600 transition-colors font-light">
                About
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-purple-600 transition-colors font-light">
                Blog
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-purple-600 transition-colors font-light">
                Contact
              </Link>

              <Link
                href="https://app.elationemr.com/book/lotusdirectcare/"
                target="_blank"
                className="relative px-6 py-2 bg-gradient-to-r from-purple-400 to-pink-400 text-white font-medium rounded-full hover:from-purple-500 hover:to-pink-500 transition-all transform hover:scale-105 overflow-hidden group"
              >
                <span className="relative z-10">Book Appointment</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                <MdAutoAwesome className="absolute top-1 right-1 w-4 h-4 text-white/80 animate-twinkle" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-purple-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Crystal Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-pulse delay-2000" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Crystal Icon */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <GiCrystalBall className="w-24 h-24 text-purple-400 animate-float" />
                <div className="absolute inset-0 bg-purple-400/30 rounded-full blur-2xl animate-pulse" />
                <BsStars className="absolute -top-4 -right-4 w-8 h-8 text-pink-400 animate-twinkle" />
                <BsStars className="absolute -bottom-4 -left-4 w-6 h-6 text-blue-400 animate-twinkle delay-500" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-light mb-6">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                Crystal Clear
              </span>
              <br />
              <span className="text-gray-700">Healthcare</span>
            </h1>
            
            <p className="text-xl text-purple-600/80 mb-8 font-light">
              Where healing light meets modern medicine
            </p>
            
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
              Step into a realm of translucent wellness, where every treatment is infused with 
              the pure energy of crystal healing and the precision of modern medical science. 
              Experience healthcare that illuminates your path to perfect health.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="https://lotusdirectcare.hint.com/signup/"
                target="_blank"
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-400 to-pink-400 text-white font-medium rounded-full hover:from-purple-500 hover:to-pink-500 transition-all transform hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <GiCrystalShine className="w-5 h-5" />
                  Join the Crystal Circle
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
              
              <Link
                href="/contact"
                className="px-8 py-4 bg-white/50 backdrop-blur-sm border-2 border-purple-300 text-purple-600 font-medium rounded-full hover:bg-purple-100/50 hover:border-purple-400 transition-all transform hover:scale-105"
              >
                Discover Your Light
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Light Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-float-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${10 + Math.random() * 20}s`
              }}
            />
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Crystalline Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Each service radiates with unique healing energy, perfectly attuned to your wellness needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link key={service.name} href={service.href} className="group">
                <div className="relative bg-white/40 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-purple-200/30 overflow-hidden">
                  {/* Holographic Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-300/20 via-transparent to-pink-300/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Prism Light Effect */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 opacity-30">
                    <div className="w-full h-full bg-gradient-to-br from-red-300 via-yellow-300 to-green-300 blur-2xl" />
                  </div>
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform shadow-lg`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-medium mb-4 text-center text-gray-800">{service.name}</h3>
                    
                    <div className="flex justify-center mb-4">
                      <div className="flex space-x-1">
                        {[...Array(3)].map((_, i) => (
                          <GiCrystalGrowth key={i} className="w-4 h-4 text-purple-400/60" />
                        ))}
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-center text-sm leading-relaxed">
                      {index === 0 && "Primary care that resonates with your body's natural frequency"}
                      {index === 1 && "Functional healing aligned with your crystalline matrix"}
                      {index === 2 && "Mental clarity through ethereal therapeutic journeys"}
                      {index === 3 && "Regenerative light therapy for cellular renewal"}
                      {index === 4 && "Compassionate guidance through transformational healing"}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Crystal Features */}
      <section className="py-20 relative bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-light mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                The Prism of Wellness
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-300 to-orange-300 rounded-xl flex items-center justify-center flex-shrink-0">
                    <GiPrism className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2 text-gray-800">Light Spectrum Healing</h3>
                    <p className="text-gray-600">
                      Every treatment refracted through our unique prism of care
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-300 to-purple-300 rounded-xl flex items-center justify-center flex-shrink-0">
                    <GiCrystalShine className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2 text-gray-800">Crystal Clear Communication</h3>
                    <p className="text-gray-600">
                      Transparent care plans that illuminate your health journey
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-300 to-purple-300 rounded-xl flex items-center justify-center flex-shrink-0">
                    <GiGems className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2 text-gray-800">Multifaceted Approach</h3>
                    <p className="text-gray-600">
                      Like a perfect crystal, we address every facet of your health
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 rounded-3xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-purple-300 via-pink-300 to-blue-300 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <GiCrystalBall className="w-48 h-48 text-white/30" />
                  </div>
                  
                  {/* Holographic Shimmer */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                </div>
              </div>
              
              {/* Floating Crystals */}
              <GiCrystalGrowth className="absolute -top-4 -left-4 w-12 h-12 text-purple-400 animate-float" />
              <GiCrystalShine className="absolute -bottom-4 -right-4 w-10 h-10 text-pink-400 animate-float-delay-1" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100" />
        
        {/* Prismatic Background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-red-300 via-yellow-300 to-green-300 transform skew-y-12" />
          <div className="absolute inset-0 bg-gradient-to-l from-green-300 via-blue-300 to-purple-300 transform -skew-y-12 mix-blend-multiply" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="text-4xl font-light mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Step Into the Light
          </h2>
          
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Your journey to crystalline clarity and radiant health begins with a single step. 
            Let us illuminate your path to wellness.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="https://app.elationemr.com/book/lotusdirectcare/"
              target="_blank"
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-400 to-pink-400 text-white font-medium rounded-full hover:from-purple-500 hover:to-pink-500 transition-all transform hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10">Schedule Your Illumination</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
            
            <Link
              href="tel:413-341-5040"
              className="px-8 py-4 bg-white/50 backdrop-blur-sm border-2 border-purple-300 text-purple-600 font-medium rounded-full hover:bg-purple-100/50 hover:border-purple-400 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <FiPhone />
              <span>413-341-5040</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white/50 backdrop-blur-sm border-t border-purple-200/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <IoMdFlower className="w-8 h-8 text-purple-600" />
                <h3 className="text-xl font-medium bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Lotus Crystal Care
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Where ethereal beauty meets exceptional healthcare, 
                creating a prismatic approach to your wellness.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-4 text-purple-600">Contact</h3>
              <div className="space-y-2 text-gray-600">
                <p className="flex items-center gap-2">
                  <FiMapPin className="text-purple-500" />
                  Pittsfield, MA
                </p>
                <p className="flex items-center gap-2">
                  <FiPhone className="text-purple-500" />
                  413-341-5040
                </p>
                <p className="flex items-center gap-2">
                  <FiMail className="text-purple-500" />
                  info@lotusdirectcare.com
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-4 text-purple-600">Hours</h3>
              <p className="text-gray-600 leading-relaxed">
                By Appointment<br />
                Your wellness, on your schedule
              </p>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-purple-200/30 text-center">
            <p className="text-gray-600">
              © 2025 Lotus Direct Care | Crystal Clear Healthcare
            </p>
          </div>
        </div>
      </footer>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white/95 backdrop-blur-xl z-50 md:hidden">
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center p-4 border-b border-purple-200/30">
              <h2 className="text-2xl font-light text-purple-600">Menu</h2>
              <button onClick={() => setIsMenuOpen(false)}>
                <FiX className="w-6 h-6 text-purple-600" />
              </button>
            </div>
            
            <nav className="flex-1 flex flex-col justify-center items-center space-y-8">
              <Link href="/" className="text-2xl text-gray-700 hover:text-purple-600 transition-colors">
                Home
              </Link>
              
              <div className="text-center">
                <h3 className="text-2xl text-gray-700 mb-4">Services</h3>
                <div className="space-y-2">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block text-lg text-gray-600 hover:text-purple-600 transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              <Link href="/about" className="text-2xl text-gray-700 hover:text-purple-600 transition-colors">
                About
              </Link>
              <Link href="/blog" className="text-2xl text-gray-700 hover:text-purple-600 transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="text-2xl text-gray-700 hover:text-purple-600 transition-colors">
                Contact
              </Link>
              
              <Link
                href="https://app.elationemr.com/book/lotusdirectcare/"
                target="_blank"
                className="px-8 py-3 bg-gradient-to-r from-purple-400 to-pink-400 text-white font-medium rounded-full"
              >
                Book Appointment
              </Link>
            </nav>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          33% {
            transform: translateY(-20px) translateX(10px);
          }
          66% {
            transform: translateY(10px) translateX(-10px);
          }
        }

        @keyframes float-delay-1 {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          33% {
            transform: translateY(15px) translateX(-15px);
          }
          66% {
            transform: translateY(-10px) translateX(10px);
          }
        }

        @keyframes float-delay-2 {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          33% {
            transform: translateY(-15px) translateX(-10px);
          }
          66% {
            transform: translateY(20px) translateX(15px);
          }
        }

        @keyframes twinkle {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes float-particle {
          0% {
            transform: translateY(100vh) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(100px);
            opacity: 0;
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delay-1 {
          animation: float-delay-1 8s ease-in-out infinite;
        }

        .animate-float-delay-2 {
          animation: float-delay-2 10s ease-in-out infinite;
        }

        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }

        .animate-shimmer {
          animation: shimmer 3s linear infinite;
        }

        .animate-float-particle {
          animation: float-particle 20s linear infinite;
        }

        .delay-500 {
          animation-delay: 0.5s;
        }

        .delay-1000 {
          animation-delay: 1s;
        }

        .delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  )
}