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
  FaCheck,
  FaArrowRight,
  FaDiamond,
  FaCircle
} from 'react-icons/fa';
import { getImagePath } from '../../../lib/variant-utils';

export default function MonochromeVariant() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Subtle Pattern Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, black 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <div className="relative">
                <FaDiamond className="text-3xl text-emerald-500" />
                <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-emerald-500 rounded-full"></div>
              </div>
              <span className="ml-3 text-2xl font-light tracking-[0.2em]">LOTUS</span>
            </div>
            <nav className="hidden md:flex items-center space-x-12">
              <Link href="#services" className="text-gray-700 hover:text-black transition-colors text-sm tracking-wider">Services</Link>
              <Link href="#about" className="text-gray-700 hover:text-black transition-colors text-sm tracking-wider">About</Link>
              <Link href="#testimonials" className="text-gray-700 hover:text-black transition-colors text-sm tracking-wider">Reviews</Link>
              <Link href="#contact" className="bg-black text-white px-6 py-3 hover:bg-gray-900 transition-colors text-sm tracking-wider">
                Book Consultation
              </Link>
              <Link href="/" className="text-emerald-500 hover:text-emerald-600 transition-colors text-sm tracking-wider">
                Main Site
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 mb-8">
                  <div className="w-8 h-[1px] bg-emerald-500"></div>
                  <span className="text-sm tracking-[0.2em] text-gray-600">ELITE HEALTHCARE</span>
                </div>
                <h1 className="text-5xl lg:text-7xl font-light leading-tight mb-6">
                  Precision
                  <span className="block text-emerald-500">Medicine</span>
                  <span className="block">Redefined</span>
                </h1>
                <p className="text-xl text-gray-700 mb-8 font-light leading-relaxed">
                  Experience healthcare elevated to an art form. Where every detail matters, 
                  and your wellness is our masterpiece.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="#contact" className="bg-black text-white px-8 py-4 hover:bg-gray-900 transition-all text-sm tracking-wider">
                    Begin Your Journey
                  </Link>
                  <Link href="#services" className="border border-black text-black px-8 py-4 hover:bg-black hover:text-white transition-all text-sm tracking-wider">
                    Explore Services
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/5] bg-gray-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200"></div>
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-emerald-500"></div>
                  <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-gray-300 rotate-45"></div>
                </div>
                <div className="absolute -bottom-8 -left-8 bg-white border border-gray-200 p-6 shadow-lg">
                  <p className="text-3xl font-light mb-2">15+</p>
                  <p className="text-sm text-gray-600 tracking-wider">Years Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-[1px] bg-gray-300"></div>
                <FaCircle className="text-emerald-500 text-xs" />
                <div className="w-12 h-[1px] bg-gray-300"></div>
              </div>
              <h2 className="text-4xl font-light mb-4 tracking-wide">Curated Services</h2>
              <p className="text-gray-600 font-light">Precision healthcare tailored to perfection</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: FaUserMd, title: 'Direct Primary Care', desc: 'Unlimited access. Unparalleled attention.' },
                { icon: FaBrain, title: 'Ketamine Therapy', desc: 'Revolutionary mental wellness solutions.' },
                { icon: FaSyringe, title: 'PRP Injections', desc: 'Natural regeneration. Lasting results.' },
                { icon: FaFlask, title: 'Functional Medicine', desc: 'Root cause resolution. Complete healing.' },
                { icon: FaPrescriptionBottleAlt, title: 'Addiction Treatment', desc: 'Compassionate recovery. New beginnings.' },
                { icon: FaHeartbeat, title: 'Wellness Programs', desc: 'Optimal health. Peak performance.' }
              ].map((service, idx) => (
                <div key={idx} className="bg-white border border-gray-200 p-8 hover:shadow-xl transition-all group">
                  <div className="inline-flex items-center justify-center w-16 h-16 border border-gray-200 mb-6 group-hover:border-emerald-500 transition-colors">
                    <service.icon className="text-2xl text-gray-700 group-hover:text-emerald-500 transition-colors" />
                  </div>
                  <h3 className="text-xl font-light mb-3 tracking-wide">{service.title}</h3>
                  <p className="text-gray-600 mb-6 font-light">{service.desc}</p>
                  <Link href="#" className="inline-flex items-center text-sm tracking-wider text-gray-700 hover:text-emerald-500 transition-colors">
                    Learn More
                    <FaArrowRight className="ml-2 text-xs" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 mb-8">
                  <div className="w-8 h-[1px] bg-emerald-500"></div>
                  <span className="text-sm tracking-[0.2em] text-gray-600">THE LOTUS DIFFERENCE</span>
                </div>
                <h2 className="text-4xl font-light mb-6 tracking-wide">
                  Where Excellence
                  <span className="block">Meets <span className="text-emerald-500">Empathy</span></span>
                </h2>
                <p className="text-gray-700 mb-6 font-light leading-relaxed">
                  Dr. Aaron Rosenberg has redefined what it means to receive medical care. 
                  With over 15 years of experience, he combines cutting-edge medical expertise 
                  with genuine human connection.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    'Unlimited appointments with no rush',
                    'Direct access via phone, text, or email',
                    'Same or next-day availability',
                    'Comprehensive preventive care',
                    'Coordination with specialists'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <FaCheck className="text-emerald-500 flex-shrink-0" />
                      <span className="text-gray-700 font-light">{item}</span>
                    </div>
                  ))}
                </div>
                <Link href="#contact" className="inline-flex items-center text-black hover:text-emerald-500 transition-colors tracking-wider">
                  <span>Meet Dr. Rosenberg</span>
                  <FaArrowRight className="ml-2" />
                </Link>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gray-100 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200"></div>
                  <div className="absolute inset-4 border border-gray-300"></div>
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-emerald-500"></div>
                </div>
                <div className="absolute top-8 -left-8 bg-black text-white p-6">
                  <p className="text-2xl font-light mb-2">1000+</p>
                  <p className="text-sm tracking-wider">Lives Transformed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-[1px] bg-gray-300"></div>
                <FaCircle className="text-emerald-500 text-xs" />
                <div className="w-12 h-[1px] bg-gray-300"></div>
              </div>
              <h2 className="text-4xl font-light tracking-wide">Client Testimonials</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  name: 'Alexander M.', 
                  text: 'The attention to detail and personalized care is unmatched. This is healthcare as it should be.',
                  role: 'Executive'
                },
                { 
                  name: 'Victoria L.', 
                  text: 'Dr. Rosenberg transformed my approach to wellness. The results speak for themselves.',
                  role: 'Entrepreneur'
                },
                { 
                  name: 'Jonathan K.', 
                  text: 'Finally, a medical practice that values my time as much as my health. Exceptional service.',
                  role: 'Attorney'
                }
              ].map((testimonial, idx) => (
                <div key={idx} className="bg-white border border-gray-200 p-8">
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <FaCircle key={i} className="text-emerald-500 text-xs" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 font-light italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <p className="font-medium tracking-wide">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="w-12 h-[1px] bg-gray-600"></div>
              <FaDiamond className="text-emerald-500" />
              <div className="w-12 h-[1px] bg-gray-600"></div>
            </div>
            <h2 className="text-4xl font-light mb-6 tracking-wide">
              Your Journey to Optimal Health
              <span className="block text-emerald-500">Begins Today</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 font-light">
              Experience the pinnacle of personalized medical care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#contact" className="bg-white text-black px-8 py-4 hover:bg-gray-100 transition-colors tracking-wider">
                Schedule Consultation
              </Link>
              <Link href="https://lotusdirectcare.hint.com/signup/" className="border border-white px-8 py-4 hover:bg-white hover:text-black transition-all tracking-wider">
                Join Membership
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <div className="inline-flex items-center gap-2 mb-8">
                  <div className="w-8 h-[1px] bg-emerald-500"></div>
                  <span className="text-sm tracking-[0.2em] text-gray-600">GET IN TOUCH</span>
                </div>
                <h2 className="text-4xl font-light mb-8 tracking-wide">Begin Your Consultation</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm mb-2 tracking-wider text-gray-600">First Name</label>
                      <input type="text" className="w-full px-4 py-3 border border-gray-300 focus:border-emerald-500 outline-none transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm mb-2 tracking-wider text-gray-600">Last Name</label>
                      <input type="text" className="w-full px-4 py-3 border border-gray-300 focus:border-emerald-500 outline-none transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm mb-2 tracking-wider text-gray-600">Email</label>
                    <input type="email" className="w-full px-4 py-3 border border-gray-300 focus:border-emerald-500 outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm mb-2 tracking-wider text-gray-600">Phone</label>
                    <input type="tel" className="w-full px-4 py-3 border border-gray-300 focus:border-emerald-500 outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm mb-2 tracking-wider text-gray-600">Message</label>
                    <textarea rows={4} className="w-full px-4 py-3 border border-gray-300 focus:border-emerald-500 outline-none transition-colors"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-black text-white py-4 hover:bg-gray-900 transition-colors tracking-wider">
                    Submit Inquiry
                  </button>
                </form>
              </div>
              <div className="lg:pl-16">
                <div className="bg-gray-50 p-12">
                  <h3 className="text-2xl font-light mb-8 tracking-wide">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <FaMapMarkerAlt className="text-emerald-500 mt-1" />
                      <div>
                        <p className="font-medium mb-1">Location</p>
                        <p className="text-gray-600 font-light">
                          1234 Wellness Avenue<br />
                          Healthville, HC 12345
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <FaPhone className="text-emerald-500 mt-1" />
                      <div>
                        <p className="font-medium mb-1">Phone</p>
                        <p className="text-gray-600 font-light">(555) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <FaEnvelope className="text-emerald-500 mt-1" />
                      <div>
                        <p className="font-medium mb-1">Email</p>
                        <p className="text-gray-600 font-light">concierge@lotusdirectcare.com</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-12 pt-8 border-t border-gray-300">
                    <p className="text-sm text-gray-600 font-light">
                      Office Hours: Monday - Friday, 8:00 AM - 5:00 PM<br />
                      After-hours support available for members
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center mb-4 md:mb-0">
                <FaDiamond className="text-2xl text-emerald-500 mr-3" />
                <span className="text-xl font-light tracking-[0.2em]">LOTUS</span>
              </div>
              <div className="flex gap-8">
                <Link href="/privacy" className="text-sm text-gray-600 hover:text-black transition-colors tracking-wider">Privacy</Link>
                <Link href="/terms" className="text-sm text-gray-600 hover:text-black transition-colors tracking-wider">Terms</Link>
                <Link href="/hipaa" className="text-sm text-gray-600 hover:text-black transition-colors tracking-wider">HIPAA</Link>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200 text-center">
              <p className="text-sm text-gray-600 font-light">© 2025 Lotus Direct Care. Excellence in Every Detail.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}