'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMapPin, FiFlag, FiTrendingUp, FiAward, FiHeart, FiActivity, FiTarget, FiCompass, FiCheckCircle, FiArrowRight, FiHome, FiShield } from 'react-icons/fi';
import JourneySection from "@/components/JourneySection";
import PricingSection from "@/components/PricingSection";
import FeaturesSection from "@/components/FeaturesSection";
import DoctorSection from "@/components/DoctorSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogPreviewSection from "@/components/BlogPreviewSection";

const journeyCheckpoints = [
  {
    id: 1,
    title: 'Starting Point',
    subtitle: 'Your Health Assessment',
    description: 'Comprehensive evaluation of your current health status',
    icon: FiMapPin,
    color: 'from-red-400 to-pink-400',
    progress: 0,
    details: [
      'Initial consultation',
      'Health history review',
      'Baseline testing',
      'Goal setting'
    ]
  },
  {
    id: 2,
    title: 'Discovery Phase',
    subtitle: 'Understanding Your Body',
    description: 'Deep dive into your unique health needs',
    icon: FiCompass,
    color: 'from-orange-400 to-yellow-400',
    progress: 25,
    details: [
      'Functional medicine testing',
      'Nutritional analysis',
      'Lifestyle assessment',
      'Root cause investigation'
    ]
  },
  {
    id: 3,
    title: 'Treatment Journey',
    subtitle: 'Personalized Care Plan',
    description: 'Implementing targeted treatments and therapies',
    icon: FiActivity,
    color: 'from-green-400 to-teal-400',
    progress: 50,
    details: [
      'Custom treatment protocols',
      'Regular monitoring',
      'Therapy adjustments',
      'Progress tracking'
    ]
  },
  {
    id: 4,
    title: 'Transformation',
    subtitle: 'Seeing Real Results',
    description: 'Experiencing improved health and vitality',
    icon: FiTrendingUp,
    color: 'from-blue-400 to-indigo-400',
    progress: 75,
    details: [
      'Symptom improvement',
      'Energy restoration',
      'Better quality of life',
      'Milestone celebrations'
    ]
  },
  {
    id: 5,
    title: 'Wellness Destination',
    subtitle: 'Optimal Health Achieved',
    description: 'Maintaining and optimizing your health long-term',
    icon: FiFlag,
    color: 'from-purple-400 to-pink-400',
    progress: 100,
    details: [
      'Preventive care',
      'Health optimization',
      'Longevity planning',
      'Continued support'
    ]
  }
];

export default function HealthJourneyPage() {
  const [activeCheckpoint, setActiveCheckpoint] = useState(0);
  const [journeyProgress, setJourneyProgress] = useState(0);
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

  useEffect(() => {
    // Animate journey progress
    const timer = setInterval(() => {
      setJourneyProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + 1;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Update active checkpoint based on progress
    const checkpointIndex = Math.floor(journeyProgress / 20);
    setActiveCheckpoint(Math.min(checkpointIndex, journeyCheckpoints.length - 1));
  }, [journeyProgress]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm shadow-lg sticky top-0 z-50">
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
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Your Health Journey
              </span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/variants" className="text-gray-600 hover:text-purple-600 transition flex items-center gap-2">
                <FiHome /> All Variants
              </Link>
              <Link 
                href="https://app.elationemr.com/book/lotusdirectcare/" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition"
              >
                Start Your Journey
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-100/50 to-pink-100/50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Your Path to Wellness
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every health journey is unique. Let us guide you through yours with personalized care at every checkpoint.
            </p>
          </div>

          {/* Interactive Journey Path */}
          <div className="relative bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            {/* Progress Bar Background */}
            <div className="absolute top-1/2 left-0 right-0 h-2 bg-gray-200 transform -translate-y-1/2 rounded-full"></div>
            
            {/* Animated Progress Bar */}
            <div 
              className="absolute top-1/2 left-0 h-2 bg-gradient-to-r from-purple-600 to-pink-600 transform -translate-y-1/2 rounded-full transition-all duration-300"
              style={{ width: `${journeyProgress}%` }}
            >
              <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border-4 border-purple-600 rounded-full animate-pulse"></div>
            </div>

            {/* Journey Checkpoints */}
            <div className="relative flex justify-between">
              {journeyCheckpoints.map((checkpoint, index) => {
                const Icon = checkpoint.icon;
                const isActive = index <= activeCheckpoint;
                const isHovered = hoveredPoint === index;
                
                return (
                  <div
                    key={checkpoint.id}
                    className="relative flex flex-col items-center cursor-pointer"
                    onMouseEnter={() => setHoveredPoint(index)}
                    onMouseLeave={() => setHoveredPoint(null)}
                    onClick={() => setActiveCheckpoint(index)}
                  >
                    {/* Checkpoint Icon */}
                    <div
                      className={`relative z-10 w-16 h-16 rounded-full bg-gradient-to-r ${
                        checkpoint.color
                      } flex items-center justify-center transform transition-all duration-300 ${
                        isActive ? 'scale-110 shadow-lg' : 'scale-100 opacity-50'
                      } ${isHovered ? 'scale-125 shadow-xl' : ''}`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Checkpoint Title */}
                    <div className={`mt-4 text-center transition-all duration-300 ${
                      isActive ? 'opacity-100' : 'opacity-50'
                    }`}>
                      <h3 className="font-semibold text-gray-800">{checkpoint.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{checkpoint.subtitle}</p>
                    </div>

                    {/* Hover Details */}
                    {isHovered && (
                      <div className="absolute top-full mt-4 bg-white rounded-2xl shadow-xl p-6 z-20 w-64 transform -translate-x-1/2 left-1/2">
                        <p className="text-gray-700 mb-3">{checkpoint.description}</p>
                        <ul className="space-y-2">
                          {checkpoint.details.map((detail, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                              <FiCheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Current Stage Details */}
          <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-start gap-6">
              <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${
                journeyCheckpoints[activeCheckpoint].color
              } flex items-center justify-center flex-shrink-0`}>
                {React.createElement(journeyCheckpoints[activeCheckpoint].icon, {
                  className: "w-10 h-10 text-white"
                })}
              </div>
              <div className="flex-grow">
                <h2 className="text-2xl font-bold mb-2">
                  {journeyCheckpoints[activeCheckpoint].title}: {journeyCheckpoints[activeCheckpoint].subtitle}
                </h2>
                <p className="text-gray-600 mb-4">{journeyCheckpoints[activeCheckpoint].description}</p>
                <div className="grid md:grid-cols-2 gap-3">
                  {journeyCheckpoints[activeCheckpoint].details.map((detail, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <FiArrowRight className="w-4 h-4 text-purple-600" />
                      <span className="text-gray-700">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Why Choose Our Journey Approach?
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
              <FiTarget className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Personalized Milestones</h3>
              <p className="text-gray-600">Your journey is tailored to your unique health goals and timeline</p>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-orange-50 rounded-2xl p-8">
              <FiShield className="w-12 h-12 text-pink-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Continuous Support</h3>
              <p className="text-gray-600">Expert guidance and care at every checkpoint along the way</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8">
              <FiAward className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Celebrate Progress</h3>
              <p className="text-gray-600">Acknowledge and celebrate each milestone achieved</p>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Success Stories */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Real Journey Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                <div>
                  <h3 className="font-semibold">Sarah\'s Journey</h3>
                  <p className="text-sm text-gray-600">From Chronic Pain to Active Living</p>
                </div>
              </div>
              <p className="text-gray-700">
                "The journey approach helped me understand that healing takes time. Each checkpoint gave me hope and motivation to continue."
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-green-400 rounded-full"></div>
                <div>
                  <h3 className="font-semibold">Mark\'s Journey</h3>
                  <p className="text-sm text-gray-600">Overcoming Depression</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Having clear milestones made all the difference. I could see my progress and celebrate small wins along the way."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Begin Your Health Journey Today</h2>
          <p className="text-xl mb-8 opacity-90">
            Take the first step towards optimal health with personalized care and support
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://app.elationemr.com/book/lotusdirectcare/"
              className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition"
            >
              Schedule Your First Checkpoint
            </Link>
            <Link
              href="https://lotusdirectcare.hint.com/signup/"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition"
            >
              Join Our Journey Program
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