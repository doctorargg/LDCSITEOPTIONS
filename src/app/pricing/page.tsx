import PricingSection from "@/components/PricingSection";
import Link from 'next/link';

const FaqItem = ({ question, children }: { question: string, children: React.ReactNode }) => (
  <div className="border-b border-gray-200 py-6">
    <h3 className="text-xl font-semibold text-gray-800">{question}</h3>
    <div className="mt-2 text-gray-600 space-y-4">{children}</div>
  </div>
);

const PricingPage = () => {
  return (
    <main>
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-primary-800">Membership Pricing</h1>
          <p className="text-xl text-primary-700 mt-2">Simple, transparent, and affordable pricing for everyone.</p>
        </div>
      </section>

      {/* Reuse the PricingSection component from the homepage */}
      <PricingSection />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Frequently Asked Questions</h2>
          </div>
          <div>
            <FaqItem question="Is Direct Primary Care a form of insurance?">
              <p>No, DPC is not insurance. It is a healthcare model that focuses on the patient-doctor relationship. We recommend (and for some, require) that our members carry at least a high-deductible or catastrophic insurance plan to cover emergencies, hospitalizations, and specialist care.</p>
            </FaqItem>
            <FaqItem question="Do you bill my insurance?">
              <p>We do not bill or contract with any insurance companies. This is how we keep our overhead low and pass the savings on to you. Your monthly membership fee covers all primary care services we provide.</p>
            </FaqItem>
            <FaqItem question="What services are included in the membership fee?">
              <p>Your membership includes unlimited office visits, extended appointment times, direct access to your doctor via phone/text/email, management of chronic conditions, acute care for illnesses, and coordination of your care with specialists. It also includes access to wholesale pricing on labs and medications.</p>
            </FaqItem>
            <FaqItem question="What if I need to see a specialist or go to the hospital?">
              <p>We will coordinate your care with specialists and hospitals to ensure a seamless experience. While your DPC membership does not cover these services, we work to find you the best care at the best price. This is where having a separate insurance plan is important.</p>
            </FaqItem>
             <FaqItem question="Can I join if I have Medicare?">
              <p>Yes, you can join our practice if you have Medicare. However, you will need to sign a waiver declaring that neither you nor your doctor will directly bill Medicare for our services. Medicare will still cover any laboratory testing, imaging, medications, or hospitalizations prescribed by our office.</p>
            </FaqItem>
          </div>
           <div className="text-center mt-12">
            <Link href="/contact" className="bg-primary-500 hover:bg-primary-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 text-lg">
              Have More Questions? Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PricingPage;
