'use client';

import { useEffect, useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { FiArrowRight, FiArrowLeft, FiBriefcase, FiTrendingUp, FiShield, FiAward, FiUsers } from 'react-icons/fi';
import JourneySection from "@/components/JourneySection";
import PricingSection from "@/components/PricingSection";
import FeaturesSection from "@/components/FeaturesSection";
import DoctorSection from "@/components/DoctorSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogPreviewSection from "@/components/BlogPreviewSection";
import styles from './corporate.module.css';

export default function CorporateVariant() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Update time every second
    const timeInterval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Auto-rotate slides
    const slideInterval = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % 3);
    }, 5000);

    return () => {
      clearInterval(timeInterval);
      clearInterval(slideInterval);
    };
  }, []);

  const formatTime = () => {
    return time.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    });
  };

  return (
    <div className={styles.corporateWrapper}>
      {/* Subtle grid background */}
      <div className={styles.gridBackground}></div>
      
      {/* Header */}
      <header className={styles.corporateHeader}>
        <div className={styles.headerContent}>
          <Link href="/variants" className={styles.backButton}>
            <FiArrowLeft size={20} />
            <span>Return to Overview</span>
          </Link>
          
          <div className={styles.headerCenter}>
            <div className={styles.corporateLogo}>
              <Image 
                src="/images/LOGOTRANSPARENTFLOWERONLY1.png" 
                alt="Lotus" 
                width={36} 
                height={36} 
                className={styles.logoImage}
              />
            </div>
            <div className={styles.logoTextGroup}>
              <span className={styles.logoText}>LOTUS EXECUTIVE HEALTH</span>
              <span className={styles.logoTagline}>Premium Healthcare Solutions</span>
            </div>
          </div>
          
          <div className={styles.headerRight}>
            <span className={styles.timeDisplay}>{formatTime()}</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <div className={styles.trustBadge}>
                <FiShield size={16} />
                <span>TRUSTED BY FORTUNE 500</span>
              </div>
              
              <h1 className={styles.mainTitle}>
                Executive Healthcare
                <span className={styles.titleHighlight}>Redefined</span>
              </h1>
              
              <p className={styles.heroSubtext}>
                Experience healthcare designed for high-performing professionals. 
                Comprehensive, confidential, and convenient medical services that 
                prioritize your time and wellbeing.
              </p>

              <div className={styles.valueProps}>
                <div className={styles.valueProp}>
                  <FiBriefcase />
                  <span>Executive Physicals</span>
                </div>
                <div className={styles.valueProp}>
                  <FiTrendingUp />
                  <span>Performance Optimization</span>
                </div>
                <div className={styles.valueProp}>
                  <FiUsers />
                  <span>Corporate Wellness</span>
                </div>
              </div>
              
              <div className={styles.heroButtons}>
                <a 
                  href="https://app.elationemr.com/book/lotusdirectcare/service-locations/933212881617143?appointment_types=" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.primaryButton}
                >
                  <span>Schedule Consultation</span>
                  <FiArrowRight className={styles.buttonIcon} />
                </a>
                
                <Link href="/direct-primary-care" className={styles.secondaryButton}>
                  <span>Download Brochure</span>
                </Link>
              </div>
            </div>

            <div className={styles.heroVisual}>
              <div className={styles.statsCard}>
                <h3>Client Success Metrics</h3>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>98%</span>
                  <span className={styles.statLabel}>Client Satisfaction</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>24/7</span>
                  <span className={styles.statLabel}>Physician Access</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>500+</span>
                  <span className={styles.statLabel}>Executive Clients</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Comprehensive Healthcare Services</h2>
            <p className={styles.sectionSubtitle}>
              Tailored solutions for discerning professionals and organizations
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {[
              {
                icon: <FiBriefcase />,
                title: 'Executive Primary Care',
                desc: 'Personalized healthcare with guaranteed same-day access',
                features: ['Annual executive physicals', '24/7 physician access', 'Comprehensive health planning'],
                href: '/direct-primary-care'
              },
              {
                icon: <FiTrendingUp />,
                title: 'Performance Medicine',
                desc: 'Optimize your physical and mental performance',
                features: ['Advanced diagnostics', 'Biomarker optimization', 'Cognitive enhancement'],
                href: '/functional-medicine'
              },
              {
                icon: <FiShield />,
                title: 'Mental Health Solutions',
                desc: 'Confidential support for high-stress professionals',
                features: ['Executive coaching', 'Stress management', 'Innovative therapies'],
                href: '/ketamine-therapy'
              },
              {
                icon: <FiAward />,
                title: 'Regenerative Medicine',
                desc: 'Cutting-edge treatments for optimal recovery',
                features: ['PRP therapy', 'Anti-aging protocols', 'Sports medicine'],
                href: '/prp-injections'
              },
              {
                icon: <FiUsers />,
                title: 'Corporate Wellness',
                desc: 'Comprehensive programs for your organization',
                features: ['Employee health plans', 'On-site services', 'Wellness workshops'],
                href: '/pricing'
              },
              {
                icon: <FiBriefcase />,
                title: 'Addiction Recovery',
                desc: 'Discreet, professional addiction treatment',
                features: ['Confidential care', 'Executive programs', 'Ongoing support'],
                href: '/addiction-treatment'
              }
            ].map((service, index) => (
              <Link 
                key={index}
                href={service.href}
                className={styles.serviceCard}
              >
                <div className={styles.serviceIcon}>{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <ul className={styles.featureList}>
                  {service.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <div className={styles.cardCTA}>
                  Learn More <FiArrowRight />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className={styles.testimonialsSection}>
        <div className={styles.container}>
          <h2>What Our Clients Say</h2>
          
          <div className={styles.carousel}>
            <div className={styles.carouselTrack} style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
              {[
                {
                  quote: "Lotus Executive Health has transformed how I approach my personal healthcare. The convenience and quality are unmatched.",
                  author: "Sarah Chen",
                  title: "CEO, Tech Innovations Inc."
                },
                {
                  quote: "The level of personalized attention and expertise is exactly what busy executives need. Highly recommended.",
                  author: "Michael Roberts",
                  title: "Managing Partner, Roberts & Associates"
                },
                {
                  quote: "Our company's wellness program through Lotus has significantly improved employee satisfaction and productivity.",
                  author: "Jennifer Martinez",
                  title: "HR Director, Global Finance Corp"
                }
              ].map((testimonial, index) => (
                <div key={index} className={styles.testimonialSlide}>
                  <blockquote>"{testimonial.quote}"</blockquote>
                  <div className={styles.testimonialAuthor}>
                    <strong>{testimonial.author}</strong>
                    <span>{testimonial.title}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className={styles.carouselDots}>
              {[0, 1, 2].map(index => (
                <button
                  key={index}
                  className={`${styles.dot} ${activeSlide === index ? styles.activeDot : ''}`}
                  onClick={() => setActiveSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2>Ready to Elevate Your Healthcare Experience?</h2>
            <p>Join leading executives who trust Lotus for their healthcare needs</p>
            <div className={styles.ctaButtons}>
              <a 
                href="https://app.elationemr.com/book/lotusdirectcare/service-locations/933212881617143?appointment_types=" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.ctaButton}
              >
                Get Started Today
              </a>
              <Link href="/pricing" className={styles.ctaButtonOutline}>
                View Membership Options
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Apply corporate styling to components */}
      <div className={styles.corporateComponents}>
        <JourneySection />
        <PricingSection />
        <FeaturesSection />
        <DoctorSection />
        <TestimonialsSection />
        <BlogPreviewSection />
      </div>
    </div>
  );
}