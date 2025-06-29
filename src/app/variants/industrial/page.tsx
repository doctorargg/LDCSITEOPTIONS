'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaCog, FaWrench, FaIndustry } from 'react-icons/fa';
import { GiGears, GiSteamLocomotive, GiFactory, GiMetalBar } from 'react-icons/gi';

export default function IndustrialUrbanVariant() {
  const [gearRotation, setGearRotation] = useState(0);
  const [steamPuffs, setSteamPuffs] = useState<Array<{id: number, x: number, y: number}>>([]);
  const [showBlueprint, setShowBlueprint] = useState(false);

  useEffect(() => {
    // Rotate gears
    const interval = setInterval(() => {
      setGearRotation(prev => (prev + 1) % 360);
    }, 50);

    // Generate steam puffs
    const steamInterval = setInterval(() => {
      setSteamPuffs(prev => [
        ...prev.slice(-4),
        {
          id: Date.now(),
          x: Math.random() * 100,
          y: 100
        }
      ]);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearInterval(steamInterval);
    };
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Industrial Texture Background */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            90deg,
            transparent,
            transparent 50px,
            rgba(255,165,0,0.1) 50px,
            rgba(255,165,0,0.1) 51px
          ), repeating-linear-gradient(
            0deg,
            transparent,
            transparent 50px,
            rgba(255,165,0,0.1) 50px,
            rgba(255,165,0,0.1) 51px
          )`
        }}></div>
      </div>

      {/* Animated Gears */}
      <div className="fixed inset-0 pointer-events-none">
        <FaCog 
          className="absolute text-gray-700 opacity-30"
          style={{
            top: '10%',
            left: '10%',
            fontSize: '120px',
            transform: `rotate(${gearRotation}deg)`
          }}
        />
        <FaCog 
          className="absolute text-orange-700 opacity-30"
          style={{
            top: '15%',
            right: '20%',
            fontSize: '80px',
            transform: `rotate(-${gearRotation * 1.5}deg)`
          }}
        />
        <GiGears 
          className="absolute text-yellow-700 opacity-30"
          style={{
            bottom: '20%',
            left: '15%',
            fontSize: '100px',
            transform: `rotate(${gearRotation * 0.7}deg)`
          }}
        />
      </div>

      {/* Steam Effects */}
      <div className="fixed inset-0 pointer-events-none">
        {steamPuffs.map(puff => (
          <div
            key={puff.id}
            className="absolute animate-steam"
            style={{
              left: `${puff.x}%`,
              bottom: '0%',
            }}
          >
            <div className="w-20 h-20 bg-gray-400 rounded-full opacity-30 blur-xl"></div>
          </div>
        ))}
      </div>

      {/* Urban Skyline */}
      <div className="fixed bottom-0 left-0 right-0 pointer-events-none">
        <div className="flex justify-around items-end">
          <div className="w-20 h-40 bg-gray-800"></div>
          <div className="w-16 h-60 bg-gray-700"></div>
          <GiFactory className="text-gray-700" style={{ fontSize: '150px' }} />
          <div className="w-24 h-48 bg-gray-800"></div>
          <div className="w-20 h-52 bg-gray-700"></div>
        </div>
      </div>

      {/* Header with Riveted Metal Look */}
      <header className="relative z-10 bg-gradient-to-r from-gray-800 to-gray-900 shadow-2xl border-b-4 border-orange-600">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <GiGears className="text-4xl text-orange-500" />
              <div>
                <h1 className="text-2xl font-bold text-white font-mono">LOTUS INDUSTRIAL CARE</h1>
                <p className="text-sm text-orange-400 uppercase tracking-wider">Precision Healthcare Engineering</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              {['Home', 'Services', 'About', 'Blog', 'Contact'].map(item => (
                <Link 
                  key={item}
                  href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                  className="text-gray-300 hover:text-orange-500 transition-colors font-mono uppercase tracking-wide text-sm"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>
        </div>
        {/* Rivets */}
        <div className="absolute top-0 left-0 right-0 h-full pointer-events-none">
          <div className="flex justify-around items-center h-full">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="w-3 h-3 bg-gray-600 rounded-full border border-gray-500"></div>
            ))}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-none p-12 shadow-2xl border-4 border-gray-700 relative">
            {/* Corner bolts */}
            <div className="absolute top-4 left-4 w-6 h-6 bg-orange-600 rounded-full"></div>
            <div className="absolute top-4 right-4 w-6 h-6 bg-orange-600 rounded-full"></div>
            <div className="absolute bottom-4 left-4 w-6 h-6 bg-orange-600 rounded-full"></div>
            <div className="absolute bottom-4 right-4 w-6 h-6 bg-orange-600 rounded-full"></div>
            
            <h2 className="text-5xl font-bold mb-6 text-white font-mono uppercase">
              <span className="text-orange-500">ENGINEERED</span> HEALTHCARE
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto font-mono">
              Built tough. Designed smart. Your health deserves industrial-strength care with precision engineering.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setShowBlueprint(!showBlueprint)}
                className="bg-orange-600 text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-orange-700 transform hover:scale-105 transition-all duration-300 border-2 border-orange-800"
              >
                View Blueprint <FaWrench className="inline ml-2" />
              </button>
              <Link href="/contact" className="bg-yellow-600 text-black px-8 py-4 font-bold uppercase tracking-wider hover:bg-yellow-700 transform hover:scale-105 transition-all duration-300 border-2 border-yellow-800">
                Start Construction <FaIndustry className="inline ml-2" />
              </Link>
            </div>
          </div>

          {/* Graffiti Style Text */}
          <div className="mt-8 text-6xl font-bold" style={{
            background: 'linear-gradient(45deg, #ff6b6b, #feca57, #48dbfb, #ff9ff3)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            transform: 'skewY(-2deg)'
          }}>
            HEALTH REIMAGINED
          </div>
        </div>
      </section>

      {/* Blueprint Modal */}
      {showBlueprint && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="bg-blue-900 p-8 max-w-2xl mx-4 border-4 border-blue-700" style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 20px,
              rgba(255,255,255,0.05) 20px,
              rgba(255,255,255,0.05) 21px
            ), repeating-linear-gradient(
              90deg,
              transparent,
              transparent 20px,
              rgba(255,255,255,0.05) 20px,
              rgba(255,255,255,0.05) 21px
            )`
          }}>
            <h3 className="text-3xl font-bold text-white mb-4 font-mono">HEALTH SYSTEM BLUEPRINT</h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-800/50 p-4 border border-blue-600">
                <GiMetalBar className="text-3xl text-yellow-500 mb-2" />
                <h4 className="font-bold text-white uppercase">Foundation</h4>
                <p className="text-sm text-gray-300">Solid primary care infrastructure</p>
              </div>
              <div className="bg-blue-800/50 p-4 border border-blue-600">
                <GiSteamLocomotive className="text-3xl text-orange-500 mb-2" />
                <h4 className="font-bold text-white uppercase">Power</h4>
                <p className="text-sm text-gray-300">High-performance treatments</p>
              </div>
            </div>
            <button 
              onClick={() => setShowBlueprint(false)}
              className="bg-red-600 text-white px-6 py-3 font-bold uppercase hover:bg-red-700 transition-colors"
            >
              Close Blueprint
            </button>
          </div>
        </div>
      )}

      {/* Services Section */}
      <section className="relative z-10 py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white font-mono uppercase">
            Industrial-Grade Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "HEAVY-DUTY PRIMARY CARE",
                description: "Built to last healthcare maintenance",
                icon: <FaWrench className="text-4xl" />,
                color: "orange",
                tag: "ESSENTIAL"
              },
              {
                title: "PRECISION THERAPY",
                description: "Calibrated ketamine & innovative treatments",
                icon: <FaCog className="text-4xl" />,
                color: "yellow",
                tag: "ADVANCED"
              },
              {
                title: "PERFORMANCE MEDICINE",
                description: "Maximum efficiency functional care",
                icon: <GiGears className="text-4xl" />,
                color: "red",
                tag: "PREMIUM"
              }
            ].map((service, index) => (
              <div key={index} className="group">
                <div className="bg-gray-800 p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-l-4 border-r-4 border-orange-600 relative">
                  {/* Warning stripe */}
                  <div className={`absolute top-0 left-0 right-0 h-2 bg-${service.color}-600`}></div>
                  
                  <div className={`absolute -top-4 -right-4 bg-${service.color}-600 text-black px-3 py-1 font-bold text-xs transform rotate-12`}>
                    {service.tag}
                  </div>
                  
                  <div className={`w-20 h-20 bg-gray-700 flex items-center justify-center mb-6 group-hover:bg-${service.color}-600 transition-colors`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white font-mono uppercase">{service.title}</h3>
                  <p className="text-gray-400 mb-4 font-mono text-sm">{service.description}</p>
                  <Link href="/services" className={`text-${service.color}-500 font-bold hover:text-${service.color}-400 transition-colors uppercase tracking-wider`}>
                    Deploy →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Industrial Dashboard */}
      <section className="relative z-10 py-16 px-4">
        <div className="container mx-auto">
          <div className="bg-gray-900 p-8 border-4 border-gray-700">
            <h2 className="text-2xl font-bold text-orange-500 mb-6 font-mono uppercase">System Performance Metrics</h2>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { label: "UPTIME", value: "99.9%", color: "green" },
                { label: "EFFICIENCY", value: "95%", color: "yellow" },
                { label: "CAPACITY", value: "2000+", color: "orange" },
                { label: "SATISFACTION", value: "98%", color: "red" }
              ].map((stat, index) => (
                <div key={index} className="bg-gray-800 p-4 border border-gray-600">
                  <div className={`text-3xl font-bold text-${stat.color}-500 font-mono`}>{stat.value}</div>
                  <div className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</div>
                  <div className="mt-2 h-2 bg-gray-700">
                    <div className={`h-full bg-${stat.color}-500`} style={{ width: stat.value }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 py-16 px-4">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-12 shadow-xl border-t-4 border-b-4 border-orange-600">
            <h2 className="text-3xl font-bold text-center mb-8 text-white font-mono uppercase">
              Contact Command Center
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-600 flex items-center justify-center">
                    <FaPhone className="text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-orange-400 uppercase">Hotline</p>
                    <p className="text-gray-300 font-mono">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-yellow-600 flex items-center justify-center">
                    <FaMapMarkerAlt className="text-black" />
                  </div>
                  <div>
                    <p className="font-bold text-yellow-400 uppercase">Location</p>
                    <p className="text-gray-300 font-mono">123 Industrial Blvd, Metro City</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Link href="/contact" className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 font-bold uppercase tracking-wider hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-lg border-2 border-orange-800">
                  Initiate Contact Protocol
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-gray-900 text-white py-8 px-4 mt-16 border-t-4 border-orange-600">
        <div className="container mx-auto text-center">
          <p className="font-mono">&copy; 2025 LOTUS INDUSTRIAL CARE. ENGINEERED FOR YOUR HEALTH.</p>
          <p className="mt-2 text-gray-500 text-sm uppercase tracking-wider">Building Better Health Since Day One</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes steam {
          0% {
            transform: translateY(0) scale(0.5);
            opacity: 0;
          }
          50% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(-300px) scale(2);
            opacity: 0;
          }
        }
        .animate-steam {
          animation: steam 5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}