'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaMagic, FaDragon, FaHatWizard } from 'react-icons/fa';
import { GiCrystalBall, GiSpellBook, GiPotionBall, GiCrystalGrowth, GiMagicSwirl, GiWizardStaff } from 'react-icons/gi';

export default function FantasyMagicalVariant() {
  const [sparkles, setSparkles] = useState<Array<{id: number, x: number, y: number, size: number}>>([]);
  const [crystalGlow, setCrystalGlow] = useState(0);
  const [showSpellbook, setShowSpellbook] = useState(false);
  const [magicParticles, setMagicParticles] = useState<Array<{id: number, x: number, y: number, color: string}>>([]);

  useEffect(() => {
    // Generate sparkles
    const sparkleInterval = setInterval(() => {
      setSparkles(prev => [
        ...prev.slice(-20),
        {
          id: Date.now(),
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 10 + 5
        }
      ]);
    }, 300);

    // Crystal glow animation
    const glowInterval = setInterval(() => {
      setCrystalGlow(prev => (prev + 1) % 360);
    }, 50);

    // Magic particles
    const particleInterval = setInterval(() => {
      setMagicParticles(prev => [
        ...prev.slice(-30),
        {
          id: Date.now() + Math.random(),
          x: Math.random() * 100,
          y: 100,
          color: ['#8B5CF6', '#EC4899', '#06B6D4', '#10B981'][Math.floor(Math.random() * 4)]
        }
      ]);
    }, 200);

    return () => {
      clearInterval(sparkleInterval);
      clearInterval(glowInterval);
      clearInterval(particleInterval);
    };
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900">
      {/* Magical Starfield Background */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-black/30"></div>
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }}
          >
            <div className="w-1 h-1 bg-white rounded-full"></div>
          </div>
        ))}
      </div>

      {/* Floating Sparkles */}
      <div className="fixed inset-0 pointer-events-none">
        {sparkles.map(sparkle => (
          <div
            key={sparkle.id}
            className="absolute animate-sparkle"
            style={{
              left: `${sparkle.x}%`,
              top: `${sparkle.y}%`,
            }}
          >
            <FaMagic className="text-yellow-300" style={{ fontSize: `${sparkle.size}px` }} />
          </div>
        ))}
      </div>

      {/* Magic Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {magicParticles.map(particle => (
          <div
            key={particle.id}
            className="absolute animate-float-up"
            style={{
              left: `${particle.x}%`,
              bottom: '0%',
            }}
          >
            <GiMagicSwirl 
              className="opacity-60" 
              style={{ 
                color: particle.color,
                fontSize: '30px',
                filter: `drop-shadow(0 0 10px ${particle.color})`
              }} 
            />
          </div>
        ))}
      </div>

      {/* Floating Crystals */}
      <div className="fixed inset-0 pointer-events-none">
        <GiCrystalGrowth 
          className="absolute text-purple-400 opacity-30 animate-float"
          style={{
            top: '20%',
            left: '10%',
            fontSize: '80px',
            filter: `hue-rotate(${crystalGlow}deg) drop-shadow(0 0 20px rgba(168, 85, 247, 0.8))`
          }}
        />
        <GiCrystalGrowth 
          className="absolute text-cyan-400 opacity-30 animate-float"
          style={{
            top: '60%',
            right: '15%',
            fontSize: '60px',
            animationDelay: '2s',
            filter: `hue-rotate(${-crystalGlow}deg) drop-shadow(0 0 20px rgba(6, 182, 212, 0.8))`
          }}
        />
      </div>

      {/* Header */}
      <header className="relative z-10 bg-gradient-to-r from-purple-800/80 to-indigo-800/80 backdrop-blur-md shadow-lg border-b-2 border-purple-500/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <GiWizardStaff className="text-4xl text-purple-300" />
              <div>
                <h1 className="text-2xl font-bold text-white" style={{ fontFamily: 'fantasy' }}>
                  Lotus Enchanted Care
                </h1>
                <p className="text-sm text-purple-200">Where Magic Meets Medicine ✨</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              {['Home', 'Services', 'About', 'Blog', 'Contact'].map(item => (
                <Link 
                  key={item}
                  href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                  className="text-purple-100 hover:text-yellow-300 transition-colors"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="bg-gradient-to-br from-purple-800/40 to-blue-800/40 backdrop-blur-md rounded-3xl p-12 shadow-2xl border border-purple-400/50 relative overflow-hidden">
            {/* Magical border glow */}
            <div className="absolute inset-0 rounded-3xl" style={{
              background: `radial-gradient(circle at 50% 50%, transparent 60%, rgba(168, 85, 247, 0.3) 100%)`,
              animation: 'pulse 3s ease-in-out infinite'
            }}></div>
            
            <h2 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-300" style={{ fontFamily: 'fantasy' }}>
              Your Magical Health Journey Awaits
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Step into a realm where ancient wisdom meets modern healing. Our enchanted practitioners wield the most powerful spells of wellness and restoration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setShowSpellbook(!showSpellbook)}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300"
              >
                Open Spellbook <GiSpellBook className="inline ml-2" />
              </button>
              <Link href="/contact" className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transform hover:scale-105 transition-all duration-300">
                Cast Healing Spell <FaMagic className="inline ml-2" />
              </Link>
            </div>
          </div>

          {/* Floating magical elements */}
          <div className="mt-8 flex justify-center space-x-8">
            <FaHatWizard className="text-4xl text-purple-400 animate-bounce" />
            <FaDragon className="text-4xl text-pink-400 animate-bounce" style={{ animationDelay: '0.5s' }} />
            <GiCrystalBall className="text-4xl text-cyan-400 animate-bounce" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </section>

      {/* Spellbook Modal */}
      {showSpellbook && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="bg-gradient-to-br from-indigo-900 to-purple-900 p-8 rounded-3xl max-w-2xl mx-4 border-2 border-gold-500 shadow-2xl shadow-purple-500/50">
            <h3 className="text-3xl font-bold text-yellow-300 mb-6 text-center" style={{ fontFamily: 'fantasy' }}>
              The Ancient Spellbook of Healing
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-purple-800/50 p-4 rounded-xl border border-purple-500">
                <GiPotionBall className="text-3xl text-green-400 mb-2" />
                <h4 className="font-semibold text-green-300">Elixir of Vitality</h4>
                <p className="text-sm text-gray-300">Primary care potions for everyday wellness</p>
              </div>
              <div className="bg-purple-800/50 p-4 rounded-xl border border-purple-500">
                <GiMagicSwirl className="text-3xl text-blue-400 mb-2" />
                <h4 className="font-semibold text-blue-300">Mind Clarity Enchantment</h4>
                <p className="text-sm text-gray-300">Ketamine therapy for mental restoration</p>
              </div>
              <div className="bg-purple-800/50 p-4 rounded-xl border border-purple-500">
                <GiCrystalGrowth className="text-3xl text-purple-400 mb-2" />
                <h4 className="font-semibold text-purple-300">Crystal Regeneration</h4>
                <p className="text-sm text-gray-300">PRP treatments for physical renewal</p>
              </div>
              <div className="bg-purple-800/50 p-4 rounded-xl border border-purple-500">
                <FaDragon className="text-3xl text-red-400 mb-2" />
                <h4 className="font-semibold text-red-300">Dragon's Strength</h4>
                <p className="text-sm text-gray-300">Functional medicine for inner power</p>
              </div>
            </div>
            <button 
              onClick={() => setShowSpellbook(false)}
              className="bg-yellow-500 text-purple-900 px-6 py-3 rounded-full font-bold hover:bg-yellow-400 transition-colors mx-auto block"
            >
              Close Spellbook
            </button>
          </div>
        </div>
      )}

      {/* Services Section */}
      <section className="relative z-10 py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white" style={{ fontFamily: 'fantasy' }}>
            Magical Services & Enchantments
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Wizard's Primary Care",
                description: "Daily enchantments to keep your health shield strong",
                icon: <FaHatWizard className="text-4xl" />,
                color: "from-purple-500 to-indigo-600",
                glow: "purple"
              },
              {
                title: "Mystic Mind Healing",
                description: "Powerful ketamine spells for mental clarity and peace",
                icon: <GiCrystalBall className="text-4xl" />,
                color: "from-pink-500 to-purple-600",
                glow: "pink"
              },
              {
                title: "Alchemical Medicine",
                description: "Ancient formulas combined with modern magical science",
                icon: <GiPotionBall className="text-4xl" />,
                color: "from-cyan-500 to-blue-600",
                glow: "cyan"
              }
            ].map((service, index) => (
              <div key={index} className="group">
                <div className={`bg-gradient-to-br from-purple-800/40 to-indigo-800/40 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:shadow-${service.glow}-500/50 transform hover:-translate-y-2 transition-all duration-300 border border-purple-400/50 relative overflow-hidden`}>
                  {/* Magical shimmer effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
                  </div>
                  
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-${service.glow}-500/50`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-white">{service.title}</h3>
                  <p className="text-purple-200 mb-4">{service.description}</p>
                  <Link href="/services" className={`text-${service.glow}-400 font-semibold hover:text-${service.glow}-300 transition-colors`}>
                    Learn the Spell →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Magical Artifacts Section */}
      <section className="relative z-10 py-16 px-4">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-purple-900/60 to-indigo-900/60 backdrop-blur-md rounded-3xl p-12 shadow-xl border border-purple-400/50">
            <h2 className="text-3xl font-bold text-center mb-8 text-white" style={{ fontFamily: 'fantasy' }}>
              Our Magical Healing Artifacts
            </h2>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              {[
                { name: "Staff of Wellness", icon: <GiWizardStaff className="text-4xl" />, power: "Continuous Care" },
                { name: "Orb of Clarity", icon: <GiCrystalBall className="text-4xl" />, power: "Mental Health" },
                { name: "Elixir of Life", icon: <GiPotionBall className="text-4xl" />, power: "Regeneration" },
                { name: "Tome of Knowledge", icon: <GiSpellBook className="text-4xl" />, power: "Medical Wisdom" }
              ].map((artifact, index) => (
                <div key={index} className="bg-purple-800/30 rounded-xl p-6 hover:bg-purple-800/50 transition-colors">
                  <div className="text-yellow-400 mb-3 flex justify-center">{artifact.icon}</div>
                  <h3 className="text-lg font-bold text-yellow-300">{artifact.name}</h3>
                  <p className="text-sm text-purple-200 mt-2">{artifact.power}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 py-16 px-4">
        <div className="container mx-auto">
          <div className="bg-gradient-to-br from-indigo-800/60 to-purple-800/60 backdrop-blur-md rounded-3xl p-12 shadow-xl border border-purple-400/50">
            <h2 className="text-3xl font-bold text-center mb-8 text-white" style={{ fontFamily: 'fantasy' }}>
              Visit Our Enchanted Sanctuary
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/50">
                    <FaPhone className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-purple-300">Crystal Ball Communication</p>
                    <p className="text-gray-300">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center shadow-lg shadow-pink-500/50">
                    <FaMapMarkerAlt className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-pink-300">Magical Realm Location</p>
                    <p className="text-gray-300">123 Enchanted Grove, Mystic Valley</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Link href="/contact" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300 text-lg">
                  Begin Your Quest 🌟
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-gradient-to-r from-purple-900 to-indigo-900 text-white py-8 px-4 mt-16 border-t border-purple-500/50">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Lotus Enchanted Care. Where Magic & Medicine Unite ✨</p>
          <p className="mt-2 text-purple-300">May your health journey be filled with wonder and healing.</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
        @keyframes sparkle {
          0% {
            transform: scale(0) rotate(0deg);
            opacity: 0;
          }
          50% {
            transform: scale(1) rotate(180deg);
            opacity: 1;
          }
          100% {
            transform: scale(0) rotate(360deg);
            opacity: 0;
          }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-up {
          0% {
            transform: translateY(0) scale(0.5);
            opacity: 0;
          }
          20% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-100vh) scale(1);
            opacity: 0;
          }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-sparkle {
          animation: sparkle 2s ease-out forwards;
        }
        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }
        .animate-float-up {
          animation: float-up 8s ease-out forwards;
        }
        .animate-shimmer {
          animation: shimmer 2s ease-out infinite;
        }
      `}</style>
    </div>
  );
}