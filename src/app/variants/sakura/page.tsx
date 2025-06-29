'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaYinYang, FaLeaf } from 'react-icons/fa';
import { GiCherry, GiPaperLantern, GiBamboo, GiTropicalFish } from 'react-icons/gi';

export default function SakuraJapaneseVariant() {
  const [petals, setPetals] = useState<Array<{id: number, x: number, delay: number}>>([]);
  const [showZenGarden, setShowZenGarden] = useState(false);

  useEffect(() => {
    // Generate falling sakura petals
    const newPetals = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 10
    }));
    setPetals(newPetals);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-pink-50 to-white">
      {/* Falling Sakura Petals */}
      <div className="fixed inset-0 pointer-events-none">
        {petals.map(petal => (
          <div
            key={petal.id}
            className="absolute animate-fall"
            style={{
              left: `${petal.x}%`,
              animationDelay: `${petal.delay}s`,
              animationDuration: '10s',
              animationIterationCount: 'infinite'
            }}
          >
            <GiCherry className="text-pink-300 text-2xl opacity-60" />
          </div>
        ))}
      </div>

      {/* Japanese Pattern Background */}
      <div className="fixed inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="seigaiha" x="0" y="0" width="100" height="50" patternUnits="userSpaceOnUse">
              <circle cx="0" cy="50" r="30" fill="none" stroke="#000" strokeWidth="1"/>
              <circle cx="50" cy="50" r="30" fill="none" stroke="#000" strokeWidth="1"/>
              <circle cx="100" cy="50" r="30" fill="none" stroke="#000" strokeWidth="1"/>
              <circle cx="25" cy="0" r="30" fill="none" stroke="#000" strokeWidth="1"/>
              <circle cx="75" cy="0" r="30" fill="none" stroke="#000" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#seigaiha)" />
        </svg>
      </div>

      {/* Header */}
      <header className="relative z-10 bg-gradient-to-r from-red-800/90 to-pink-800/90 backdrop-blur-sm shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <GiCherry className="text-4xl text-pink-200" />
              <div>
                <h1 className="text-2xl font-bold text-white">蓮 Lotus Sakura Care</h1>
                <p className="text-sm text-pink-100">桜の花のような優しい医療 - Care as gentle as cherry blossoms</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="text-white hover:text-pink-200 transition-colors">Home</Link>
              <Link href="/services" className="text-white hover:text-pink-200 transition-colors">Services</Link>
              <Link href="/about" className="text-white hover:text-pink-200 transition-colors">About</Link>
              <Link href="/blog" className="text-white hover:text-pink-200 transition-colors">Blog</Link>
              <Link href="/contact" className="text-white hover:text-pink-200 transition-colors">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section with Torii Gate */}
      <section className="relative z-10 py-20 px-4">
        <div className="container mx-auto">
          {/* Torii Gate Frame */}
          <div className="relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
              <div className="h-8 bg-red-700 rounded-t-lg shadow-lg"></div>
              <div className="flex justify-between mt-2">
                <div className="w-8 h-64 bg-red-700"></div>
                <div className="w-8 h-64 bg-red-700"></div>
              </div>
            </div>
            
            <div className="relative z-10 text-center pt-16">
              <div className="bg-white/80 backdrop-blur-md rounded-3xl p-12 shadow-2xl border border-pink-200 max-w-3xl mx-auto">
                <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                  和 Harmony in Healthcare
                </h2>
                <p className="text-xl text-gray-700 mb-8">
                  Experience the perfect balance of traditional wisdom and modern medicine, where every patient is treated with the respect and care of Japanese hospitality - おもてなし (omotenashi).
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={() => setShowZenGarden(!showZenGarden)}
                    className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    Enter Zen Garden <FaYinYang className="inline ml-2" />
                  </button>
                  <Link href="/contact" className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                    Begin Your Journey <GiCherry className="inline ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zen Garden Modal */}
      {showZenGarden && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-gradient-to-br from-gray-100 to-green-50 p-8 rounded-3xl max-w-2xl mx-4">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">禅 Your Zen Healthcare Garden</h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white/70 p-4 rounded-xl">
                <GiBamboo className="text-3xl text-green-600 mb-2" />
                <h4 className="font-semibold text-gray-800">Natural Growth</h4>
                <p className="text-sm text-gray-600">Flexible, resilient care that adapts to your needs</p>
              </div>
              <div className="bg-white/70 p-4 rounded-xl">
                <GiTropicalFish className="text-3xl text-orange-600 mb-2" />
                <h4 className="font-semibold text-gray-800">Flowing Wellness</h4>
                <p className="text-sm text-gray-600">Continuous care that moves with your life journey</p>
              </div>
            </div>
            <div className="text-center mb-6">
              <p className="text-gray-700 italic">
                "In the garden of health, every patient is a unique flower requiring individual care and attention."
              </p>
            </div>
            <button 
              onClick={() => setShowZenGarden(false)}
              className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors mx-auto block"
            >
              Return to Main Path
            </button>
          </div>
        </div>
      )}

      {/* Services Section with Origami Style */}
      <section className="relative z-10 py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            折り紙 Services Folded with Care
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Primary Care 基本医療",
                description: "Foundation of health built with patience and precision, like origami cranes",
                icon: <FaLeaf className="text-4xl text-green-600" />,
                pattern: "M10,10 L30,10 L20,30 Z", // Triangle
                color: "from-green-400 to-emerald-500"
              },
              {
                title: "Ketamine Therapy 瞑想療法",
                description: "Mindful healing through innovative treatments, finding inner peace",
                icon: <FaYinYang className="text-4xl text-purple-600" />,
                pattern: "M10,20 L20,10 L30,20 L20,30 Z", // Diamond
                color: "from-purple-400 to-pink-500"
              },
              {
                title: "Functional Medicine 機能医学",
                description: "Holistic approach honoring the body's natural harmony and balance",
                icon: <GiPaperLantern className="text-4xl text-red-600" />,
                pattern: "M15,10 L25,10 L30,20 L25,30 L15,30 L10,20 Z", // Hexagon
                color: "from-red-400 to-orange-500"
              }
            ].map((service, index) => (
              <div key={index} className="group">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-pink-200 relative overflow-hidden">
                  {/* Origami Pattern */}
                  <svg className="absolute top-0 right-0 w-20 h-20 opacity-10" viewBox="0 0 40 40">
                    <path d={service.pattern} fill="currentColor" className="text-gray-800" />
                  </svg>
                  
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">{service.title}</h3>
                  <p className="text-gray-700 mb-4">{service.description}</p>
                  <Link href="/services" className="text-red-600 font-semibold hover:text-pink-600 transition-colors">
                    探索 Explore →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Japanese Philosophy Section */}
      <section className="relative z-10 py-16 px-4">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-pink-100 to-red-100 rounded-3xl p-12 shadow-xl">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
              Our Healthcare Philosophy 私たちの理念
            </h2>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              {[
                { concept: "Omotenashi", kanji: "おもてなし", meaning: "Wholehearted service" },
                { concept: "Kaizen", kanji: "改善", meaning: "Continuous improvement" },
                { concept: "Wa", kanji: "和", meaning: "Harmony & peace" },
                { concept: "Ikigai", kanji: "生きがい", meaning: "Purpose in life" }
              ].map((item, index) => (
                <div key={index} className="bg-white/70 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-red-700">{item.concept}</h3>
                  <p className="text-3xl my-2">{item.kanji}</p>
                  <p className="text-sm text-gray-600">{item.meaning}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 py-16 px-4">
        <div className="container mx-auto">
          <div className="bg-white/90 rounded-3xl p-12 shadow-xl border-2 border-red-200">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
              Visit Our Healthcare Temple 寺院
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                    <FaPhone className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">電話 Phone</p>
                    <p className="text-gray-700">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center">
                    <FaMapMarkerAlt className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">場所 Location</p>
                    <p className="text-gray-700">123 Sakura Street, Harmony Hills</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Link href="/contact" className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-lg">
                  Begin Your Journey 旅を始める
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-gradient-to-r from-red-800 to-pink-800 text-white py-8 px-4 mt-16">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Lotus Sakura Care. 桜の花のような優しい医療.</p>
          <p className="mt-2 text-pink-200">Where Eastern wisdom meets Western medicine.</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-100px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(calc(100vh + 100px)) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}