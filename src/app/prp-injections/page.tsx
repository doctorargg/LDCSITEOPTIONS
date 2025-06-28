import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { FaTint, FaSyncAlt, FaMicroscope, FaThumbsUp, FaCheck, FaTimes } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'PRP Injections | Lotus Direct Care',
  description: 'Platelet-Rich Plasma (PRP) therapy for musculoskeletal injuries, arthritis, and chronic pain. Natural healing using your body\'s own growth factors.',
  keywords: ['PRP injections', 'platelet rich plasma', 'sports medicine', 'joint pain', 'arthritis treatment', 'tendon injuries', 'regenerative medicine'],
  openGraph: {
    title: 'PRP Injections - Natural Healing Therapy',
    description: 'Harness your body\'s natural healing power for musculoskeletal injuries. Minimally invasive treatment with proven results.',
    type: 'website',
    images: [
      {
        url: '/images/prp-medical-hero.png',
        width: 1200,
        height: 630,
        alt: 'PRP Injection Therapy at Lotus Direct Care',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PRP Injections | Lotus Direct Care',
    description: 'Natural healing therapy for musculoskeletal injuries using your body\'s own growth factors.',
    images: ['/images/prp-medical-hero.png'],
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

const ConditionCard = ({ title, conditions, description }: { title: string, conditions: string[], description: string }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden h-full hover:shadow-lg transition-shadow">
    <div className="bg-primary-600 text-white p-4">
      <h3 className="text-xl font-bold">{title}</h3>
    </div>
    <div className="p-6">
      <ul className="space-y-2 mb-4">
        {conditions.map((condition, index) => (
          <li key={index} className="text-gray-700">• {condition}</li>
        ))}
      </ul>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </div>
);

const ComparisonRow = ({ feature, prp, steroid, surgery }: { 
  feature: string, 
  prp: boolean, 
  steroid: boolean, 
  surgery: boolean 
}) => (
  <tr className="even:bg-gray-50">
    <td className="py-3 px-4 font-semibold text-gray-800">{feature}</td>
    <td className="py-3 px-4 text-center">
      {prp ? <FaCheck className="text-green-600 mx-auto" /> : <FaTimes className="text-red-600 mx-auto" />}
    </td>
    <td className="py-3 px-4 text-center">
      {steroid ? <FaCheck className="text-green-600 mx-auto" /> : <FaTimes className="text-red-600 mx-auto" />}
    </td>
    <td className="py-3 px-4 text-center">
      {surgery ? <FaCheck className="text-green-600 mx-auto" /> : <FaTimes className="text-red-600 mx-auto" />}
    </td>
  </tr>
);

const PRPInjectionsPage = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 bg-primary-50">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-transparent opacity-50"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-800 mb-4">PRP Injections</h1>
          <p className="text-xl text-primary-700 max-w-3xl mx-auto">
            Harnessing your body's natural healing power for musculoskeletal injuries
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">What is PRP Therapy?</h2>
              <p className="text-gray-600 mb-4">
                Platelet-Rich Plasma (PRP) therapy is an innovative, minimally invasive treatment that uses your body's own healing mechanisms to accelerate recovery from musculoskeletal injuries and reduce pain from chronic conditions.
              </p>
              <p className="text-gray-600 mb-4">
                The procedure involves drawing a small amount of your blood, processing it to concentrate the platelets, and then injecting this platelet-rich solution directly into the injured area. These concentrated platelets contain growth factors that stimulate and enhance your body's natural healing processes.
              </p>
              <p className="text-gray-600 mb-4">PRP therapy offers several advantages over traditional treatments:</p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• Minimally invasive alternative to surgery</li>
                <li>• Uses your body's own healing factors (autologous)</li>
                <li>• Minimal downtime and quick recovery</li>
                <li>• Reduced risk of adverse reactions</li>
                <li>• Can be effective for conditions that haven't responded to conventional treatments</li>
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
                src="/images/prp-medical-hero.png" 
                alt="Doctor preparing PRP injection" 
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">How PRP Therapy Works</h2>
            <p className="text-xl text-gray-600">Understanding the science behind platelet-rich plasma</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <FeatureBox icon={<FaTint />} title="The Power of Platelets">
              <p className="mb-3">
                Platelets are small cell fragments in your blood that are primarily known for their role in clotting. However, they also contain hundreds of proteins called growth factors that play a crucial role in healing injuries.
              </p>
              <p className="mb-3">These growth factors:</p>
              <ul className="space-y-1 mb-3">
                <li>• Signal stem cells to come to the injured area</li>
                <li>• Stimulate cell reproduction and tissue regeneration</li>
                <li>• Promote healing by increasing collagen production</li>
                <li>• Initiate new blood vessel formation</li>
                <li>• Reduce inflammation and associated pain</li>
              </ul>
              <p>
                PRP concentrates these platelets to levels 5-10 times higher than what is typically found in blood, creating a powerful healing solution.
              </p>
            </FeatureBox>
            
            <FeatureBox icon={<FaSyncAlt />} title="The Healing Process">
              <p className="mb-3">
                When injected into damaged tissues, PRP initiates a localized inflammation response that triggers the healing cascade:
              </p>
              <ol className="space-y-2 mb-3">
                <li><strong>Inflammation Phase (1-3 days):</strong> The concentrated platelets release growth factors that attract healing cells to the area and begin the repair process.</li>
                <li><strong>Proliferation Phase (3-21 days):</strong> New tissue begins to develop as cells multiply and produce collagen and other structural proteins.</li>
                <li><strong>Remodeling Phase (21 days - 1 year):</strong> The new tissue gradually strengthens and matures, improving function and reducing pain.</li>
              </ol>
              <p>
                This process helps accelerate healing in injured tendons, ligaments, muscles, and joints, often providing relief when other treatments have failed.
              </p>
            </FeatureBox>
            
            <FeatureBox icon={<FaMicroscope />} title="The Science Behind PRP">
              <p className="mb-3">
                Research on PRP continues to evolve, with numerous studies showing promising results for various musculoskeletal conditions:
              </p>
              <ul className="space-y-2 mb-3">
                <li>• A 2021 meta-analysis found that PRP injections provided significant pain reduction and functional improvement in knee osteoarthritis compared to placebo or hyaluronic acid injections.</li>
                <li>• Studies have shown 70-80% success rates for chronic tennis elbow when treated with PRP.</li>
                <li>• Research indicates that PRP can accelerate healing in acute muscle injuries and reduce return-to-play time for athletes.</li>
                <li>• Multiple studies support PRP's effectiveness for rotator cuff injuries, particularly for partial tears and tendinopathy.</li>
              </ul>
              <p>
                While research is ongoing, the growing body of evidence supports PRP as an effective option for many patients.
              </p>
            </FeatureBox>
            
            <FeatureBox icon={<FaThumbsUp />} title="Advantages Over Other Treatments">
              <p className="mb-3">PRP offers several benefits compared to conventional treatments:</p>
              <ul className="space-y-2 mb-3">
                <li>• <strong>Natural healing:</strong> Uses your own blood components, minimizing risk of adverse reactions</li>
                <li>• <strong>Non-surgical:</strong> Avoids the risks, costs, and recovery time associated with surgery</li>
                <li>• <strong>Minimal downtime:</strong> Most patients return to normal activities within days</li>
                <li>• <strong>Few side effects:</strong> Typically limited to temporary soreness at the injection site</li>
                <li>• <strong>Long-lasting results:</strong> Many patients experience relief for months to years after treatment</li>
                <li>• <strong>Reduced need for medications:</strong> May decrease reliance on pain medications, including opioids</li>
              </ul>
              <p>
                These advantages make PRP an attractive option for many patients seeking alternatives to surgery or long-term medication use.
              </p>
            </FeatureBox>
          </div>
        </div>
      </section>

      {/* Conditions Treated Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Conditions We Treat With PRP</h2>
            <p className="text-xl text-gray-600">Effective for a wide range of musculoskeletal injuries and conditions</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ConditionCard 
              title="Knee Conditions"
              conditions={[
                "Osteoarthritis",
                "Meniscus tears",
                "Patellar tendinopathy (Jumper's knee)",
                "MCL/LCL sprains",
                "Post-surgical recovery",
                "Cartilage defects"
              ]}
              description="PRP injections can reduce pain and improve function in knee conditions, potentially delaying or eliminating the need for knee replacement surgery in some patients."
            />
            
            <ConditionCard 
              title="Shoulder Conditions"
              conditions={[
                "Rotator cuff tears and tendinopathy",
                "Labral tears",
                "Shoulder impingement",
                "AC joint injuries",
                "Frozen shoulder",
                "Biceps tendinopathy"
              ]}
              description="PRP can help heal damaged shoulder tissues and reduce inflammation, improving range of motion and decreasing pain in chronic and acute shoulder conditions."
            />
            
            <ConditionCard 
              title="Elbow & Wrist"
              conditions={[
                "Tennis elbow (lateral epicondylitis)",
                "Golfer's elbow (medial epicondylitis)",
                "Wrist tendinopathy",
                "Carpal tunnel syndrome",
                "Ligament sprains",
                "Arthritis"
              ]}
              description="PRP is particularly effective for chronic tendon issues in the elbow and wrist, with studies showing success rates of 70-80% for conditions like tennis elbow."
            />
            
            <ConditionCard 
              title="Hip & Pelvis"
              conditions={[
                "Hip osteoarthritis",
                "Labral tears",
                "Trochanteric bursitis",
                "Hamstring tendinopathy",
                "Piriformis syndrome",
                "Sacroiliac joint pain"
              ]}
              description="PRP injections can provide significant pain relief and improved mobility for hip and pelvic conditions, helping patients avoid more invasive procedures."
            />
            
            <ConditionCard 
              title="Foot & Ankle"
              conditions={[
                "Plantar fasciitis",
                "Achilles tendinopathy",
                "Ankle sprains",
                "Peroneal tendinopathy",
                "Posterior tibial tendon dysfunction",
                "Arthritis"
              ]}
              description="Chronic foot and ankle conditions often respond well to PRP therapy, with many patients experiencing significant improvement after just 1-2 treatments."
            />
            
            <ConditionCard 
              title="Spine & Neck"
              conditions={[
                "Facet joint pain",
                "Sacroiliac joint dysfunction",
                "Ligament sprains",
                "Muscle strains",
                "Degenerative disc disease",
                "Whiplash injuries"
              ]}
              description="PRP injections can help reduce inflammation and promote healing in specific spine and neck conditions, potentially providing an alternative to steroid injections or surgery."
            />
          </div>
        </div>
      </section>

      {/* Treatment Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">The PRP Treatment Process</h2>
            <p className="text-xl text-gray-600">What to expect during your PRP therapy</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProcessStep 
              number={1} 
              title="Consultation & Assessment" 
              description="We begin with a thorough evaluation of your condition, including a review of your medical history, physical examination, and any relevant imaging studies. We'll determine if PRP therapy is appropriate for your specific situation and develop a personalized treatment plan."
            />
            <ProcessStep 
              number={2} 
              title="Blood Collection & Processing" 
              description="On the day of treatment, we draw a small amount of your blood (typically 30-60ml, similar to a routine blood test). The blood is then placed in a centrifuge that spins at high speed to separate the platelets from other blood components, creating the platelet-rich plasma."
            />
            <ProcessStep 
              number={3} 
              title="PRP Injection" 
              description="The concentrated PRP is injected directly into the injured area using ultrasound guidance for precise placement. This ensures the healing factors reach exactly where they're needed most. The procedure typically takes 30-60 minutes from blood draw to completion."
            />
            <ProcessStep 
              number={4} 
              title="Recovery & Follow-up" 
              description="After treatment, we'll provide specific post-procedure instructions. Most patients can return to normal activities within a day or two, with some activity modifications. We'll schedule follow-up appointments to monitor your progress and determine if additional treatments are needed."
            />
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
              Most conditions require 1-3 PRP treatments spaced 4-6 weeks apart for optimal results. Improvement typically begins within 2-6 weeks after treatment, with continued healing for up to 6-12 months.
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

      {/* Comparison Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">PRP vs. Other Treatments</h2>
            <p className="text-xl text-gray-600">How PRP compares to conventional treatment options</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
              <thead>
                <tr className="bg-primary-600 text-white">
                  <th className="py-4 px-6 text-left font-semibold">Feature</th>
                  <th className="py-4 px-6 text-center font-semibold">PRP Therapy</th>
                  <th className="py-4 px-6 text-center font-semibold">Corticosteroid Injections</th>
                  <th className="py-4 px-6 text-center font-semibold">Surgery</th>
                </tr>
              </thead>
              <tbody>
                <ComparisonRow feature="Uses body's natural healing" prp={true} steroid={false} surgery={false} />
                <ComparisonRow feature="Minimally invasive" prp={true} steroid={true} surgery={false} />
                <ComparisonRow feature="Promotes tissue healing" prp={true} steroid={false} surgery={true} />
                <ComparisonRow feature="Quick recovery time" prp={true} steroid={true} surgery={false} />
                <ComparisonRow feature="Long-lasting results" prp={true} steroid={false} surgery={true} />
                <ComparisonRow feature="Low risk of side effects" prp={true} steroid={false} surgery={false} />
                <ComparisonRow feature="No tissue damage" prp={true} steroid={false} surgery={false} />
                <ComparisonRow feature="Anesthesia required" prp={false} steroid={false} surgery={true} />
              </tbody>
            </table>
          </div>
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">When to Consider PRP</h3>
            <p className="text-gray-600 mb-4">PRP therapy may be particularly beneficial if:</p>
            <ul className="space-y-2 text-gray-600 mb-6">
              <li>• You've tried conventional treatments without success</li>
              <li>• You want to avoid surgery or are not a good surgical candidate</li>
              <li>• You're concerned about the side effects of corticosteroid injections</li>
              <li>• You're looking for a treatment that addresses the underlying cause, not just symptoms</li>
              <li>• You prefer a natural approach using your body's own healing mechanisms</li>
              <li>• You need to return to activities quickly with minimal downtime</li>
            </ul>
            <p className="text-gray-600">
              During your consultation, we'll discuss whether PRP is the right option for your specific condition and goals.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Common questions about PRP therapy</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <details className="bg-white rounded-lg shadow-md p-6 group">
                <summary className="font-bold text-gray-800 cursor-pointer list-none flex justify-between items-center">
                  Is PRP therapy painful?
                  <span className="text-primary-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-4 text-gray-600">
                  <p className="mb-3">
                    Most patients experience minimal discomfort during PRP treatment. The blood draw is similar to having routine lab work done. For the injection, we use a local anesthetic to numb the area before administering the PRP.
                  </p>
                  <p>
                    After the procedure, some patients experience mild soreness or swelling at the injection site for 24-48 hours. This is actually a positive sign that the healing response has been triggered. Over-the-counter pain relievers (except NSAIDs like ibuprofen, which can interfere with the healing process) can help manage any discomfort.
                  </p>
                </div>
              </details>
              
              <details className="bg-white rounded-lg shadow-md p-6 group">
                <summary className="font-bold text-gray-800 cursor-pointer list-none flex justify-between items-center">
                  How many treatments will I need?
                  <span className="text-primary-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-4 text-gray-600">
                  <p className="mb-3">
                    The number of treatments needed varies depending on the condition being treated, its severity, and your individual response. In general:
                  </p>
                  <ul className="space-y-1 mb-3">
                    <li>• Most patients require 1-3 treatments spaced 4-6 weeks apart</li>
                    <li>• Acute injuries may respond well to a single treatment</li>
                    <li>• Chronic conditions typically benefit from a series of treatments</li>
                    <li>• Severe arthritis may require maintenance treatments every 6-12 months</li>
                  </ul>
                  <p>
                    We'll develop a personalized treatment plan based on your specific condition and monitor your progress to determine if additional treatments would be beneficial.
                  </p>
                </div>
              </details>
              
              <details className="bg-white rounded-lg shadow-md p-6 group">
                <summary className="font-bold text-gray-800 cursor-pointer list-none flex justify-between items-center">
                  How quickly will I see results?
                  <span className="text-primary-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-4 text-gray-600">
                  <p className="mb-3">
                    PRP works by stimulating your body's natural healing processes, which takes time. The typical timeline for results is:
                  </p>
                  <ul className="space-y-1 mb-3">
                    <li>• <strong>First 1-2 weeks:</strong> You may experience increased soreness as the inflammatory healing response begins</li>
                    <li>• <strong>2-6 weeks:</strong> Most patients begin to notice improvement in pain and function</li>
                    <li>• <strong>6-12 weeks:</strong> Continued improvement as tissue healing progresses</li>
                    <li>• <strong>3-6 months:</strong> Maximum benefits typically achieved</li>
                  </ul>
                  <p>
                    Results continue to develop for up to 6-12 months as the tissues heal and remodel. This gradual improvement is actually a sign that true healing is occurring, rather than just masking symptoms.
                  </p>
                </div>
              </details>
              
              <details className="bg-white rounded-lg shadow-md p-6 group">
                <summary className="font-bold text-gray-800 cursor-pointer list-none flex justify-between items-center">
                  Is PRP therapy covered by insurance?
                  <span className="text-primary-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-4 text-gray-600">
                  <p className="mb-3">
                    Currently, most insurance companies consider PRP therapy to be experimental or investigational and do not provide coverage. However, this is changing as more research demonstrates its effectiveness.
                  </p>
                  <p className="mb-3">
                    As a Direct Primary Care practice, we don't bill insurance directly for our services. We offer transparent, affordable pricing for PRP treatments and can provide documentation for you to submit to your insurance for possible reimbursement.
                  </p>
                  <p>
                    Many patients find that the cost of PRP therapy is comparable to or less than their out-of-pocket expenses for surgery, with significantly less downtime and risk. We're happy to discuss payment options during your consultation.
                  </p>
                </div>
              </details>
              
              <details className="bg-white rounded-lg shadow-md p-6 group">
                <summary className="font-bold text-gray-800 cursor-pointer list-none flex justify-between items-center">
                  What are the potential risks or side effects?
                  <span className="text-primary-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-4 text-gray-600">
                  <p className="mb-3">
                    PRP therapy is considered very safe, with minimal risk of complications since it uses your own blood components. Potential side effects are generally mild and temporary:
                  </p>
                  <ul className="space-y-1 mb-3">
                    <li>• Pain or soreness at the injection site (24-48 hours)</li>
                    <li>• Minor swelling or bruising</li>
                    <li>• Temporary stiffness</li>
                    <li>• Very rare risk of infection (as with any injection)</li>
                  </ul>
                  <p>
                    Because PRP uses your own blood, there's no risk of allergic reactions or transmission of infectious diseases that might occur with other treatments.
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
          <h2 className="text-3xl font-bold mb-4">Ready to Explore PRP Therapy?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Schedule a consultation to learn if PRP therapy is right for your condition. Our team will evaluate your specific needs and develop a personalized treatment plan to help you heal naturally.
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

export default PRPInjectionsPage;