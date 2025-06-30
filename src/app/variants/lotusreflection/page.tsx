'use client';

import { useEffect, useRef, useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { FiDroplet, FiMapPin, FiPhone, FiHeart, FiStar, FiClock, FiArrowRight, FiWaves } from 'react-icons/fi';
import JourneySection from "@/components/JourneySection";
import PricingSection from "@/components/PricingSection";
import FeaturesSection from "@/components/FeaturesSection";
import DoctorSection from "@/components/DoctorSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogPreviewSection from "@/components/BlogPreviewSection";

export default function LotusReflectionVariant() {
  const [ripples, setRipples] = useState<Array<{id: number, x: number, y: number}>>([]);
  const [reflectionOffset, setReflectionOffset] = useState(0);
  const rippleIdRef = useRef(0);

  useEffect(() => {
    // Auto-generate ripples
    const generateRipple = () => {
      const newRipple = {
        id: rippleIdRef.current++,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight
      };
      
      setRipples(prev => [...prev, newRipple]);
      
      // Remove ripple after animation
      setTimeout(() => {
        setRipples(prev => prev.filter(r => r.id !== newRipple.id));
      }, 3000);
    };

    const rippleInterval = setInterval(generateRipple, 2000);

    // Reflection wave animation
    const reflectionAnimation = () => {
      setReflectionOffset(prev => (prev + 1) % 360);
    };
    
    const reflectionInterval = setInterval(reflectionAnimation, 100);

    // Click ripples
    const handleClick = (e: MouseEvent) => {
      const newRipple = {
        id: rippleIdRef.current++,
        x: e.clientX,
        y: e.clientY
      };
      
      setRipples(prev => [...prev, newRipple]);
      
      setTimeout(() => {
        setRipples(prev => prev.filter(r => r.id !== newRipple.id));
      }, 3000);
    };

    window.addEventListener('click', handleClick);

    return () => {
      clearInterval(rippleInterval);
      clearInterval(reflectionInterval);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 via-blue-50 to-teal-100 relative overflow-hidden">
      {/* Water surface animation */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-100/30 to-cyan-200/50"
          style={{
            background: `linear-gradient(180deg, 
              transparent 0%, 
              rgba(6, 182, 212, 0.1) 50%, 
              rgba(20, 184, 166, 0.2) 100%),
              repeating-linear-gradient(90deg,
                transparent,
                transparent 20px,
                rgba(6, 182, 212, 0.1) 22px,
                rgba(6, 182, 212, 0.1) 24px
              )`,
            transform: `translateX(${Math.sin(reflectionOffset * Math.PI / 180) * 10}px)`
          }}
        />
      </div>

      {/* Ripple effects */}
      {ripples.map(ripple => (
        <div
          key={ripple.id}
          className="fixed pointer-events-none animate-ping"
          style={{
            left: ripple.x - 25,
            top: ripple.y - 25,
            width: 50,
            height: 50,
            borderRadius: '50%',
            border: '2px solid rgba(6, 182, 212, 0.5)',
            animationDuration: '3s'
          }}
        />
      ))}

      {/* Floating water elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-cyan-300 rounded-full opacity-40 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="relative z-50 px-6 py-4 bg-white/20 backdrop-blur-lg border-b border-cyan-200/30">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative">
              <Image
                src="/images/LOGOTRANSPARENTFLOWERONLY1.png"
                alt="Lotus Direct Care"
                width={50}
                height={50}
                className="drop-shadow-lg"
              />
              {/* Reflection effect */}
              <Image
                src="/images/LOGOTRANSPARENTFLOWERONLY1.png"
                alt="Lotus Direct Care"
                width={50}
                height={50}
                className="absolute top-12 opacity-30 scale-y-[-1] blur-sm"
              />
            </div>
            <div>
              <div className="text-xl font-bold text-gray-800">
                Lotus Direct Care
              </div>
              <div className="text-sm text-cyan-700">
                Reflecting Wellness
              </div>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-gray-700 hover:text-cyan-600 transition-colors">About</Link>
            <Link href="/services" className="text-gray-700 hover:text-cyan-600 transition-colors">Services</Link>
            <Link href="/pricing" className="text-gray-700 hover:text-cyan-600 transition-colors">Pricing</Link>
            <Link href="/blog" className="text-gray-700 hover:text-cyan-600 transition-colors">Blog</Link>
            <Link href="/contact" className="text-gray-700 hover:text-cyan-600 transition-colors">Contact</Link>
            <Link href="/variants" className="text-gray-700 hover:text-cyan-600 transition-colors text-sm">
              🎨 All Variants
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1 text-cyan-700">
              <FiWaves className="w-4 h-4" />
              <span className="text-sm font-medium">Reflection</span>
            </div>
            <Link
              href="https://app.elationemr.com/book/lotusdirectcare/"
              target="_blank"
              className="bg-cyan-500 hover:bg-cyan-400 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Book Now
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
                <FiDroplet className="w-6 h-6 text-cyan-600" />
                <span className="text-sm font-medium text-cyan-700 tracking-wide uppercase">
                  Lotus Reflection
                </span>
              </div>
              
              <h1 className="text-6xl md:text-7xl font-bold text-gray-800 mb-6">
                Reflect on
                <span className="block bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                  Your Health
                </span>
              </h1>
              
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Like the perfect reflection of a lotus on still water, true wellness comes from the clarity 
                of understanding yourself. Dr. Rosenberg provides the calm, clear perspective you need 
                to see your health journey with perfect clarity.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="https://app.elationemr.com/book/lotusdirectcare/"
                  target="_blank"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-xl flex items-center justify-center"
                >
                  See Your Reflection
                  <FiArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="https://lotusdirectcare.hint.com/signup/"
                  target="_blank"
                  className="border-2 border-cyan-500 text-cyan-600 hover:bg-cyan-500 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center"
                >
                  Become a Member
                </Link>
              </div>

              {/* Reflection info cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white/40 backdrop-blur-lg rounded-xl p-4 border border-cyan-200/50">
                  <FiHeart className="w-6 h-6 text-red-500 mb-2" />
                  <div className="text-sm font-semibold text-gray-800">Clear Perspective</div>
                  <div className="text-xs text-gray-600">See yourself clearly</div>
                </div>
                <div className="bg-white/40 backdrop-blur-lg rounded-xl p-4 border border-cyan-200/50">
                  <FiClock className="w-6 h-6 text-blue-500 mb-2" />
                  <div className="text-sm font-semibold text-gray-800">Thoughtful Care</div>
                  <div className="text-xs text-gray-600">Time to reflect</div>
                </div>
                <div className="bg-white/40 backdrop-blur-lg rounded-xl p-4 border border-cyan-200/50">
                  <FiStar className="w-6 h-6 text-yellow-500 mb-2" />
                  <div className="text-sm font-semibold text-gray-800">Perfect Mirror</div>
                  <div className="text-xs text-gray-600">True understanding</div>
                </div>
              </div>
            </div>

            <div className="relative">
              {/* Main image */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/Lotus Midjourney Flowers/lotus-homepage-new.png"
                  alt="Lotus reflecting on water"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
                
                {/* Water reflection overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-200/50 via-transparent to-transparent" />
              </div>
              
              {/* Reflection image */}
              <div className="absolute -bottom-12 left-0 right-0 overflow-hidden rounded-b-2xl opacity-40">
                <Image
                  src="/Lotus Midjourney Flowers/lotus-homepage-new.png"
                  alt="Lotus reflection"
                  width={600}
                  height={600}
                  className="w-full h-24 object-cover scale-y-[-1] blur-sm"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyan-100" />
              </div>
              
              {/* Floating water droplets */}
              <div className="absolute -top-8 -right-8">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-70 animate-pulse" />
              </div>
              <div className="absolute -bottom-8 -left-8">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reflection Quote Section */}
      <section className="py-16 bg-white/30 backdrop-blur-lg">
        <div className="max-w-4xl mx-auto text-center px-6">
          <FiDroplet className="w-12 h-12 text-cyan-600 mx-auto mb-6" />
          <blockquote className="text-2xl md:text-3xl text-gray-800 italic mb-6">
            "In the stillness of the water, the lotus sees its true beauty. 
            In the clarity of our care, you'll discover your true wellness."
          </blockquote>
          <cite className="text-lg text-gray-600">
            - Dr. Aaron Rosenberg, Lotus Direct Care
          </cite>
        </div>
      </section>

      {/* Mirror Effect Sections */}
      <div className="space-y-0 relative">
        {/* Add subtle water effects to sections */}
        <div className="absolute inset-0 pointer-events-none">
          <div 
            className="w-full h-full opacity-10"
            style={{
              background: `repeating-linear-gradient(0deg,
                transparent,
                transparent 100px,
                rgba(6, 182, 212, 0.1) 102px,
                rgba(6, 182, 212, 0.1) 104px
              )`,
              transform: `translateY(${Math.sin(reflectionOffset * Math.PI / 90) * 5}px)`
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

      {/* Footer with reflection */}
      <footer className="bg-gradient-to-b from-cyan-100 to-blue-200 py-12 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative">
                  <Image
                    src="/images/LOGOTRANSPARENTFLOWERONLY1.png"
                    alt="Lotus Direct Care"
                    width={40}
                    height={40}
                  />
                  {/* Small reflection */}
                  <Image
                    src="/images/LOGOTRANSPARENTFLOWERONLY1.png"
                    alt="Lotus Direct Care"
                    width={40}
                    height={40}
                    className="absolute top-8 opacity-20 scale-y-[-1] blur-sm"
                  />
                </div>
                <div>
                  <div className="text-xl font-bold text-gray-800">
                    Lotus Direct Care
                  </div>
                  <div className="text-sm text-cyan-700">
                    Reflecting Wellness
                  </div>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Experience healthcare that reflects your true needs - clear, honest, and always focused on your wellbeing.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Services</h4>
              <ul className="space-y-2">
                <li><Link href="/direct-primary-care" className="text-gray-600 hover:text-cyan-600 transition-colors">Direct Primary Care</Link></li>
                <li><Link href="/functional-medicine" className="text-gray-600 hover:text-cyan-600 transition-colors">Functional Medicine</Link></li>
                <li><Link href="/ketamine-therapy" className="text-gray-600 hover:text-cyan-600 transition-colors">Ketamine Therapy</Link></li>
                <li><Link href="/prp-injections" className="text-gray-600 hover:text-cyan-600 transition-colors">PRP Injections</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Contact</h4>
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

          <div className="border-t border-cyan-300/50 mt-8 pt-8 text-center">
            <p className="text-gray-600 text-sm">
              © 2025 Lotus Direct Care. All rights reserved. Reflecting true wellness in every interaction.
            </p>
          </div>
        </div>

        {/* Footer reflection effect */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-cyan-300/30 to-transparent pointer-events-none" />
      </footer>
    </div>
  );
}