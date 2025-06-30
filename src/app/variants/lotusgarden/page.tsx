'use client';

import { useEffect, useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { FiMapPin, FiPhone, FiHeart, FiArrowRight } from 'react-icons/fi';
import JourneySection from "@/components/JourneySection";
import PricingSection from "@/components/PricingSection";
import FeaturesSection from "@/components/FeaturesSection";
import DoctorSection from "@/components/DoctorSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogPreviewSection from "@/components/BlogPreviewSection";

export default function LotusGardenVariant() {
  const [koiFish, setKoiFish] = useState<Array<{id: number, x: number, y: number, direction: number}>>([]);
  const [bambooSway, setBambooSway] = useState(0);

  useEffect(() => {
    // Initialize koi fish
    const fish = Array.from({ length: 5 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      direction: Math.random() * 360
    }));
    setKoiFish(fish);

    // Bamboo swaying
    const bambooInterval = setInterval(() => {
      setBambooSway(prev => (prev + 1) % 360);
    }, 100);

    return () => clearInterval(bambooInterval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-100 relative overflow-hidden">
      {/* Japanese garden background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 100px, rgba(34, 197, 94, 0.1) 102px, rgba(34, 197, 94, 0.1) 104px)`
        }} />
      </div>

      {/* Floating koi fish */}
      {koiFish.map((fish) => (
        <div
          key={fish.id}
          className="fixed w-8 h-4 pointer-events-none transition-all duration-1000"
          style={{
            left: `${fish.x}%`,
            top: `${fish.y}%`,
            transform: `rotate(${fish.direction}deg)`
          }}
        >
          <div className="w-full h-full bg-gradient-to-r from-orange-400 to-red-500 rounded-full opacity-60" style={{
            clipPath: 'ellipse(70% 50% at 30% 50%)'
          }} />
        </div>
      ))}

      {/* Navigation */}
      <nav className="relative z-50 px-6 py-4 bg-white/20 backdrop-blur-lg border-b border-green-200/30">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <Image src="/images/LOGOTRANSPARENTFLOWERONLY1.png" alt="Lotus Garden" width={50} height={50} />
            <div>
              <div className="text-xl font-bold text-gray-800">Lotus Garden</div>
              <div className="text-sm text-green-700">Zen Wellness</div>
            </div>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-gray-700 hover:text-green-600 transition-colors">About</Link>
            <Link href="/services" className="text-gray-700 hover:text-green-600 transition-colors">Services</Link>
            <Link href="/variants" className="text-gray-700 hover:text-green-600 transition-colors text-sm">🎨 All Variants</Link>
          </div>
          <Link href="https://app.elationemr.com/book/lotusdirectcare/" target="_blank" className="bg-green-500 hover:bg-green-400 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300">
            Enter Garden
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl md:text-7xl font-bold text-gray-800 mb-6">
                Zen Garden
                <span className="block bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                  Wellness
                </span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                In the tranquil beauty of a Japanese garden, every element has its place - the lotus, the koi, the bamboo. 
                Your health deserves the same careful cultivation and peaceful harmony.
              </p>
              <Link href="https://app.elationemr.com/book/lotusdirectcare/" target="_blank" className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-xl flex items-center justify-center w-fit">
                Walk the Garden Path
                <FiArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <Image src="/Lotus Midjourney Flowers/lotus-homepage-new.png" alt="Lotus in zen garden" width={600} height={600} className="w-full h-auto rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      <JourneySection />
      <FeaturesSection />
      <DoctorSection />
      <PricingSection />
      <TestimonialsSection />
      <BlogPreviewSection />

      {/* Footer */}
      <footer className="bg-green-100 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <Image src="/images/LOGOTRANSPARENTFLOWERONLY1.png" alt="Lotus Garden" width={40} height={40} />
                <div>
                  <div className="text-xl font-bold text-gray-800">Lotus Garden</div>
                  <div className="text-sm text-green-700">Zen Wellness</div>
                </div>
              </div>
              <p className="text-gray-700 mb-4">Cultivating wellness with the patience and wisdom of a master gardener.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Garden Services</h4>
              <ul className="space-y-2">
                <li><Link href="/direct-primary-care" className="text-gray-600 hover:text-green-600 transition-colors">Zen Primary Care</Link></li>
                <li><Link href="/functional-medicine" className="text-gray-600 hover:text-green-600 transition-colors">Garden Medicine</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Visit Our Garden</h4>
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
          <div className="border-t border-green-200 mt-8 pt-8 text-center">
            <p className="text-gray-600 text-sm">© 2025 Lotus Garden. All rights reserved. In harmony we heal. 🎋🪷🐠</p>
          </div>
        </div>
      </footer>
    </div>
  );
}