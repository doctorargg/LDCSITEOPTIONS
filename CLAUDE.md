# Lotus Direct Care Website - Development Guide

## Project Overview
This is a medical practice website for Lotus Direct Care, offering Direct Primary Care, functional medicine, and specialized treatments. The project has been successfully migrated from a static HTML site to a modern Next.js application.

## Current State
- **Static HTML Version**: Original site preserved in `new_site/` folder for reference
- **Next.js Version**: Fully migrated with all services, dynamic blog system, and HIPAA compliance features

## Technology Stack
- Next.js 14.2.3
- React 18
- TypeScript
- Tailwind CSS
- React Icons

## Completed Features

### Service Pages Migrated:
✅ Ketamine Therapy (`/ketamine-therapy`)
✅ PRP Injections (`/prp-injections`)
✅ Addiction/Suboxone Treatment (`/addiction-treatment`)
✅ Functional Medicine (`/functional-medicine`)
✅ Direct Primary Care (`/direct-primary-care`)

### Technical Enhancements Implemented:
✅ SEO optimization with Next.js metadata API for all pages
✅ Image optimization using Next.js Image component
✅ HIPAA-compliant contact form with PHI detection
✅ Dynamic blog system with markdown support
✅ Responsive navigation with services dropdown
✅ Security headers in API routes
✅ Dedicated HIPAA privacy page
✅ TypeScript throughout the application

## Implementation Phases

### Phase 1: Complete Service Pages Migration
- Create ketamine-therapy page with proper routing
- Create prp-injections page with proper routing
- Create addiction-treatment page with proper routing
- Update navigation to include all services
- Ensure content parity with static version

### Phase 2: Technical Enhancements
- Implement SEO with Next.js metadata API
- Set up proper image optimization
- Add form validation and HIPAA compliance notes
- Create reusable components for common patterns
- Add proper TypeScript types

### Phase 3: Content Management
- Set up blog with markdown/MDX support
- Create dynamic routing for blog posts
- Implement search functionality
- Consider CMS integration

### Phase 4: Production Ready
- Performance testing and optimization
- Accessibility audit (WCAG compliance)
- Security review (especially for PHI handling)
- Deployment configuration
- Environment variables setup

## Key Considerations

### HIPAA Compliance
- Contact form currently logs to console - needs secure backend
- No PHI should be stored in logs or client-side
- All form submissions need encryption
- Consider BAA-compliant services for form handling

### Performance
- Images need optimization (WebP format, lazy loading)
- Implement proper caching strategies
- Minimize JavaScript bundle size
- Use dynamic imports where appropriate

### SEO
- Add meta tags for all pages
- Implement Open Graph tags
- Create XML sitemap
- Add robots.txt
- Implement structured data

## External Integrations
- Appointment booking: https://app.elationemr.com/book/lotusdirectcare/
- Membership signup: https://lotusdirectcare.hint.com/signup/

## Testing Commands
```bash
npm run dev    # Development server
npm run build  # Production build
npm run lint   # Linting
```

## GitHub Repository
- Repository URL: https://github.com/doctorargg/LDCSITE2025
- GitHub Token: [Stored securely - not in repository]

## Website Variants Created (June 28, 2025)

✅ **25 Modern Design Variants Created** - Each with unique UI, features, and aesthetics:

### Variant Locations:
1. **Minimalist** - `/mnt/c/Users/docro/OneDrive/2025 Personal/lotus_variant_1_minimalist`
   - Clean monochromatic design, dark mode toggle, mega menu navigation
2. **Glassmorphism** - `/mnt/c/Users/docro/OneDrive/2025 Personal/lotus_variant_2_glassmorphism`
   - Frosted glass effects, gradient backgrounds, particle animations
3. **Retro-futuristic** - `/mnt/c/Users/docro/OneDrive/2025 Personal/lotus_variant_3_retrofuturistic`
   - 80s synthwave aesthetic, neon colors, glitch effects, matrix rain
4. **Organic** - `/mnt/c/Users/docro/OneDrive/2025 Personal/lotus_variant_4_organic`
   - Nature-inspired, earth tones, seasonal themes, ambient sounds
5. **Luxury** - `/mnt/c/Users/docro/OneDrive/2025 Personal/lotus_variant_5_luxury`
   - Premium gold/black aesthetic, elegant typography, VIP portal
6. **Cyberpunk** - `/mnt/c/Users/docro/OneDrive/2025 Personal/lotus_variant_6_cyberpunk`
   - Tech/neural theme, electric neon colors, HUD interfaces
7. **Artistic** - `/mnt/c/Users/docro/OneDrive/2025 Personal/lotus_variant_7_artistic`
   - Creative paint/canvas theme, vibrant colors, hand-drawn elements
8. **Zen** - `/mnt/c/Users/docro/OneDrive/2025 Personal/lotus_variant_8_zen`
   - Meditative design, chakra colors, meditation timer, ambient sounds
9. **Sports** - `/mnt/c/Users/docro/OneDrive/2025 Personal/lotus_variant_9_sports`
   - Athletic theme, performance dashboards, workout timers
10. **Corporate** - `/mnt/c/Users/docro/OneDrive/2025 Personal/lotus_variant_10_corporate`
    - Professional business aesthetic, executive styling, dashboard layouts
11. **Botanical** - `/src/app/variants/botanical/page.tsx`
    - Garden theme with floating leaves, flower icons, and nature animations
12. **Cosmic** - `/src/app/variants/cosmic/page.tsx`
    - Space theme with starfield, floating planets, and nebula effects
13. **Aquatic** - `/src/app/variants/aquatic/page.tsx`
    - Ocean theme with bubbles, waves, and marine life animations
14. **Victorian** - `/src/app/variants/victorian/page.tsx`
    - Vintage theme with ornate decorations and elegant typography
15. **Tech/AI** - `/src/app/variants/tech/page.tsx`
    - Futuristic theme with circuit patterns and data streams
16. **Desert** - `/src/app/variants/desert/page.tsx`
    - Desert oasis theme with sand dunes and warm sunset colors
17. **Sakura** - `/src/app/variants/sakura/page.tsx`
    - Japanese theme with cherry blossoms and zen elements
18. **Nordic** - `/src/app/variants/nordic/page.tsx`
    - Scandinavian theme with northern lights and hygge elements
19. **Industrial** - `/src/app/variants/industrial/page.tsx`
    - Urban theme with metal textures and industrial elements
20. **Fantasy** - `/src/app/variants/fantasy/page.tsx`
    - Magical theme with crystals, sparkles, and mystical elements
21. **Art Deco** - `/src/app/variants/artdeco/page.tsx`
    - 1920s luxury theme with geometric patterns and golden accents
22. **Mediterranean** - `/src/app/variants/mediterranean/page.tsx`
    - Coastal theme with blue/white colors and villa elements
23. **Steampunk** - `/src/app/variants/steampunk/page.tsx`
    - Victorian-tech theme with brass elements and steam effects
24. **Ethereal** - `/src/app/variants/ethereal/page.tsx`
    - Crystal theme with prismatic effects and light beams
25. **Safari** - `/src/app/variants/safari/page.tsx`
    - Adventure theme with earth tones and wildlife elements
13. **Modern Medical** - `/mnt/c/Users/docro/OneDrive/2025 Personal/lotus_all_variants/src/app/variants/medical/page.tsx`
    - Clinical white design with medical iconography and trust indicators
14. **Eco-Friendly** - `/mnt/c/Users/docro/OneDrive/2025 Personal/lotus_all_variants/src/app/variants/eco/page.tsx`
    - Sustainable green theme with recycling motifs and environmental focus
15. **Tech/AI** - `/mnt/c/Users/docro/OneDrive/2025 Personal/lotus_all_variants/src/app/variants/tech/page.tsx`
    - Futuristic AI theme with circuit patterns, neural networks, and holographic effects

### Common Features Across All Variants:
- ✅ All original functionality preserved (HIPAA compliance, blog system, contact forms)
- ✅ Images properly configured and displaying
- ✅ Responsive design maintained
- ✅ SEO optimization intact
- ✅ TypeScript throughout
- ✅ Ready to run with `npm run dev`

### Image Fix Applied:
- ✅ Created missing `/public` directory structure
- ✅ Moved all images from `new_site/images/` to `public/images/`
- ✅ Fixed BlogPreviewSection placeholder images
- ✅ Updated deprecated Next.js Image component props

## Previous Work Summary
If continuing from a new Claude Code session, the following major tasks were completed:
1. **Website Variant Creation** - 10 unique modern designs with different aesthetics
2. **Image Display Fix** - Resolved missing public directory and image path issues
3. **Claude Installation Relocation** - Moved to `/mnt/c/Users/docro/Development/claude/installation/`

## Notes
- Dr. Aaron Rosenberg is the primary physician
- Focus on Direct Primary Care model benefits
- Emphasize personalized care and accessibility
- Maintain professional medical website standards