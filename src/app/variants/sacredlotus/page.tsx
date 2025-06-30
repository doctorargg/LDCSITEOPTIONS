'use client';

import { useEffect, useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { FiSun, FiMapPin, FiPhone, FiHeart, FiStar, FiClock, FiArrowRight, FiCircle } from 'react-icons/fi';
import JourneySection from "@/components/JourneySection";
import PricingSection from "@/components/PricingSection";
import FeaturesSection from "@/components/FeaturesSection";
import DoctorSection from "@/components/DoctorSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogPreviewSection from "@/components/BlogPreviewSection";

export default function SacredLotusVariant() {
  const [mandalaRotation, setMandalaRotation] = useState(0);
  const [chakraIndex, setChakraIndex] = useState(0);
  const [sacredGeometry, setSacredGeometry] = useState(0);

  const chakras = [
    { name: 'Root', color: 'from-red-500 to-red-700', symbol: '🔴' },
    { name: 'Sacral', color: 'from-orange-500 to-orange-700', symbol: '🟠' },
    { name: 'Solar Plexus', color: 'from-yellow-500 to-yellow-700', symbol: '🟡' },
    { name: 'Heart', color: 'from-green-500 to-green-700', symbol: '🟢' },
    { name: 'Throat', color: 'from-blue-500 to-blue-700', symbol: '🔵' },
    { name: 'Third Eye', color: 'from-indigo-500 to-indigo-700', symbol: '🟣' },
    { name: 'Crown', color: 'from-purple-500 to-violet-700', symbol: '🟤' }
  ];

  useEffect(() => {
    // Mandala rotation
    const rotationInterval = setInterval(() => {
      setMandalaRotation(prev => (prev + 1) % 360);
    }, 100);

    // Chakra cycling
    const chakraInterval = setInterval(() => {
      setChakraIndex(prev => (prev + 1) % chakras.length);
    }, 4000);

    // Sacred geometry animation
    const geometryInterval = setInterval(() => {
      setSacredGeometry(prev => (prev + 1) % 360);
    }, 50);

    return () => {
      clearInterval(rotationInterval);
      clearInterval(chakraInterval);
      clearInterval(geometryInterval);
    };
  }, [chakras.length]);

  const currentChakra = chakras[chakraIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 relative overflow-hidden">
      {/* Sacred background patterns */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(239, 68, 68, 0.3) 0%, transparent 50%),
                              radial-gradient(circle at 75% 75%, rgba(245, 101, 101, 0.3) 0%, transparent 50%),
                              repeating-conic-gradient(from ${sacredGeometry}deg at 50% 50%, 
                                transparent 0deg, 
                                rgba(251, 146, 60, 0.1) 30deg, 
                                transparent 60deg)`
          }}
        />
      </div>

      {/* Floating lotus petals */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          >
            <div 
              className="w-6 h-6 bg-gradient-to-br from-orange-300 to-red-400 rounded-full opacity-30"
              style={{
                transform: `rotate(${i * 30}deg)`,
                clipPath: 'ellipse(50% 80% at 50% 20%)'
              }}
            />
          </div>
        ))}
      </div>

      {/* Sacred mandala in corner */}
      <div className="fixed top-10 right-10 pointer-events-none">
        <div 
          className="relative w-32 h-32"
          style={{ transform: `rotate(${mandalaRotation}deg)` }}
        >
          {/* Outer circle */}
          <div className="absolute inset-0 border-4 border-orange-300/40 rounded-full" />
          {/* Inner patterns */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-16 bg-gradient-to-b from-orange-400 to-red-500 opacity-30"
              style={{
                left: '50%',
                top: '50%',
                transformOrigin: '0 0',
                transform: `rotate(${i * 45}deg) translateY(-32px)`
              }}
            />
          ))}
          {/* Center lotus */}
          <div className="absolute inset-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-60" />
          <div className="absolute inset-8 bg-gradient-to-br from-orange-300 to-red-400 rounded-full opacity-80" />
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 px-6 py-4 bg-white/20 backdrop-blur-lg border-b border-orange-200/30">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative">
              <Image
                src="/images/LOGOTRANSPARENTFLOWERONLY1.png"
                alt="Sacred Lotus"
                width={50}
                height={50}
                className="drop-shadow-lg"
                style={{ filter: 'sepia(30%) saturate(150%) hue-rotate(25deg)' }}
              />
              {/* Sacred glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 rounded-full opacity-20 animate-pulse" />
            </div>
            <div>
              <div className="text-xl font-bold text-gray-800">
                Sacred Lotus Care
              </div>
              <div className="text-sm text-orange-700">
                Divine Wellness
              </div>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-gray-700 hover:text-orange-600 transition-colors">About</Link>
            <Link href="/services" className="text-gray-700 hover:text-orange-600 transition-colors">Services</Link>
            <Link href="/pricing" className="text-gray-700 hover:text-orange-600 transition-colors">Pricing</Link>
            <Link href="/blog" className="text-gray-700 hover:text-orange-600 transition-colors">Blog</Link>
            <Link href="/contact" className="text-gray-700 hover:text-orange-600 transition-colors">Contact</Link>
            <Link href="/variants" className="text-gray-700 hover:text-orange-600 transition-colors text-sm">
              🎨 All Variants
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-orange-700">
              <FiSun className="w-4 h-4" />
              <span className="text-sm font-medium">{currentChakra.name} Chakra</span>
            </div>
            <Link
              href="https://app.elationemr.com/book/lotusdirectcare/"
              target="_blank"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Sacred Appointment
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <span className="text-2xl">{currentChakra.symbol}</span>
                <span className="text-sm font-medium text-orange-700 tracking-wide uppercase">
                  Sacred Lotus
                </span>
              </div>
              
              <h1 className="text-6xl md:text-7xl font-bold text-gray-800 mb-6">
                Sacred
                <span className={`block bg-gradient-to-r ${currentChakra.color} bg-clip-text text-transparent transition-all duration-1000`}>
                  Wellness
                </span>
              </h1>
              
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Like the sacred lotus that emerges pure from muddy waters, your health journey is a spiritual awakening. 
                Dr. Rosenberg honors the divine temple of your body with reverent, mindful care rooted in ancient wisdom 
                and modern medicine.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="https://app.elationemr.com/book/lotusdirectcare/"
                  target="_blank"
                  className={`bg-gradient-to-r ${currentChakra.color} text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-1000 hover:scale-105 shadow-xl flex items-center justify-center`}
                >
                  Begin Sacred Journey
                  <FiArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="https://lotusdirectcare.hint.com/signup/"
                  target="_blank"
                  className="border-2 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center"
                >
                  Join Our Sangha
                </Link>
              </div>

              {/* Sacred principles cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white/40 backdrop-blur-lg rounded-xl p-4 border border-orange-200/50">
                  <div className="text-2xl mb-2">🕉️</div>
                  <div className="text-sm font-semibold text-gray-800">Dharmic Care</div>
                  <div className="text-xs text-gray-600">Righteous healing</div>
                </div>
                <div className="bg-white/40 backdrop-blur-lg rounded-xl p-4 border border-orange-200/50">
                  <div className="text-2xl mb-2">🧘‍♀️</div>
                  <div className="text-sm font-semibold text-gray-800">Mindful Practice</div>
                  <div className="text-xs text-gray-600">Present awareness</div>
                </div>
                <div className="bg-white/40 backdrop-blur-lg rounded-xl p-4 border border-orange-200/50">
                  <div className="text-2xl mb-2">🪷</div>
                  <div className="text-sm font-semibold text-gray-800">Pure Intent</div>
                  <div className="text-xs text-gray-600">Sacred purpose</div>
                </div>
              </div>
            </div>

            <div className="relative">
              {/* Main sacred image */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/Lotus Midjourney Flowers/lotus-homepage-new.png"
                  alt="Sacred lotus in divine light"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
                
                {/* Sacred overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-orange-200/30 via-transparent to-yellow-200/20" />
                
                {/* Floating om symbols */}
                <div className="absolute top-4 right-4 text-2xl text-orange-600 opacity-70 animate-pulse">🕉️</div>
                <div className="absolute bottom-4 left-4 text-xl text-red-500 opacity-60 animate-pulse" style={{ animationDelay: '1s' }}>☸️</div>
              </div>
              
              {/* Sacred geometry elements */}
              <div className="absolute -top-8 -right-8">
                <div 
                  className={`w-16 h-16 bg-gradient-to-r ${currentChakra.color} rounded-full opacity-70 animate-pulse transition-all duration-1000`}
                />
              </div>
              <div className="absolute -bottom-8 -left-8">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 opacity-60 animate-pulse" style={{ animationDelay: '1s' }}>
                  <div className="w-full h-full rounded-full border-2 border-white/50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sacred Teaching Section */}
      <section className="py-16 bg-white/30 backdrop-blur-lg relative">
        {/* Sanskrit-inspired background */}
        <div className="absolute inset-0 pointer-events-none">
          <div 
            className="w-full h-full opacity-5"
            style={{
              backgroundImage: `repeating-linear-gradient(45deg,
                transparent,
                transparent 20px,
                rgba(249, 115, 22, 0.2) 22px,
                rgba(249, 115, 22, 0.2) 24px
              )`
            }}
          />
        </div>
        
        <div className="max-w-4xl mx-auto text-center px-6 relative">
          <div className="text-4xl mb-6">🪷</div>
          <blockquote className="text-2xl md:text-3xl text-gray-800 italic mb-6">
            "As the lotus blooms untainted in muddy waters, so too does the soul flourish in wisdom 
            when nurtured with pure intention. Your body is a sacred temple deserving of reverent care."
          </blockquote>
          <cite className="text-lg text-gray-600">
            - Dr. Aaron Rosenberg, Sacred Lotus Care
          </cite>
          
          {/* Chakra indicator */}
          <div className="mt-8 flex justify-center">
            <div className={`px-6 py-3 bg-gradient-to-r ${currentChakra.color} text-white rounded-full font-medium transition-all duration-1000`}>
              Currently Honoring: {currentChakra.name} Chakra {currentChakra.symbol}
            </div>
          </div>
        </div>
      </section>

      {/* Sacred sections with spiritual elements */}
      <div className="space-y-0 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div 
            className="w-full h-full opacity-10"
            style={{
              background: `repeating-conic-gradient(from ${sacredGeometry}deg at 50% 50%, 
                transparent 0deg, 
                rgba(249, 115, 22, 0.1) 15deg, 
                transparent 30deg)`
            }}
          />
        </div>
        
        <div className="relative z-10">
          <JourneySection />
          <FeaturesSection />
          <DoctorSection />
          <PricingSection />
          <TestimonialsSection />
          <BlogPreviewSection />
        </div>
      </div>

      {/* Sacred Footer */}
      <footer className="bg-gradient-to-b from-orange-100 to-red-200 py-12 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative">
                  <Image
                    src="/images/LOGOTRANSPARENTFLOWERONLY1.png"
                    alt="Sacred Lotus Care"
                    width={40}
                    height={40}
                    style={{ filter: 'sepia(30%) saturate(150%) hue-rotate(25deg)' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 rounded-full opacity-20 animate-pulse" />
                </div>
                <div>
                  <div className="text-xl font-bold text-gray-800">
                    Sacred Lotus Care
                  </div>
                  <div className="text-sm text-orange-700">
                    Divine Wellness
                  </div>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Honoring the sacred temple of your body with reverent care, ancient wisdom, and modern healing.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Sacred Services</h4>
              <ul className="space-y-2">
                <li><Link href="/direct-primary-care" className="text-gray-600 hover:text-orange-600 transition-colors">Divine Primary Care</Link></li>
                <li><Link href="/functional-medicine" className="text-gray-600 hover:text-orange-600 transition-colors">Holistic Medicine</Link></li>
                <li><Link href="/ketamine-therapy" className="text-gray-600 hover:text-orange-600 transition-colors">Consciousness Therapy</Link></li>
                <li><Link href="/prp-injections" className="text-gray-600 hover:text-orange-600 transition-colors">Healing Regeneration</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Sacred Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-gray-600">
                  <FiMapPin className="w-4 h-4" />
                  <span className="text-sm">Las Vegas, Nevada</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <FiPhone className="w-4 h-4" />
                  <span className="text-sm">(702) 463-3008</span>
                </div>
                <div className="text-sm text-orange-600 font-medium">
                  Namaste 🙏
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-orange-300/50 mt-8 pt-8 text-center">
            <p className="text-gray-600 text-sm">
              © 2025 Sacred Lotus Care. All rights reserved. May all beings be free from suffering and the causes of suffering.
            </p>
            <div className="mt-4 text-orange-600 text-2xl">🕉️ ☸️ 🪷 ☯️ 🕉️</div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(5deg); }
          66% { transform: translateY(-10px) rotate(-3deg); }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </div>
  );
}