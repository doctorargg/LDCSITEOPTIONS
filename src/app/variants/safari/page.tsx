'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FiPhone, FiMail, FiMapPin, FiCalendar, FiChevronDown, FiMenu, FiX, FiCompass, FiMap } from 'react-icons/fi'
import { MdLocalHospital, MdScience, MdHealthAndSafety, MdPsychology, MdExplore } from 'react-icons/md'
import { IoMdFlower } from 'react-icons/io'
import { GiElephant, GiLion, GiDeer, GiPalmTree, GiBinoculars, GiCompass, GiTreasureMap, GiJeep } from 'react-icons/gi'
import { FaSafari } from 'react-icons/fa'

export default function SafariVariant() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const services = [
    { name: 'Direct Primary Care', icon: MdLocalHospital, href: '/direct-primary-care', color: 'from-amber-600 to-amber-700' },
    { name: 'Functional Medicine', icon: MdScience, href: '/functional-medicine', color: 'from-green-600 to-green-700' },
    { name: 'Ketamine Therapy', icon: MdPsychology, href: '/ketamine-therapy', color: 'from-orange-600 to-orange-700' },
    { name: 'PRP Injections', icon: MdHealthAndSafety, href: '/prp-injections', color: 'from-yellow-600 to-yellow-700' },
    { name: 'Addiction Treatment', icon: IoMdFlower, href: '/addiction-treatment', color: 'from-emerald-600 to-emerald-700' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-amber-100 text-amber-950">
      {/* Safari Pattern Overlay */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23a0522d' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-amber-100/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}>
        <div className="absolute inset-0 bg-gradient-to-r from-amber-100/50 to-orange-100/50" />
        
        <nav className="relative container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="group">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full flex items-center justify-center">
                    <IoMdFlower className="w-8 h-8 text-amber-100" />
                  </div>
                  <GiCompass className="absolute -bottom-1 -right-1 w-5 h-5 text-amber-700" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-amber-800">
                    Lotus Safari Care
                  </h1>
                  <p className="text-xs text-orange-700 font-medium">Your Healthcare Expedition</p>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-amber-800 hover:text-orange-700 transition-colors font-medium">
                Base Camp
              </Link>
              
              <div className="relative">
                <button 
                  className="flex items-center space-x-2 text-amber-800 hover:text-orange-700 transition-colors font-medium"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  <span>Expeditions</span>
                  <FiChevronDown className={`transform transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>

                {isServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-amber-50/95 backdrop-blur-sm border-2 border-amber-300 rounded-lg shadow-xl overflow-hidden">
                    <div className="p-2">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="block px-4 py-3 rounded-lg hover:bg-amber-200/50 transition-all group"
                        >
                          <div className="flex items-center space-x-3">
                            <div className={`w-8 h-8 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center`}>
                              <service.icon className="w-4 h-4 text-amber-50" />
                            </div>
                            <span className="text-sm text-amber-800 group-hover:text-amber-900 font-medium">{service.name}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link href="/about" className="text-amber-800 hover:text-orange-700 transition-colors font-medium">
                Field Guide
              </Link>
              <Link href="/blog" className="text-amber-800 hover:text-orange-700 transition-colors font-medium">
                Journal
              </Link>
              <Link href="/contact" className="text-amber-800 hover:text-orange-700 transition-colors font-medium">
                Contact
              </Link>

              <Link
                href="https://app.elationemr.com/book/lotusdirectcare/"
                target="_blank"
                className="px-6 py-2 bg-gradient-to-r from-orange-600 to-amber-600 text-white font-bold rounded-md hover:from-orange-700 hover:to-amber-700 transition-all transform hover:scale-105 shadow-lg flex items-center gap-2"
              >
                <GiBinoculars className="w-4 h-4" />
                Book Safari
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-amber-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Safari Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-orange-400/20 via-amber-300/20 to-amber-400/20" />
          
          {/* Safari Silhouettes */}
          <GiElephant className="absolute bottom-10 left-10 w-32 h-32 text-amber-300/30" />
          <GiDeer className="absolute bottom-20 right-20 w-24 h-24 text-orange-300/30" />
          <GiLion className="absolute top-40 left-1/3 w-20 h-20 text-amber-400/30" />
          <GiPalmTree className="absolute top-20 right-10 w-28 h-28 text-green-600/30" />
          
          {/* Sun */}
          <div className="absolute top-20 left-20 w-32 h-32 bg-orange-400/30 rounded-full blur-2xl" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Safari Jeep Icon */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <GiJeep className="w-24 h-24 text-amber-700" />
                <FiCompass className="absolute -top-2 -right-2 w-8 h-8 text-orange-600 animate-spin-slow" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-amber-800">Your Health</span>
              <br />
              <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                EXPEDITION
              </span>
            </h1>
            
            <p className="text-xl text-amber-700 mb-8 font-semibold">
              Embark on the Adventure of Wellness
            </p>
            
            <p className="text-lg text-amber-700/80 max-w-2xl mx-auto mb-12 leading-relaxed">
              Chart your course through the wilderness of health challenges with expert guides 
              who know every trail. Your journey to wellness is an adventure worth taking, 
              and we're here to lead the way.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="https://lotusdirectcare.hint.com/signup/"
                target="_blank"
                className="group px-8 py-4 bg-gradient-to-r from-orange-600 to-amber-600 text-white font-bold rounded-md hover:from-orange-700 hover:to-amber-700 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
              >
                <GiTreasureMap className="w-5 h-5" />
                <span>Join the Expedition</span>
              </Link>
              
              <Link
                href="/contact"
                className="px-8 py-4 bg-amber-100 border-2 border-amber-600 text-amber-700 font-bold rounded-md hover:bg-amber-200 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <FiMap className="w-5 h-5" />
                <span>Plan Your Route</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Animal Tracks */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-6 text-amber-600/40">
            <div className="w-4 h-4 rounded-full bg-current" />
            <div className="w-4 h-4 rounded-full bg-current" />
            <div className="w-4 h-4 rounded-full bg-current" />
            <div className="w-4 h-4 rounded-full bg-current" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 relative bg-gradient-to-b from-amber-100 to-orange-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-amber-800">
              Explore Our Trails
            </h2>
            <p className="text-xl text-amber-700 max-w-2xl mx-auto">
              Each path leads to a different aspect of wellness. Choose your adventure 
              and let our expert guides lead the way.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link key={service.name} href={service.href} className="group">
                <div className="relative bg-amber-50 rounded-lg p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border-2 border-amber-300 overflow-hidden">
                  {/* Safari Print Background */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                    <div className="w-full h-full" style={{
                      backgroundImage: index % 2 === 0 
                        ? `repeating-linear-gradient(45deg, transparent, transparent 10px, #a0522d 10px, #a0522d 20px)`
                        : `radial-gradient(circle, #a0522d 20%, transparent 20%)`
                    }} />
                  </div>
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform shadow-md`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-4 text-center text-amber-800">{service.name}</h3>
                    
                    <div className="flex justify-center mb-4">
                      <GiCompass className="w-6 h-6 text-amber-600" />
                    </div>
                    
                    <p className="text-amber-700 text-center text-sm leading-relaxed">
                      {index === 0 && "Your base camp for health - always accessible, always ready for your journey"}
                      {index === 1 && "Navigate the terrain of your body's ecosystem with expert tracking"}
                      {index === 2 && "Explore new territories of mental wellness and consciousness"}
                      {index === 3 && "Discover regenerative oases for your body's natural healing"}
                      {index === 4 && "Find your path through challenging terrain with compassionate guides"}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Adventure Features */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="relative bg-amber-50 p-8 rounded-lg border-2 border-amber-300 shadow-lg">
                <GiJeep className="absolute -top-6 -right-6 w-16 h-16 text-amber-300/50" />
                
                <h3 className="text-2xl font-bold mb-6 text-amber-800">
                  Your Safari Gear
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <GiBinoculars className="w-8 h-8 text-orange-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-amber-800">Clear Vision</h4>
                      <p className="text-amber-700/80 text-sm leading-relaxed">
                        See your health journey with clarity and precision
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <GiCompass className="w-8 h-8 text-orange-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-amber-800">Expert Navigation</h4>
                      <p className="text-amber-700/80 text-sm leading-relaxed">
                        Guided by experienced healthcare explorers
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <GiTreasureMap className="w-8 h-8 text-orange-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-amber-800">Personalized Maps</h4>
                      <p className="text-amber-700/80 text-sm leading-relaxed">
                        Custom treatment plans for your unique expedition
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold mb-6 text-amber-800">
                The Adventure Awaits
              </h2>
              
              <p className="text-lg text-amber-700 mb-6 leading-relaxed">
                Every great expedition begins with a single step. Our experienced guides 
                have traversed these paths countless times, ready to help you navigate 
                your personal health safari with confidence and expertise.
              </p>
              
              <div className="bg-orange-100 p-6 rounded-lg border-l-4 border-orange-600">
                <p className="text-amber-800 font-medium italic">
                  "In the wilderness of health challenges, having the right guide 
                  makes all the difference between getting lost and finding your way."
                </p>
                <p className="text-amber-700 text-sm mt-2">- Dr. Aaron Rosenberg</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safari Stats */}
      <section className="py-20 bg-gradient-to-b from-orange-100 to-amber-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-amber-800">
              Expedition Success Stories
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MdExplore className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-amber-800">1000+</h3>
              <p className="text-amber-700">Successful Expeditions</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <GiElephant className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-amber-800">98%</h3>
              <p className="text-amber-700">Happy Explorers</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <GiPalmTree className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-amber-800">24/7</h3>
              <p className="text-amber-700">Guide Support</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiCompass className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-amber-800">5★</h3>
              <p className="text-amber-700">Trail Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-orange-600 to-amber-700">
        <div className="absolute inset-0 opacity-10">
          <GiLion className="absolute top-10 right-10 w-48 h-48 text-amber-900" />
          <GiDeer className="absolute bottom-10 left-10 w-40 h-40 text-amber-900" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Ready for Your Health Safari?
          </h2>
          
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            The journey of a thousand miles begins with a single step. 
            Take yours today and discover what lies beyond the horizon of ordinary healthcare.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="https://app.elationemr.com/book/lotusdirectcare/"
              target="_blank"
              className="px-8 py-4 bg-white text-orange-700 font-bold rounded-md hover:bg-amber-50 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            >
              <GiBinoculars className="w-5 h-5" />
              <span>Start Your Journey</span>
            </Link>
            
            <Link
              href="tel:413-341-5040"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-md hover:bg-white hover:text-orange-700 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <FiPhone />
              <span>Call Base Camp: 413-341-5040</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-amber-900 text-amber-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <IoMdFlower className="w-8 h-8 text-amber-400" />
                <h3 className="text-xl font-bold">Lotus Safari Care</h3>
              </div>
              <p className="text-amber-200/80 leading-relaxed">
                Your trusted guides on the expedition to wellness. 
                Adventure awaits at every turn.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-amber-300">Base Camp Contact</h3>
              <div className="space-y-2 text-amber-200/80">
                <p className="flex items-center gap-2">
                  <FiMapPin className="text-amber-400" />
                  Pittsfield, MA
                </p>
                <p className="flex items-center gap-2">
                  <FiPhone className="text-amber-400" />
                  413-341-5040
                </p>
                <p className="flex items-center gap-2">
                  <FiMail className="text-amber-400" />
                  info@lotusdirectcare.com
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-amber-300">Expedition Hours</h3>
              <p className="text-amber-200/80 leading-relaxed">
                Monday - Friday: Dawn to Dusk<br />
                Weekend expeditions available<br />
                Emergency support 24/7
              </p>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-amber-800 text-center">
            <p className="text-amber-300/60">
              © 2025 Lotus Direct Care | Your Health Safari Awaits
            </p>
          </div>
        </div>
      </footer>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-amber-50/95 backdrop-blur z-50 md:hidden">
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center p-4 border-b-2 border-amber-300">
              <h2 className="text-2xl font-bold text-amber-800">Safari Menu</h2>
              <button onClick={() => setIsMenuOpen(false)}>
                <FiX className="w-6 h-6 text-amber-700" />
              </button>
            </div>
            
            <nav className="flex-1 flex flex-col justify-center items-center space-y-8">
              <Link href="/" className="text-2xl font-bold text-amber-800 hover:text-orange-700 transition-colors">
                Base Camp
              </Link>
              
              <div className="text-center">
                <h3 className="text-2xl font-bold text-amber-800 mb-4">Expeditions</h3>
                <div className="space-y-2">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block text-lg text-amber-700 hover:text-orange-700 transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              <Link href="/about" className="text-2xl font-bold text-amber-800 hover:text-orange-700 transition-colors">
                Field Guide
              </Link>
              <Link href="/blog" className="text-2xl font-bold text-amber-800 hover:text-orange-700 transition-colors">
                Journal
              </Link>
              <Link href="/contact" className="text-2xl font-bold text-amber-800 hover:text-orange-700 transition-colors">
                Contact
              </Link>
              
              <Link
                href="https://app.elationemr.com/book/lotusdirectcare/"
                target="_blank"
                className="px-8 py-3 bg-gradient-to-r from-orange-600 to-amber-600 text-white font-bold rounded-md flex items-center gap-2"
              >
                <GiBinoculars className="w-5 h-5" />
                Book Safari
              </Link>
            </nav>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  )
}