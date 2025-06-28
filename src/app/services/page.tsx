import Link from 'next/link';

const ServiceItem = ({ icon, title, description }: { icon: string, title: string, description: string }) => (
  <div className="bg-white p-8 rounded-lg shadow-md flex">
    <div className="flex-shrink-0 mr-6">
      <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary-100 text-primary-500">
        <i className={`${icon} text-3xl`}></i>
      </div>
    </div>
    <div>
      <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const ServicesPage = () => {
  return (
    <main>
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-primary-800">Our Services</h1>
          <p className="text-xl text-primary-700 mt-2">Comprehensive care tailored to your needs.</p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            <ServiceItem 
              icon="fas fa-heartbeat"
              title="Direct Primary Care (DPC)"
              description="Unlimited access to your doctor for a flat monthly fee. Includes preventative care, chronic disease management, and urgent care needs. No copays, no hassle."
            />
            <ServiceItem 
              icon="fas fa-leaf"
              title="Functional Medicine"
              description="We go beyond symptoms to find the root cause of your health issues. This patient-centered approach uses detailed history, lab testing, and lifestyle changes to promote optimal wellness."
            />
            <ServiceItem 
              icon="fas fa-stethoscope"
              title="Urgent & Acute Care"
              description="For life's unexpected illnesses and injuries, get same-day or next-day appointments. We handle colds, flu, minor injuries, infections, and more."
            />
            <ServiceItem 
              icon="fas fa-pills"
              title="Wholesale Medications & Labs"
              description="Save up to 90% on prescription medications and lab work. We pass our direct savings on to you, making healthcare more affordable."
            />
            <ServiceItem 
              icon="fas fa-user-md"
              title="Specialty Care Coordination"
              description="When you need to see a specialist, we act as your advocate, ensuring seamless communication and a coordinated care plan."
            />
            <ServiceItem 
              icon="fas fa-briefcase-medical"
              title="Business & Employer Solutions"
              description="Offer premium healthcare to your employees as a benefit. Reduce sick days, improve productivity, and attract top talent with our direct care plans."
            />
          </div>
          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-gray-800">Ready to Get Started?</h2>
            <p className="text-lg text-gray-600 mt-2">Join a healthcare practice that puts you first.</p>
            <Link href="https://lotusdirectcare.hint.com/signup/membership/contacts?=" target="_blank" rel="noopener noreferrer" className="mt-6 inline-block bg-primary-500 hover:bg-primary-600 text-white font-bold py-4 px-8 rounded-lg transition duration-300 text-lg">
              Become a Member Today
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
