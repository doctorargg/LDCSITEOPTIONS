import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { FaPills, FaSyringe, FaBrain, FaChartLine, FaUserMd, FaComments, FaHandsHelping, FaClipboardCheck } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Addiction & Suboxone Treatment | Lotus Direct Care',
  description: 'Compassionate, evidence-based treatment for opioid use disorder using Suboxone and medication-assisted treatment (MAT). Private, judgment-free care.',
  keywords: ['addiction treatment', 'suboxone treatment', 'opioid use disorder', 'medication assisted treatment', 'MAT', 'buprenorphine', 'recovery'],
  openGraph: {
    title: 'Addiction & Suboxone Treatment - Compassionate Recovery Care',
    description: 'Evidence-based treatment for opioid use disorder. Reduce overdose risk by up to 50% with medication-assisted treatment.',
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: 'Addiction Treatment at Lotus Direct Care',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Addiction & Suboxone Treatment | Lotus Direct Care',
    description: 'Compassionate, evidence-based treatment for opioid use disorder in a private, judgment-free environment.',
    images: ['https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=630&q=80'],
  },
};

const FeatureBox = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-full">
    <div className="bg-primary-600 text-white p-6 text-center">
      <div className="text-5xl mb-4">{icon}</div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
      <div className="text-gray-600">{children}</div>
    </div>
  </div>
);

const ProcessStep = ({ number, title, description }: { number: number, title: string, description: string }) => (
  <div className="text-center">
    <div className="flex items-center justify-center w-20 h-20 bg-primary-600 text-white text-2xl font-bold rounded-full mx-auto mb-4">
      {number}
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const CareCard = ({ icon, title, description, features }: { 
  icon: React.ReactNode, 
  title: string, 
  description: string, 
  features: string[] 
}) => (
  <div className="bg-white rounded-lg shadow-md p-6 h-full">
    <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
      <span className="text-primary-600 mr-2">{icon}</span>
      {title}
    </h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <ul className="space-y-2">
      {features.map((feature, index) => (
        <li key={index} className="text-gray-700 text-sm">• {feature}</li>
      ))}
    </ul>
  </div>
);

const AddictionTreatmentPage = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 bg-primary-50">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-transparent opacity-50"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-800 mb-4">Addiction & Suboxone Treatment</h1>
          <p className="text-xl text-primary-700 max-w-3xl mx-auto">
            Compassionate, evidence-based care for opioid use disorder
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">A New Approach to Addiction Recovery</h2>
              <p className="text-gray-600 mb-4">
                At Lotus Direct Care, we understand that addiction is a complex medical condition—not a moral failing or lack of willpower. We offer compassionate, evidence-based treatment for opioid use disorder in a private, judgment-free environment.
              </p>
              <p className="text-gray-600 mb-4">
                Our medication-assisted treatment (MAT) program combines FDA-approved medications like Suboxone (buprenorphine/naloxone) with counseling and support services to address both the physical and psychological aspects of addiction.
              </p>
              <p className="text-gray-600 mb-4">This comprehensive approach has been proven to:</p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• Reduce risk of overdose and death by up to 50%</li>
                <li>• Decrease illicit opioid use</li>
                <li>• Improve treatment retention compared to abstinence-only approaches</li>
                <li>• Enhance quality of life and daily functioning</li>
                <li>• Support long-term recovery and wellness</li>
              </ul>
              <div className="flex flex-wrap gap-4">
                <Link href="https://app.elationemr.com/book/lotusdirectcare/service-locations/933212881617143?appointment_types=" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-primary-500 hover:bg-primary-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
                  Schedule a Consultation
                </Link>
                <a href="#how-it-works" className="border-2 border-primary-500 hover:bg-primary-50 text-primary-600 font-bold py-3 px-6 rounded-lg transition duration-300">
                  Learn How It Works
                </a>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Doctor consulting with patient" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Medication-Assisted Treatment Section */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Understanding Medication-Assisted Treatment</h2>
            <p className="text-xl text-gray-600">How evidence-based medications help manage opioid use disorder</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <FeatureBox icon={<FaPills />} title="Oral Medication Options">
              <p className="mb-3">Suboxone is an FDA-approved medication that combines two active ingredients:</p>
              <ul className="space-y-2 mb-3">
                <li>• <strong>Buprenorphine</strong> - A partial opioid agonist that helps reduce cravings and withdrawal symptoms without producing the full euphoric effects of other opioids</li>
                <li>• <strong>Naloxone</strong> - An opioid antagonist that helps prevent misuse by blocking the effects of other opioids if the medication is misused</li>
              </ul>
              <p>
                This unique combination provides relief from withdrawal and cravings while discouraging misuse, making it an effective tool for recovery.
              </p>
            </FeatureBox>
            
            <FeatureBox icon={<FaSyringe />} title="Injectable Buprenorphine Options">
              <p className="mb-3">We also offer injectable buprenorphine products like Sublocade, which provide several advantages:</p>
              <ul className="space-y-2 mb-3">
                <li>• <strong>Monthly dosing</strong> - A single injection lasts for an entire month, eliminating daily dosing</li>
                <li>• <strong>Improved compliance</strong> - No need to remember daily medication</li>
                <li>• <strong>Steady medication levels</strong> - Provides consistent blood levels without daily peaks and valleys</li>
                <li>• <strong>Reduced diversion risk</strong> - Cannot be removed or diverted after administration</li>
                <li>• <strong>Convenience</strong> - Fewer office visits required for medication administration</li>
              </ul>
              <p>
                Injectable options like Sublocade can be particularly beneficial for patients who struggle with daily medication adherence or who prefer the convenience of monthly treatment.
              </p>
            </FeatureBox>
            
            <FeatureBox icon={<FaBrain />} title="How It Works">
              <p className="mb-3">
                Opioid use disorder changes brain chemistry, creating powerful cravings and withdrawal symptoms that make recovery extremely difficult without medical support.
              </p>
              <p className="mb-3">Buprenorphine medications work by:</p>
              <ul className="space-y-2 mb-3">
                <li>• Binding to the same receptors in the brain as other opioids, but with less intensity</li>
                <li>• Reducing or eliminating withdrawal symptoms</li>
                <li>• Decreasing cravings for opioids</li>
                <li>• Blocking the effects of other opioids, reducing the risk of overdose</li>
                <li>• Allowing the brain to heal and normalize over time</li>
              </ul>
              <p>
                This stabilization helps patients focus on counseling, lifestyle changes, and addressing the underlying issues that contributed to their addiction.
              </p>
            </FeatureBox>
            
            <FeatureBox icon={<FaChartLine />} title="Evidence-Based Results">
              <p className="mb-3">Research consistently shows that medication-assisted treatment with buprenorphine products:</p>
              <ul className="space-y-2 mb-3">
                <li>• Reduces mortality risk by 50% or more</li>
                <li>• Decreases illicit drug use</li>
                <li>• Lowers criminal activity associated with drug seeking</li>
                <li>• Improves birth outcomes among pregnant women with opioid use disorder</li>
                <li>• Increases retention in treatment programs</li>
                <li>• Improves social functioning and quality of life</li>
              </ul>
              <p>
                These outcomes make buprenorphine treatment the gold standard for opioid use disorder care according to the American Society of Addiction Medicine, the CDC, and the World Health Organization.
              </p>
            </FeatureBox>
          </div>
        </div>
      </section>

      {/* Treatment Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Treatment Process</h2>
            <p className="text-xl text-gray-600">A comprehensive approach to recovery</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProcessStep 
              number={1} 
              title="Initial Assessment" 
              description="A thorough evaluation of your medical history, substance use patterns, and treatment goals. We'll determine if Suboxone is appropriate for your specific situation and develop a personalized treatment plan."
            />
            <ProcessStep 
              number={2} 
              title="Induction Phase" 
              description="Beginning Suboxone treatment requires careful timing. We'll guide you through the initial phase, helping you transition from opioids to Suboxone while minimizing withdrawal symptoms and ensuring your comfort and safety."
            />
            <ProcessStep 
              number={3} 
              title="Stabilization" 
              description="Once you're comfortable on Suboxone, we'll fine-tune your dosage to eliminate cravings and withdrawal symptoms while minimizing side effects. This phase typically involves weekly visits initially, then biweekly as you stabilize."
            />
            <ProcessStep 
              number={4} 
              title="Maintenance & Support" 
              description="Long-term treatment includes regular check-ins, counseling, and support services. We'll help you address underlying issues, develop coping strategies, and build a foundation for lasting recovery and wellness."
            />
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
              The length of treatment varies by individual. Some patients benefit from several months of treatment, while others may need longer-term maintenance. We work with you to determine the optimal approach for your unique situation.
            </p>
            <Link href="https://app.elationemr.com/book/lotusdirectcare/service-locations/933212881617143?appointment_types=" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-primary-500 hover:bg-primary-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
              Schedule Your Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Comprehensive Care Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Comprehensive Care Approach</h2>
            <p className="text-xl text-gray-600">Medication is just one part of effective treatment</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <CareCard 
              icon={<FaUserMd />}
              title="Medical Management"
              description="Our medical team provides:"
              features={[
                "Careful medication monitoring and adjustment",
                "Management of side effects",
                "Treatment of co-occurring medical conditions",
                "Regular health assessments",
                "Coordination with specialists when needed"
              ]}
            />
            
            <CareCard 
              icon={<FaComments />}
              title="Counseling & Therapy"
              description="We offer or can refer you to various therapy options:"
              features={[
                "Individual counseling",
                "Group therapy",
                "Cognitive-behavioral therapy (CBT)",
                "Motivational interviewing",
                "Family therapy"
              ]}
            />
            
            <CareCard 
              icon={<FaHandsHelping />}
              title="Support Services"
              description="Recovery involves more than just medical treatment. We connect you with:"
              features={[
                "Peer support groups",
                "Recovery coaching",
                "Community resources",
                "Social services when needed",
                "Educational materials and workshops"
              ]}
            />
            
            <CareCard 
              icon={<FaClipboardCheck />}
              title="Recovery Monitoring"
              description="We track your progress through:"
              features={[
                "Regular check-ins and assessments",
                "Periodic drug testing (as appropriate)",
                "Monitoring of physical and mental health",
                "Adjustment of treatment plans as needed",
                "Celebration of milestones and achievements"
              ]}
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Common questions about Suboxone treatment</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <details className="bg-white rounded-lg shadow-md p-6 group">
                <summary className="font-bold text-gray-800 cursor-pointer list-none flex justify-between items-center">
                  How long will I need to be on Suboxone?
                  <span className="text-primary-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-4 text-gray-600">
                  <p className="mb-3">
                    Treatment duration varies significantly based on individual needs. Some patients benefit from several months of treatment, while others may need longer-term maintenance therapy lasting a year or more.
                  </p>
                  <p className="mb-3">
                    Research shows that longer treatment durations (at least 12 months) are associated with better outcomes. We work with you to determine the optimal approach for your unique situation and support you if and when you decide to taper off medication.
                  </p>
                  <p>
                    The decision to discontinue Suboxone should always be made in consultation with your healthcare provider and never abruptly on your own.
                  </p>
                </div>
              </details>
              
              <details className="bg-white rounded-lg shadow-md p-6 group">
                <summary className="font-bold text-gray-800 cursor-pointer list-none flex justify-between items-center">
                  Is Suboxone just replacing one addiction with another?
                  <span className="text-primary-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-4 text-gray-600">
                  <p className="mb-3">No. This is a common misconception. There's an important distinction between physical dependence and addiction:</p>
                  <ul className="space-y-2 mb-3">
                    <li>• <strong>Physical dependence</strong> means your body has adapted to a medication and will experience withdrawal if it's stopped abruptly. Many medications for chronic conditions (like blood pressure medications) create physical dependence.</li>
                    <li>• <strong>Addiction</strong> involves compulsive drug use despite harmful consequences, with loss of control and negative impacts on daily functioning.</li>
                  </ul>
                  <p className="mb-3">
                    Suboxone treatment may create physical dependence, but it eliminates the destructive behaviors and consequences of addiction. It allows patients to stabilize their lives, rebuild relationships, work productively, and focus on recovery rather than obtaining and using illicit drugs.
                  </p>
                  <p>
                    This is similar to how we view other medications that manage chronic conditions—insulin doesn't cure diabetes, but it allows patients to live normal, healthy lives.
                  </p>
                </div>
              </details>
              
              <details className="bg-white rounded-lg shadow-md p-6 group">
                <summary className="font-bold text-gray-800 cursor-pointer list-none flex justify-between items-center">
                  Will my insurance cover Suboxone treatment?
                  <span className="text-primary-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-4 text-gray-600">
                  <p className="mb-3">Many insurance plans, including Medicaid and Medicare, provide coverage for Suboxone treatment. Coverage details vary by plan, including:</p>
                  <ul className="space-y-1 mb-3">
                    <li>• Prior authorization requirements</li>
                    <li>• Copayment amounts</li>
                    <li>• Quantity limits</li>
                    <li>• Duration of coverage</li>
                  </ul>
                  <p className="mb-3">
                    As a Direct Primary Care practice, we don't bill insurance directly for our services. However, we can provide documentation for you to submit to your insurance for possible reimbursement of medication costs.
                  </p>
                  <p>
                    We also work with patients to find affordable options, including generic formulations and patient assistance programs when available.
                  </p>
                </div>
              </details>
              
              <details className="bg-white rounded-lg shadow-md p-6 group">
                <summary className="font-bold text-gray-800 cursor-pointer list-none flex justify-between items-center">
                  What side effects should I expect with Suboxone?
                  <span className="text-primary-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-4 text-gray-600">
                  <p className="mb-3">Most patients tolerate Suboxone well, especially after the initial adjustment period. Possible side effects include:</p>
                  <ul className="space-y-1 mb-3">
                    <li>• Headache</li>
                    <li>• Nausea or vomiting (usually temporary)</li>
                    <li>• Constipation</li>
                    <li>• Insomnia or sleep disturbances</li>
                    <li>• Sweating</li>
                    <li>• Dry mouth</li>
                  </ul>
                  <p className="mb-3">
                    These side effects are typically mild and often improve over time. We monitor for side effects and can adjust your dosage or provide supportive treatments to help manage them.
                  </p>
                  <p>
                    Serious side effects are rare but can include respiratory depression (especially if combined with other sedatives), allergic reactions, or liver problems. We provide comprehensive education on warning signs and emergency procedures.
                  </p>
                </div>
              </details>
              
              <details className="bg-white rounded-lg shadow-md p-6 group">
                <summary className="font-bold text-gray-800 cursor-pointer list-none flex justify-between items-center">
                  Can I work and drive while taking Suboxone?
                  <span className="text-primary-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-4 text-gray-600">
                  <p className="mb-3">
                    Yes, most patients can work, drive, and function normally while taking Suboxone. Once you're on a stable dose, Suboxone shouldn't cause sedation or impairment.
                  </p>
                  <p className="mb-3">
                    During the initial adjustment period (typically the first few days), you may experience some side effects that could affect your ability to drive or operate machinery. We recommend caution during this time and arranging transportation if needed.
                  </p>
                  <p className="mb-3">
                    Many patients report improved work performance and daily functioning on Suboxone compared to when they were using illicit opioids or experiencing withdrawal symptoms.
                  </p>
                  <p>
                    It's important to note that combining Suboxone with alcohol, benzodiazepines, or other sedatives can cause dangerous impairment and should be avoided.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Take the First Step?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Recovery is possible, and you don't have to do it alone. Our compassionate team is here to support you on your journey to wellness.
          </p>
          <Link href="https://app.elationemr.com/book/lotusdirectcare/service-locations/933212881617143?appointment_types=" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white hover:bg-gray-100 text-primary-600 font-bold py-4 px-8 rounded-lg transition duration-300 text-lg inline-block">
            Schedule a Confidential Consultation
          </Link>
        </div>
      </section>
    </main>
  );
};

export default AddictionTreatmentPage;