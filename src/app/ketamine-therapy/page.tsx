import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { FaBrain, FaBolt, FaSyncAlt, FaHeartbeat, FaCloudRain, FaShieldAlt, FaFireAlt, FaPills, FaStarOfLife, FaInfoCircle, FaExclamationTriangle } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Ketamine Therapy | Lotus Direct Care',
  description: 'Innovative ketamine therapy for treatment-resistant depression, anxiety, PTSD, and chronic pain. Evidence-based treatment with rapid symptom relief at Lotus Direct Care.',
  keywords: ['ketamine therapy', 'depression treatment', 'anxiety treatment', 'PTSD treatment', 'chronic pain', 'mental health', 'medication assisted treatment'],
  openGraph: {
    title: 'Ketamine Therapy - Innovative Mental Health Treatment',
    description: 'Breakthrough treatment for depression, anxiety, PTSD, and chronic pain. Over 70% of patients experience significant symptom reduction.',
    type: 'website',
    images: [
      {
        url: '/images/ketamine-therapy-hero.png',
        width: 1200,
        height: 630,
        alt: 'Ketamine Therapy at Lotus Direct Care',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ketamine Therapy | Lotus Direct Care',
    description: 'Innovative treatment for treatment-resistant depression, anxiety, PTSD, and chronic pain.',
    images: ['/images/ketamine-therapy-hero.png'],
  },
};

const FeatureBox = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
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

const ConditionCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="bg-white rounded-lg shadow-md p-6 h-full">
    <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
      <span className="text-primary-600 mr-2">{icon}</span>
      {title}
    </h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const KetamineTherapyPage = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 bg-primary-50">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-transparent opacity-50"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-800 mb-4">Ketamine Therapy</h1>
          <p className="text-xl text-primary-700 max-w-3xl mx-auto">
            Innovative treatment for depression, anxiety, PTSD, and chronic pain
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">A New Hope for Treatment-Resistant Conditions</h2>
              <p className="text-gray-600 mb-4">
                Ketamine therapy represents a breakthrough in mental health treatment, offering rapid relief for conditions that haven't responded to traditional therapies. Originally FDA-approved as an anesthetic, ketamine has emerged as a powerful tool in treating depression, anxiety, PTSD, and chronic pain.
              </p>
              <p className="text-gray-600 mb-4">
                At Lotus Direct Care, we provide medically supervised ketamine therapy in a comfortable, supportive environment. Our approach combines the latest evidence-based protocols with personalized care to help you find relief and healing.
              </p>
              <p className="text-gray-600 mb-6">
                Studies show that over 70% of patients experience significant reduction in symptoms, often within hours or days of treatment—compared to weeks or months with traditional antidepressants.
              </p>
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
                src="/images/ketamine-therapy-hero.png" 
                alt="Patient receiving ketamine therapy in comfortable chair" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">How Ketamine Therapy Works</h2>
            <p className="text-xl text-gray-600">Understanding the science behind rapid symptom relief</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <FeatureBox icon={<FaBrain />} title="Neuroplasticity">
              <p className="mb-3">
                Ketamine works differently than traditional antidepressants. Rather than simply adjusting neurotransmitter levels, ketamine promotes neuroplasticity—the brain's ability to form new neural connections.
              </p>
              <p>
                By blocking NMDA receptors and activating AMPA receptors, ketamine triggers a cascade of events that leads to the growth of new synapses and neural pathways, essentially helping the brain "rewire" itself in positive ways.
              </p>
            </FeatureBox>
            <FeatureBox icon={<FaBolt />} title="Rapid Relief">
              <p className="mb-3">
                Unlike traditional antidepressants that can take weeks to work, ketamine often provides relief within hours to days after treatment. This rapid action can be life-changing, especially for those experiencing suicidal thoughts or severe depression.
              </p>
              <p>
                The effects of a single treatment typically last days to weeks, with a series of treatments often providing more sustained relief. Maintenance treatments may be recommended to extend benefits.
              </p>
            </FeatureBox>
            <FeatureBox icon={<FaSyncAlt />} title="Breaking Negative Patterns">
              <p className="mb-3">
                Many mental health conditions involve getting "stuck" in negative thought patterns and emotional responses. Ketamine helps disrupt these patterns, creating a window of opportunity for new perspectives and healing.
              </p>
              <p>
                This neurobiological reset, combined with proper integration support, can help patients develop healthier thought patterns and coping mechanisms.
              </p>
            </FeatureBox>
            <FeatureBox icon={<FaHeartbeat />} title="Anti-inflammatory Effects">
              <p className="mb-3">
                Research suggests that inflammation plays a role in depression and chronic pain. Ketamine has powerful anti-inflammatory properties that may contribute to its effectiveness in treating these conditions.
              </p>
              <p>
                By reducing inflammation in key brain regions and throughout the body, ketamine helps address both the symptoms and potential underlying causes of various conditions.
              </p>
            </FeatureBox>
          </div>
        </div>
      </section>

      {/* Conditions Treated Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Conditions We Treat</h2>
            <p className="text-xl text-gray-600">Ketamine therapy can help with a range of treatment-resistant conditions</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ConditionCard 
              icon={<FaCloudRain />} 
              title="Depression" 
              description="Particularly effective for treatment-resistant depression that hasn't responded to traditional antidepressants. Ketamine can provide rapid relief from depressive symptoms, including suicidal thoughts."
            />
            <ConditionCard 
              icon={<FaBolt />} 
              title="Anxiety Disorders" 
              description="Can help reduce symptoms of generalized anxiety, social anxiety, and panic disorder by disrupting the neurological patterns that contribute to anxious thoughts and feelings."
            />
            <ConditionCard 
              icon={<FaShieldAlt />} 
              title="PTSD" 
              description="Helps process traumatic memories and reduce the emotional charge associated with them. Many patients report significant reduction in flashbacks, nightmares, and hypervigilance."
            />
            <ConditionCard 
              icon={<FaFireAlt />} 
              title="Chronic Pain" 
              description="Effective for various chronic pain conditions by modulating pain signals in the brain and reducing central sensitization. Often helps patients reduce reliance on opioid medications."
            />
            <ConditionCard 
              icon={<FaPills />} 
              title="Substance Use Disorders" 
              description="Can help reduce cravings and address underlying depression or trauma that often accompanies addiction. Particularly promising for alcohol and opioid use disorders."
            />
            <ConditionCard 
              icon={<FaStarOfLife />} 
              title="End-of-Life Distress" 
              description="Provides relief from existential distress, depression, and anxiety in patients with terminal illness, improving quality of life and emotional well-being."
            />
          </div>
        </div>
      </section>

      {/* Treatment Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Treatment Process</h2>
            <p className="text-xl text-gray-600">A comprehensive approach to ketamine therapy</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProcessStep 
              number={1} 
              title="Initial Consultation" 
              description="A thorough evaluation of your medical history, current symptoms, and treatment goals. We'll determine if ketamine therapy is appropriate for your specific situation."
            />
            <ProcessStep 
              number={2} 
              title="Personalized Treatment Plan" 
              description="We develop a customized protocol based on your needs, including dosage, frequency, and number of sessions. We'll also discuss complementary therapies to enhance results."
            />
            <ProcessStep 
              number={3} 
              title="Monitored Treatment Sessions" 
              description="During each session, you'll receive ketamine in a comfortable setting with continuous monitoring by our medical team. Sessions typically last 1-2 hours."
            />
            <ProcessStep 
              number={4} 
              title="Integration & Follow-up" 
              description="We provide support to help you process your experience and integrate insights. Regular follow-ups track your progress and adjust treatment as needed."
            />
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
              Most patients receive an initial series of 4-6 treatments over 2-3 weeks, followed by maintenance sessions as needed. The exact protocol will be tailored to your specific needs and response.
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

      {/* What to Expect Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What to Expect During Treatment</h2>
            <p className="text-xl text-gray-600">Understanding the ketamine therapy experience</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Before Your Session</h3>
              <ul className="space-y-2 text-gray-600 mb-8">
                <li>• Fast for 4 hours before treatment (clear liquids are permitted)</li>
                <li>• Arrange for transportation home, as you cannot drive after treatment</li>
                <li>• Wear comfortable clothing</li>
                <li>• Consider bringing headphones and a playlist of calming music</li>
                <li>• Complete any pre-session questionnaires</li>
              </ul>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4">During Your Session</h3>
              <ul className="space-y-2 text-gray-600 mb-8">
                <li>• You'll be comfortably seated or reclined in a private room</li>
                <li>• Vital signs will be monitored throughout the session</li>
                <li>• The ketamine will be administered via IV, intramuscular injection, or other methods depending on your treatment plan</li>
                <li>• You may experience a sense of dissociation, changes in perception, or a dreamlike state</li>
                <li>• Our medical team will be present to ensure your comfort and safety</li>
                <li>• Sessions typically last 1-2 hours</li>
              </ul>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4">After Your Session</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• You'll spend 30-60 minutes in our recovery area</li>
                <li>• Most effects subside within 1-2 hours after treatment</li>
                <li>• You may feel tired or slightly "foggy" for the remainder of the day</li>
                <li>• Many patients report improved mood and reduced symptoms within hours or days</li>
                <li>• We'll schedule a follow-up to discuss your experience and response</li>
              </ul>
            </div>
            <div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Common Experiences During Treatment</h3>
                <p className="text-gray-600 mb-4">
                  Ketamine therapy can produce a range of experiences that vary from person to person. These may include:
                </p>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>• A feeling of detachment from your body or surroundings</li>
                  <li>• Changes in visual or auditory perception</li>
                  <li>• A sense of floating or weightlessness</li>
                  <li>• Heightened sensory awareness</li>
                  <li>• Emotional release or insights</li>
                  <li>• A sense of peace or connection</li>
                </ul>
                <p className="text-gray-600 mb-6">
                  These experiences are normal and often therapeutic. Our team will guide you through the process and help you interpret and integrate your experience.
                </p>
                
                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded">
                  <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                    <FaInfoCircle className="mr-2 text-blue-400" /> Important Note
                  </h4>
                  <p className="text-gray-700 mb-2">
                    While many patients experience significant improvement after ketamine therapy, results can vary. Some patients may require multiple sessions before noticing benefits, while others may experience immediate relief.
                  </p>
                  <p className="text-gray-700">
                    We closely monitor your response and adjust your treatment plan accordingly to maximize benefits.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Information Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Safety Information</h2>
            <p className="text-xl text-gray-600">What you need to know about ketamine therapy</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Medical Supervision</h3>
              <p className="text-gray-600 mb-6">
                All ketamine treatments at Lotus Direct Care are administered under direct medical supervision. Our protocols follow the latest safety guidelines and best practices in the field.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Potential Side Effects</h3>
              <p className="text-gray-600 mb-3">Most side effects are mild and temporary, resolving within hours after treatment. These may include:</p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• Nausea (anti-nausea medication is provided if needed)</li>
                <li>• Temporary increase in blood pressure</li>
                <li>• Dizziness or lightheadedness</li>
                <li>• Blurred vision</li>
                <li>• Feeling of dissociation or dreamlike state</li>
              </ul>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Contraindications</h3>
              <p className="text-gray-600 mb-3">Ketamine therapy may not be appropriate for everyone. Contraindications include:</p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• Uncontrolled high blood pressure</li>
                <li>• Unstable heart disease</li>
                <li>• Active psychosis or schizophrenia</li>
                <li>• Pregnancy or breastfeeding</li>
                <li>• History of ketamine abuse</li>
                <li>• Certain medications (will be reviewed during consultation)</li>
              </ul>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4">FDA Status</h3>
              <p className="text-gray-600 mb-3">
                While ketamine is FDA-approved as an anesthetic, its use for depression, anxiety, PTSD, and chronic pain is considered "off-label." Off-label prescribing is common and legal in medical practice when supported by scientific evidence.
              </p>
              <p className="text-gray-600 mb-6">
                In 2019, the FDA approved esketamine (Spravato), a derivative of ketamine, specifically for treatment-resistant depression, further validating ketamine's therapeutic potential.
              </p>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                  <FaExclamationTriangle className="mr-2 text-yellow-400" /> Important Safety Information
                </h4>
                <p className="text-gray-700 mb-2">
                  Ketamine therapy is a medical treatment that should only be administered by qualified healthcare providers. It is not a recreational drug, and misuse can lead to serious health consequences.
                </p>
                <p className="text-gray-700">
                  Always disclose your full medical history and all medications you're taking during your consultation to ensure your safety.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Common questions about ketamine therapy</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <details className="bg-white rounded-lg shadow-md p-6 group">
                <summary className="font-bold text-gray-800 cursor-pointer list-none flex justify-between items-center">
                  How many treatments will I need?
                  <span className="text-primary-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-4 text-gray-600">
                  <p className="mb-3">
                    Most patients begin with a series of 4-6 treatments over 2-3 weeks. After this initial series, the need for maintenance treatments varies by individual. Some patients maintain benefits for months after a single series, while others benefit from periodic maintenance sessions every 2-6 weeks.
                  </p>
                  <p>
                    We'll work with you to determine the optimal treatment schedule based on your response and needs.
                  </p>
                </div>
              </details>
              
              <details className="bg-white rounded-lg shadow-md p-6 group">
                <summary className="font-bold text-gray-800 cursor-pointer list-none flex justify-between items-center">
                  Is ketamine therapy covered by insurance?
                  <span className="text-primary-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-4 text-gray-600">
                  <p className="mb-3">
                    Currently, most insurance companies do not cover ketamine therapy for mental health conditions or chronic pain, as it's considered an off-label use. However, some insurance plans may cover portions of the initial consultation or certain aspects of treatment.
                  </p>
                  <p>
                    We offer transparent pricing and can provide documentation for you to submit to your insurance for possible reimbursement. We also offer payment plans to make treatment more accessible.
                  </p>
                </div>
              </details>
              
              <details className="bg-white rounded-lg shadow-md p-6 group">
                <summary className="font-bold text-gray-800 cursor-pointer list-none flex justify-between items-center">
                  Will I need to stop my current medications?
                  <span className="text-primary-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-4 text-gray-600">
                  <p className="mb-3">
                    In most cases, you can continue your current medications while receiving ketamine therapy. However, certain medications may reduce ketamine's effectiveness or increase side effects.
                  </p>
                  <p>
                    During your consultation, we'll review all your medications and make recommendations. Never stop prescribed medications without consulting the prescribing physician.
                  </p>
                </div>
              </details>
              
              <details className="bg-white rounded-lg shadow-md p-6 group">
                <summary className="font-bold text-gray-800 cursor-pointer list-none flex justify-between items-center">
                  Is ketamine therapy addictive?
                  <span className="text-primary-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-4 text-gray-600">
                  <p className="mb-3">
                    When administered in a medical setting at therapeutic doses and frequencies, ketamine has not been shown to be addictive. The dosing schedule used for depression, anxiety, and PTSD (typically once every few weeks) does not lead to physical dependence.
                  </p>
                  <p>
                    We carefully monitor all patients and structure treatment protocols to minimize any risk of dependence or misuse.
                  </p>
                </div>
              </details>
              
              <details className="bg-white rounded-lg shadow-md p-6 group">
                <summary className="font-bold text-gray-800 cursor-pointer list-none flex justify-between items-center">
                  How quickly will I notice results?
                  <span className="text-primary-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-4 text-gray-600">
                  <p className="mb-3">
                    Many patients report improvement in symptoms within hours to days after their first treatment. However, the full benefits often develop over the course of the initial treatment series.
                  </p>
                  <p>
                    Some patients may require multiple sessions before noticing significant improvement. We track your response using standardized assessments to objectively measure your progress.
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
          <h2 className="text-3xl font-bold mb-4">Ready to Explore Ketamine Therapy?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Schedule a consultation to learn if ketamine therapy is right for you. Our team will answer your questions and develop a personalized treatment plan to address your specific needs.
          </p>
          <Link href="https://app.elationemr.com/book/lotusdirectcare/service-locations/933212881617143?appointment_types=" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white hover:bg-gray-100 text-primary-600 font-bold py-4 px-8 rounded-lg transition duration-300 text-lg inline-block">
            Schedule Your Consultation
          </Link>
        </div>
      </section>
    </main>
  );
};

export default KetamineTherapyPage;