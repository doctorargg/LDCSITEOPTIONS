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
  FaQuoteLeft,
  FaArrowRight,
  FaCamera,
  FaNewspaper,
  FaBookOpen
} from 'react-icons/fa';
import { getImagePath } from '../../../lib/variant-utils';

export default function EditorialVariant() {
  return (
    <div className="min-h-screen bg-white">
      {/* Magazine Header */}
      <header className="border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="py-4 border-b border-gray-200">
            <div className="flex justify-between items-center text-xs uppercase tracking-wider text-gray-600">
              <span>Issue 45 • 2025</span>
              <span>The Future of Healthcare</span>
            </div>
          </div>
          <div className="py-6">
            <div className="flex items-center justify-between">
              <div className="text-center flex-1">
                <h1 className="text-5xl font-serif tracking-wider">LOTUS</h1>
                <p className="text-xs uppercase tracking-[0.3em] text-gray-600 mt-2">Direct Care Journal</p>
              </div>
            </div>
          </div>
          <nav className="flex justify-center space-x-8 py-4 border-t border-gray-200">
            <Link href="#features" className="text-sm uppercase tracking-wider hover:text-gray-600 transition-colors">Features</Link>
            <Link href="#wellness" className="text-sm uppercase tracking-wider hover:text-gray-600 transition-colors">Wellness</Link>
            <Link href="#medicine" className="text-sm uppercase tracking-wider hover:text-gray-600 transition-colors">Medicine</Link>
            <Link href="#interviews" className="text-sm uppercase tracking-wider hover:text-gray-600 transition-colors">Interviews</Link>
            <Link href="/" className="text-sm uppercase tracking-wider text-red-600 hover:text-red-700 transition-colors">Subscribe</Link>
          </nav>
        </div>
      </header>

      {/* Hero Editorial Spread */}
      <section className="relative">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7">
              <div className="relative h-[600px] bg-gray-100 overflow-hidden">
                <Image 
                  src={getImagePath('/images/doctor-portrait.jpg')}
                  alt="Dr. Aaron Rosenberg"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                  <p className="text-white text-sm uppercase tracking-wider mb-2">Cover Story</p>
                  <h2 className="text-4xl font-serif text-white">The New Era of Personalized Medicine</h2>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="sticky top-8">
                <p className="text-red-600 font-medium mb-4 uppercase tracking-wider text-sm">Feature Article</p>
                <h3 className="text-3xl font-serif mb-6 leading-tight">
                  How Direct Primary Care is Revolutionizing Doctor-Patient Relationships
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                  In an age of rushed appointments and insurance bureaucracy, Dr. Aaron Rosenberg is pioneering 
                  a return to medicine's roots: meaningful connections and comprehensive care.
                </p>
                <div className="border-l-4 border-red-600 pl-6 mb-8">
                  <p className="text-gray-800 italic text-lg">
                    "Healthcare should be a collaboration, not a transaction. Every patient deserves time, 
                    attention, and a personalized approach to wellness."
                  </p>
                  <p className="text-sm text-gray-600 mt-2">— Dr. Aaron Rosenberg</p>
                </div>
                <Link href="#contact" className="inline-flex items-center text-red-600 hover:text-red-700 transition-colors font-medium">
                  <span>Read Full Story</span>
                  <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Editorial Grid */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-red-600 font-medium mb-2 uppercase tracking-wider text-sm">In This Issue</p>
            <h2 className="text-4xl font-serif">Comprehensive Care Services</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: FaUserMd, 
                title: 'Direct Primary Care', 
                subtitle: 'The Foundation',
                excerpt: 'Unlimited access to your physician without insurance barriers.',
                image: '/images/primary-care.jpg'
              },
              { 
                icon: FaBrain, 
                title: 'Ketamine Therapy', 
                subtitle: 'Mental Wellness',
                excerpt: 'Revolutionary treatment for depression and chronic pain.',
                image: '/images/ketamine-therapy.jpg'
              },
              { 
                icon: FaSyringe, 
                title: 'PRP Injections', 
                subtitle: 'Regenerative Medicine',
                excerpt: 'Natural healing using your body\'s own growth factors.',
                image: '/images/prp-therapy.jpg'
              },
              { 
                icon: FaFlask, 
                title: 'Functional Medicine', 
                subtitle: 'Root Cause Analysis',
                excerpt: 'Comprehensive testing to uncover underlying health issues.',
                image: '/images/functional-medicine.jpg'
              },
              { 
                icon: FaPrescriptionBottleAlt, 
                title: 'Addiction Treatment', 
                subtitle: 'Recovery Support',
                excerpt: 'Compassionate, evidence-based addiction recovery programs.',
                image: '/images/addiction-treatment.jpg'
              },
              { 
                icon: FaHeartbeat, 
                title: 'Wellness Programs', 
                subtitle: 'Preventive Care',
                excerpt: 'Personalized plans for optimal health and longevity.',
                image: '/images/wellness.jpg'
              }
            ].map((service, idx) => (
              <article key={idx} className="bg-white shadow-sm hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-100 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <service.icon className="text-6xl text-gray-300" />
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-red-600 text-xs uppercase tracking-wider mb-2">{service.subtitle}</p>
                  <h3 className="text-xl font-serif mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.excerpt}</p>
                  <Link href="#" className="text-sm uppercase tracking-wider text-gray-800 hover:text-red-600 transition-colors">
                    Learn More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Essay Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-red-600 font-medium mb-4 uppercase tracking-wider text-sm flex items-center gap-2">
                <FaCamera /> Photo Essay
              </p>
              <h2 className="text-4xl font-serif mb-6">A Day in Direct Care</h2>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                Step inside Lotus Direct Care to experience healthcare reimagined. From the moment you enter, 
                every detail is designed for comfort, connection, and comprehensive care.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-100 h-32"></div>
                <div className="bg-gray-100 h-32"></div>
                <div className="bg-gray-100 h-32"></div>
                <div className="bg-gray-100 h-32"></div>
              </div>
              <p className="text-sm text-gray-600 italic">
                Photography by Medical Journal • Styling by Healthcare Design
              </p>
            </div>
            <div>
              <div className="bg-gray-100 h-[600px] relative">
                <div className="absolute bottom-8 left-8 right-8 bg-white p-6">
                  <FaQuoteLeft className="text-2xl text-red-600 mb-4" />
                  <p className="text-lg font-serif mb-4">
                    "In 15 years of practice, I've learned that healing happens when patients feel heard, 
                    understood, and empowered in their healthcare journey."
                  </p>
                  <p className="text-sm text-gray-600">Dr. Aaron Rosenberg, Founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Magazine Style */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-red-600 font-medium mb-2 uppercase tracking-wider text-sm">Reader Stories</p>
            <h2 className="text-4xl font-serif">Voices of Wellness</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { 
                name: 'Sarah Mitchell', 
                role: 'Direct Care Member',
                text: 'Finally, a doctor who takes time to listen. The difference in care quality is remarkable.',
                rating: 5
              },
              { 
                name: 'James Chen', 
                role: 'Ketamine Therapy Patient',
                text: 'Life-changing treatment in a supportive, professional environment. Highly recommended.',
                rating: 5
              },
              { 
                name: 'Emily Rodriguez', 
                role: 'Functional Medicine Client',
                text: 'They found health issues other doctors missed. Truly comprehensive care.',
                rating: 5
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white p-8 text-center">
                <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-6"></div>
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-red-600">★</span>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6 leading-relaxed">"{testimonial.text}"</p>
                <p className="font-medium">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Editorial */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-red-500 font-medium mb-4 uppercase tracking-wider text-sm">Special Offer</p>
            <h2 className="text-5xl font-serif mb-6">Begin Your Healthcare Journey</h2>
            <p className="text-xl mb-8 text-gray-300 leading-relaxed">
              Join thousands who have discovered the power of personalized, accessible healthcare. 
              Your story of wellness starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#contact" className="bg-white text-black px-8 py-4 hover:bg-gray-100 transition-colors uppercase tracking-wider font-medium">
                Schedule Consultation
              </Link>
              <Link href="#" className="border border-white px-8 py-4 hover:bg-white hover:text-black transition-all uppercase tracking-wider font-medium">
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-red-600 font-medium mb-4 uppercase tracking-wider text-sm">Get In Touch</p>
              <h2 className="text-4xl font-serif mb-8">Write Your Next Chapter</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 uppercase tracking-wider">First Name</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-300 focus:border-red-600 outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 uppercase tracking-wider">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-300 focus:border-red-600 outline-none transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 uppercase tracking-wider">Email</label>
                  <input type="email" className="w-full px-4 py-3 border border-gray-300 focus:border-red-600 outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 uppercase tracking-wider">Phone</label>
                  <input type="tel" className="w-full px-4 py-3 border border-gray-300 focus:border-red-600 outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 uppercase tracking-wider">Your Story</label>
                  <textarea rows={4} className="w-full px-4 py-3 border border-gray-300 focus:border-red-600 outline-none transition-colors"></textarea>
                </div>
                <button type="submit" className="w-full bg-black text-white py-4 hover:bg-gray-800 transition-colors uppercase tracking-wider font-medium">
                  Submit Your Story
                </button>
              </form>
            </div>
            <div className="bg-gray-50 p-12">
              <p className="text-red-600 font-medium mb-4 uppercase tracking-wider text-sm">Editorial Office</p>
              <h3 className="text-2xl font-serif mb-8">Visit Our Studio</h3>
              <div className="space-y-6 text-gray-700">
                <div>
                  <p className="font-medium mb-1">Address</p>
                  <p>1234 Wellness Avenue<br />Healthville, HC 12345</p>
                </div>
                <div>
                  <p className="font-medium mb-1">Contact</p>
                  <p>Phone: (555) 123-4567<br />Email: editor@lotusdirectcare.com</p>
                </div>
                <div>
                  <p className="font-medium mb-1">Office Hours</p>
                  <p>Monday - Friday: 8:00 AM - 5:00 PM<br />Weekend: By Appointment</p>
                </div>
              </div>
              <div className="mt-12 pt-8 border-t border-gray-300">
                <p className="text-sm text-gray-600 flex items-center gap-2">
                  <FaBookOpen /> 
                  <span>Subscribe to our quarterly journal for health insights and patient stories.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-12 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-3xl font-serif mb-2">LOTUS</h3>
            <p className="text-xs uppercase tracking-[0.3em] text-gray-600 mb-8">Direct Care Journal</p>
            <div className="flex justify-center gap-8 mb-8">
              <Link href="/privacy" className="text-sm uppercase tracking-wider text-gray-600 hover:text-black transition-colors">Privacy</Link>
              <Link href="/terms" className="text-sm uppercase tracking-wider text-gray-600 hover:text-black transition-colors">Terms</Link>
              <Link href="/subscribe" className="text-sm uppercase tracking-wider text-gray-600 hover:text-black transition-colors">Subscribe</Link>
              <Link href="/advertise" className="text-sm uppercase tracking-wider text-gray-600 hover:text-black transition-colors">Advertise</Link>
            </div>
            <p className="text-sm text-gray-600">© 2025 Lotus Direct Care Journal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}