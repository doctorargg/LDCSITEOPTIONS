'use client';

import { useEffect, useState, useRef } from 'react';
import Link from "next/link";
import Image from "next/image";
import { FiCircle, FiMapPin, FiPhone, FiHeart, FiStar, FiClock, FiArrowRight, FiRotateCw } from 'react-icons/fi';
import JourneySection from "@/components/JourneySection";
import PricingSection from "@/components/PricingSection";
import FeaturesSection from "@/components/FeaturesSection";
import DoctorSection from "@/components/DoctorSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogPreviewSection from "@/components/BlogPreviewSection";

export default function LotusMandalaVariant() {
  const [rotation, setRotation] = useState(0);
  const [mandalaLayers, setMandalaLayers] = useState<number[]>([]);
  const [geometryPhase, setGeometryPhase] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Initialize mandala layers
    setMandalaLayers([0, 45, 90, 135, 180, 225, 270, 315]);

    // Continuous rotation
    const rotationInterval = setInterval(() => {
      setRotation(prev => (prev + 0.5) % 360);
    }, 50);

    // Geometry phase for patterns
    const geometryInterval = setInterval(() => {
      setGeometryPhase(prev => (prev + 1) % 360);
    }, 100);

    return () => {
      clearInterval(rotationInterval);
      clearInterval(geometryInterval);
    };
  }, []);

  // Draw dynamic mandala on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) - 20;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Set up gradient
    const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
    gradient.addColorStop(0, 'rgba(147, 51, 234, 0.8)');
    gradient.addColorStop(0.5, 'rgba(236, 72, 153, 0.6)');
    gradient.addColorStop(1, 'rgba(251, 146, 60, 0.4)');

    // Draw mandala layers
    for (let layer = 0; layer < 8; layer++) {
      const layerRadius = (radius / 8) * (layer + 1);
      const petals = 8 + layer * 2;
      
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 2 - (layer * 0.2);
      ctx.globalAlpha = 0.7 - (layer * 0.05);

      for (let i = 0; i < petals; i++) {
        const angle = (360 / petals) * i + rotation + (layer * 15);
        const x1 = centerX + Math.cos((angle * Math.PI) / 180) * layerRadius;
        const y1 = centerY + Math.sin((angle * Math.PI) / 180) * layerRadius;
        
        const x2 = centerX + Math.cos(((angle + 180) * Math.PI) / 180) * layerRadius;
        const y2 = centerY + Math.sin(((angle + 180) * Math.PI) / 180) * layerRadius;

        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(x1, y1);
        ctx.stroke();

        // Add geometric patterns
        if (layer % 2 === 0) {
          ctx.beginPath();
          ctx.arc(x1, y1, 3, 0, 2 * Math.PI);
          ctx.fillStyle = gradient;
          ctx.fill();
        }
      }
    }

    ctx.globalAlpha = 1;
  }, [rotation, geometryPhase]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 relative overflow-hidden">
      {/* Geometric background patterns */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            background: `conic-gradient(from ${rotation}deg at 50% 50%, 
              transparent, 
              rgba(147, 51, 234, 0.3) 45deg, 
              transparent 90deg, 
              rgba(236, 72, 153, 0.3) 135deg, 
              transparent 180deg, 
              rgba(251, 146, 60, 0.3) 225deg, 
              transparent 270deg, 
              rgba(147, 51, 234, 0.3) 315deg, 
              transparent)`
          }}
        />
      </div>

      {/* Sacred geometry overlay */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute border border-purple-300/20 rounded-full"
            style={{
              width: `${100 + i * 50}px`,
              height: `${100 + i * 50}px`,
              left: `calc(50% - ${(100 + i * 50) / 2}px)`,
              top: `calc(50% - ${(100 + i * 50) / 2}px)`,
              transform: `rotate(${rotation + i * 30}deg)`,
              borderStyle: i % 2 === 0 ? 'solid' : 'dashed'
            }}
          />
        ))}
      </div>

      {/* Dynamic mandala canvas */}
      <div className="fixed top-20 right-20 pointer-events-none">
        <canvas
          ref={canvasRef}
          width={200}
          height={200}
          className="opacity-60"
        />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 px-6 py-4 bg-white/20 backdrop-blur-lg border-b border-purple-200/30">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative">
              <Image
                src="/images/LOGOTRANSPARENTFLOWERONLY1.png"
                alt="Lotus Mandala"
                width={50}
                height={50}
                className="drop-shadow-lg"
                style={{ transform: `rotate(${rotation * 0.5}deg)` }}
              />
              {/* Mandala rings around logo */}
              <div 
                className="absolute inset-0 border-2 border-purple-400/50 rounded-full"
                style={{ transform: `rotate(${rotation}deg) scale(1.5)` }}
              />
              <div 
                className="absolute inset-0 border border-pink-400/30 rounded-full"
                style={{ transform: `rotate(${-rotation}deg) scale(2)` }}
              />
            </div>
            <div>
              <div className="text-xl font-bold text-gray-800">
                Lotus Mandala
              </div>
              <div className="text-sm text-purple-700">
                Sacred Geometry Wellness
              </div>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-gray-700 hover:text-purple-600 transition-colors">About</Link>
            <Link href="/services" className="text-gray-700 hover:text-purple-600 transition-colors">Services</Link>
            <Link href="/pricing" className="text-gray-700 hover:text-purple-600 transition-colors">Pricing</Link>
            <Link href="/blog" className="text-gray-700 hover:text-purple-600 transition-colors">Blog</Link>
            <Link href="/contact" className="text-gray-700 hover:text-purple-600 transition-colors">Contact</Link>
            <Link href="/variants" className="text-gray-700 hover:text-purple-600 transition-colors text-sm">
              🎨 All Variants
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1 text-purple-700">
              <FiRotateCw className="w-4 h-4" style={{ transform: `rotate(${rotation}deg)` }} />
              <span className="text-sm font-medium">Sacred Geometry</span>
            </div>
            <Link
              href="https://app.elationemr.com/book/lotusdirectcare/"
              target="_blank"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Enter the Mandala
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <FiCircle className="w-6 h-6 text-purple-600" style={{ transform: `rotate(${rotation}deg)` }} />
                <span className="text-sm font-medium text-purple-700 tracking-wide uppercase">
                  Lotus Mandala
                </span>
              </div>
              
              <h1 className="text-6xl md:text-7xl font-bold text-gray-800 mb-6">
                Sacred
                <span className="block bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
                  Geometry
                </span>
              </h1>
              
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                In the perfect symmetry of the lotus mandala, we find the blueprint for wellness. 
                Each layer, each pattern, each sacred circle represents the interconnected nature of your health. 
                Dr. Rosenberg approaches your care with the precision and beauty of sacred geometry.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="https://app.elationemr.com/book/lotusdirectcare/"
                  target="_blank"
                  className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-purple-400 hover:via-pink-400 hover:to-orange-400 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-xl flex items-center justify-center"
                >
                  Align Your Health
                  <FiArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="https://lotusdirectcare.hint.com/signup/"
                  target="_blank"
                  className="border-2 border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center"
                >
                  Join the Circle
                </Link>
              </div>

              {/* Geometric principles cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white/40 backdrop-blur-lg rounded-xl p-4 border border-purple-200/50">
                  <div className="w-6 h-6 text-purple-600 mb-2 relative">
                    <div className="absolute inset-0 border-2 border-purple-600 rounded-full" />
                    <div className="absolute inset-1 border border-purple-400 rounded-full" />
                  </div>
                  <div className="text-sm font-semibold text-gray-800">Perfect Balance</div>
                  <div className="text-xs text-gray-600">Sacred symmetry</div>
                </div>
                <div className="bg-white/40 backdrop-blur-lg rounded-xl p-4 border border-purple-200/50">
                  <div className="w-6 h-6 text-pink-600 mb-2 relative">
                    <div className="absolute inset-0 border-2 border-pink-600 transform rotate-45" />
                    <div className="absolute inset-0 border-2 border-pink-600" />
                  </div>
                  <div className="text-sm font-semibold text-gray-800">Divine Proportion</div>
                  <div className="text-xs text-gray-600">Golden ratio care</div>
                </div>
                <div className="bg-white/40 backdrop-blur-lg rounded-xl p-4 border border-purple-200/50">
                  <div className="w-6 h-6 text-orange-600 mb-2 relative">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-3 bg-orange-600"
                        style={{
                          left: '50%',
                          top: '50%',
                          transformOrigin: '0 0',
                          transform: `rotate(${i * 60}deg) translateY(-12px)`
                        }}
                      />
                    ))}
                  </div>
                  <div className="text-sm font-semibold text-gray-800">Infinite Patterns</div>
                  <div className="text-xs text-gray-600">Endless wellness</div>
                </div>
              </div>
            </div>

            <div className="relative">
              {/* Main mandala image */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/Lotus Midjourney Flowers/lotus-homepage-new.png"
                  alt="Lotus in sacred geometric patterns"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
                
                {/* Geometric overlay */}
                <div className="absolute inset-0">
                  <svg className="w-full h-full" viewBox="0 0 600 600">
                    {/* Concentric circles */}
                    {[...Array(5)].map((_, i) => (
                      <circle
                        key={i}
                        cx="300"
                        cy="300"
                        r={50 + i * 50}
                        fill="none"
                        stroke="rgba(147, 51, 234, 0.3)"
                        strokeWidth="2"
                        strokeDasharray={i % 2 === 0 ? "5,5" : "none"}
                        style={{ transform: `rotate(${rotation + i * 30}deg)`, transformOrigin: '300px 300px' }}
                      />
                    ))}
                    
                    {/* Radial lines */}
                    {[...Array(8)].map((_, i) => (
                      <line
                        key={i}
                        x1="300"
                        y1="50"
                        x2="300"
                        y2="550"
                        stroke="rgba(236, 72, 153, 0.2)"
                        strokeWidth="1"
                        style={{ transform: `rotate(${rotation + i * 45}deg)`, transformOrigin: '300px 300px' }}
                      />
                    ))}
                  </svg>
                </div>
              </div>
              
              {/* Floating geometric elements */}
              <div className="absolute -top-8 -right-8">
                <div 
                  className="w-16 h-16 border-4 border-purple-400 opacity-70 animate-pulse"
                  style={{ 
                    transform: `rotate(${rotation}deg)`,
                    borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%'
                  }}
                />
              </div>
              <div className="absolute -bottom-8 -left-8">
                <div 
                  className="w-12 h-12 border-2 border-pink-400 opacity-60 animate-pulse"
                  style={{ 
                    transform: `rotate(${-rotation}deg)`,
                    clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                    backgroundColor: 'rgba(236, 72, 153, 0.2)'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sacred Pattern Quote Section */}
      <section className="py-16 bg-white/30 backdrop-blur-lg">
        <div className="max-w-4xl mx-auto text-center px-6">
          <div className="w-16 h-16 mx-auto mb-6 relative">
            <div 
              className="absolute inset-0 border-4 border-purple-600 rounded-full"
              style={{ transform: `rotate(${rotation}deg)` }}
            />
            <div 
              className="absolute inset-2 border-2 border-pink-500 rounded-full"
              style={{ transform: `rotate(${-rotation}deg)` }}
            />
            <div className="absolute inset-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
          </div>
          <blockquote className="text-2xl md:text-3xl text-gray-800 italic mb-6">
            "In the sacred mandala of the lotus, every petal has its place, every circle its purpose. 
            Your health follows the same divine pattern - perfectly balanced, infinitely connected."
          </blockquote>
          <cite className="text-lg text-gray-600">
            - Dr. Aaron Rosenberg, Lotus Mandala
          </cite>
        </div>
      </section>

      {/* Geometric sections */}
      <div className="space-y-0 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div 
            className="w-full h-full opacity-5"
            style={{
              background: `repeating-conic-gradient(from ${rotation}deg at 50% 50%, 
                transparent 0deg, 
                rgba(147, 51, 234, 0.5) 22.5deg, 
                transparent 45deg, 
                rgba(236, 72, 153, 0.5) 67.5deg, 
                transparent 90deg)`
            }}
          />
        </div>
        
        <div className="relative z-10">
          <JourneySection />
          <FeaturesSection />
          <DoctorSection />
          <PricingSection />
          <TestimonialsSection />
          <BlogPreviewSection />
        </div>
      </div>

      {/* Sacred Footer */}
      <footer className="bg-gradient-to-b from-purple-100 to-pink-200 py-12 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative">
                  <Image
                    src="/images/LOGOTRANSPARENTFLOWERONLY1.png"
                    alt="Lotus Mandala"
                    width={40}
                    height={40}
                    style={{ transform: `rotate(${rotation * 0.3}deg)` }}
                  />
                  <div 
                    className="absolute inset-0 border border-purple-400/50 rounded-full"
                    style={{ transform: `rotate(${rotation}deg) scale(1.5)` }}
                  />
                </div>
                <div>
                  <div className="text-xl font-bold text-gray-800">
                    Lotus Mandala
                  </div>
                  <div className="text-sm text-purple-700">
                    Sacred Geometry Wellness
                  </div>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Where ancient sacred geometry meets modern healthcare - perfectly balanced, infinitely connected wellness.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Sacred Services</h4>
              <ul className="space-y-2">
                <li><Link href="/direct-primary-care" className="text-gray-600 hover:text-purple-600 transition-colors">Geometric Primary Care</Link></li>
                <li><Link href="/functional-medicine" className="text-gray-600 hover:text-purple-600 transition-colors">Pattern Medicine</Link></li>
                <li><Link href="/ketamine-therapy" className="text-gray-600 hover:text-purple-600 transition-colors">Sacred Journey Therapy</Link></li>
                <li><Link href="/prp-injections" className="text-gray-600 hover:text-purple-600 transition-colors">Divine Regeneration</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Center Point</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-gray-600">
                  <FiMapPin className="w-4 h-4" />
                  <span className="text-sm">Las Vegas, Nevada</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <FiPhone className="w-4 h-4" />
                  <span className="text-sm">(702) 463-3008</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-purple-300/50 mt-8 pt-8 text-center">
            <p className="text-gray-600 text-sm">
              © 2025 Lotus Mandala. All rights reserved. In sacred geometry we trust, in perfect patterns we heal.
            </p>
            <div className="mt-4 flex justify-center">
              <div 
                className="w-8 h-8 border-2 border-purple-500 rounded-full relative"
                style={{ transform: `rotate(${rotation}deg)` }}
              >
                <div className="absolute inset-1 border border-pink-500 rounded-full" />
                <div className="absolute inset-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}