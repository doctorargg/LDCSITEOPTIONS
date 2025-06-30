'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  FiHeart, FiActivity, FiShield, FiClock, FiUsers, FiAward,
  FiZap, FiTrendingUp, FiTarget, FiSmile, FiStar, FiGift,
  FiDroplet, FiSun, FiCircle, FiEye,
  FiHome, FiCalendar, FiPhone, FiMail, FiMapPin, FiDollarSign,
  FiCheckCircle, FiAlertTriangle, FiRefreshCw, FiFilter
} from 'react-icons/fi';
import JourneySection from "@/components/JourneySection";
import PricingSection from "@/components/PricingSection";
import FeaturesSection from "@/components/FeaturesSection";
import DoctorSection from "@/components/DoctorSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogPreviewSection from "@/components/BlogPreviewSection";

const iconServices = [
  { icon: FiHeart, label: 'Primary Care', color: 'from-red-400 to-pink-500', desc: 'Comprehensive wellness' },
  { icon: FiCircle, label: 'Mental Health', color: 'from-purple-400 to-indigo-500', desc: 'Ketamine therapy' },
  { icon: FiDroplet, label: 'PRP Treatment', color: 'from-blue-400 to-cyan-500', desc: 'Regenerative medicine' },
  { icon: FiShield, label: 'Addiction Care', color: 'from-green-400 to-emerald-500', desc: 'Recovery support' },
  { icon: FiActivity, label: 'Functional Med', color: 'from-orange-400 to-red-500', desc: 'Root cause healing' },
  { icon: FiSun, label: 'Wellness Plans', color: 'from-yellow-400 to-orange-500', desc: 'Preventive care' }
];

const iconFeatures = [
  { icon: FiClock, label: '24/7 Access' },
  { icon: FiCalendar, label: 'Same Day' },
  { icon: FiPhone, label: 'Telehealth' },
  { icon: FiDollarSign, label: 'Transparent' },
  { icon: FiUsers, label: 'Family Care' },
  { icon: FiAward, label: 'Expert Team' }
];

const iconBenefits = [
  { icon: FiZap, label: 'Fast', desc: 'Quick appointments' },
  { icon: FiSmile, label: 'Personal', desc: 'Know your doctor' },
  { icon: FiTrendingUp, label: 'Results', desc: 'Proven outcomes' },
  { icon: FiGift, label: 'Value', desc: 'Affordable care' }
];

const processIcons = [
  { icon: FiMail, label: 'Contact', step: 1 },
  { icon: FiCalendar, label: 'Schedule', step: 2 },
  { icon: FiEye, label: 'Evaluate', step: 3 },
  { icon: FiTarget, label: 'Plan', step: 4 },
  { icon: FiRefreshCw, label: 'Monitor', step: 5 },
  { icon: FiStar, label: 'Thrive', step: 6 }
];

export default function IconDrivenPage() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [activeProcess, setActiveProcess] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState('all');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Navigation - Icon Based */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
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
              <div className="flex items-center gap-2">
                <FiHeart className="w-6 h-6 text-red-500" />
                <span className="text-2xl font-bold text-gray-800">Lotus</span>
              </div>
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/variants" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition">
                <FiHome className="w-5 h-5" />
              </Link>
              <Link href="#services" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition">
                <FiFilter className="w-5 h-5" />
              </Link>
              <Link href="#contact" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition">
                <FiPhone className="w-5 h-5" />
              </Link>
              <Link 
                href="https://app.elationemr.com/book/lotusdirectcare/" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition flex items-center gap-2"
              >
                <FiCalendar className="w-5 h-5" />
                <span className="hidden lg:inline">Book</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Icon Grid */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center gap-4 mb-6">
              <FiHeart className="w-12 h-12 text-red-500 animate-pulse" />
              <FiActivity className="w-12 h-12 text-blue-500 animate-bounce" />
              <FiCircle className="w-12 h-12 text-purple-500 animate-pulse" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Healthcare Simplified
              </span>
            </h1>
            <div className="flex justify-center gap-8 text-gray-600">
              <div className="flex items-center gap-2">
                <FiCheckCircle className="w-5 h-5 text-green-500" />
                <span>Simple</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCheckCircle className="w-5 h-5 text-green-500" />
                <span>Visual</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCheckCircle className="w-5 h-5 text-green-500" />
                <span>Effective</span>
              </div>
            </div>
          </div>

          {/* Icon Service Grid */}
          <div id="services" className="grid md:grid-cols-3 gap-6 mb-16">
            {iconServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredService(index)}
                  onMouseLeave={() => setHoveredService(null)}
                  className={`relative bg-white rounded-2xl p-8 shadow-lg cursor-pointer transform transition-all duration-300 ${
                    hoveredService === index ? 'scale-105 shadow-2xl' : 'scale-100'
                  }`}
                >
                  <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-4 mx-auto transform transition-transform ${
                    hoveredService === index ? 'rotate-12' : 'rotate-0'
                  }`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-2">{service.label}</h3>
                  <p className="text-gray-600 text-center text-sm">{service.desc}</p>
                  {hoveredService === index && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl pointer-events-none"></div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Quick Features - Icon Row */}
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
              {iconFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 transition-all">
                      <Icon className="w-8 h-8 text-gray-600 group-hover:text-white transition-colors" />
                    </div>
                    <p className="text-sm font-medium text-gray-700">{feature.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Process Flow - Icon Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            <div className="flex justify-center items-center gap-3">
              <FiRefreshCw className="w-10 h-10 text-blue-600" />
              <span>Your Journey</span>
            </div>
          </h2>
          
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 transform -translate-y-1/2 hidden md:block"></div>
            <div 
              className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 transform -translate-y-1/2 transition-all duration-500 hidden md:block"
              style={{ width: `${(activeProcess / (processIcons.length - 1)) * 100}%` }}
            ></div>
            
            {/* Process Icons */}
            <div className="relative grid grid-cols-2 md:grid-cols-6 gap-8">
              {processIcons.map((process, index) => {
                const Icon = process.icon;
                const isActive = index <= activeProcess;
                
                return (
                  <div
                    key={index}
                    onClick={() => setActiveProcess(index)}
                    className="relative cursor-pointer"
                  >
                    <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto transform transition-all duration-300 ${
                      isActive 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 scale-110 shadow-lg' 
                        : 'bg-gray-200 scale-100'
                    }`}>
                      <Icon className={`w-10 h-10 ${isActive ? 'text-white' : 'text-gray-500'}`} />
                    </div>
                    <p className={`text-center mt-2 font-medium transition-colors ${
                      isActive ? 'text-gray-900' : 'text-gray-500'
                    }`}>
                      {process.label}
                    </p>
                    <div className={`absolute -top-8 left-1/2 transform -translate-x-1/2 ${
                      isActive ? 'opacity-100' : 'opacity-0'
                    } transition-opacity`}>
                      <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded">
                        Step {process.step}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid - Icon Cards */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            {iconBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition-shadow">
                  <Icon className="w-16 h-16 mx-auto mb-3 text-gradient-to-r from-blue-600 to-purple-600" />
                  <h3 className="text-xl font-bold mb-1">{benefit.label}</h3>
                  <p className="text-gray-600 text-sm">{benefit.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Icon-Based Stats */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <FiUsers className="w-12 h-12 mx-auto mb-3 text-blue-400" />
              <div className="text-4xl font-bold mb-1">1,000+</div>
              <p className="text-gray-400">Happy Patients</p>
            </div>
            <div>
              <FiClock className="w-12 h-12 mx-auto mb-3 text-green-400" />
              <div className="text-4xl font-bold mb-1">15 min</div>
              <p className="text-gray-400">Average Wait</p>
            </div>
            <div>
              <FiStar className="w-12 h-12 mx-auto mb-3 text-yellow-400" />
              <div className="text-4xl font-bold mb-1">4.9/5</div>
              <p className="text-gray-400">Patient Rating</p>
            </div>
            <div>
              <FiAward className="w-12 h-12 mx-auto mb-3 text-purple-400" />
              <div className="text-4xl font-bold mb-1">10+</div>
              <p className="text-gray-400">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - Icon Focused */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="flex justify-center gap-4 mb-6">
            <FiHeart className="w-12 h-12 animate-pulse" />
            <FiActivity className="w-12 h-12 animate-bounce" />
            <FiShield className="w-12 h-12 animate-pulse" />
          </div>
          <h2 className="text-4xl font-bold mb-6">Start Your Health Journey</h2>
          <p className="text-xl mb-8 opacity-90">
            Simple icons. Clear path. Better health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://app.elationemr.com/book/lotusdirectcare/"
              className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition flex items-center justify-center gap-2"
            >
              <FiCalendar className="w-5 h-5" />
              Book Now
            </Link>
            <Link
              href="https://lotusdirectcare.hint.com/signup/"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition flex items-center justify-center gap-2"
            >
              <FiUsers className="w-5 h-5" />
              Join Today
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Icons */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <FiPhone className="w-12 h-12 mx-auto mb-3 text-blue-600" />
              <p className="font-semibold">Call Us</p>
              <p className="text-gray-600">(352) 588-7820</p>
            </div>
            <div>
              <FiMail className="w-12 h-12 mx-auto mb-3 text-purple-600" />
              <p className="font-semibold">Email</p>
              <p className="text-gray-600">info@lotusdirectcare.com</p>
            </div>
            <div>
              <FiMapPin className="w-12 h-12 mx-auto mb-3 text-pink-600" />
              <p className="font-semibold">Visit</p>
              <p className="text-gray-600">Our Clinic</p>
            </div>
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
          <div className="flex justify-center gap-6 mb-6">
            <FiHeart className="w-6 h-6 text-red-400" />
            <FiActivity className="w-6 h-6 text-blue-400" />
            <FiCircle className="w-6 h-6 text-purple-400" />
            <FiShield className="w-6 h-6 text-green-400" />
          </div>
          <p>&copy; 2025 Lotus Direct Care. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}