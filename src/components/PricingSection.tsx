import Link from 'next/link';

const PricingCard = ({ plan, price, period, features, buttonText, buttonLink, featured = false }: { plan: string, price: string, period: string, features: string[], buttonText: string, buttonLink: string, featured?: boolean }) => (
  <div className={`rounded-lg shadow-lg p-8 flex flex-col h-full border ${featured ? 'border-primary-500 scale-105 bg-white' : 'bg-gray-50 border-gray-200'}`}>
    <div className={`text-center mb-6 pb-6 border-b ${featured ? 'border-primary-200' : 'border-gray-200'}`}>
      <h3 className="text-2xl font-bold text-gray-800">{plan}</h3>
      <p className="text-5xl font-bold text-primary-500 mt-4">{price}</p>
      <p className="text-gray-500">{period}</p>
    </div>
    <ul className="space-y-4 text-gray-600 flex-grow">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center">
          <i className="fas fa-check text-primary-500 mr-3"></i>
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <div className="mt-8">
      <Link href={buttonLink} target="_blank" rel="noopener noreferrer" className={`block w-full text-center font-bold py-3 px-6 rounded-lg transition duration-300 ${featured ? 'bg-primary-500 hover:bg-primary-600 text-white' : 'bg-white border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white'}`}>
        {buttonText}
      </Link>
    </div>
  </div>
);

const PricingSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Membership Plans</h2>
          <p className="text-xl text-gray-600 mt-2">Choose the plan that's right for you and your family</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          <PricingCard 
            plan="Individual"
            price="$165"
            period="per month"
            features={["Unlimited office visits", "Same/next-day appointments", "Direct access to your doctor", "Telemedicine included", "Wholesale labs & medications", "Basic procedures included", "Annual physical"]}
            buttonText="Become a Member"
            buttonLink="https://lotusdirectcare.hint.com/signup/membership/contacts?="
          />
          <PricingCard 
            plan="Couple"
            price="$220"
            period="per month"
            features={["All Individual benefits", "Coverage for 2 adults", "Shared appointments available", "Coordinated care", "Family health planning", "$110 savings vs. individual", "Annual physicals for both"]}
            buttonText="Become a Member"
            buttonLink="https://lotusdirectcare.hint.com/signup/membership/contacts?="
            featured={true}
          />
          <PricingCard 
            plan="Add'l Family"
            price="$20"
            period="per month"
            features={["All Couple benefits", "Coverage for 2 adults + children", "Pediatric care included", "Family wellness planning", "School & sports physicals", "Significant savings per child", "Annual physicals for all"]}
            buttonText="Become a Member"
            buttonLink="https://lotusdirectcare.hint.com/signup/membership/contacts?="
          />
          <PricingCard 
            plan="Business"
            price="Custom"
            period="pricing"
            features={["Employee healthcare benefit", "Volume discounts available", "Reduce employee sick days", "Workplace wellness programs", "On-site services available", "Customized care plans", "Detailed reporting options"]}
            buttonText="Contact Us"
            buttonLink="/contact"
          />
        </div>
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600">All plans include unlimited primary care visits with no copays or hidden fees.</p>
          <Link href="/pricing" className="mt-4 inline-block text-primary-500 font-semibold hover:underline">
            View Full Pricing Details
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
