'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaLeaf, FaSeedling, FaTree, FaSpa, FaAppleAlt, FaBars, FaTimes } from 'react-icons/fa'
import { GiButterfly, GiFlowers, GiVineLeaf, GiBamboo } from 'react-icons/gi'

export default function BotanicalVariant() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentSeason, setCurrentSeason] = useState('spring')
  const [floatingLeaves, setFloatingLeaves] = useState<Array<{id: number, x: number, y: number}>>([])

  useEffect(() => {
    // Generate floating leaves animation
    const leaves = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: -20
    }))
    setFloatingLeaves(leaves)

    // Animate leaves falling
    const interval = setInterval(() => {
      setFloatingLeaves(prev => prev.map(leaf => ({
        ...leaf,
        y: leaf.y > 120 ? -20 : leaf.y + 0.5,
        x: leaf.x + Math.sin(leaf.y / 10) * 0.3
      })))
    }, 50)

    return () => clearInterval(interval)
  }, [])

  const services = [
    {
      icon: <FaLeaf className="text-5xl mb-4" />,
      title: "Direct Primary Care",
      description: "Nurturing your health with personalized, root-cause medicine",
      link: "/direct-primary-care",
      color: "from-green-400 to-emerald-600"
    },
    {
      icon: <GiFlowers className="text-5xl mb-4" />,
      title: "Functional Medicine",
      description: "Holistic healing that blooms from within",
      link: "/functional-medicine",
      color: "from-pink-400 to-rose-600"
    },
    {
      icon: <FaSeedling className="text-5xl mb-4" />,
      title: "Ketamine Therapy",
      description: "Plant the seeds of mental wellness",
      link: "/ketamine-therapy",
      color: "from-purple-400 to-indigo-600"
    },
    {
      icon: <GiBamboo className="text-5xl mb-4" />,
      title: "PRP Injections",
      description: "Natural regeneration for lasting growth",
      link: "/prp-injections",
      color: "from-yellow-400 to-orange-600"
    },
    {
      icon: <FaTree className="text-5xl mb-4" />,
      title: "Addiction Treatment",
      description: "Deep roots for sustainable recovery",
      link: "/addiction-treatment",
      color: "from-teal-400 to-cyan-600"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-lime-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Floating Leaves */}
        {floatingLeaves.map(leaf => (
          <div
            key={leaf.id}
            className="absolute animate-pulse"
            style={{
              left: `${leaf.x}%`,
              top: `${leaf.y}%`,
              transform: 'translateX(-50%)'
            }}
          >
            <FaLeaf className="text-green-600 opacity-20 text-2xl animate-spin-slow" />
          </div>
        ))}
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96">
            <GiVineLeaf className="text-green-800 text-[20rem]" />
          </div>
          <div className="absolute bottom-0 right-0 w-96 h-96">
            <GiFlowers className="text-pink-800 text-[20rem]" />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 bg-white/80 backdrop-blur-md shadow-lg border-b border-green-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative">
                <GiFlowers className="text-4xl text-pink-500" />
                <FaLeaf className="text-2xl text-green-600 absolute -top-2 -right-2" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-pink-600 bg-clip-text text-transparent">
                Lotus Direct Care
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/about" className="text-gray-700 hover:text-green-600 transition-colors flex items-center gap-2">
                <FaSpa /> About
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-green-600 transition-colors flex items-center gap-2">
                <FaTree /> Services
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-green-600 transition-colors flex items-center gap-2">
                <FaSeedling /> Blog
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-green-600 transition-colors flex items-center gap-2">
                <FaLeaf /> Contact
              </Link>
              <Link 
                href="https://app.elationemr.com/book/lotusdirectcare/"
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all flex items-center gap-2"
              >
                <GiFlowers /> Book Appointment
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-700"
            >
              {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-green-200">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <Link href="/about" className="block text-gray-700 hover:text-green-600">About</Link>
              <Link href="/services" className="block text-gray-700 hover:text-green-600">Services</Link>
              <Link href="/blog" className="block text-gray-700 hover:text-green-600">Blog</Link>
              <Link href="/contact" className="block text-gray-700 hover:text-green-600">Contact</Link>
              <Link 
                href="https://app.elationemr.com/book/lotusdirectcare/"
                className="block bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2 rounded-full text-center"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <GiButterfly className="text-6xl text-purple-500 animate-bounce" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-lime-600 bg-clip-text text-transparent">
                Where Health
              </span>
              <br />
              <span className="bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 bg-clip-text text-transparent">
                Blooms Naturally
              </span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Experience healthcare that grows with you. Our garden of wellness nurtures your body, 
              mind, and spirit through personalized, holistic care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="https://lotusdirectcare.hint.com/signup/"
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all flex items-center justify-center gap-2"
              >
                <FaSeedling /> Plant Your Wellness Journey
              </Link>
              <Link 
                href="/services"
                className="bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold border-2 border-green-500 hover:bg-green-50 transition-all flex items-center justify-center gap-2"
              >
                <FaTree /> Explore Our Garden
              </Link>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="relative mt-16">
            <div className="absolute -top-10 left-1/4 transform -translate-x-1/2">
              <GiFlowers className="text-pink-300 text-6xl animate-pulse" />
            </div>
            <div className="absolute -top-10 right-1/4 transform translate-x-1/2">
              <GiFlowers className="text-purple-300 text-6xl animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Garden */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-pink-600 bg-clip-text text-transparent">
              Our Garden of Services
            </h2>
            <p className="text-xl text-gray-700">Each path leads to your wellness destination</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.link}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                <div className="relative z-10 text-center">
                  <div className={`text-transparent bg-gradient-to-br ${service.color} bg-clip-text`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-800">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
                <div className="absolute bottom-2 right-2 opacity-20 group-hover:opacity-40 transition-opacity">
                  <GiVineLeaf className="text-6xl text-green-300" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Wellness Philosophy */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-100 to-emerald-100">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Cultivating Your Health Garden
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                At Lotus Direct Care, we believe health is like a garden - it requires attention, 
                nourishment, and the right environment to flourish. Our approach combines:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <FaLeaf className="text-green-500 mt-1" />
                  <span className="text-gray-700">Personalized care plans that adapt to your unique needs</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaSeedling className="text-green-500 mt-1" />
                  <span className="text-gray-700">Preventive strategies to help you bloom before issues arise</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaTree className="text-green-500 mt-1" />
                  <span className="text-gray-700">Deep-rooted healing through functional medicine</span>
                </li>
                <li className="flex items-start gap-3">
                  <GiFlowers className="text-pink-500 mt-1" />
                  <span className="text-gray-700">Nurturing environment for sustainable wellness</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-green-200 to-emerald-200 rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-2xl p-6 text-center">
                    <FaAppleAlt className="text-4xl text-red-500 mx-auto mb-2" />
                    <h4 className="font-semibold">Nutrition</h4>
                  </div>
                  <div className="bg-white rounded-2xl p-6 text-center">
                    <FaSpa className="text-4xl text-purple-500 mx-auto mb-2" />
                    <h4 className="font-semibold">Wellness</h4>
                  </div>
                  <div className="bg-white rounded-2xl p-6 text-center">
                    <GiBamboo className="text-4xl text-green-500 mx-auto mb-2" />
                    <h4 className="font-semibold">Growth</h4>
                  </div>
                  <div className="bg-white rounded-2xl p-6 text-center">
                    <GiButterfly className="text-4xl text-blue-500 mx-auto mb-2" />
                    <h4 className="font-semibold">Transform</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <GiVineLeaf className="text-white text-[30rem] absolute -right-32 -top-32" />
            </div>
            <div className="relative z-10">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Let Your Health Bloom?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Join our garden of wellness and discover healthcare that grows with you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="https://app.elationemr.com/book/lotusdirectcare/"
                  className="bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all"
                >
                  Schedule Your Visit
                </Link>
                <Link 
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-green-600 transition-all"
                >
                  Contact Our Gardeners
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-green-800 to-emerald-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <GiFlowers className="text-4xl text-pink-300" />
          </div>
          <p className="mb-2">&copy; 2025 Lotus Direct Care. Growing Health, Naturally.</p>
          <p className="text-sm text-green-300">
            Where every patient is a seed of wellness waiting to bloom.
          </p>
        </div>
      </footer>

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