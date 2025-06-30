'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import { FiBookOpen, FiFileText, FiSearch, FiExternalLink, FiDownload, FiBookmark, FiClock, FiUser, FiTag, FiChevronRight } from 'react-icons/fi';
import JourneySection from '@/components/JourneySection';
import PricingSection from '@/components/PricingSection';
import FeaturesSection from '@/components/FeaturesSection';
import DoctorSection from '@/components/DoctorSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import BlogPreviewSection from '@/components/BlogPreviewSection';

export default function MedicalJournalVariant() {
  const [activeTab, setActiveTab] = useState('latest');
  const [searchQuery, setSearchQuery] = useState('');

  const journalArticles = [
    {
      title: 'Direct Primary Care: A Systematic Review of Patient Outcomes',
      authors: 'Rosenberg, A., et al.',
      journal: 'Journal of Primary Care Innovation',
      year: '2024',
      citations: 42,
      abstract: 'This systematic review examines the impact of Direct Primary Care models on patient health outcomes, satisfaction rates, and healthcare utilization...',
      doi: '10.1234/jpci.2024.001',
      tags: ['Direct Primary Care', 'Patient Outcomes', 'Healthcare Model']
    },
    {
      title: 'Functional Medicine Approaches to Chronic Disease Management',
      authors: 'Chen, L., Rosenberg, A.',
      journal: 'Integrative Medicine Research',
      year: '2024',
      citations: 28,
      abstract: 'An evidence-based analysis of functional medicine interventions in managing chronic conditions, with focus on personalized treatment protocols...',
      doi: '10.5678/imr.2024.117',
      tags: ['Functional Medicine', 'Chronic Disease', 'Personalized Medicine']
    },
    {
      title: 'Ketamine Therapy in Treatment-Resistant Depression: Clinical Outcomes',
      authors: 'Johnson, M., Smith, K., Rosenberg, A.',
      journal: 'Psychiatric Research Quarterly',
      year: '2023',
      citations: 156,
      abstract: 'A longitudinal study examining the efficacy of ketamine therapy in patients with treatment-resistant depression, analyzing response rates and remission...',
      doi: '10.9012/prq.2023.089',
      tags: ['Ketamine Therapy', 'Depression', 'Mental Health']
    }
  ];

  const researchMetrics = [
    { label: 'Peer-Reviewed Publications', value: '47' },
    { label: 'Total Citations', value: '1,284' },
    { label: 'Research Collaborations', value: '12' },
    { label: 'Clinical Trials', value: '8' }
  ];

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: 'Georgia, serif' }}>
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-300 sticky top-0 z-50">
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
                  <p className="text-xs text-gray-600 italic">Medical Research & Publications</p>
                </div>
              </Link>
            </div>
            <div className="flex items-center gap-6">
              <Link
                href="/variants"
                className="text-gray-700 hover:text-blue-800 transition-colors underline"
              >
                View All Variants
              </Link>
              <Link
                href="https://app.elationemr.com/book/lotusdirectcare/"
                className="bg-blue-800 text-white px-6 py-2 rounded hover:bg-blue-900 transition-colors"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-white py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Evidence-Based Medicine at Lotus Direct Care
            </h2>
            <p className="text-lg text-gray-600 italic max-w-3xl mx-auto mb-8">
              "Bridging the gap between cutting-edge research and clinical practice through peer-reviewed studies and evidence-based protocols"
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <input
                type="text"
                placeholder="Search our research database..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 pr-12 border-2 border-gray-300 rounded-lg focus:border-blue-800 focus:outline-none text-gray-800"
                style={{ fontFamily: 'Arial, sans-serif' }}
              />
              <FiSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </div>
        </div>
      </section>

      {/* Research Metrics */}
      <section className="py-8 bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {researchMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl font-bold text-gray-900">{metric.value}</p>
                <p className="text-sm text-gray-600 mt-1">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journal Articles Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Recent Publications</h3>
            <div className="flex gap-4 border-b border-gray-200">
              {['latest', 'most-cited', 'clinical-trials'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 px-2 font-medium transition-colors ${
                    activeTab === tab
                      ? 'text-blue-800 border-b-2 border-blue-800'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1).replace('-', ' ')}
                </button>
              ))}
            </div>
          </div>

          {/* Articles List */}
          <div className="space-y-6">
            {journalArticles.map((article, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {article.title}
                    </h4>
                    <p className="text-sm text-gray-600 mb-1">
                      {article.authors} ({article.year}). <em>{article.journal}</em>.
                    </p>
                    <p className="text-xs text-gray-500">
                      DOI: {article.doi} | Citations: {article.citations}
                    </p>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <button className="p-2 text-gray-600 hover:text-blue-800 transition-colors">
                      <FiBookmark className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-gray-600 hover:text-blue-800 transition-colors">
                      <FiDownload className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-gray-600 hover:text-blue-800 transition-colors">
                      <FiExternalLink className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4 leading-relaxed">
                  <strong>Abstract:</strong> {article.abstract}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                    >
                      <FiTag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-8">
            <button className="inline-flex items-center gap-2 text-blue-800 hover:text-blue-900 font-medium">
              View More Publications
              <FiChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Clinical Guidelines */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Evidence-Based Clinical Guidelines
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Direct Primary Care Protocols',
                description: 'Comprehensive guidelines for implementing and optimizing DPC models',
                icon: FiFileText,
                updated: 'Updated Jan 2024'
              },
              {
                title: 'Functional Medicine Assessment',
                description: 'Systematic approach to root-cause analysis and treatment planning',
                icon: FiBookOpen,
                updated: 'Updated Dec 2023'
              },
              {
                title: 'Integrative Treatment Pathways',
                description: 'Evidence-based protocols for combining conventional and alternative therapies',
                icon: FiUser,
                updated: 'Updated Feb 2024'
              }
            ].map((guideline, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
                <guideline.icon className="w-8 h-8 text-blue-800 mb-4" />
                <h4 className="text-lg font-bold text-gray-900 mb-2">{guideline.title}</h4>
                <p className="text-gray-600 mb-4">{guideline.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    <FiClock className="w-3 h-3" />
                    {guideline.updated}
                  </span>
                  <Link href="#" className="text-blue-800 hover:text-blue-900 text-sm font-medium">
                    Read More →
                  </Link>
                </div>
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
      <section className="bg-blue-800 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Experience Evidence-Based Care
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join a practice that combines cutting-edge research with compassionate, personalized care
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://lotusdirectcare.hint.com/signup/"
              className="bg-white text-blue-800 px-8 py-4 rounded font-semibold hover:bg-gray-100 transition-colors"
            >
              Become a Member
            </Link>
            <Link
              href="https://app.elationemr.com/book/lotusdirectcare/"
              className="bg-blue-900 text-white px-8 py-4 rounded font-semibold hover:bg-blue-950 transition-colors"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}