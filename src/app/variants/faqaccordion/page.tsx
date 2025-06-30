'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiSearch, FiPlus, FiMinus, FiPhone, FiMail, FiMapPin, FiChevronDown } from 'react-icons/fi';
import JourneySection from '@/components/JourneySection';
import PricingSection from '@/components/PricingSection';
import FeaturesSection from '@/components/FeaturesSection';
import DoctorSection from '@/components/DoctorSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import BlogPreviewSection from '@/components/BlogPreviewSection';

interface FAQ {
  id: number;
  category: string;
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    id: 1,
    category: 'Direct Primary Care',
    question: 'What is Direct Primary Care and how does it work?',
    answer: 'Direct Primary Care (DPC) is a healthcare model where patients pay a monthly membership fee directly to their physician for comprehensive primary care services. This eliminates insurance billing, reduces overhead costs, and allows doctors to spend more time with patients. You get unlimited visits, same-day appointments, and direct access to your doctor via phone, text, or email.'
  },
  {
    id: 2,
    category: 'Direct Primary Care',
    question: 'Can I keep my insurance if I join?',
    answer: 'Yes! DPC complements your insurance. We recommend keeping insurance for specialists, hospitalizations, and emergencies. Many patients pair DPC with a high-deductible health plan to save money while getting better primary care access.'
  },
  {
    id: 3,
    category: 'Membership',
    question: 'What\'s included in my membership?',
    answer: 'Your membership includes unlimited office visits, same-day appointments, extended appointment times (30-60 minutes), 24/7 access to your doctor, basic lab work, minor procedures, chronic disease management, preventive care, and significant discounts on medications and additional services.'
  },
  {
    id: 4,
    category: 'Ketamine Therapy',
    question: 'Is ketamine therapy safe and who is it for?',
    answer: 'Ketamine therapy is FDA-approved and has been safely used in medical settings for decades. It\'s effective for treatment-resistant depression, anxiety, PTSD, and chronic pain. Our medical team conducts thorough evaluations to ensure it\'s appropriate for each patient.'
  },
  {
    id: 5,
    category: 'Ketamine Therapy',
    question: 'What should I expect during a ketamine session?',
    answer: 'Sessions last 60-90 minutes in a comfortable, monitored setting. You\'ll receive a low dose of ketamine while relaxing. Many patients experience mild dissociation or floating sensations. Our staff monitors you throughout, and most patients see improvement within 1-3 sessions.'
  },
  {
    id: 6,
    category: 'PRP Injections',
    question: 'How do PRP injections work?',
    answer: 'PRP uses your own blood\'s healing factors. We draw a small amount of blood, concentrate the platelets and growth factors, then inject them into the treatment area. This stimulates natural healing and regeneration for joint pain, hair loss, and skin rejuvenation.'
  },
  {
    id: 7,
    category: 'Functional Medicine',
    question: 'What\'s different about functional medicine?',
    answer: 'Functional medicine looks for root causes of illness rather than just treating symptoms. We use comprehensive testing, detailed health histories, and personalized treatment plans that may include nutrition, supplements, lifestyle changes, and conventional medicine when needed.'
  },
  {
    id: 8,
    category: 'Costs',
    question: 'How much does membership cost?',
    answer: 'Membership starts at $109/month for adults, with discounts for families and seniors. This covers all primary care services. Additional services like ketamine therapy or PRP are priced separately but members receive significant discounts.'
  },
  {
    id: 9,
    category: 'Getting Started',
    question: 'How do I become a patient?',
    answer: 'Simply book a meet-and-greet appointment online or call us. We\'ll discuss your health goals, explain our services, and help you choose the right membership. You can start receiving care immediately after signing up.'
  },
  {
    id: 10,
    category: 'Appointments',
    question: 'How quickly can I get an appointment?',
    answer: 'Most patients get same-day or next-day appointments. Emergency concerns are addressed immediately via phone or text. With our smaller patient panel, you\'ll never wait weeks to see your doctor.'
  }
];

const categories = ['All', 'Direct Primary Care', 'Membership', 'Ketamine Therapy', 'PRP Injections', 'Functional Medicine', 'Costs', 'Getting Started', 'Appointments'];

export default function FAQAccordionPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleExpand = (id: number) => {
    setExpandedItems(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
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
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Lotus Direct Care
              </span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/variants" className="text-gray-700 hover:text-purple-600 transition-colors">
                All Variants
              </Link>
              <Link href="https://app.elationemr.com/book/lotusdirectcare/" className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors">
                Book Appointment
              </Link>
              <Link href="https://lotusdirectcare.hint.com/signup/" className="bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition-colors">
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
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Your Questions Answered
              </span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Everything you need to know about Direct Primary Care, our services, and how we can transform your healthcare experience
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="relative mb-6">
                <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search questions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="max-w-4xl mx-auto space-y-4">
            {filteredFAQs.map((faq) => (
              <div
                key={faq.id}
                className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <button
                  onClick={() => toggleExpand(faq.id)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex-1">
                    <span className="text-sm font-medium text-purple-600 mb-1 block">
                      {faq.category}
                    </span>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    {expandedItems.includes(faq.id) ? (
                      <FiMinus className="w-6 h-6 text-purple-600" />
                    ) : (
                      <FiPlus className="w-6 h-6 text-purple-600" />
                    )}
                  </div>
                </button>
                
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    expandedItems.includes(faq.id) ? 'max-h-96 pb-6' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {filteredFAQs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No questions found matching your search. Try different keywords or browse all categories.
              </p>
            </div>
          )}
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-300/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-300/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Still Have Questions?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Schedule a free consultation to discuss your specific healthcare needs and learn how Direct Primary Care can work for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://app.elationemr.com/book/lotusdirectcare/"
              className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
            >
              Book Consultation
            </Link>
            <a
              href="tel:239-277-8900"
              className="bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-full font-semibold hover:bg-white/30 transition-all flex items-center justify-center gap-2"
            >
              <FiPhone className="w-5 h-5" />
              Call Us Now
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
                <p className="flex items-center gap-2">
                  <FiPhone className="w-4 h-4" />
                  239-277-8900
                </p>
                <p className="flex items-center gap-2">
                  <FiMail className="w-4 h-4" />
                  info@lotusdirectcare.com
                </p>
                <p className="flex items-center gap-2">
                  <FiMapPin className="w-4 h-4" />
                  Fort Myers, FL
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link href="/variants" className="block hover:text-purple-400 transition-colors">
                  All Website Variants
                </Link>
                <Link href="https://lotusdirectcare.hint.com/signup/" className="block hover:text-purple-400 transition-colors">
                  Become a Member
                </Link>
                <Link href="https://app.elationemr.com/book/lotusdirectcare/" className="block hover:text-purple-400 transition-colors">
                  Book Appointment
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">About This Design</h3>
              <p className="text-gray-400">
                FAQ Accordion Variant - An interactive, question-driven design that helps patients quickly find answers to their healthcare questions.
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