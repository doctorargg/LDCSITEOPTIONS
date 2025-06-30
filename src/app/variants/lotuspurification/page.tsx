'use client';

import { useEffect, useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { FiDroplet, FiMapPin, FiPhone, FiHeart, FiStar, FiClock, FiArrowRight, FiSun, FiShield } from 'react-icons/fi';
import JourneySection from "@/components/JourneySection";
import PricingSection from "@/components/PricingSection";
import FeaturesSection from "@/components/FeaturesSection";
import DoctorSection from "@/components/DoctorSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogPreviewSection from "@/components/BlogPreviewSection";

export default function LotusPurificationVariant() {
  const [purityLevel, setPurityLevel] = useState(0);
  const [cleansingWave, setCleansingWave] = useState(0);
  const [lightBeams, setLightBeams] = useState<Array<{id: number, intensity: number, angle: number}>>([]);

  useEffect(() => {
    // Purity level cycling (0-100)
    const purityInterval = setInterval(() => {
      setPurityLevel(prev => (prev + 1) % 101);
    }, 100);

    // Cleansing wave animation
    const waveInterval = setInterval(() => {
      setCleansingWave(prev => (prev + 2) % 360);
    }, 50);

    // Generate purifying light beams
    const beams = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      intensity: 0.3 + Math.random() * 0.7,
      angle: i * 30
    }));
    setLightBeams(beams);

    // Update beam intensity
    const beamInterval = setInterval(() => {
      setLightBeams(prev => 
        prev.map(beam => ({
          ...beam,
          intensity: 0.3 + Math.random() * 0.7
        }))
      );
    }, 1000);

    return () => {
      clearInterval(purityInterval);
      clearInterval(waveInterval);
      clearInterval(beamInterval);
    };
  }, []);

  const getPurityColor = () => {
    if (purityLevel < 33) return 'from-blue-200 to-cyan-300';
    if (purityLevel < 66) return 'from-cyan-200 to-white';
    return 'from-white to-blue-100';
  };

  const getPurityText = () => {
    if (purityLevel < 33) return 'Cleansing';
    if (purityLevel < 66) return 'Purifying';
    return 'Pure';
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${getPurityColor()} transition-all duration-1000 relative overflow-hidden`}>
      {/* Purifying light rays */}
      <div className="fixed inset-0 pointer-events-none">
        {lightBeams.map((beam) => (
          <div
            key={beam.id}
            className="absolute w-1 bg-gradient-to-b from-transparent via-white to-transparent opacity-40"
            style={{
              height: '100vh',
              left: '50%',
              top: 0,
              transformOrigin: '0 0',
              transform: `rotate(${beam.angle + cleansingWave * 0.5}deg) translateX(-50%)`,
              opacity: beam.intensity * 0.6
            }}
          />
        ))}
      </div>

      {/* Cleansing particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `purify ${3 + Math.random() * 2}s linear infinite`,
              animationDelay: `${Math.random() * 3}s`,
              transform: `translateY(${Math.sin(cleansingWave * Math.PI / 180 + i) * 20}px)`
            }}
          />
        ))}
      </div>

      {/* Purity indicator */}
      <div className="fixed top-20 right-20 pointer-events-none">
        <div className="bg-white/30 backdrop-blur-lg rounded-2xl p-4 border border-white/50">
          <div className="text-sm font-medium text-gray-700 mb-2">Purity Level</div>
          <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-400 to-white transition-all duration-300"
              style={{ width: `${purityLevel}%` }}
            />
          </div>
          <div className="text-xs text-gray-600 mt-1">{purityLevel}% {getPurityText()}</div>
        </div>
      </div>

      {/* Floating lotus petals (pure white) */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
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
              className="w-4 h-4 bg-white rounded-full opacity-70 shadow-lg"
              style={{
                clipPath: 'ellipse(50% 80% at 50% 20%)',
                filter: 'blur(0.5px)'
              }}
            />
          </div>
        ))}
      </div>

      {/* Navigation */}
      <nav className="relative z-50 px-6 py-4 bg-white/30 backdrop-blur-lg border-b border-white/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative">
              <Image
                src="/images/LOGOTRANSPARENTFLOWERONLY1.png"
                alt="Lotus Purification"
                width={50}
                height={50}
                className="drop-shadow-lg filter brightness-110"
              />
              {/* Purity aura */}
              <div className="absolute inset-0 bg-white rounded-full opacity-30 animate-pulse" />
              <div className="absolute inset-2 bg-white rounded-full opacity-20 animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
            <div>
              <div className="text-xl font-bold text-gray-800">
                Lotus Purification
              </div>
              <div className="text-sm text-gray-700">
                Pure Wellness Rising
              </div>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</Link>
            <Link href="/pricing" className="text-gray-700 hover:text-blue-600 transition-colors">Pricing</Link>
            <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors">Blog</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
            <Link href="/variants" className="text-gray-700 hover:text-blue-600 transition-colors text-sm">
              🎨 All Variants
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1 text-gray-700">
              <FiShield className="w-4 h-4" />
              <span className="text-sm font-medium">{getPurityText()}</span>
            </div>
            <Link
              href="https://app.elationemr.com/book/lotusdirectcare/"
              target="_blank"
              className="bg-white/50 hover:bg-white/70 text-gray-800 border border-white/60 px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg backdrop-blur-lg"
            >
              Begin Purification
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
                <FiDroplet className="w-6 h-6 text-blue-600" />
                <span className="text-sm font-medium text-gray-700 tracking-wide uppercase">
                  Lotus Purification
                </span>
              </div>
              
              <h1 className="text-6xl md:text-7xl font-bold text-gray-800 mb-6">
                Rise
                <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-white bg-clip-text text-transparent">
                  Pure & Clean
                </span>
              </h1>
              
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Like the sacred lotus that emerges pristine from muddy waters, your health journey is one of purification. 
                Dr. Rosenberg helps you cleanse away what no longer serves you, rising to a state of perfect wellness 
                and clarity that shines with pure, radiant health.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="https://app.elationemr.com/book/lotusdirectcare/"
                  target="_blank"
                  className="bg-gradient-to-r from-blue-500 via-cyan-400 to-white hover:from-blue-400 hover:via-cyan-300 hover:to-blue-50 text-gray-800 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-xl flex items-center justify-center"
                >
                  Start Your Cleanse
                  <FiArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="https://lotusdirectcare.hint.com/signup/"
                  target="_blank"
                  className="border-2 border-blue-400 text-blue-700 hover:bg-blue-100 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center backdrop-blur-lg"
                >
                  Join Pure Living
                </Link>
              </div>

              {/* Purification principles cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white/50 backdrop-blur-lg rounded-xl p-4 border border-white/60 shadow-lg">
                  <FiDroplet className="w-6 h-6 text-blue-600 mb-2" />
                  <div className="text-sm font-semibold text-gray-800">Pure Intentions</div>
                  <div className="text-xs text-gray-600">Clean motives</div>
                </div>
                <div className="bg-white/50 backdrop-blur-lg rounded-xl p-4 border border-white/60 shadow-lg">
                  <FiSun className="w-6 h-6 text-yellow-500 mb-2" />
                  <div className="text-sm font-semibold text-gray-800">Cleansing Light</div>
                  <div className="text-xs text-gray-600">Illuminating health</div>
                </div>
                <div className="bg-white/50 backdrop-blur-lg rounded-xl p-4 border border-white/60 shadow-lg">
                  <FiShield className="w-6 h-6 text-green-500 mb-2" />
                  <div className="text-sm font-semibold text-gray-800">Protected Purity</div>
                  <div className="text-xs text-gray-600">Maintained wellness</div>
                </div>
              </div>
            </div>

            <div className="relative">
              {/* Main purification image */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/Lotus Midjourney Flowers/lotus-homepage-new.png"
                  alt="Pure lotus rising from crystal waters"
                  width={600}
                  height={600}
                  className="w-full h-auto filter brightness-110 contrast-105"
                />
                
                {/* Purification overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-blue-100/20" />
                
                {/* Cleansing rays */}
                <div className="absolute inset-0">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-0.5 h-full bg-gradient-to-b from-transparent via-white to-transparent opacity-40"
                      style={{
                        left: `${20 + i * 12}%`,
                        transform: `skew(${i % 2 === 0 ? '10deg' : '-10deg'})`,
                        animationDelay: `${i * 0.5}s`
                      }}
                    />
                  ))}
                </div>
              </div>
              
              {/* Floating pure elements */}
              <div className="absolute -top-8 -right-8">
                <div className="w-16 h-16 bg-white rounded-full opacity-80 shadow-lg animate-pulse">
                  <div className="w-full h-full rounded-full border-4 border-blue-200" />
                </div>
              </div>
              <div className="absolute -bottom-8 -left-8">
                <div className="w-12 h-12 bg-gradient-to-r from-white to-blue-100 rounded-full opacity-70 shadow-md animate-pulse" style={{ animationDelay: '1s' }}>
                  <div className="w-full h-full rounded-full border-2 border-cyan-200" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Purification Philosophy Section */}
      <section className="py-16 bg-white/40 backdrop-blur-lg">
        <div className="max-w-4xl mx-auto text-center px-6">
          <div className="w-16 h-16 mx-auto mb-6 bg-white rounded-full shadow-lg flex items-center justify-center">
            <FiDroplet className="w-8 h-8 text-blue-600" />
          </div>
          <blockquote className="text-2xl md:text-3xl text-gray-800 italic mb-6">
            "From the depths of muddy waters, the lotus rises pure and untainted. 
            So too shall your health emerge - cleansed, renewed, and radiantly whole."
          </blockquote>
          <cite className="text-lg text-gray-600">
            - Dr. Aaron Rosenberg, Lotus Purification
          </cite>
          
          {/* Purity progress indicator */}
          <div className="mt-8 max-w-md mx-auto">
            <div className="bg-white/60 rounded-full p-4 backdrop-blur-lg">
              <div className="text-sm font-medium text-gray-700 mb-2">Your Journey to Purity</div>
              <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-400 via-cyan-300 to-white transition-all duration-1000"
                  style={{ width: `${purityLevel}%` }}
                />
              </div>
              <div className="text-xs text-gray-600 mt-2">{purityLevel}% Complete</div>
            </div>
          </div>
        </div>
      </section>

      {/* Clean sections with purification themes */}
      <div className="space-y-0 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div 
            className="w-full h-full opacity-10"
            style={{
              background: `repeating-linear-gradient(${cleansingWave}deg,
                transparent,
                transparent 50px,
                rgba(59, 130, 246, 0.1) 52px,
                rgba(59, 130, 246, 0.1) 54px
              )`
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

      {/* Pure Footer */}
      <footer className="bg-white/60 backdrop-blur-lg py-12 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative">
                  <Image
                    src="/images/LOGOTRANSPARENTFLOWERONLY1.png"
                    alt="Lotus Purification"
                    width={40}
                    height={40}
                    className="filter brightness-110"
                  />
                  <div className="absolute inset-0 bg-white rounded-full opacity-30 animate-pulse" />
                </div>
                <div>
                  <div className="text-xl font-bold text-gray-800">
                    Lotus Purification
                  </div>
                  <div className="text-sm text-gray-700">
                    Pure Wellness Rising
                  </div>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Where healthcare meets purity - cleansing away the old, rising to embrace the new, radiantly healthy you.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Pure Services</h4>
              <ul className="space-y-2">
                <li><Link href="/direct-primary-care" className="text-gray-600 hover:text-blue-600 transition-colors">Pure Primary Care</Link></li>
                <li><Link href="/functional-medicine" className="text-gray-600 hover:text-blue-600 transition-colors">Cleansing Medicine</Link></li>
                <li><Link href="/ketamine-therapy" className="text-gray-600 hover:text-blue-600 transition-colors">Purifying Therapy</Link></li>
                <li><Link href="/prp-injections" className="text-gray-600 hover:text-blue-600 transition-colors">Clean Regeneration</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Pure Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-gray-600">
                  <FiMapPin className="w-4 h-4" />
                  <span className="text-sm">Las Vegas, Nevada</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <FiPhone className="w-4 h-4" />
                  <span className="text-sm">(702) 463-3008</span>
                </div>
                <div className="text-sm text-blue-600 font-medium">
                  Rising Pure ✨
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-blue-200/50 mt-8 pt-8 text-center">
            <p className="text-gray-600 text-sm">
              © 2025 Lotus Purification. All rights reserved. Pure intentions, clean methods, radiant results.
            </p>
            <div className="mt-4 text-blue-500 text-2xl">
              <span className="animate-pulse">💧</span>
              <span className="animate-pulse mx-2" style={{ animationDelay: '0.5s' }}>🪷</span>
              <span className="animate-pulse" style={{ animationDelay: '1s' }}>✨</span>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes purify {
          0% { 
            transform: translateY(100vh) scale(0); 
            opacity: 0; 
          }
          10% { 
            opacity: 1; 
          }
          90% { 
            opacity: 1; 
          }
          100% { 
            transform: translateY(-100px) scale(1); 
            opacity: 0; 
          }
        }
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