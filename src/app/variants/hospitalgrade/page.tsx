'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import { FiShield, FiAward, FiCheckCircle, FiPhone, FiMail, FiMapPin, FiClock, FiUsers, FiActivity, FiHeart, FiAlertTriangle, FiFileText } from 'react-icons/fi';
import JourneySection from '@/components/JourneySection';
import PricingSection from '@/components/PricingSection';
import FeaturesSection from '@/components/FeaturesSection';
import DoctorSection from '@/components/DoctorSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import BlogPreviewSection from '@/components/BlogPreviewSection';

export default function HospitalGradeVariant() {
  const [emergencyHover, setEmergencyHover] = useState(false);

  const certifications = [
    { name: 'HIPAA Compliant', icon: FiShield, verified: true },
    { name: 'Board Certified', icon: FiAward, verified: true },
    { name: 'CDC Guidelines', icon: FiCheckCircle, verified: true },
    { name: 'OSHA Standards', icon: FiFileText, verified: true }
  ];

  const clinicalServices = [
    {
      title: 'Primary Care',
      description: 'Comprehensive health management',
      icon: FiHeart,
      available: true
    },
    {
      title: 'Urgent Care',
      description: 'Same-day appointments available',
      icon: FiAlertTriangle,
      available: true
    },
    {
      title: 'Preventive Medicine',
      description: 'Annual wellness exams & screenings',
      icon: FiActivity,
      available: true
    },
    {
      title: 'Chronic Disease Management',
      description: 'Evidence-based treatment protocols',
      icon: FiUsers,
      available: true
    }
  ];

  const safetyProtocols = [
    'Sterile clinical environment maintained to hospital standards',
    'Advanced air filtration and UV sanitization systems',
    'Personal protective equipment for all staff',
    'Contactless check-in and payment options',
    'Private examination rooms with medical-grade equipment',
    'Regular safety audits and quality assurance checks'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar - Emergency Contact */}
      <div className="bg-red-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-sm">
          <p>For medical emergencies, call 911</p>
          <p className="flex items-center gap-2">
            <FiPhone className="w-4 h-4" />
            Non-emergency: (555) 123-4567
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white border-b-2 border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="/Lotus Midjourney Flowers/lotus-homepage-new.png"
                  alt="Lotus Direct Care"
                  width={60}
                  height={60}
                  className="mr-4"
                />
                <div>
                  <h1 className="text-2xl font-bold text-[#0066CC]">Lotus Direct Care</h1>
                  <p className="text-xs text-gray-600 uppercase tracking-wide">Medical Excellence</p>
                </div>
              </Link>
            </div>
            <div className="flex items-center gap-6">
              <Link
                href="/variants"
                className="text-gray-700 hover:text-[#0066CC] transition-colors font-medium"
              >
                View All Variants
              </Link>
              <Link
                href="https://app.elationemr.com/book/lotusdirectcare/"
                className="bg-[#0066CC] text-white px-8 py-3 rounded hover:bg-[#0052A3] transition-colors font-semibold"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Hospital-Grade Care. Personal Touch.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the highest standards of medical care in a comfortable, patient-centered environment
            </p>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <cert.icon className="w-8 h-8 text-[#0066CC]" />
                  {cert.verified && (
                    <FiCheckCircle className="w-5 h-5 text-green-600" />
                  )}
                </div>
                <p className="font-semibold text-gray-900">{cert.name}</p>
                <p className="text-xs text-gray-600 mt-1">Verified & Current</p>
              </div>
            ))}
          </div>

          {/* Clinical Photo Banner */}
          <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#0066CC]/90 to-[#0066CC]/70 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-3xl font-bold mb-4">State-of-the-Art Medical Facility</h3>
                <p className="text-lg mb-6">Equipped with the latest medical technology and staffed by experienced professionals</p>
                <Link
                  href="https://app.elationemr.com/book/lotusdirectcare/"
                  className="inline-flex items-center gap-2 bg-white text-[#0066CC] px-6 py-3 rounded font-semibold hover:bg-gray-100 transition-colors"
                >
                  <FiClock className="w-5 h-5" />
                  Schedule Your Visit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Comprehensive Medical Services
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clinicalServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="w-16 h-16 bg-[#0066CC]/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-8 h-8 text-[#0066CC]" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h4>
                <p className="text-gray-600 text-sm mb-3">{service.description}</p>
                {service.available && (
                  <p className="text-green-600 text-sm font-medium flex items-center gap-1">
                    <FiCheckCircle className="w-4 h-4" />
                    Currently Available
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Protocols */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Your Safety Is Our Priority
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                We maintain the highest standards of cleanliness and safety, exceeding CDC guidelines and hospital-grade protocols.
              </p>
              
              <div className="space-y-4">
                {safetyProtocols.map((protocol, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <FiCheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">{protocol}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-[#0066CC]/5 p-8 rounded-lg">
              <h4 className="text-2xl font-bold text-[#0066CC] mb-4">
                Quality Assurance Metrics
              </h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Patient Satisfaction</span>
                  <span className="font-bold text-gray-900">98.5%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Safety Compliance</span>
                  <span className="font-bold text-gray-900">100%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Clinical Excellence</span>
                  <span className="font-bold text-gray-900">A+ Rating</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Infection Control</span>
                  <span className="font-bold text-gray-900">Zero Incidents</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <FiMapPin className="w-8 h-8 text-[#0066CC] mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Location</h4>
                <p className="text-gray-600">123 Medical Center Dr<br />Healthcare City, HC 12345</p>
              </div>
              <div>
                <FiClock className="w-8 h-8 text-[#0066CC] mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Hours</h4>
                <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM<br />Saturday: 9:00 AM - 2:00 PM</p>
              </div>
              <div>
                <FiPhone className="w-8 h-8 text-[#0066CC] mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Contact</h4>
                <p className="text-gray-600">Phone: (555) 123-4567<br />Email: care@lotusdirectcare.com</p>
              </div>
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
      <section className="bg-[#0066CC] py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Experience Healthcare Excellence
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of patients who trust us with their health
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://lotusdirectcare.hint.com/signup/"
              className="bg-white text-[#0066CC] px-8 py-4 rounded font-semibold hover:bg-gray-100 transition-colors"
            >
              Become a Member
            </Link>
            <Link
              href="https://app.elationemr.com/book/lotusdirectcare/"
              className="bg-[#0052A3] text-white px-8 py-4 rounded font-semibold hover:bg-[#004080] transition-colors"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}