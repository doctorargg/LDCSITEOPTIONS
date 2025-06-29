'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaSnowflake, FaMountain, FaFire } from 'react-icons/fa';
import { GiDeerHead, GiPineTree, GiCampfire, GiSunrise } from 'react-icons/gi';

export default function NordicScandinavianVariant() {
  const [snowflakes, setSnowflakes] = useState<Array<{id: number, x: number, size: number, delay: number}>>([]);
  const [showAurora, setShowAurora] = useState(false);
  const [hyggeMode, setHyggeMode] = useState(false);

  useEffect(() => {
    // Generate snowflakes
    const flakes = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 20 + 10,
      delay: Math.random() * 10
    }));
    setSnowflakes(flakes);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-700">
      {/* Northern Lights Effect */}
      {showAurora && (
        <div className="fixed inset-0 pointer-events-none z-20">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-purple-500/20 animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-l from-green-400/10 via-blue-400/10 to-indigo-400/10 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      )}

      {/* Falling Snow */}
      <div className="fixed inset-0 pointer-events-none">
        {snowflakes.map(flake => (
          <FaSnowflake
            key={flake.id}
            className="absolute text-white/60 animate-fall"
            style={{
              left: `${flake.x}%`,
              fontSize: `${flake.size}px`,
              animationDelay: `${flake.delay}s`,
              animationDuration: '15s',
              animationIterationCount: 'infinite'
            }}
          />
        ))}
      </div>

      {/* Nordic Pattern Background */}
      <div className="fixed inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="nordic" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M30,10 L40,20 L30,30 L20,20 Z" fill="white" />
              <path d="M10,30 L20,40 L10,50 L0,40 Z" fill="white" />
              <path d="M50,30 L60,40 L50,50 L40,40 Z" fill="white" />
              <path d="M30,50 L40,60 L30,70 L20,60 Z" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#nordic)" />
        </svg>
      </div>

      {/* Pine Trees Silhouette */}
      <div className="fixed bottom-0 left-0 right-0 pointer-events-none">
        <div className="flex justify-around items-end">
          <GiPineTree className="text-slate-900/50" style={{ fontSize: '150px' }} />
          <GiPineTree className="text-slate-900/40" style={{ fontSize: '200px' }} />
          <GiPineTree className="text-slate-900/50" style={{ fontSize: '180px' }} />
          <GiPineTree className="text-slate-900/30" style={{ fontSize: '160px' }} />
        </div>
      </div>

      {/* Header */}
      <header className="relative z-30 bg-gradient-to-r from-slate-800/90 to-blue-900/90 backdrop-blur-sm shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <GiDeerHead className="text-4xl text-cyan-300" />
              <div>
                <h1 className="text-2xl font-bold text-white">Lotus Nordic Care</h1>
                <p className="text-sm text-cyan-100">Hygge Healthcare • Lagom Living</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="text-white hover:text-cyan-300 transition-colors">Home</Link>
              <Link href="/services" className="text-white hover:text-cyan-300 transition-colors">Services</Link>
              <Link href="/about" className="text-white hover:text-cyan-300 transition-colors">About</Link>
              <Link href="/blog" className="text-white hover:text-cyan-300 transition-colors">Blog</Link>
              <Link href="/contact" className="text-white hover:text-cyan-300 transition-colors">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-30 py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 shadow-2xl border border-cyan-300/30">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
              Northern Light of Healthcare
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Experience the perfect balance of simplicity and warmth. Our care embodies Nordic values: functional, beautiful, and deeply comforting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setShowAurora(!showAurora)}
                className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                See the Aurora <GiSunrise className="inline ml-2" />
              </button>
              <button
                onClick={() => setHyggeMode(!hyggeMode)}
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Enter Hygge Mode <FaFire className="inline ml-2" />
              </button>
            </div>
          </div>

          {/* Runic Symbols */}
          <div className="mt-8 flex justify-center space-x-8 text-cyan-300/50">
            <span className="text-4xl">ᚠ</span>
            <span className="text-4xl">ᚢ</span>
            <span className="text-4xl">ᚦ</span>
            <span className="text-4xl">ᚨ</span>
            <span className="text-4xl">ᚱ</span>
          </div>
        </div>
      </section>

      {/* Hygge Mode Overlay */}
      {hyggeMode && (
        <div className="fixed inset-0 z-40 bg-gradient-to-br from-orange-900/90 to-red-900/90 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-white/10 backdrop-blur-md p-12 rounded-3xl max-w-2xl mx-4 text-center">
            <GiCampfire className="text-6xl text-orange-400 mx-auto mb-6 animate-pulse" />
            <h3 className="text-3xl font-bold text-white mb-4">Welcome to Your Hygge Space</h3>
            <p className="text-gray-200 mb-6">
              Like gathering around a warm fire on a cold Nordic night, our care creates a cozy, safe space where healing happens naturally.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white/10 p-4 rounded-xl">
                <FaFire className="text-3xl text-orange-400 mb-2 mx-auto" />
                <h4 className="font-semibold text-white">Warmth</h4>
                <p className="text-sm text-gray-300">Compassionate care that warms the soul</p>
              </div>
              <div className="bg-white/10 p-4 rounded-xl">
                <FaSnowflake className="text-3xl text-cyan-400 mb-2 mx-auto" />
                <h4 className="font-semibold text-white">Balance</h4>
                <p className="text-sm text-gray-300">Finding equilibrium in health and life</p>
              </div>
            </div>
            <button 
              onClick={() => setHyggeMode(false)}
              className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition-colors"
            >
              Return to Main
            </button>
          </div>
        </div>
      )}

      {/* Services Section */}
      <section className="relative z-30 py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Nordic Wellness Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Lagom Primary Care",
                description: "Just the right amount of care - not too much, not too little",
                icon: <FaMountain className="text-4xl text-cyan-400" />,
                rune: "ᛚ",
                color: "from-cyan-500 to-blue-600"
              },
              {
                title: "Aurora Therapy",
                description: "Innovative treatments that illuminate your path to wellness",
                icon: <GiSunrise className="text-4xl text-emerald-400" />,
                rune: "ᚨ",
                color: "from-emerald-500 to-teal-600"
              },
              {
                title: "Fjord Medicine",
                description: "Deep, comprehensive care carved by time and expertise",
                icon: <GiPineTree className="text-4xl text-green-400" />,
                rune: "ᚠ",
                color: "from-green-500 to-emerald-600"
              }
            ].map((service, index) => (
              <div key={index} className="group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-cyan-300/30 relative">
                  <span className="absolute top-4 right-4 text-3xl text-cyan-300/20">{service.rune}</span>
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-white">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <Link href="/services" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
                    Explore Further →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nordic Values Section */}
      <section className="relative z-30 py-16 px-4">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-slate-700/50 to-blue-800/50 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-cyan-300/30">
            <h2 className="text-3xl font-bold text-center mb-8 text-white">Our Nordic Healthcare Philosophy</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { word: "Hygge", meaning: "Cozy comfort", description: "Creating warm, comfortable healing spaces" },
                { word: "Lagom", meaning: "Perfect balance", description: "Just the right amount of care" },
                { word: "Fika", meaning: "Coffee break", description: "Taking time to connect and care" },
                { word: "Friluftsliv", meaning: "Open-air life", description: "Embracing natural healing" }
              ].map((concept, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white/10 rounded-xl p-6 hover:bg-white/20 transition-colors">
                    <h3 className="text-xl font-bold text-cyan-300 mb-2">{concept.word}</h3>
                    <p className="text-sm text-gray-300 italic mb-2">"{concept.meaning}"</p>
                    <p className="text-xs text-gray-400">{concept.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-30 py-16 px-4">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-cyan-900/50 to-blue-900/50 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-cyan-300/30">
            <h2 className="text-3xl font-bold text-center mb-8 text-white">Visit Our Nordic Haven</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center">
                    <FaPhone className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Call Our Lodge</p>
                    <p className="text-gray-300">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <FaMapMarkerAlt className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Find Us</p>
                    <p className="text-gray-300">123 Fjord Lane, Northern Hills</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Link href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-lg">
                  Begin Your Nordic Journey
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-30 bg-slate-900/90 text-white py-8 px-4 mt-16">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Lotus Nordic Care. Where simplicity meets exceptional healthcare.</p>
          <p className="mt-2 text-cyan-300">Skål to your health! 🌟</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-100px) rotate(0deg);
          }
          100% {
            transform: translateY(calc(100vh + 100px)) rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}