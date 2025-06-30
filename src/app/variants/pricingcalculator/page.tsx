'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiDollarSign, FiTrendingUp, FiCheck, FiX, FiInfo, FiCreditCard, FiCalendar } from 'react-icons/fi';
import JourneySection from '@/components/JourneySection';
import PricingSection from '@/components/PricingSection';
import FeaturesSection from '@/components/FeaturesSection';
import DoctorSection from '@/components/DoctorSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import BlogPreviewSection from '@/components/BlogPreviewSection';

interface HealthcareExpense {
  name: string;
  traditionalCost: number;
  dpcCost: number;
  frequency: 'monthly' | 'yearly' | 'per-visit';
  category: string;
}

const expenses: HealthcareExpense[] = [
  { name: 'Primary Care Visit', traditionalCost: 200, dpcCost: 0, frequency: 'per-visit', category: 'visits' },
  { name: 'Urgent Care Visit', traditionalCost: 150, dpcCost: 0, frequency: 'per-visit', category: 'visits' },
  { name: 'Preventive Care', traditionalCost: 300, dpcCost: 0, frequency: 'yearly', category: 'preventive' },
  { name: 'Basic Lab Work', traditionalCost: 200, dpcCost: 0, frequency: 'yearly', category: 'labs' },
  { name: 'Prescription Medications', traditionalCost: 100, dpcCost: 40, frequency: 'monthly', category: 'medications' },
  { name: 'Specialist Copays', traditionalCost: 50, dpcCost: 50, frequency: 'per-visit', category: 'specialists' }
];

const membershipPrices = {
  adult: 109,
  senior: 89,
  child: 59,
  familyDiscount: 0.85 // 15% discount for families
};

export default function PricingCalculatorPage() {
  const [primaryVisits, setPrimaryVisits] = useState(6);
  const [urgentVisits, setUrgentVisits] = useState(2);
  const [specialistVisits, setSpecialistVisits] = useState(3);
  const [adults, setAdults] = useState(1);
  const [seniors, setSeniors] = useState(0);
  const [children, setChildren] = useState(0);
  const [hasInsurance, setHasInsurance] = useState(true);
  const [showBreakdown, setShowBreakdown] = useState(false);
  
  const [traditionalTotal, setTraditionalTotal] = useState(0);
  const [dpcTotal, setDpcTotal] = useState(0);
  const [savings, setSavings] = useState(0);

  useEffect(() => {
    // Calculate traditional costs
    const traditionalAnnual = 
      (primaryVisits * expenses[0].traditionalCost) +
      (urgentVisits * expenses[1].traditionalCost) +
      expenses[2].traditionalCost + // Preventive care
      expenses[3].traditionalCost + // Basic labs
      (expenses[4].traditionalCost * 12) + // Medications
      (specialistVisits * expenses[5].traditionalCost);
    
    // Calculate DPC costs
    const familySize = adults + seniors + children;
    const isFamily = familySize > 1;
    
    let monthlyMembership = 
      (adults * membershipPrices.adult) +
      (seniors * membershipPrices.senior) +
      (children * membershipPrices.child);
    
    if (isFamily) {
      monthlyMembership *= membershipPrices.familyDiscount;
    }
    
    const dpcAnnual = 
      (monthlyMembership * 12) +
      (expenses[4].dpcCost * 12) + // Discounted medications
      (specialistVisits * expenses[5].dpcCost);
    
    setTraditionalTotal(traditionalAnnual);
    setDpcTotal(dpcAnnual);
    setSavings(traditionalAnnual - dpcAnnual);
  }, [primaryVisits, urgentVisits, specialistVisits, adults, seniors, children]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const savingsPercentage = traditionalTotal > 0 ? Math.round((savings / traditionalTotal) * 100) : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
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
              <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                Lotus Direct Care
              </span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/variants" className="text-gray-700 hover:text-green-600 transition-colors">
                All Variants
              </Link>
              <Link href="https://app.elationemr.com/book/lotusdirectcare/" className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors">
                Book Appointment
              </Link>
              <Link href="https://lotusdirectcare.hint.com/signup/" className="bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition-colors">
                Join Now
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                Healthcare Savings Calculator
              </span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              See how much you could save with Direct Primary Care compared to traditional healthcare
            </p>
          </div>

          {/* Calculator Container */}
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* Results Summary Bar */}
              <div className="bg-gradient-to-r from-green-600 to-teal-600 p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
                  <div className="text-center">
                    <p className="text-white/80 mb-1">Traditional Healthcare</p>
                    <p className="text-3xl font-bold">{formatCurrency(traditionalTotal)}/year</p>
                  </div>
                  <div className="text-center">
                    <p className="text-white/80 mb-1">Direct Primary Care</p>
                    <p className="text-3xl font-bold">{formatCurrency(dpcTotal)}/year</p>
                  </div>
                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-1">
                      <FiTrendingUp className="w-5 h-5" />
                      <span className="text-sm font-medium">You Save</span>
                    </div>
                    <p className="text-3xl font-bold">{formatCurrency(savings)}</p>
                    <p className="text-sm text-white/80">({savingsPercentage}% savings)</p>
                  </div>
                </div>
              </div>

              <div className="p-8">
                {/* Family Composition */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <FiCreditCard className="w-5 h-5 text-green-600" />
                    Your Family
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 rounded-xl p-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Adults (18-65)
                      </label>
                      <div className="flex items-center gap-4">
                        <input
                          type="range"
                          min="0"
                          max="4"
                          value={adults}
                          onChange={(e) => setAdults(Number(e.target.value))}
                          className="flex-1"
                        />
                        <span className="w-12 text-center font-semibold text-lg">{adults}</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">${membershipPrices.adult}/month each</p>
                    </div>
                    
                    <div className="bg-gray-50 rounded-xl p-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Seniors (65+)
                      </label>
                      <div className="flex items-center gap-4">
                        <input
                          type="range"
                          min="0"
                          max="4"
                          value={seniors}
                          onChange={(e) => setSeniors(Number(e.target.value))}
                          className="flex-1"
                        />
                        <span className="w-12 text-center font-semibold text-lg">{seniors}</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">${membershipPrices.senior}/month each</p>
                    </div>
                    
                    <div className="bg-gray-50 rounded-xl p-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Children (0-17)
                      </label>
                      <div className="flex items-center gap-4">
                        <input
                          type="range"
                          min="0"
                          max="6"
                          value={children}
                          onChange={(e) => setChildren(Number(e.target.value))}
                          className="flex-1"
                        />
                        <span className="w-12 text-center font-semibold text-lg">{children}</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">${membershipPrices.child}/month each</p>
                    </div>
                  </div>
                  
                  {(adults + seniors + children) > 1 && (
                    <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-sm text-green-800">
                        <FiCheck className="inline w-4 h-4 mr-1" />
                        Family discount applied: 15% off total membership
                      </p>
                    </div>
                  )}
                </div>

                {/* Healthcare Usage */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <FiCalendar className="w-5 h-5 text-green-600" />
                    Annual Healthcare Usage
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 rounded-xl p-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Primary Care Visits
                      </label>
                      <div className="flex items-center gap-4">
                        <input
                          type="range"
                          min="0"
                          max="20"
                          value={primaryVisits}
                          onChange={(e) => setPrimaryVisits(Number(e.target.value))}
                          className="flex-1"
                        />
                        <span className="w-12 text-center font-semibold text-lg">{primaryVisits}</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Unlimited with DPC</p>
                    </div>
                    
                    <div className="bg-gray-50 rounded-xl p-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Urgent Care Visits
                      </label>
                      <div className="flex items-center gap-4">
                        <input
                          type="range"
                          min="0"
                          max="10"
                          value={urgentVisits}
                          onChange={(e) => setUrgentVisits(Number(e.target.value))}
                          className="flex-1"
                        />
                        <span className="w-12 text-center font-semibold text-lg">{urgentVisits}</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Often avoided with DPC</p>
                    </div>
                    
                    <div className="bg-gray-50 rounded-xl p-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Specialist Visits
                      </label>
                      <div className="flex items-center gap-4">
                        <input
                          type="range"
                          min="0"
                          max="12"
                          value={specialistVisits}
                          onChange={(e) => setSpecialistVisits(Number(e.target.value))}
                          className="flex-1"
                        />
                        <span className="w-12 text-center font-semibold text-lg">{specialistVisits}</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Same cost either way</p>
                    </div>
                  </div>
                </div>

                {/* Cost Breakdown Toggle */}
                <button
                  onClick={() => setShowBreakdown(!showBreakdown)}
                  className="w-full py-3 bg-gray-100 hover:bg-gray-200 rounded-xl font-medium text-gray-700 transition-colors mb-6"
                >
                  {showBreakdown ? 'Hide' : 'Show'} Detailed Cost Breakdown
                </button>

                {/* Detailed Breakdown */}
                {showBreakdown && (
                  <div className="mb-8">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-red-50 rounded-xl p-6">
                        <h4 className="font-semibold text-red-900 mb-4">Traditional Healthcare Costs</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Primary Care Visits ({primaryVisits})</span>
                            <span className="font-medium">{formatCurrency(primaryVisits * 200)}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Urgent Care Visits ({urgentVisits})</span>
                            <span className="font-medium">{formatCurrency(urgentVisits * 150)}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Preventive Care</span>
                            <span className="font-medium">{formatCurrency(300)}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Basic Lab Work</span>
                            <span className="font-medium">{formatCurrency(200)}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Medications (12 months)</span>
                            <span className="font-medium">{formatCurrency(1200)}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Specialist Copays ({specialistVisits})</span>
                            <span className="font-medium">{formatCurrency(specialistVisits * 50)}</span>
                          </div>
                          <div className="border-t pt-2 mt-2">
                            <div className="flex justify-between font-semibold">
                              <span>Total Annual Cost</span>
                              <span className="text-red-600">{formatCurrency(traditionalTotal)}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-green-50 rounded-xl p-6">
                        <h4 className="font-semibold text-green-900 mb-4">Direct Primary Care Costs</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>DPC Membership (12 months)</span>
                            <span className="font-medium">{formatCurrency((adults * membershipPrices.adult + seniors * membershipPrices.senior + children * membershipPrices.child) * 12 * ((adults + seniors + children) > 1 ? membershipPrices.familyDiscount : 1))}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Primary Care Visits</span>
                            <span className="font-medium text-green-600">Included</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Urgent Care Visits</span>
                            <span className="font-medium text-green-600">Usually Avoided</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Preventive Care</span>
                            <span className="font-medium text-green-600">Included</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Basic Lab Work</span>
                            <span className="font-medium text-green-600">Included</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Medications (discounted)</span>
                            <span className="font-medium">{formatCurrency(480)}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Specialist Copays ({specialistVisits})</span>
                            <span className="font-medium">{formatCurrency(specialistVisits * 50)}</span>
                          </div>
                          <div className="border-t pt-2 mt-2">
                            <div className="flex justify-between font-semibold">
                              <span>Total Annual Cost</span>
                              <span className="text-green-600">{formatCurrency(dpcTotal)}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Insurance Note */}
                <div className="mb-8">
                  <div className="bg-blue-50 rounded-xl p-6">
                    <div className="flex gap-3">
                      <FiInfo className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-blue-900 mb-2">About Insurance</h4>
                        <p className="text-sm text-blue-800 mb-3">
                          DPC works alongside your insurance. We recommend keeping a high-deductible health plan for major medical events, specialists, and hospitalizations. This combination often provides the best coverage at the lowest cost.
                        </p>
                        <div className="flex items-center gap-4">
                          <label className="flex items-center gap-2 text-sm">
                            <input
                              type="checkbox"
                              checked={hasInsurance}
                              onChange={(e) => setHasInsurance(e.target.checked)}
                              className="rounded"
                            />
                            <span>I have health insurance</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="text-center">
                  <p className="text-gray-600 mb-6">
                    Ready to save {formatCurrency(savings)} per year on better healthcare?
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      href="https://lotusdirectcare.hint.com/signup/"
                      className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
                    >
                      Join Now & Start Saving
                    </Link>
                    <Link
                      href="https://app.elationemr.com/book/lotusdirectcare/"
                      className="bg-gray-200 text-gray-800 px-8 py-3 rounded-full font-semibold hover:bg-gray-300 transition-colors"
                    >
                      Schedule Consultation
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Benefits */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <FiDollarSign className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">Transparent Pricing</h3>
                <p className="text-gray-600 text-sm">
                  No surprise bills, hidden fees, or insurance hassles. Know exactly what you\'re paying for.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                  <FiCheck className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="font-semibold mb-2">Better Care</h3>
                <p className="text-gray-600 text-sm">
                  30-60 minute appointments, same-day access, and a doctor who actually knows you.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <FiTrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Long-term Savings</h3>
                <p className="text-gray-600 text-sm">
                  Preventive care and early intervention lead to better health outcomes and lower costs.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-300/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-teal-300/20 rounded-full blur-3xl animate-pulse delay-1000" />
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
                <Link href="/variants" className="block hover:text-green-400 transition-colors">
                  All Website Variants
                </Link>
                <Link href="https://lotusdirectcare.hint.com/signup/" className="block hover:text-green-400 transition-colors">
                  Become a Member
                </Link>
                <Link href="https://app.elationemr.com/book/lotusdirectcare/" className="block hover:text-green-400 transition-colors">
                  Book Appointment
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">About This Design</h3>
              <p className="text-gray-400">
                Pricing Calculator Variant - Interactive tool demonstrating Direct Primary Care savings with dynamic calculations.
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