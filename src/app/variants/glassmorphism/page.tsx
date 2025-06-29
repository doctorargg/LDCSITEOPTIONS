import Image from "next/image";
import Link from "next/link";
import ParticleBackground from "./ParticleBackground";

export default function GlassmorphismHome() {
  return (
    <>
      {/* Back to Variants Navigation */}
      <div className="fixed top-6 left-6 z-50">
        <Link 
          href="/variants" 
          className="glass-button bg-gradient-to-r from-glass-purple to-glass-blue text-white font-medium hover:shadow-neon-purple"
        >
          ← Back to Variants
        </Link>
      </div>

      {/* Particle Background */}
      <ParticleBackground />

      {/* Hero Section with Glassmorphism */}
      <section className="relative min-h-screen flex items-center justify-center text-white text-center overflow-hidden">
        {/* Animated Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 via-purple-500/20 to-cyan-500/20 animate-gradient-shift"></div>
        
        {/* Floating Orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '4s' }}></div>
        
        <div className="relative z-10 container mx-auto px-6 py-20">
          {/* Logo with Glass Effect */}
          <div className="flex justify-center mb-12">
            <div className="glass-panel p-8 animate-float">
              <Image 
                src="/images/LOGOTRANSPARENTFLOWERONLY1.png" 
                alt="Lotus Direct Care - Primary Care & Functional Medicine"
                width={250}
                height={250}
                className="drop-shadow-[0_0_50px_rgba(139,92,246,0.8)]"
                priority
              />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 gradient-text animate-float" style={{ animationDelay: '0.5s' }}>
            Healthcare Without Barriers
          </h1>
          <h2 className="text-2xl md:text-3xl font-light mb-8 text-white/80 animate-float" style={{ animationDelay: '1s' }}>
            The Way Medicine Should Be
          </h2>
          <p className="text-lg md:text-xl mb-12 max-w-4xl mx-auto text-white/70 animate-float" style={{ animationDelay: '1.5s' }}>
            Imagine a doctor who truly knows you, has time for you, and is directly accessible when you need them. At Lotus Direct Care, we've removed the barriers between you and your physician.
          </p>
          
          {/* Stats Cards with Glassmorphism */}
          <div className="glass-panel p-8 inline-block mb-12 animate-float" style={{ animationDelay: '2s' }}>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
              <div className="text-center group">
                <span className="text-5xl font-bold gradient-text block group-hover:scale-110 transition-transform duration-300">30-60</span>
                <span className="text-white/80">minute appointments</span>
              </div>
              <div className="text-center group">
                <span className="text-5xl font-bold gradient-text block group-hover:scale-110 transition-transform duration-300">Direct</span>
                <span className="text-white/80">physician access</span>
              </div>
              <div className="text-center group">
                <span className="text-5xl font-bold gradient-text block group-hover:scale-110 transition-transform duration-300">70-90%</span>
                <span className="text-white/80">savings on labs</span>
              </div>
            </div>
          </div>
          
          {/* CTA Buttons with Glass Effect */}
          <div className="flex flex-wrap justify-center gap-6 animate-float" style={{ animationDelay: '2.5s' }}>
            <Link 
              href="https://app.elationemr.com/book/lotusdirectcare/service-locations/933212881617143?appointment_types=" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="glass-button bg-gradient-to-r from-glass-purple to-glass-blue text-white font-bold text-lg hover:shadow-neon-purple"
            >
              Schedule a Free Meet & Greet
            </Link>
            <Link 
              href="/direct-primary-care" 
              className="glass-button border-2 border-white/30 text-white font-bold text-lg hover:shadow-neon-blue hover:bg-white/10"
            >
              Learn About Direct Primary Care
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section with Glass Cards */}
      <section className="relative py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center gradient-text mb-16">
            Experience Healthcare Differently
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="glass-card hover:shadow-neon-purple">
              <div className="text-6xl gradient-text mb-4">🩺</div>
              <h3 className="text-2xl font-bold mb-4 gradient-text">Direct Access</h3>
              <p className="text-white/70">Call, text, or email your doctor directly. No gatekeepers, no barriers - just immediate access when you need it most.</p>
            </div>
            
            <div className="glass-card hover:shadow-neon-blue">
              <div className="text-6xl gradient-text mb-4">⏰</div>
              <h3 className="text-2xl font-bold mb-4 gradient-text">Extended Appointments</h3>
              <p className="text-white/70">30-60 minute appointments mean your doctor has time to truly listen, understand, and address all your concerns.</p>
            </div>
            
            <div className="glass-card hover:shadow-neon-pink">
              <div className="text-6xl gradient-text mb-4">💰</div>
              <h3 className="text-2xl font-bold mb-4 gradient-text">Transparent Pricing</h3>
              <p className="text-white/70">One simple monthly membership covers all your primary care needs. No surprise bills, no insurance hassles.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Glass Effect */}
      <section className="relative py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="glass-panel p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              Ready to Experience Better Healthcare?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Join hundreds of patients who have discovered a better way to receive primary care.
            </p>
            <Link 
              href="https://lotusdirectcare.hint.com/signup/" 
              target="_blank"
              rel="noopener noreferrer"
              className="glass-button bg-gradient-to-r from-glass-purple to-glass-pink text-white font-bold text-lg hover:shadow-neon-purple inline-block"
            >
              Become a Member Today
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}