'use client';

import { useEffect, useRef, useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { FiArrowRight, FiPlay, FiSun, FiCircle, FiArrowLeft } from 'react-icons/fi';
import JourneySection from "@/components/JourneySection";
import PricingSection from "@/components/PricingSection";
import FeaturesSection from "@/components/FeaturesSection";
import DoctorSection from "@/components/DoctorSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogPreviewSection from "@/components/BlogPreviewSection";
import styles from './minimalist.module.css';

export default function MinimalistVariant() {
  const heroRef = useRef<HTMLElement>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const theme = localStorage.getItem('minimalist-theme');
    if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }

    // Intersection Observer for scroll animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.active);
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll(`.${styles.reveal}`);
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      // Clean up dark mode when leaving the page
      document.documentElement.classList.remove('dark');
    };
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('minimalist-theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('minimalist-theme', 'dark');
    }
    setIsDarkMode(!isDarkMode);
  };

  const scrollToNextSection = () => {
    document.getElementById('journey')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={styles.minimalistWrapper}>
      {/* Fixed Header with Dark Mode Toggle and Back Button */}
      <header className={styles.minimalistHeader}>
        <div className={styles.headerContent}>
          <Link href="/variants" className={styles.backButton}>
            <FiArrowLeft size={20} />
            <span>Back to Variants</span>
          </Link>
          
          <div className={styles.headerCenter}>
            <Image 
              src="/images/LOGOTRANSPARENTFLOWERONLY1.png" 
              alt="Lotus" 
              width={36} 
              height={36} 
              className={isDarkMode ? styles.logoInvert : ''}
            />
            <span className={styles.logoText}>LOTUS MINIMALIST</span>
          </div>
          
          <button
            onClick={toggleDarkMode}
            className={styles.darkModeToggle}
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <FiSun size={20} /> : <FiCircle size={20} />}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className={`${styles.heroSection} ${isDarkMode ? styles.dark : ''}`}
      >
        <div className={styles.container}>
          <div className={styles.reveal}>
            <h1 className={styles.displayHeading}>
              Healthcare
              <br />
              <em className={styles.italic}>Without</em>
              <br />
              Barriers
            </h1>
          </div>
          
          <div className={`${styles.reveal} ${styles.heroSubtext}`}>
            <p>
              Direct access to personalized care. No insurance hassles. 
              No wait times. Just medicine the way it should be.
            </p>
          </div>

          <div className={`${styles.reveal} ${styles.statsGrid}`}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>30-60</div>
              <div className={styles.statLabel}>MINUTE APPOINTMENTS</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>24/7</div>
              <div className={styles.statLabel}>DIRECT ACCESS</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>90%</div>
              <div className={styles.statLabel}>SAVINGS ON LABS</div>
            </div>
          </div>
          
          <div className={`${styles.reveal} ${styles.heroButtons}`}>
            <a 
              href="https://app.elationemr.com/book/lotusdirectcare/service-locations/933212881617143?appointment_types=" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.minimalButton}
            >
              <span>SCHEDULE FREE CONSULTATION</span>
              <FiArrowRight className={styles.buttonIcon} />
            </a>
            
            <Link href="/direct-primary-care" className={styles.minimalButtonOutline}>
              <FiPlay size={16} />
              <span>LEARN MORE</span>
            </Link>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <button 
          onClick={scrollToNextSection}
          className={styles.scrollIndicator}
          aria-label="Scroll to next section"
        />

        {/* Background Pattern */}
        <div className={styles.backgroundPattern}>
          <div className={`${styles.floatingCircle} ${styles.circle1}`}></div>
          <div className={`${styles.floatingCircle} ${styles.circle2}`}></div>
          <div className={`${styles.floatingCircle} ${styles.circle3}`}></div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className={`${styles.servicesSection} ${isDarkMode ? styles.dark : ''}`}>
        <div className={styles.container}>
          <div className={`${styles.reveal} ${styles.sectionHeader}`}>
            <h2 className={styles.sectionTitle}>Our Services</h2>
            <p className={styles.sectionSubtitle}>
              Comprehensive healthcare solutions designed around your needs
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {[
              {
                title: 'Direct Primary Care',
                description: 'Unlimited access to your physician without insurance barriers',
                href: '/direct-primary-care'
              },
              {
                title: 'Functional Medicine',
                description: 'Root cause approach to optimal health and wellness',
                href: '/functional-medicine'
              },
              {
                title: 'Ketamine Therapy',
                description: 'Innovative treatment for depression and chronic pain',
                href: '/ketamine-therapy'
              },
              {
                title: 'PRP Injections',
                description: 'Regenerative medicine for natural healing',
                href: '/prp-injections'
              },
              {
                title: 'Addiction Treatment',
                description: 'Comprehensive support for recovery journey',
                href: '/addiction-treatment'
              },
              {
                title: 'Pricing',
                description: 'Transparent, affordable healthcare solutions',
                href: '/pricing'
              }
            ].map((service, index) => (
              <Link 
                key={index}
                href={service.href}
                className={styles.serviceCard}
              >
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className={styles.serviceArrow}>
                  <FiArrowRight size={20} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Apply minimalist styling wrapper to existing components */}
      <div className={`${styles.minimalistComponents} ${isDarkMode ? styles.dark : ''}`}>
        <div id="journey">
          <JourneySection />
        </div>

        <PricingSection />

        <FeaturesSection />

        <DoctorSection />

        <TestimonialsSection />

        <BlogPreviewSection />
      </div>
    </div>
  );
}