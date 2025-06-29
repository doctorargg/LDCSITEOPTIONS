'use client';

import './glassmorphism.module.css';

export default function GlassmorphismLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="glassmorphism-variant">
      <style jsx global>{`
        /* Glassmorphism Global Styles */
        .glassmorphism-variant {
          color: rgb(255, 255, 255);
          background: linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #1e293b 100%);
          background-attachment: fixed;
          min-height: 100vh;
          position: relative;
          overflow-x: hidden;
        }

        /* Background animation */
        .glassmorphism-variant::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(236, 72, 153, 0.2) 0%, transparent 50%);
          z-index: -1;
          animation: gradient-shift 15s ease infinite;
        }

        @keyframes gradient-shift {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          33% {
            transform: translate(-20px, -20px) rotate(120deg);
          }
          66% {
            transform: translate(20px, -20px) rotate(240deg);
          }
        }

        /* Glassmorphism components */
        .glass-panel {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 1rem;
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        }
        
        .glass-card {
          background: rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 1rem;
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
          padding: 1.5rem;
          transition: all 0.3s ease;
        }
        
        .glass-card:hover {
          box-shadow: 0 16px 48px 0 rgba(31, 38, 135, 0.4);
          transform: translateY(-4px);
        }
        
        .glass-button {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 0.5rem;
          padding: 0.75rem 1.5rem;
          font-weight: 500;
          transition: all 0.3s ease;
          cursor: pointer;
          display: inline-block;
          text-decoration: none;
        }
        
        .glass-button:hover {
          transform: scale(1.05);
          box-shadow: 0 0 50px rgba(139, 92, 246, 0.5);
        }
        
        .gradient-text {
          background: linear-gradient(to right, #8B5CF6, #3B82F6, #EC4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-gradient-shift {
          animation: gradient-shift 8s ease infinite;
          background-size: 200% 200%;
        }
        
        .shadow-neon-purple:hover {
          box-shadow: 0 0 50px rgba(139, 92, 246, 0.5);
        }
        
        .shadow-neon-blue:hover {
          box-shadow: 0 0 50px rgba(59, 130, 246, 0.5);
        }
        
        .shadow-neon-pink:hover {
          box-shadow: 0 0 50px rgba(236, 72, 153, 0.5);
        }
        
        .from-glass-purple {
          --tw-gradient-from: #8B5CF6;
        }
        
        .to-glass-blue {
          --tw-gradient-to: #3B82F6;
        }
        
        .to-glass-pink {
          --tw-gradient-to: #EC4899;
        }

        /* Custom scrollbar */
        .glassmorphism-variant::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        
        .glassmorphism-variant::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 10px;
        }
        
        .glassmorphism-variant::-webkit-scrollbar-thumb {
          background: rgba(139, 92, 246, 0.3);
          border-radius: 10px;
        }
        
        .glassmorphism-variant::-webkit-scrollbar-thumb:hover {
          background: rgba(236, 72, 153, 0.3);
        }
      `}</style>
      {children}
    </div>
  );
}