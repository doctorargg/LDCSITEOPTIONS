'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { 
  FaStethoscope, FaSyringe, FaFlask, FaUserMd, FaClock, FaCalendarCheck,
  FaComments, FaHandHoldingUsd, FaVideo, FaMortarPestle, FaFeatherAlt,
  FaScroll, FaEnvelopeOpen, FaPhoneAlt, FaMapMarkedAlt, FaCrown
} from 'react-icons/fa';

export default function VictorianVariant() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: "Dr. Rosenberg doth possess the most exemplary bedside manner. His attentiveness to one's constitution is without parallel.",
      author: "Mrs. Elizabeth H.",
      title: "Esteemed Patient"
    },
    {
      text: "The distinguished care I have received at this establishment far exceeds any previous medical consultations. Most commendable!",
      author: "Mr. William T.",
      title: "Grateful Patron"
    },
    {
      text: "A most revolutionary approach to the healing arts! The personal attention afforded is truly remarkable.",
      author: "Lady Margaret S.",
      title: "Devoted Member"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-cream to-amber-50">
      {/* Vintage paper texture overlay */}
      <div className="fixed inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Ornate Header */}
      <header className="relative bg-gradient-to-b from-burgundy-900 to-burgundy-800 text-cream shadow-xl">
        {/* Top decorative border */}
        <div className="h-4 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-px bg-burgundy-900 opacity-30"></div>
          </div>
        </div>
        
        <nav className="container mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gold-400 rounded-full blur-md opacity-50"></div>
                <Image 
                  src="/images/LOGOTRANSPARENTFLOWERONLY1.png" 
                  alt="Lotus Direct Care Emblem" 
                  width={60} 
                  height={60} 
                  className="relative drop-shadow-lg"
                />
              </div>
              <div className="font-playfair">
                <h1 className="text-2xl font-bold text-cream">Lotus Direct Care</h1>
                <p className="text-xs text-gold-300 italic">Est. Excellence in Medicine</p>
              </div>
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-cream hover:text-gold-300 transition-colors font-playfair">Home</Link>
              <Link href="/about" className="text-cream hover:text-gold-300 transition-colors font-playfair">About</Link>
              <Link href="/services" className="text-cream hover:text-gold-300 transition-colors font-playfair">Services</Link>
              <Link href="/direct-primary-care" className="text-cream hover:text-gold-300 transition-colors font-playfair">Direct Care</Link>
              <Link href="/contact" className="text-cream hover:text-gold-300 transition-colors font-playfair">Contact</Link>
              <a 
                href="https://app.elationpassport.com/passport/login/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-gold-600 hover:bg-gold-700 text-burgundy-900 font-bold py-2 px-6 rounded-sm border-2 border-gold-700 shadow-lg transition-all font-playfair"
              >
                Patient Portal
              </a>
            </div>
          </div>
        </nav>
        
        {/* Bottom decorative border */}
        <div className="h-4 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-px bg-burgundy-900 opacity-30"></div>
          </div>
        </div>
      </header>

      {/* Hero Section with Victorian Grandeur */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy-900 via-burgundy-800 to-transparent opacity-90"></div>
        
        {/* Ornate corner decorations */}
        <div className="absolute top-0 left-0 w-32 h-32 opacity-30">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-gold-400">
            <path d="M0,0 Q50,0 50,50 Q0,50 0,0 M10,10 Q40,10 40,40 Q10,40 10,10" />
          </svg>
        </div>
        <div className="absolute top-0 right-0 w-32 h-32 opacity-30 rotate-90">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-gold-400">
            <path d="M0,0 Q50,0 50,50 Q0,50 0,0 M10,10 Q40,10 40,40 Q10,40 10,10" />
          </svg>
        </div>
        
        <div className="relative container mx-auto px-6 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Decorative divider */}
            <div className="flex items-center justify-center mb-8">
              <div className="h-px bg-gold-400 w-24"></div>
              <FaCrown className="text-gold-400 text-2xl mx-4" />
              <div className="h-px bg-gold-400 w-24"></div>
            </div>
            
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-cream mb-6 leading-tight">
              A Most Distinguished Approach to the Healing Arts
            </h1>
            
            <p className="text-xl text-cream/90 mb-8 font-serif italic">
              Wherein the esteemed physician doth devote proper time and attention to each patron's 
              constitution, eschewing the hurried consultations of common practice
            </p>
            
            {/* Feature boxes with ornate frames */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-cream/10 backdrop-blur-sm border-2 border-gold-400/30 rounded-sm p-6 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-burgundy-800 px-3">
                  <FaClock className="text-gold-400 text-xl" />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-gold-300 mb-2">Extended Consultations</h3>
                <p className="text-cream/80 font-serif">30-60 minute appointments</p>
              </div>
              
              <div className="bg-cream/10 backdrop-blur-sm border-2 border-gold-400/30 rounded-sm p-6 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-burgundy-800 px-3">
                  <FaUserMd className="text-gold-400 text-xl" />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-gold-300 mb-2">Direct Physician Access</h3>
                <p className="text-cream/80 font-serif">Without intermediaries</p>
              </div>
              
              <div className="bg-cream/10 backdrop-blur-sm border-2 border-gold-400/30 rounded-sm p-6 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-burgundy-800 px-3">
                  <FaFlask className="text-gold-400 text-xl" />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-gold-300 mb-2">Laboratory Savings</h3>
                <p className="text-cream/80 font-serif">70-90% reduction in costs</p>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="https://app.elationemr.com/book/lotusdirectcare/service-locations/933212881617143?appointment_types=" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-gold-600 hover:bg-gold-700 text-burgundy-900 font-bold py-3 px-8 rounded-sm border-2 border-gold-700 shadow-xl transition-all font-playfair text-lg"
              >
                Request an Audience
              </Link>
              <Link 
                href="/direct-primary-care" 
                className="border-2 border-cream hover:bg-cream hover:text-burgundy-900 text-cream font-bold py-3 px-8 rounded-sm transition-all font-playfair text-lg"
              >
                Discover Our Methods
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Victorian Elegance */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          {/* Section Header with Ornate Design */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <div className="h-px bg-burgundy-600 w-32"></div>
              <FaMortarPestle className="text-burgundy-600 text-3xl mx-4" />
              <div className="h-px bg-burgundy-600 w-32"></div>
            </div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-burgundy-900 mb-4">
              Our Distinguished Services
            </h2>
            <p className="text-lg text-burgundy-700 font-serif italic">
              A comprehensive catalogue of medical remedies and treatments
            </p>
          </div>
          
          {/* Service Cards with Victorian Frames */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Direct Primary Care */}
            <Link href="/direct-primary-care" className="group">
              <div className="bg-cream border-4 border-double border-burgundy-300 rounded-sm p-8 hover:shadow-2xl transition-all relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 opacity-10">
                  <svg viewBox="0 0 100 100" className="w-full h-full fill-burgundy-600">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1"/>
                  </svg>
                </div>
                <FaStethoscope className="text-4xl text-burgundy-600 mb-4" />
                <h3 className="font-playfair text-2xl font-bold text-burgundy-900 mb-3">
                  Direct Primary Care
                </h3>
                <p className="text-burgundy-700 font-serif mb-4">
                  A revolutionary membership model wherein your physician is directly accessible, 
                  providing unhurried consultations and personalized attention.
                </p>
                <span className="text-gold-600 font-playfair font-bold group-hover:text-gold-700">
                  Learn More →
                </span>
              </div>
            </Link>
            
            {/* Functional Medicine */}
            <Link href="/functional-medicine" className="group">
              <div className="bg-cream border-4 border-double border-burgundy-300 rounded-sm p-8 hover:shadow-2xl transition-all relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 opacity-10">
                  <svg viewBox="0 0 100 100" className="w-full h-full fill-burgundy-600">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1"/>
                  </svg>
                </div>
                <FaFlask className="text-4xl text-burgundy-600 mb-4" />
                <h3 className="font-playfair text-2xl font-bold text-burgundy-900 mb-3">
                  Functional Medicine
                </h3>
                <p className="text-burgundy-700 font-serif mb-4">
                  An holistic approach to wellness, addressing the root causes of maladies 
                  through comprehensive examination of one's constitution.
                </p>
                <span className="text-gold-600 font-playfair font-bold group-hover:text-gold-700">
                  Learn More →
                </span>
              </div>
            </Link>
            
            {/* Ketamine Therapy */}
            <Link href="/ketamine-therapy" className="group">
              <div className="bg-cream border-4 border-double border-burgundy-300 rounded-sm p-8 hover:shadow-2xl transition-all relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 opacity-10">
                  <svg viewBox="0 0 100 100" className="w-full h-full fill-burgundy-600">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1"/>
                  </svg>
                </div>
                <FaSyringe className="text-4xl text-burgundy-600 mb-4" />
                <h3 className="font-playfair text-2xl font-bold text-burgundy-900 mb-3">
                  Ketamine Therapy
                </h3>
                <p className="text-burgundy-700 font-serif mb-4">
                  A most modern treatment for melancholia and chronic dolour, 
                  administered with the utmost care and medical supervision.
                </p>
                <span className="text-gold-600 font-playfair font-bold group-hover:text-gold-700">
                  Learn More →
                </span>
              </div>
            </Link>
            
            {/* PRP Injections */}
            <Link href="/prp-injections" className="group">
              <div className="bg-cream border-4 border-double border-burgundy-300 rounded-sm p-8 hover:shadow-2xl transition-all relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 opacity-10">
                  <svg viewBox="0 0 100 100" className="w-full h-full fill-burgundy-600">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1"/>
                  </svg>
                </div>
                <FaSyringe className="text-4xl text-burgundy-600 mb-4" />
                <h3 className="font-playfair text-2xl font-bold text-burgundy-900 mb-3">
                  PRP Injections
                </h3>
                <p className="text-burgundy-700 font-serif mb-4">
                  Utilizing one's own vital essences to promote healing and rejuvenation 
                  of joints and tissues through advanced medical techniques.
                </p>
                <span className="text-gold-600 font-playfair font-bold group-hover:text-gold-700">
                  Learn More →
                </span>
              </div>
            </Link>
            
            {/* Addiction Treatment */}
            <Link href="/addiction-treatment" className="group">
              <div className="bg-cream border-4 border-double border-burgundy-300 rounded-sm p-8 hover:shadow-2xl transition-all relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 opacity-10">
                  <svg viewBox="0 0 100 100" className="w-full h-full fill-burgundy-600">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1"/>
                  </svg>
                </div>
                <FaUserMd className="text-4xl text-burgundy-600 mb-4" />
                <h3 className="font-playfair text-2xl font-bold text-burgundy-900 mb-3">
                  Addiction Treatment
                </h3>
                <p className="text-burgundy-700 font-serif mb-4">
                  Compassionate remedies for those afflicted with dependencies, 
                  employing modern medicinal approaches with dignity and discretion.
                </p>
                <span className="text-gold-600 font-playfair font-bold group-hover:text-gold-700">
                  Learn More →
                </span>
              </div>
            </Link>
            
            {/* Telemedicine */}
            <div className="group">
              <div className="bg-cream border-4 border-double border-burgundy-300 rounded-sm p-8 hover:shadow-2xl transition-all relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 opacity-10">
                  <svg viewBox="0 0 100 100" className="w-full h-full fill-burgundy-600">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1"/>
                  </svg>
                </div>
                <FaVideo className="text-4xl text-burgundy-600 mb-4" />
                <h3 className="font-playfair text-2xl font-bold text-burgundy-900 mb-3">
                  Telemedicine Consultations
                </h3>
                <p className="text-burgundy-700 font-serif mb-4">
                  Modern conveniences allow for remote consultations, bringing the physician's 
                  expertise directly to your drawing room.
                </p>
                <span className="text-gold-600 font-playfair font-bold">
                  Included in Membership
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section with Victorian Flair */}
      <section className="py-20 bg-gradient-to-b from-cream to-amber-50 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <div className="h-px bg-burgundy-600 w-32"></div>
              <FaFeatherAlt className="text-burgundy-600 text-3xl mx-4" />
              <div className="h-px bg-burgundy-600 w-32"></div>
            </div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-burgundy-900 mb-4">
              The Distinguished Benefits of Membership
            </h2>
            <p className="text-lg text-burgundy-700 font-serif italic">
              Experience healthcare as it was meant to be practiced
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Benefit cards with ornate styling */}
            <div className="text-center">
              <div className="bg-burgundy-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 border-4 border-double border-burgundy-300">
                <FaClock className="text-3xl text-burgundy-700" />
              </div>
              <h3 className="font-playfair text-xl font-bold text-burgundy-900 mb-2">
                Unhurried Consultations
              </h3>
              <p className="text-burgundy-700 font-serif">
                30-60 minute appointments allowing for thorough examination and discourse
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-burgundy-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 border-4 border-double border-burgundy-300">
                <FaCalendarCheck className="text-3xl text-burgundy-700" />
              </div>
              <h3 className="font-playfair text-xl font-bold text-burgundy-900 mb-2">
                Prompt Appointments
              </h3>
              <p className="text-burgundy-700 font-serif">
                Same or next-day consultations when illness strikes
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-burgundy-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 border-4 border-double border-burgundy-300">
                <FaComments className="text-3xl text-burgundy-700" />
              </div>
              <h3 className="font-playfair text-xl font-bold text-burgundy-900 mb-2">
                Direct Correspondence
              </h3>
              <p className="text-burgundy-700 font-serif">
                Communicate directly with your physician via modern methods
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-burgundy-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 border-4 border-double border-burgundy-300">
                <FaHandHoldingUsd className="text-3xl text-burgundy-700" />
              </div>
              <h3 className="font-playfair text-xl font-bold text-burgundy-900 mb-2">
                Transparent Fees
              </h3>
              <p className="text-burgundy-700 font-serif">
                No hidden charges or unexpected bills
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-burgundy-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 border-4 border-double border-burgundy-300">
                <FaVideo className="text-3xl text-burgundy-700" />
              </div>
              <h3 className="font-playfair text-xl font-bold text-burgundy-900 mb-2">
                Remote Consultations
              </h3>
              <p className="text-burgundy-700 font-serif">
                Telemedicine appointments included in membership
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-burgundy-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 border-4 border-double border-burgundy-300">
                <FaFlask className="text-3xl text-burgundy-700" />
              </div>
              <h3 className="font-playfair text-xl font-bold text-burgundy-900 mb-2">
                Laboratory Discounts
              </h3>
              <p className="text-burgundy-700 font-serif">
                Substantial savings on all laboratory work and procedures
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-burgundy-900 to-burgundy-800 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="h-px bg-gold-400 w-32"></div>
              <FaScroll className="text-gold-400 text-3xl mx-4" />
              <div className="h-px bg-gold-400 w-32"></div>
            </div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-cream mb-4">
              Testimonials from Our Esteemed Patrons
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-cream/10 backdrop-blur-sm border-4 border-double border-gold-400/30 rounded-sm p-12 relative">
              {/* Decorative quotes */}
              <div className="absolute top-4 left-4 text-6xl text-gold-400/30 font-playfair">"</div>
              <div className="absolute bottom-4 right-4 text-6xl text-gold-400/30 font-playfair rotate-180">"</div>
              
              <div className="text-center">
                <p className="text-xl text-cream font-serif italic mb-6 leading-relaxed">
                  {testimonials[currentTestimonial].text}
                </p>
                <div className="flex items-center justify-center mb-2">
                  <div className="h-px bg-gold-400 w-16"></div>
                  <div className="mx-4 w-2 h-2 bg-gold-400 rounded-full"></div>
                  <div className="h-px bg-gold-400 w-16"></div>
                </div>
                <h4 className="font-playfair text-lg font-bold text-gold-300">
                  {testimonials[currentTestimonial].author}
                </h4>
                <p className="text-cream/70 font-serif italic">
                  {testimonials[currentTestimonial].title}
                </p>
              </div>
            </div>
            
            {/* Testimonial indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentTestimonial ? 'bg-gold-400 w-8' : 'bg-gold-400/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <div className="h-px bg-burgundy-600 w-32"></div>
              <FaEnvelopeOpen className="text-burgundy-600 text-3xl mx-4" />
              <div className="h-px bg-burgundy-600 w-32"></div>
            </div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-burgundy-900 mb-4">
              Request an Appointment
            </h2>
            <p className="text-lg text-burgundy-700 font-serif italic">
              We await your correspondence with great anticipation
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h3 className="font-playfair text-2xl font-bold text-burgundy-900 mb-6">
                  Our Establishment
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <FaMapMarkedAlt className="text-burgundy-600 text-xl mt-1" />
                    <div>
                      <h4 className="font-playfair font-bold text-burgundy-900">Location</h4>
                      <p className="text-burgundy-700 font-serif">
                        2001 S Barrington Ave, Suite 203<br />
                        Los Angeles, California 90025
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <FaPhoneAlt className="text-burgundy-600 text-xl mt-1" />
                    <div>
                      <h4 className="font-playfair font-bold text-burgundy-900">Telephone</h4>
                      <p className="text-burgundy-700 font-serif">
                        (310) 943-4616
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <FaEnvelopeOpen className="text-burgundy-600 text-xl mt-1" />
                    <div>
                      <h4 className="font-playfair font-bold text-burgundy-900">Electronic Mail</h4>
                      <p className="text-burgundy-700 font-serif">
                        info@lotusdirectcare.com
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Link 
                    href="https://app.elationemr.com/book/lotusdirectcare/service-locations/933212881617143?appointment_types=" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-block bg-burgundy-700 hover:bg-burgundy-800 text-cream font-bold py-3 px-8 rounded-sm border-2 border-burgundy-800 shadow-xl transition-all font-playfair"
                  >
                    Schedule a Consultation
                  </Link>
                </div>
              </div>
              
              {/* Victorian-style contact form placeholder */}
              <div className="bg-cream border-4 border-double border-burgundy-300 rounded-sm p-8">
                <h3 className="font-playfair text-2xl font-bold text-burgundy-900 mb-6">
                  Send a Message
                </h3>
                <p className="text-burgundy-700 font-serif mb-6">
                  For direct consultations, we kindly request you schedule an appointment 
                  through our booking system.
                </p>
                <Link 
                  href="/contact" 
                  className="inline-block bg-gold-600 hover:bg-gold-700 text-burgundy-900 font-bold py-3 px-8 rounded-sm border-2 border-gold-700 shadow-xl transition-all font-playfair"
                >
                  Visit Contact Page
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with Victorian elegance */}
      <footer className="bg-gradient-to-b from-burgundy-900 to-burgundy-950 text-cream py-12">
        <div className="container mx-auto px-6">
          {/* Top decorative border */}
          <div className="h-4 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 -mt-12 mb-8"></div>
          
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Image 
                src="/images/LOGOTRANSPARENTFLOWERONLY1.png" 
                alt="Lotus Direct Care" 
                width={60} 
                height={60} 
                className="opacity-80"
              />
            </div>
            <h3 className="font-playfair text-2xl font-bold mb-2">Lotus Direct Care</h3>
            <p className="font-serif italic text-cream/70 mb-4">
              Excellence in Medical Practice Since Our Establishment
            </p>
            <p className="text-sm text-cream/60 font-serif">
              © {new Date().getFullYear()} Lotus Direct Care · All Rights Reserved
            </p>
            <p className="text-sm text-cream/60 font-serif mt-2">
              A HIPAA-Compliant Medical Practice
            </p>
          </div>
        </div>
      </footer>
      
      {/* Custom styles */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&display=swap');
        
        .font-playfair {
          font-family: 'Playfair Display', serif;
        }
        
        .bg-burgundy-50 { background-color: #fdf2f4; }
        .bg-burgundy-100 { background-color: #fce4e8; }
        .bg-burgundy-300 { background-color: #f4a0b4; }
        .bg-burgundy-600 { background-color: #8b1538; }
        .bg-burgundy-700 { background-color: #6d102c; }
        .bg-burgundy-800 { background-color: #4f0b20; }
        .bg-burgundy-900 { background-color: #310614; }
        .bg-burgundy-950 { background-color: #1a030a; }
        
        .text-burgundy-300 { color: #f4a0b4; }
        .text-burgundy-600 { color: #8b1538; }
        .text-burgundy-700 { color: #6d102c; }
        .text-burgundy-900 { color: #310614; }
        
        .border-burgundy-300 { border-color: #f4a0b4; }
        .border-burgundy-600 { border-color: #8b1538; }
        .border-burgundy-800 { border-color: #4f0b20; }
        
        .bg-cream { background-color: #faf7f0; }
        .text-cream { color: #faf7f0; }
        .border-cream { border-color: #faf7f0; }
        
        .bg-gold-300 { background-color: #fcd34d; }
        .bg-gold-400 { background-color: #fbbf24; }
        .bg-gold-600 { background-color: #d97706; }
        .bg-gold-700 { background-color: #b45309; }
        
        .text-gold-300 { color: #fcd34d; }
        .text-gold-400 { color: #fbbf24; }
        .text-gold-600 { color: #d97706; }
        .text-gold-700 { color: #b45309; }
        
        .border-gold-400 { border-color: #fbbf24; }
        .border-gold-700 { border-color: #b45309; }
        
        .from-burgundy-900 { --tw-gradient-from: #310614; }
        .to-burgundy-800 { --tw-gradient-to: #4f0b20; }
        .to-burgundy-950 { --tw-gradient-to: #1a030a; }
        .via-burgundy-800 { --tw-gradient-stops: var(--tw-gradient-from), #4f0b20, var(--tw-gradient-to); }
        
        .from-gold-600 { --tw-gradient-from: #d97706; }
        .via-gold-400 { --tw-gradient-stops: var(--tw-gradient-from), #fbbf24, var(--tw-gradient-to); }
        .to-gold-600 { --tw-gradient-to: #d97706; }
        
        .from-cream { --tw-gradient-from: #faf7f0; }
        .to-amber-50 { --tw-gradient-to: #fffbeb; }
        .via-cream { --tw-gradient-stops: var(--tw-gradient-from), #faf7f0, var(--tw-gradient-to); }
      `}</style>
    </div>
  );
}