'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaSun, FaWater, FaLeaf } from 'react-icons/fa';
import { GiCactus, GiPalmTree, GiSandCastle, GiDesert } from 'react-icons/gi';

export default function DesertOasisVariant() {
  const [mirageEffect, setMirageEffect] = useState(0);
  const [showOasis, setShowOasis] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setMirageEffect(prev => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Desert Background with Gradient */}
      <div className="fixed inset-0 bg-gradient-to-b from-orange-200 via-yellow-100 to-amber-100" />
      
      {/* Sand Dunes Pattern */}
      <div className="fixed inset-0 opacity-20">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dunes" x="0" y="0" width="400" height="200" patternUnits="userSpaceOnUse">
              <path d="M0,100 Q100,50 200,100 T400,100" fill="none" stroke="#d2691e" strokeWidth="2"/>
              <path d="M0,150 Q100,100 200,150 T400,150" fill="none" stroke="#daa520" strokeWidth="2"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dunes)" />
        </svg>
      </div>

      {/* Heat Shimmer Effect */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, transparent 30%, rgba(255,165,0,0.1) 70%)`,
          filter: `blur(${Math.sin(mirageEffect * Math.PI / 180) * 2}px)`,
        }}
      />

      {/* Floating Desert Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <GiCactus className="absolute text-green-600 opacity-30 animate-pulse" style={{ top: '20%', left: '10%', fontSize: '80px' }} />
        <GiPalmTree className="absolute text-green-700 opacity-30 animate-pulse" style={{ top: '60%', right: '15%', fontSize: '100px' }} />
        <GiSandCastle className="absolute text-amber-600 opacity-20" style={{ bottom: '20%', left: '20%', fontSize: '60px' }} />
      </div>

      {/* Sun */}
      <div className="fixed top-10 right-10 animate-pulse">
        <FaSun className="text-yellow-500" style={{ fontSize: '80px', filter: 'drop-shadow(0 0 20px rgba(255,215,0,0.8))' }} />
      </div>

      {/* Header */}
      <header className="relative z-10 bg-gradient-to-r from-amber-600/90 to-orange-600/90 backdrop-blur-sm shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <GiDesert className="text-4xl text-yellow-300" />
              <div>
                <h1 className="text-2xl font-bold text-white">Lotus Oasis Care</h1>
                <p className="text-sm text-yellow-100">Your Health Sanctuary in the Desert</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="text-white hover:text-yellow-300 transition-colors">Home</Link>
              <Link href="/services" className="text-white hover:text-yellow-300 transition-colors">Services</Link>
              <Link href="/about" className="text-white hover:text-yellow-300 transition-colors">About</Link>
              <Link href="/blog" className="text-white hover:text-yellow-300 transition-colors">Blog</Link>
              <Link href="/contact" className="text-white hover:text-yellow-300 transition-colors">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-12 shadow-2xl border border-amber-300">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Find Your Health Oasis
            </h2>
            <p className="text-xl text-amber-800 mb-8 max-w-3xl mx-auto">
              Like a refreshing oasis in the desert, Lotus Direct Care provides personalized healthcare that rejuvenates your body and spirit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setShowOasis(!showOasis)}
                className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Discover Your Oasis <FaWater className="inline ml-2" />
              </button>
              <Link href="/contact" className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                Start Your Journey <FaLeaf className="inline ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Oasis Reveal */}
      {showOasis && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-gradient-to-br from-cyan-100 to-green-100 p-8 rounded-3xl max-w-2xl mx-4 transform scale-100 animate-pulse">
            <h3 className="text-3xl font-bold text-emerald-800 mb-4">Welcome to Your Health Oasis!</h3>
            <p className="text-emerald-700 mb-6">
              Just as an oasis provides life-giving water in the desert, we provide life-enhancing healthcare tailored to your needs.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white/70 p-4 rounded-xl">
                <FaWater className="text-3xl text-cyan-600 mb-2" />
                <h4 className="font-semibold text-cyan-800">Refreshing Care</h4>
                <p className="text-sm text-gray-700">Revitalizing treatments that restore your vitality</p>
              </div>
              <div className="bg-white/70 p-4 rounded-xl">
                <GiPalmTree className="text-3xl text-green-600 mb-2" />
                <h4 className="font-semibold text-green-800">Natural Healing</h4>
                <p className="text-sm text-gray-700">Holistic approaches rooted in nature</p>
              </div>
            </div>
            <button 
              onClick={() => setShowOasis(false)}
              className="bg-emerald-500 text-white px-6 py-3 rounded-full hover:bg-emerald-600 transition-colors"
            >
              Continue Exploring
            </button>
          </div>
        </div>
      )}

      {/* Services Section */}
      <section className="relative z-10 py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-amber-800">
            Oasis of Healing Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Desert Bloom Primary Care",
                description: "Comprehensive healthcare that helps you flourish in any environment",
                icon: <FaLeaf className="text-4xl text-green-600" />,
                color: "from-green-400 to-emerald-500"
              },
              {
                title: "Oasis Renewal Therapy",
                description: "Rejuvenating treatments including our specialized ketamine therapy",
                icon: <FaWater className="text-4xl text-cyan-600" />,
                color: "from-cyan-400 to-blue-500"
              },
              {
                title: "Desert Strength Medicine",
                description: "Building resilience through functional medicine and PRP treatments",
                icon: <GiCactus className="text-4xl text-amber-600" />,
                color: "from-amber-400 to-orange-500"
              }
            ].map((service, index) => (
              <div key={index} className="group">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-amber-200">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-amber-800">{service.title}</h3>
                  <p className="text-gray-700 mb-4">{service.description}</p>
                  <Link href="/services" className="text-amber-600 font-semibold hover:text-orange-600 transition-colors">
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 py-16 px-4">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-3xl p-12 shadow-xl">
            <h2 className="text-3xl font-bold text-center mb-8 text-amber-800">Find Your Way to the Oasis</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
                    <FaPhone className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-amber-800">Call the Oasis</p>
                    <p className="text-gray-700">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                    <FaMapMarkerAlt className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-amber-800">Visit the Oasis</p>
                    <p className="text-gray-700">123 Desert Bloom Lane, Scottsdale, AZ</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Link href="/contact" className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-lg">
                  Begin Your Journey to Wellness
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-amber-800/90 text-white py-8 px-4 mt-16">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Lotus Oasis Care. Your Health Sanctuary in the Desert.</p>
          <p className="mt-2 text-amber-200">Where healing flows like water in the desert.</p>
        </div>
      </footer>
    </div>
  );
}