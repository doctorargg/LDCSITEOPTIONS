'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FiPhone, FiMail, FiMapPin, FiCalendar, FiChevronDown, FiMenu, FiX } from 'react-icons/fi'
import { MdLocalHospital, MdScience, MdHealthAndSafety, MdPsychology } from 'react-icons/md'
import { IoMdFlower } from 'react-icons/io'

export default function ArtDecoVariant() {
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
    { name: 'Direct Primary Care', icon: MdLocalHospital, href: '/direct-primary-care', color: 'from-amber-400 to-amber-600' },
    { name: 'Functional Medicine', icon: MdScience, href: '/functional-medicine', color: 'from-emerald-500 to-emerald-700' },
    { name: 'Ketamine Therapy', icon: MdPsychology, href: '/ketamine-therapy', color: 'from-ruby-500 to-ruby-700' },
    { name: 'PRP Injections', icon: MdHealthAndSafety, href: '/prp-injections', color: 'from-amber-500 to-amber-700' },
    { name: 'Addiction Treatment', icon: IoMdFlower, href: '/addiction-treatment', color: 'from-emerald-600 to-emerald-800' }
  ]

  return (
    <div className="min-h-screen bg-black text-amber-100">
      {/* Art Deco Pattern Overlay */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,215,0,0.1) 10px, rgba(255,215,0,0.1) 20px),
                           repeating-linear-gradient(-45deg, transparent, transparent 10px, rgba(255,215,0,0.1) 10px, rgba(255,215,0,0.1) 20px)`
        }} />
      </div>

      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/90 backdrop-blur-sm shadow-xl' : 'bg-transparent'
      }`}>
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/20 to-emerald-900/20" />
        
        {/* Art Deco Border */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
        
        <nav className="relative container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="group">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <IoMdFlower className="w-12 h-12 text-amber-400" />
                  <div className="absolute inset-0 bg-amber-400/20 blur-xl group-hover:bg-amber-400/40 transition-all" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-emerald-400 bg-clip-text text-transparent">
                    LOTUS
                  </h1>
                  <p className="text-xs tracking-[0.3em] text-amber-300/80">DIRECT CARE</p>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-amber-100 hover:text-amber-400 transition-colors tracking-wider">
                HOME
              </Link>
              
              <div className="relative">
                <button 
                  className="flex items-center space-x-2 text-amber-100 hover:text-amber-400 transition-colors tracking-wider"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  <span>SERVICES</span>
                  <FiChevronDown className={`transform transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>

                {isServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-black/95 border border-amber-400/30 shadow-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 to-emerald-900/20" />
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="relative block px-4 py-3 hover:bg-amber-400/10 transition-all border-b border-amber-400/10 last:border-0"
                      >
                        <div className="flex items-center space-x-3">
                          <service.icon className="w-5 h-5 text-amber-400" />
                          <span className="text-sm tracking-wide">{service.name.toUpperCase()}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/about" className="text-amber-100 hover:text-amber-400 transition-colors tracking-wider">
                ABOUT
              </Link>
              <Link href="/blog" className="text-amber-100 hover:text-amber-400 transition-colors tracking-wider">
                JOURNAL
              </Link>
              <Link href="/contact" className="text-amber-100 hover:text-amber-400 transition-colors tracking-wider">
                CONTACT
              </Link>

              <Link
                href="https://app.elationemr.com/book/lotusdirectcare/"
                target="_blank"
                className="px-6 py-2 bg-gradient-to-r from-amber-400 to-amber-600 text-black font-semibold hover:from-amber-500 hover:to-amber-700 transition-all transform hover:scale-105 relative overflow-hidden group"
                style={{ clipPath: 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)' }}
              >
                <span className="relative z-10">BOOK NOW</span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-amber-400"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Art Deco Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-emerald-950/50 to-black" />
          
          {/* Geometric Patterns */}
          <div className="absolute top-0 left-0 w-96 h-96 border-[20px] border-amber-400/20 transform -translate-x-1/2 -translate-y-1/2 rotate-45" />
          <div className="absolute bottom-0 right-0 w-96 h-96 border-[20px] border-emerald-400/20 transform translate-x-1/2 translate-y-1/2 rotate-45" />
          
          {/* Fan Motifs */}
          <div className="absolute top-20 right-20">
            <div className="w-40 h-20 bg-gradient-to-b from-amber-400/20 to-transparent rounded-t-full" />
            <div className="w-40 h-20 bg-gradient-to-b from-amber-400/10 to-transparent rounded-t-full transform rotate-45 absolute top-0 left-0" />
            <div className="w-40 h-20 bg-gradient-to-b from-amber-400/10 to-transparent rounded-t-full transform -rotate-45 absolute top-0 left-0" />
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          {/* Art Deco Frame */}
          <div className="relative max-w-4xl mx-auto p-12 border-4 border-amber-400/30">
            <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-amber-400" />
            <div className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-amber-400" />
            <div className="absolute bottom-0 left-0 w-20 h-20 border-b-4 border-l-4 border-amber-400" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-amber-400" />
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-wider">
              <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 bg-clip-text text-transparent">
                LUXURY
              </span>
              <br />
              <span className="text-emerald-400">HEALTHCARE</span>
            </h1>
            
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-6" />
            
            <p className="text-xl text-amber-100/80 mb-8 tracking-widest">
              WHERE ELEGANCE MEETS EXCELLENCE
            </p>
            
            <p className="text-lg text-amber-100/60 max-w-2xl mx-auto mb-12 leading-relaxed">
              Experience the golden age of personalized medicine. Our practice combines timeless 
              sophistication with cutting-edge healthcare, delivering an unparalleled medical experience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="https://lotusdirectcare.hint.com/signup/"
                target="_blank"
                className="group relative px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-600 text-black font-semibold overflow-hidden transform hover:scale-105 transition-all"
                style={{ clipPath: 'polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)' }}
              >
                <span className="relative z-10">BECOME A MEMBER</span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
              
              <Link
                href="/contact"
                className="px-8 py-4 border-2 border-amber-400 text-amber-400 font-semibold hover:bg-amber-400 hover:text-black transition-all transform hover:scale-105"
                style={{ clipPath: 'polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)' }}
              >
                INQUIRE TODAY
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-4">
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse delay-100" />
            <div className="w-2 h-2 bg-ruby-400 rounded-full animate-pulse delay-200" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 tracking-widest">
              <span className="bg-gradient-to-r from-amber-400 to-emerald-400 bg-clip-text text-transparent">
                EXCLUSIVE SERVICES
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-4" />
            <p className="text-amber-100/60 tracking-wide">THE FINEST IN MEDICAL CARE</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link key={service.name} href={service.href} className="group">
                <div className="relative bg-gradient-to-br from-amber-900/20 to-emerald-900/20 p-8 border border-amber-400/30 hover:border-amber-400 transition-all transform hover:scale-105">
                  {/* Corner Decorations */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-amber-400" />
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-amber-400" />
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-amber-400" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-amber-400" />
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-400/20 to-emerald-400/20 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                      <service.icon className="w-8 h-8 text-amber-400" />
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-4 text-center tracking-wider">{service.name.toUpperCase()}</h3>
                    
                    <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-4" />
                    
                    <p className="text-amber-100/60 text-center text-sm leading-relaxed">
                      {index === 0 && "Exclusive membership-based primary care with unprecedented access"}
                      {index === 1 && "Advanced diagnostics and treatments for optimal vitality"}
                      {index === 2 && "Revolutionary therapy for mental wellness and transformation"}
                      {index === 3 && "Cutting-edge regenerative treatments for rejuvenation"}
                      {index === 4 && "Discreet, compassionate support for recovery and healing"}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/20 via-emerald-900/20 to-amber-900/20" />
        
        {/* Art Deco Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(255,215,0,0.2) 50px, rgba(255,215,0,0.2) 51px)`
          }} />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto p-12 border-4 border-amber-400/30">
            <h2 className="text-4xl font-bold mb-6 tracking-wider">
              <span className="bg-gradient-to-r from-amber-400 to-emerald-400 bg-clip-text text-transparent">
                EXPERIENCE THE DIFFERENCE
              </span>
            </h2>
            
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-6" />
            
            <p className="text-xl text-amber-100/80 mb-8 leading-relaxed">
              Join an exclusive circle of individuals who demand excellence in healthcare. 
              Your journey to extraordinary wellness begins here.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="https://app.elationemr.com/book/lotusdirectcare/"
                target="_blank"
                className="group relative px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-600 text-black font-semibold overflow-hidden transform hover:scale-105 transition-all"
                style={{ clipPath: 'polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)' }}
              >
                <span className="relative z-10">SCHEDULE CONSULTATION</span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
              
              <Link
                href="tel:413-341-5040"
                className="px-8 py-4 border-2 border-amber-400 text-amber-400 font-semibold hover:bg-amber-400 hover:text-black transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                style={{ clipPath: 'polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)' }}
              >
                <FiPhone />
                <span>413.341.5040</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-amber-400/30 relative">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
        
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-xl font-semibold mb-4 tracking-wider text-amber-400">LOTUS DIRECT CARE</h3>
              <p className="text-amber-100/60 text-sm leading-relaxed">
                Where timeless elegance meets modern medicine. 
                Experience healthcare reimagined.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 tracking-wider text-amber-400">CONTACT</h3>
              <div className="space-y-2 text-amber-100/60 text-sm">
                <p className="flex items-center justify-center md:justify-start gap-2">
                  <FiMapPin className="text-amber-400" />
                  Pittsfield, MA
                </p>
                <p className="flex items-center justify-center md:justify-start gap-2">
                  <FiPhone className="text-amber-400" />
                  413.341.5040
                </p>
                <p className="flex items-center justify-center md:justify-start gap-2">
                  <FiMail className="text-amber-400" />
                  info@lotusdirectcare.com
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 tracking-wider text-amber-400">HOURS</h3>
              <p className="text-amber-100/60 text-sm leading-relaxed">
                By Appointment Only<br />
                Exclusive Access for Members
              </p>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-amber-400/20 text-center">
            <p className="text-amber-100/40 text-sm tracking-wide">
              © 2025 Lotus Direct Care | Luxury Healthcare Redefined
            </p>
          </div>
        </div>
      </footer>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/95 z-50 md:hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 to-emerald-900/20" />
          
          <div className="relative z-10 flex flex-col h-full">
            <div className="flex justify-between items-center p-4 border-b border-amber-400/30">
              <h2 className="text-2xl font-bold text-amber-400 tracking-wider">MENU</h2>
              <button onClick={() => setIsMenuOpen(false)}>
                <FiX className="w-6 h-6 text-amber-400" />
              </button>
            </div>
            
            <nav className="flex-1 flex flex-col justify-center items-center space-y-8">
              <Link href="/" className="text-2xl text-amber-100 hover:text-amber-400 transition-colors tracking-wider">
                HOME
              </Link>
              
              <div className="text-center">
                <h3 className="text-2xl text-amber-100 mb-4 tracking-wider">SERVICES</h3>
                <div className="space-y-2">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block text-lg text-amber-100/80 hover:text-amber-400 transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              <Link href="/about" className="text-2xl text-amber-100 hover:text-amber-400 transition-colors tracking-wider">
                ABOUT
              </Link>
              <Link href="/blog" className="text-2xl text-amber-100 hover:text-amber-400 transition-colors tracking-wider">
                JOURNAL
              </Link>
              <Link href="/contact" className="text-2xl text-amber-100 hover:text-amber-400 transition-colors tracking-wider">
                CONTACT
              </Link>
              
              <Link
                href="https://app.elationemr.com/book/lotusdirectcare/"
                target="_blank"
                className="px-8 py-3 bg-gradient-to-r from-amber-400 to-amber-600 text-black font-semibold"
                style={{ clipPath: 'polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)' }}
              >
                BOOK NOW
              </Link>
            </nav>
          </div>
        </div>
      )}
    </div>
  )
}