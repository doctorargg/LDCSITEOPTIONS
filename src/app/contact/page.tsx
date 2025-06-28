"use client";

import { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaLock } from 'react-icons/fa';
import HIPAANotice from '@/components/HIPAANotice';

const ContactInfo = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
  <div className="flex items-start">
    <div className="text-primary-500 text-2xl mr-4 mt-1">{icon}</div>
    <div>
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      <div className="text-gray-600">{children}</div>
    </div>
  </div>
);

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ submitting: false, message: '', success: false });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ submitting: true, message: '', success: false });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({ submitting: false, message: 'Thank you! Your message has been sent.', success: true });
        setFormData({ name: '', email: '', message: '' }); // Clear form
      } else {
        setStatus({ submitting: false, message: data.message || 'An error occurred.', success: false });
      }
    } catch (error) {
      setStatus({ submitting: false, message: 'An unexpected error occurred. Please try again.', success: false });
    }
  };

  return (
    <main>
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-primary-800">Contact Us</h1>
          <p className="text-xl text-primary-700 mt-2">We're here to help. Reach out with any questions or to schedule a visit.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
              
              {/* HIPAA Notice */}
              <div className="mb-6">
                <HIPAANotice variant="compact" context="form" />
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-lg font-medium text-gray-700">Full Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Your Name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email Address</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="you@example.com" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-lg font-medium text-gray-700">
                    Message <span className="text-sm font-normal text-gray-500">(General inquiries only)</span>
                  </label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={5} 
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500" 
                    placeholder="How can we help you today? (Remember: no medical information please)"
                  ></textarea>
                  <p className="mt-2 text-sm text-red-600 flex items-center">
                    <FaLock className="mr-1" />
                    Do not include any medical history, symptoms, or personal health information
                  </p>
                </div>
                <div>
                  <button type="submit" disabled={status.submitting} className="w-full bg-primary-500 hover:bg-primary-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 text-lg disabled:bg-gray-400">
                    {status.submitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
                {status.message && (
                  <div className={`text-center p-3 rounded-md ${status.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {status.message}
                  </div>
                )}
              </form>
            </div>

            {/* Contact Details & Map */}
            <div className="space-y-8">
              <ContactInfo icon={<FaMapMarkerAlt />} title="Our Location">
                <p>123 Health St, Suite 100</p>
                <p>Wellness City, ST 12345</p>
              </ContactInfo>
              <ContactInfo icon={<FaPhone />} title="Phone">
                <a href="tel:555-555-5555" className="hover:underline">(555) 555-5555</a>
              </ContactInfo>
              <ContactInfo icon={<FaEnvelope />} title="Email">
                <a href="mailto:contact@lotusdirectcare.com" className="hover:underline">contact@lotusdirectcare.com</a>
              </ContactInfo>
              
              <div className="mt-8">
                 <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                   <iframe 
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.617143969954!2d-73.9878440845937!3d40.74844097932809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e196e1a5a6a6!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1616161616161"
                     width="100%"
                     height="100%"
                     style={{ border: 0 }}
                     allowFullScreen={true}
                     loading="lazy"
                     title="Google Maps Location"
                   ></iframe>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
