'use client';

import { useEffect, useRef, useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { FiArrowRight, FiArrowLeft, FiActivity, FiTarget, FiZap, FiTrendingUp } from 'react-icons/fi';
import JourneySection from "@/components/JourneySection";
import PricingSection from "@/components/PricingSection";
import FeaturesSection from "@/components/FeaturesSection";
import DoctorSection from "@/components/DoctorSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogPreviewSection from "@/components/BlogPreviewSection";
import styles from './sports.module.css';

export default function SportsVariant() {
  const [score, setScore] = useState(0);
  const [heartRate, setHeartRate] = useState(72);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animated score counter
    const scoreInterval = setInterval(() => {
      setScore(prev => {
        if (prev >= 100) return 0;
        return prev + 1;
      });
    }, 50);

    // Simulated heart rate
    const heartInterval = setInterval(() => {
      setHeartRate(70 + Math.floor(Math.random() * 10));
    }, 2000);

    // Performance metrics animation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.animate);
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll(`.${styles.statBar}`);
    elements.forEach(el => observer.observe(el));

    return () => {
      clearInterval(scoreInterval);
      clearInterval(heartInterval);
      observer.disconnect();
    };
  }, []);

  return (
    <div className={styles.sportsWrapper}>
      {/* Dynamic background lines */}
      <div className={styles.dynamicLines}>
        <div className={styles.speedLine}></div>
        <div className={styles.speedLine}></div>
        <div className={styles.speedLine}></div>
      </div>
      
      {/* Header */}
      <header className={styles.sportsHeader}>
        <div className={styles.headerContent}>
          <Link href="/variants" className={styles.backButton}>
            <FiArrowLeft size={20} />
            <span>BACK</span>
          </Link>
          
          <div className={styles.headerCenter}>
            <div className={styles.sportsLogo}>
              <Image 
                src="/images/LOGOTRANSPARENTFLOWERONLY1.png" 
                alt="Lotus" 
                width={40} 
                height={40} 
                className={styles.logoImage}
              />
              <div className={styles.logoPulse}></div>
            </div>
            <span className={styles.logoText}>LOTUS PERFORMANCE</span>
          </div>
          
          <div className={styles.headerRight}>
            <div className={styles.liveStats}>
              <FiActivity className={styles.heartIcon} />
              <span>{heartRate} BPM</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.scoreboard}>
              <span className={styles.scoreLabel}>PERFORMANCE</span>
              <span className={styles.scoreValue}>{score.toString().padStart(3, '0')}%</span>
            </div>
            
            <h1 className={styles.mainTitle}>
              <span className={styles.titleLine}>ELEVATE</span>
              <span className={styles.titleLine}>YOUR</span>
              <span className={styles.titleLine}>GAME</span>
            </h1>
            
            <p className={styles.heroSubtext}>
              Championship-level healthcare for peak performance. 
              Train harder. Recover faster. Achieve more.
            </p>

            <div className={styles.performanceMetrics}>
              <div className={styles.metric}>
                <FiZap className={styles.metricIcon} />
                <span className={styles.metricValue}>MAX</span>
                <span className={styles.metricLabel}>ENERGY</span>
              </div>
              <div className={styles.metric}>
                <FiTarget className={styles.metricIcon} />
                <span className={styles.metricValue}>100%</span>
                <span className={styles.metricLabel}>FOCUS</span>
              </div>
              <div className={styles.metric}>
                <FiTrendingUp className={styles.metricIcon} />
                <span className={styles.metricValue}>PRO</span>
                <span className={styles.metricLabel}>LEVEL</span>
              </div>
            </div>
            
            <div className={styles.heroButtons}>
              <a 
                href="https://app.elationemr.com/book/lotusdirectcare/service-locations/933212881617143?appointment_types=" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.sportsButton}
              >
                <span>START TRAINING</span>
                <FiArrowRight className={styles.buttonIcon} />
              </a>
              
              <Link href="/direct-primary-care" className={styles.sportsButtonOutline}>
                <span>VIEW PLAYBOOK</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Animated elements */}
        <div className={styles.energyBurst}>
          <div className={styles.burst1}></div>
          <div className={styles.burst2}></div>
          <div className={styles.burst3}></div>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>
            TRAINING PROGRAMS
          </h2>

          <div className={styles.servicesGrid}>
            {[
              {
                title: 'CORE TRAINING',
                subtitle: 'Primary Care',
                desc: 'Foundation fitness for life',
                stat: '24/7',
                href: '/direct-primary-care'
              },
              {
                title: 'PERFORMANCE LAB',
                subtitle: 'Functional Medicine',
                desc: 'Optimize your body systems',
                stat: 'MAX',
                href: '/functional-medicine'
              },
              {
                title: 'MENTAL EDGE',
                subtitle: 'Ketamine Therapy',
                desc: 'Champion mindset training',
                stat: 'ELITE',
                href: '/ketamine-therapy'
              },
              {
                title: 'RECOVERY ZONE',
                subtitle: 'PRP Injections',
                desc: 'Advanced healing protocols',
                stat: 'FAST',
                href: '/prp-injections'
              },
              {
                title: 'COMEBACK PROGRAM',
                subtitle: 'Addiction Treatment',
                desc: 'Return stronger than ever',
                stat: 'WIN',
                href: '/addiction-treatment'
              },
              {
                title: 'MEMBERSHIP',
                subtitle: 'Pricing Plans',
                desc: 'Join the winning team',
                stat: 'MVP',
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
                  <span className={styles.cardStat}>{service.stat}</span>
                </div>
                <h4>{service.subtitle}</h4>
                <p>{service.desc}</p>
                <div className={styles.cardFooter}>
                  <div className={styles.powerBar}>
                    <div className={styles.powerFill}></div>
                  </div>
                  <FiArrowRight className={styles.cardArrow} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Dashboard */}
      <section ref={statsRef} className={styles.statsSection}>
        <div className={styles.container}>
          <h2>PERFORMANCE DASHBOARD</h2>
          <div className={styles.statsGrid}>
            <div className={styles.statBlock}>
              <h3>STRENGTH</h3>
              <div className={styles.statBar} data-value="95">
                <div className={styles.statFill} style={{ '--target-width': '95%' } as React.CSSProperties}></div>
              </div>
              <span>95%</span>
            </div>
            <div className={styles.statBlock}>
              <h3>ENDURANCE</h3>
              <div className={styles.statBar} data-value="88">
                <div className={styles.statFill} style={{ '--target-width': '88%' } as React.CSSProperties}></div>
              </div>
              <span>88%</span>
            </div>
            <div className={styles.statBlock}>
              <h3>RECOVERY</h3>
              <div className={styles.statBar} data-value="92">
                <div className={styles.statFill} style={{ '--target-width': '92%' } as React.CSSProperties}></div>
              </div>
              <span>92%</span>
            </div>
            <div className={styles.statBlock}>
              <h3>WELLNESS</h3>
              <div className={styles.statBar} data-value="100">
                <div className={styles.statFill} style={{ '--target-width': '100%' } as React.CSSProperties}></div>
              </div>
              <span>100%</span>
            </div>
          </div>
        </div>
      </section>

      {/* Apply sports styling to components */}
      <div className={styles.sportsComponents}>
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