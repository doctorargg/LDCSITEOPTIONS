'use client';

import { useEffect, useRef, useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { FiArrowRight, FiArrowLeft, FiZap, FiActivity } from 'react-icons/fi';
import JourneySection from "@/components/JourneySection";
import PricingSection from "@/components/PricingSection";
import FeaturesSection from "@/components/FeaturesSection";
import DoctorSection from "@/components/DoctorSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogPreviewSection from "@/components/BlogPreviewSection";
import styles from './retrofuturistic.module.css';

export default function RetrofuturisticVariant() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    // Grid animation
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let animationId: number;
    let time = 0;

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw perspective grid
      ctx.strokeStyle = '#ff00ff30';
      ctx.lineWidth = 1;
      
      const horizon = canvas.height * 0.6;
      const vanishingPoint = { x: canvas.width / 2, y: horizon };
      
      // Horizontal lines
      for (let i = 0; i < 20; i++) {
        const y = horizon + (i * i * 2);
        if (y < canvas.height) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(canvas.width, y);
          ctx.stroke();
        }
      }
      
      // Vertical lines
      for (let i = -10; i <= 10; i++) {
        ctx.beginPath();
        ctx.moveTo(vanishingPoint.x + (i * 50), horizon);
        ctx.lineTo(vanishingPoint.x + (i * 200), canvas.height);
        ctx.stroke();
      }
      
      // Animated sun
      const sunY = horizon - 100 + Math.sin(time * 0.001) * 20;
      const gradient = ctx.createLinearGradient(
        vanishingPoint.x, sunY - 60,
        vanishingPoint.x, sunY + 60
      );
      gradient.addColorStop(0, '#ff006e');
      gradient.addColorStop(0.5, '#ff4500');
      gradient.addColorStop(1, '#ffb700');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(vanishingPoint.x, sunY, 60, 0, Math.PI * 2);
      ctx.fill();
      
      time += 16;
      animationId = requestAnimationFrame(drawGrid);
    };

    drawGrid();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Glitch effect interval
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 5000);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      clearInterval(glitchInterval);
    };
  }, []);

  return (
    <div className={styles.retroWrapper}>
      <canvas ref={canvasRef} className={styles.backgroundCanvas} />
      
      {/* Scanlines overlay */}
      <div className={styles.scanlines} />
      
      {/* Header */}
      <header className={styles.retroHeader}>
        <div className={styles.headerContent}>
          <Link href="/variants" className={styles.backButton}>
            <FiArrowLeft size={20} />
            <span>Back to Variants</span>
          </Link>
          
          <div className={styles.headerCenter}>
            <div className={styles.neonLogo}>
              <Image 
                src="/images/LOGOTRANSPARENTFLOWERONLY1.png" 
                alt="Lotus" 
                width={40} 
                height={40} 
                className={styles.logoImage}
              />
            </div>
            <span className={`${styles.logoText} ${glitchActive ? styles.glitch : ''}`}>
              LOTUS CYBER CARE
            </span>
          </div>
          
          <div className={styles.headerRight}>
            <span className={styles.yearDisplay}>2025</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1 className={`${styles.mainTitle} ${glitchActive ? styles.glitch : ''}`}>
              <span className={styles.titleLine}>FUTURE OF</span>
              <span className={styles.titleLine}>HEALTHCARE</span>
              <span className={styles.titleLine}>IS NOW</span>
            </h1>
            
            <div className={styles.heroSubtext}>
              <p className={styles.neonText}>
                Direct Primary Care • Functional Medicine • Next-Gen Treatments
              </p>
            </div>

            <div className={styles.statsBar}>
              <div className={styles.statItem}>
                <FiZap className={styles.statIcon} />
                <span className={styles.statValue}>24/7</span>
                <span className={styles.statLabel}>ACCESS</span>
              </div>
              <div className={styles.statItem}>
                <FiActivity className={styles.statIcon} />
                <span className={styles.statValue}>90%</span>
                <span className={styles.statLabel}>SAVINGS</span>
              </div>
              <div className={styles.statItem}>
                <FiZap className={styles.statIcon} />
                <span className={styles.statValue}>30-60</span>
                <span className={styles.statLabel}>MIN VISITS</span>
              </div>
            </div>
            
            <div className={styles.heroButtons}>
              <a 
                href="https://app.elationemr.com/book/lotusdirectcare/service-locations/933212881617143?appointment_types=" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.neonButton}
              >
                <span>INITIALIZE CONSULTATION</span>
                <FiArrowRight className={styles.buttonIcon} />
              </a>
              
              <Link href="/direct-primary-care" className={styles.neonButtonOutline}>
                <span>SYSTEM INFO</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Animated elements */}
        <div className={styles.floatingElements}>
          <div className={styles.floatingCube}></div>
          <div className={styles.floatingPyramid}></div>
          <div className={styles.floatingGrid}></div>
        </div>
      </section>

      {/* Services Grid */}
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <h2 className={`${styles.sectionTitle} ${glitchActive ? styles.glitch : ''}`}>
            SERVICE MODULES
          </h2>

          <div className={styles.servicesGrid}>
            {[
              { title: 'PRIMARY CARE', desc: 'Direct physician access protocol', href: '/direct-primary-care' },
              { title: 'FUNCTIONAL MED', desc: 'Root cause analysis system', href: '/functional-medicine' },
              { title: 'KETAMINE RX', desc: 'Neural optimization therapy', href: '/ketamine-therapy' },
              { title: 'PRP INJECT', desc: 'Regenerative healing tech', href: '/prp-injections' },
              { title: 'ADDICTION RX', desc: 'Recovery support system', href: '/addiction-treatment' },
              { title: 'PRICING DATA', desc: 'Transparent cost matrix', href: '/pricing' }
            ].map((service, index) => (
              <Link 
                key={index}
                href={service.href}
                className={styles.serviceCard}
              >
                <div className={styles.cardBorder}></div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <div className={styles.cardArrow}>
                  <FiArrowRight />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Apply retro styling to components */}
      <div className={styles.retroComponents}>
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