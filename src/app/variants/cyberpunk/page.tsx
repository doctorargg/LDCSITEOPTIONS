'use client';

import { useEffect, useRef, useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { FiArrowRight, FiArrowLeft, FiCpu, FiActivity, FiZap, FiDatabase } from 'react-icons/fi';
import JourneySection from "@/components/JourneySection";
import PricingSection from "@/components/PricingSection";
import FeaturesSection from "@/components/FeaturesSection";
import DoctorSection from "@/components/DoctorSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogPreviewSection from "@/components/BlogPreviewSection";
import styles from './cyberpunk.module.css';

export default function CyberpunkVariant() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hudData, setHudData] = useState({
    vitals: 98,
    sync: 100,
    uptime: '∞'
  });

  useEffect(() => {
    // Matrix rain effect
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0ff';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);

    // HUD data animation
    const hudInterval = setInterval(() => {
      setHudData({
        vitals: 95 + Math.floor(Math.random() * 5),
        sync: 97 + Math.floor(Math.random() * 3),
        uptime: '∞'
      });
    }, 2000);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      clearInterval(hudInterval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={styles.cyberpunkWrapper}>
      <canvas ref={canvasRef} className={styles.matrixCanvas} />
      
      {/* HUD Overlay */}
      <div className={styles.hudOverlay}>
        <div className={styles.hudCorner} data-corner="tl">
          <span>SYSTEM_ONLINE</span>
        </div>
        <div className={styles.hudCorner} data-corner="tr">
          <span>VITALS: {hudData.vitals}%</span>
        </div>
        <div className={styles.hudCorner} data-corner="bl">
          <span>SYNC: {hudData.sync}%</span>
        </div>
        <div className={styles.hudCorner} data-corner="br">
          <span>UPTIME: {hudData.uptime}</span>
        </div>
      </div>
      
      {/* Header */}
      <header className={styles.cyberHeader}>
        <div className={styles.headerContent}>
          <Link href="/variants" className={styles.backButton}>
            <FiArrowLeft size={20} />
            <span className={styles.glitchText} data-text="BACK">BACK</span>
          </Link>
          
          <div className={styles.headerCenter}>
            <div className={styles.cyberLogo}>
              <Image 
                src="/images/LOGOTRANSPARENTFLOWERONLY1.png" 
                alt="Lotus" 
                width={40} 
                height={40} 
                className={styles.logoImage}
              />
              <div className={styles.logoScan}></div>
            </div>
            <span className={styles.logoText}>
              LOTUS_NEURAL
            </span>
          </div>
          
          <div className={styles.headerRight}>
            <FiCpu className={styles.cpuIcon} size={24} />
            <span className={styles.statusText}>CONNECTED</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.techBadge}>
              <FiZap />
              <span>NEURAL INTERFACE ACTIVE</span>
              <FiZap />
            </div>
            
            <h1 className={styles.mainTitle}>
              <span className={styles.titleLine}>
                <span className={styles.glitchText} data-text="UPGRADE">UPGRADE</span>
              </span>
              <span className={styles.titleLine}>
                <span className={styles.glitchText} data-text="YOUR">YOUR</span>
              </span>
              <span className={styles.titleLine}>
                <span className={styles.glitchText} data-text="BIOLOGY">BIOLOGY</span>
              </span>
            </h1>
            
            <p className={styles.heroSubtext}>
              Interface with next-gen medical protocols. Optimize your biological systems. 
              Transcend traditional healthcare limitations.
            </p>

            <div className={styles.dataStream}>
              <div className={styles.streamItem}>
                <FiDatabase />
                <span>HEALTH_DATA</span>
                <span className={styles.streamValue}>OPTIMAL</span>
              </div>
              <div className={styles.streamItem}>
                <FiActivity />
                <span>BIO_METRICS</span>
                <span className={styles.streamValue}>SYNCED</span>
              </div>
              <div className={styles.streamItem}>
                <FiCpu />
                <span>AI_ASSIST</span>
                <span className={styles.streamValue}>ONLINE</span>
              </div>
            </div>
            
            <div className={styles.heroButtons}>
              <a 
                href="https://app.elationemr.com/book/lotusdirectcare/service-locations/933212881617143?appointment_types=" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.cyberButton}
              >
                <span className={styles.buttonText}>JACK_IN</span>
                <div className={styles.buttonGlitch}></div>
                <FiArrowRight className={styles.buttonIcon} />
              </a>
              
              <Link href="/direct-primary-care" className={styles.cyberButtonOutline}>
                <span>SYSTEM_INFO</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Tech grid background */}
        <div className={styles.techGrid}>
          <div className={styles.gridLine} style={{ top: '20%' }}></div>
          <div className={styles.gridLine} style={{ top: '40%' }}></div>
          <div className={styles.gridLine} style={{ top: '60%' }}></div>
          <div className={styles.gridLine} style={{ top: '80%' }}></div>
          <div className={styles.gridLineV} style={{ left: '20%' }}></div>
          <div className={styles.gridLineV} style={{ left: '40%' }}></div>
          <div className={styles.gridLineV} style={{ left: '60%' }}></div>
          <div className={styles.gridLineV} style={{ left: '80%' }}></div>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.glitchText} data-text="MEDICAL_MODULES">MEDICAL_MODULES</span>
          </h2>

          <div className={styles.servicesGrid}>
            {[
              {
                title: 'PRIMARY_CARE.exe',
                desc: 'Direct neural link to physician',
                status: 'ACTIVE',
                href: '/direct-primary-care'
              },
              {
                title: 'FUNCTIONAL_MED.sys',
                desc: 'Deep system diagnostics',
                status: 'ONLINE',
                href: '/functional-medicine'
              },
              {
                title: 'KETAMINE_TX.mod',
                desc: 'Consciousness optimization',
                status: 'READY',
                href: '/ketamine-therapy'
              },
              {
                title: 'PRP_REGEN.bio',
                desc: 'Cellular enhancement protocol',
                status: 'LOADED',
                href: '/prp-injections'
              },
              {
                title: 'ADDICTION_FIX.patch',
                desc: 'Neural pathway recalibration',
                status: 'AVAILABLE',
                href: '/addiction-treatment'
              },
              {
                title: 'PRICING_MATRIX.dat',
                desc: 'Resource allocation data',
                status: 'PUBLIC',
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
                  <span className={styles.statusIndicator} data-status={service.status}>
                    {service.status}
                  </span>
                </div>
                <p className={styles.cardDesc}>{service.desc}</p>
                <div className={styles.cardFooter}>
                  <span className={styles.loadBar}>
                    <span className={styles.loadProgress}></span>
                  </span>
                  <FiArrowRight className={styles.cardArrow} />
                </div>
                <div className={styles.cardGlitch}></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* System Status */}
      <section className={styles.statusSection}>
        <div className={styles.container}>
          <div className={styles.statusGrid}>
            <div className={styles.statusModule}>
              <div className={styles.moduleHeader}>
                <FiCpu />
                <span>SYSTEM_STATUS</span>
              </div>
              <div className={styles.moduleContent}>
                <div className={styles.statusLine}>
                  <span>Neural Interface</span>
                  <span className={styles.statusOk}>OK</span>
                </div>
                <div className={styles.statusLine}>
                  <span>Bio Metrics</span>
                  <span className={styles.statusOk}>OK</span>
                </div>
                <div className={styles.statusLine}>
                  <span>Data Sync</span>
                  <span className={styles.statusOk}>OK</span>
                </div>
              </div>
            </div>
            
            <div className={styles.statusModule}>
              <div className={styles.moduleHeader}>
                <FiActivity />
                <span>PERFORMANCE</span>
              </div>
              <div className={styles.performanceBar}>
                <div className={styles.performanceFill} style={{ width: '92%' }}></div>
                <span className={styles.performanceText}>92%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apply cyberpunk styling to components */}
      <div className={styles.cyberComponents}>
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