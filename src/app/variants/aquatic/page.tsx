'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaStethoscope, FaLeaf, FaUserMd, FaSyringe, FaBrain, FaHandHoldingHeart, FaEnvelope, FaPhone, FaMapMarkerAlt, FaFish, FaWater, FaAnchor, FaGem } from 'react-icons/fa';
import { GiSeahorse, GiJellyfish, GiDolphin, GiTropicalFish, GiWaveSurfer, GiOctopus, GiSeaTurtle, GiPlantSeed } from 'react-icons/gi';

// Animated Bubble Component
const Bubble = ({ delay, duration, size }: { delay: number; duration: number; size: number }) => {
  return (
    <div
      className="absolute rounded-full bg-gradient-to-br from-cyan-200/20 to-blue-300/20 backdrop-blur-sm"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        left: `${Math.random() * 100}%`,
        bottom: '-50px',
        animation: `float-up ${duration}s ${delay}s infinite ease-in-out`,
        boxShadow: 'inset 0 0 10px rgba(255,255,255,0.5)',
      }}
    />
  );
};

// Animated Fish Component
const Fish = ({ type, delay }: { type: 'tropical' | 'seahorse' | 'jellyfish'; delay: number }) => {
  const icons = {
    tropical: <GiTropicalFish className="text-4xl text-orange-400" />,
    seahorse: <GiSeahorse className="text-5xl text-pink-400" />,
    jellyfish: <GiJellyfish className="text-6xl text-purple-300 opacity-70" />
  };

  const animations = {
    tropical: 'swim-horizontal',
    seahorse: 'float-vertical',
    jellyfish: 'float-jellyfish'
  };

  return (
    <div
      className="absolute z-10"
      style={{
        top: `${Math.random() * 80}%`,
        animation: `${animations[type]} ${15 + Math.random() * 10}s ${delay}s infinite ease-in-out`,
      }}
    >
      {icons[type]}
    </div>
  );
};

// Service Card Component with Water Ripple Effect
const ServiceCard = ({ icon, title, description, link, delay }: any) => {
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);

  const createRipple = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    
    setRipples([...ripples, { x, y, id }]);
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== id));
    }, 1000);
  };

  return (
    <div 
      className="relative overflow-hidden group transform transition-all duration-500 hover:scale-105"
      style={{ animationDelay: `${delay}s` }}
      onMouseDown={createRipple}
    >
      <div className="relative bg-gradient-to-br from-cyan-400/20 to-blue-600/20 backdrop-blur-md rounded-3xl p-8 h-full border border-cyan-300/30 shadow-xl hover:shadow-2xl transition-all duration-300">
        {ripples.map(ripple => (
          <div
            key={ripple.id}
            className="absolute rounded-full bg-white/30 animate-ripple"
            style={{
              left: ripple.x - 20,
              top: ripple.y - 20,
              width: 40,
              height: 40,
            }}
          />
        ))}
        
        <div className="text-6xl mb-6 text-cyan-300 group-hover:text-cyan-200 transition-colors duration-300 flex justify-center">
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
        <p className="text-cyan-100 mb-6 leading-relaxed">{description}</p>
        <Link 
          href={link} 
          className="inline-flex items-center text-cyan-200 hover:text-white font-semibold transition-colors duration-300 group"
        >
          Dive Deeper
          <GiWaveSurfer className="ml-2 text-xl group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default function AquaticVariant() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const services = [
    {
      icon: <GiSeaTurtle />,
      title: "Direct Primary Care",
      description: "Navigate the healthcare waters with a dedicated captain. Unlimited visits, same-day appointments, and personalized care that flows with your life's currents.",
      link: "/direct-primary-care"
    },
    {
      icon: <GiPlantSeed />,
      title: "Functional Medicine",
      description: "Dive deep beneath the surface to discover the root causes of illness. Like exploring ocean depths, we uncover hidden treasures of health and vitality.",
      link: "/functional-medicine"
    },
    {
      icon: <GiDolphin />,
      title: "Ketamine Therapy",
      description: "Float into tranquility with innovative treatments for depression and chronic pain. Experience the healing depths of consciousness like a peaceful ocean journey.",
      link: "/ketamine-therapy"
    },
    {
      icon: <FaGem />,
      title: "PRP Injections",
      description: "Harness your body's natural healing pearls. Like the ocean's regenerative power, PRP therapy helps restore joints and tissues to their natural state.",
      link: "/prp-injections"
    },
    {
      icon: <GiOctopus />,
      title: "Addiction Treatment",
      description: "Break free from the undertow of addiction. Our compassionate approach helps you swim toward recovery with support that adapts to your journey.",
      link: "/addiction-treatment"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-900 via-blue-900 to-indigo-950 text-white overflow-hidden">
      {/* Ocean Background Effects */}
      <div className="fixed inset-0 z-0">
        {/* Animated Gradient Background */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 via-blue-700/20 to-indigo-800/20"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        
        {/* Underwater Light Rays */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-32 h-screen bg-gradient-to-b from-cyan-300/30 to-transparent transform rotate-12 animate-sway" />
          <div className="absolute top-0 right-1/3 w-48 h-screen bg-gradient-to-b from-blue-300/20 to-transparent transform -rotate-6 animate-sway-delayed" />
          <div className="absolute top-0 right-1/4 w-24 h-screen bg-gradient-to-b from-cyan-200/25 to-transparent transform rotate-3 animate-sway" />
        </div>

        {/* Floating Bubbles */}
        {[...Array(15)].map((_, i) => (
          <Bubble 
            key={i} 
            delay={i * 0.5} 
            duration={10 + Math.random() * 5} 
            size={20 + Math.random() * 40}
          />
        ))}

        {/* Swimming Sea Creatures */}
        {[...Array(6)].map((_, i) => (
          <Fish 
            key={i} 
            type={i % 3 === 0 ? 'tropical' : i % 3 === 1 ? 'seahorse' : 'jellyfish'} 
            delay={i * 2}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="relative z-50 bg-gradient-to-r from-cyan-800/80 to-blue-800/80 backdrop-blur-lg border-b border-cyan-400/30 sticky top-0">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 group">
              <FaGem className="text-4xl text-cyan-300 group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-200 to-blue-200 bg-clip-text text-transparent">
                Lotus Direct Care
              </span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="hover:text-cyan-300 transition-colors flex items-center gap-2">
                <FaAnchor className="text-sm" />
                Home
              </Link>
              <Link href="/about" className="hover:text-cyan-300 transition-colors flex items-center gap-2">
                <GiSeahorse className="text-sm" />
                About
              </Link>
              <Link href="/blog" className="hover:text-cyan-300 transition-colors flex items-center gap-2">
                <FaFish className="text-sm" />
                Blog
              </Link>
              <Link href="/contact" className="hover:text-cyan-300 transition-colors flex items-center gap-2">
                <FaWater className="text-sm" />
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="animate-float">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-200 via-blue-200 to-cyan-200 bg-clip-text text-transparent animate-wave-text">
              Dive Into Wellness
            </h1>
            <p className="text-xl md:text-2xl text-cyan-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Like the ocean's healing embrace, we provide comprehensive healthcare that flows with your life's rhythm. 
              Experience the depth of personalized medicine in Denton's most innovative practice.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Link 
              href="https://lotusdirectcare.hint.com/signup/" 
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold hover:from-cyan-400 hover:to-blue-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 flex items-center justify-center gap-3"
            >
              <GiWaveSurfer className="text-2xl" />
              Start Your Journey
            </Link>
            <Link 
              href="https://app.elationemr.com/book/lotusdirectcare/" 
              className="px-8 py-4 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 backdrop-blur rounded-full font-semibold hover:from-blue-500/80 hover:to-indigo-500/80 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/50 flex items-center justify-center gap-3"
            >
              <GiDolphin className="text-2xl" />
              Book a Visit
            </Link>
          </div>
        </div>

        {/* Wave Separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-24 fill-cyan-800/30">
            <path d="M0,64 C320,96 640,32 960,64 C1280,96 1440,64 1440,64 L1440,120 L0,120 Z" />
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative z-10 py-20 px-6 bg-gradient-to-b from-transparent via-blue-900/50 to-transparent">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-200 to-blue-200 bg-clip-text text-transparent">
            Explore Our Ocean of Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} delay={index * 0.1} />
            ))}
          </div>
        </div>

        {/* Wave Separator */}
        <div className="absolute bottom-0 left-0 right-0 transform rotate-180">
          <svg viewBox="0 0 1440 120" className="w-full h-24 fill-indigo-900/30">
            <path d="M0,32 C480,96 960,0 1440,64 L1440,120 L0,120 Z" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="container mx-auto">
          <div className="bg-gradient-to-br from-cyan-600/20 to-blue-700/20 backdrop-blur-lg rounded-3xl p-12 border border-cyan-400/30 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-200 to-blue-200 bg-clip-text text-transparent">
                  Navigate Healthcare's Deep Waters
                </h2>
                <p className="text-cyan-100 mb-6 text-lg leading-relaxed">
                  Like skilled navigators of the healthcare ocean, Dr. Aaron Rosenberg and our team guide you through 
                  the currents of modern medicine. We believe in diving deep to understand your health, not just 
                  skimming the surface with quick fixes.
                </p>
                <p className="text-cyan-100 mb-8 text-lg leading-relaxed">
                  Our Direct Primary Care model creates a peaceful harbor where you can dock whenever you need care. 
                  No rough seas of insurance hassles, no waiting in crowded waters – just smooth sailing toward 
                  optimal health.
                </p>
                <div className="flex items-center gap-4">
                  <GiSeaTurtle className="text-5xl text-cyan-300" />
                  <div>
                    <p className="text-2xl font-bold text-cyan-200">10+ Years</p>
                    <p className="text-cyan-300">Navigating Healthcare Waters</p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-3xl animate-pulse" />
                <div className="relative bg-gradient-to-br from-cyan-500/30 to-blue-600/30 backdrop-blur-sm rounded-3xl p-8 border border-cyan-300/30">
                  <h3 className="text-2xl font-bold mb-4 text-cyan-200">Why Choose Our Ocean of Care?</h3>
                  <ul className="space-y-3">
                    {[
                      "Same-day appointments that flow with your schedule",
                      "Unlimited visits - dive in whenever you need",
                      "Direct access to your healthcare navigator",
                      "Transparent pricing - no hidden depths",
                      "Comprehensive care from surface to seafloor"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <GiTropicalFish className="text-cyan-300 mt-1 flex-shrink-0" />
                        <span className="text-cyan-100">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-6 bg-gradient-to-t from-indigo-950 to-transparent">
        <div className="container mx-auto text-center">
          <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 backdrop-blur-lg rounded-3xl p-12 border border-cyan-400/30 shadow-2xl max-w-4xl mx-auto">
            <GiJellyfish className="text-6xl text-cyan-300 mx-auto mb-6 animate-float" />
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-200 to-blue-200 bg-clip-text text-transparent">
              Ready to Explore New Depths of Health?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Join our pod of patients who've discovered the tranquil waters of personalized healthcare. 
              Let us be your guide to wellness that runs as deep as the ocean.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="https://lotusdirectcare.hint.com/signup/" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold hover:from-cyan-400 hover:to-blue-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 flex items-center justify-center gap-3"
              >
                <GiDolphin className="text-2xl" />
                Join Our Pod
              </Link>
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 backdrop-blur rounded-full font-semibold hover:from-blue-500/80 hover:to-indigo-500/80 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/50 flex items-center justify-center gap-3"
              >
                <FaWater className="text-xl" />
                Make Waves With Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-gradient-to-b from-transparent to-indigo-950/80 backdrop-blur-lg border-t border-cyan-400/30 py-12 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <FaGem className="text-3xl text-cyan-300" />
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-200 to-blue-200 bg-clip-text text-transparent">
                  Lotus Direct Care
                </span>
              </div>
              <p className="text-cyan-100">
                Your harbor for comprehensive, personalized healthcare in the vast ocean of modern medicine.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-cyan-200">Quick Currents</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-cyan-100 hover:text-cyan-300 transition-colors">About Our Voyage</Link></li>
                <li><Link href="/blog" className="text-cyan-100 hover:text-cyan-300 transition-colors">Captain's Log</Link></li>
                <li><Link href="/hipaa-privacy" className="text-cyan-100 hover:text-cyan-300 transition-colors">Privacy Harbor</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-cyan-200">Navigate to Us</h3>
              <div className="space-y-3 text-cyan-100">
                <p className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-cyan-300" />
                  1304 W Pioneer Pkwy, Denton, TX 76201
                </p>
                <p className="flex items-center gap-2">
                  <FaPhone className="text-cyan-300" />
                  (972) 236-9986
                </p>
                <p className="flex items-center gap-2">
                  <FaEnvelope className="text-cyan-300" />
                  Message in a Bottle
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-cyan-400/30 text-center text-cyan-200">
            <p>&copy; 2025 Lotus Direct Care. Sailing the seas of healthcare with you.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float-up {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          50% {
            transform: translateY(-50vh) translateX(20px);
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-100vh) translateX(-20px);
            opacity: 0;
          }
        }

        @keyframes swim-horizontal {
          0% {
            left: -100px;
            transform: scaleX(1);
          }
          49% {
            transform: scaleX(1);
          }
          50% {
            left: 100%;
            transform: scaleX(-1);
          }
          99% {
            transform: scaleX(-1);
          }
          100% {
            left: -100px;
            transform: scaleX(1);
          }
        }

        @keyframes float-vertical {
          0%, 100% {
            transform: translateY(0) rotate(-15deg);
          }
          50% {
            transform: translateY(-30px) rotate(15deg);
          }
        }

        @keyframes float-jellyfish {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(0) translateX(20px);
          }
          75% {
            transform: translateY(20px) translateX(10px);
          }
        }

        @keyframes sway {
          0%, 100% {
            transform: rotate(12deg) translateX(0);
          }
          50% {
            transform: rotate(8deg) translateX(10px);
          }
        }

        @keyframes sway-delayed {
          0%, 100% {
            transform: rotate(-6deg) translateX(0);
          }
          50% {
            transform: rotate(-10deg) translateX(-10px);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes wave-text {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes ripple {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-sway-delayed {
          animation: sway-delayed 8s ease-in-out infinite;
          animation-delay: 2s;
        }

        .animate-wave-text {
          background-size: 200% 200%;
          animation: wave-text 3s ease-in-out infinite;
        }

        .animate-ripple {
          animation: ripple 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
}