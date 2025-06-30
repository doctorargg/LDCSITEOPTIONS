'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiSun, FiCloud, FiCloudSnow, FiCloudRain, FiWind, FiActivity, FiDroplet, FiFeather, FiHome, FiCalendar, FiHeart } from 'react-icons/fi';
import JourneySection from "@/components/JourneySection";
import PricingSection from "@/components/PricingSection";
import FeaturesSection from "@/components/FeaturesSection";
import DoctorSection from "@/components/DoctorSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogPreviewSection from "@/components/BlogPreviewSection";

const seasons = {
  spring: {
    name: 'Spring',
    icon: FiFeather,
    weatherIcon: FiCloudRain,
    colors: {
      primary: 'from-green-400 to-emerald-500',
      secondary: 'from-pink-300 to-rose-400',
      background: 'from-green-50 via-emerald-50 to-pink-50',
      text: 'text-green-700'
    },
    tips: [
      { title: 'Allergy Management', desc: 'Natural remedies for seasonal allergies' },
      { title: 'Spring Detox', desc: 'Cleanse your body after winter' },
      { title: 'Outdoor Activities', desc: 'Boost vitamin D with outdoor exercise' },
      { title: 'Fresh Nutrition', desc: 'Incorporate spring vegetables and herbs' }
    ],
    treatments: ['Allergy Testing', 'Detox Programs', 'Immune Boosting', 'Energy Restoration']
  },
  summer: {
    name: 'Summer',
    icon: FiSun,
    weatherIcon: FiSun,
    colors: {
      primary: 'from-yellow-400 to-orange-500',
      secondary: 'from-blue-400 to-cyan-500',
      background: 'from-yellow-50 via-orange-50 to-blue-50',
      text: 'text-orange-700'
    },
    tips: [
      { title: 'Hydration Focus', desc: 'Stay hydrated in the heat' },
      { title: 'Sun Protection', desc: 'Protect your skin naturally' },
      { title: 'Light Meals', desc: 'Cooling foods for hot days' },
      { title: 'Active Recovery', desc: 'Balance activity with rest' }
    ],
    treatments: ['IV Hydration', 'Skin Health', 'Sports Medicine', 'Travel Medicine']
  },
  fall: {
    name: 'Fall',
    icon: FiWind,
    weatherIcon: FiCloud,
    colors: {
      primary: 'from-orange-500 to-red-600',
      secondary: 'from-yellow-500 to-amber-600',
      background: 'from-orange-50 via-red-50 to-yellow-50',
      text: 'text-orange-800'
    },
    tips: [
      { title: 'Immune Preparation', desc: 'Strengthen immunity for cold season' },
      { title: 'Seasonal Foods', desc: 'Warming foods and spices' },
      { title: 'Sleep Optimization', desc: 'Adjust to shorter days' },
      { title: 'Stress Management', desc: 'Prepare for holiday season' }
    ],
    treatments: ['Flu Prevention', 'Immune Support', 'Sleep Therapy', 'Stress Reduction']
  },
  winter: {
    name: 'Winter',
    icon: FiCloudSnow,
    weatherIcon: FiCloudSnow,
    colors: {
      primary: 'from-blue-500 to-indigo-600',
      secondary: 'from-purple-400 to-violet-500',
      background: 'from-blue-50 via-indigo-50 to-purple-50',
      text: 'text-blue-800'
    },
    tips: [
      { title: 'Vitamin D Support', desc: 'Combat seasonal deficiency' },
      { title: 'Mood Enhancement', desc: 'Beat winter blues naturally' },
      { title: 'Indoor Wellness', desc: 'Stay active indoors' },
      { title: 'Immune Defense', desc: 'Protect against cold and flu' }
    ],
    treatments: ['SAD Treatment', 'Vitamin Therapy', 'Cold Prevention', 'Joint Care']
  }
};

type SeasonKey = keyof typeof seasons;

export default function SeasonalWellnessPage() {
  const [currentSeason, setCurrentSeason] = useState<SeasonKey>('spring');
  const [weatherAnimation, setWeatherAnimation] = useState(true);
  const [temperature, setTemperature] = useState(72);

  useEffect(() => {
    // Determine current season based on date
    const month = new Date().getMonth();
    if (month >= 2 && month <= 4) setCurrentSeason('spring');
    else if (month >= 5 && month <= 7) setCurrentSeason('summer');
    else if (month >= 8 && month <= 10) setCurrentSeason('fall');
    else setCurrentSeason('winter');

    // Set temperature based on season
    const temps = { spring: 68, summer: 85, fall: 60, winter: 35 };
    setTemperature(temps[currentSeason as SeasonKey]);
  }, [currentSeason]);

  const season = seasons[currentSeason];
  const SeasonIcon = season.icon;
  const WeatherIcon = season.weatherIcon;

  // Weather particles based on season
  const renderWeatherEffects = () => {
    if (currentSeason === 'spring') {
      return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`
              }}
            >
              <div className="w-8 h-8 bg-pink-300 rounded-full blur-xl"></div>
            </div>
          ))}
        </div>
      );
    } else if (currentSeason === 'summer') {
      return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-10 w-32 h-32 bg-yellow-300 rounded-full blur-3xl animate-pulse"></div>
        </div>
      );
    } else if (currentSeason === 'fall') {
      return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-fall-leaf"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${10 + Math.random() * 10}s`
              }}
            >
              <div className="w-6 h-6 bg-orange-400 rounded-tl-full rounded-br-full transform rotate-45"></div>
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-snow-fall"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 5}s`
              }}
            >
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${season.colors.background}`}>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          33% { transform: translateY(-20px) translateX(10px); }
          66% { transform: translateY(10px) translateX(-10px); }
        }
        @keyframes fall-leaf {
          0% { transform: translateY(-100px) rotate(0deg); }
          100% { transform: translateY(100vh) rotate(360deg); }
        }
        @keyframes snow-fall {
          0% { transform: translateY(-100px); }
          100% { transform: translateY(100vh); }
        }
      `}</style>

      {/* Weather Effects */}
      {weatherAnimation && renderWeatherEffects()}

      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/Lotus Midjourney Flowers/lotus-homepage-new.png"
                alt="Lotus Direct Care"
                width={50}
                height={50}
                className="rounded-full"
              />
              <span className={`text-2xl font-bold bg-gradient-to-r ${season.colors.primary} bg-clip-text text-transparent`}>
                Seasonal Wellness
              </span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/variants" className="text-gray-600 hover:text-gray-800 transition flex items-center gap-2">
                <FiHome /> All Variants
              </Link>
              <Link 
                href="https://app.elationemr.com/book/lotusdirectcare/" 
                className={`bg-gradient-to-r ${season.colors.primary} text-white px-6 py-2 rounded-full hover:shadow-lg transition`}
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className={`bg-gradient-to-r ${season.colors.primary} bg-clip-text text-transparent`}>
                {season.name} Wellness Guide
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Adapt your health routine to the rhythm of the seasons for optimal wellness year-round
            </p>
          </div>

          {/* Season Selector */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-full shadow-lg p-2 flex gap-2">
              {Object.entries(seasons).map(([key, s]) => {
                const Icon = s.icon;
                return (
                  <button
                    key={key}
                    onClick={() => setCurrentSeason(key as SeasonKey)}
                    className={`px-6 py-3 rounded-full flex items-center gap-2 transition-all ${
                      currentSeason === key
                        ? `bg-gradient-to-r ${s.colors.primary} text-white shadow-lg`
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{s.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Weather Dashboard */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 mb-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className={`w-48 h-48 bg-gradient-to-br ${season.colors.primary} rounded-full flex items-center justify-center`}>
                    <WeatherIcon className="w-24 h-24 text-white" />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-white rounded-full shadow-lg p-4">
                    <div className="flex items-center gap-2">
                      <FiActivity className="w-6 h-6 text-gray-600" />
                      <span className="text-2xl font-bold">{temperature}°F</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className={`text-3xl font-bold mb-4 ${season.colors.text}`}>
                  Current Season: {season.name}
                </h2>
                <p className="text-gray-600 mb-6">
                  Embrace the unique health opportunities this season brings with our specialized wellness programs.
                </p>
                <div className="flex gap-4">
                  <button className={`bg-gradient-to-r ${season.colors.primary} text-white px-6 py-2 rounded-full hover:shadow-lg transition`}>
                    Get {season.name} Health Plan
                  </button>
                  <button 
                    onClick={() => setWeatherAnimation(!weatherAnimation)}
                    className="border-2 border-gray-300 px-6 py-2 rounded-full hover:bg-gray-50 transition"
                  >
                    {weatherAnimation ? 'Pause' : 'Play'} Effects
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Seasonal Health Tips */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {season.tips.map((tip, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${season.colors.primary} rounded-full flex items-center justify-center mb-4`}>
                  <FiHeart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{tip.title}</h3>
                <p className="text-gray-600 text-sm">{tip.desc}</p>
              </div>
            ))}
          </div>

          {/* Seasonal Treatments */}
          <div className="bg-gradient-to-r ${season.colors.secondary} rounded-3xl p-8">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Recommended {season.name} Treatments
            </h2>
            <div className="grid md:grid-cols-4 gap-4">
              {season.treatments.map((treatment, index) => (
                <div key={index} className="bg-white/90 backdrop-blur-sm rounded-xl p-4 text-center">
                  <FiActivity className={`w-8 h-8 mx-auto mb-2 ${season.colors.text}`} />
                  <p className="font-medium">{treatment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Calendar */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className={`bg-gradient-to-r ${season.colors.primary} bg-clip-text text-transparent`}>
              Year-Round Wellness Calendar
            </span>
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {Object.entries(seasons).map(([key, s]) => {
              const Icon = s.icon;
              return (
                <div
                  key={key}
                  className={`rounded-2xl p-6 transition-all cursor-pointer ${
                    currentSeason === key
                      ? 'bg-gradient-to-br ' + s.colors.background + ' shadow-xl scale-105'
                      : 'bg-gray-50 hover:shadow-lg'
                  }`}
                  onClick={() => setCurrentSeason(key as SeasonKey)}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className={`w-8 h-8 ${currentSeason === key ? s.colors.text : 'text-gray-600'}`} />
                    <h3 className="text-xl font-semibold">{s.name}</h3>
                  </div>
                  <ul className="space-y-2">
                    {s.treatments.slice(0, 2).map((treatment, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                        <FiCalendar className="w-4 h-4" />
                        {treatment}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={`py-20 bg-gradient-to-r ${season.colors.primary} text-white`}>
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Embrace Every Season of Health</h2>
          <p className="text-xl mb-8 opacity-90">
            Get personalized seasonal wellness plans tailored to your unique needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://app.elationemr.com/book/lotusdirectcare/"
              className="bg-white text-gray-800 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition"
            >
              Book Seasonal Consultation
            </Link>
            <Link
              href="https://lotusdirectcare.hint.com/signup/"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-800 transition"
            >
              Join Wellness Program
            </Link>
          </div>
        </div>
      </section>

      {/* Standard Sections */}
      <JourneySection />
      <PricingSection />
      <FeaturesSection />
      <DoctorSection />
      <TestimonialsSection />
      <BlogPreviewSection />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2025 Lotus Direct Care. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}