'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  FaUserMd, 
  FaHeartbeat, 
  FaBrain, 
  FaFlask,
  FaSyringe,
  FaPrescriptionBottleAlt,
  FaLeaf,
  FaHome,
  FaMugHot,
  FaFireAlt,
  FaSnowflake,
  FaSeedling
} from 'react-icons/fa';
import { getImagePath } from '../../../lib/variant-utils';

export default function ScandinavianVariant() {
  return (
    <div className="min-h-screen bg-[#fafaf8]">
      {/* Subtle Nordic Pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="nordic" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="1" fill="#a8a29e" />
            <path d="M0 10 L10 0 L20 10 L10 20 Z" fill="none" stroke="#a8a29e" strokeWidth="0.5" />
          </pattern>
          <rect x="0" y="0" width="100" height="100" fill="url(#nordic)" />
        </svg>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#8b9dc3] rounded-full flex items-center justify-center overflow-hidden">
                <Image 
                  src="/images/LOGOTRANSPARENTFLOWERONLY1.png" 
                  alt="Lotus" 
                  width={28} 
                  height={28} 
                  className="opacity-90"
                />
              </div>
              <span className="text-2xl font-light text-[#2c3e50]">Lotus</span>
            </div>
            <nav className="hidden md:flex items-center space-x-10">
              <Link href="#services" className="text-[#5a6c7d] hover:text-[#2c3e50] transition-colors">Tjenester</Link>
              <Link href="#about" className="text-[#5a6c7d] hover:text-[#2c3e50] transition-colors">Om Oss</Link>
              <Link href="#philosophy" className="text-[#5a6c7d] hover:text-[#2c3e50] transition-colors">Filosofi</Link>
              <Link href="#contact" className="text-[#5a6c7d] hover:text-[#2c3e50] transition-colors">Kontakt</Link>
              <Link href="/" className="bg-[#8b9dc3] text-white px-6 py-2.5 rounded-full hover:bg-[#7a8db5] transition-colors">
                Main Site
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section - Hygge Style */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <FaSnowflake className="text-[#8b9dc3]" />
                <span className="text-sm text-[#5a6c7d] tracking-wide">Velkommen til velvære</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-light text-[#2c3e50] mb-6 leading-tight">
                Healthcare with
                <span className="block text-[#8b9dc3]">Nordic Simplicity</span>
              </h1>
              <p className="text-lg text-[#5a6c7d] mb-8 leading-relaxed">
                Experience the warmth of personalized care in a calm, welcoming environment. 
                Where modern medicine meets the timeless wisdom of holistic wellness.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="#contact" className="bg-[#8b9dc3] text-white px-8 py-3 rounded-full hover:bg-[#7a8db5] transition-colors">
                  Begin Your Journey
                </Link>
                <Link href="#services" className="border-2 border-[#8b9dc3] text-[#8b9dc3] px-8 py-3 rounded-full hover:bg-[#8b9dc3] hover:text-white transition-all">
                  Explore Services
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-white rounded-lg shadow-lg p-8">
                <div className="h-full bg-[#f5f5f0] rounded flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image 
                      src="/images/lotus_logo_full.png" 
                      alt="Wellness Background" 
                      width={400} 
                      height={300} 
                      className="opacity-[0.03]"
                    />
                  </div>
                  <div className="text-center relative z-10">
                    <FaHome className="text-6xl text-[#8b9dc3] mb-4 mx-auto" />
                    <p className="text-[#5a6c7d]">Your Health Home</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#dfe4ea] rounded-lg p-6 shadow-lg">
                <FaMugHot className="text-3xl text-[#8b9dc3] mb-2" />
                <p className="text-sm text-[#5a6c7d]">Cozy Care Environment</p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 text-[#e8e6e1] opacity-20">
          <FaSeedling className="text-8xl" />
        </div>
        <div className="absolute bottom-10 left-10 text-[#e8e6e1] opacity-20">
          <FaFireAlt className="text-6xl" />
        </div>
      </section>

      {/* Services Section - Clean Grid */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-[#2c3e50] mb-4">Our Services</h2>
            <p className="text-[#5a6c7d]">Simple, effective healthcare solutions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: FaUserMd, title: 'Direct Primary Care', color: 'bg-[#8b9dc3]' },
              { icon: FaBrain, title: 'Ketamine Therapy', color: 'bg-[#b8c6db]' },
              { icon: FaSyringe, title: 'PRP Injections', color: 'bg-[#9fb3c8]' },
              { icon: FaFlask, title: 'Functional Medicine', color: 'bg-[#8b9dc3]' },
              { icon: FaPrescriptionBottleAlt, title: 'Addiction Treatment', color: 'bg-[#b8c6db]' },
              { icon: FaHeartbeat, title: 'Wellness Programs', color: 'bg-[#9fb3c8]' }
            ].map((service, idx) => (
              <div key={idx} className="bg-[#fafaf8] rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className={`${service.color} w-14 h-14 rounded-full flex items-center justify-center mb-6`}>
                  <service.icon className="text-white text-xl" />
                </div>
                <h3 className="text-xl font-medium text-[#2c3e50] mb-3">{service.title}</h3>
                <p className="text-[#5a6c7d] mb-4 leading-relaxed">
                  Thoughtfully designed care that puts your wellness first, delivered with warmth and expertise.
                </p>
                <Link href="#" className="text-[#8b9dc3] hover:text-[#7a8db5] transition-colors inline-flex items-center">
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section - Hygge Elements */}
      <section id="philosophy" className="py-20 bg-[#f5f5f0]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-light text-[#2c3e50] mb-4">The Hygge of Healthcare</h2>
              <p className="text-[#5a6c7d]">Creating comfort and connection in every interaction</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-8">
                <FaFireAlt className="text-3xl text-[#8b9dc3] mb-4" />
                <h3 className="text-xl font-medium text-[#2c3e50] mb-3">Warm Environment</h3>
                <p className="text-[#5a6c7d] leading-relaxed">
                  Our clinic feels like a home, with comfortable spaces designed to put you at ease 
                  from the moment you arrive.
                </p>
              </div>
              <div className="bg-white rounded-lg p-8">
                <FaMugHot className="text-3xl text-[#8b9dc3] mb-4" />
                <h3 className="text-xl font-medium text-[#2c3e50] mb-3">Time for Connection</h3>
                <p className="text-[#5a6c7d] leading-relaxed">
                  Unhurried appointments where we truly listen, understand, and create personalized 
                  care plans together.
                </p>
              </div>
              <div className="bg-white rounded-lg p-8">
                <FaLeaf className="text-3xl text-[#8b9dc3] mb-4" />
                <h3 className="text-xl font-medium text-[#2c3e50] mb-3">Natural Healing</h3>
                <p className="text-[#5a6c7d] leading-relaxed">
                  Combining modern medicine with natural approaches to support your body's 
                  innate healing abilities.
                </p>
              </div>
              <div className="bg-white rounded-lg p-8">
                <FaHome className="text-3xl text-[#8b9dc3] mb-4" />
                <h3 className="text-xl font-medium text-[#2c3e50] mb-3">Your Health Home</h3>
                <p className="text-[#5a6c7d] leading-relaxed">
                  A consistent, caring presence in your health journey, always here when 
                  you need support or guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="text-3xl font-light text-[#2c3e50] mb-6">
                Meet Dr. Aaron Rosenberg
              </h2>
              <p className="text-[#5a6c7d] mb-6 leading-relaxed">
                With over 15 years of experience, Dr. Rosenberg brings a unique blend of 
                medical expertise and genuine care to every patient interaction. His approach 
                is simple: treat each person as a whole, not just their symptoms.
              </p>
              <p className="text-[#5a6c7d] mb-8 leading-relaxed">
                Inspired by Scandinavian wellness principles, our practice emphasizes balance, 
                prevention, and the importance of taking time to truly understand each patient's 
                unique health journey.
              </p>
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <p className="text-3xl font-light text-[#8b9dc3]">15+</p>
                  <p className="text-sm text-[#5a6c7d]">Years Experience</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-light text-[#8b9dc3]">1000+</p>
                  <p className="text-sm text-[#5a6c7d]">Happy Patients</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-light text-[#8b9dc3]">24/7</p>
                  <p className="text-sm text-[#5a6c7d]">Member Access</p>
                </div>
              </div>
            </div>
            <div className="bg-[#fafaf8] rounded-lg p-12 text-center relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Image 
                  src="/images/LOGOTRANSPARENTFLOWERONLY1.png" 
                  alt="Lotus Accent" 
                  width={60} 
                  height={60} 
                  className="opacity-10"
                />
              </div>
              <div className="w-32 h-32 bg-[#8b9dc3] rounded-full mx-auto mb-6 flex items-center justify-center relative">
                <FaUserMd className="text-white text-5xl" />
              </div>
              <blockquote className="text-[#5a6c7d] italic mb-4">
                "True healing happens when we create space for understanding, 
                connection, and personalized care."
              </blockquote>
              <p className="text-sm text-[#8b9dc3]">— Dr. Aaron Rosenberg</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#fafaf8]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-light text-[#2c3e50] text-center mb-12">Patient Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { name: 'Maria S.', text: 'The calm atmosphere and personalized care make every visit feel like coming home.' },
              { name: 'Erik L.', text: 'Dr. Rosenberg takes time to listen and truly understand. Healthcare as it should be.' },
              { name: 'Anna K.', text: 'A perfect blend of modern medicine and holistic wellness. I feel cared for as a whole person.' }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 text-center relative">
                <div className="absolute top-2 right-2">
                  <Image 
                    src="/images/lotus_logo.png" 
                    alt="Quote Accent" 
                    width={20} 
                    height={20} 
                    className="opacity-5"
                  />
                </div>
                <div className="w-16 h-16 bg-[#e8e6e1] rounded-full mx-auto mb-4"></div>
                <p className="text-[#5a6c7d] italic mb-4">"{testimonial.text}"</p>
                <p className="text-[#2c3e50] font-medium">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#8b9dc3] text-white">
        <div className="container mx-auto px-4 text-center">
          <FaSnowflake className="text-5xl mb-6 mx-auto opacity-50" />
          <h2 className="text-4xl font-light mb-6">Begin Your Wellness Journey</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Experience healthcare that feels like home. Join our community of patients 
            who have discovered the joy of personalized, unhurried medical care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#contact" className="bg-white text-[#8b9dc3] px-8 py-3 rounded-full hover:bg-gray-100 transition-colors">
              Schedule Consultation
            </Link>
            <Link href="#" className="border-2 border-white px-8 py-3 rounded-full hover:bg-white hover:text-[#8b9dc3] transition-all">
              Learn About Membership
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h2 className="text-3xl font-light text-[#2c3e50] mb-8">Get in Touch</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm text-[#5a6c7d] mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg bg-[#fafaf8] border border-[#e8e6e1] focus:border-[#8b9dc3] outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-sm text-[#5a6c7d] mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg bg-[#fafaf8] border border-[#e8e6e1] focus:border-[#8b9dc3] outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-sm text-[#5a6c7d] mb-2">Phone</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-lg bg-[#fafaf8] border border-[#e8e6e1] focus:border-[#8b9dc3] outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-sm text-[#5a6c7d] mb-2">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-lg bg-[#fafaf8] border border-[#e8e6e1] focus:border-[#8b9dc3] outline-none transition-colors"></textarea>
                </div>
                <button type="submit" className="w-full bg-[#8b9dc3] text-white py-3 rounded-full hover:bg-[#7a8db5] transition-colors">
                  Send Message
                </button>
              </form>
            </div>
            <div className="bg-[#fafaf8] rounded-lg p-8 relative overflow-hidden">
              <div className="absolute -bottom-8 -right-8">
                <Image 
                  src="/images/lotus_logo_full.png" 
                  alt="Contact Background" 
                  width={150} 
                  height={100} 
                  className="opacity-[0.02] rotate-12"
                />
              </div>
              <h3 className="text-2xl font-light text-[#2c3e50] mb-6">Visit Our Health Home</h3>
              <div className="space-y-4 text-[#5a6c7d] relative z-10">
                <div>
                  <p className="font-medium text-[#2c3e50]">Address</p>
                  <p>1234 Wellness Avenue<br />Healthville, HC 12345</p>
                </div>
                <div>
                  <p className="font-medium text-[#2c3e50]">Phone</p>
                  <p>(555) 123-4567</p>
                </div>
                <div>
                  <p className="font-medium text-[#2c3e50]">Email</p>
                  <p>hello@lotusdirectcare.com</p>
                </div>
                <div>
                  <p className="font-medium text-[#2c3e50]">Hours</p>
                  <p>Monday - Friday: 8:00 AM - 5:00 PM<br />
                  Weekend appointments available</p>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-[#e8e6e1]">
                <p className="text-sm text-[#5a6c7d] italic">
                  "Come as you are, leave feeling better than ever."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2c3e50] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Image 
                  src="/images/lotus_logo.png" 
                  alt="Lotus" 
                  width={20} 
                  height={20} 
                  className="brightness-0 invert opacity-80"
                />
              </div>
              <span className="text-xl font-light">Lotus Direct Care</span>
            </div>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="hover:text-[#8b9dc3] transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-[#8b9dc3] transition-colors">Terms</Link>
              <Link href="/hipaa" className="hover:text-[#8b9dc3] transition-colors">HIPAA</Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20 text-center text-sm opacity-75">
            <p>© 2025 Lotus Direct Care • Healthcare with Nordic Simplicity</p>
          </div>
        </div>
      </footer>
    </div>
  );
}