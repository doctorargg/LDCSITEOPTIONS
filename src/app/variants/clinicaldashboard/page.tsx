'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { FiActivity, FiUsers, FiTrendingUp, FiAward, FiCalendar, FiClock, FiCheckCircle, FiBarChart2, FiTarget, FiShield, FiHeart, FiRefreshCw } from 'react-icons/fi';
import JourneySection from '@/components/JourneySection';
import PricingSection from '@/components/PricingSection';
import FeaturesSection from '@/components/FeaturesSection';
import DoctorSection from '@/components/DoctorSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import BlogPreviewSection from '@/components/BlogPreviewSection';

export default function ClinicalDashboardVariant() {
  const [activePatients, setActivePatients] = useState(0);
  const [satisfactionRate, setSatisfactionRate] = useState(0);
  const [treatmentSuccess, setTreatmentSuccess] = useState(0);
  const [yearsOfExperience, setYearsOfExperience] = useState(0);

  useEffect(() => {
    // Animate counters
    const animateValue = (start: number, end: number, duration: number, setter: (value: number) => void) => {
      const range = end - start;
      const increment = range / (duration / 16);
      let current = start;
      const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          setter(end);
          clearInterval(timer);
        } else {
          setter(Math.floor(current));
        }
      }, 16);
    };

    animateValue(0, 1847, 2000, setActivePatients);
    animateValue(0, 98, 2000, setSatisfactionRate);
    animateValue(0, 94, 2000, setTreatmentSuccess);
    animateValue(0, 15, 2000, setYearsOfExperience);
  }, []);

  const statsCards = [
    {
      icon: FiUsers,
      label: 'Active Patients',
      value: activePatients.toLocaleString(),
      suffix: '',
      color: 'bg-blue-500',
      trend: '+12% this month'
    },
    {
      icon: FiHeart,
      label: 'Satisfaction Rate',
      value: satisfactionRate,
      suffix: '%',
      color: 'bg-green-500',
      trend: 'Above industry average'
    },
    {
      icon: FiTrendingUp,
      label: 'Treatment Success',
      value: treatmentSuccess,
      suffix: '%',
      color: 'bg-purple-500',
      trend: 'Evidence-based care'
    },
    {
      icon: FiAward,
      label: 'Years of Excellence',
      value: yearsOfExperience,
      suffix: '+',
      color: 'bg-orange-500',
      trend: 'Trusted expertise'
    }
  ];

  const performanceMetrics = [
    { label: 'Same-Day Appointments', value: 89, icon: FiClock },
    { label: 'Patient Retention', value: 92, icon: FiRefreshCw },
    { label: 'Clinical Outcomes', value: 96, icon: FiTarget },
    { label: 'Safety Record', value: 100, icon: FiShield }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
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
                  <p className="text-xs text-gray-600">Clinical Excellence Dashboard</p>
                </div>
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/variants"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                View All Variants
              </Link>
              <Link
                href="https://app.elationemr.com/book/lotusdirectcare/"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                <FiCalendar className="w-4 h-4" />
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Stats */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Clinical Excellence Through Data</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Real-time metrics demonstrating our commitment to superior patient care and outcomes
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {statsCards.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-start justify-between mb-4">
                  <div className={`${stat.color} p-3 rounded-lg bg-opacity-20`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <FiActivity className="w-5 h-5 text-white/50" />
                </div>
                <div className="space-y-2">
                  <p className="text-blue-100 text-sm">{stat.label}</p>
                  <p className="text-3xl font-bold">
                    {stat.value}{stat.suffix}
                  </p>
                  <p className="text-xs text-blue-200">{stat.trend}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Clinical Performance Metrics</h3>
            <p className="text-lg text-gray-600">Monitoring excellence in every aspect of patient care</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {performanceMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <svg className="w-32 h-32 transform -rotate-90">
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="#e5e7eb"
                      strokeWidth="12"
                      fill="none"
                    />
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="#3b82f6"
                      strokeWidth="12"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 56}`}
                      strokeDashoffset={`${2 * Math.PI * 56 * (1 - metric.value / 100)}`}
                      className="transition-all duration-1000"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <metric.icon className="w-6 h-6 text-gray-600 mx-auto mb-1" />
                      <p className="text-2xl font-bold text-gray-900">{metric.value}%</p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 font-medium">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Activity Feed */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Live Activity Feed</h3>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-600">Real-time updates</span>
              </div>
            </div>
            
            <div className="space-y-4">
              {[
                { time: '2 min ago', event: 'New patient appointment scheduled', icon: FiCalendar, color: 'text-blue-600' },
                { time: '15 min ago', event: 'Telehealth consultation completed', icon: FiCheckCircle, color: 'text-green-600' },
                { time: '1 hour ago', event: 'Lab results processed and reviewed', icon: FiBarChart2, color: 'text-purple-600' },
                { time: '2 hours ago', event: 'Patient satisfaction survey: 5/5 stars', icon: FiAward, color: 'text-yellow-600' }
              ].map((activity, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <activity.icon className={`w-5 h-5 ${activity.color}`} />
                  <div className="flex-1">
                    <p className="text-gray-900 font-medium">{activity.event}</p>
                    <p className="text-sm text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
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
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Join Our Growing Patient Community
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Experience data-driven, evidence-based healthcare that puts you first
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://lotusdirectcare.hint.com/signup/"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
            >
              <FiUsers className="w-5 h-5" />
              Become a Member
            </Link>
            <Link
              href="https://app.elationemr.com/book/lotusdirectcare/"
              className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 transition-colors flex items-center justify-center gap-2"
            >
              <FiCalendar className="w-5 h-5" />
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}