'use client';

import { useEffect, useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { FiSunrise, FiSun, FiMapPin, FiPhone, FiClock, FiHeart, FiStar, FiArrowRight } from 'react-icons/fi';
import JourneySection from "@/components/JourneySection";
import PricingSection from "@/components/PricingSection";
import FeaturesSection from "@/components/FeaturesSection";
import DoctorSection from "@/components/DoctorSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogPreviewSection from "@/components/BlogPreviewSection";

export default function LotusAwakeningVariant() {
  const [timeOfDay, setTimeOfDay] = useState<'dawn' | 'morning' | 'day'>('dawn');
  const [lightIntensity, setLightIntensity] = useState(0);

  useEffect(() => {
    const timeSequence = () => {
      // Dawn phase (0-8 seconds)
      setTimeOfDay('dawn');
      let intensity = 0;
      const dawnInterval = setInterval(() => {
        intensity += 2;
        setLightIntensity(intensity);
        if (intensity >= 20) {
          clearInterval(dawnInterval);
          
          // Morning phase (8-16 seconds)
          setTimeout(() => {
            setTimeOfDay('morning');
            let morningIntensity = 20;
            const morningInterval = setInterval(() => {
              morningIntensity += 5;
              setLightIntensity(morningIntensity);
              if (morningIntensity >= 60) {
                clearInterval(morningInterval);
                
                // Day phase (16-24 seconds)
                setTimeout(() => {
                  setTimeOfDay('day');
                  let dayIntensity = 60;
                  const dayInterval = setInterval(() => {
                    dayIntensity += 10;
                    setLightIntensity(dayIntensity);
                    if (dayIntensity >= 100) {
                      clearInterval(dayInterval);
                    }
                  }, 500);
                }, 2000);
              }
            }, 500);
          }, 2000);
        }
      }, 400);
    };

    timeSequence();
    const cycleInterval = setInterval(timeSequence, 24000);

    return () => clearInterval(cycleInterval);
  }, []);

  const getBackgroundGradient = () => {
    switch(timeOfDay) {
      case 'dawn':
        return 'from-purple-900 via-pink-800 to-orange-700';
      case 'morning':
        return 'from-orange-400 via-yellow-400 to-pink-300';
      case 'day':
        return 'from-blue-400 via-yellow-300 to-orange-300';
      default:
        return 'from-purple-900 via-pink-800 to-orange-700';
    }
  };

  const getTextColor = () => {
    return timeOfDay === 'day' ? 'text-gray-800' : 'text-white';
  };

  const getLotusOpacity = () => {
    return Math.min(lightIntensity / 100, 1);
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${getBackgroundGradient()} transition-all duration-1000`}>
      {/* Floating light particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-yellow-300 rounded-full opacity-60 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
              opacity: lightIntensity / 200
            }}
          />
        ))}
      </div>

      {/* Lotus awakening animation */}
      <div className="fixed top-20 right-20 pointer-events-none">
        <div 
          className="relative transition-all duration-2000"
          style={{
            transform: `scale(${0.5 + getLotusOpacity() * 0.5}) rotate(${lightIntensity * 3.6}deg)`,
            opacity: getLotusOpacity()
          }}
        >
          <div className="w-32 h-32 bg-gradient-to-r from-pink-300 to-yellow-300 rounded-full opacity-20 animate-pulse" />
          <div className="absolute inset-4 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '0.5s' }} />
          <div className="absolute inset-8 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative">
              <Image
                src="/images/LOGOTRANSPARENTFLOWERONLY1.png"
                alt="Lotus Direct Care"
                width={50}
                height={50}
                className="transition-all duration-500"
                style={{ filter: `brightness(${1 + lightIntensity / 100})` }}
              />
            </div>
            <div>
              <div className={`text-xl font-bold ${getTextColor()} transition-colors duration-1000`}>
                Lotus Direct Care
              </div>
              <div className={`text-sm ${timeOfDay === 'day' ? 'text-gray-600' : 'text-pink-200'} transition-colors duration-1000`}>
                Awakening to Wellness
              </div>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className={`${getTextColor()} hover:text-yellow-300 transition-colors`}>About</Link>
            <Link href="/services" className={`${getTextColor()} hover:text-yellow-300 transition-colors`}>Services</Link>
            <Link href="/pricing" className={`${getTextColor()} hover:text-yellow-300 transition-colors`}>Pricing</Link>
            <Link href="/blog" className={`${getTextColor()} hover:text-yellow-300 transition-colors`}>Blog</Link>
            <Link href="/contact" className={`${getTextColor()} hover:text-yellow-300 transition-colors`}>Contact</Link>
            <Link href="/variants" className={`${getTextColor()} hover:text-yellow-300 transition-colors text-sm`}>
              🎨 All Variants
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <div className={`flex items-center space-x-1 ${timeOfDay === 'day' ? 'text-gray-600' : 'text-yellow-200'}`}>
              {timeOfDay === 'dawn' && <FiSunrise className="w-4 h-4" />}
              {timeOfDay === 'morning' && <FiSun className="w-4 h-4" />}
              {timeOfDay === 'day' && <FiSun className="w-4 h-4" />}
              <span className="text-sm font-medium">
                {timeOfDay === 'dawn' && 'Dawn'}
                {timeOfDay === 'morning' && 'Morning'}
                {timeOfDay === 'day' && 'Day'}
              </span>
            </div>
            <Link
              href="https://app.elationemr.com/book/lotusdirectcare/"
              target="_blank"
              className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
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
                <FiSunrise className={`w-6 h-6 ${timeOfDay === 'day' ? 'text-orange-600' : 'text-yellow-300'}`} />
                <span className={`text-sm font-medium ${timeOfDay === 'day' ? 'text-gray-600' : 'text-yellow-200'} tracking-wide uppercase`}>
                  Lotus Awakening
                </span>
              </div>
              
              <h1 className={`text-6xl md:text-7xl font-bold ${getTextColor()} mb-6 transition-colors duration-1000`}>
                Awaken to
                <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  Better Health
                </span>
              </h1>
              
              <p className={`text-xl ${timeOfDay === 'day' ? 'text-gray-700' : 'text-pink-100'} mb-8 leading-relaxed transition-colors duration-1000`}>
                Like a lotus blooming at sunrise, your health journey begins with the first light of personalized care. 
                Dr. Rosenberg provides comprehensive Direct Primary Care that nurtures your wellness from dawn to dusk.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="https://app.elationemr.com/book/lotusdirectcare/"
                  target="_blank"
                  className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-xl flex items-center justify-center"
                >
                  Begin Your Journey
                  <FiArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="https://lotusdirectcare.hint.com/signup/"
                  target="_blank"
                  className={`border-2 ${timeOfDay === 'day' ? 'border-gray-700 text-gray-700 hover:bg-gray-700' : 'border-yellow-300 text-yellow-300 hover:bg-yellow-300'} hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center`}
                >
                  Become a Member
                </Link>
              </div>

              {/* Quick info cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className={`${timeOfDay === 'day' ? 'bg-white/20' : 'bg-white/10'} backdrop-blur-lg rounded-xl p-4 border ${timeOfDay === 'day' ? 'border-gray-300' : 'border-white/20'} transition-colors duration-1000`}>
                  <FiHeart className={`w-6 h-6 ${timeOfDay === 'day' ? 'text-red-600' : 'text-pink-300'} mb-2`} />
                  <div className={`text-sm font-semibold ${getTextColor()}`}>Personalized Care</div>
                  <div className={`text-xs ${timeOfDay === 'day' ? 'text-gray-600' : 'text-pink-200'}`}>Individual attention</div>
                </div>
                <div className={`${timeOfDay === 'day' ? 'bg-white/20' : 'bg-white/10'} backdrop-blur-lg rounded-xl p-4 border ${timeOfDay === 'day' ? 'border-gray-300' : 'border-white/20'} transition-colors duration-1000`}>
                  <FiClock className={`w-6 h-6 ${timeOfDay === 'day' ? 'text-blue-600' : 'text-blue-300'} mb-2`} />
                  <div className={`text-sm font-semibold ${getTextColor()}`}>Extended Visits</div>
                  <div className={`text-xs ${timeOfDay === 'day' ? 'text-gray-600' : 'text-pink-200'}`}>Never rushed</div>
                </div>
                <div className={`${timeOfDay === 'day' ? 'bg-white/20' : 'bg-white/10'} backdrop-blur-lg rounded-xl p-4 border ${timeOfDay === 'day' ? 'border-gray-300' : 'border-white/20'} transition-colors duration-1000`}>
                  <FiStar className={`w-6 h-6 ${timeOfDay === 'day' ? 'text-yellow-600' : 'text-yellow-300'} mb-2`} />
                  <div className={`text-sm font-semibold ${getTextColor()}`}>Premium Services</div>
                  <div className={`text-xs ${timeOfDay === 'day' ? 'text-gray-600' : 'text-pink-200'}`}>Comprehensive care</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/Lotus Midjourney Flowers/lotus-homepage-new.png"
                  alt="Lotus blooming at sunrise"
                  width={600}
                  height={600}
                  className="w-full h-auto transition-all duration-1000"
                  style={{ 
                    filter: `brightness(${0.8 + lightIntensity / 200}) saturate(${1 + lightIntensity / 100})`,
                    transform: `scale(${1 + lightIntensity / 1000})`
                  }}
                />
                {/* Sunrise glow overlay */}
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-transparent via-yellow-300/20 to-orange-300/30 transition-opacity duration-1000"
                  style={{ opacity: lightIntensity / 100 }}
                />
              </div>
              
              {/* Floating awakening elements */}
              <div className="absolute -top-8 -right-8">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-70 animate-pulse" />
              </div>
              <div className="absolute -bottom-8 -left-8">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-yellow-400 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dawn Quote Section */}
      <section className={`py-16 ${timeOfDay === 'day' ? 'bg-white/20' : 'bg-white/10'} backdrop-blur-lg transition-colors duration-1000`}>
        <div className="max-w-4xl mx-auto text-center px-6">
          <FiSunrise className={`w-12 h-12 ${timeOfDay === 'day' ? 'text-orange-600' : 'text-yellow-300'} mx-auto mb-6`} />
          <blockquote className={`text-2xl md:text-3xl ${getTextColor()} italic mb-6 transition-colors duration-1000`}>
            "Like the lotus that rises from muddy waters to bloom in the sunlight, 
            your health journey begins with a single moment of awakening to better care."
          </blockquote>
          <cite className={`text-lg ${timeOfDay === 'day' ? 'text-gray-600' : 'text-pink-200'} transition-colors duration-1000`}>
            - Dr. Aaron Rosenberg, Lotus Direct Care
          </cite>
        </div>
      </section>

      {/* Sections with time-aware styling */}
      <div className="space-y-0">
        <JourneySection />
        <FeaturesSection />
        <DoctorSection />
        <PricingSection />
        <TestimonialsSection />
        <BlogPreviewSection />
      </div>

      {/* Footer */}
      <footer className={`${timeOfDay === 'day' ? 'bg-white/30' : 'bg-gray-900/50'} backdrop-blur-lg py-12 transition-colors duration-1000`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src="/images/LOGOTRANSPARENTFLOWERONLY1.png"
                  alt="Lotus Direct Care"
                  width={40}
                  height={40}
                />
                <div>
                  <div className={`text-xl font-bold ${getTextColor()} transition-colors duration-1000`}>
                    Lotus Direct Care
                  </div>
                  <div className={`text-sm ${timeOfDay === 'day' ? 'text-gray-600' : 'text-pink-200'} transition-colors duration-1000`}>
                    Awakening to Wellness
                  </div>
                </div>
              </div>
              <p className={`${timeOfDay === 'day' ? 'text-gray-700' : 'text-gray-300'} mb-4 transition-colors duration-1000`}>
                Experience healthcare that awakens with you - personalized, comprehensive, and always there when you need it.
              </p>
            </div>

            <div>
              <h4 className={`font-semibold ${getTextColor()} mb-4 transition-colors duration-1000`}>Services</h4>
              <ul className="space-y-2">
                <li><Link href="/direct-primary-care" className={`${timeOfDay === 'day' ? 'text-gray-600 hover:text-orange-600' : 'text-gray-300 hover:text-yellow-300'} transition-colors`}>Direct Primary Care</Link></li>
                <li><Link href="/functional-medicine" className={`${timeOfDay === 'day' ? 'text-gray-600 hover:text-orange-600' : 'text-gray-300 hover:text-yellow-300'} transition-colors`}>Functional Medicine</Link></li>
                <li><Link href="/ketamine-therapy" className={`${timeOfDay === 'day' ? 'text-gray-600 hover:text-orange-600' : 'text-gray-300 hover:text-yellow-300'} transition-colors`}>Ketamine Therapy</Link></li>
                <li><Link href="/prp-injections" className={`${timeOfDay === 'day' ? 'text-gray-600 hover:text-orange-600' : 'text-gray-300 hover:text-yellow-300'} transition-colors`}>PRP Injections</Link></li>
              </ul>
            </div>

            <div>
              <h4 className={`font-semibold ${getTextColor()} mb-4 transition-colors duration-1000`}>Contact</h4>
              <div className="space-y-3">
                <div className={`flex items-center space-x-2 ${timeOfDay === 'day' ? 'text-gray-600' : 'text-gray-300'} transition-colors duration-1000`}>
                  <FiMapPin className="w-4 h-4" />
                  <span className="text-sm">Las Vegas, Nevada</span>
                </div>
                <div className={`flex items-center space-x-2 ${timeOfDay === 'day' ? 'text-gray-600' : 'text-gray-300'} transition-colors duration-1000`}>
                  <FiPhone className="w-4 h-4" />
                  <span className="text-sm">(702) 463-3008</span>
                </div>
              </div>
            </div>
          </div>

          <div className={`border-t ${timeOfDay === 'day' ? 'border-gray-400' : 'border-gray-700'} mt-8 pt-8 text-center transition-colors duration-1000`}>
            <p className={`${timeOfDay === 'day' ? 'text-gray-600' : 'text-gray-400'} text-sm transition-colors duration-1000`}>
              © 2025 Lotus Direct Care. All rights reserved. Rising with the sun, caring through the day.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}