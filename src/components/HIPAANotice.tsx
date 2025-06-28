import { FaShieldAlt, FaLock, FaExclamationTriangle } from 'react-icons/fa';

interface HIPAANoticeProps {
  variant?: 'full' | 'compact';
  context?: 'form' | 'general';
}

const HIPAANotice: React.FC<HIPAANoticeProps> = ({ variant = 'compact', context = 'general' }) => {
  if (variant === 'compact') {
    return (
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
        <div className="flex items-start">
          <FaShieldAlt className="text-blue-400 mr-3 mt-1 flex-shrink-0" />
          <div className="text-sm">
            <p className="font-semibold text-blue-800 mb-1">HIPAA Privacy Notice</p>
            <p className="text-blue-700">
              {context === 'form' ? (
                <>
                  This form is for general inquiries only. <strong>Do not include any sensitive health information, 
                  medical history, or personal health details.</strong> For medical concerns, please call us directly 
                  or use our secure patient portal.
                </>
              ) : (
                <>
                  We are committed to protecting your privacy and maintaining the confidentiality of your health 
                  information in accordance with HIPAA regulations.
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
      <div className="flex items-center mb-4">
        <FaLock className="text-primary-600 text-2xl mr-3" />
        <h3 className="text-xl font-bold text-gray-800">HIPAA Compliance & Privacy Protection</h3>
      </div>
      
      <div className="space-y-4 text-gray-700">
        <div>
          <h4 className="font-semibold mb-2 flex items-center">
            <FaShieldAlt className="text-primary-500 mr-2" />
            Our Commitment to Your Privacy
          </h4>
          <p>
            Lotus Direct Care is committed to protecting the privacy and security of your personal health 
            information (PHI). We comply with all applicable provisions of the Health Insurance Portability 
            and Accountability Act (HIPAA) and maintain strict policies and procedures to safeguard your information.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">How We Protect Your Information</h4>
          <ul className="space-y-1 ml-4">
            <li>• All electronic communications containing PHI are encrypted</li>
            <li>• Access to patient information is restricted to authorized personnel only</li>
            <li>• Regular security audits and staff training ensure ongoing compliance</li>
            <li>• We use secure, HIPAA-compliant systems for all patient records</li>
            <li>• Physical documents are stored in locked, secure locations</li>
          </ul>
        </div>

        {context === 'form' && (
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
            <div className="flex items-start">
              <FaExclamationTriangle className="text-yellow-400 mr-3 mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold text-yellow-800 mb-1">Important Security Notice</p>
                <p className="text-yellow-700 text-sm">
                  This web form is intended for general inquiries only and is not a secure method for transmitting 
                  protected health information. Please do not include any medical history, symptoms, or other 
                  sensitive health details in your message. For medical concerns or to discuss your health, 
                  please call our office or use the secure patient portal.
                </p>
              </div>
            </div>
          </div>
        )}

        <div>
          <h4 className="font-semibold mb-2">Your Rights Under HIPAA</h4>
          <p className="mb-2">As our patient, you have the right to:</p>
          <ul className="space-y-1 ml-4 text-sm">
            <li>• Request access to your medical records</li>
            <li>• Request corrections to your health information</li>
            <li>• Receive a list of disclosures of your health information</li>
            <li>• Request restrictions on uses and disclosures of your information</li>
            <li>• Choose how we communicate with you about your health</li>
            <li>• File a complaint if you believe your privacy rights have been violated</li>
          </ul>
        </div>

        <div className="text-sm text-gray-600 pt-4 border-t border-gray-200">
          <p>
            For questions about our privacy practices or to request a copy of our full Notice of Privacy Practices, 
            please contact our Privacy Officer at (555) 555-5555 or privacy@lotusdirectcare.com.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HIPAANotice;