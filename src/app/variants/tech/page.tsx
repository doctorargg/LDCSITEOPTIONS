'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  FaBrain, 
  FaRobot, 
  FaCode, 
  FaNetworkWired, 
  FaMicrochip,
  FaDatabase,
  FaWifi,
  FaTerminal,
  FaShieldAlt,
  FaLock,
  FaDna,
  FaAtom,
  FaChevronRight,
  FaChartLine,
  FaCog,
  FaServer
} from 'react-icons/fa';
import { 
  SiTensorflow,
  SiPython,
  SiReact,
  SiTypescript
} from 'react-icons/si';

export default function TechVariant() {
  const [dataStream, setDataStream] = useState('');
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [activeCircuit, setActiveCircuit] = useState(0);
  const [glitchText, setGlitchText] = useState(false);
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number}>>([]);
  const [terminalText, setTerminalText] = useState('');
  const [neuralPulse, setNeuralPulse] = useState(false);

  // Binary data stream effect
  useEffect(() => {
    const interval = setInterval(() => {
      setDataStream(prev => {
        const newBit = Math.random() > 0.5 ? '1' : '0';
        return (prev + newBit).slice(-50);
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Loading progress simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress(prev => (prev + 1) % 101);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Circuit animation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCircuit(prev => (prev + 1) % 6);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Data particles
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev => {
        const newParticles = [...prev];
        if (newParticles.length < 20) {
          newParticles.push({
            id: Date.now(),
            x: Math.random() * 100,
            y: 100
          });
        }
        return newParticles
          .map(p => ({ ...p, y: p.y - 2 }))
          .filter(p => p.y > -10);
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Terminal typing effect
  useEffect(() => {
    const messages = [
      '> Initializing health protocols...',
      '> Neural network trained on 1M+ patient outcomes',
      '> AI-powered diagnostics ready',
      '> Secure connection established',
      '> Welcome to the future of healthcare'
    ];
    let messageIndex = 0;
    let charIndex = 0;
    let currentMessage = '';

    const typeInterval = setInterval(() => {
      if (charIndex < messages[messageIndex].length) {
        currentMessage += messages[messageIndex][charIndex];
        setTerminalText(currentMessage);
        charIndex++;
      } else {
        setTimeout(() => {
          currentMessage = '';
          charIndex = 0;
          messageIndex = (messageIndex + 1) % messages.length;
        }, 2000);
      }
    }, 50);

    return () => clearInterval(typeInterval);
  }, []);

  // Neural pulse effect
  useEffect(() => {
    const interval = setInterval(() => {
      setNeuralPulse(true);
      setTimeout(() => setNeuralPulse(false), 500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      icon: <FaBrain className="text-4xl" />,
      title: "AI-Enhanced Primary Care",
      description: "Neural network-powered health optimization with predictive analytics",
      link: "/direct-primary-care",
      tech: "TensorFlow 3.0",
      color: "from-cyan-500 to-blue-600"
    },
    {
      icon: <FaDna className="text-4xl" />,
      title: "Biometric Medicine",
      description: "Genomic analysis and personalized treatment algorithms",
      link: "/functional-medicine",
      tech: "Quantum Computing",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: <FaMicrochip className="text-4xl" />,
      title: "Nanotech Therapy",
      description: "Ketamine protocols optimized by machine learning",
      link: "/ketamine-therapy",
      tech: "Neural Interface",
      color: "from-green-500 to-teal-600"
    },
    {
      icon: <FaAtom className="text-4xl" />,
      title: "Cellular Regeneration",
      description: "PRP enhanced with nanotechnology and AI guidance",
      link: "/prp-injections",
      tech: "Bioengineering",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: <FaNetworkWired className="text-4xl" />,
      title: "Neural Rewiring",
      description: "AI-assisted addiction recovery protocols",
      link: "/addiction-treatment",
      tech: "Deep Learning",
      color: "from-indigo-500 to-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Matrix rain background */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            #00ffff10 2px,
            #00ffff10 4px
          ), repeating-linear-gradient(
            90deg,
            transparent,
            transparent 2px,
            #ff00ff10 2px,
            #ff00ff10 4px
          )`
        }}></div>
      </div>

      {/* Floating data particles */}
      <div className="fixed inset-0 pointer-events-none">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              boxShadow: '0 0 10px #00ffff'
            }}
          />
        ))}
      </div>

      {/* Circuit pattern overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 10 50 L 40 50 M 60 50 L 90 50 M 50 10 L 50 40 M 50 60 L 50 90" 
                stroke="#00ffff" strokeWidth="0.5" fill="none" />
              <circle cx="50" cy="50" r="5" fill="#ff00ff" className={activeCircuit === 0 ? 'animate-pulse' : ''} />
              <circle cx="10" cy="50" r="3" fill="#00ff00" className={activeCircuit === 1 ? 'animate-pulse' : ''} />
              <circle cx="90" cy="50" r="3" fill="#00ff00" className={activeCircuit === 2 ? 'animate-pulse' : ''} />
              <circle cx="50" cy="10" r="3" fill="#00ff00" className={activeCircuit === 3 ? 'animate-pulse' : ''} />
              <circle cx="50" cy="90" r="3" fill="#00ff00" className={activeCircuit === 4 ? 'animate-pulse' : ''} />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      {/* Navigation */}
      <nav className="relative z-20 border-b border-cyan-800 bg-black/80 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <FaBrain className="text-4xl text-cyan-400 group-hover:animate-pulse" />
                <div className="absolute inset-0 bg-cyan-400 blur-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                  LOTUS.AI
                </h1>
                <p className="text-xs text-gray-500 font-mono">{dataStream}</p>
              </div>
            </Link>
            
            <div className="flex items-center space-x-6">
              <Link href="/" className="hover:text-cyan-400 transition-colors flex items-center space-x-2">
                <FaTerminal />
                <span className="font-mono">Home</span>
              </Link>
              <Link href="/blog" className="hover:text-cyan-400 transition-colors flex items-center space-x-2">
                <FaDatabase />
                <span className="font-mono">DataLog</span>
              </Link>
              <Link href="#contact" className="px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg hover:from-cyan-500 hover:to-blue-500 transition-all transform hover:scale-105 flex items-center space-x-2">
                <FaNetworkWired />
                <span className="font-mono">Connect</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <div className="inline-block p-4 bg-gradient-to-r from-cyan-900/50 to-blue-900/50 rounded-2xl backdrop-blur-xl border border-cyan-500/30">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <SiTensorflow className="text-4xl text-orange-500" />
                <SiPython className="text-4xl text-blue-500" />
                <SiReact className="text-4xl text-cyan-500" />
                <SiTypescript className="text-4xl text-blue-600" />
              </div>
              <p className="font-mono text-sm text-cyan-400">v3.14.159 • Neural Core Active</p>
            </div>
          </div>

          <h1 
            className="text-6xl font-bold mb-6 relative"
            onMouseEnter={() => setGlitchText(true)}
            onMouseLeave={() => setGlitchText(false)}
          >
            <span className={`inline-block ${glitchText ? 'glitch' : ''}`}>
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                HEALTHCARE.NEXT()
              </span>
            </span>
          </h1>

          <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto font-mono">
            Where artificial intelligence meets human wellness. 
            Powered by quantum computing and neural networks trained on millions of patient outcomes.
          </p>

          {/* Terminal window */}
          <div className="max-w-2xl mx-auto mb-12 bg-black/80 border border-cyan-500/30 rounded-lg p-4 backdrop-blur-xl">
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-xs text-gray-500 ml-4 font-mono">lotus-ai-terminal</span>
            </div>
            <div className="font-mono text-sm text-green-400">
              <p>{terminalText}<span className="animate-pulse">_</span></p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a 
              href="https://app.elationemr.com/book/lotusdirectcare/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg hover:from-cyan-500 hover:to-blue-500 transition-all transform hover:scale-105 flex items-center space-x-3 group"
            >
              <FaRobot className="text-xl" />
              <span className="font-mono">Initialize Appointment</span>
              <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="https://lotusdirectcare.hint.com/signup/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-purple-500 text-purple-400 rounded-lg hover:bg-purple-500/10 transition-all transform hover:scale-105 flex items-center space-x-3"
            >
              <FaNetworkWired className="text-xl" />
              <span className="font-mono">Join Neural Network</span>
            </a>
          </div>
        </div>
      </section>

      {/* Neural Network Visualization */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-2xl p-8 backdrop-blur-xl border border-cyan-500/30">
              <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                Neural Health Network
              </h3>
              
              {/* Neural network SVG */}
              <div className="relative h-64 flex items-center justify-center">
                <svg className="w-full h-full max-w-lg" viewBox="0 0 400 200">
                  {/* Neural connections */}
                  <g className={neuralPulse ? 'animate-pulse' : ''}>
                    {/* Input layer to hidden layer */}
                    <line x1="50" y1="50" x2="150" y2="30" stroke="#00ffff" strokeWidth="1" opacity="0.5" />
                    <line x1="50" y1="50" x2="150" y2="70" stroke="#00ffff" strokeWidth="1" opacity="0.5" />
                    <line x1="50" y1="50" x2="150" y2="110" stroke="#00ffff" strokeWidth="1" opacity="0.5" />
                    <line x1="50" y1="100" x2="150" y2="30" stroke="#00ffff" strokeWidth="1" opacity="0.5" />
                    <line x1="50" y1="100" x2="150" y2="70" stroke="#00ffff" strokeWidth="1" opacity="0.5" />
                    <line x1="50" y1="100" x2="150" y2="110" stroke="#00ffff" strokeWidth="1" opacity="0.5" />
                    <line x1="50" y1="150" x2="150" y2="30" stroke="#00ffff" strokeWidth="1" opacity="0.5" />
                    <line x1="50" y1="150" x2="150" y2="70" stroke="#00ffff" strokeWidth="1" opacity="0.5" />
                    <line x1="50" y1="150" x2="150" y2="110" stroke="#00ffff" strokeWidth="1" opacity="0.5" />
                    
                    {/* Hidden layer to hidden layer */}
                    <line x1="150" y1="30" x2="250" y2="50" stroke="#ff00ff" strokeWidth="1" opacity="0.5" />
                    <line x1="150" y1="30" x2="250" y2="100" stroke="#ff00ff" strokeWidth="1" opacity="0.5" />
                    <line x1="150" y1="70" x2="250" y2="50" stroke="#ff00ff" strokeWidth="1" opacity="0.5" />
                    <line x1="150" y1="70" x2="250" y2="100" stroke="#ff00ff" strokeWidth="1" opacity="0.5" />
                    <line x1="150" y1="110" x2="250" y2="50" stroke="#ff00ff" strokeWidth="1" opacity="0.5" />
                    <line x1="150" y1="110" x2="250" y2="100" stroke="#ff00ff" strokeWidth="1" opacity="0.5" />
                    
                    {/* Hidden layer to output */}
                    <line x1="250" y1="50" x2="350" y2="100" stroke="#00ff00" strokeWidth="1" opacity="0.5" />
                    <line x1="250" y1="100" x2="350" y2="100" stroke="#00ff00" strokeWidth="1" opacity="0.5" />
                  </g>
                  
                  {/* Nodes */}
                  {/* Input layer */}
                  <circle cx="50" cy="50" r="15" fill="#00ffff" className="animate-pulse" />
                  <circle cx="50" cy="100" r="15" fill="#00ffff" className="animate-pulse" />
                  <circle cx="50" cy="150" r="15" fill="#00ffff" className="animate-pulse" />
                  
                  {/* Hidden layer 1 */}
                  <circle cx="150" cy="30" r="15" fill="#ff00ff" />
                  <circle cx="150" cy="70" r="15" fill="#ff00ff" />
                  <circle cx="150" cy="110" r="15" fill="#ff00ff" />
                  
                  {/* Hidden layer 2 */}
                  <circle cx="250" cy="50" r="15" fill="#ff00ff" />
                  <circle cx="250" cy="100" r="15" fill="#ff00ff" />
                  
                  {/* Output layer */}
                  <circle cx="350" cy="100" r="20" fill="#00ff00" className="animate-pulse" />
                  
                  {/* Labels */}
                  <text x="50" y="180" textAnchor="middle" fill="#00ffff" fontSize="12" fontFamily="monospace">Input</text>
                  <text x="200" y="180" textAnchor="middle" fill="#ff00ff" fontSize="12" fontFamily="monospace">Processing</text>
                  <text x="350" y="180" textAnchor="middle" fill="#00ff00" fontSize="12" fontFamily="monospace">Health Output</text>
                </svg>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center">
                  <p className="text-3xl font-bold text-cyan-400">99.9%</p>
                  <p className="text-sm text-gray-400 font-mono">Accuracy Rate</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-purple-400">1M+</p>
                  <p className="text-sm text-gray-400 font-mono">Data Points</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-green-400">24/7</p>
                  <p className="text-sm text-gray-400 font-mono">AI Monitoring</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              AI-Powered Services
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link 
                key={index} 
                href={service.link}
                className="group relative bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 overflow-hidden"
              >
                {/* Holographic effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Circuit pattern background */}
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0v30m0 0v30m0-30h30M0 30h30' stroke='%2300ffff' stroke-width='0.5' fill='none'/%3E%3C/svg%3E")`,
                    backgroundSize: '60px 60px'
                  }}></div>
                </div>

                <div className="relative z-10">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${service.color} mb-4`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 text-sm">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded">
                      {service.tech}
                    </span>
                    <FaChevronRight className="text-cyan-400 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>

                {/* Loading bar effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-800">
                  <div 
                    className="h-full bg-gradient-to-r from-cyan-400 to-blue-600 transition-all duration-1000"
                    style={{ width: `${index === activeCircuit ? '100%' : '0%'}` }}
                  ></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 px-4 border-t border-cyan-800/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            Technology Stack
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: <FaBrain />, name: "Neural AI", version: "v3.0" },
              { icon: <FaShieldAlt />, name: "Quantum Encryption", version: "256-bit" },
              { icon: <FaDatabase />, name: "BigData Analytics", version: "PB Scale" },
              { icon: <FaServer />, name: "Edge Computing", version: "5ms latency" },
              { icon: <FaLock />, name: "Blockchain", version: "HIPAA+" },
              { icon: <FaChartLine />, name: "Predictive ML", version: "99.9%" },
              { icon: <FaCog />, name: "AutoML", version: "Self-optimizing" },
              { icon: <FaWifi />, name: "5G Network", version: "Ultra-low latency" }
            ].map((tech, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-900 to-black p-4 rounded-lg border border-cyan-500/30 text-center hover:border-cyan-400 transition-all group"
              >
                <div className="text-3xl mb-2 text-cyan-400 group-hover:animate-pulse">
                  {tech.icon}
                </div>
                <h4 className="font-bold text-sm">{tech.name}</h4>
                <p className="text-xs text-gray-500 font-mono">{tech.version}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Progress Bar Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-xl p-6 backdrop-blur-xl border border-cyan-500/30">
            <h3 className="text-xl font-bold mb-4 text-cyan-400">System Performance</h3>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-mono">AI Processing Power</span>
                  <span className="text-sm font-mono text-cyan-400">{loadingProgress}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-cyan-400 to-blue-600 transition-all duration-300"
                    style={{ width: `${loadingProgress}%` }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-mono">Neural Network Optimization</span>
                  <span className="text-sm font-mono text-purple-400">87%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div className="w-[87%] h-full bg-gradient-to-r from-purple-400 to-pink-600"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-mono">Security Protocols</span>
                  <span className="text-sm font-mono text-green-400">100%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div className="w-full h-full bg-gradient-to-r from-green-400 to-teal-600"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 border-t border-cyan-800/30">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            Initialize Connection
          </h2>

          <form className="space-y-4 bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl border border-cyan-500/30">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-mono text-cyan-400 mb-2">Name_Input</label>
                <input 
                  type="text" 
                  className="w-full bg-black border border-cyan-500/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-400 transition-colors font-mono"
                  placeholder="John_Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-mono text-cyan-400 mb-2">Email_Address</label>
                <input 
                  type="email" 
                  className="w-full bg-black border border-cyan-500/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-400 transition-colors font-mono"
                  placeholder="user@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-mono text-cyan-400 mb-2">Message_Data</label>
              <textarea 
                rows={4}
                className="w-full bg-black border border-cyan-500/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-400 transition-colors font-mono resize-none"
                placeholder="Enter your message data..."
              ></textarea>
            </div>

            <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-3">
              <p className="text-xs text-yellow-400 font-mono flex items-center">
                <FaShieldAlt className="mr-2" />
                HIPAA-compliant encryption enabled. No PHI in this form.
              </p>
            </div>

            <button 
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg hover:from-cyan-500 hover:to-blue-500 transition-all transform hover:scale-[1.02] font-mono flex items-center justify-center space-x-2"
            >
              <FaTerminal />
              <span>Execute_Transmission</span>
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-cyan-800/30">
        <div className="container mx-auto text-center">
          <p className="text-sm text-gray-500 font-mono mb-2">
            © 2025 Lotus.AI | Powered by Quantum Computing
          </p>
          <p className="text-xs text-gray-600 font-mono">
            System Status: <span className="text-green-400">ONLINE</span> | 
            Uptime: <span className="text-cyan-400">99.99%</span> | 
            Version: <span className="text-purple-400">3.14.159</span>
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes glitch {
          0% {
            text-shadow: 
              0.05em 0 0 rgba(255, 0, 0, 0.75),
              -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
              0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
          }
          14% {
            text-shadow: 
              0.05em 0 0 rgba(255, 0, 0, 0.75),
              -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
              0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
          }
          15% {
            text-shadow: 
              -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
              0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
              -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
          }
          49% {
            text-shadow: 
              -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
              0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
              -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
          }
          50% {
            text-shadow: 
              0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
              0.05em 0 0 rgba(0, 255, 0, 0.75),
              0 -0.05em 0 rgba(0, 0, 255, 0.75);
          }
          99% {
            text-shadow: 
              0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
              0.05em 0 0 rgba(0, 255, 0, 0.75),
              0 -0.05em 0 rgba(0, 0, 255, 0.75);
          }
          100% {
            text-shadow: 
              -0.025em 0 0 rgba(255, 0, 0, 0.75),
              -0.025em -0.025em 0 rgba(0, 255, 0, 0.75),
              -0.025em -0.05em 0 rgba(0, 0, 255, 0.75);
          }
        }

        .glitch {
          animation: glitch 0.5s infinite;
        }
      `}</style>
    </div>
  );
}