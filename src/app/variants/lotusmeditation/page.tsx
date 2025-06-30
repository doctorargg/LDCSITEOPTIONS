'use client';

import { useEffect, useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { FiMapPin, FiPhone, FiHeart, FiArrowRight, FiClock } from 'react-icons/fi';
import JourneySection from "@/components/JourneySection";
import PricingSection from "@/components/PricingSection";
import FeaturesSection from "@/components/FeaturesSection";
import DoctorSection from "@/components/DoctorSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogPreviewSection from "@/components/BlogPreviewSection";

export default function LotusMeditationVariant() {
  const [breathCount, setBreathCount] = useState(0);
  const [meditationTimer, setMeditationTimer] = useState(0);
  const [isBreathing, setIsBreathing] = useState(false);

  useEffect(() => {
    const breathingCycle = setInterval(() => {
      setIsBreathing(prev => !prev);
      setBreathCount(prev => prev + 1);
    }, 4000);

    const timerInterval = setInterval(() => {
      setMeditationTimer(prev => prev + 1);
    }, 1000);

    return () => {
      clearInterval(breathingCycle);
      clearInterval(timerInterval);
    };
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-100 relative overflow-hidden">
      {/* Meditation breathing indicator */}
      <div className="fixed top-10 right-10 z-40">
        <div className="bg-white/30 backdrop-blur-lg rounded-2xl p-4 border border-white/50">
          <div className="text-sm font-medium text-gray-700 mb-2">Meditation</div>
          <div className="text-2xl font-bold text-indigo-700">{formatTime(meditationTimer)}</div>
          <div className="text-xs text-gray-600 mt-1">{breathCount} breaths</div>
          <div className={`w-8 h-8 rounded-full mt-2 transition-all duration-4000 ${isBreathing ? 'bg-indigo-400 scale-125' : 'bg-indigo-200 scale-100'}`} />
        </div>
      </div>

      {/* Floating meditation particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-indigo-300 rounded-full opacity-40 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="relative z-50 px-6 py-4 bg-white/20 backdrop-blur-lg border-b border-indigo-200/30">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className={`transition-all duration-4000 ${isBreathing ? 'scale-110' : 'scale-100'}`}>
              <Image src="/images/LOGOTRANSPARENTFLOWERONLY1.png" alt="Lotus Meditation" width={50} height={50} />
            </div>
            <div>
              <div className="text-xl font-bold text-gray-800">Lotus Meditation</div>
              <div className="text-sm text-indigo-700">Mindful Wellness</div>
            </div>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-gray-700 hover:text-indigo-600 transition-colors">About</Link>
            <Link href="/services" className="text-gray-700 hover:text-indigo-600 transition-colors">Services</Link>
            <Link href="/variants" className="text-gray-700 hover:text-indigo-600 transition-colors text-sm">🎨 All Variants</Link>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1 text-indigo-700">
              <FiClock className="w-4 h-4" />
              <span className="text-sm font-medium">Meditating</span>
            </div>
            <Link href="https://app.elationemr.com/book/lotusdirectcare/" target="_blank" className="bg-indigo-500 hover:bg-indigo-400 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300">
              Begin Practice
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
                <div className={`w-3 h-3 rounded-full transition-all duration-4000 ${isBreathing ? 'bg-indigo-600 scale-125' : 'bg-indigo-400 scale-100'}`} />
                <span className="text-sm font-medium text-indigo-700 tracking-wide uppercase">Lotus Meditation</span>
              </div>
              
              <h1 className="text-6xl md:text-7xl font-bold text-gray-800 mb-6">
                Mindful
                <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Healthcare
                </span>
              </h1>
              
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                In the stillness of mindful presence, true healing begins. Dr. Rosenberg brings the ancient wisdom of 
                meditation to modern healthcare, creating space for deep listening, authentic connection, and conscious healing.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="https://app.elationemr.com/book/lotusdirectcare/" target="_blank" className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-xl flex items-center justify-center">
                  Enter Mindfulness
                  <FiArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link href="https://lotusdirectcare.hint.com/signup/" target="_blank" className="border-2 border-indigo-500 text-indigo-600 hover:bg-indigo-500 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
                  Join Our Sangha
                </Link>
              </div>

              {/* Mindfulness principles */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white/40 backdrop-blur-lg rounded-xl p-4 border border-indigo-200/50">
                  <div className="text-2xl mb-2">🧘‍♀️</div>
                  <div className="text-sm font-semibold text-gray-800">Present Moment</div>
                  <div className="text-xs text-gray-600">Here and now</div>
                </div>
                <div className="bg-white/40 backdrop-blur-lg rounded-xl p-4 border border-indigo-200/50">
                  <div className="text-2xl mb-2">💙</div>
                  <div className="text-sm font-semibold text-gray-800">Compassionate Care</div>
                  <div className="text-xs text-gray-600">With loving kindness</div>
                </div>
                <div className="bg-white/40 backdrop-blur-lg rounded-xl p-4 border border-indigo-200/50">
                  <div className="text-2xl mb-2">⚖️</div>
                  <div className="text-sm font-semibold text-gray-800">Balanced Approach</div>
                  <div className="text-xs text-gray-600">Middle way</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className={`relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-4000 ${isBreathing ? 'scale-105' : 'scale-100'}`}>
                <Image src="/Lotus Midjourney Flowers/lotus-homepage-new.png" alt="Lotus in meditation" width={600} height={600} className="w-full h-auto" />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-200/30 via-transparent to-purple-200/20" />
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
      <footer className="bg-indigo-100 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <Image src="/images/LOGOTRANSPARENTFLOWERONLY1.png" alt="Lotus Meditation" width={40} height={40} />
                <div>
                  <div className="text-xl font-bold text-gray-800">Lotus Meditation</div>
                  <div className="text-sm text-indigo-700">Mindful Wellness</div>
                </div>
              </div>
              <p className="text-gray-700 mb-4">Bringing the peace of meditation to every aspect of your healthcare journey.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Mindful Services</h4>
              <ul className="space-y-2">
                <li><Link href="/direct-primary-care" className="text-gray-600 hover:text-indigo-600 transition-colors">Mindful Primary Care</Link></li>
                <li><Link href="/functional-medicine" className="text-gray-600 hover:text-indigo-600 transition-colors">Conscious Medicine</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Connect Mindfully</h4>
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
          <div className="border-t border-indigo-200 mt-8 pt-8 text-center">
            <p className="text-gray-600 text-sm">© 2025 Lotus Meditation. All rights reserved. Be present, be well. 🧘‍♀️🪷💫</p>
          </div>
        </div>
      </footer>
    </div>
  );
}