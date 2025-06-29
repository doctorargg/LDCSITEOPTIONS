'use client';

import { useEffect, useRef, useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { FiArrowRight, FiArrowLeft, FiPenTool, FiDroplet, FiEye } from 'react-icons/fi';
import JourneySection from "@/components/JourneySection";
import PricingSection from "@/components/PricingSection";
import FeaturesSection from "@/components/FeaturesSection";
import DoctorSection from "@/components/DoctorSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogPreviewSection from "@/components/BlogPreviewSection";
import styles from './artistic.module.css';

export default function ArtisticVariant() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [brushStrokes, setBrushStrokes] = useState<{ x: number; y: number; color: string }[]>([]);
  const [currentColor, setCurrentColor] = useState('#ff6b6b');

  useEffect(() => {
    // Paint splatter animation on load
    const colors = ['#ff6b6b', '#4ecdc4', '#45aaf2', '#f7b731', '#5f27cd'];
    const newStrokes = [];
    
    for (let i = 0; i < 15; i++) {
      newStrokes.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
    
    setBrushStrokes(newStrokes);

    // Canvas paint effect
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Draw initial paint texture
    ctx.globalAlpha = 0.03;
    for (let i = 0; i < 50; i++) {
      ctx.beginPath();
      ctx.arc(
        Math.random() * canvas.width,
        Math.random() * canvas.height,
        Math.random() * 100 + 50,
        0,
        Math.PI * 2
      );
      ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
      ctx.fill();
    }

    // Color rotation
    const colorInterval = setInterval(() => {
      setCurrentColor(colors[Math.floor(Math.random() * colors.length)]);
    }, 3000);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(colorInterval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={styles.artisticWrapper}>
      <canvas ref={canvasRef} className={styles.paintCanvas} />
      
      {/* Paint splatters */}
      <div className={styles.paintSplatters}>
        {brushStrokes.map((stroke, index) => (
          <div
            key={index}
            className={styles.paintSplatter}
            style={{
              left: `${stroke.x}px`,
              top: `${stroke.y}px`,
              backgroundColor: stroke.color,
              animationDelay: `${index * 0.1}s`
            }}
          />
        ))}
      </div>
      
      {/* Header */}
      <header className={styles.artisticHeader}>
        <div className={styles.headerContent}>
          <Link href="/variants" className={styles.backButton}>
            <FiArrowLeft size={20} />
            <span>Back to Gallery</span>
          </Link>
          
          <div className={styles.headerCenter}>
            <div className={styles.artisticLogo}>
              <Image 
                src="/images/LOGOTRANSPARENTFLOWERONLY1.png" 
                alt="Lotus" 
                width={40} 
                height={40} 
                className={styles.logoImage}
              />
              <div className={styles.brushStroke} style={{ backgroundColor: currentColor }}></div>
            </div>
            <span className={styles.logoText}>LOTUS ARTISAN CARE</span>
          </div>
          
          <div className={styles.headerRight}>
            <div className={styles.colorPalette}>
              <FiDroplet size={20} style={{ color: currentColor }} />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.artistBadge}>
              <FiPenTool />
              <span>Crafting Wellness</span>
            </div>
            
            <h1 className={styles.mainTitle}>
              <span className={styles.titleWord} style={{ color: '#ff6b6b' }}>Healthcare</span>
              <span className={styles.titleWord} style={{ color: '#4ecdc4' }}>is an</span>
              <span className={styles.titleWord} style={{ color: '#45aaf2' }}>Art Form</span>
            </h1>
            
            <p className={styles.heroSubtext}>
              Every patient is a unique canvas. We blend the science of medicine 
              with the art of healing to create your masterpiece of health.
            </p>

            <div className={styles.artisticFeatures}>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon} style={{ backgroundColor: '#ff6b6b' }}>
                  <FiEye />
                </div>
                <span>Visionary Care</span>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon} style={{ backgroundColor: '#4ecdc4' }}>
                  <FiPenTool />
                </div>
                <span>Custom Treatment</span>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon} style={{ backgroundColor: '#45aaf2' }}>
                  <FiDroplet />
                </div>
                <span>Holistic Approach</span>
              </div>
            </div>
            
            <div className={styles.heroButtons}>
              <a 
                href="https://app.elationemr.com/book/lotusdirectcare/service-locations/933212881617143?appointment_types=" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.artisticButton}
                style={{ backgroundColor: currentColor }}
              >
                <span>Start Your Canvas</span>
                <FiArrowRight className={styles.buttonIcon} />
              </a>
              
              <Link href="/direct-primary-care" className={styles.artisticButtonOutline}>
                <span>View Portfolio</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Animated brush strokes */}
        <svg className={styles.brushAnimation} viewBox="0 0 1200 200">
          <path
            d="M0,100 Q300,50 600,100 T1200,100"
            stroke={currentColor}
            strokeWidth="3"
            fill="none"
            strokeDasharray="1200"
            strokeDashoffset="1200"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="1200"
              to="0"
              dur="3s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </section>

      {/* Services Section */}
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>
            Our Palette of Services
          </h2>
          <p className={styles.sectionSubtitle}>
            Each treatment is carefully crafted to color your world with wellness
          </p>

          <div className={styles.servicesGrid}>
            {[
              {
                title: 'Primary Care Canvas',
                desc: 'Your health foundation, painted with care',
                color: '#ff6b6b',
                href: '/direct-primary-care'
              },
              {
                title: 'Functional Medicine Brushwork',
                desc: 'Detailed strokes for optimal health',
                color: '#4ecdc4',
                href: '/functional-medicine'
              },
              {
                title: 'Ketamine Therapy Impressions',
                desc: 'New perspectives on mental wellness',
                color: '#45aaf2',
                href: '/ketamine-therapy'
              },
              {
                title: 'PRP Restoration',
                desc: 'Natural rejuvenation techniques',
                color: '#f7b731',
                href: '/prp-injections'
              },
              {
                title: 'Recovery Artistry',
                desc: 'Sculpting your path to wellness',
                color: '#5f27cd',
                href: '/addiction-treatment'
              },
              {
                title: 'Investment Gallery',
                desc: 'Transparent pricing for your health art',
                color: '#ee5a6f',
                href: '/pricing'
              }
            ].map((service, index) => (
              <Link 
                key={index}
                href={service.href}
                className={styles.serviceCard}
              >
                <div 
                  className={styles.paintDrip} 
                  style={{ backgroundColor: service.color }}
                ></div>
                <h3 style={{ color: service.color }}>{service.title}</h3>
                <p>{service.desc}</p>
                <div className={styles.brushStrokeBottom}>
                  <svg viewBox="0 0 200 20">
                    <path
                      d="M0,10 Q50,0 100,10 T200,10"
                      stroke={service.color}
                      strokeWidth="3"
                      fill="none"
                    />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Creative Process */}
      <section className={styles.processSection}>
        <div className={styles.container}>
          <h2>Our Creative Process</h2>
          <div className={styles.processSteps}>
            <div className={styles.processStep}>
              <div className={styles.stepNumber} style={{ color: '#ff6b6b' }}>01</div>
              <h3>Sketch</h3>
              <p>Initial consultation to understand your unique needs</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber} style={{ color: '#4ecdc4' }}>02</div>
              <h3>Color</h3>
              <p>Develop a personalized treatment palette</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber} style={{ color: '#45aaf2' }}>03</div>
              <h3>Refine</h3>
              <p>Adjust and perfect your wellness journey</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber} style={{ color: '#f7b731' }}>04</div>
              <h3>Frame</h3>
              <p>Maintain your masterpiece of health</p>
            </div>
          </div>
        </div>
      </section>

      {/* Apply artistic styling to components */}
      <div className={styles.artisticComponents}>
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