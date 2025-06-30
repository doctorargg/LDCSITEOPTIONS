'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiHeart, FiActivity, FiCircle, FiDroplet, FiShield, FiClock, FiUsers, FiHome, FiToggleLeft, FiToggleRight, FiCalendar, FiPhone, FiMail, FiArrowRight } from 'react-icons/fi';
import JourneySection from "@/components/JourneySection";
import PricingSection from "@/components/PricingSection";
import FeaturesSection from "@/components/FeaturesSection";
import DoctorSection from "@/components/DoctorSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogPreviewSection from "@/components/BlogPreviewSection";

export default function SplitPersonalityPage() {
  const [splitPosition, setSplitPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [activeMode, setActiveMode] = useState<'traditional' | 'modern' | 'split'>('split');
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSplitPosition(Math.max(20, Math.min(80, percentage)));
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging]);

  const toggleMode = () => {
    if (activeMode === 'split') {
      setSplitPosition(0);
      setActiveMode('modern');
    } else if (activeMode === 'modern') {
      setSplitPosition(100);
      setActiveMode('traditional');
    } else {
      setSplitPosition(50);
      setActiveMode('split');
    }
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Navigation */}
      <nav className="relative z-50 bg-white shadow-lg">
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
              <span className="text-2xl font-bold">
                <span className="text-gray-800">Lotus</span>
                <span className="text-purple-600">Care</span>
              </span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/variants" className="text-gray-600 hover:text-gray-900 transition flex items-center gap-2">
                <FiHome /> All Variants
              </Link>
              <button
                onClick={toggleMode}
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-50 transition"
              >
                {activeMode === 'traditional' ? <FiToggleLeft className="w-5 h-5" /> : <FiToggleRight className="w-5 h-5" />}
                <span>{activeMode === 'split' ? 'Split View' : activeMode === 'traditional' ? 'Traditional' : 'Modern'}</span>
              </button>
              <Link 
                href="https://app.elationemr.com/book/lotusdirectcare/" 
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  splitPosition > 50 
                    ? 'bg-blue-900 text-white hover:bg-blue-800' 
                    : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg'
                }`}
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Split Hero Section */}
      <section ref={containerRef} className="relative h-screen">
        {/* Traditional Side (Left) */}
        <div 
          className="absolute inset-y-0 left-0 bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden"
          style={{ width: `${splitPosition}%` }}
        >
          <div className="relative h-full flex items-center justify-center p-8">
            <div className="max-w-xl">
              <h1 className="text-5xl md:text-6xl font-serif text-blue-900 mb-6">
                Traditional Excellence in Healthcare
              </h1>
              <p className="text-xl text-blue-800 mb-8 leading-relaxed">
                Experience the trusted, time-honored approach to medicine with a personal touch that has served generations.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center">
                    <FiHeart className="w-6 h-6 text-blue-900" />
                  </div>
                  <span className="text-blue-900 font-medium">Compassionate Care</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center">
                    <FiUsers className="w-6 h-6 text-blue-900" />
                  </div>
                  <span className="text-blue-900 font-medium">Family Practice</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center">
                    <FiClock className="w-6 h-6 text-blue-900" />
                  </div>
                  <span className="text-blue-900 font-medium">Established Methods</span>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute top-10 right-10 w-32 h-32 border-4 border-blue-300 rounded-full opacity-20"></div>
            <div className="absolute bottom-20 left-20 w-48 h-48 border-4 border-blue-300 rounded-full opacity-20"></div>
          </div>
        </div>

        {/* Modern Side (Right) */}
        <div 
          className="absolute inset-y-0 right-0 bg-gradient-to-br from-purple-900 via-pink-900 to-purple-900 overflow-hidden"
          style={{ width: `${100 - splitPosition}%` }}
        >
          <div className="relative h-full flex items-center justify-center p-8 text-white">
            <div className="max-w-xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
                  Innovative Healthcare Solutions
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Cutting-edge treatments and technology-driven care for the modern patient seeking optimal wellness.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <FiCircle className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-medium">Ketamine Therapy</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <FiDroplet className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-medium">PRP Treatments</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <FiActivity className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-medium">Functional Medicine</span>
                </div>
              </div>
            </div>
            {/* Animated elements */}
            <div className="absolute top-20 left-10 w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
            <div className="absolute top-40 right-20 w-4 h-4 bg-pink-400 rounded-full animate-pulse"></div>
            <div className="absolute bottom-30 left-30 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-5 h-5 bg-cyan-400 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Split Handle */}
        <div 
          className="absolute top-0 bottom-0 w-8 -ml-4 cursor-col-resize flex items-center justify-center hover:bg-gray-900/10 transition-colors"
          style={{ left: `${splitPosition}%` }}
          onMouseDown={() => setIsDragging(true)}
        >
          <div className="w-1 h-32 bg-gray-400 rounded-full"></div>
        </div>

        {/* Center Badge */}
        <div 
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-8 shadow-2xl"
          style={{ left: `${splitPosition}%` }}
        >
          <div className="text-center">
            <h3 className="font-bold text-gray-800 mb-2">Best of Both Worlds</h3>
            <p className="text-sm text-gray-600">Drag to explore</p>
          </div>
        </div>
      </section>

      {/* Services Split Display */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="text-blue-900">Traditional</span> meets <span className="text-purple-600">Modern</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Traditional Services */}
            <div className="bg-blue-50 rounded-3xl p-8">
              <h3 className="text-2xl font-serif text-blue-900 mb-6">Classic Care Services</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-4 flex items-center gap-4">
                  <FiHeart className="w-8 h-8 text-blue-700" />
                  <div>
                    <h4 className="font-semibold text-blue-900">Primary Care</h4>
                    <p className="text-sm text-blue-700">Comprehensive health management</p>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-4 flex items-center gap-4">
                  <FiUsers className="w-8 h-8 text-blue-700" />
                  <div>
                    <h4 className="font-semibold text-blue-900">Family Medicine</h4>
                    <p className="text-sm text-blue-700">Care for all ages</p>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-4 flex items-center gap-4">
                  <FiShield className="w-8 h-8 text-blue-700" />
                  <div>
                    <h4 className="font-semibold text-blue-900">Preventive Care</h4>
                    <p className="text-sm text-blue-700">Annual check-ups and screenings</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Modern Services */}
            <div className="bg-gradient-to-br from-purple-900 to-pink-900 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Innovative Treatments</h3>
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center gap-4">
                  <FiCircle className="w-8 h-8 text-cyan-400" />
                  <div>
                    <h4 className="font-semibold">Ketamine Therapy</h4>
                    <p className="text-sm text-gray-300">Mental health breakthrough</p>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center gap-4">
                  <FiDroplet className="w-8 h-8 text-pink-400" />
                  <div>
                    <h4 className="font-semibold">PRP Injections</h4>
                    <p className="text-sm text-gray-300">Regenerative medicine</p>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center gap-4">
                  <FiActivity className="w-8 h-8 text-purple-400" />
                  <div>
                    <h4 className="font-semibold">Functional Medicine</h4>
                    <p className="text-sm text-gray-300">Root cause analysis</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FiHeart className="w-16 h-16 text-blue-900" />
              </div>
              <h3 className="text-2xl font-serif text-blue-900 mb-4">Time-Honored Approach</h3>
              <p className="text-gray-700 max-w-md mx-auto">
                Building lasting doctor-patient relationships through proven methods and compassionate care that has stood the test of time.
              </p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <FiActivity className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Future-Forward Care</h3>
              <p className="text-gray-700 max-w-md mx-auto">
                Leveraging the latest medical innovations and technology to provide cutting-edge treatments for optimal health outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Unified Call to Action */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-blue-900"></div>
          <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-r from-purple-900 to-pink-900"></div>
        </div>
        <div className="relative max-w-4xl mx-auto text-center px-4 text-white">
          <h2 className="text-4xl font-bold mb-6">Experience the Perfect Balance</h2>
          <p className="text-xl mb-8 opacity-90">
            Where traditional values meet modern innovation for comprehensive healthcare
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://app.elationemr.com/book/lotusdirectcare/"
              className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition"
            >
              Schedule Consultation
            </Link>
            <Link
              href="https://lotusdirectcare.hint.com/signup/"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition"
            >
              Become a Member
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
          <p>&copy; 2025 Lotus Direct Care. Where tradition meets innovation.</p>
        </div>
      </footer>
    </div>
  );
}