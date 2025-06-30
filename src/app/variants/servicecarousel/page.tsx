'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiChevronLeft, FiChevronRight, FiX, FiCheck, FiClock, FiDollarSign, FiUsers, FiActivity } from 'react-icons/fi';
import JourneySection from '@/components/JourneySection';
import PricingSection from '@/components/PricingSection';
import FeaturesSection from '@/components/FeaturesSection';
import DoctorSection from '@/components/DoctorSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import BlogPreviewSection from '@/components/BlogPreviewSection';

interface Service {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  duration: string;
  price: string;
  ideal: string;
  icon: JSX.Element;
  color: string;
  image: string;
}

const services: Service[] = [
  {
    id: 1,
    title: 'Direct Primary Care',
    shortDescription: 'Unlimited access to your personal physician',
    fullDescription: 'Experience healthcare as it should be. With Direct Primary Care, you get unlimited office visits, extended appointments, and 24/7 access to your doctor. No insurance hassles, no long waits, just personalized care focused on keeping you healthy.',
    benefits: [
      'Same-day or next-day appointments',
      '30-60 minute unhurried visits',
      'Direct phone/text access to your doctor',
      'No copays or surprise bills',
      'Wholesale medication pricing',
      'Basic labs and procedures included'
    ],
    duration: 'Ongoing membership',
    price: 'From $109/month',
    ideal: 'Individuals and families seeking better primary care',
    icon: <FiUsers className="w-8 h-8" />,
    color: 'from-blue-500 to-cyan-500',
    image: '/Lotus Midjourney Flowers/lotus-homepage-new.png'
  },
  {
    id: 2,
    title: 'Ketamine Therapy',
    shortDescription: 'Revolutionary treatment for depression and chronic pain',
    fullDescription: 'Ketamine therapy offers rapid relief for treatment-resistant depression, anxiety, PTSD, and chronic pain conditions. Our medically supervised sessions provide a safe, comfortable environment for this breakthrough treatment.',
    benefits: [
      'Rapid symptom relief (often within hours)',
      'Effective for treatment-resistant conditions',
      'Supervised by medical professionals',
      'Comfortable, relaxing environment',
      'Personalized dosing protocols',
      'Integration support available'
    ],
    duration: '60-90 minutes per session',
    price: 'Member pricing available',
    ideal: 'Those with depression, anxiety, PTSD, or chronic pain',
    icon: <FiActivity className="w-8 h-8" />,
    color: 'from-purple-500 to-pink-500',
    image: '/Lotus Midjourney Flowers/lotus-homepage-new.png'
  },
  {
    id: 3,
    title: 'PRP Injections',
    shortDescription: 'Natural healing using your body\'s own growth factors',
    fullDescription: 'Platelet-Rich Plasma therapy harnesses your body\'s natural healing power. We concentrate healing factors from your blood and inject them precisely where needed for joint pain, hair restoration, and aesthetic rejuvenation.',
    benefits: [
      'Uses your own healing factors',
      'Minimal downtime',
      'Natural, long-lasting results',
      'Effective for multiple conditions',
      'Non-surgical alternative',
      'Stimulates tissue regeneration'
    ],
    duration: '45-60 minutes',
    price: 'Starting at $500',
    ideal: 'Joint pain, hair loss, or skin rejuvenation needs',
    icon: <FiActivity className="w-8 h-8" />,
    color: 'from-green-500 to-emerald-500',
    image: '/Lotus Midjourney Flowers/lotus-homepage-new.png'
  },
  {
    id: 4,
    title: 'Functional Medicine',
    shortDescription: 'Root-cause approach to chronic health issues',
    fullDescription: 'Go beyond symptom management. Our functional medicine approach investigates the underlying causes of illness through comprehensive testing and analysis, creating personalized treatment plans for optimal health.',
    benefits: [
      'Comprehensive health assessment',
      'Advanced laboratory testing',
      'Personalized nutrition plans',
      'Targeted supplement protocols',
      'Lifestyle optimization strategies',
      'Long-term health transformation'
    ],
    duration: 'Initial consult: 90 minutes',
    price: 'Included with membership',
    ideal: 'Chronic conditions, fatigue, digestive issues',
    icon: <FiActivity className="w-8 h-8" />,
    color: 'from-orange-500 to-red-500',
    image: '/Lotus Midjourney Flowers/lotus-homepage-new.png'
  },
  {
    id: 5,
    title: 'Addiction Treatment',
    shortDescription: 'Compassionate, evidence-based recovery support',
    fullDescription: 'Break free from addiction with our comprehensive treatment program. We offer medication-assisted treatment including Suboxone, combined with counseling and ongoing support for sustainable recovery.',
    benefits: [
      'Medication-assisted treatment (MAT)',
      'Individualized recovery plans',
      'Regular monitoring and support',
      'Counseling referrals',
      'Judgment-free environment',
      'Long-term recovery focus'
    ],
    duration: 'Ongoing treatment',
    price: 'Covered by most insurance',
    ideal: 'Those seeking recovery from opioid addiction',
    icon: <FiUsers className="w-8 h-8" />,
    color: 'from-indigo-500 to-purple-500',
    image: '/Lotus Midjourney Flowers/lotus-homepage-new.png'
  }
];

export default function ServiceCarouselPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  useEffect(() => {
    if (isAutoPlaying && !selectedService) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % services.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, selectedService]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/Lotus Midjourney Flowers/lotus-homepage-new.png"
                alt="Lotus Direct Care"
                width={50}
                height={50}
                className="rounded-full"
              />
              <span className="text-2xl font-bold text-gray-800">
                Lotus Direct Care
              </span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/variants" className="text-gray-700 hover:text-blue-600 transition-colors">
                All Variants
              </Link>
              <Link href="https://app.elationemr.com/book/lotusdirectcare/" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
                Book Appointment
              </Link>
              <Link href="https://lotusdirectcare.hint.com/signup/" className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors">
                Join Now
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Carousel Section */}
      <section className="relative overflow-hidden py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-800">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive healthcare services designed to transform your health journey
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative max-w-6xl mx-auto">
            <div className="overflow-hidden rounded-2xl shadow-2xl bg-white">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {services.map((service) => (
                  <div key={service.id} className="w-full flex-shrink-0">
                    <div className="relative h-[500px] bg-gradient-to-br from-white to-gray-50">
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5`} />
                      <div className="relative z-10 h-full flex flex-col items-center justify-center p-12 text-center">
                        <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-6`}>
                          {service.icon}
                        </div>
                        <h2 className="text-4xl font-bold mb-4 text-gray-800">
                          {service.title}
                        </h2>
                        <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                          {service.shortDescription}
                        </p>
                        <button
                          onClick={() => setSelectedService(service)}
                          className={`bg-gradient-to-r ${service.color} text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all transform hover:scale-105`}
                        >
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-all"
            >
              <FiChevronLeft className="w-6 h-6 text-gray-800" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-all"
            >
              <FiChevronRight className="w-6 h-6 text-gray-800" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-12 bg-gradient-to-r from-blue-500 to-green-500'
                      : 'w-3 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Service Grid */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {services.map((service, index) => (
              <button
                key={service.id}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(index);
                  setSelectedService(service);
                }}
                className={`p-4 rounded-xl border-2 transition-all ${
                  index === currentIndex
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300 bg-white'
                }`}
              >
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center text-white mx-auto mb-2`}>
                  {service.icon}
                </div>
                <h3 className="font-semibold text-sm text-gray-800">
                  {service.title}
                </h3>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Service Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className={`relative h-48 bg-gradient-to-br ${selectedService.color}`}>
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors"
              >
                <FiX className="w-6 h-6 text-white" />
              </button>
              <div className="h-full flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-4">
                    {selectedService.icon}
                  </div>
                  <h2 className="text-3xl font-bold">{selectedService.title}</h2>
                </div>
              </div>
            </div>

            <div className="p-8">
              <p className="text-lg text-gray-700 mb-6">
                {selectedService.fullDescription}
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <FiCheck className="w-5 h-5 text-green-500" />
                    Key Benefits
                  </h3>
                  <ul className="space-y-2">
                    {selectedService.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <FiCheck className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="flex items-center gap-2 text-gray-700 mb-1">
                      <FiClock className="w-4 h-4" />
                      <span className="font-semibold">Duration</span>
                    </div>
                    <p className="text-gray-600">{selectedService.duration}</p>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="flex items-center gap-2 text-gray-700 mb-1">
                      <FiDollarSign className="w-4 h-4" />
                      <span className="font-semibold">Investment</span>
                    </div>
                    <p className="text-gray-600">{selectedService.price}</p>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="flex items-center gap-2 text-gray-700 mb-1">
                      <FiUsers className="w-4 h-4" />
                      <span className="font-semibold">Ideal For</span>
                    </div>
                    <p className="text-gray-600">{selectedService.ideal}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://app.elationemr.com/book/lotusdirectcare/"
                  className={`bg-gradient-to-r ${selectedService.color} text-white px-8 py-3 rounded-full font-semibold text-center hover:shadow-lg transition-all`}
                >
                  Book Consultation
                </Link>
                <button
                  onClick={() => setSelectedService(null)}
                  className="bg-gray-200 text-gray-800 px-8 py-3 rounded-full font-semibold hover:bg-gray-300 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Standard Sections */}
      <JourneySection />
      <PricingSection />
      <FeaturesSection />
      <DoctorSection />
      <TestimonialsSection />
      <BlogPreviewSection />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <div className="space-y-2">
                <p>239-277-8900</p>
                <p>info@lotusdirectcare.com</p>
                <p>Fort Myers, FL</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link href="/variants" className="block hover:text-blue-400 transition-colors">
                  All Website Variants
                </Link>
                <Link href="https://lotusdirectcare.hint.com/signup/" className="block hover:text-blue-400 transition-colors">
                  Become a Member
                </Link>
                <Link href="https://app.elationemr.com/book/lotusdirectcare/" className="block hover:text-blue-400 transition-colors">
                  Book Appointment
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">About This Design</h3>
              <p className="text-gray-400">
                Service Carousel Variant - An interactive showcase of our healthcare services with detailed information modals.
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Lotus Direct Care. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}