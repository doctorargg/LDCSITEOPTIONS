'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaCrown, FaGem, FaChessKing, FaRing, FaBars, FaTimes, FaShieldAlt, FaMedal } from 'react-icons/fa'
import { GiImperialCrown, GiLaurelCrown, GiQueenCrown, GiRoyalLove, GiCastle, GiThroneKing } from 'react-icons/gi'
import { BsFillStarFill } from 'react-icons/bs'
import { variantConfig } from '../../../lib/variant-utils'

export default function RoyalVariant() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeTab, setActiveTab] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const services = [
    {
      icon: <GiImperialCrown className="text-5xl mb-4" />,
      title: "Royal Concierge Medicine",
      description: "Healthcare fit for nobility with personalized attention",
      link: "/direct-primary-care",
      features: ["Private physician access", "Royal treatment protocols", "Exclusive health privileges"]
    },
    {
      icon: <GiLaurelCrown className="text-5xl mb-4" />,
      title: "Crown Wellness Program",
      description: "Majestic approach to functional and preventive care",
      link: "/functional-medicine",
      features: ["Regal health assessments", "Noble nutrition plans", "Sovereign wellness strategies"]
    },
    {
      icon: <FaCrown className="text-5xl mb-4" />,
      title: "Imperial Mind Care",
      description: "Premium mental health services for discerning individuals",
      link: "/ketamine-therapy",
      features: ["Elite therapy options", "Royal stress management", "Executive mental wellness"]
    },
    {
      icon: <GiRoyalLove className="text-5xl mb-4" />,
      title: "Sovereign Aesthetics",
      description: "Regenerative treatments worthy of royalty",
      link: "/prp-injections",
      features: ["Crown jewel procedures", "Royal rejuvenation", "Regal recovery protocols"]
    }
  ]

  const royalBenefits = [
    { icon: <FaCrown />, title: "Crown Service", value: "24/7 Access" },
    { icon: <FaGem />, title: "Jewel Care", value: "Top 1%" },
    { icon: <FaChessKing />, title: "King's Treatment", value: "VIP Only" },
    { icon: <FaMedal />, title: "Noble Standards", value: "5-Star" }
  ]

  const testimonials = [
    {
      initial: "V",
      name: "Victoria Pemberton",
      title: "Ambassador",
      content: "The royal treatment at Lotus Direct Care exceeds even diplomatic healthcare standards. Truly regal service."
    },
    {
      initial: "J",
      name: "James Wellington III",
      title: "Estate Owner",
      content: "Healthcare befitting our family's standards. The attention to detail and privacy is impeccable."
    },
    {
      initial: "E",
      name: "Eleanor Rothschild",
      title: "Philanthropist",
      content: "Finally, medical care that understands the unique needs of those who demand excellence in all aspects of life."
    }
  ]

  return (
    <div className="min-h-screen bg-ivory">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-purple-950/95 backdrop-blur-md shadow-2xl' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-5">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-14 h-14 rounded-lg overflow-hidden shadow-lg relative">
                  <Image 
                    src="/images/lotus_logo_full_gold.png" 
                    alt="Lotus Direct Care" 
                    width={56} 
                    height={56} 
                    className="object-contain filter brightness-125"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-transparent"></div>
                </div>
                <div className="absolute -top-2 -right-2">
                  <BsFillStarFill className="text-gold-400 text-sm animate-pulse" />
                </div>
              </div>
              <div>
                <span className="text-2xl font-serif text-gold-400">Lotus Direct Care</span>
                <span className="block text-xs text-gold-300 uppercase tracking-[0.3em]">Royal Treatment</span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {variantConfig.navigation.main.map((item) => (
                <Link 
                  key={item.name}
                  href={item.href} 
                  className="text-gold-200 hover:text-gold-400 transition-colors font-serif"
                >
                  {item.name}
                </Link>
              ))}
              <Link 
                href={variantConfig.external.booking}
                className="bg-gradient-to-r from-gold-400 to-gold-500 text-purple-950 px-8 py-3 rounded-lg font-serif font-semibold hover:shadow-xl hover:shadow-gold-400/30 transition-all flex items-center gap-2"
              >
                <FaCrown /> Royal Appointment
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gold-400"
            >
              {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-purple-950/95 backdrop-blur-md border-t border-gold-800">
            <div className="container mx-auto px-4 py-4 space-y-4">
              {variantConfig.navigation.main.map((item) => (
                <Link 
                  key={item.name}
                  href={item.href} 
                  className="block text-gold-200 hover:text-gold-400"
                >
                  {item.name}
                </Link>
              ))}
              <Link 
                href={variantConfig.external.booking}
                className="block bg-gradient-to-r from-gold-400 to-gold-500 text-purple-950 px-6 py-3 rounded-lg text-center font-serif font-semibold"
              >
                Royal Appointment
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-950 via-purple-900 to-purple-950 pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9InJveWFsIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0zMCAwTDYwIDMwIDMwIDYwIDAgMzB6IiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjEyLDE3NSw1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjcm95YWwpIi8+PC9zdmc+')] opacity-50"></div>
          {/* Royal lotus watermarks */}
          <div className="absolute top-1/4 right-10 opacity-10">
            <Image 
              src="/images/lotus_logo_full_gold.png" 
              alt="" 
              width={350} 
              height={350} 
              className="filter brightness-200"
            />
          </div>
        </div>

        {/* Floating Crown Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <GiQueenCrown className="text-gold-400/20 text-6xl" />
        </div>
        <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: '2s' }}>
          <GiThroneKing className="text-gold-400/20 text-6xl" />
        </div>
        
        <div className="container mx-auto max-w-6xl relative">
          <div className="text-center">
            <div className="mb-8 relative inline-block">
              <Image 
                src="/images/lotus_logo_full_gold.png" 
                alt="Lotus Direct Care" 
                width={150} 
                height={150} 
                className="mx-auto filter brightness-150 drop-shadow-2xl"
              />
              <GiImperialCrown className="text-4xl text-gold-400 absolute -top-8 left-1/2 transform -translate-x-1/2 animate-pulse" />
            </div>
            <h1 className="text-5xl md:text-7xl font-serif mb-6 text-white">
              Healthcare Worthy of
              <span className="block text-transparent bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text">
                Royalty
              </span>
            </h1>
            <p className="text-xl text-gold-200 max-w-3xl mx-auto mb-8">
              Experience the majesty of personalized medicine where every patient is treated like nobility. 
              Your health throne awaits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href={variantConfig.external.membership}
                className="bg-gradient-to-r from-gold-400 to-gold-500 text-purple-950 px-10 py-4 rounded-lg text-lg font-serif font-semibold hover:shadow-2xl hover:shadow-gold-400/30 transition-all flex items-center justify-center gap-2"
              >
                <GiImperialCrown /> Claim Your Crown
              </Link>
              <Link 
                href="/services"
                className="border-2 border-gold-400 text-gold-300 px-10 py-4 rounded-lg text-lg font-serif hover:bg-gold-400/10 transition-all flex items-center justify-center gap-2"
              >
                <FaGem /> Royal Services
              </Link>
            </div>
          </div>

          {/* Royal Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
            {royalBenefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-purple-800/30 backdrop-blur-sm rounded-xl p-6 border border-gold-400/30 text-center hover:border-gold-400/60 transition-all"
              >
                <div className="text-gold-400 text-3xl mb-2">{benefit.icon}</div>
                <div className="text-2xl font-bold text-white mb-1">{benefit.value}</div>
                <div className="text-sm text-gold-300">{benefit.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-ivory to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-4 text-purple-950">
              Royal Healthcare Services
            </h2>
            <p className="text-xl text-purple-700">Each service delivered with regal excellence</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.link}
                className="group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-purple-100 hover:border-gold-400 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gold-400/10 to-purple-600/10 rounded-bl-full"></div>
                <div className="relative z-10">
                  <div className="text-gold-500 group-hover:text-gold-600 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-serif mb-3 text-purple-950">{service.title}</h3>
                  <p className="text-purple-700 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-purple-600">
                        <FaRing className="text-gold-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Royal Experience Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-950 to-purple-900">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif mb-6 text-white">
                Your Royal Health Journey
              </h2>
              <p className="text-lg text-gold-200 mb-6">
                From the moment you enter our realm, you'll experience healthcare designed for those 
                who expect nothing less than sovereign service.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <FaShieldAlt className="text-gold-400 text-2xl mt-1" />
                  <div>
                    <h4 className="font-serif text-xl text-gold-300 mb-2">Royal Privacy Protection</h4>
                    <p className="text-gold-200">Your health information guarded like crown jewels</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <GiLaurelCrown className="text-gold-400 text-2xl mt-1" />
                  <div>
                    <h4 className="font-serif text-xl text-gold-300 mb-2">Noble Treatment Standards</h4>
                    <p className="text-gold-200">Every interaction befitting your distinguished status</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <FaCrown className="text-gold-400 text-2xl mt-1" />
                  <div>
                    <h4 className="font-serif text-xl text-gold-300 mb-2">Sovereign Health Authority</h4>
                    <p className="text-gold-200">Command over your wellness with expert guidance</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-gold-400/20 to-purple-800/20 backdrop-blur-sm rounded-2xl p-8 border-2 border-gold-400/30 relative overflow-hidden">
                <div className="absolute -top-10 -right-10 opacity-10">
                  <Image 
                    src="/images/lotus_logo_full_gold.png" 
                    alt="" 
                    width={200} 
                    height={200} 
                  />
                </div>
                <div className="text-center relative z-10">
                  <GiImperialCrown className="text-6xl text-gold-400 mx-auto mb-6" />
                  <h3 className="text-2xl font-serif mb-4 text-white">Royal Membership</h3>
                  <p className="text-gold-200 mb-6">
                    Join an exclusive circle of individuals who value premium healthcare
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-center gap-2 text-gold-300">
                      <FaMedal /> Immediate Royal Status
                    </div>
                    <div className="flex items-center justify-center gap-2 text-gold-300">
                      <FaCrown /> Lifetime Nobility Benefits
                    </div>
                    <div className="flex items-center justify-center gap-2 text-gold-300">
                      <FaGem /> Exclusive Health Privileges
                    </div>
                  </div>
                  <div className="mt-8">
                    <Image 
                      src="/images/dr_rosenberg.jpg" 
                      alt="Dr. Aaron Rosenberg" 
                      width={180} 
                      height={180} 
                      className="mx-auto rounded-full border-4 border-gold-400 shadow-xl"
                    />
                    <p className="text-gold-300 text-sm mt-3">Dr. Aaron Rosenberg, MD</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
          <h2 className="text-4xl font-serif text-center mb-12 text-purple-950">
            Words from the Nobility
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-gold-50 rounded-xl p-8 border-2 border-purple-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center text-white font-serif text-xl">
                    {testimonial.initial}
                  </div>
                  <div className="ml-4">
                    <div className="font-serif text-purple-950">{testimonial.name}</div>
                    <div className="text-sm text-purple-600">{testimonial.title}</div>
                  </div>
                </div>
                <p className="text-purple-700 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-950 via-purple-900 to-purple-950">
        <div className="container mx-auto max-w-4xl text-center">
          <GiThroneKing className="text-6xl text-gold-400/30 mx-auto mb-6" />
          <h2 className="text-4xl font-serif text-white mb-6">
            Your Health Kingdom Awaits
          </h2>
          <p className="text-xl text-gold-200 mb-8">
            Step into a world where healthcare meets majesty. Claim your rightful place among our distinguished members.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href={variantConfig.external.booking}
              className="bg-gradient-to-r from-gold-400 to-gold-500 text-purple-950 px-10 py-4 rounded-lg text-lg font-serif font-semibold hover:shadow-2xl hover:shadow-gold-400/30 transition-all"
            >
              Schedule Royal Consultation
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-gold-400 text-gold-300 px-10 py-4 rounded-lg text-lg font-serif hover:bg-gold-400/10 transition-all"
            >
              Contact the Royal Court
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-950 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <Image 
              src="/images/lotus_logo_full_gold.png" 
              alt="Lotus Direct Care" 
              width={70} 
              height={70} 
              className="filter brightness-150"
            />
          </div>
          <p className="mb-2 font-serif">&copy; 2025 Lotus Direct Care - Royal Treatment</p>
          <p className="text-sm text-gold-300">
            Healthcare Fit for Kings and Queens
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .bg-ivory { background-color: #fffff0; }
        .bg-purple-50 { background-color: #faf5ff; }
        .bg-purple-100 { background-color: #f3e8ff; }
        .bg-purple-600 { background-color: #9333ea; }
        .bg-purple-700 { background-color: #7e22ce; }
        .bg-purple-800 { background-color: #6b21a8; }
        .bg-purple-900 { background-color: #581c87; }
        .bg-purple-950 { background-color: #3b0764; }
        .text-purple-600 { color: #9333ea; }
        .text-purple-700 { color: #7e22ce; }
        .text-purple-950 { color: #3b0764; }
        .border-purple-100 { border-color: #f3e8ff; }
        .from-purple-50 { --tw-gradient-from: #faf5ff; }
        .from-purple-800 { --tw-gradient-from: #6b21a8; }
        .from-purple-900 { --tw-gradient-from: #581c87; }
        .from-purple-950 { --tw-gradient-from: #3b0764; }
        .to-purple-600 { --tw-gradient-to: #9333ea; }
        .to-purple-800 { --tw-gradient-to: #6b21a8; }
        .to-purple-900 { --tw-gradient-to: #581c87; }
        .to-purple-950 { --tw-gradient-to: #3b0764; }
        .via-purple-900 { --tw-gradient-via: #581c87; }
        .bg-gold-50 { background-color: #fffbeb; }
        .bg-gold-300 { background-color: #fcd34d; }
        .bg-gold-400 { background-color: #fbbf24; }
        .bg-gold-500 { background-color: #f59e0b; }
        .bg-gold-600 { background-color: #d97706; }
        .text-gold-200 { color: #fde68a; }
        .text-gold-300 { color: #fcd34d; }
        .text-gold-400 { color: #fbbf24; }
        .text-gold-500 { color: #f59e0b; }
        .text-gold-600 { color: #d97706; }
        .border-gold-400 { border-color: #fbbf24; }
        .border-gold-800 { border-color: #92400e; }
        .from-gold-50 { --tw-gradient-from: #fffbeb; }
        .from-gold-300 { --tw-gradient-from: #fcd34d; }
        .from-gold-400 { --tw-gradient-from: #fbbf24; }
        .to-gold-50 { --tw-gradient-to: #fffbeb; }
        .to-gold-500 { --tw-gradient-to: #f59e0b; }
        .to-gold-600 { --tw-gradient-to: #d97706; }
      `}</style>
    </div>
  )
}