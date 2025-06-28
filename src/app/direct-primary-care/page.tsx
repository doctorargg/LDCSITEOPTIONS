import Link from 'next/link';
import { FaClock, FaComments, FaHandHoldingUsd, FaStethoscope } from 'react-icons/fa';

const BenefitCard = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg text-center">
    <div className="text-primary-500 text-4xl mb-4 inline-block">{icon}</div>
    <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{children}</p>
  </div>
);

const DPCPage = () => {
  return (
    <main>
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-primary-800">What is Direct Primary Care (DPC)?</h1>
          <p className="text-xl text-primary-700 mt-2 max-w-3xl mx-auto">A simple, transparent, and personal approach to healthcare, free from the constraints of insurance.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">How It Works</h2>
            <p className="text-lg text-gray-600 mt-2">It's like a gym membership for your health.</p>
          </div>
          <div className="space-y-6 text-gray-700 text-lg">
            <p>Direct Primary Care (DPC) is an innovative healthcare model that puts the patient-doctor relationship first. Instead of billing insurance companies for every visit and service, patients pay a flat, recurring monthly membership fee directly to their physician. This simple change has a profound impact on the quality of care.</p>
            <p>This model removes the insurance company as the middleman, freeing doctors from the administrative burdens and regulations that often lead to rushed appointments and impersonal care. With DPC, your doctor works for you, not the insurance company.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800">The DPC Difference</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <BenefitCard icon={<FaClock />} title="More Time With Your Doctor">
              Appointments are typically 30-60 minutes long, ensuring all your questions are answered without feeling rushed.
            </BenefitCard>
            <BenefitCard icon={<FaComments />} title="Direct Physician Access">
              Call, text, or email your doctor directly. Get the care you need, when you need it, without the hassle.
            </BenefitCard>
            <BenefitCard icon={<FaHandHoldingUsd />} title="Transparent, Affordable Pricing">
              Your monthly fee covers the vast majority of your primary care needs. No copays, no deductibles, no surprise bills.
            </BenefitCard>
            <BenefitCard icon={<FaStethoscope />} title="Personalized, Proactive Care">
              We focus on long-term health and prevention, not just treating sickness. Your doctor truly knows you and your health history.
            </BenefitCard>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-800">Is DPC Right For You?</h2>
          <p className="text-lg text-gray-600 mt-4 mb-8">DPC is an excellent choice for individuals, families, and businesses looking for higher quality, more convenient, and more affordable healthcare. While DPC is not insurance, it pairs perfectly with a high-deductible plan or health share to cover emergencies and catastrophic events.</p>
          <Link href="/pricing" className="bg-primary-500 hover:bg-primary-600 text-white font-bold py-4 px-8 rounded-lg transition duration-300 text-lg">
            View Our Membership Plans
          </Link>
        </div>
      </section>
    </main>
  );
};

export default DPCPage;
