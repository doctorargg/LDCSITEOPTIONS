import Link from 'next/link';

const FeatureBox = ({ icon, title, children }: { icon: string, title: string, children: React.ReactNode }) => (
  <div className="text-center p-6">
    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary-100 text-primary-500 mx-auto mb-4">
      <i className={`${icon} text-3xl`}></i>
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{children}</p>
  </div>
);

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Why Choose Direct Primary Care</h2>
          <p className="text-xl text-gray-600 mt-2">Experience the benefits of membership-based healthcare</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureBox icon="fas fa-clock" title="Extended Appointments">
            Enjoy 30-60 minute appointments instead of the typical 7-15 minutes in traditional practices.
          </FeatureBox>
          <FeatureBox icon="fas fa-calendar-check" title="Same/Next-Day Appointments">
            Get seen quickly when you're sick, often on the same day you call.
          </FeatureBox>
          <FeatureBox icon="fas fa-comments" title="Direct Communication">
            Text, email, or call your doctor directly without going through a receptionist or nurse.
          </FeatureBox>
          <FeatureBox icon="fas fa-hand-holding-usd" title="Transparent Pricing">
            No surprise bills or hidden fees. Know exactly what you'll pay for services.
          </FeatureBox>
          <FeatureBox icon="fas fa-video" title="Virtual Visits">
            Convenient telemedicine appointments included in your membership.
          </FeatureBox>
          <FeatureBox icon="fas fa-flask" title="Discounted Labs & Procedures">
            Save 70-90% on lab work and other services compared to insurance pricing.
          </FeatureBox>
        </div>
        <div className="text-center mt-12">
          <Link href="/direct-primary-care" className="bg-primary-500 hover:bg-primary-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 text-lg">
            Learn More About DPC
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
