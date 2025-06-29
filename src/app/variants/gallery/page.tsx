'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  FaUserMd, 
  FaHeartbeat, 
  FaBrain, 
  FaFlask,
  FaSyringe,
  FaPrescriptionBottleAlt,
  FaExpandAlt,
  FaPalette,
  FaImage,
  FaSquare,
  FaTh,
  FaBorderAll
} from 'react-icons/fa';
import { getImagePath } from '../../lib/variant-utils';

export default function GalleryVariant() {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Gallery Frame Border */}
      <div className="fixed inset-0 pointer-events-none z-50">
        <div className="absolute inset-4 border-[20px] border-gray-900"></div>
      </div>

      {/* Header - Museum Style */}
      <header className="bg-white shadow-sm relative z-40">
        <div className="container mx-auto px-16">
          <div className="flex items-center justify-between h-24">
            <div className="flex items-center space-x-4">
              <div className="flex gap-1">
                <FaSquare className="text-gray-900" />
                <FaSquare className="text-gray-700" />
                <FaSquare className="text-gray-500" />
                <FaSquare className="text-gray-300" />
              </div>
              <div className="h-8 w-px bg-gray-300"></div>
              <span className="text-3xl font-light tracking-[0.3em] text-gray-900">LOTUS</span>
            </div>
            <nav className="hidden md:flex items-center space-x-12">
              <Link href="#exhibition" className="text-gray-600 hover:text-gray-900 transition-colors tracking-wider text-sm">Exhibition</Link>
              <Link href="#collection" className="text-gray-600 hover:text-gray-900 transition-colors tracking-wider text-sm">Collection</Link>
              <Link href="#artist" className="text-gray-600 hover:text-gray-900 transition-colors tracking-wider text-sm">Artist</Link>
              <Link href="#visit" className="text-gray-600 hover:text-gray-900 transition-colors tracking-wider text-sm">Visit</Link>
              <Link href="/" className="bg-gray-900 text-white px-6 py-3 hover:bg-gray-800 transition-colors tracking-wider text-sm">
                Main Gallery
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero - Featured Exhibition */}
      <section className="relative py-20 px-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-3 mb-8">
                <FaPalette className="text-2xl text-gray-700" />
                <span className="text-xs tracking-[0.3em] text-gray-600">CURRENT EXHIBITION</span>
              </div>
              <h1 className="text-6xl lg:text-7xl font-light mb-6 leading-none">
                The Art
                <span className="block">of Healing</span>
              </h1>
              <div className="w-24 h-1 bg-gray-900 mb-8"></div>
              <p className="text-xl text-gray-700 mb-8 font-light leading-relaxed">
                A curated collection of medical excellence, where each treatment 
                is crafted with the precision of a masterpiece.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="#visit" className="bg-gray-900 text-white px-8 py-4 hover:bg-gray-800 transition-colors tracking-wider">
                  View Exhibition
                </Link>
                <Link href="#collection" className="border-2 border-gray-900 text-gray-900 px-8 py-4 hover:bg-gray-900 hover:text-white transition-all tracking-wider">
                  Browse Collection
                </Link>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="relative">
                <div className="aspect-[4/3] bg-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300"></div>
                  <div className="absolute inset-8 border-4 border-white"></div>
                  <div className="absolute bottom-0 left-0 bg-white p-6 shadow-lg">
                    <p className="text-xs tracking-wider text-gray-600 mb-2">PLATE I</p>
                    <p className="text-lg font-light">Personalized Healthcare, 2025</p>
                    <p className="text-sm text-gray-600">Mixed Media on Canvas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Gallery Grid */}
      <section id="exhibition" className="py-20 bg-white px-16">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <FaTh className="text-gray-700" />
              <span className="text-xs tracking-[0.3em] text-gray-600">PERMANENT COLLECTION</span>
            </div>
            <h2 className="text-5xl font-light mb-4">Medical Masterpieces</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: FaUserMd, 
                title: 'Direct Primary Care', 
                plate: 'II',
                medium: 'Continuous Care Canvas',
                year: 'Est. 2010'
              },
              { 
                icon: FaBrain, 
                title: 'Ketamine Therapy', 
                plate: 'III',
                medium: 'Neural Renaissance',
                year: 'Modern Era'
              },
              { 
                icon: FaSyringe, 
                title: 'PRP Injections', 
                plate: 'IV',
                medium: 'Regenerative Sculpture',
                year: 'Contemporary'
              },
              { 
                icon: FaFlask, 
                title: 'Functional Medicine', 
                plate: 'V',
                medium: 'Systematic Analysis',
                year: 'Timeless'
              },
              { 
                icon: FaPrescriptionBottleAlt, 
                title: 'Addiction Treatment', 
                plate: 'VI',
                medium: 'Recovery Installation',
                year: 'Ongoing'
              },
              { 
                icon: FaHeartbeat, 
                title: 'Wellness Programs', 
                plate: 'VII',
                medium: 'Living Performance',
                year: 'Perpetual'
              }
            ].map((service, idx) => (
              <div 
                key={idx} 
                className="group cursor-pointer"
                onClick={() => setSelectedService(idx)}
              >
                <div className="bg-gray-100 aspect-[4/5] relative overflow-hidden mb-4 group-hover:shadow-xl transition-shadow">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-200"></div>
                  <div className="absolute inset-4 border-2 border-gray-300 group-hover:border-gray-600 transition-colors"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <service.icon className="text-6xl text-gray-400 group-hover:text-gray-600 transition-colors" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <FaExpandAlt className="text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-xs tracking-wider text-gray-600 mb-2">PLATE {service.plate}</p>
                  <h3 className="text-xl font-light mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600 italic">{service.medium}</p>
                  <p className="text-xs text-gray-500 mt-1">{service.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Artist Statement */}
      <section id="artist" className="py-20 bg-gray-50 px-16">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <div className="inline-flex items-center gap-3 mb-8">
                  <FaImage className="text-gray-700" />
                  <span className="text-xs tracking-[0.3em] text-gray-600">ARTIST STATEMENT</span>
                </div>
                <h2 className="text-4xl font-light mb-8">Dr. Aaron Rosenberg</h2>
                <div className="prose prose-lg text-gray-700 font-light">
                  <p className="mb-6">
                    "In my practice, I view each patient interaction as an opportunity to create 
                    something beautiful—a unique healthcare experience tailored to individual needs, 
                    crafted with the same care and attention an artist brings to their canvas."
                  </p>
                  <p className="mb-6">
                    With over 15 years dedicated to perfecting the art of personalized medicine, 
                    I've developed a practice that treats healthcare as both science and art, 
                    where precision meets compassion.
                  </p>
                  <p>
                    Each 'piece' in our collection represents not just a service, but a carefully 
                    curated experience designed to transform lives and elevate the standard of 
                    medical care.
                  </p>
                </div>
              </div>
              <div>
                <div className="bg-gray-200 aspect-[3/4] relative">
                  <div className="absolute inset-4 border-2 border-gray-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 bg-white p-4">
                    <p className="text-xs tracking-wider text-gray-600">PORTRAIT</p>
                    <p className="text-sm">The Healer, 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Gallery Reviews */}
      <section className="py-20 bg-white px-16">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <FaBorderAll className="text-gray-700" />
              <span className="text-xs tracking-[0.3em] text-gray-600">VISITOR REVIEWS</span>
            </div>
            <h2 className="text-4xl font-light">Critical Acclaim</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {[
              { 
                name: 'Katherine M.', 
                title: 'Healthcare Connoisseur',
                text: 'A masterful blend of medical expertise and personal attention. Truly exceptional.',
                rating: '★★★★★'
              },
              { 
                name: 'Robert Chen', 
                title: 'Wellness Enthusiast',
                text: 'The attention to detail in every aspect of care is remarkable. A rare find.',
                rating: '★★★★★'
              },
              { 
                name: 'Isabella S.', 
                title: 'Patient Advocate',
                text: 'Dr. Rosenberg has elevated healthcare to an art form. Simply transformative.',
                rating: '★★★★★'
              }
            ].map((review, idx) => (
              <div key={idx} className="text-center">
                <div className="bg-gray-100 w-20 h-20 rounded-full mx-auto mb-6"></div>
                <p className="text-xl mb-4">{review.rating}</p>
                <p className="text-gray-700 italic mb-4 font-light">"{review.text}"</p>
                <p className="font-medium">{review.name}</p>
                <p className="text-sm text-gray-600">{review.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Exhibition Hours */}
      <section className="py-20 bg-gray-900 text-white px-16">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-5xl font-light mb-8">Visit the Exhibition</h2>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-xl mb-12 font-light">
              Experience healthcare reimagined as art. Schedule your private viewing today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#visit" className="bg-white text-gray-900 px-8 py-4 hover:bg-gray-100 transition-colors tracking-wider">
                Book Private Tour
              </Link>
              <Link href="#collection" className="border-2 border-white px-8 py-4 hover:bg-white hover:text-gray-900 transition-all tracking-wider">
                View Catalog
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact - Museum Information */}
      <section id="visit" className="py-20 bg-white px-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
            <div>
              <div className="inline-flex items-center gap-3 mb-8">
                <FaImage className="text-gray-700" />
                <span className="text-xs tracking-[0.3em] text-gray-600">VISITOR INFORMATION</span>
              </div>
              <h2 className="text-4xl font-light mb-8">Plan Your Visit</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm tracking-wider text-gray-600 mb-2">First Name</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-300 focus:border-gray-600 outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm tracking-wider text-gray-600 mb-2">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-300 focus:border-gray-600 outline-none transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm tracking-wider text-gray-600 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 border border-gray-300 focus:border-gray-600 outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-sm tracking-wider text-gray-600 mb-2">Phone</label>
                  <input type="tel" className="w-full px-4 py-3 border border-gray-300 focus:border-gray-600 outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-sm tracking-wider text-gray-600 mb-2">Preferred Exhibition</label>
                  <select className="w-full px-4 py-3 border border-gray-300 focus:border-gray-600 outline-none transition-colors">
                    <option>Select a service to explore</option>
                    <option>Direct Primary Care</option>
                    <option>Ketamine Therapy</option>
                    <option>PRP Injections</option>
                    <option>Functional Medicine</option>
                    <option>Addiction Treatment</option>
                    <option>Wellness Programs</option>
                  </select>
                </div>
                <button type="submit" className="w-full bg-gray-900 text-white py-4 hover:bg-gray-800 transition-colors tracking-wider">
                  Reserve Your Tour
                </button>
              </form>
            </div>
            <div className="bg-gray-50 p-12">
              <h3 className="text-2xl font-light mb-8">Gallery Information</h3>
              <div className="space-y-6 text-gray-700">
                <div>
                  <p className="font-medium mb-2">Location</p>
                  <p className="font-light">The Lotus Gallery<br />1234 Wellness Avenue<br />Healthville, HC 12345</p>
                </div>
                <div>
                  <p className="font-medium mb-2">Exhibition Hours</p>
                  <p className="font-light">Monday - Friday: 8:00 AM - 5:00 PM<br />Private viewings by appointment</p>
                </div>
                <div>
                  <p className="font-medium mb-2">Contact</p>
                  <p className="font-light">Phone: (555) 123-4567<br />Email: gallery@lotusdirectcare.com</p>
                </div>
                <div className="pt-6 border-t border-gray-300">
                  <p className="text-sm italic font-light">
                    "Where medical excellence meets artistic expression."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-12 border-t border-gray-300 px-16">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <div className="flex gap-1">
                <FaSquare className="text-gray-700 text-xs" />
                <FaSquare className="text-gray-600 text-xs" />
                <FaSquare className="text-gray-500 text-xs" />
                <FaSquare className="text-gray-400 text-xs" />
              </div>
              <span className="text-xl font-light tracking-[0.2em]">LOTUS GALLERY</span>
            </div>
            <div className="flex gap-8 text-sm tracking-wider">
              <Link href="/privacy" className="text-gray-600 hover:text-gray-900 transition-colors">Privacy</Link>
              <Link href="/terms" className="text-gray-600 hover:text-gray-900 transition-colors">Terms</Link>
              <Link href="/catalog" className="text-gray-600 hover:text-gray-900 transition-colors">Catalog</Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-300 text-center">
            <p className="text-sm text-gray-600 font-light">© 2025 Lotus Direct Care Gallery • Where Healthcare Meets Art</p>
          </div>
        </div>
      </footer>

      {/* Service Modal */}
      {selectedService !== null && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-8"
          onClick={() => setSelectedService(null)}
        >
          <div className="bg-white max-w-4xl w-full p-12" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-8">
              <h3 className="text-3xl font-light">Service Details</h3>
              <button 
                onClick={() => setSelectedService(null)}
                className="text-2xl hover:text-gray-600 transition-colors"
              >
                ×
              </button>
            </div>
            <p className="text-gray-700 font-light leading-relaxed">
              Each service in our collection represents years of refinement and dedication to the craft of healing. 
              Schedule your private consultation to experience healthcare as it was meant to be.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}