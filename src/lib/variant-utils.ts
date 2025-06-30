// Shared utilities for all variants
export const variantConfig = {
  // Common navigation items
  navigation: {
    services: [
      { name: 'Direct Primary Care', href: '/direct-primary-care' },
      { name: 'Functional Medicine', href: '/functional-medicine' },
      { name: 'Ketamine Therapy', href: '/ketamine-therapy' },
      { name: 'PRP Injections', href: '/prp-injections' },
      { name: 'Addiction Treatment', href: '/addiction-treatment' },
    ],
    main: [
      { name: 'About', href: '/about' },
      { name: 'Services', href: '/services' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contact', href: '/contact' },
    ],
  },
  
  // Contact information
  contact: {
    phone: '(424) 544-9007',
    email: 'info@lotusdirectcare.com',
    address: '1450 2nd St, Santa Monica, CA 90401',
    hours: 'Mon-Fri: 8:00 AM - 5:00 PM',
  },
  
  // External links
  external: {
    booking: 'https://app.elationemr.com/book/lotusdirectcare/',
    membership: 'https://lotusdirectcare.hint.com/signup/',
  },
  
  // SEO defaults
  seo: {
    siteName: 'Lotus Direct Care',
    defaultDescription: 'Experience personalized healthcare with Lotus Direct Care. Offering Direct Primary Care, functional medicine, and specialized treatments in Santa Monica.',
    defaultKeywords: 'direct primary care, functional medicine, ketamine therapy, PRP injections, addiction treatment, Santa Monica healthcare',
  },
};

// Common animation variants
export const animations = {
  fadeIn: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  },
  slideIn: {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.8 },
  },
  scaleIn: {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.5 },
  },
};

// Design tokens for professional variants
export const designTokens = {
  medical: {
    primary: '#0066CC',
    secondary: '#00A3E0',
    accent: '#40C4AA',
    neutral: '#F7F9FB',
    text: '#1A1A1A',
  },
  premium: {
    primary: '#1A1A1A',
    secondary: '#C9A961',
    accent: '#E5E5E5',
    neutral: '#FAFAFA',
    text: '#2C2C2C',
  },
  nature: {
    primary: '#2D5A3D',
    secondary: '#7CB342',
    accent: '#A8D5BA',
    neutral: '#F5F7F5',
    text: '#1F3A28',
  },
  modern: {
    primary: '#2E3A4B',
    secondary: '#4A90E2',
    accent: '#F5A623',
    neutral: '#F8F9FA',
    text: '#212529',
  },
};

// Helper function to get variant config
export const getVariantConfig = () => variantConfig;

// Helper function to get image path
export const getImagePath = (imageName: string) => `/images/${imageName}`;