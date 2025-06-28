import Link from 'next/link';
import { FaSeedling, FaUserCheck, FaBalanceScale, FaBrain } from 'react-icons/fa';

const PrincipleCard = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg text-center">
    <div className="text-accent-500 text-4xl mb-4 inline-block">{icon}</div>
    <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{children}</p>
  </div>
);

const FunctionalMedicinePage = () => {
  return (
    <main>
      <section className="py-16 bg-accent-50">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-accent-800">What is Functional Medicine?</h1>
          <p className="text-xl text-accent-700 mt-2 max-w-3xl mx-auto">A patient-centered approach to healthcare that looks beyond symptoms to identify and address the root cause of disease.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Beyond Symptom Management</h2>
            <p className="text-lg text-gray-700 mt-2">Functional Medicine views the body as one integrated system, not a collection of independent organs. It treats the whole system, not just the symptoms.</p>
          </div>
          <div className="space-y-6 text-gray-700 text-lg">
            <p>While conventional medicine is excellent at treating acute problems like a broken arm or a heart attack, it often falls short in addressing chronic, complex diseases. The typical approach is to prescribe a medication for a specific symptom, which can be a bit like taking the battery out of a smoke alarm without looking for the fire.</p>
            <p>Functional Medicine is different. It's a science-based, investigative approach that asks 'Why?' instead of just 'What?'. Why is this person experiencing these symptoms? What is the underlying imbalance or dysfunction? By understanding the root cause, we can create a personalized therapeutic plan that helps restore health and improve function.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800">The Core Principles</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <PrincipleCard icon={<FaUserCheck />} title="Patient-Centered Care">
              We treat the patient, not the disease. Your unique history, genetics, and lifestyle are all part of the story.
            </PrincipleCard>
            <PrincipleCard icon={<FaSeedling />} title="Root Cause Resolution">
              We seek to identify and address the underlying causes of disease, rather than merely suppressing symptoms.
            </PrincipleCard>
            <PrincipleCard icon={<FaBalanceScale />} title="Health as Positive Vitality">
              Functional medicine is not just the absence of disease, but a state of immense vitality and well-being.
            </PrincipleCard>
            <PrincipleCard icon={<FaBrain />} title="Mind-Body Connection">
              We recognize that emotional, spiritual, and mental health are all deeply connected to physical health.
            </PrincipleCard>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-800">Ready to Explore a Deeper Level of Health?</h2>
          <p className="text-lg text-gray-600 mt-4 mb-8">If you're tired of symptom-chasing and ready to find real answers, functional medicine may be the right path for you.</p>
          <Link href="/contact" className="bg-primary-500 hover:bg-primary-600 text-white font-bold py-4 px-8 rounded-lg transition duration-300 text-lg">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </main>
  );
};

export default FunctionalMedicinePage;
