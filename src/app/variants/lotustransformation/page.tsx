'use client';

import { useEffect, useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { FiMapPin, FiPhone, FiArrowRight, FiArrowUp, FiSeed } from 'react-icons/fi';
import JourneySection from "@/components/JourneySection";
import PricingSection from "@/components/PricingSection";
import FeaturesSection from "@/components/FeaturesSection";
import DoctorSection from "@/components/DoctorSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogPreviewSection from "@/components/BlogPreviewSection";

export default function LotusTransformationVariant() {
  const [growthStage, setGrowthStage] = useState(0);
  const [transformationProgress, setTransformationProgress] = useState(0);

  const stages = [
    { name: 'Seed', emoji: '🌱', color: 'from-amber-600 to-yellow-600' },
    { name: 'Sprout', emoji: '🌿', color: 'from-green-600 to-emerald-600' },
    { name: 'Growth', emoji: '🍃', color: 'from-emerald-600 to-green-700' },
    { name: 'Bud', emoji: '🔸', color: 'from-green-700 to-teal-600' },
    { name: 'Bloom', emoji: '🪷', color: 'from-pink-500 to-rose-600' }
  ];

  useEffect(() => {
    const transformationInterval = setInterval(() => {
      setGrowthStage(prev => (prev + 1) % stages.length);
      setTransformationProgress(prev => (prev + 2) % 101);
    }, 3000);

    return () => clearInterval(transformationInterval);
  }, [stages.length]);

  const currentStage = stages[growthStage];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-green-50 to-pink-50 relative overflow-hidden">
      {/* Transformation progress indicator */}
      <div className="fixed top-10 right-10 z-40">
        <div className="bg-white/30 backdrop-blur-lg rounded-2xl p-4 border border-white/50">
          <div className="text-sm font-medium text-gray-700 mb-2">Transformation</div>
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-2xl">{currentStage.emoji}</span>
            <span className="font-semibold text-gray-800">{currentStage.name}</span>
          </div>
          <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className={`h-full bg-gradient-to-r ${currentStage.color} transition-all duration-3000`}
              style={{ width: `${transformationProgress}%` }}
            />
          </div>
          <div className="text-xs text-gray-600 mt-1">{transformationProgress}% Complete</div>
        </div>
      </div>

      {/* Growing elements animation */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute transition-all duration-3000"
            style={{
              left: `${10 + i * 7}%`,
              bottom: `${Math.random() * 30}%`,
              transform: `scale(${0.5 + (transformationProgress / 100) * 1.5}) translateY(${-transformationProgress}px)`
            }}
          >
            <div className={`w-2 h-8 bg-gradient-to-t ${currentStage.color} rounded-full opacity-60`} />
          </div>
        ))}
      </div>

      {/* Navigation */}
      <nav className="relative z-50 px-6 py-4 bg-white/20 backdrop-blur-lg border-b border-green-200/30">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="transition-all duration-3000" style={{ transform: `scale(${1 + growthStage * 0.1})` }}>
              <Image src="/images/LOGOTRANSPARENTFLOWERONLY1.png" alt="Lotus Transformation" width={50} height={50} />
            </div>
            <div>
              <div className="text-xl font-bold text-gray-800">Lotus Transformation</div>
              <div className="text-sm text-green-700">Growing Wellness</div>
            </div>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-gray-700 hover:text-green-600 transition-colors">About</Link>
            <Link href="/services" className="text-gray-700 hover:text-green-600 transition-colors">Services</Link>
            <Link href="/variants" className="text-gray-700 hover:text-green-600 transition-colors text-sm">🎨 All Variants</Link>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1 text-green-700">
              <FiArrowUp className="w-4 h-4" />
              <span className="text-sm font-medium">Growing</span>
            </div>
            <Link href="https://app.elationemr.com/book/lotusdirectcare/" target="_blank" className={`bg-gradient-to-r ${currentStage.color} text-white px-6 py-2 rounded-full font-semibold transition-all duration-3000`}>
              Begin Growth
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
                <span className="text-2xl transition-all duration-3000">{currentStage.emoji}</span>
                <span className="text-sm font-medium text-green-700 tracking-wide uppercase">Lotus Transformation</span>
              </div>
              
              <h1 className="text-6xl md:text-7xl font-bold text-gray-800 mb-6">
                Transform
                <span className={`block bg-gradient-to-r ${currentStage.color} bg-clip-text text-transparent transition-all duration-3000`}>
                  & Grow
                </span>
              </h1>
              
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Every lotus begins as a seed in the mud, transforming through stages of growth until it blooms in radiant beauty. 
                Your health journey follows the same miraculous path - from where you are now to where you're meant to flourish.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="https://app.elationemr.com/book/lotusdirectcare/" target="_blank" className={`bg-gradient-to-r ${currentStage.color} text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-3000 hover:scale-105 shadow-xl flex items-center justify-center`}>
                  Start Your Growth
                  <FiArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link href="https://lotusdirectcare.hint.com/signup/" target="_blank" className="border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
                  Plant Your Seed
                </Link>
              </div>

              {/* Growth stages */}
              <div className="grid grid-cols-5 gap-2">
                {stages.map((stage, index) => (
                  <div key={index} className={`bg-white/40 backdrop-blur-lg rounded-xl p-3 border ${index === growthStage ? 'border-green-400 bg-white/60' : 'border-white/30'} transition-all duration-500`}>
                    <div className="text-lg mb-1 text-center">{stage.emoji}</div>
                    <div className="text-xs font-semibold text-gray-800 text-center">{stage.name}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image src="/Lotus Midjourney Flowers/lotus-homepage-new.png" alt="Lotus transformation journey" width={600} height={600} className="w-full h-auto transition-all duration-3000" style={{ filter: `hue-rotate(${growthStage * 30}deg) saturate(${1 + growthStage * 0.2})` }} />
                <div className={`absolute inset-0 bg-gradient-to-t ${currentStage.color.replace('from-', 'from-').replace('to-', 'to-')} opacity-20 transition-all duration-3000`} />
              </div>
              
              {/* Growth indicators around image */}
              <div className="absolute -top-8 -right-8">
                <div className={`w-16 h-16 bg-gradient-to-r ${currentStage.color} rounded-full opacity-70 animate-pulse transition-all duration-3000`} />
              </div>
              <div className="absolute -bottom-8 -left-8">
                <div className="w-12 h-12 bg-green-400 rounded-full opacity-60 animate-pulse flex items-center justify-center">
                  <FiSeed className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
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
      <footer className="bg-green-100 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <Image src="/images/LOGOTRANSPARENTFLOWERONLY1.png" alt="Lotus Transformation" width={40} height={40} />
                <div>
                  <div className="text-xl font-bold text-gray-800">Lotus Transformation</div>
                  <div className="text-sm text-green-700">Growing Wellness</div>
                </div>
              </div>
              <p className="text-gray-700 mb-4">Nurturing your growth from seed to full bloom, one stage at a time.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Growth Services</h4>
              <ul className="space-y-2">
                <li><Link href="/direct-primary-care" className="text-gray-600 hover:text-green-600 transition-colors">Growing Primary Care</Link></li>
                <li><Link href="/functional-medicine" className="text-gray-600 hover:text-green-600 transition-colors">Transformation Medicine</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Plant Your Roots</h4>
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
          <div className="border-t border-green-200 mt-8 pt-8 text-center">
            <p className="text-gray-600 text-sm">© 2025 Lotus Transformation. All rights reserved. Every seed becomes a flower. 🌱🪷✨</p>
          </div>
        </div>
      </footer>
    </div>
  );
}