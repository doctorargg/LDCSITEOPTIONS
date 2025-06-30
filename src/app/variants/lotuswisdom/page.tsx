'use client';

import { useEffect, useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { FiMapPin, FiPhone, FiArrowRight, FiBook, FiEye } from 'react-icons/fi';
import JourneySection from "@/components/JourneySection";
import PricingSection from "@/components/PricingSection";
import FeaturesSection from "@/components/FeaturesSection";
import DoctorSection from "@/components/DoctorSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogPreviewSection from "@/components/BlogPreviewSection";

export default function LotusWisdomVariant() {
  const [currentWisdom, setCurrentWisdom] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  const ancientWisdom = [
    { text: "The lotus teaches us that from darkness comes light, from struggle comes strength.", source: "Ancient Proverb" },
    { text: "Like the lotus, we too have the ability to rise from the mud, bloom beautifully.", source: "Buddha" },
    { text: "In the depth of winter, I finally learned there was within me an invincible summer.", source: "Albert Camus" },
    { text: "The wound is the place where the Light enters you.", source: "Rumi" },
    { text: "Health is not the absence of disease, but the presence of vitality.", source: "Ayurvedic Wisdom" }
  ];

  useEffect(() => {
    const wisdomInterval = setInterval(() => {
      setCurrentWisdom(prev => (prev + 1) % ancientWisdom.length);
    }, 5000);

    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(wisdomInterval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [ancientWisdom.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100 relative overflow-hidden">
      {/* Ancient scroll background */}
      <div className="fixed inset-0 pointer-events-none" style={{ transform: `translateY(${scrollPosition * 0.1}px)` }}>
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 50px, rgba(180, 83, 9, 0.1) 52px, rgba(180, 83, 9, 0.1) 54px)`
        }} />
      </div>

      {/* Floating wisdom symbols */}
      <div className="fixed inset-0 pointer-events-none">
        {['⚕️', '📜', '🦉', '☯️', '🏺'].map((symbol, i) => (
          <div
            key={i}
            className="absolute text-2xl opacity-20 animate-pulse"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + Math.sin(i) * 20}%`,
              animationDelay: `${i * 1}s`,
              animationDuration: `${3 + i}s`
            }}
          >
            {symbol}
          </div>
        ))}
      </div>

      {/* Wisdom scroll */}
      <div className="fixed top-10 right-10 z-40">
        <div className="bg-amber-100/90 backdrop-blur-lg rounded-2xl p-4 border border-amber-300/50 max-w-xs">
          <div className="flex items-center space-x-2 mb-2">
            <FiBook className="w-4 h-4 text-amber-700" />
            <span className="text-sm font-medium text-amber-700">Ancient Wisdom</span>
          </div>
          <blockquote className="text-sm italic text-gray-700 mb-2">
            "{ancientWisdom[currentWisdom].text}"
          </blockquote>
          <cite className="text-xs text-amber-600">
            - {ancientWisdom[currentWisdom].source}
          </cite>
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 px-6 py-4 bg-white/20 backdrop-blur-lg border-b border-amber-200/30">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative">
              <Image src="/images/LOGOTRANSPARENTFLOWERONLY1.png" alt="Lotus Wisdom" width={50} height={50} className="filter sepia-30 saturate-150" />
              {/* Ancient glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full opacity-20 animate-pulse" />
            </div>
            <div>
              <div className="text-xl font-bold text-gray-800">Lotus Wisdom</div>
              <div className="text-sm text-amber-700">Ancient Healing Knowledge</div>
            </div>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-gray-700 hover:text-amber-600 transition-colors">About</Link>
            <Link href="/services" className="text-gray-700 hover:text-amber-600 transition-colors">Services</Link>
            <Link href="/variants" className="text-gray-700 hover:text-amber-600 transition-colors text-sm">🎨 All Variants</Link>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1 text-amber-700">
              <FiEye className="w-4 h-4" />
              <span className="text-sm font-medium">Wisdom</span>
            </div>
            <Link href="https://app.elationemr.com/book/lotusdirectcare/" target="_blank" className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300">
              Seek Wisdom
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
                <FiBook className="w-6 h-6 text-amber-600" />
                <span className="text-sm font-medium text-amber-700 tracking-wide uppercase">Lotus Wisdom</span>
              </div>
              
              <h1 className="text-6xl md:text-7xl font-bold text-gray-800 mb-6">
                Ancient
                <span className="block bg-gradient-to-r from-amber-600 via-orange-500 to-yellow-600 bg-clip-text text-transparent">
                  Wisdom
                </span>
              </h1>
              
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                For millennia, the lotus has symbolized wisdom rising from experience, knowledge blooming from understanding. 
                Dr. Rosenberg draws upon this timeless wisdom, combining ancient healing principles with modern medical science 
                to offer you care that honors both tradition and innovation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="https://app.elationemr.com/book/lotusdirectcare/" target="_blank" className="bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-xl flex items-center justify-center">
                  Discover Wisdom
                  <FiArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link href="https://lotusdirectcare.hint.com/signup/" target="_blank" className="border-2 border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
                  Learn Ancient Ways
                </Link>
              </div>

              {/* Wisdom principles */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white/40 backdrop-blur-lg rounded-xl p-4 border border-amber-200/50">
                  <div className="text-2xl mb-2">📜</div>
                  <div className="text-sm font-semibold text-gray-800">Ancient Knowledge</div>
                  <div className="text-xs text-gray-600">Time-tested wisdom</div>
                </div>
                <div className="bg-white/40 backdrop-blur-lg rounded-xl p-4 border border-amber-200/50">
                  <div className="text-2xl mb-2">⚕️</div>
                  <div className="text-sm font-semibold text-gray-800">Holistic Healing</div>
                  <div className="text-xs text-gray-600">Mind, body, spirit</div>
                </div>
                <div className="bg-white/40 backdrop-blur-lg rounded-xl p-4 border border-amber-200/50">
                  <div className="text-2xl mb-2">🦉</div>
                  <div className="text-sm font-semibold text-gray-800">Deep Understanding</div>
                  <div className="text-xs text-gray-600">Profound insight</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image src="/Lotus Midjourney Flowers/lotus-homepage-new.png" alt="Lotus wisdom from ages past" width={600} height={600} className="w-full h-auto filter sepia-20 saturate-120" />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-200/30 via-transparent to-orange-200/20" />
                
                {/* Ancient symbols overlay */}
                <div className="absolute top-4 right-4 text-3xl text-amber-600 opacity-70">☯️</div>
                <div className="absolute bottom-4 left-4 text-2xl text-orange-500 opacity-60">🕉️</div>
              </div>
              
              {/* Wisdom elements */}
              <div className="absolute -top-8 -right-8">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full opacity-70 animate-pulse flex items-center justify-center">
                  <FiBook className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="absolute -bottom-8 -left-8">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-full opacity-60 animate-pulse flex items-center justify-center">
                  <FiEye className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wisdom Quote Section */}
      <section className="py-16 bg-white/30 backdrop-blur-lg">
        <div className="max-w-4xl mx-auto text-center px-6">
          <div className="text-4xl mb-6">📜</div>
          <blockquote className="text-2xl md:text-3xl text-gray-800 italic mb-6">
            "{ancientWisdom[currentWisdom].text}"
          </blockquote>
          <cite className="text-lg text-gray-600">
            - {ancientWisdom[currentWisdom].source}
          </cite>
          <div className="mt-8">
            <div className="text-sm text-amber-600 font-medium">~ Dr. Aaron Rosenberg, Lotus Wisdom ~</div>
          </div>
        </div>
      </section>

      <JourneySection />
      <FeaturesSection />
      <DoctorSection />
      <PricingSection />
      <TestimonialsSection />
      <BlogPreviewSection />

      {/* Footer */}
      <footer className="bg-gradient-to-b from-amber-100 to-orange-200 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <Image src="/images/LOGOTRANSPARENTFLOWERONLY1.png" alt="Lotus Wisdom" width={40} height={40} className="filter sepia-20" />
                <div>
                  <div className="text-xl font-bold text-gray-800">Lotus Wisdom</div>
                  <div className="text-sm text-amber-700">Ancient Healing Knowledge</div>
                </div>
              </div>
              <p className="text-gray-700 mb-4">Where timeless wisdom meets modern medicine, creating a bridge between ancient knowledge and contemporary care.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Wisdom Services</h4>
              <ul className="space-y-2">
                <li><Link href="/direct-primary-care" className="text-gray-600 hover:text-amber-600 transition-colors">Ancient Primary Care</Link></li>
                <li><Link href="/functional-medicine" className="text-gray-600 hover:text-amber-600 transition-colors">Wisdom Medicine</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Seek Wisdom</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-gray-600">
                  <FiMapPin className="w-4 h-4" />
                  <span className="text-sm">Las Vegas, Nevada</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <FiPhone className="w-4 h-4" />
                  <span className="text-sm">(702) 463-3008</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-amber-300/50 mt-8 pt-8 text-center">
            <p className="text-gray-600 text-sm">© 2025 Lotus Wisdom. All rights reserved. Ancient wisdom for modern healing. 📜🪷✨</p>
            <div className="mt-4 text-amber-600 text-xl">☯️ 🕉️ ⚕️ 📜 ☯️</div>
          </div>
        </div>
      </footer>
    </div>
  );
}