'use client';

import { useEffect, useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { FiCloud, FiMapPin, FiPhone, FiHeart, FiStar, FiClock, FiArrowRight, FiMoon } from 'react-icons/fi';
import JourneySection from "@/components/JourneySection";
import PricingSection from "@/components/PricingSection";
import FeaturesSection from "@/components/FeaturesSection";
import DoctorSection from "@/components/DoctorSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogPreviewSection from "@/components/BlogPreviewSection";

export default function LotusDreamsVariant() {
  const [dreamPhase, setDreamPhase] = useState(0);
  const [floatingElements, setFloatingElements] = useState<Array<{id: number, x: number, y: number, size: number, delay: number}>>([]);
  const [starOpacity, setStarOpacity] = useState(0.3);

  useEffect(() => {
    // Generate floating dream elements
    const elements = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 0.5 + Math.random() * 1.5,
      delay: Math.random() * 5
    }));
    setFloatingElements(elements);

    // Dream phase cycling
    const phaseInterval = setInterval(() => {
      setDreamPhase(prev => (prev + 1) % 360);
    }, 100);

    // Twinkling stars
    const starInterval = setInterval(() => {
      setStarOpacity(0.3 + Math.random() * 0.7);
    }, 2000);

    return () => {
      clearInterval(phaseInterval);
      clearInterval(starInterval);
    };
  }, []);

  const getDreamColors = () => {
    const hue = (dreamPhase + 240) % 360;
    return {
      primary: `hsl(${hue}, 70%, 85%)`,
      secondary: `hsl(${(hue + 60) % 360}, 60%, 90%)`,
      accent: `hsl(${(hue + 120) % 360}, 80%, 80%)`
    };
  };

  const colors = getDreamColors();

  return (
    <div 
      className="min-h-screen transition-all duration-1000 relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, 
          ${colors.primary} 0%, 
          ${colors.secondary} 50%, 
          ${colors.accent} 100%)`
      }}
    >
      {/* Dreamy background particles */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Floating dream bubbles */}
        {floatingElements.map((element) => (
          <div
            key={element.id}
            className="absolute rounded-full bg-white/20 backdrop-blur-sm animate-pulse"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              width: `${element.size * 30}px`,
              height: `${element.size * 30}px`,
              animationDelay: `${element.delay}s`,
              animationDuration: `${3 + element.delay}s`,
              transform: `translateY(${Math.sin(dreamPhase * Math.PI / 180 + element.delay) * 20}px)`
            }}
          />
        ))}
        
        {/* Twinkling stars */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: starOpacity * Math.random(),
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Dreamy aurora effect */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(ellipse at ${50 + Math.sin(dreamPhase * Math.PI / 180) * 20}% ${50 + Math.cos(dreamPhase * Math.PI / 180) * 20}%, 
              rgba(255, 255, 255, 0.3) 0%, 
              transparent 70%)`
          }}
        />
      </div>

      {/* Floating dream lotus */}
      <div className="fixed top-20 right-20 pointer-events-none">
        <div 
          className="relative w-32 h-32 transition-all duration-1000"
          style={{
            transform: `rotate(${dreamPhase * 0.5}deg) scale(${1 + Math.sin(dreamPhase * Math.PI / 180) * 0.2})`,
            filter: 'blur(0.5px)'
          }}
        >
          <div className="absolute inset-0 bg-white/30 rounded-full animate-ping" style={{ animationDuration: '4s' }} />
          <div className="absolute inset-4 bg-white/20 rounded-full animate-ping" style={{ animationDuration: '3s', animationDelay: '1s' }} />
          <div className="absolute inset-8 bg-white/40 rounded-full animate-ping" style={{ animationDuration: '2s', animationDelay: '2s' }} />
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 px-6 py-4 bg-white/10 backdrop-blur-lg border-b border-white/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative">
              <Image
                src="/images/LOGOTRANSPARENTFLOWERONLY1.png"
                alt="Lotus Dreams"
                width={50}
                height={50}
                className="drop-shadow-lg filter blur-[0.5px]"
              />
              {/* Dreamy glow */}
              <div className="absolute inset-0 bg-white/30 rounded-full animate-pulse" />
            </div>
            <div>
              <div className="text-xl font-bold text-white">
                Lotus Dreams
              </div>
              <div className="text-sm text-white/80">
                Ethereal Wellness
              </div>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-white/90 hover:text-white transition-colors">About</Link>
            <Link href="/services" className="text-white/90 hover:text-white transition-colors">Services</Link>
            <Link href="/pricing" className="text-white/90 hover:text-white transition-colors">Pricing</Link>
            <Link href="/blog" className="text-white/90 hover:text-white transition-colors">Blog</Link>
            <Link href="/contact" className="text-white/90 hover:text-white transition-colors">Contact</Link>
            <Link href="/variants" className="text-white/90 hover:text-white transition-colors text-sm">
              🎨 All Variants
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1 text-white/80">
              <FiCloud className="w-4 h-4" />
              <span className="text-sm font-medium">Dreaming</span>
            </div>
            <Link
              href="https://app.elationemr.com/book/lotusdirectcare/"
              target="_blank"
              className="bg-white/20 hover:bg-white/30 text-white border border-white/30 px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105 backdrop-blur-lg"
            >
              Enter Dreams
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
                <FiMoon className="w-6 h-6 text-white/80" />
                <span className="text-sm font-medium text-white/70 tracking-wide uppercase">
                  Lotus Dreams
                </span>
              </div>
              
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
                Dream of
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
                  Perfect Health
                </span>
              </h1>
              
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                In the ethereal realm where dreams meet reality, your wellness journey unfolds like a beautiful vision. 
                Dr. Rosenberg guides you through the misty landscapes of healing, where every moment feels like 
                floating through clouds of pure care and understanding.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="https://app.elationemr.com/book/lotusdirectcare/"
                  target="_blank"
                  className="bg-white/20 hover:bg-white/30 text-white border border-white/30 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-xl flex items-center justify-center backdrop-blur-lg"
                >
                  Enter the Dream
                  <FiArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="https://lotusdirectcare.hint.com/signup/"
                  target="_blank"
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/40 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center backdrop-blur-lg"
                >
                  Join Our Vision
                </Link>
              </div>

              {/* Dreamy feature cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20">
                  <FiCloud className="w-6 h-6 text-white/80 mb-2" />
                  <div className="text-sm font-semibold text-white">Ethereal Care</div>
                  <div className="text-xs text-white/70">Beyond reality</div>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20">
                  <FiHeart className="w-6 h-6 text-pink-300 mb-2" />
                  <div className="text-sm font-semibold text-white">Gentle Touch</div>
                  <div className="text-xs text-white/70">Soft healing</div>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20">
                  <FiStar className="w-6 h-6 text-yellow-300 mb-2" />
                  <div className="text-sm font-semibold text-white">Magical Results</div>
                  <div className="text-xs text-white/70">Dreams come true</div>
                </div>
              </div>
            </div>

            <div className="relative">
              {/* Main dreamy image */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/Lotus Midjourney Flowers/lotus-homepage-new.png"
                  alt="Lotus in dreamy ethereal light"
                  width={600}
                  height={600}
                  className="w-full h-auto filter blur-[0.5px] transition-all duration-1000"
                  style={{ 
                    filter: `blur(0.5px) brightness(1.2) contrast(0.9) saturate(0.8)`,
                  }}
                />
                
                {/* Dreamy overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-white/10" />
                
                {/* Floating dream particles around image */}
                <div className="absolute -inset-8">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-4 h-4 bg-white/30 rounded-full animate-ping"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 3}s`,
                        animationDuration: `${2 + Math.random() * 2}s`
                      }}
                    />
                  ))}
                </div>
              </div>
              
              {/* Floating dream elements */}
              <div className="absolute -top-8 -right-8">
                <div className="w-16 h-16 bg-white/20 rounded-full backdrop-blur-lg animate-pulse" />
              </div>
              <div className="absolute -bottom-8 -left-8">
                <div className="w-12 h-12 bg-white/30 rounded-full backdrop-blur-lg animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dream Quote Section */}
      <section className="py-16 bg-white/10 backdrop-blur-lg">
        <div className="max-w-4xl mx-auto text-center px-6">
          <FiCloud className="w-12 h-12 text-white/80 mx-auto mb-6" />
          <blockquote className="text-2xl md:text-3xl text-white italic mb-6">
            "In the gentle mist between sleep and waking, where dreams caress reality, 
            true healing begins. Let us guide you through this ethereal journey to wellness."
          </blockquote>
          <cite className="text-lg text-white/80">
            - Dr. Aaron Rosenberg, Lotus Dreams
          </cite>
        </div>
      </section>

      {/* Dreamy sections */}
      <div className="space-y-0 relative">
        {/* Floating dream particles throughout sections */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 3}s`,
                transform: `translateY(${Math.sin(dreamPhase * Math.PI / 180 + i) * 10}px)`
              }}
            />
          ))}
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

      {/* Dreamy Footer */}
      <footer className="bg-white/10 backdrop-blur-lg py-12 relative border-t border-white/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative">
                  <Image
                    src="/images/LOGOTRANSPARENTFLOWERONLY1.png"
                    alt="Lotus Dreams"
                    width={40}
                    height={40}
                    className="filter blur-[0.5px]"
                  />
                  <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse" />
                </div>
                <div>
                  <div className="text-xl font-bold text-white">
                    Lotus Dreams
                  </div>
                  <div className="text-sm text-white/80">
                    Ethereal Wellness
                  </div>
                </div>
              </div>
              <p className="text-white/90 mb-4">
                Where healthcare meets dreams, and wellness becomes a beautiful vision floating on clouds of care.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Dream Services</h4>
              <ul className="space-y-2">
                <li><Link href="/direct-primary-care" className="text-white/80 hover:text-white transition-colors">Ethereal Primary Care</Link></li>
                <li><Link href="/functional-medicine" className="text-white/80 hover:text-white transition-colors">Mystical Medicine</Link></li>
                <li><Link href="/ketamine-therapy" className="text-white/80 hover:text-white transition-colors">Dream Therapy</Link></li>
                <li><Link href="/prp-injections" className="text-white/80 hover:text-white transition-colors">Celestial Healing</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Reach Our Dreams</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-white/80">
                  <FiMapPin className="w-4 h-4" />
                  <span className="text-sm">Las Vegas, Nevada</span>
                </div>
                <div className="flex items-center space-x-2 text-white/80">
                  <FiPhone className="w-4 h-4" />
                  <span className="text-sm">(702) 463-3008</span>
                </div>
                <div className="text-sm text-white/60 italic">
                  "Where dreams meet healing"
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-white/70 text-sm">
              © 2025 Lotus Dreams. All rights reserved. May your wellness dreams become beautiful reality.
            </p>
            <div className="mt-4 flex justify-center space-x-4 text-2xl">
              <span className="animate-pulse">☁️</span>
              <span className="animate-pulse" style={{ animationDelay: '0.5s' }}>🌙</span>
              <span className="animate-pulse" style={{ animationDelay: '1s' }}>⭐</span>
              <span className="animate-pulse" style={{ animationDelay: '1.5s' }}>🪷</span>
              <span className="animate-pulse" style={{ animationDelay: '2s' }}>✨</span>
            </div>
          </div>
        </div>

        {/* Dream mist at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white/10 to-transparent pointer-events-none" />
      </footer>
    </div>
  );
}