'use client';

import React from 'react';
import Link from 'next/link';
import { 
  FaUserMd, 
  FaHeartbeat, 
  FaBrain, 
  FaFlask,
  FaSyringe,
  FaPrescriptionBottleAlt,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaChevronRight,
  FaDraftingCompass,
  FaCube,
  FaRulerCombined
} from 'react-icons/fa';
import { getImagePath } from '../../lib/variant-utils';

export default function ArchitectVariant() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Bauhaus Grid Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, #000 0px, transparent 1px, transparent 120px, #000 121px),
            repeating-linear-gradient(90deg, #000 0px, transparent 1px, transparent 120px, #000 121px)
          `
        }}></div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-red-500"></div>
                <div className="w-8 h-8 bg-blue-500 absolute -bottom-2 -right-2"></div>
                <div className="w-4 h-4 bg-yellow-500 absolute -top-1 -left-1"></div>
              </div>
              <span className="text-2xl font-bold tracking-wider">LOTUS</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#services" className="text-gray-900 hover:text-red-500 transition-colors uppercase tracking-wide text-sm">Services</Link>
              <Link href="#about" className="text-gray-900 hover:text-red-500 transition-colors uppercase tracking-wide text-sm">About</Link>
              <Link href="#contact" className="text-gray-900 hover:text-red-500 transition-colors uppercase tracking-wide text-sm">Contact</Link>
              <Link href="/" className="bg-black text-white px-6 py-2 hover:bg-gray-800 transition-colors uppercase tracking-wide text-sm">
                Main Site
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section - Bauhaus Inspired */}
      <section className="relative py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-24 h-1 bg-red-500"></div>
                <FaDraftingCompass className="text-2xl text-gray-700" />
              </div>
              <h1 className="text-6xl lg:text-7xl font-bold mb-6 uppercase tracking-tight">
                <span className="block">Precision</span>
                <span className="block text-red-500">Healthcare</span>
                <span className="block">Design</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 max-w-lg">
                Medical care structured with architectural precision. Every element purposefully placed for optimal health outcomes.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="bg-black text-white px-8 py-4 hover:bg-gray-800 transition-colors uppercase tracking-wide">
                  Start Building Health
                </Link>
                <Link href="#services" className="border-2 border-black text-black px-8 py-4 hover:bg-black hover:text-white transition-all uppercase tracking-wide">
                  View Blueprint
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="relative">
                {/* Geometric Composition */}
                <div className="w-full aspect-square relative">
                  <div className="absolute inset-0 bg-gray-200"></div>
                  <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-red-500"></div>
                  <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-500"></div>
                  <div className="absolute top-1/4 left-1/4 w-1/3 h-1/3 bg-yellow-500"></div>
                  <div className="absolute bottom-1/4 right-1/4 w-1/4 h-1/4 bg-black"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Geometric Decorations */}
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-500 rotate-45 opacity-10"></div>
        <div className="absolute top-20 right-10 w-32 h-32 bg-yellow-500 opacity-10"></div>
      </section>

      {/* Services Grid - Modular Design */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-12">
            <FaCube className="text-3xl text-red-500" />
            <h2 className="text-4xl font-bold uppercase tracking-tight">Modular Services</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
            {[
              { icon: FaUserMd, title: 'Direct Primary Care', color: 'bg-red-500' },
              { icon: FaBrain, title: 'Ketamine Therapy', color: 'bg-blue-500' },
              { icon: FaSyringe, title: 'PRP Injections', color: 'bg-yellow-500' },
              { icon: FaFlask, title: 'Functional Medicine', color: 'bg-black' },
              { icon: FaPrescriptionBottleAlt, title: 'Addiction Treatment', color: 'bg-gray-700' },
              { icon: FaHeartbeat, title: 'Wellness Programs', color: 'bg-red-600' }
            ].map((service, idx) => (
              <div key={idx} className="group border border-gray-200 p-8 hover:shadow-xl transition-all">
                <div className={`${service.color} w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-3 uppercase tracking-wide">{service.title}</h3>
                <div className="w-12 h-1 bg-gray-300 mb-4"></div>
                <p className="text-gray-600 mb-4">
                  Precisely engineered healthcare solutions for optimal wellness outcomes.
                </p>
                <Link href="#" className="inline-flex items-center text-black font-medium hover:text-red-500 transition-colors">
                  <span className="uppercase tracking-wide text-sm">Explore</span>
                  <FaChevronRight className="ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Grid Layout */}
      <section id="about" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-4 mb-8">
                <FaRulerCombined className="text-3xl text-blue-500" />
                <h2 className="text-3xl font-bold uppercase tracking-tight">Measured Approach</h2>
              </div>
              <div className="space-y-6">
                <div className="bg-white p-6">
                  <div className="w-full h-1 bg-red-500 mb-4"></div>
                  <h3 className="font-bold uppercase mb-2">Foundation</h3>
                  <p className="text-gray-600">Built on principles of personalized, accessible healthcare</p>
                </div>
                <div className="bg-white p-6">
                  <div className="w-full h-1 bg-blue-500 mb-4"></div>
                  <h3 className="font-bold uppercase mb-2">Structure</h3>
                  <p className="text-gray-600">Direct doctor-patient relationships without insurance barriers</p>
                </div>
                <div className="bg-white p-6">
                  <div className="w-full h-1 bg-yellow-500 mb-4"></div>
                  <h3 className="font-bold uppercase mb-2">Design</h3>
                  <p className="text-gray-600">Comprehensive care tailored to individual health blueprints</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-8">
              <div className="bg-white p-12">
                <div className="grid grid-cols-2 gap-8 mb-8">
                  <div>
                    <div className="text-5xl font-bold text-red-500 mb-2">15+</div>
                    <p className="uppercase tracking-wide text-sm">Years Building Health</p>
                  </div>
                  <div>
                    <div className="text-5xl font-bold text-blue-500 mb-2">1000+</div>
                    <p className="uppercase tracking-wide text-sm">Lives Transformed</p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 mb-6">
                  Dr. Aaron Rosenberg architects personalized healthcare plans with the precision of a master builder. 
                  Each patient receives a custom blueprint for optimal health.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-32 bg-gray-200"></div>
                  <div className="h-32 bg-red-500"></div>
                  <div className="h-32 bg-blue-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Structured Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 uppercase tracking-tight text-center">Client Blueprints</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {[
              { name: 'Michael R.', text: 'Structured approach to health that actually works.' },
              { name: 'Jennifer S.', text: 'Precision care with measurable results.' },
              { name: 'David L.', text: 'Healthcare designed for modern living.' }
            ].map((testimonial, idx) => (
              <div key={idx} className="border border-gray-200 p-8">
                <div className="w-12 h-12 bg-black mb-6"></div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="w-16 h-1 bg-red-500 mb-2"></div>
                <p className="font-bold uppercase tracking-wide text-sm">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 uppercase tracking-tight">Build Your Health Foundation</h2>
            <div className="flex justify-center gap-4 mb-8">
              <div className="w-12 h-12 bg-red-500"></div>
              <div className="w-12 h-12 bg-blue-500"></div>
              <div className="w-12 h-12 bg-yellow-500"></div>
            </div>
            <p className="text-xl mb-8 text-gray-300">
              Start constructing your personalized healthcare plan today.
            </p>
            <Link href="#contact" className="bg-white text-black px-8 py-4 hover:bg-gray-100 transition-colors uppercase tracking-wide inline-block">
              Begin Construction
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-12">
              <h2 className="text-3xl font-bold mb-8 uppercase tracking-tight">Project Consultation</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 uppercase tracking-wide">Name</label>
                  <input type="text" className="w-full px-4 py-3 border-2 border-gray-300 focus:border-red-500 outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 uppercase tracking-wide">Email</label>
                  <input type="email" className="w-full px-4 py-3 border-2 border-gray-300 focus:border-red-500 outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 uppercase tracking-wide">Phone</label>
                  <input type="tel" className="w-full px-4 py-3 border-2 border-gray-300 focus:border-red-500 outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 uppercase tracking-wide">Project Details</label>
                  <textarea rows={4} className="w-full px-4 py-3 border-2 border-gray-300 focus:border-red-500 outline-none transition-colors"></textarea>
                </div>
                <button type="submit" className="w-full bg-black text-white py-4 hover:bg-gray-800 transition-colors uppercase tracking-wide">
                  Submit Blueprint
                </button>
              </form>
            </div>
            <div className="bg-black text-white p-12">
              <h3 className="text-2xl font-bold mb-8 uppercase tracking-tight">Construction Site</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-500 flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-white" />
                  </div>
                  <div>
                    <p className="font-medium uppercase tracking-wide text-sm mb-1">Location</p>
                    <p className="text-gray-300">1234 Wellness Ave, Healthville, HC 12345</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-500 flex items-center justify-center flex-shrink-0">
                    <FaPhone className="text-white" />
                  </div>
                  <div>
                    <p className="font-medium uppercase tracking-wide text-sm mb-1">Phone</p>
                    <p className="text-gray-300">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-yellow-500 flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-white" />
                  </div>
                  <div>
                    <p className="font-medium uppercase tracking-wide text-sm mb-1">Email</p>
                    <p className="text-gray-300">blueprint@lotusdirectcare.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gray-600 flex items-center justify-center flex-shrink-0">
                    <FaClock className="text-white" />
                  </div>
                  <div>
                    <p className="font-medium uppercase tracking-wide text-sm mb-1">Hours</p>
                    <p className="text-gray-300">Mon-Fri: 8AM-5PM</p>
                  </div>
                </div>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-4">
                <div className="h-24 bg-red-500"></div>
                <div className="h-24 bg-blue-500"></div>
                <div className="h-24 bg-yellow-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-black"></div>
              <p className="text-sm text-gray-600 uppercase tracking-wide">© 2025 Lotus Direct Care - Precision Healthcare Architecture</p>
            </div>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-sm text-gray-600 hover:text-black transition-colors uppercase tracking-wide">Privacy</Link>
              <Link href="/terms" className="text-sm text-gray-600 hover:text-black transition-colors uppercase tracking-wide">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}