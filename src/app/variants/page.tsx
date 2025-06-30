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
  },
  // Medical & Healthcare Variants
  {
    id: 26,
    name: 'Clinical Excellence',
    path: '/variants/clinical',
    description: 'Clean medical white with trust-building blue accents and clinical precision.',
    features: ['Quality Metrics', 'Clinical Design', 'Trust Indicators', 'Medical Blue'],
    color: 'from-blue-500 to-cyan-600'
  },
  {
    id: 27,
    name: 'Wellness Haven',
    path: '/variants/wellness',
    description: 'Soft healing colors with spa-like tranquility and mindfulness elements.',
    features: ['Breathing Widget', 'Spa Colors', 'Zen Elements', 'Healing Focus'],
    color: 'from-teal-500 to-cyan-500'
  },
  {
    id: 28,
    name: 'Medical Innovation',
    path: '/variants/innovation',
    description: 'Modern healthcare tech with subtle animations and futuristic design.',
    features: ['Tech Focus', 'Live Stats', 'AI Elements', 'Future Medicine'],
    color: 'from-indigo-600 to-purple-700'
  },
  {
    id: 29,
    name: 'Healing Garden',
    path: '/variants/healing',
    description: 'Medical professionalism meets botanical serenity with natural elements.',
    features: ['Nature Blend', 'Leaf Animation', 'Garden Theme', 'Healing Green'],
    color: 'from-emerald-500 to-teal-600'
  },
  {
    id: 30,
    name: 'Trust & Care',
    path: '/variants/trust',
    description: 'Warm, approachable medical design emphasizing patient relationships.',
    features: ['Trust Score', 'Warm Colors', 'Patient Focus', 'Care First'],
    color: 'from-amber-500 to-orange-600'
  },
  // Premium Professional Variants
  {
    id: 31,
    name: 'Executive Health',
    path: '/variants/executive',
    description: 'C-suite healthcare aesthetic with dark navy and silver accents.',
    features: ['Executive Portal', 'Navy & Silver', 'VIP Services', 'Business Focus'],
    color: 'from-slate-700 to-slate-900'
  },
  {
    id: 32,
    name: 'Platinum Care',
    path: '/variants/platinum',
    description: 'Ultra-premium silver/white design with elegant shimmer effects.',
    features: ['Diamond Effects', 'Platinum Theme', 'White Glove', 'Luxury Care'],
    color: 'from-gray-300 to-gray-500'
  },
  {
    id: 33,
    name: 'Royal Treatment',
    path: '/variants/royal',
    description: 'Deep purple and gold regal healthcare theme with noble elements.',
    features: ['Royal Purple', 'Gold Accents', 'Crown Icons', 'Regal Design'],
    color: 'from-purple-700 to-yellow-600'
  },
  {
    id: 34,
    name: 'Swiss Precision',
    path: '/variants/swiss',
    description: 'Clean Swiss design principles with red cross accents and precision focus.',
    features: ['Swiss Design', 'Red Cross', 'Precision', 'Minimal Clean'],
    color: 'from-red-600 to-gray-700'
  },
  {
    id: 35,
    name: 'Metropolitan',
    path: '/variants/metropolitan',
    description: 'Urban professional theme with animated skyline and city elements.',
    features: ['City Skyline', 'Urban Theme', 'Day/Night', 'Metro Style'],
    color: 'from-blue-900 to-gray-800'
  },
  // Nature & Wellness Variants
  {
    id: 36,
    name: 'Zen Wellness',
    path: '/variants/zenwellness',
    description: 'Japanese minimalism meets medical professionalism with zen elements.',
    features: ['Zen Circles', 'Cherry Blossoms', 'Mindfulness', 'Japanese Style'],
    color: 'from-pink-400 to-purple-500'
  },
  {
    id: 37,
    name: 'Mountain Retreat',
    path: '/variants/mountain',
    description: 'Alpine wellness theme with misty backgrounds and peak health focus.',
    features: ['Mountain Mist', 'Alpine Theme', 'Peak Health', 'Snow Effects'],
    color: 'from-sky-500 to-slate-600'
  },
  {
    id: 38,
    name: 'Ocean Therapy',
    path: '/variants/ocean',
    description: 'Calming seas with therapeutic blue gradients and wave animations.',
    features: ['Wave Motion', 'Ocean Blues', 'Fish Animation', 'Nautical Theme'],
    color: 'from-blue-400 to-cyan-600'
  },
  {
    id: 39,
    name: 'Forest Medicine',
    path: '/variants/forest',
    description: 'Deep forest greens with natural wood textures and organic elements.',
    features: ['Forest Theme', 'Leaf Effects', 'Nature Icons', 'Wood Textures'],
    color: 'from-green-600 to-emerald-700'
  },
  {
    id: 40,
    name: 'Desert Bloom',
    path: '/variants/desertbloom',
    description: 'Sophisticated desert wellness spa aesthetic with luxury elements.',
    features: ['Desert Spa', 'Cactus Bloom', 'Warm Tones', 'Oasis Theme'],
    color: 'from-amber-600 to-rose-600'
  },
  // Modern Professional Variants
  {
    id: 41,
    name: 'Architect',
    path: '/variants/architect',
    description: 'Bauhaus-inspired medical design with geometric precision and structure.',
    features: ['Grid Design', 'Bauhaus Style', 'Geometric', 'Blueprint Feel'],
    color: 'from-red-600 to-blue-600'
  },
  {
    id: 42,
    name: 'Editorial',
    path: '/variants/editorial',
    description: 'Magazine-style layout with professional photography focus.',
    features: ['Magazine Layout', 'Editorial Style', 'Photo Essays', 'Typography'],
    color: 'from-gray-800 to-red-800'
  },
  {
    id: 43,
    name: 'Monochrome Elite',
    path: '/variants/monochrome',
    description: 'Black/white/gray palette with emerald green as single accent color.',
    features: ['B&W Design', 'Green Accent', 'Minimalist', 'Elite Style'],
    color: 'from-gray-900 to-emerald-600'
  },
  {
    id: 44,
    name: 'Scandinavian Health',
    path: '/variants/scandinavian',
    description: 'Nordic minimalism with hygge elements and cozy healthcare feel.',
    features: ['Nordic Design', 'Hygge Elements', 'Soft Palette', 'Cozy Health'],
    color: 'from-blue-400 to-gray-500'
  },
  {
    id: 45,
    name: 'Gallery',
    path: '/variants/gallery',
    description: 'Art gallery aesthetic presenting healthcare as curated experience.',
    features: ['Gallery Style', 'Art Frames', 'Museum Feel', 'Curated Care'],
    color: 'from-purple-800 to-gray-700'
  },
  // New Stunning Variants (June 30, 2025)
  {
    id: 46,
    name: 'Bloom',
    path: '/variants/bloom',
    description: 'Flower-focused design with rotating lotus images and petal animations.',
    features: ['Rotating Flowers', 'Petal Effects', 'Garden Theme', 'Bloom Animations'],
    color: 'from-pink-400 to-rose-600'
  },
  {
    id: 47,
    name: 'Serenity',
    path: '/variants/serenity',
    description: 'Calming design with time-based gradients and meditation features.',
    features: ['Time Gradients', 'Ripple Effects', 'Journey Steps', 'Breathing Exercise'],
    color: 'from-teal-400 to-cyan-500'
  },
  {
    id: 48,
    name: 'Vitality',
    path: '/variants/vitality',
    description: 'High-energy design with dynamic particles and performance metrics.',
    features: ['Energy Grid', 'Power Metrics', 'Dynamic Effects', 'Vitality Meter'],
    color: 'from-orange-500 to-red-600'
  },
  {
    id: 49,
    name: 'Harmony',
    path: '/variants/harmony',
    description: 'Balance-focused design with wellness wheel and interactive elements.',
    features: ['Wellness Wheel', 'Balance Theme', 'Mandala Effects', 'Mind-Body-Spirit'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 50,
    name: 'Radiance',
    path: '/variants/radiance',
    description: 'Light-infused design with sparkle effects and time-based color transitions.',
    features: ['Light Rays', 'Sparkle Effects', 'Light Spectrum', 'Glow Animations'],
    color: 'from-amber-400 to-orange-500'
  },
  {
    id: 51,
    name: 'Tranquility',
    path: '/variants/tranquility',
    description: 'Peaceful water theme with ripple effects and flowing animations.',
    features: ['Water Ripples', 'Koi Fish', 'Reflection Effects', 'Zen Water'],
    color: 'from-blue-400 to-teal-500'
  },
  {
    id: 52,
    name: 'Genesis',
    path: '/variants/genesis',
    description: 'Creation theme with growing animations and life-giving elements.',
    features: ['Growth Animation', 'DNA Helix', 'Life Particles', 'Creation Effects'],
    color: 'from-green-500 to-emerald-600'
  },
  {
    id: 53,
    name: 'Aurora',
    path: '/variants/aurora',
    description: 'Northern lights theme with flowing color waves and celestial beauty.',
    features: ['Aurora Waves', 'Color Flows', 'Nordic Style', 'Sky Animation'],
    color: 'from-indigo-500 to-purple-600'
  },
  {
    id: 54,
    name: 'Quantum',
    path: '/variants/quantum',
    description: 'Scientific theme with molecular structures and particle physics.',
    features: ['Atom Animation', 'Quantum Grid', 'Science UI', 'Energy Fields'],
    color: 'from-cyan-500 to-blue-700'
  },
  {
    id: 55,
    name: 'Phoenix',
    path: '/variants/phoenix',
    description: 'Rebirth theme with fire effects and transformation animations.',
    features: ['Fire Effects', 'Rising Animation', 'Rebirth Theme', 'Flame Particles'],
    color: 'from-red-500 to-orange-600'
  },
  {
    id: 56,
    name: 'Crystal',
    path: '/variants/crystal',
    description: 'Gem theme with prismatic effects and crystalline structures.',
    features: ['Crystal Shards', 'Prism Effects', 'Gem Colors', 'Refraction'],
    color: 'from-purple-400 to-pink-500'
  },
  {
    id: 57,
    name: 'Nebula',
    path: '/variants/nebula',
    description: 'Deep space theme with cosmic clouds and stellar formations.',
    features: ['Space Clouds', 'Star Formation', 'Cosmic Colors', 'Galaxy Effects'],
    color: 'from-purple-600 to-indigo-800'
  },
  {
    id: 58,
    name: 'Sanctuary',
    path: '/variants/sanctuary',
    description: 'Sacred space theme with temple aesthetics and peaceful elements.',
    features: ['Temple Design', 'Sacred Geometry', 'Peaceful Aura', 'Holy Light'],
    color: 'from-amber-500 to-yellow-600'
  },
  {
    id: 59,
    name: 'Momentum',
    path: '/variants/momentum',
    description: 'Movement theme with flowing transitions and dynamic energy.',
    features: ['Flow Lines', 'Motion Blur', 'Speed Effects', 'Dynamic UI'],
    color: 'from-blue-500 to-purple-600'
  },
  {
    id: 60,
    name: 'Eclipse',
    path: '/variants/eclipse',
    description: 'Light and shadow theme with eclipse animations and contrast.',
    features: ['Eclipse Effect', 'Shadow Play', 'Day/Night', 'Corona Glow'],
    color: 'from-gray-800 to-orange-500'
  },
  {
    id: 61,
    name: 'Fusion',
    path: '/variants/fusion',
    description: 'Energy merger theme with combining elements and power synthesis.',
    features: ['Energy Merge', 'Fusion Core', 'Power Combine', 'Synergy Effects'],
    color: 'from-red-500 to-purple-600'
  },
  {
    id: 62,
    name: 'Oasis',
    path: '/variants/oasis',
    description: 'Desert bloom theme with mirage effects and hidden paradise.',
    features: ['Mirage Effect', 'Palm Trees', 'Water Shimmer', 'Desert Bloom'],
    color: 'from-yellow-500 to-teal-500'
  },
  {
    id: 63,
    name: 'Prism',
    path: '/variants/prism',
    description: 'Light refraction theme with rainbow spectrums and color splits.',
    features: ['Rainbow Split', 'Light Refract', 'Color Spectrum', 'Prism Effects'],
    color: 'from-red-500 via-yellow-500 to-blue-500'
  },
  {
    id: 64,
    name: 'Zenith',
    path: '/variants/zenith',
    description: 'Peak performance theme with summit imagery and achievement focus.',
    features: ['Mountain Peak', 'Summit View', 'Achievement UI', 'Elevation Map'],
    color: 'from-slate-600 to-sky-600'
  },
  {
    id: 65,
    name: 'Lumina',
    path: '/variants/lumina',
    description: 'Bioluminescence theme with glowing organisms and deep sea magic.',
    features: ['Bio Glow', 'Deep Sea', 'Living Light', 'Luminescent'],
    color: 'from-cyan-400 to-blue-600'
  },
  {
    id: 66,
    name: 'Cascade',
    path: '/variants/cascade',
    description: 'Waterfall theme with flowing animations and cascading elements.',
    features: ['Waterfall', 'Flow Animation', 'Cascade Effect', 'Water Power'],
    color: 'from-blue-400 to-cyan-600'
  },
  {
    id: 67,
    name: 'Infinity',
    path: '/variants/infinity',
    description: 'Endless possibilities theme with fractal patterns and infinite loops.',
    features: ['Fractal Design', 'Infinite Loop', 'Endless Pattern', 'Möbius Strip'],
    color: 'from-purple-500 to-indigo-600'
  },
  {
    id: 68,
    name: 'Solstice',
    path: '/variants/solstice',
    description: 'Seasonal transition theme with summer/winter duality.',
    features: ['Season Change', 'Sun/Moon', 'Equinox Effect', 'Time Cycles'],
    color: 'from-orange-500 to-blue-500'
  },
  {
    id: 69,
    name: 'Renaissance',
    path: '/variants/renaissance',
    description: 'Artistic rebirth theme with classical elements and golden ratio.',
    features: ['Classical Art', 'Golden Ratio', 'Fresco Style', 'Art History'],
    color: 'from-amber-600 to-red-700'
  },
  {
    id: 70,
    name: 'Ascension',
    path: '/variants/ascension',
    description: 'Elevation theme with rising animations and upward momentum.',
    features: ['Rising Motion', 'Levitation', 'Upward Flow', 'Ascent Path'],
    color: 'from-indigo-500 to-purple-700'
  },
  // NEW: Lotus-Themed Variants Collection (June 30, 2025)
  {
    id: 71,
    name: 'Lotus Awakening',
    path: '/variants/lotusawakening',
    description: 'Dawn/sunrise theme with lotus blooming animations and golden hour colors.',
    features: ['Dawn Transition', 'Light Particles', 'Time-based UI', 'Sunrise Colors'],
    color: 'from-orange-400 to-pink-500'
  },
  {
    id: 72,
    name: 'Lotus Reflection',
    path: '/variants/lotusreflection',
    description: 'Mirror/water reflection theme with serene pond aesthetics and ripple effects.',
    features: ['Water Ripples', 'Mirror Effects', 'Calm Waters', 'Reflection UI'],
    color: 'from-cyan-400 to-blue-500'
  },
  {
    id: 73,
    name: 'Sacred Lotus',
    path: '/variants/sacredlotus',
    description: 'Spiritual/temple theme with Buddhist/Hindu elements and sacred geometry.',
    features: ['Sacred Geometry', 'Chakra Colors', 'Mandala Patterns', 'Spiritual Symbols'],
    color: 'from-orange-500 to-red-600'
  },
  {
    id: 74,
    name: 'Lotus Dreams',
    path: '/variants/lotusdreams',
    description: 'Ethereal/dreamy theme with soft pastels and floating elements.',
    features: ['Dream Particles', 'Soft Blur', 'Pastel Colors', 'Floating Elements'],
    color: 'from-purple-300 to-pink-400'
  },
  {
    id: 75,
    name: 'Lotus Mandala',
    path: '/variants/lotusmandala',
    description: 'Geometric mandala patterns with rotational symmetries and sacred geometry.',
    features: ['Rotating Mandala', 'Sacred Patterns', 'Geometric Art', 'Dynamic Canvas'],
    color: 'from-purple-500 to-pink-600'
  },
  {
    id: 76,
    name: 'Lotus Purification',
    path: '/variants/lotuspurification',
    description: 'Clean/pure theme emphasizing the lotus\'s symbolism of rising from mud.',
    features: ['Purity Meter', 'Cleansing Rays', 'White Theme', 'Pure Elements'],
    color: 'from-blue-300 to-cyan-400'
  },
  {
    id: 77,
    name: 'Lotus Garden',
    path: '/variants/lotusgarden',
    description: 'Traditional Japanese/Chinese garden with koi ponds and stone pathways.',
    features: ['Koi Fish', 'Bamboo Sway', 'Garden Theme', 'Zen Elements'],
    color: 'from-green-400 to-teal-500'
  },
  {
    id: 78,
    name: 'Lotus Meditation',
    path: '/variants/lotusmeditation',
    description: 'Mindfulness theme with breathing exercises and meditation timers.',
    features: ['Breath Timer', 'Meditation UI', 'Mindful Design', 'Calm Colors'],
    color: 'from-indigo-400 to-purple-500'
  },
  {
    id: 79,
    name: 'Lotus Transformation',
    path: '/variants/lotustransformation',
    description: 'Growth/metamorphosis theme showing the journey from seed to bloom.',
    features: ['Growth Stages', 'Transformation UI', 'Progress Meter', 'Stage Evolution'],
    color: 'from-amber-500 to-green-600'
  },
  {
    id: 80,
    name: 'Lotus Wisdom',
    path: '/variants/lotuswisdom',
    description: 'Ancient wisdom theme with scriptural quotes and timeless aesthetics.',
    features: ['Ancient Quotes', 'Wisdom Scrolls', 'Sacred Symbols', 'Timeless Design'],
    color: 'from-amber-600 to-orange-700'
  },
  // NEW: Professional Medical Themes (June 30, 2025)
  {
    id: 81,
    name: 'Clinical Dashboard',
    path: '/variants/clinicaldashboard',
    description: 'Stats-heavy design with patient metrics and treatment outcomes.',
    features: ['Live Metrics', 'Data Cards', 'Performance Stats', 'Activity Feed'],
    color: 'from-blue-600 to-cyan-600'
  },
  {
    id: 82,
    name: 'Medical Journal',
    path: '/variants/medicaljournal',
    description: 'Academic paper aesthetic with research focus and citations.',
    features: ['Research Papers', 'Citations', 'Serif Typography', 'Scholarly Design'],
    color: 'from-gray-700 to-slate-800'
  },
  {
    id: 83,
    name: 'Hospital Grade',
    path: '/variants/hospitalgrade',
    description: 'Ultra-clean clinical design with trust badges and certifications.',
    features: ['Clinical White', 'Trust Badges', 'Safety Protocols', 'Certifications'],
    color: 'from-blue-500 to-blue-700'
  },
  {
    id: 84,
    name: 'Telehealth Focus',
    path: '/variants/telehealth',
    description: 'Video consultation interface with digital-first design.',
    features: ['Video Interface', 'Device Preview', 'Online Booking', 'Digital Tools'],
    color: 'from-purple-600 to-indigo-700'
  },
  {
    id: 85,
    name: 'Wellness Calendar',
    path: '/variants/wellnesscalendar',
    description: 'Calendar-based layout with appointments and health events.',
    features: ['Interactive Calendar', 'Time Slots', 'Seasonal Tips', 'Event Booking'],
    color: 'from-green-500 to-blue-600'
  },
  // NEW: Interactive Variations (June 30, 2025)
  {
    id: 86,
    name: 'FAQ Accordion',
    path: '/variants/faqaccordion',
    description: 'Question-driven homepage with expandable answer sections.',
    features: ['Searchable FAQs', 'Accordion UI', 'Categories', 'Quick Answers'],
    color: 'from-purple-500 to-pink-600'
  },
  {
    id: 87,
    name: 'Service Carousel',
    path: '/variants/servicecarousel',
    description: 'Rotating showcase of treatments with detailed modals.',
    features: ['Auto-Rotate', 'Service Modals', 'Quick Select', 'Treatment Details'],
    color: 'from-orange-500 to-red-600'
  },
  {
    id: 88,
    name: 'Testimonial Stream',
    path: '/variants/testimonialstream',
    description: 'Social media-style feed of patient reviews and ratings.',
    features: ['Social Feed', 'Star Ratings', 'Engagement', 'Filter Options'],
    color: 'from-blue-500 to-purple-600'
  },
  {
    id: 89,
    name: 'Before/After Gallery',
    path: '/variants/beforeafter',
    description: 'Interactive comparison sliders for treatment results.',
    features: ['Drag Sliders', 'Case Studies', 'Privacy Focus', 'Results Display'],
    color: 'from-teal-500 to-blue-600'
  },
  {
    id: 90,
    name: 'Pricing Calculator',
    path: '/variants/pricingcalculator',
    description: 'Interactive tool showing membership savings vs traditional care.',
    features: ['Cost Calculator', 'Savings Display', 'Family Plans', 'Comparisons'],
    color: 'from-green-500 to-teal-600'
  },
  // NEW: Visual Storytelling (June 30, 2025)
  {
    id: 91,
    name: 'Day in the Life',
    path: '/variants/dayinthelife',
    description: 'Timeline showing a typical day at the clinic with patient stories.',
    features: ['Time Timeline', 'Patient Stories', 'Animated Clock', 'Daily Journey'],
    color: 'from-amber-500 to-orange-600'
  },
  {
    id: 92,
    name: 'Health Journey Path',
    path: '/variants/healthjourney',
    description: 'Visual roadmap showing patient care progression milestones.',
    features: ['Journey Map', 'Checkpoints', 'Progress Bar', 'Milestone Markers'],
    color: 'from-green-600 to-emerald-700'
  },
  {
    id: 93,
    name: 'Seasonal Wellness',
    path: '/variants/seasonalwellness',
    description: 'Dynamic design that changes based on current season.',
    features: ['Season Effects', 'Weather Display', 'Seasonal Tips', 'Dynamic Colors'],
    color: 'from-blue-500 to-green-600'
  },
  {
    id: 94,
    name: 'Icon-Driven',
    path: '/variants/icondriven',
    description: 'Heavy use of medical icons with minimal text and strong visuals.',
    features: ['Icon Grid', 'Visual Hierarchy', 'Hover Effects', 'Icon Timeline'],
    color: 'from-purple-600 to-pink-700'
  },
  {
    id: 95,
    name: 'Split Personality',
    path: '/variants/splitpersonality',
    description: 'Half traditional/half modern design showing unique approach.',
    features: ['Split Screen', 'Draggable Divider', 'Contrast Styles', 'Toggle Views'],
    color: 'from-gray-600 to-purple-600'
  },
  // NEW: Emotional Connection (June 30, 2025)
  {
    id: 96,
    name: 'Family Focus',
    path: '/variants/familyfocus',
    description: 'Warm design emphasizing multi-generational family care.',
    features: ['Family Icons', 'Warm Colors', 'All Ages', 'Family Stories'],
    color: 'from-orange-500 to-amber-600'
  },
  {
    id: 97,
    name: 'Athletic Performance',
    path: '/variants/athleticperformance',
    description: 'Sports medicine angle with performance metrics and energy.',
    features: ['Performance Stats', 'Athlete Focus', 'Dark Theme', 'Energy Design'],
    color: 'from-blue-600 to-cyan-700'
  },
  {
    id: 98,
    name: 'Senior Care',
    path: '/variants/seniorcare',
    description: 'Accessible design with larger fonts for older patients.',
    features: ['Large Fonts', 'High Contrast', 'Easy Nav', 'Senior Focus'],
    color: 'from-indigo-500 to-purple-600'
  },
  {
    id: 99,
    name: 'Mindfulness Medical',
    path: '/variants/mindfulnessmedical',
    description: 'Meditation-inspired design with breathing exercises.',
    features: ['Breathing Widget', 'Zen Quotes', 'Calm Design', 'Meditation'],
    color: 'from-purple-500 to-teal-600'
  },
  {
    id: 100,
    name: 'Local Vegas',
    path: '/variants/localvegas',
    description: 'Vegas-specific design with desert motifs and community focus.',
    features: ['Vegas Theme', 'Desert Motifs', 'Local Areas', 'Day/Night Mode'],
    color: 'from-red-600 to-orange-700'
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
            100 Modern Design Variants - Click to Explore
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