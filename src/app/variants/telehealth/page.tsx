'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { FiVideo, FiMonitor, FiSmartphone, FiWifi, FiLock, FiCalendar, FiClock, FiHeadphones, FiMessageSquare, FiShare2, FiDownload, FiCheckCircle, FiHeart } from 'react-icons/fi';
import JourneySection from '@/components/JourneySection';
import PricingSection from '@/components/PricingSection';
import FeaturesSection from '@/components/FeaturesSection';
import DoctorSection from '@/components/DoctorSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import BlogPreviewSection from '@/components/BlogPreviewSection';

export default function TelehealthVariant() {
  const [activeDevice, setActiveDevice] = useState('desktop');
  const [isVideoActive, setIsVideoActive] = useState(false);
  const [connectionQuality, setConnectionQuality] = useState('excellent');

  useEffect(() => {
    const interval = setInterval(() => {
      setConnectionQuality(prev => {
        const qualities = ['excellent', 'good', 'fair'];
        const currentIndex = qualities.indexOf(prev);
        return qualities[(currentIndex + 1) % qualities.length];
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const telehealthFeatures = [
    {
      icon: FiVideo,
      title: 'HD Video Consultations',
      description: 'Crystal-clear video quality for accurate visual assessments'
    },
    {
      icon: FiLock,
      title: 'HIPAA-Secure Platform',
      description: 'End-to-end encryption for complete privacy protection'
    },
    {
      icon: FiShare2,
      title: 'Screen Sharing',
      description: 'Share test results and medical records in real-time'
    },
    {
      icon: FiMessageSquare,
      title: 'In-Call Messaging',
      description: 'Text chat for sharing links and important information'
    }
  ];

  const deviceCompatibility = [
    { name: 'Desktop', icon: FiMonitor, supported: true },
    { name: 'Tablet', icon: FiSmartphone, supported: true },
    { name: 'Smartphone', icon: FiSmartphone, supported: true },
    { name: 'Smart TV', icon: FiMonitor, supported: false }
  ];

  const virtualServices = [
    'Primary Care Consultations',
    'Follow-up Appointments',
    'Medication Management',
    'Mental Health Support',
    'Chronic Disease Check-ins',
    'Lab Result Reviews',
    'Prescription Refills',
    'Health Coaching Sessions'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="/Lotus Midjourney Flowers/lotus-homepage-new.png"
                  alt="Lotus Direct Care"
                  width={50}
                  height={50}
                  className="mr-3"
                />
                <div>
                  <h1 className="text-xl font-bold text-gray-900">Lotus Direct Care</h1>
                  <p className="text-xs text-green-600 flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    Telehealth Active
                  </p>
                </div>
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/variants"
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                View All Variants
              </Link>
              <Link
                href="https://app.elationemr.com/book/lotusdirectcare/"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all flex items-center gap-2"
              >
                <FiVideo className="w-4 h-4" />
                Start Virtual Visit
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Video Interface */}
      <section className="bg-gradient-to-br from-indigo-50 to-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Healthcare at Your Fingertips
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Connect with Dr. Rosenberg from anywhere. Experience the same quality care through our secure, easy-to-use telehealth platform.
              </p>
              
              {/* Connection Status */}
              <div className="bg-white rounded-lg p-4 mb-8 inline-flex items-center gap-3">
                <FiWifi className={`w-5 h-5 ${
                  connectionQuality === 'excellent' ? 'text-green-500' :
                  connectionQuality === 'good' ? 'text-yellow-500' :
                  'text-orange-500'
                }`} />
                <span className="text-sm font-medium text-gray-700">
                  Connection: {connectionQuality.charAt(0).toUpperCase() + connectionQuality.slice(1)}
                </span>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="https://app.elationemr.com/book/lotusdirectcare/"
                  className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center gap-2"
                >
                  <FiCalendar className="w-5 h-5" />
                  Schedule Virtual Visit
                </Link>
                <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold border-2 border-indigo-600 hover:bg-indigo-50 transition-colors flex items-center gap-2">
                  <FiDownload className="w-5 h-5" />
                  Download App
                </button>
              </div>
            </div>

            {/* Video Interface Mockup */}
            <div className="relative">
              <div className="bg-gray-900 rounded-xl p-4 shadow-2xl">
                <div className="bg-gray-800 rounded-lg aspect-video relative overflow-hidden">
                  {isVideoActive ? (
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
                      <div className="text-white text-center">
                        <FiVideo className="w-16 h-16 mx-auto mb-4 animate-pulse" />
                        <p className="text-lg">Video session active</p>
                      </div>
                    </div>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-700">
                      <button
                        onClick={() => setIsVideoActive(true)}
                        className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2"
                      >
                        <FiVideo className="w-5 h-5" />
                        Start Demo
                      </button>
                    </div>
                  )}
                  
                  {/* Control Bar */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gray-900/90 p-4 flex justify-center gap-4">
                    <button className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
                      <FiVideo className="w-5 h-5 text-white" />
                    </button>
                    <button className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
                      <FiHeadphones className="w-5 h-5 text-white" />
                    </button>
                    <button className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
                      <FiMessageSquare className="w-5 h-5 text-white" />
                    </button>
                    <button
                      onClick={() => setIsVideoActive(false)}
                      className="p-3 bg-red-600 rounded-full hover:bg-red-700 transition-colors"
                    >
                      <FiVideo className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Live
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Advanced Telehealth Features
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {telehealthFeatures.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl">
                <feature.icon className="w-10 h-10 text-indigo-600 mb-4" />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Device Compatibility */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Connect From Any Device
            </h3>
            <p className="text-lg text-gray-600">
              Our platform works seamlessly across all your devices
            </p>
          </div>

          <div className="flex justify-center gap-4 mb-8">
            {deviceCompatibility.map((device, index) => (
              <button
                key={index}
                onClick={() => setActiveDevice(device.name.toLowerCase())}
                className={`p-4 rounded-lg transition-all ${
                  activeDevice === device.name.toLowerCase()
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                } ${!device.supported && 'opacity-50 cursor-not-allowed'}`}
                disabled={!device.supported}
              >
                <device.icon className="w-8 h-8 mx-auto mb-2" />
                <p className="text-sm font-medium">{device.name}</p>
                {device.supported && (
                  <FiCheckCircle className="w-4 h-4 mx-auto mt-1" />
                )}
              </button>
            ))}
          </div>

          {/* Device Preview */}
          <div className="max-w-4xl mx-auto">
            <div className={`bg-white rounded-xl shadow-lg p-8 ${
              activeDevice === 'smartphone' ? 'max-w-sm mx-auto' :
              activeDevice === 'tablet' ? 'max-w-2xl mx-auto' :
              ''
            }`}>
              <div className="bg-gray-100 rounded-lg p-4 text-center">
                <p className="text-gray-600 mb-4">
                  {activeDevice.charAt(0).toUpperCase() + activeDevice.slice(1)} View
                </p>
                <div className="bg-indigo-100 rounded p-4">
                  <FiMonitor className="w-12 h-12 text-indigo-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-700">Optimized interface for {activeDevice}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Services List */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Services Available Via Telehealth
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {virtualServices.map((service, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <FiCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <p className="text-gray-700">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Getting Started is Easy
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: 1, title: 'Book Online', icon: FiCalendar, description: 'Schedule your virtual appointment at a convenient time' },
              { step: 2, title: 'Receive Link', icon: FiMessageSquare, description: 'Get a secure video link via email or text' },
              { step: 3, title: 'Join Call', icon: FiVideo, description: 'Click the link to start your consultation' },
              { step: 4, title: 'Get Care', icon: FiHeart, description: 'Receive personalized care from Dr. Rosenberg' }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <step.icon className="w-8 h-8 text-indigo-600 mx-auto mb-3" />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h4>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <FeaturesSection />

      {/* Journey Section */}
      <JourneySection />

      {/* Doctor Section */}
      <DoctorSection />

      {/* Pricing Section */}
      <PricingSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Blog Preview Section */}
      <BlogPreviewSection />

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Experience Healthcare From Home
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Join the future of healthcare with secure, convenient virtual visits
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://lotusdirectcare.hint.com/signup/"
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
            >
              <FiUsers className="w-5 h-5" />
              Become a Member
            </Link>
            <Link
              href="https://app.elationemr.com/book/lotusdirectcare/"
              className="bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-800 transition-colors flex items-center justify-center gap-2"
            >
              <FiVideo className="w-5 h-5" />
              Book Virtual Visit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}