import { Metadata } from 'next';
import HIPAANotice from '@/components/HIPAANotice';
import { FaShieldAlt, FaLock, FaUserShield, FaFileContract } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'HIPAA Privacy & Security | Lotus Direct Care',
  description: 'Learn about our commitment to protecting your health information privacy and security in accordance with HIPAA regulations.',
  keywords: ['HIPAA', 'privacy', 'security', 'health information', 'patient rights', 'confidentiality'],
};

const SecurityFeature = ({ icon, title, description }: { 
  icon: React.ReactNode, 
  title: string, 
  description: string 
}) => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <div className="flex items-center mb-4">
      <div className="text-primary-600 text-3xl mr-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
    </div>
    <p className="text-gray-600">{description}</p>
  </div>
);

const HIPAAPage = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-primary-800 mb-4">HIPAA Privacy & Security</h1>
          <p className="text-xl text-primary-700 max-w-3xl mx-auto">
            Your privacy is our priority. Learn how we protect your health information and respect your rights.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <HIPAANotice variant="full" />
            
            {/* Security Measures */}
            <div className="mt-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">How We Safeguard Your Information</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <SecurityFeature 
                  icon={<FaLock />}
                  title="Physical Security"
                  description="All paper records are stored in locked cabinets within secure areas. Access to our facilities is restricted and monitored 24/7."
                />
                <SecurityFeature 
                  icon={<FaShieldAlt />}
                  title="Technical Safeguards"
                  description="We use encryption, firewalls, and secure servers to protect electronic health information. All systems are regularly updated and monitored."
                />
                <SecurityFeature 
                  icon={<FaUserShield />}
                  title="Administrative Controls"
                  description="Staff undergo regular HIPAA training and background checks. Access to patient information is role-based and logged for audit purposes."
                />
                <SecurityFeature 
                  icon={<FaFileContract />}
                  title="Business Associates"
                  description="All third-party vendors who handle PHI sign Business Associate Agreements (BAAs) ensuring they maintain the same level of protection."
                />
              </div>
            </div>

            {/* Patient Rights Section */}
            <div className="mt-12 bg-gray-50 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Understanding Your Rights</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-primary-600">Access & Control</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Request copies of your medical records</li>
                    <li>• Ask for corrections to your health information</li>
                    <li>• Request restrictions on how we use your information</li>
                    <li>• Choose how we communicate with you</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-primary-600">Privacy & Transparency</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Receive our Notice of Privacy Practices</li>
                    <li>• Request a list of disclosures we've made</li>
                    <li>• File a complaint without retaliation</li>
                    <li>• Designate someone to act on your behalf</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Breach Notification */}
            <div className="mt-12 bg-blue-50 border-l-4 border-blue-400 p-6 rounded">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Breach Notification Policy</h3>
              <p className="text-blue-700">
                In the unlikely event of a breach affecting your protected health information, we will notify 
                you promptly in accordance with HIPAA requirements. We maintain incident response procedures 
                and regularly test our security measures to prevent breaches.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mt-12 text-center bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Questions About Privacy?</h2>
              <p className="text-gray-600 mb-6">
                Our Privacy Officer is available to answer questions about how we protect your information 
                or to help you exercise your rights under HIPAA.
              </p>
              <div className="space-y-2">
                <p className="font-semibold">Privacy Officer</p>
                <p className="text-gray-600">Phone: (555) 555-5555</p>
                <p className="text-gray-600">Email: privacy@lotusdirectcare.com</p>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  You may also file a complaint with the U.S. Department of Health and Human Services 
                  Office for Civil Rights if you believe your privacy rights have been violated.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HIPAAPage;