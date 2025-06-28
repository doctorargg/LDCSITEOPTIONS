import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate inputs
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'All fields are required.' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    // Check for potential PHI in message (basic check)
    const phiKeywords = [
      'diagnosis', 'symptom', 'medication', 'treatment', 'medical',
      'health condition', 'disease', 'surgery', 'prescription', 'pain',
      'blood', 'infection', 'cancer', 'diabetes', 'heart', 'pregnant'
    ];
    
    const messageLower = message.toLowerCase();
    const containsPotentialPHI = phiKeywords.some(keyword => messageLower.includes(keyword));
    
    if (containsPotentialPHI) {
      console.warn('⚠️ Contact form submission may contain PHI - rejected');
      return NextResponse.json(
        { 
          success: false, 
          message: 'Your message appears to contain medical information. Please call us directly for health-related inquiries.' 
        },
        { status: 400 }
      );
    }

    // --- HIPAA COMPLIANCE NOTE --- //
    // This is a demonstration endpoint. In production:
    // 1. Never log PHI to console or standard logs
    // 2. Use a HIPAA-compliant service with a signed BAA
    // 3. Encrypt all data in transit and at rest
    // 4. Implement audit trails for all data access
    // 5. Use secure, encrypted communication channels
    
    console.log('📧 New Contact Form Submission (Non-PHI)');
    console.log(`Timestamp: ${new Date().toISOString()}`);
    console.log(`From: ${name} <${email}>`);
    console.log('Message length:', message.length, 'characters');
    console.log('------------------------------------');

    // TODO: Implement secure messaging service integration
    // Examples of HIPAA-compliant services:
    // - Twilio SendGrid with HIPAA compliance
    // - AWS SES with proper configuration
    // - Microsoft 365 with HIPAA BAA
    // - Dedicated HIPAA-compliant form services
    
    // For now, just acknowledge receipt
    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your message. We will respond within 1-2 business days.' 
      },
      {
        headers: {
          'X-Content-Type-Options': 'nosniff',
          'X-Frame-Options': 'DENY',
          'X-XSS-Protection': '1; mode=block',
          'Referrer-Policy': 'strict-origin-when-cross-origin',
        },
      }
    );

  } catch (error) {
    console.error('❌ Error in contact API route:', error);
    return NextResponse.json(
      { success: false, message: 'An error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}
