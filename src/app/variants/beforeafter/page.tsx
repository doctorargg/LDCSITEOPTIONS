'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiInfo, FiChevronLeft, FiChevronRight, FiShield, FiEye, FiCheckCircle } from 'react-icons/fi';
import JourneySection from '@/components/JourneySection';
import PricingSection from '@/components/PricingSection';
import FeaturesSection from '@/components/FeaturesSection';
import DoctorSection from '@/components/DoctorSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import BlogPreviewSection from '@/components/BlogPreviewSection';

interface BeforeAfterCase {
  id: number;
  category: string;
  title: string;
  description: string;
  duration: string;
  treatment: string;
  results: string[];
  disclaimer?: string;
}

const cases: BeforeAfterCase[] = [
  {
    id: 1,
    category: 'Weight Management',
    title: 'Sustainable Weight Loss Journey',
    description: 'Through our functional medicine approach, this patient achieved significant weight loss by addressing underlying metabolic issues.',
    duration: '6 months',
    treatment: 'Functional Medicine + Lifestyle Coaching',
    results: [
      '45 pounds lost',
      'Normalized blood pressure',
      'Improved energy levels',
      'Better sleep quality'
    ]
  },
  {
    id: 2,
    category: 'Chronic Pain',
    title: 'Knee Pain Resolution',
    description: 'PRP injections helped this patient avoid knee surgery and return to an active lifestyle.',
    duration: '3 months',
    treatment: 'PRP Injections (3 sessions)',
    results: [
      '90% pain reduction',
      'Full range of motion restored',
      'Return to running',
      'No surgery needed'
    ]
  },
  {
    id: 3,
    category: 'Mental Health',
    title: 'Depression Recovery',
    description: 'Ketamine therapy provided rapid relief for treatment-resistant depression.',
    duration: '6 weeks',
    treatment: 'Ketamine Infusion Therapy',
    results: [
      'Significant mood improvement',
      'Reduced anxiety',
      'Better sleep patterns',
      'Increased motivation'
    ]
  },
  {
    id: 4,
    category: 'Skin Health',
    title: 'Acne Scar Improvement',
    description: 'PRP facial treatments significantly improved skin texture and reduced scarring.',
    duration: '4 months',
    treatment: 'PRP Facial Rejuvenation',
    results: [
      'Smoother skin texture',
      '70% scar reduction',
      'Improved skin tone',
      'Enhanced collagen production'
    ]
  },
  {
    id: 5,
    category: 'Hair Restoration',
    title: 'Natural Hair Regrowth',
    description: 'PRP scalp treatments stimulated natural hair growth without surgery.',
    duration: '6 months',
    treatment: 'PRP Hair Restoration',
    results: [
      'Visible new growth',
      'Thicker hair density',
      'Reduced hair loss',
      'Improved scalp health'
    ]
  },
  {
    id: 6,
    category: 'Chronic Fatigue',
    title: 'Energy Restoration',
    description: 'Comprehensive functional medicine testing revealed and treated root causes of fatigue.',
    duration: '4 months',
    treatment: 'Functional Medicine Protocol',
    results: [
      'Normal energy levels',
      'Better mental clarity',
      'Improved digestion',
      'Optimal vitamin levels'
    ]
  }
];

const categories = ['All', 'Weight Management', 'Chronic Pain', 'Mental Health', 'Skin Health', 'Hair Restoration', 'Chronic Fatigue'];

export default function BeforeAfterPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedCase, setSelectedCase] = useState<BeforeAfterCase | null>(null);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const filteredCases = cases.filter(
    c => selectedCategory === 'All' || c.category === selectedCategory
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-blue-50 to-purple-50">
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
              <span className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                Lotus Direct Care
              </span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/variants" className="text-gray-700 hover:text-teal-600 transition-colors">
                All Variants
              </Link>
              <Link href="https://app.elationemr.com/book/lotusdirectcare/" className="bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition-colors">
                Book Appointment
              </Link>
              <Link href="https://lotusdirectcare.hint.com/signup/" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
                Join Now
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                Real Results, Real Transformations
              </span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-6">
              See how our comprehensive approach to healthcare creates lasting positive changes in our patients\' lives
            </p>
            
            {/* Privacy Notice */}
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm">
              <FiShield className="w-4 h-4" />
              <span>All results shown with patient consent. Individual results may vary.</span>
            </div>
          </div>

          {/* Interactive Slider Demo */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="p-6 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
                <h3 className="text-2xl font-bold mb-2">Interactive Before/After Viewer</h3>
                <p className="text-white/90">Drag the slider to compare results</p>
              </div>
              
              <div
                className="relative h-96 cursor-ew-resize select-none"
                onMouseMove={handleMouseMove}
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onMouseLeave={() => setIsDragging(false)}
                onTouchMove={handleTouchMove}
                onTouchStart={() => setIsDragging(true)}
                onTouchEnd={() => setIsDragging(false)}
              >
                {/* Before Image (Placeholder) */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300">
                  <div className="h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl font-bold text-gray-400 mb-2">BEFORE</div>
                      <p className="text-gray-500">Initial Consultation</p>
                    </div>
                  </div>
                </div>
                
                {/* After Image (Placeholder) */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-teal-100 to-blue-100 overflow-hidden"
                  style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                >
                  <div className="h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl font-bold text-teal-600 mb-2">AFTER</div>
                      <p className="text-blue-600">Treatment Complete</p>
                      <div className="mt-4 space-y-2">
                        <FiCheckCircle className="w-12 h-12 text-green-500 mx-auto" />
                        <p className="text-sm text-gray-600">Successful Transformation</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Slider Handle */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
                  style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
                >
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg">
                    <div className="flex items-center gap-1">
                      <FiChevronLeft className="w-4 h-4 text-gray-600" />
                      <FiChevronRight className="w-4 h-4 text-gray-600" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-teal-600 to-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Cases Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCases.map((caseItem) => (
              <div
                key={caseItem.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer group"
                onClick={() => setSelectedCase(caseItem)}
              >
                <div className="h-48 bg-gradient-to-br from-teal-100 to-blue-100 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-sm font-medium text-teal-600 mb-2">{caseItem.category}</div>
                      <h3 className="text-xl font-bold text-gray-800">{caseItem.title}</h3>
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <FiEye className="w-4 h-4 text-gray-600" />
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-4 line-clamp-2">{caseItem.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Duration: {caseItem.duration}</span>
                    <span className="text-teal-600 font-medium">View Details →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-teal-300/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-300/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </section>

      {/* Case Detail Modal */}
      {selectedCase && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-white border-b p-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-800">{selectedCase.title}</h2>
              <button
                onClick={() => setSelectedCase(null)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <FiChevronLeft className="w-6 h-6 text-gray-600" />
              </button>
            </div>
            
            <div className="p-6 space-y-6">
              <div>
                <span className="inline-block px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium mb-3">
                  {selectedCase.category}
                </span>
                <p className="text-gray-700 leading-relaxed">{selectedCase.description}</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Treatment Details</h3>
                  <p className="text-gray-600">{selectedCase.treatment}</p>
                  <p className="text-sm text-gray-500 mt-1">Duration: {selectedCase.duration}</p>
                </div>
                
                <div className="bg-teal-50 rounded-xl p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Results Achieved</h3>
                  <ul className="space-y-1">
                    {selectedCase.results.map((result, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-600">
                        <FiCheckCircle className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {selectedCase.disclaimer && (
                <div className="bg-blue-50 rounded-xl p-4 flex gap-3">
                  <FiInfo className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-blue-800">{selectedCase.disclaimer}</p>
                </div>
              )}
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="https://app.elationemr.com/book/lotusdirectcare/"
                  className="bg-gradient-to-r from-teal-600 to-blue-600 text-white px-6 py-3 rounded-full font-semibold text-center hover:shadow-lg transition-all"
                >
                  Start Your Transformation
                </Link>
                <button
                  onClick={() => setSelectedCase(null)}
                  className="bg-gray-200 text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-300 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Every transformation begins with a single step. Schedule your consultation today and discover what\'s possible with personalized care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://app.elationemr.com/book/lotusdirectcare/"
              className="bg-white text-teal-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
            >
              Book Consultation
            </Link>
            <a
              href="tel:239-277-8900"
              className="bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-full font-semibold hover:bg-white/30 transition-all"
            >
              Call 239-277-8900
            </a>
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
                <Link href="/variants" className="block hover:text-teal-400 transition-colors">
                  All Website Variants
                </Link>
                <Link href="https://lotusdirectcare.hint.com/signup/" className="block hover:text-teal-400 transition-colors">
                  Become a Member
                </Link>
                <Link href="https://app.elationemr.com/book/lotusdirectcare/" className="block hover:text-teal-400 transition-colors">
                  Book Appointment
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">About This Design</h3>
              <p className="text-gray-400">
                Before/After Gallery Variant - Interactive comparison tools showcasing patient transformations with privacy-conscious presentation.
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