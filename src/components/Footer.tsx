import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Image src="/images/LOGOTRANSPARENTFLOWERONLY1.png" alt="Lotus Direct Care" width={150} height={150} />
            <p className="mt-4 text-gray-400">Healthcare Without Barriers: The Way Medicine Should Be.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-primary-400">About Us</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-primary-400">Services</Link></li>
              <li><Link href="/direct-primary-care" className="text-gray-400 hover:text-primary-400">Direct Primary Care</Link></li>
              <li><Link href="/pricing" className="text-gray-400 hover:text-primary-400">Pricing</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-primary-400">Blog</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-primary-400">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="w-6 text-primary-400">📍</span>
                <span>123 Main Street<br />Suite 100<br />Anytown, USA 12345</span>
              </li>
              <li className="flex items-center">
                <span className="w-6 text-primary-400">📞</span>
                <a href="tel:123-456-7890" className="hover:text-primary-400">123-456-7890</a>
              </li>
              <li className="flex items-center">
                <span className="w-6 text-primary-400">📧</span>
                <a href="mailto:info@lotusdirectcare.com" className="hover:text-primary-400">info@lotusdirectcare.com</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 mb-4 md:mb-0">&copy; {new Date().getFullYear()} Lotus Direct Care. All Rights Reserved.</p>
            <div className="flex space-x-6 text-sm">
              <Link href="/hipaa" className="text-gray-400 hover:text-primary-400">HIPAA Privacy</Link>
              <Link href="/terms" className="text-gray-400 hover:text-primary-400">Terms of Service</Link>
              <Link href="/privacy" className="text-gray-400 hover:text-primary-400">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
