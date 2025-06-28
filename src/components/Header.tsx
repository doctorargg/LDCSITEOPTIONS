'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const Header = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src="/images/LOGOTRANSPARENTFLOWERONLY1.png" alt="Lotus Direct Care Logo" width={40} height={40} className="mr-2" />
          <span className="text-xl font-bold text-gray-800">Lotus Direct Care</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6">
          <Link href="/" className="text-gray-600 hover:text-primary-500 font-medium transition duration-300">Home</Link>
          <Link href="/about" className="text-gray-600 hover:text-primary-500 font-medium transition duration-300">About</Link>
          
          {/* Services Dropdown */}
          <div className="relative group">
            <button 
              className="flex items-center text-gray-600 hover:text-primary-500 font-medium transition duration-300"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              Services
              <FaChevronDown className="ml-1 text-sm" />
            </button>
            <div 
              className={`absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 w-64 transition-all duration-200 ${
                isServicesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <Link href="/services" className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition duration-200">
                All Services
              </Link>
              <div className="border-t border-gray-100 my-2"></div>
              <Link href="/ketamine-therapy" className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition duration-200">
                Ketamine Therapy
              </Link>
              <Link href="/prp-injections" className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition duration-200">
                PRP Injections
              </Link>
              <Link href="/addiction-treatment" className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition duration-200">
                Addiction Treatment
              </Link>
              <Link href="/functional-medicine" className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition duration-200">
                Functional Medicine
              </Link>
            </div>
          </div>
          
          <Link href="/direct-primary-care" className="text-gray-600 hover:text-primary-500 font-medium transition duration-300">Direct Primary Care</Link>
          <Link href="/pricing" className="text-gray-600 hover:text-primary-500 font-medium transition duration-300">Pricing</Link>
          <Link href="/blog" className="text-gray-600 hover:text-primary-500 font-medium transition duration-300">Blog</Link>
          <Link href="/contact" className="text-gray-600 hover:text-primary-500 font-medium transition duration-300">Contact</Link>
          <a href="https://app.elationpassport.com/passport/login/" target="_blank" rel="noopener noreferrer" className="bg-primary-500 hover:bg-primary-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
            Patient Portal
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button 
            className="navbar-burger flex items-center text-gray-600 p-3"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
      </nav>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-6 py-4 space-y-4">
            <Link href="/" className="block text-gray-600 hover:text-primary-500 font-medium">Home</Link>
            <Link href="/about" className="block text-gray-600 hover:text-primary-500 font-medium">About</Link>
            <Link href="/services" className="block text-gray-600 hover:text-primary-500 font-medium">Services</Link>
            <div className="pl-4 space-y-2">
              <Link href="/ketamine-therapy" className="block text-gray-500 hover:text-primary-500">Ketamine Therapy</Link>
              <Link href="/prp-injections" className="block text-gray-500 hover:text-primary-500">PRP Injections</Link>
              <Link href="/addiction-treatment" className="block text-gray-500 hover:text-primary-500">Addiction Treatment</Link>
              <Link href="/functional-medicine" className="block text-gray-500 hover:text-primary-500">Functional Medicine</Link>
            </div>
            <Link href="/direct-primary-care" className="block text-gray-600 hover:text-primary-500 font-medium">Direct Primary Care</Link>
            <Link href="/pricing" className="block text-gray-600 hover:text-primary-500 font-medium">Pricing</Link>
            <Link href="/blog" className="block text-gray-600 hover:text-primary-500 font-medium">Blog</Link>
            <Link href="/contact" className="block text-gray-600 hover:text-primary-500 font-medium">Contact</Link>
            <a href="https://app.elationpassport.com/passport/login/" target="_blank" rel="noopener noreferrer" className="block bg-primary-500 hover:bg-primary-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 text-center">
              Patient Portal
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;