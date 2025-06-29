'use client';

import { useEffect, useRef, useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { FiArrowRight, FiArrowLeft, FiSunrise, FiWind, FiDroplet, FiFeather } from 'react-icons/fi';
import JourneySection from "@/components/JourneySection";
import PricingSection from "@/components/PricingSection";
import FeaturesSection from "@/components/FeaturesSection";
import DoctorSection from "@/components/DoctorSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogPreviewSection from "@/components/BlogPreviewSection";
import styles from './zen.module.css';

export default function ZenVariant() {
  const [breathPhase, setBreathPhase] = useState<'inhale' | 'hold' | 'exhale'>('inhale');
  const [activeChakra, setActiveChakra] = useState(0);
  const rippleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Breathing animation cycle
    const breathingCycle = () => {
      setTimeout(() => setBreathPhase('inhale'), 0);
      setTimeout(() => setBreathPhase('hold'), 4000);
      setTimeout(() => setBreathPhase('exhale'), 7000);
    };

    breathingCycle();
    const breathInterval = setInterval(breathingCycle, 11000);

    // Chakra rotation
    const chakraInterval = setInterval(() => {
      setActiveChakra(prev => (prev + 1) % 7);
    }, 3000);

    // Water ripple effect on click
    const handleClick = (e: MouseEvent) => {
      if (rippleRef.current) {
        const ripple = document.createElement('div');
        ripple.className = styles.ripple;
        ripple.style.left = `${e.clientX}px`;
        ripple.style.top = `${e.clientY}px`;
        rippleRef.current.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 2000);
      }
    };

    window.addEventListener('click', handleClick);

    return () => {
      clearInterval(breathInterval);
      clearInterval(chakraInterval);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  const chakraColors = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#9400D3'];

  return (
    <div className={styles.zenWrapper}>
      <div ref={rippleRef} className={styles.rippleContainer}></div>
      
      {/* Zen pattern background */}
      <div className={styles.zenPattern}>
        <div className={styles.ensoCircle}></div>
        <div className={styles.zenLines}>
          {[...Array(5)].map((_, i) => (
            <div key={i} className={styles.zenLine} style={{ top: `${20 + i * 20}%` }}></div>
          ))}
        </div>
      </div>
      
      {/* Header */}
      <header className={styles.zenHeader}>
        <div className={styles.headerContent}>
          <Link href="/variants" className={styles.backButton}>
            <FiArrowLeft size={20} />
            <span>Return to Path</span>
          </Link>
          
          <div className={styles.headerCenter}>
            <div className={styles.lotusContainer}>
              <Image 
                src="/images/LOGOTRANSPARENTFLOWERONLY1.png" 
                alt="Lotus" 
                width={40} 
                height={40} 
                className={styles.logoImage}
              />
              <div className={styles.lotusGlow}></div>
            </div>
            <span className={styles.logoText}>LOTUS ZEN WELLNESS</span>
          </div>
          
          <div className={styles.headerRight}>
            <div className={styles.breathIndicator} data-phase={breathPhase}>
              <FiWind size={20} />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.zenBadge}>
              <FiSunrise />
              <span>Inner Peace • Outer Health</span>
            </div>
            
            <h1 className={styles.mainTitle}>
              <span className={styles.titleLine}>Find Your</span>
              <span className={styles.titleLine}>Center of</span>
              <span className={styles.titleLine}>Wellness</span>
            </h1>
            
            <p className={styles.heroSubtext}>
              Where ancient wisdom meets modern medicine. Experience healthcare 
              that nurtures your body, calms your mind, and elevates your spirit.
            </p>

            {/* Chakra display */}
            <div className={styles.chakraDisplay}>
              {chakraColors.map((color, index) => (
                <div
                  key={index}
                  className={`${styles.chakra} ${activeChakra === index ? styles.activeChakra : ''}`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>

            <div className={styles.zenStats}>
              <div className={styles.statItem}>
                <FiFeather className={styles.statIcon} />
                <span className={styles.statValue}>Mindful</span>
                <span className={styles.statLabel}>Approach</span>
              </div>
              <div className={styles.statItem}>
                <FiDroplet className={styles.statIcon} />
                <span className={styles.statValue}>Balanced</span>
                <span className={styles.statLabel}>Treatment</span>
              </div>
              <div className={styles.statItem}>
                <FiSunrise className={styles.statIcon} />
                <span className={styles.statValue}>Holistic</span>
                <span className={styles.statLabel}>Healing</span>
              </div>
            </div>
            
            <div className={styles.heroButtons}>
              <a 
                href="https://app.elationemr.com/book/lotusdirectcare/service-locations/933212881617143?appointment_types=" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.zenButton}
              >
                <span>Begin Your Journey</span>
                <FiArrowRight className={styles.buttonIcon} />
              </a>
              
              <Link href="/direct-primary-care" className={styles.zenButtonOutline}>
                <span>Explore Practices</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Floating meditation symbols */}
        <div className={styles.floatingSymbols}>
          <div className={styles.symbol1}>☯</div>
          <div className={styles.symbol2}>॥</div>
          <div className={styles.symbol3}>◈</div>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>
            Paths to Enlightened Health
          </h2>
          <div className={styles.mandala}></div>

          <div className={styles.servicesGrid}>
            {[
              {
                title: 'Primary Care Sanctuary',
                desc: 'Your temple of continuous wellness',
                symbol: '☮',
                href: '/direct-primary-care'
              },
              {
                title: 'Functional Medicine Journey',
                desc: 'Discover the root of imbalance',
                symbol: '☯',
                href: '/functional-medicine'
              },
              {
                title: 'Ketamine Meditation',
                desc: 'Transcend mental boundaries',
                symbol: '◈',
                href: '/ketamine-therapy'
              },
              {
                title: 'PRP Renewal',
                desc: 'Natural restoration and rebirth',
                symbol: '❋',
                href: '/prp-injections'
              },
              {
                title: 'Recovery Path',
                desc: 'Find freedom from suffering',
                symbol: '☸',
                href: '/addiction-treatment'
              },
              {
                title: 'Investment in Self',
                desc: 'Value your wellness journey',
                symbol: '◉',
                href: '/pricing'
              }
            ].map((service, index) => (
              <Link 
                key={index}
                href={service.href}
                className={styles.serviceCard}
              >
                <div className={styles.serviceSymbol}>{service.symbol}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <div className={styles.cardBottom}>
                  <div className={styles.zenDot}></div>
                  <div className={styles.zenDot}></div>
                  <div className={styles.zenDot}></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Meditation Section */}
      <section className={styles.meditationSection}>
        <div className={styles.container}>
          <div className={styles.meditationContent}>
            <h2>The Four Pillars of Wellness</h2>
            <div className={styles.pillars}>
              <div className={styles.pillar}>
                <div className={styles.pillarIcon}>身</div>
                <h3>Body</h3>
                <p>Physical harmony through personalized care</p>
              </div>
              <div className={styles.pillar}>
                <div className={styles.pillarIcon}>心</div>
                <h3>Mind</h3>
                <p>Mental clarity and emotional balance</p>
              </div>
              <div className={styles.pillar}>
                <div className={styles.pillarIcon}>魂</div>
                <h3>Spirit</h3>
                <p>Connection to your inner healing power</p>
              </div>
              <div className={styles.pillar}>
                <div className={styles.pillarIcon}>和</div>
                <h3>Harmony</h3>
                <p>Integration of all aspects of health</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apply zen styling to components */}
      <div className={styles.zenComponents}>
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