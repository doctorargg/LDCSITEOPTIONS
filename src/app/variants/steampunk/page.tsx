'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FiPhone, FiMail, FiMapPin, FiCalendar, FiChevronDown, FiMenu, FiX, FiSettings } from 'react-icons/fi'
import { MdLocalHospital, MdScience, MdHealthAndSafety, MdPsychology } from 'react-icons/md'
import { IoMdFlower } from 'react-icons/io'
import { GiGears, GiCog, GiClockwork, GiSteamLocomotive, GiAirBalloon } from 'react-icons/gi'
import { TbClockCog } from 'react-icons/tb'

export default function SteampunkVariant() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [gearRotation, setGearRotation] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      setGearRotation(window.scrollY * 0.5)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const services = [
    { name: 'Direct Primary Care', icon: MdLocalHospital, href: '/direct-primary-care', color: 'from-amber-700 to-amber-900' },
    { name: 'Functional Medicine', icon: MdScience, href: '/functional-medicine', color: 'from-copper-600 to-copper-800' },
    { name: 'Ketamine Therapy', icon: MdPsychology, href: '/ketamine-therapy', color: 'from-bronze-600 to-bronze-800' },
    { name: 'PRP Injections', icon: MdHealthAndSafety, href: '/prp-injections', color: 'from-brass-600 to-brass-800' },
    { name: 'Addiction Treatment', icon: IoMdFlower, href: '/addiction-treatment', color: 'from-steel-600 to-steel-800' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-950 via-amber-900 to-amber-950 text-amber-100">
      {/* Steampunk Gears Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <GiGears 
          className="absolute top-10 right-10 w-32 h-32 text-amber-800/20" 
          style={{ transform: `rotate(${gearRotation}deg)` }}
        />
        <GiCog 
          className="absolute bottom-20 left-20 w-24 h-24 text-amber-800/20" 
          style={{ transform: `rotate(${-gearRotation * 1.5}deg)` }}
        />
        <GiClockwork 
          className="absolute top-1/2 right-1/3 w-40 h-40 text-amber-800/10" 
          style={{ transform: `rotate(${gearRotation * 0.8}deg)` }}
        />
      </div>

      {/* Steam Pipes Pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(139,69,19,0.3) 50px, rgba(139,69,19,0.3) 52px),
                           repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(139,69,19,0.3) 50px, rgba(139,69,19,0.3) 52px)`
        }} />
      </div>

      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-amber-950/90 backdrop-blur-sm shadow-2xl' : 'bg-transparent'
      }`}>
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/50 to-amber-800/50" />
        
        {/* Brass Border */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600" />
        
        <nav className="relative container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="group">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full flex items-center justify-center">
                    <IoMdFlower className="w-8 h-8 text-amber-100" />
                  </div>
                  <FiSettings className="absolute -bottom-1 -right-1 w-6 h-6 text-amber-500 animate-spin-slow" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold font-serif">
                    LOTUS
                  </h1>
                  <p className="text-xs tracking-widest text-amber-400">MECHANICAL MEDICINE</p>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-amber-100 hover:text-amber-400 transition-colors font-serif tracking-wide">
                HOME
              </Link>
              
              <div className="relative">
                <button 
                  className="flex items-center space-x-2 text-amber-100 hover:text-amber-400 transition-colors font-serif tracking-wide"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  <span>SERVICES</span>
                  <FiChevronDown className={`transform transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>

                {isServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-amber-950/95 backdrop-blur-sm border-2 border-amber-700 shadow-2xl">
                    <div className="p-2">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="block px-4 py-3 hover:bg-amber-800/50 transition-all group relative overflow-hidden"
                        >
                          <div className="flex items-center space-x-3 relative z-10">
                            <service.icon className="w-5 h-5 text-amber-400" />
                            <span className="text-sm font-serif">{service.name}</span>
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-r from-amber-700/0 to-amber-700/20 transform translate-x-full group-hover:translate-x-0 transition-transform" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link href="/about" className="text-amber-100 hover:text-amber-400 transition-colors font-serif tracking-wide">
                ABOUT
              </Link>
              <Link href="/blog" className="text-amber-100 hover:text-amber-400 transition-colors font-serif tracking-wide">
                CHRONICLE
              </Link>
              <Link href="/contact" className="text-amber-100 hover:text-amber-400 transition-colors font-serif tracking-wide">
                CONTACT
              </Link>

              <Link
                href="https://app.elationemr.com/book/lotusdirectcare/"
                target="_blank"
                className="relative px-6 py-2 bg-gradient-to-r from-amber-600 to-amber-700 text-amber-950 font-bold font-serif overflow-hidden group"
              >
                <span className="relative z-10">BOOK APPOINTMENT</span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                
                {/* Decorative Corners */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-amber-900" />
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-amber-900" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-amber-900" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-amber-900" />
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
        {/* Victorian Industrial Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-950 via-amber-900/80 to-amber-950" />
          
          {/* Airship */}
          <GiAirBalloon className="absolute top-20 right-10 w-32 h-32 text-amber-800/30 animate-float" />
          
          {/* Steam Train */}
          <GiSteamLocomotive className="absolute bottom-10 left-10 w-40 h-40 text-amber-800/20" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Ornate Clock */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <TbClockCog className="w-24 h-24 text-amber-500 animate-spin-slow" />
                <div className="absolute inset-0 bg-amber-500/20 rounded-full blur-xl" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold font-serif mb-6">
              <span className="text-amber-400">PRECISION</span>
              <br />
              <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
                ENGINEERED CARE
              </span>
            </h1>
            
            <div className="flex justify-center items-center space-x-4 mb-6">
              <div className="w-20 h-0.5 bg-amber-600" />
              <GiGears className="w-8 h-8 text-amber-500" />
              <div className="w-20 h-0.5 bg-amber-600" />
            </div>
            
            <p className="text-xl text-amber-300 mb-8 font-serif italic">
              "Where Victorian Ingenuity Meets Modern Medicine"
            </p>
            
            <p className="text-lg text-amber-200/80 max-w-2xl mx-auto mb-12 leading-relaxed">
              Step into our extraordinary medical emporium, where brass instruments meet 
              breakthrough treatments. Our practice combines the meticulous craftsmanship 
              of the Victorian era with cutting-edge healthcare technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="https://lotusdirectcare.hint.com/signup/"
                target="_blank"
                className="group relative px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-amber-950 font-bold font-serif overflow-hidden transform hover:scale-105 transition-all"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <GiCog className="animate-spin-slow" />
                  JOIN THE SOCIETY
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
              
              <Link
                href="/contact"
                className="px-8 py-4 border-2 border-amber-600 text-amber-400 font-bold font-serif hover:bg-amber-600 hover:text-amber-950 transition-all transform hover:scale-105"
              >
                INQUIRE WITHIN
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative Gears */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-4">
            <GiGears className="w-6 h-6 text-amber-600 animate-spin-slow" />
            <GiCog className="w-6 h-6 text-amber-500 animate-spin-reverse" />
            <GiClockwork className="w-6 h-6 text-amber-600 animate-spin-slow" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-serif mb-4 text-amber-400">
              OUR MECHANICAL MARVELS
            </h2>
            <div className="flex justify-center items-center space-x-4 mb-4">
              <div className="w-20 h-0.5 bg-amber-600" />
              <GiClockwork className="w-8 h-8 text-amber-500" />
              <div className="w-20 h-0.5 bg-amber-600" />
            </div>
            <p className="text-amber-300 font-serif italic">Precisely Calibrated Healthcare Solutions</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link key={service.name} href={service.href} className="group">
                <div className="relative bg-gradient-to-br from-amber-900/50 to-amber-800/30 p-8 border-2 border-amber-700 hover:border-amber-500 transition-all transform hover:scale-105 overflow-hidden">
                  {/* Gear Decoration */}
                  <div className="absolute -top-4 -right-4 opacity-20">
                    <GiGears className="w-24 h-24 text-amber-600" />
                  </div>
                  
                  {/* Corner Rivets */}
                  <div className="absolute top-2 left-2 w-3 h-3 bg-amber-600 rounded-full" />
                  <div className="absolute top-2 right-2 w-3 h-3 bg-amber-600 rounded-full" />
                  <div className="absolute bottom-2 left-2 w-3 h-3 bg-amber-600 rounded-full" />
                  <div className="absolute bottom-2 right-2 w-3 h-3 bg-amber-600 rounded-full" />
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:animate-spin-slow">
                      <service.icon className="w-8 h-8 text-amber-100" />
                    </div>
                    
                    <h3 className="text-xl font-bold font-serif mb-4 text-center text-amber-300">{service.name}</h3>
                    
                    <div className="flex justify-center items-center space-x-2 mb-4">
                      <div className="w-8 h-0.5 bg-amber-600" />
                      <FiSettings className="w-4 h-4 text-amber-500" />
                      <div className="w-8 h-0.5 bg-amber-600" />
                    </div>
                    
                    <p className="text-amber-200/80 text-center text-sm leading-relaxed font-serif">
                      {index === 0 && "Precision-engineered primary care with clockwork reliability"}
                      {index === 1 && "Advanced diagnostics powered by Victorian innovation"}
                      {index === 2 && "Revolutionary mental wellness through alchemical precision"}
                      {index === 3 && "Regenerative treatments from our medical laboratory"}
                      {index === 4 && "Compassionate recovery in our therapeutic workshop"}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Victorian Features */}
      <section className="py-20 relative bg-amber-950/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="relative bg-gradient-to-br from-amber-800/30 to-amber-900/30 p-8 border-2 border-amber-700">
                {/* Decorative Frame */}
                <div className="absolute -inset-2 border border-amber-600 pointer-events-none" />
                
                <h3 className="text-2xl font-bold font-serif mb-6 text-amber-400">
                  THE WORKSHOP OF WELLNESS
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <GiClockwork className="w-8 h-8 text-amber-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold font-serif mb-2 text-amber-300">Precision Diagnostics</h4>
                      <p className="text-amber-200/80 text-sm leading-relaxed">
                        State-of-the-art instruments calibrated to perfection
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <GiAirBalloon className="w-8 h-8 text-amber-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold font-serif mb-2 text-amber-300">Elevated Experience</h4>
                      <p className="text-amber-200/80 text-sm leading-relaxed">
                        Rise above conventional care in our therapeutic airship
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <GiGears className="w-8 h-8 text-amber-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold font-serif mb-2 text-amber-300">Engineered Solutions</h4>
                      <p className="text-amber-200/80 text-sm leading-relaxed">
                        Custom-crafted treatments for your unique mechanism
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold font-serif mb-6 text-amber-400">
                VICTORIAN INNOVATION
                <br />
                MODERN RESULTS
              </h2>
              
              <p className="text-lg text-amber-200/80 mb-6 leading-relaxed font-serif">
                In our extraordinary medical workshop, we blend the artistry of the 
                Victorian age with contemporary healthcare excellence. Every treatment 
                is precisely engineered for optimal results.
              </p>
              
              <div className="flex items-center space-x-4">
                <GiSteamLocomotive className="w-12 h-12 text-amber-500" />
                <p className="text-amber-300 font-serif italic">
                  "Full steam ahead to better health"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/50 via-amber-800/50 to-amber-900/50" />
        
        {/* Moving Gears Background */}
        <div className="absolute inset-0 overflow-hidden">
          <GiGears 
            className="absolute top-10 left-10 w-40 h-40 text-amber-700/20 animate-spin-slow" 
          />
          <GiCog 
            className="absolute bottom-10 right-10 w-32 h-32 text-amber-700/20 animate-spin-reverse" 
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold font-serif mb-6 text-amber-400">
            ENGAGE OUR SERVICES
          </h2>
          
          <div className="flex justify-center items-center space-x-4 mb-6">
            <div className="w-20 h-0.5 bg-amber-600" />
            <TbClockCog className="w-8 h-8 text-amber-500" />
            <div className="w-20 h-0.5 bg-amber-600" />
          </div>
          
          <p className="text-xl text-amber-300 mb-8 max-w-2xl mx-auto font-serif italic">
            "The gears of progress turn for those who dare to engage them. 
            Begin your journey to mechanical precision in healthcare."
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="https://app.elationemr.com/book/lotusdirectcare/"
              target="_blank"
              className="group relative px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-amber-950 font-bold font-serif overflow-hidden transform hover:scale-105 transition-all"
            >
              <span className="relative z-10">SCHEDULE CONSULTATION</span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
            
            <Link
              href="tel:413-341-5040"
              className="px-8 py-4 border-2 border-amber-600 text-amber-400 font-bold font-serif hover:bg-amber-600 hover:text-amber-950 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <FiPhone />
              <span>RING 413-341-5040</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t-2 border-amber-700 relative bg-amber-950/80">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold font-serif mb-4 text-amber-400">LOTUS MECHANICAL</h3>
              <p className="text-amber-200/80 text-sm leading-relaxed font-serif">
                A Victorian medical marvel where brass meets breakthrough, 
                and precision meets compassion.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold font-serif mb-4 text-amber-400">CONTACT PARLOR</h3>
              <div className="space-y-2 text-amber-200/80 text-sm font-serif">
                <p className="flex items-center gap-2">
                  <FiMapPin className="text-amber-500" />
                  Pittsfield, Massachusetts
                </p>
                <p className="flex items-center gap-2">
                  <FiPhone className="text-amber-500" />
                  Telephone: 413-341-5040
                </p>
                <p className="flex items-center gap-2">
                  <FiMail className="text-amber-500" />
                  Telegraph: info@lotusdirectcare.com
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold font-serif mb-4 text-amber-400">WORKSHOP HOURS</h3>
              <p className="text-amber-200/80 text-sm leading-relaxed font-serif">
                By Appointment Only<br />
                Our mechanical schedule adapts to yours
              </p>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-amber-700 text-center">
            <p className="text-amber-300/60 text-sm font-serif">
              © Anno Domini 2025 | Lotus Direct Care Mechanical Medicine Emporium
            </p>
          </div>
        </div>
      </footer>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-amber-950/95 backdrop-blur z-50 md:hidden">
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center p-4 border-b-2 border-amber-700">
              <h2 className="text-2xl font-bold font-serif text-amber-400">MENU</h2>
              <button onClick={() => setIsMenuOpen(false)}>
                <FiX className="w-6 h-6 text-amber-400" />
              </button>
            </div>
            
            <nav className="flex-1 flex flex-col justify-center items-center space-y-8">
              <Link href="/" className="text-2xl font-serif text-amber-100 hover:text-amber-400 transition-colors">
                HOME
              </Link>
              
              <div className="text-center">
                <h3 className="text-2xl font-serif text-amber-100 mb-4">SERVICES</h3>
                <div className="space-y-2">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block text-lg font-serif text-amber-200/80 hover:text-amber-400 transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              <Link href="/about" className="text-2xl font-serif text-amber-100 hover:text-amber-400 transition-colors">
                ABOUT
              </Link>
              <Link href="/blog" className="text-2xl font-serif text-amber-100 hover:text-amber-400 transition-colors">
                CHRONICLE
              </Link>
              <Link href="/contact" className="text-2xl font-serif text-amber-100 hover:text-amber-400 transition-colors">
                CONTACT
              </Link>
              
              <Link
                href="https://app.elationemr.com/book/lotusdirectcare/"
                target="_blank"
                className="px-8 py-3 bg-gradient-to-r from-amber-600 to-amber-700 text-amber-950 font-bold font-serif"
              >
                BOOK APPOINTMENT
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
        
        @keyframes spin-reverse {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-10px) translateX(5px);
          }
          75% {
            transform: translateY(5px) translateX(-5px);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
        }
        
        .animate-spin-reverse {
          animation: spin-reverse 25s linear infinite;
        }

        .animate-float {
          animation: float 20s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}