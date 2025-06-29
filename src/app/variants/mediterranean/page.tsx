'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FiPhone, FiMail, FiMapPin, FiCalendar, FiChevronDown, FiMenu, FiX, FiSun } from 'react-icons/fi'
import { MdLocalHospital, MdScience, MdHealthAndSafety, MdPsychology, MdWaves } from 'react-icons/md'
import { IoMdFlower } from 'react-icons/io'
import { GiOlive, GiGrapes, GiAmphora, GiGreekTemple } from 'react-icons/gi'

export default function MediterraneanVariant() {
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
    { name: 'Direct Primary Care', icon: MdLocalHospital, href: '/direct-primary-care', color: 'from-blue-500 to-blue-700' },
    { name: 'Functional Medicine', icon: MdScience, href: '/functional-medicine', color: 'from-teal-500 to-teal-700' },
    { name: 'Ketamine Therapy', icon: MdPsychology, href: '/ketamine-therapy', color: 'from-indigo-500 to-indigo-700' },
    { name: 'PRP Injections', icon: MdHealthAndSafety, href: '/prp-injections', color: 'from-orange-500 to-orange-700' },
    { name: 'Addiction Treatment', icon: IoMdFlower, href: '/addiction-treatment', color: 'from-green-500 to-green-700' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-orange-50">
      {/* Mediterranean Pattern Overlay */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231e40af' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 to-orange-100/20" />
        
        <nav className="relative container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="group">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <IoMdFlower className="w-12 h-12 text-blue-600" />
                  <GiOlive className="absolute -top-1 -right-1 w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-blue-800">
                    Lotus Direct Care
                  </h1>
                  <p className="text-xs text-orange-600">Mediterranean Wellness</p>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-blue-800 hover:text-blue-600 transition-colors font-medium">
                Home
              </Link>
              
              <div className="relative">
                <button 
                  className="flex items-center space-x-2 text-blue-800 hover:text-blue-600 transition-colors font-medium"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  <span>Services</span>
                  <FiChevronDown className={`transform transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>

                {isServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-sm border-2 border-blue-200 rounded-lg shadow-xl overflow-hidden">
                    <div className="p-2">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="block px-4 py-3 rounded-lg hover:bg-blue-50 transition-all group"
                        >
                          <div className="flex items-center space-x-3">
                            <service.icon className="w-5 h-5 text-blue-600 group-hover:text-blue-700" />
                            <span className="text-sm text-gray-700 group-hover:text-blue-700">{service.name}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link href="/about" className="text-blue-800 hover:text-blue-600 transition-colors font-medium">
                About
              </Link>
              <Link href="/blog" className="text-blue-800 hover:text-blue-600 transition-colors font-medium">
                Blog
              </Link>
              <Link href="/contact" className="text-blue-800 hover:text-blue-600 transition-colors font-medium">
                Contact
              </Link>

              <Link
                href="https://app.elationemr.com/book/lotusdirectcare/"
                target="_blank"
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-full hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 shadow-lg"
              >
                Book Appointment
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-blue-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Mediterranean Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl" />
          
          {/* Decorative Elements */}
          <GiGreekTemple className="absolute top-20 left-10 w-24 h-24 text-blue-200/30" />
          <GiAmphora className="absolute bottom-20 right-10 w-20 h-20 text-orange-200/30" />
          <GiGrapes className="absolute top-40 right-20 w-16 h-16 text-purple-200/30" />
          <MdWaves className="absolute bottom-10 left-1/2 w-32 h-32 text-blue-300/20" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Sun Icon */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <FiSun className="w-20 h-20 text-orange-400 animate-spin-slow" />
                <div className="absolute inset-0 bg-orange-400/20 rounded-full blur-xl animate-pulse" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-blue-700">Health Under the</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
                Mediterranean Sun
              </span>
            </h1>
            
            <p className="text-xl text-gray-700 mb-8">
              Where ancient wisdom meets modern medicine
            </p>
            
            <div className="max-w-2xl mx-auto mb-12">
              <p className="text-lg text-gray-600 leading-relaxed">
                Experience healthcare inspired by the vitality of coastal living. Our practice brings 
                the healing traditions of the Mediterranean to your wellness journey, combining 
                time-honored wisdom with cutting-edge medical care.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="https://lotusdirectcare.hint.com/signup/"
                target="_blank"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-full hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 shadow-lg group"
              >
                <span className="flex items-center gap-2">
                  Join Our Villa
                  <GiOlive className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                </span>
              </Link>
              
              <Link
                href="/contact"
                className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-600 hover:text-white transition-all transform hover:scale-105"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Wave Animation */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-24" viewBox="0 0 1440 100" fill="none">
            <path d="M0,50 C360,100 720,0 1440,50 L1440,100 L0,100 Z" fill="url(#wave-gradient)" opacity="0.5">
              <animate attributeName="d" 
                values="M0,50 C360,100 720,0 1440,50 L1440,100 L0,100 Z;
                        M0,50 C360,0 720,100 1440,50 L1440,100 L0,100 Z;
                        M0,50 C360,100 720,0 1440,50 L1440,100 L0,100 Z"
                dur="10s" repeatCount="indefinite" />
            </path>
            <defs>
              <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 relative bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-blue-800">
              Our Mediterranean Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Like the diverse landscapes of the Mediterranean, our services blend seamlessly 
              to create your perfect health journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link key={service.name} href={service.href} className="group">
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-blue-100">
                  {/* Mosaic Pattern */}
                  <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
                    <div className="grid grid-cols-3 gap-1">
                      {[...Array(9)].map((_, i) => (
                        <div key={i} className={`w-6 h-6 ${i % 2 === 0 ? 'bg-blue-500' : 'bg-orange-500'}`} />
                      ))}
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">{service.name}</h3>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {index === 0 && "Personal care as warm as a Mediterranean welcome, with the accessibility of village doctors"}
                      {index === 1 && "Holistic healing inspired by centuries of natural Mediterranean wellness traditions"}
                      {index === 2 && "Mental clarity and peace, like the serene waters of the Aegean Sea"}
                      {index === 3 && "Regenerative treatments that restore your natural vitality and youth"}
                      {index === 4 && "Compassionate support on your journey to wellness and recovery"}
                    </p>
                    
                    <div className="mt-6 flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                      <span>Explore</span>
                      <FiChevronDown className="ml-2 transform rotate-[-90deg] group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Mediterranean Lifestyle Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-blue-800">
                The Mediterranean Way of Health
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <GiOlive className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Natural Healing</h3>
                    <p className="text-gray-600">
                      Like olive oil nourishes the body, our treatments restore balance naturally
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <FiSun className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Warmth & Care</h3>
                    <p className="text-gray-600">
                      Experience the warmth of personalized care that makes you feel like family
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <MdWaves className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Flow of Life</h3>
                    <p className="text-gray-600">
                      Healthcare that flows with your life rhythm, not against it
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-w-16 aspect-h-12 rounded-2xl overflow-hidden shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <GiGreekTemple className="w-48 h-48 text-white/20" />
                  </div>
                </div>
              </div>
              
              {/* Decorative Frame */}
              <div className="absolute -inset-4 border-2 border-blue-200 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Begin Your Mediterranean Health Journey
          </h2>
          
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Like the timeless villages of Santorini, some things are worth the journey. 
            Your health is one of them.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="https://app.elationemr.com/book/lotusdirectcare/"
              target="_blank"
              className="px-8 py-4 bg-white text-blue-700 font-semibold rounded-full hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
            >
              Schedule Your Visit
            </Link>
            
            <Link
              href="tel:413-341-5040"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-700 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <FiPhone />
              <span>413-341-5040</span>
            </Link>
          </div>
        </div>
        
        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-16" viewBox="0 0 1440 60" fill="none">
            <path d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z" fill="white" opacity="0.2" />
          </svg>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-blue-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <IoMdFlower className="w-8 h-8 text-blue-600" />
                <h3 className="text-xl font-semibold text-blue-800">Lotus Direct Care</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Bringing the warmth and wisdom of Mediterranean healthcare to Western Massachusetts.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-800">Contact</h3>
              <div className="space-y-2 text-gray-600">
                <p className="flex items-center gap-2">
                  <FiMapPin className="text-blue-600" />
                  Pittsfield, MA
                </p>
                <p className="flex items-center gap-2">
                  <FiPhone className="text-blue-600" />
                  413-341-5040
                </p>
                <p className="flex items-center gap-2">
                  <FiMail className="text-blue-600" />
                  info@lotusdirectcare.com
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-800">Hours</h3>
              <p className="text-gray-600 leading-relaxed">
                Monday - Friday: 9:00 AM - 5:00 PM<br />
                Weekend appointments available
              </p>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-blue-100 text-center">
            <p className="text-gray-600">
              © 2025 Lotus Direct Care | Mediterranean Wellness Center
            </p>
          </div>
        </div>
      </footer>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 md:hidden">
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center p-4 border-b border-blue-100">
              <h2 className="text-2xl font-bold text-blue-800">Menu</h2>
              <button onClick={() => setIsMenuOpen(false)}>
                <FiX className="w-6 h-6 text-blue-600" />
              </button>
            </div>
            
            <nav className="flex-1 flex flex-col justify-center items-center space-y-8 p-8">
              <Link href="/" className="text-2xl text-blue-800 hover:text-blue-600 transition-colors">
                Home
              </Link>
              
              <div className="text-center">
                <h3 className="text-2xl text-blue-800 mb-4">Services</h3>
                <div className="space-y-2">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block text-lg text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              <Link href="/about" className="text-2xl text-blue-800 hover:text-blue-600 transition-colors">
                About
              </Link>
              <Link href="/blog" className="text-2xl text-blue-800 hover:text-blue-600 transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="text-2xl text-blue-800 hover:text-blue-600 transition-colors">
                Contact
              </Link>
              
              <Link
                href="https://app.elationemr.com/book/lotusdirectcare/"
                target="_blank"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-full"
              >
                Book Appointment
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