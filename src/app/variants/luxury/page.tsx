'use client';

import { useEffect, useRef, useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { FiArrowRight, FiArrowLeft, FiAward, FiStar, FiShield } from 'react-icons/fi';
import JourneySection from "@/components/JourneySection";
import PricingSection from "@/components/PricingSection";
import FeaturesSection from "@/components/FeaturesSection";
import DoctorSection from "@/components/DoctorSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogPreviewSection from "@/components/BlogPreviewSection";
import styles from './luxury.module.css';

export default function LuxuryVariant() {
  const [scrolled, setScrolled] = useState(false);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
      
      // Parallax effect
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${offset * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Add shimmer effect to gold elements
    const shimmerElements = document.querySelectorAll(`.${styles.goldShimmer}`);
    shimmerElements.forEach((el, index) => {
      (el as HTMLElement).style.animationDelay = `${index * 0.1}s`;
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.luxuryWrapper}>
      {/* Premium texture overlay */}
      <div className={styles.textureOverlay}></div>
      
      {/* Header */}
      <header className={`${styles.luxuryHeader} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.headerContent}>
          <Link href="/variants" className={styles.backButton}>
            <FiArrowLeft size={20} />
            <span>Back to Variants</span>
          </Link>
          
          <div className={styles.headerCenter}>
            <div className={styles.luxuryLogo}>
              <div className={styles.logoFrame}>
                <Image 
                  src="/images/LOGOTRANSPARENTFLOWERONLY1.png" 
                  alt="Lotus" 
                  width={36} 
                  height={36} 
                  className={styles.logoImage}
                />
              </div>
            </div>
            <span className={styles.logoText}>LOTUS PREMIER</span>
          </div>
          
          <div className={styles.headerRight}>
            <span className={styles.exclusiveBadge}>
              <FiAward size={16} />
              EXCLUSIVE
            </span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div ref={parallaxRef} className={styles.heroBackground}>
          <div className={styles.goldPattern}></div>
        </div>

        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.premiumBadge}>
              <FiStar className={styles.starIcon} />
              <span>PREMIUM HEALTHCARE</span>
              <FiStar className={styles.starIcon} />
            </div>
            
            <h1 className={styles.mainTitle}>
              <span className={styles.titleLine}>Exceptional Care</span>
              <span className={`${styles.titleLine} ${styles.goldText}`}>Exclusively Yours</span>
            </h1>
            
            <p className={styles.heroSubtext}>
              Experience the pinnacle of personalized medicine with unparalleled 
              access to your dedicated physician and world-class treatments.
            </p>

            <div className={styles.luxuryFeatures}>
              <div className={styles.featureItem}>
                <FiShield className={styles.featureIcon} />
                <span>White Glove Service</span>
              </div>
              <div className={styles.featureItem}>
                <FiAward className={styles.featureIcon} />
                <span>Concierge Medicine</span>
              </div>
              <div className={styles.featureItem}>
                <FiStar className={styles.featureIcon} />
                <span>VIP Access</span>
              </div>
            </div>
            
            <div className={styles.heroButtons}>
              <a 
                href="https://app.elationemr.com/book/lotusdirectcare/service-locations/933212881617143?appointment_types=" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`${styles.luxuryButton} ${styles.goldShimmer}`}
              >
                <span>Schedule Private Consultation</span>
                <FiArrowRight className={styles.buttonIcon} />
              </a>
              
              <Link href="/direct-primary-care" className={styles.luxuryButtonOutline}>
                <span>Explore Membership</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className={styles.decorativeLines}>
          <div className={styles.line1}></div>
          <div className={styles.line2}></div>
          <div className={styles.line3}></div>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Premier Services
            </h2>
            <div className={styles.titleUnderline}></div>
            <p className={styles.sectionSubtitle}>
              Curated healthcare solutions for the discerning individual
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {[
              {
                title: 'Executive Primary Care',
                desc: 'Unlimited access to your personal physician',
                features: ['Same-day appointments', 'Direct phone access', 'Extended visits'],
                href: '/direct-primary-care'
              },
              {
                title: 'Elite Functional Medicine',
                desc: 'Comprehensive wellness optimization',
                features: ['Advanced diagnostics', 'Personalized protocols', 'Longevity focus'],
                href: '/functional-medicine'
              },
              {
                title: 'Exclusive Ketamine Therapy',
                desc: 'Private treatment suites for mental wellness',
                features: ['Luxury environment', 'Dedicated staff', 'Customized protocols'],
                href: '/ketamine-therapy'
              },
              {
                title: 'Premium PRP Treatments',
                desc: 'State-of-the-art regenerative medicine',
                features: ['Latest technology', 'Expert specialists', 'Proven results'],
                href: '/prp-injections'
              },
              {
                title: 'Discreet Recovery Programs',
                desc: 'Confidential addiction treatment',
                features: ['Private sessions', 'Personalized care', 'Ongoing support'],
                href: '/addiction-treatment'
              },
              {
                title: 'Membership Benefits',
                desc: 'Exceptional value for premium care',
                features: ['Transparent pricing', 'Exclusive perks', 'Priority access'],
                href: '/pricing'
              }
            ].map((service, index) => (
              <Link 
                key={index}
                href={service.href}
                className={styles.serviceCard}
              >
                <div className={styles.cardHeader}>
                  <h3>{service.title}</h3>
                  <FiArrowRight className={styles.cardArrow} />
                </div>
                <p className={styles.cardDescription}>{service.desc}</p>
                <ul className={styles.cardFeatures}>
                  {service.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <div className={styles.cardShine}></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Exclusive Benefits */}
      <section className={styles.benefitsSection}>
        <div className={styles.container}>
          <div className={styles.benefitsContent}>
            <h2>The Lotus Premier Difference</h2>
            <div className={styles.benefitsGrid}>
              <div className={styles.benefitItem}>
                <div className={styles.benefitNumber}>24/7</div>
                <div className={styles.benefitText}>Direct Physician Access</div>
              </div>
              <div className={styles.benefitItem}>
                <div className={styles.benefitNumber}>60+</div>
                <div className={styles.benefitText}>Minute Appointments</div>
              </div>
              <div className={styles.benefitItem}>
                <div className={styles.benefitNumber}>VIP</div>
                <div className={styles.benefitText}>Concierge Service</div>
              </div>
              <div className={styles.benefitItem}>
                <div className={styles.benefitNumber}>100%</div>
                <div className={styles.benefitText}>Personalized Care</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apply luxury styling to components */}
      <div className={styles.luxuryComponents}>
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