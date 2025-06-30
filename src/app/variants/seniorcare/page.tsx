'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FiHeart, FiHome, FiShield, FiUsers, FiPhone, FiMail, FiMapPin, FiClock, FiMenu, FiX, FiSun, FiEye } from 'react-icons/fi'
import JourneySection from '@/components/JourneySection'
import PricingSection from '@/components/PricingSection'
import FeaturesSection from '@/components/FeaturesSection'
import DoctorSection from '@/components/DoctorSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import BlogPreviewSection from '@/components/BlogPreviewSection'

export default function SeniorCareVariant() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [fontSize, setFontSize] = useState('normal')

  const handleFontSizeChange = (size: string) => {
    setFontSize(size)
    document.documentElement.classList.remove('text-base', 'text-lg', 'text-xl')
    if (size === 'large') document.documentElement.classList.add('text-lg')
    if (size === 'extra-large') document.documentElement.classList.add('text-xl')
  }

  const services = [
    {
      icon: <FiHeart className="text-5xl" />,
      title: "Chronic Care Management",
      description: "Comprehensive care for diabetes, heart disease, arthritis, and other chronic conditions",
      features: ["Regular monitoring", "Medication management", "Lifestyle guidance"]
    },
    {
      icon: <FiShield className="text-5xl" />,
      title: "Preventive Health",
      description: "Stay healthy and independent with regular screenings and preventive care",
      features: ["Annual wellness visits", "Vaccination programs", "Fall prevention"]
    },
    {
      icon: <FiHome className="text-5xl" />,
      title: "Home Visit Options",
      description: "Can't make it to the office? We'll come to you with our mobile care services",
      features: ["In-home assessments", "Convenience", "Familiar environment"]
    }
  ]

  const seniorFeatures = [
    "Extended appointment times - no rushing",
    "Same-day appointments available",
    "Direct phone access to Dr. Rosenberg",
    "Coordination with specialists",
    "Family involvement welcomed",
    "Memory care support"
  ]

  return (
    <div className={`min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 ${fontSize}`}>
      {/* Gentle Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200 rounded-full opacity-20 blur-3xl" />
      </div>

      {/* Accessibility Bar */}
      <div className="relative z-50 bg-indigo-900 text-white py-2">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <span className="text-sm">Adjust text size:</span>
          <div className="flex gap-2">
            <button
              onClick={() => handleFontSizeChange('normal')}
              className={`px-3 py-1 rounded ${fontSize === 'normal' ? 'bg-white text-indigo-900' : 'bg-indigo-800'}`}
              aria-label="Normal text size"
            >
              A
            </button>
            <button
              onClick={() => handleFontSizeChange('large')}
              className={`px-4 py-1 rounded text-lg ${fontSize === 'large' ? 'bg-white text-indigo-900' : 'bg-indigo-800'}`}
              aria-label="Large text size"
            >
              A
            </button>
            <button
              onClick={() => handleFontSizeChange('extra-large')}
              className={`px-4 py-1 rounded text-xl ${fontSize === 'extra-large' ? 'bg-white text-indigo-900' : 'bg-indigo-800'}`}
              aria-label="Extra large text size"
            >
              A
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-5">
            <Link href="/" className="flex items-center space-x-3">
              <div className="bg-indigo-600 p-3 rounded-full">
                <FiSun className="text-3xl text-white" />
              </div>
              <div>
                <span className="text-3xl font-bold text-indigo-900">
                  Lotus Senior Care
                </span>
                <span className="block text-sm text-indigo-600">Caring for Your Golden Years</span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/about" className="text-gray-700 hover:text-indigo-600 transition-colors text-lg font-medium">About</Link>
              <Link href="/services" className="text-gray-700 hover:text-indigo-600 transition-colors text-lg font-medium">Services</Link>
              <Link href="/blog" className="text-gray-700 hover:text-indigo-600 transition-colors text-lg font-medium">Health Tips</Link>
              <Link href="/contact" className="text-gray-700 hover:text-indigo-600 transition-colors text-lg font-medium">Contact</Link>
              <Link 
                href="https://app.elationemr.com/book/lotusdirectcare/"
                className="bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition-all text-lg font-semibold"
              >
                Schedule Visit
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-700 text-2xl"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <FiX size={32} /> : <FiMenu size={32} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <Link href="/about" className="block text-gray-700 hover:text-indigo-600 text-lg py-2">About</Link>
              <Link href="/services" className="block text-gray-700 hover:text-indigo-600 text-lg py-2">Services</Link>
              <Link href="/blog" className="block text-gray-700 hover:text-indigo-600 text-lg py-2">Health Tips</Link>
              <Link href="/contact" className="block text-gray-700 hover:text-indigo-600 text-lg py-2">Contact</Link>
              <Link 
                href="https://app.elationemr.com/book/lotusdirectcare/"
                className="block bg-indigo-600 text-white px-6 py-3 rounded-full text-center text-lg"
              >
                Schedule Visit
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-indigo-900">Healthcare That</span>
                <br />
                <span className="text-indigo-600">Honors Your Journey</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                Experience compassionate, personalized medical care designed specifically for seniors. 
                We take the time to listen, understand, and support your health goals.
              </p>

              <div className="bg-indigo-50 rounded-2xl p-8 mb-8 border-2 border-indigo-200">
                <h3 className="text-2xl font-semibold text-indigo-900 mb-4">Why Choose Lotus Senior Care?</h3>
                <ul className="space-y-3">
                  {seniorFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <FiHeart className="text-indigo-600 mt-1 flex-shrink-0" />
                      <span className="text-lg text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="https://lotusdirectcare.hint.com/signup/"
                  className="bg-indigo-600 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-indigo-700 transition-all inline-flex items-center justify-center gap-2"
                >
                  <FiUsers /> Join Our Care Family
                </Link>
                <a 
                  href="tel:4245449007"
                  className="bg-green-600 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-green-700 transition-all inline-flex items-center justify-center gap-2"
                >
                  <FiPhone /> Call (424) 544-9007
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <Image 
                  src="/Lotus Midjourney Flowers/lotus-homepage-new.png"
                  alt="Compassionate Senior Care"
                  width={600}
                  height={600}
                  className="rounded-3xl shadow-2xl"
                />
                <div className="absolute -top-4 -right-4 bg-indigo-600 text-white p-4 rounded-full shadow-lg">
                  <FiEye className="text-3xl" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-purple-600 text-white p-4 rounded-full shadow-lg">
                  <FiHeart className="text-3xl" />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-200 to-purple-200 rounded-3xl blur-3xl opacity-30 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-indigo-900 mb-4">
              Comprehensive Senior Care Services
            </h2>
            <p className="text-xl text-gray-700">Tailored healthcare solutions for your unique needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="text-indigo-600 mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-indigo-900 mb-4">{service.title}</h3>
                <p className="text-lg text-gray-700 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <FiShield className="text-indigo-600 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-3xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-900 mb-12">
              What Our Patients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="text-5xl mr-4">👴</div>
                  <div>
                    <h4 className="text-xl font-bold text-indigo-900">Robert Thompson, 78</h4>
                    <p className="text-indigo-600">Heart Disease Patient</p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 italic">
                  "Dr. Rosenberg doesn't just treat my conditions, he treats me as a whole person. 
                  The extra time he takes to explain everything and answer my questions makes all the difference. 
                  I feel heard and valued."
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="text-5xl mr-4">👵</div>
                  <div>
                    <h4 className="text-xl font-bold text-indigo-900">Eleanor Davis, 82</h4>
                    <p className="text-indigo-600">Diabetes Management</p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 italic">
                  "The home visit option has been a blessing. Having Dr. Rosenberg come to my home 
                  means I don't have to worry about transportation, and I feel more comfortable 
                  discussing my health in my own space."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shared Components */}
      <JourneySection />
      <PricingSection />
      <FeaturesSection />
      <DoctorSection />
      <TestimonialsSection />
      <BlogPreviewSection />

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Your Health Journey Continues Here
          </h2>
          <p className="text-2xl text-white/90 mb-8">
            Experience healthcare that respects your wisdom and supports your independence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="https://app.elationemr.com/book/lotusdirectcare/"
              className="bg-white text-indigo-600 px-10 py-5 rounded-full text-xl font-semibold hover:shadow-xl transition-all"
            >
              Schedule Your Visit
            </Link>
            <Link 
              href="/variants"
              className="border-2 border-white text-white px-10 py-5 rounded-full text-xl font-semibold hover:bg-white hover:text-indigo-600 transition-all"
            >
              Explore All Variants
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-indigo-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <FiSun className="text-3xl" />
                <span className="text-2xl font-bold">Lotus Senior Care</span>
              </div>
              <p className="text-indigo-200 text-lg">Compassionate care for your golden years</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-lg text-indigo-200">
                <li><Link href="/services" className="hover:text-white">Our Services</Link></li>
                <li><Link href="/about" className="hover:text-white">About Dr. Rosenberg</Link></li>
                <li><Link href="/blog" className="hover:text-white">Health Resources</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Contact Us</h4>
              <ul className="space-y-2 text-lg text-indigo-200">
                <li className="flex items-center gap-2">
                  <FiPhone /> (424) 544-9007
                </li>
                <li className="flex items-center gap-2">
                  <FiMail /> info@lotusdirectcare.com
                </li>
                <li className="flex items-center gap-2">
                  <FiMapPin /> Santa Monica, CA
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Office Hours</h4>
              <p className="text-lg text-indigo-200 mb-4">
                <FiClock className="inline mr-2" />
                Mon-Fri: 8:00 AM - 5:00 PM
              </p>
              <Link 
                href="https://app.elationemr.com/book/lotusdirectcare/"
                className="inline-block bg-indigo-700 text-white px-6 py-3 rounded-full hover:bg-indigo-600 transition-all text-lg"
              >
                Book Appointment
              </Link>
            </div>
          </div>
          <div className="border-t border-indigo-800 mt-8 pt-8 text-center text-indigo-200">
            <p className="text-lg">&copy; 2025 Lotus Direct Care. Dedicated to your health and well-being.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}