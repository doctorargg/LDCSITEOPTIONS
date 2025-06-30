'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiSunrise, FiSun, FiSunset, FiCircle, FiClock, FiUsers, FiHeart, FiActivity, FiCoffee, FiCheckCircle, FiCalendar, FiHome } from 'react-icons/fi';
import JourneySection from "@/components/JourneySection";
import PricingSection from "@/components/PricingSection";
import FeaturesSection from "@/components/FeaturesSection";
import DoctorSection from "@/components/DoctorSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogPreviewSection from "@/components/BlogPreviewSection";

const timelineEvents = [
  {
    time: '6:00 AM',
    icon: FiSunrise,
    title: 'Clinic Opens Early',
    description: 'We start early to accommodate your busy schedule',
    patientStory: 'Sarah can visit before her work day begins',
    color: 'from-purple-400 to-pink-400'
  },
  {
    time: '8:30 AM',
    icon: FiCoffee,
    title: 'Morning Consultations',
    description: 'Comprehensive health check-ups and consultations',
    patientStory: 'John discusses his wellness goals over coffee',
    color: 'from-orange-400 to-yellow-400'
  },
  {
    time: '11:00 AM',
    icon: FiActivity,
    title: 'Specialized Treatments',
    description: 'PRP injections and ketamine therapy sessions',
    patientStory: 'Maria receives her chronic pain treatment',
    color: 'from-blue-400 to-green-400'
  },
  {
    time: '1:00 PM',
    icon: FiHeart,
    title: 'Functional Medicine',
    description: 'In-depth functional medicine consultations',
    patientStory: 'David explores root causes of his symptoms',
    color: 'from-green-400 to-teal-400'
  },
  {
    time: '3:30 PM',
    icon: FiUsers,
    title: 'Family Care Hours',
    description: 'Dedicated time for family wellness visits',
    patientStory: 'The Thompson family gets their check-ups together',
    color: 'from-indigo-400 to-purple-400'
  },
  {
    time: '5:00 PM',
    icon: FiSunset,
    title: 'Evening Availability',
    description: 'Late appointments for working professionals',
    patientStory: 'Emma visits after her office hours',
    color: 'from-pink-400 to-red-400'
  },
  {
    time: '7:00 PM',
    icon: FiCircle,
    title: 'After-Hours Support',
    description: '24/7 access to your healthcare team',
    patientStory: 'Tom gets urgent advice via telehealth',
    color: 'from-purple-600 to-blue-600'
  }
];

export default function DayInTheLifePage() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeEvent, setActiveEvent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
      // Auto-advance timeline every 3 seconds
      setActiveEvent((prev) => (prev + 1) % timelineEvents.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const getClockRotation = () => {
    const hours = currentTime.getHours() % 12;
    const minutes = currentTime.getMinutes();
    return {
      hour: (hours * 30) + (minutes * 0.5),
      minute: minutes * 6
    };
  };

  const { hour, minute } = getClockRotation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
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
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                A Day at Lotus
              </span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/variants" className="text-gray-600 hover:text-purple-600 transition flex items-center gap-2">
                <FiHome /> All Variants
              </Link>
              <Link 
                href="https://app.elationemr.com/book/lotusdirectcare/" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition"
              >
                Book Your Visit
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Animated Clock */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-purple-100/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                A Day in the Life
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience how Lotus Direct Care transforms healthcare throughout your day
            </p>
          </div>

          {/* Animated Clock */}
          <div className="relative w-64 h-64 mx-auto mb-16">
            <div className="absolute inset-0 bg-white rounded-full shadow-2xl flex items-center justify-center">
              <svg className="w-full h-full" viewBox="0 0 200 200">
                {/* Clock face */}
                <circle cx="100" cy="100" r="95" fill="white" stroke="#e5e7eb" strokeWidth="2" />
                
                {/* Hour markers */}
                {[...Array(12)].map((_, i) => (
                  <line
                    key={i}
                    x1="100"
                    y1="10"
                    x2="100"
                    y2="20"
                    stroke="#9ca3af"
                    strokeWidth="2"
                    transform={`rotate(${i * 30} 100 100)`}
                  />
                ))}
                
                {/* Hour hand */}
                <line
                  x1="100"
                  y1="100"
                  x2="100"
                  y2="50"
                  stroke="#4f46e5"
                  strokeWidth="4"
                  strokeLinecap="round"
                  transform={`rotate(${hour} 100 100)`}
                  className="transition-transform duration-1000"
                />
                
                {/* Minute hand */}
                <line
                  x1="100"
                  y1="100"
                  x2="100"
                  y2="30"
                  stroke="#7c3aed"
                  strokeWidth="3"
                  strokeLinecap="round"
                  transform={`rotate(${minute} 100 100)`}
                  className="transition-transform duration-1000"
                />
                
                {/* Center dot */}
                <circle cx="100" cy="100" r="5" fill="#4f46e5" />
              </svg>
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-20 blur-xl animate-pulse"></div>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-200 via-purple-200 to-pink-200"></div>
            
            {timelineEvents.map((event, index) => {
              const Icon = event.icon;
              const isActive = index === activeEvent;
              const isLeft = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  className={`relative flex items-center mb-12 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  {/* Content */}
                  <div className={`w-5/12 ${isLeft ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div
                      className={`bg-white rounded-2xl p-6 shadow-lg transform transition-all duration-500 ${
                        isActive ? 'scale-105 shadow-2xl' : 'scale-100'
                      }`}
                    >
                      <div className={`flex items-center gap-3 mb-3 ${isLeft ? 'justify-end' : 'justify-start'}`}>
                        <span className={`text-lg font-bold bg-gradient-to-r ${event.color} bg-clip-text text-transparent`}>
                          {event.time}
                        </span>
                        <Icon className={`w-6 h-6 text-gray-600`} />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                      <p className="text-gray-600 mb-3">{event.description}</p>
                      <div className={`border-t pt-3 ${isActive ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
                        <p className="text-sm italic text-purple-600">"{event.patientStory}"</p>
                      </div>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-2/12 flex justify-center">
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-r ${event.color} flex items-center justify-center transform transition-all duration-500 ${
                        isActive ? 'scale-125 shadow-lg' : 'scale-100'
                      }`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Empty space */}
                  <div className="w-5/12"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features with Time Icons */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Your Time, Your Health
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 text-center">
              <FiClock className="w-16 h-16 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-3">Flexible Hours</h3>
              <p className="text-gray-600">Early morning to evening appointments to fit your schedule</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 text-center">
              <FiCalendar className="w-16 h-16 mx-auto mb-4 text-purple-600" />
              <h3 className="text-xl font-semibold mb-3">Same-Day Access</h3>
              <p className="text-gray-600">Get care when you need it, not weeks later</p>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-orange-50 rounded-2xl p-8 text-center">
              <FiCheckCircle className="w-16 h-16 mx-auto mb-4 text-pink-600" />
              <h3 className="text-xl font-semibold mb-3">No Rush</h3>
              <p className="text-gray-600">30-60 minute appointments for comprehensive care</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Start Your Day with Better Healthcare</h2>
          <p className="text-xl mb-8 opacity-90">
            Join Lotus Direct Care and experience healthcare that works around your life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://app.elationemr.com/book/lotusdirectcare/"
              className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition"
            >
              Book Your First Visit
            </Link>
            <Link
              href="https://lotusdirectcare.hint.com/signup/"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition"
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
          <p>&copy; 2025 Lotus Direct Care. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}