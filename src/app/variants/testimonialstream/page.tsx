'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiStar, FiHeart, FiMessageSquare, FiShare2, FiFilter, FiChevronDown } from 'react-icons/fi';
import JourneySection from '@/components/JourneySection';
import PricingSection from '@/components/PricingSection';
import FeaturesSection from '@/components/FeaturesSection';
import DoctorSection from '@/components/DoctorSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import BlogPreviewSection from '@/components/BlogPreviewSection';

interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  date: string;
  service: string;
  review: string;
  likes: number;
  verified: boolean;
  highlighted?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    avatar: 'SJ',
    rating: 5,
    date: '2 days ago',
    service: 'Direct Primary Care',
    review: 'Finally found a doctor who actually listens! Dr. Rosenberg spent 45 minutes with me, answered all my questions, and I can text him directly. This is healthcare done right.',
    likes: 42,
    verified: true,
    highlighted: 'actually listens'
  },
  {
    id: 2,
    name: 'Michael Chen',
    avatar: 'MC',
    rating: 5,
    date: '1 week ago',
    service: 'Ketamine Therapy',
    review: 'After struggling with depression for years, ketamine therapy gave me my life back. The staff was incredibly supportive throughout the entire process. I\'m grateful beyond words.',
    likes: 78,
    verified: true,
    highlighted: 'gave me my life back'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    avatar: 'ER',
    rating: 5,
    date: '2 weeks ago',
    service: 'PRP Injections',
    review: 'My knee pain is completely gone after PRP treatment! I avoided surgery and I\'m back to running. The whole process was professional and the results exceeded expectations.',
    likes: 56,
    verified: true,
    highlighted: 'avoided surgery'
  },
  {
    id: 4,
    name: 'David Thompson',
    avatar: 'DT',
    rating: 5,
    date: '3 weeks ago',
    service: 'Functional Medicine',
    review: 'They found the root cause of my chronic fatigue when other doctors just prescribed more pills. The comprehensive testing and personalized plan changed everything.',
    likes: 91,
    verified: true,
    highlighted: 'found the root cause'
  },
  {
    id: 5,
    name: 'Jennifer Williams',
    avatar: 'JW',
    rating: 5,
    date: '1 month ago',
    service: 'Direct Primary Care',
    review: 'Same-day appointments are real! I texted Dr. Rosenberg at 9am and was seen by noon. No more waiting weeks to see my doctor. Worth every penny of the membership.',
    likes: 64,
    verified: true,
    highlighted: 'Same-day appointments'
  },
  {
    id: 6,
    name: 'Robert Martinez',
    avatar: 'RM',
    rating: 5,
    date: '1 month ago',
    service: 'Addiction Treatment',
    review: 'The compassionate, judgment-free care I received here saved my life. The Suboxone program combined with the support has given me 6 months clean. Forever grateful.',
    likes: 103,
    verified: true,
    highlighted: 'saved my life'
  },
  {
    id: 7,
    name: 'Lisa Anderson',
    avatar: 'LA',
    rating: 5,
    date: '2 months ago',
    service: 'Ketamine Therapy',
    review: 'My anxiety was debilitating. After just 3 sessions, I feel like myself again. The clinical team made me feel safe and supported throughout. This treatment is revolutionary.',
    likes: 87,
    verified: true,
    highlighted: 'feel like myself again'
  },
  {
    id: 8,
    name: 'James Wilson',
    avatar: 'JW',
    rating: 5,
    date: '2 months ago',
    service: 'Direct Primary Care',
    review: 'My whole family switched to DPC and it\'s been amazing. Kids love that appointments aren\'t rushed. We save money and get better care. Should have done this years ago!',
    likes: 72,
    verified: true,
    highlighted: 'save money and get better care'
  }
];

const serviceFilters = ['All Services', 'Direct Primary Care', 'Ketamine Therapy', 'PRP Injections', 'Functional Medicine', 'Addiction Treatment'];

export default function TestimonialStreamPage() {
  const [filter, setFilter] = useState('All Services');
  const [likedPosts, setLikedPosts] = useState<number[]>([]);
  const [visibleTestimonials, setVisibleTestimonials] = useState(4);
  const [isLoading, setIsLoading] = useState(false);
  const observerRef = useRef<HTMLDivElement>(null);

  const filteredTestimonials = testimonials.filter(
    testimonial => filter === 'All Services' || testimonial.service === filter
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && visibleTestimonials < filteredTestimonials.length) {
          setIsLoading(true);
          setTimeout(() => {
            setVisibleTestimonials(prev => Math.min(prev + 2, filteredTestimonials.length));
            setIsLoading(false);
          }, 500);
        }
      },
      { threshold: 0.1 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => observer.disconnect();
  }, [visibleTestimonials, filteredTestimonials.length]);

  const toggleLike = (id: number) => {
    setLikedPosts(prev =>
      prev.includes(id)
        ? prev.filter(postId => postId !== id)
        : [...prev, id]
    );
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FiStar
        key={i}
        className={`w-4 h-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  const highlightText = (text: string, highlight?: string) => {
    if (!highlight) return text;
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return parts.map((part, i) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <span key={i} className="font-bold text-blue-600">{part}</span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
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

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-800">
              Real Patient Stories
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how Lotus Direct Care is transforming healthcare experiences, one patient at a time
            </p>
            <div className="flex items-center justify-center gap-4 mt-6">
              <div className="flex items-center gap-1">
                {renderStars(5)}
              </div>
              <span className="text-lg font-semibold">4.9/5 Average Rating</span>
              <span className="text-gray-500">|</span>
              <span className="text-lg">500+ Happy Patients</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="sticky top-[82px] z-40 bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4 overflow-x-auto">
            <div className="flex items-center gap-2 text-gray-700 flex-shrink-0">
              <FiFilter className="w-5 h-5" />
              <span className="font-medium">Filter by:</span>
            </div>
            <div className="flex gap-2">
              {serviceFilters.map(service => (
                <button
                  key={service}
                  onClick={() => {
                    setFilter(service);
                    setVisibleTestimonials(4);
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                    filter === service
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {service}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Stream */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto space-y-6">
            {filteredTestimonials.slice(0, visibleTestimonials).map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Header */}
                <div className="p-6 pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center text-white font-bold">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                          {testimonial.verified && (
                            <span className="bg-blue-100 text-blue-600 text-xs px-2 py-0.5 rounded-full">
                              Verified Patient
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <span>{testimonial.date}</span>
                          <span>•</span>
                          <span>{testimonial.service}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-700 leading-relaxed">
                    {highlightText(testimonial.review, testimonial.highlighted)}
                  </p>
                </div>

                {/* Actions */}
                <div className="px-6 py-3 bg-gray-50 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => toggleLike(testimonial.id)}
                      className={`flex items-center gap-2 transition-colors ${
                        likedPosts.includes(testimonial.id)
                          ? 'text-red-500'
                          : 'text-gray-500 hover:text-red-500'
                      }`}
                    >
                      <FiHeart
                        className={`w-5 h-5 ${
                          likedPosts.includes(testimonial.id) ? 'fill-current' : ''
                        }`}
                      />
                      <span className="text-sm font-medium">
                        {testimonial.likes + (likedPosts.includes(testimonial.id) ? 1 : 0)}
                      </span>
                    </button>
                    <button className="flex items-center gap-2 text-gray-500 hover:text-blue-500 transition-colors">
                      <FiMessageSquare className="w-5 h-5" />
                      <span className="text-sm font-medium">Reply</span>
                    </button>
                    <button className="flex items-center gap-2 text-gray-500 hover:text-green-500 transition-colors">
                      <FiShare2 className="w-5 h-5" />
                      <span className="text-sm font-medium">Share</span>
                    </button>
                  </div>
                  <span className="text-xs text-gray-400">
                    Was this helpful?
                  </span>
                </div>
              </div>
            ))}

            {/* Loading Indicator */}
            {isLoading && (
              <div className="text-center py-8">
                <div className="inline-flex items-center gap-2 text-gray-500">
                  <div className="w-4 h-4 border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin" />
                  <span>Loading more stories...</span>
                </div>
              </div>
            )}

            {/* Infinite Scroll Trigger */}
            {visibleTestimonials < filteredTestimonials.length && (
              <div ref={observerRef} className="h-20" />
            )}

            {/* End of Feed */}
            {visibleTestimonials >= filteredTestimonials.length && (
              <div className="text-center py-12">
                <p className="text-gray-500 mb-4">You\'ve reached the end of patient stories</p>
                <Link
                  href="https://app.elationemr.com/book/lotusdirectcare/"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
                >
                  Start Your Story
                  <FiChevronDown className="w-4 h-4 rotate-[-90deg]" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Join Our Community of Happy Patients
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Experience healthcare that puts you first. Schedule your consultation today and see why our patients love Lotus Direct Care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://app.elationemr.com/book/lotusdirectcare/"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
            >
              Book Consultation
            </Link>
            <Link
              href="https://lotusdirectcare.hint.com/signup/"
              className="bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-full font-semibold hover:bg-white/30 transition-all"
            >
              View Membership Options
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
                Testimonial Stream Variant - A social media-style feed showcasing real patient experiences with interactive engagement features.
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Lotus Direct Care. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}