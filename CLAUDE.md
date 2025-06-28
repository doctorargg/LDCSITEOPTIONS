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

## Notes
- Dr. Aaron Rosenberg is the primary physician
- Focus on Direct Primary Care model benefits
- Emphasize personalized care and accessibility
- Maintain professional medical website standards