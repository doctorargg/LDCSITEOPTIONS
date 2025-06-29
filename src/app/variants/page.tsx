'use client';

import Link from 'next/link';
import { useState } from 'react';

const variants = [
  {
    id: 1,
    name: 'Minimalist',
    path: '/variants/minimalist',
    description: 'Clean, monochromatic design with dark mode toggle and elegant typography.',
    features: ['Dark Mode Toggle', 'Mega Menu', 'Scroll Animations', 'Inter Typography'],
    color: 'from-gray-600 to-gray-800'
  },
  {
    id: 2,
    name: 'Glassmorphism',
    path: '/variants/glassmorphism',
    description: 'Modern frosted glass effects with vibrant gradients and particle animations.',
    features: ['Backdrop Blur', 'Particle System', 'Purple Gradients', 'Glass Cards'],
    color: 'from-purple-600 to-blue-600'
  },
  {
    id: 3,
    name: 'Retro-futuristic',
    path: '/variants/retrofuturistic',
    description: '80s synthwave aesthetic with neon colors, glitch effects, and matrix rain.',
    features: ['Neon Glow', 'Matrix Rain', 'Glitch Effects', 'Terminal UI'],
    color: 'from-pink-600 to-cyan-600'
  },
  {
    id: 4,
    name: 'Organic',
    path: '/variants/organic',
    description: 'Nature-inspired design with earth tones, seasonal themes, and ambient sounds.',
    features: ['Seasonal Themes', 'Ambient Sounds', 'Lotus Animations', 'Organic Shapes'],
    color: 'from-green-600 to-emerald-600'
  },
  {
    id: 5,
    name: 'Luxury',
    path: '/variants/luxury',
    description: 'Premium gold and black aesthetic with elegant typography and VIP features.',
    features: ['Gold Accents', 'Ken Burns Effect', 'VIP Portal', 'Luxury Cards'],
    color: 'from-yellow-600 to-amber-600'
  },
  {
    id: 6,
    name: 'Cyberpunk',
    path: '/variants/cyberpunk',
    description: 'Tech-focused design with electric neon colors and HUD interfaces.',
    features: ['HUD Interface', 'Electric Colors', 'Binary Code', 'Tech Panels'],
    color: 'from-cyan-600 to-blue-600'
  },
  {
    id: 7,
    name: 'Artistic',
    path: '/variants/artistic',
    description: 'Creative paint and canvas theme with vibrant colors and brush effects.',
    features: ['Paint Effects', 'Canvas Textures', 'Brush Strokes', 'Color Shifts'],
    color: 'from-red-600 to-orange-600'
  },
  {
    id: 8,
    name: 'Zen',
    path: '/variants/zen',
    description: 'Meditative design with chakra colors, meditation timer, and mindfulness features.',
    features: ['Meditation Timer', 'Chakra Colors', 'Breathing Animations', 'Zen Quotes'],
    color: 'from-blue-600 to-indigo-600'
  },
  {
    id: 9,
    name: 'Sports',
    path: '/variants/sports',
    description: 'High-energy athletic theme with performance dashboards and workout tracking.',
    features: ['Performance Dashboard', 'Workout Timer', 'Activity Feed', 'Athletic Metrics'],
    color: 'from-red-600 to-orange-600'
  },
  {
    id: 10,
    name: 'Corporate',
    path: '/variants/corporate',
    description: 'Professional business aesthetic with executive styling and dashboard layouts.',
    features: ['Executive Portal', 'Business Dashboard', 'Corporate Colors', 'Professional Layout'],
    color: 'from-blue-600 to-slate-600'
  },
  {
    id: 11,
    name: 'Botanical',
    path: '/variants/botanical',
    description: 'Garden theme with floating leaves, seasonal colors, and nature animations.',
    features: ['Floating Leaves', 'Flower Icons', 'Green Gradients', 'Nature Sounds'],
    color: 'from-green-500 to-emerald-600'
  },
  {
    id: 12,
    name: 'Cosmic',
    path: '/variants/cosmic',
    description: 'Space theme with starfield, floating planets, and nebula effects.',
    features: ['Animated Stars', 'Floating Planets', 'Space Icons', 'Cosmic Colors'],
    color: 'from-purple-600 to-indigo-800'
  },
  {
    id: 13,
    name: 'Aquatic',
    path: '/variants/aquatic',
    description: 'Ocean theme with bubbles, waves, and marine life animations.',
    features: ['Floating Bubbles', 'Wave Effects', 'Sea Life', 'Ocean Blues'],
    color: 'from-blue-500 to-cyan-600'
  },
  {
    id: 14,
    name: 'Victorian',
    path: '/variants/victorian',
    description: 'Vintage theme with ornate decorations, elegant patterns, and classic typography.',
    features: ['Ornate Borders', 'Vintage Colors', 'Classical Icons', 'Serif Fonts'],
    color: 'from-amber-600 to-red-800'
  },
  {
    id: 15,
    name: 'Tech/AI',
    path: '/variants/tech',
    description: 'Futuristic theme with circuit patterns, data streams, and AI elements.',
    features: ['Circuit Patterns', 'Data Streams', 'AI Interface', 'Neon Effects'],
    color: 'from-cyan-500 to-blue-700'
  },
  {
    id: 16,
    name: 'Desert',
    path: '/variants/desert',
    description: 'Desert oasis theme with sand dunes, palm trees, and warm sunset colors.',
    features: ['Sand Effects', 'Oasis Elements', 'Desert Icons', 'Warm Tones'],
    color: 'from-orange-500 to-red-600'
  },
  {
    id: 17,
    name: 'Sakura',
    path: '/variants/sakura',
    description: 'Japanese theme with cherry blossoms, zen elements, and traditional patterns.',
    features: ['Falling Petals', 'Zen Garden', 'Japanese Icons', 'Pink Blossoms'],
    color: 'from-pink-500 to-red-500'
  },
  {
    id: 18,
    name: 'Nordic',
    path: '/variants/nordic',
    description: 'Scandinavian theme with northern lights, snow effects, and hygge elements.',
    features: ['Aurora Effects', 'Snow Animation', 'Nordic Icons', 'Cool Blues'],
    color: 'from-blue-400 to-indigo-600'
  },
  {
    id: 19,
    name: 'Industrial',
    path: '/variants/industrial',
    description: 'Urban theme with metal textures, gears, and industrial elements.',
    features: ['Metal Textures', 'Gear Animation', 'Urban Icons', 'Steel Colors'],
    color: 'from-gray-600 to-slate-700'
  },
  {
    id: 20,
    name: 'Fantasy',
    path: '/variants/fantasy',
    description: 'Magical theme with crystals, sparkles, and mystical elements.',
    features: ['Magic Particles', 'Crystal Effects', 'Fantasy Icons', 'Mystical Colors'],
    color: 'from-purple-500 to-pink-600'
  },
  {
    id: 21,
    name: 'Art Deco',
    path: '/variants/artdeco',
    description: '1920s luxury theme with geometric patterns and golden accents.',
    features: ['Geometric Patterns', 'Gold Accents', 'Art Deco Icons', 'Luxury Colors'],
    color: 'from-yellow-500 to-amber-600'
  },
  {
    id: 22,
    name: 'Mediterranean',
    path: '/variants/mediterranean',
    description: 'Coastal theme with blue and white colors, olive branches, and villa elements.',
    features: ['Wave Animations', 'Coastal Colors', 'Mediterranean Icons', 'Villa Elements'],
    color: 'from-blue-500 to-teal-600'
  },
  {
    id: 23,
    name: 'Steampunk',
    path: '/variants/steampunk',
    description: 'Victorian-tech theme with brass elements, gears, and steam effects.',
    features: ['Brass Elements', 'Steam Effects', 'Mechanical Icons', 'Copper Colors'],
    color: 'from-amber-700 to-orange-800'
  },
  {
    id: 24,
    name: 'Ethereal',
    path: '/variants/ethereal',
    description: 'Crystal theme with prismatic effects, light beams, and translucent elements.',
    features: ['Prismatic Effects', 'Light Beams', 'Crystal Icons', 'Rainbow Colors'],
    color: 'from-purple-400 to-pink-500'
  },
  {
    id: 25,
    name: 'Safari',
    path: '/variants/safari',
    description: 'Adventure theme with earth tones, wildlife elements, and expedition gear.',
    features: ['Earth Tones', 'Wildlife Icons', 'Adventure Elements', 'Safari Colors'],
    color: 'from-yellow-700 to-orange-700'
  }
];

export default function VariantsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            🪷 Lotus Direct Care
          </h1>
          <p className="text-xl text-purple-200 mb-8">
            25 Modern Design Variants - Click to Explore
          </p>
          <Link 
            href="/"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            ← Back to Original Site
          </Link>
        </div>

        {/* Variants Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {variants.map((variant) => (
            <Link
              key={variant.id}
              href={variant.path}
              className="group block"
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                {/* Variant Number */}
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${variant.color} flex items-center justify-center text-white font-bold text-lg mb-4`}>
                  {variant.id}
                </div>

                {/* Variant Name */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {variant.name}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {variant.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {variant.features.slice(0, 2).map((feature, index) => (
                    <span
                      key={index}
                      className="text-xs bg-white/20 text-white px-2 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                  {variant.features.length > 2 && (
                    <span className="text-xs bg-white/20 text-white px-2 py-1 rounded-full">
                      +{variant.features.length - 2} more
                    </span>
                  )}
                </div>

                {/* View Button */}
                <div className="text-purple-300 group-hover:text-white text-sm font-medium">
                  View Variant →
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Instructions */}
        <div className="mt-12 bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
          <h3 className="text-xl font-bold text-white mb-4">🚀 How to Use</h3>
          <div className="text-gray-300 space-y-2">
            <p>• <strong>Click any variant card</strong> to see that design applied to the entire website</p>
            <p>• <strong>Navigate between variants</strong> using the variants menu or return here anytime</p>
            <p>• <strong>All functionality preserved</strong> - contact forms, blog system, service pages all work</p>
            <p>• <strong>One development server</strong> - no need to start multiple servers</p>
          </div>
        </div>
      </div>
    </div>
  );
}