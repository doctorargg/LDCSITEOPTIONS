'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { 
  FaRocket, FaSatellite, FaSpaceShuttle, FaGlobe, 
  FaUserAstronaut, FaMeteor, FaStar, FaMoon,
  FaPhone, FaEnvelope, FaMapMarkerAlt, FaBars, FaTimes
} from 'react-icons/fa'
import { GiAstronautHelmet, GiSpaceSuit, GiPlanetCore, GiBlackHoleBolas } from 'react-icons/gi'

// Starfield component
const Starfield = () => {
  useEffect(() => {
    const stars = 200;
    const container = document.getElementById('starfield');
    if (!container) return;

    for (let i = 0; i < stars; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = Math.random() * 100 + '%';
      star.style.top = Math.random() * 100 + '%';
      star.style.animationDelay = Math.random() * 5 + 's';
      star.style.animationDuration = (Math.random() * 3 + 2) + 's';
      container.appendChild(star);
    }

    return () => {
      container.innerHTML = '';
    };
  }, []);

  return <div id="starfield" className="fixed inset-0 z-0" />;
};

// Floating planet component
const FloatingPlanet = ({ className, delay = 0 }: { className: string; delay?: number }) => {
  return (
    <div 
      className={`absolute ${className} animate-float`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="planet-glow" />
    </div>
  );
};

// Nebula background effect
const NebulaBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <div className="nebula nebula-1" />
      <div className="nebula nebula-2" />
      <div className="nebula nebula-3" />
    </div>
  );
};

export default function CosmicLotusPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState<number | null>(null);

  const services = [
    {
      icon: <FaUserAstronaut className="text-5xl mb-4" />,
      title: "Direct Primary Care",
      subtitle: "Your Mission Control for Health",
      description: "Navigate your health journey with a dedicated physician as your co-pilot. No insurance barriers, just pure healthcare exploration.",
      link: "/direct-primary-care",
      features: ["24/7 Communication Portal", "Same-Day Launch Windows", "Unlimited Mission Support"],
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: <GiPlanetCore className="text-5xl mb-4" />,
      title: "Functional Medicine",
      subtitle: "Explore Your Body's Universe",
      description: "Deep-space analysis of your body's systems. We go beyond the surface to discover the root causes of your health challenges.",
      link: "/functional-medicine",
      features: ["Advanced Biomarker Scanning", "Personalized Stellar Maps", "Holistic System Analysis"],
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: <FaRocket className="text-5xl mb-4" />,
      title: "Ketamine Therapy",
      subtitle: "Launch Into Mental Wellness",
      description: "Revolutionary treatment for depression and PTSD. Experience breakthrough healing in our state-of-the-art treatment pods.",
      link: "/ketamine-therapy",
      features: ["FDA-Approved Protocols", "Guided Journey Sessions", "Integration Support"],
      color: "from-cyan-500 to-blue-600"
    },
    {
      icon: <GiSpaceSuit className="text-5xl mb-4" />,
      title: "PRP Injections",
      subtitle: "Regenerative Technology",
      description: "Harness your body's own healing plasma. Advanced regenerative treatments for joints, skin, and hair restoration.",
      link: "/prp-injections",
      features: ["Cutting-Edge Centrifuge Tech", "Natural Healing Activation", "Minimal Downtime"],
      color: "from-teal-500 to-green-600"
    },
    {
      icon: <FaSatellite className="text-5xl mb-4" />,
      title: "Addiction Treatment",
      subtitle: "Navigate to Recovery",
      description: "Chart a new course with our comprehensive addiction recovery program. MAT-certified care with compassionate support.",
      link: "/addiction-treatment",
      features: ["Suboxone Program", "Behavioral Orbit Correction", "Long-Term Mission Planning"],
      color: "from-indigo-500 to-purple-700"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Background Effects */}
      <NebulaBackground />
      <Starfield />
      
      {/* Floating Planets */}
      <FloatingPlanet className="w-32 h-32 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full top-20 right-20" delay={0} />
      <FloatingPlanet className="w-20 h-20 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full bottom-40 left-32" delay={2} />
      <FloatingPlanet className="w-16 h-16 bg-gradient-to-br from-orange-600 to-red-600 rounded-full top-1/2 right-1/3" delay={4} />

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/50 backdrop-blur-lg border-b border-blue-500/30 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <GiAstronautHelmet className="text-4xl text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                <div className="absolute inset-0 bg-cyan-400/20 blur-xl group-hover:bg-cyan-300/30 transition-colors" />
              </div>
              <div>
                <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Lotus Space Care
                </div>
                <div className="text-xs text-blue-300">Healthcare Beyond Boundaries</div>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="nav-link cosmic">Home Base</Link>
              <Link href="/about" className="nav-link cosmic">Mission</Link>
              <div className="relative group">
                <button className="nav-link cosmic flex items-center gap-2">
                  Services <FaRocket className="text-sm rotate-45" />
                </button>
                <div className="absolute top-full mt-2 w-64 bg-black/90 backdrop-blur-xl border border-cyan-500/30 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  {services.map((service, idx) => (
                    <Link 
                      key={idx}
                      href={service.link} 
                      className="block px-4 py-3 hover:bg-cyan-500/20 transition-colors border-b border-cyan-500/10 last:border-0"
                    >
                      <div className="flex items-center gap-3">
                        <div className="text-cyan-400">{service.icon}</div>
                        <span className="text-sm">{service.title}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              <Link href="/contact" className="nav-link cosmic">Contact</Link>
              <Link 
                href="https://app.elationemr.com/book/lotusdirectcare"
                className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 font-semibold"
              >
                Launch Appointment
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-cyan-400 text-2xl"
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-cyan-500/30">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <Link href="/" className="block py-2 text-cyan-300">Home Base</Link>
              <Link href="/about" className="block py-2 text-cyan-300">Mission</Link>
              {services.map((service, idx) => (
                <Link key={idx} href={service.link} className="block py-2 text-cyan-300 pl-4">
                  {service.title}
                </Link>
              ))}
              <Link href="/contact" className="block py-2 text-cyan-300">Contact</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="container mx-auto text-center relative z-10">
          <div className="mb-8 animate-pulse-slow">
            <FaSpaceShuttle className="text-8xl mx-auto text-cyan-400 mb-6" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Healthcare That's
            </span>
            <br />
            <span className="text-white">Out of This World</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 mb-8 max-w-3xl mx-auto">
            Welcome to Lotus Space Care, where cutting-edge medicine meets cosmic innovation. 
            Your health journey begins here, at the frontier of personalized care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="https://lotusdirectcare.hint.com/signup/"
              className="cosmic-button primary"
            >
              <FaRocket className="inline mr-2" /> Join the Mission
            </Link>
            <Link 
              href="#services"
              className="cosmic-button secondary"
            >
              <FaStar className="inline mr-2" /> Explore Services
            </Link>
          </div>
        </div>

        {/* Animated cosmic ring */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="cosmic-ring" />
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="relative py-20 px-4">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Your Healthcare Universe
              </span>
            </h2>
            <p className="text-xl text-blue-200">Explore our constellation of services</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div 
                key={idx}
                className="cosmic-card group"
                onMouseEnter={() => setActiveService(idx)}
                onMouseLeave={() => setActiveService(null)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl`} />
                <div className="relative z-10 p-8">
                  <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-sm text-purple-300 mb-4">{service.subtitle}</p>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, fidx) => (
                      <div key={fidx} className="flex items-center gap-2 text-sm text-blue-200">
                        <FaStar className="text-cyan-400 text-xs" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link 
                    href={service.link}
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-semibold"
                  >
                    Launch Details <FaRocket className="rotate-45" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto relative z-10">
          <div className="cosmic-card max-w-4xl mx-auto">
            <div className="p-12 text-center">
              <GiBlackHoleBolas className="text-6xl text-purple-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Our Galactic Mission
                </span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                At Lotus Space Care, we believe healthcare should be as limitless as the cosmos. 
                Dr. Aaron Rosenberg and our stellar team are pioneering a new frontier in medicine—one 
                where every patient is treated like an astronaut embarking on their most important mission: 
                optimal health and wellness. No insurance asteroids, no bureaucratic black holes, 
                just pure, personalized healthcare that propels you toward your best life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <FaMeteor className="text-6xl text-orange-400 mx-auto mb-6 animate-pulse" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Launch Your Health Journey?
            </h2>
            <p className="text-xl text-blue-200 mb-8">
              Don't let your health drift in space. Join our crew and experience 
              healthcare that's truly astronomical.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="https://app.elationemr.com/book/lotusdirectcare"
                className="cosmic-button primary"
              >
                <FaSpaceShuttle className="inline mr-2" /> Book Your Launch
              </Link>
              <Link 
                href="/contact"
                className="cosmic-button secondary"
              >
                <FaSatellite className="inline mr-2" /> Contact Mission Control
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-black/80 backdrop-blur-xl border-t border-cyan-500/30 py-12 px-4">
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-cyan-400">Lotus Space Care</h3>
              <p className="text-gray-400">
                Healthcare beyond the stratosphere. Your wellness is our mission.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3 text-purple-400">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/about" className="hover:text-cyan-400 transition-colors">About</Link></li>
                <li><Link href="/services" className="hover:text-cyan-400 transition-colors">Services</Link></li>
                <li><Link href="/blog" className="hover:text-cyan-400 transition-colors">Space Log</Link></li>
                <li><Link href="/contact" className="hover:text-cyan-400 transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3 text-purple-400">Mission Control</h4>
              <div className="space-y-2 text-gray-300">
                <p className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-cyan-400" />
                  Melbourne, FL 32901
                </p>
                <p className="flex items-center gap-2">
                  <FaPhone className="text-cyan-400" />
                  (321) 345-6789
                </p>
                <p className="flex items-center gap-2">
                  <FaEnvelope className="text-cyan-400" />
                  hello@lotusdirectcare.com
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3 text-purple-400">HIPAA Secure</h4>
              <p className="text-gray-400 text-sm">
                Your health data is protected with military-grade encryption. 
                We maintain strict HIPAA compliance across all systems.
              </p>
              <Link href="/privacy" className="text-cyan-400 hover:text-cyan-300 text-sm">
                Privacy Policy →
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-cyan-500/20 text-center text-gray-400">
            <p>&copy; 2025 Lotus Space Care. Charting new frontiers in healthcare.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .cosmic-card {
          @apply bg-black/60 backdrop-blur-xl border border-cyan-500/30 rounded-xl 
                 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg 
                 hover:shadow-cyan-500/20 relative overflow-hidden;
        }

        .cosmic-button {
          @apply px-8 py-3 rounded-full font-semibold transition-all duration-300 
                 inline-flex items-center justify-center;
        }

        .cosmic-button.primary {
          @apply bg-gradient-to-r from-cyan-500 to-purple-600 
                 hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105;
        }

        .cosmic-button.secondary {
          @apply bg-transparent border-2 border-cyan-400 text-cyan-400 
                 hover:bg-cyan-400/10 hover:border-cyan-300 hover:text-cyan-300;
        }

        .nav-link.cosmic {
          @apply text-gray-300 hover:text-cyan-400 transition-colors duration-200 
                 relative after:absolute after:bottom-0 after:left-0 after:w-0 
                 after:h-0.5 after:bg-cyan-400 hover:after:w-full after:transition-all;
        }

        .star {
          @apply absolute w-1 h-1 bg-white rounded-full animate-twinkle;
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse 3s ease-in-out infinite;
        }

        .nebula {
          @apply absolute w-96 h-96 rounded-full blur-3xl opacity-20;
        }

        .nebula-1 {
          @apply bg-purple-600 top-0 left-1/4 animate-pulse;
        }

        .nebula-2 {
          @apply bg-cyan-600 bottom-0 right-1/4;
          animation: float 15s ease-in-out infinite;
        }

        .nebula-3 {
          @apply bg-pink-600 top-1/2 left-1/2;
          animation: float 20s ease-in-out infinite reverse;
        }

        .cosmic-ring {
          @apply w-96 h-96 border-2 border-cyan-500/20 rounded-full;
          animation: rotate 20s linear infinite;
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .planet-glow {
          @apply absolute inset-0 rounded-full blur-2xl bg-inherit opacity-50;
        }
      `}</style>
    </div>
  )
}