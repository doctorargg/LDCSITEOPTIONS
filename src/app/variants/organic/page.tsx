'use client';

import { useEffect, useRef, useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { FiArrowRight, FiArrowLeft, FiFeather, FiSun, FiDroplet } from 'react-icons/fi';
import JourneySection from "@/components/JourneySection";
import PricingSection from "@/components/PricingSection";
import FeaturesSection from "@/components/FeaturesSection";
import DoctorSection from "@/components/DoctorSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogPreviewSection from "@/components/BlogPreviewSection";
import styles from './organic.module.css';

export default function OrganicVariant() {
  const [activeLeaf, setActiveLeaf] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Parallax effect for leaves
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const leaves = document.querySelectorAll(`.${styles.floatingLeaf}`);
      
      leaves.forEach((leaf, index) => {
        const speed = 0.5 + (index * 0.1);
        const yPos = -(scrolled * speed);
        (leaf as HTMLElement).style.transform = `translateY(${yPos}px) rotate(${scrolled * 0.1}deg)`;
      });
    };

    window.addEventListener('scroll', handleScroll);

    // Leaf animation cycle
    const leafInterval = setInterval(() => {
      setActiveLeaf(prev => (prev + 1) % 5);
    }, 3000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(leafInterval);
    };
  }, []);

  return (
    <div className={styles.organicWrapper}>
      {/* Nature pattern background */}
      <div className={styles.naturePattern}>
        <svg className={styles.patternSvg} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="leafPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M50 10 Q30 30 50 50 Q70 30 50 10" fill="#94a34420" />
              <circle cx="50" cy="50" r="3" fill="#7c6a5a20" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#leafPattern)" />
        </svg>
      </div>

      {/* Floating leaves */}
      <div className={styles.leavesContainer}>
        {[...Array(5)].map((_, i) => (
          <div 
            key={i} 
            className={`${styles.floatingLeaf} ${styles[`leaf${i + 1}`]} ${activeLeaf === i ? styles.activeLeaf : ''}`}
          >
            <FiFeather size={30} />
          </div>
        ))}
      </div>

      {/* Header */}
      <header className={styles.organicHeader}>
        <div className={styles.headerContent}>
          <Link href="/variants" className={styles.backButton}>
            <FiArrowLeft size={20} />
            <span>Back to Variants</span>
          </Link>
          
          <div className={styles.headerCenter}>
            <div className={styles.logoWrapper}>
              <Image 
                src="/images/LOGOTRANSPARENTFLOWERONLY1.png" 
                alt="Lotus" 
                width={40} 
                height={40} 
                className={styles.logoImage}
              />
              <div className={styles.logoGlow}></div>
            </div>
            <span className={styles.logoText}>LOTUS NATURAL CARE</span>
          </div>
          
          <div className={styles.headerRight}>
            <FiSun className={styles.sunIcon} size={24} />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section ref={heroRef} className={styles.heroSection}>
        <div className={styles.heroBackground}>
          <div className={styles.organicShape1}></div>
          <div className={styles.organicShape2}></div>
          <div className={styles.organicShape3}></div>
        </div>

        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1 className={styles.mainTitle}>
              <span className={styles.titleWord}>Healing</span>
              <span className={styles.titleWord}>Rooted in</span>
              <span className={styles.titleWord}>Nature</span>
            </h1>
            
            <p className={styles.heroSubtext}>
              Experience healthcare that nurtures your whole being through the wisdom of nature 
              and the innovation of modern medicine
            </p>

            <div className={styles.naturalStats}>
              <div className={styles.statItem}>
                <div className={styles.statIcon}>
                  <FiDroplet />
                </div>
                <span className={styles.statValue}>Holistic</span>
                <span className={styles.statLabel}>Approach</span>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statIcon}>
                  <FiFeather />
                </div>
                <span className={styles.statValue}>Natural</span>
                <span className={styles.statLabel}>Healing</span>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statIcon}>
                  <FiSun />
                </div>
                <span className={styles.statValue}>Personalized</span>
                <span className={styles.statLabel}>Care</span>
              </div>
            </div>
            
            <div className={styles.heroButtons}>
              <a 
                href="https://app.elationemr.com/book/lotusdirectcare/service-locations/933212881617143?appointment_types=" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.organicButton}
              >
                <span>Begin Your Journey</span>
                <FiArrowRight className={styles.buttonIcon} />
              </a>
              
              <Link href="/direct-primary-care" className={styles.organicButtonOutline}>
                <span>Explore Our Approach</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative vines */}
        <svg className={styles.decorativeVines} viewBox="0 0 200 400">
          <path 
            d="M100,0 Q50,50 100,100 T100,200 Q150,250 100,300 T100,400" 
            fill="none" 
            stroke="#94a344" 
            strokeWidth="2" 
            opacity="0.3"
          />
          <circle cx="80" cy="80" r="8" fill="#8b7a6b" opacity="0.5" />
          <circle cx="120" cy="180" r="10" fill="#94a344" opacity="0.5" />
          <circle cx="90" cy="280" r="7" fill="#8b7a6b" opacity="0.5" />
        </svg>
      </section>

      {/* Services Section */}
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>
            Our Garden of Services
          </h2>
          <p className={styles.sectionSubtitle}>
            Each treatment path nurtures your unique wellness journey
          </p>

          <div className={styles.servicesGrid}>
            {[
              {
                title: 'Direct Primary Care',
                desc: 'Cultivating lasting doctor-patient relationships',
                icon: '🌱',
                href: '/direct-primary-care'
              },
              {
                title: 'Functional Medicine',
                desc: 'Discovering the roots of your health concerns',
                icon: '🌿',
                href: '/functional-medicine'
              },
              {
                title: 'Ketamine Therapy',
                desc: 'Gentle pathways to mental wellness',
                icon: '🍃',
                href: '/ketamine-therapy'
              },
              {
                title: 'PRP Injections',
                desc: 'Natural regeneration and healing',
                icon: '🌾',
                href: '/prp-injections'
              },
              {
                title: 'Addiction Treatment',
                desc: 'Compassionate support for recovery',
                icon: '🌳',
                href: '/addiction-treatment'
              },
              {
                title: 'Pricing',
                desc: 'Transparent, accessible healthcare',
                icon: '🌸',
                href: '/pricing'
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
                <div className={styles.cardLeaf}>
                  <FiFeather />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Wellness Journey */}
      <section className={styles.wellnessSection}>
        <div className={styles.container}>
          <div className={styles.wellnessContent}>
            <h2>Your Wellness Journey Begins Here</h2>
            <p>
              Like a garden that flourishes with proper care, your health thrives when nurtured 
              with personalized attention and natural wisdom.
            </p>
            <div className={styles.growthStages}>
              <div className={styles.stage}>
                <div className={styles.stageIcon}>🌱</div>
                <span>Plant</span>
              </div>
              <div className={styles.stageLine}></div>
              <div className={styles.stage}>
                <div className={styles.stageIcon}>🌿</div>
                <span>Nurture</span>
              </div>
              <div className={styles.stageLine}></div>
              <div className={styles.stage}>
                <div className={styles.stageIcon}>🌸</div>
                <span>Bloom</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apply organic styling to components */}
      <div className={styles.organicComponents}>
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