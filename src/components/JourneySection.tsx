import Link from 'next/link';

const JourneyCard = ({ icon, title, children, buttonText, buttonLink }: { icon: string, title: string, children: React.ReactNode, buttonText: string, buttonLink: string }) => (
  <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col h-full border border-gray-200">
    <div className="text-center mb-6">
      <i className={`${icon} text-5xl text-primary-500`}></i>
      <h3 className="text-2xl font-bold text-gray-800 mt-4">{title}</h3>
    </div>
    <div className="text-gray-600 text-center flex-grow">
      {children}
    </div>
    <div className="mt-6">
      <Link href={buttonLink} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-primary-500 hover:bg-primary-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
        {buttonText}
      </Link>
    </div>
  </div>
);

const JourneySection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Your Healthcare Journey</h2>
          <p className="text-xl text-gray-600 mt-2">Choose the path that's right for you</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <JourneyCard 
            icon="fas fa-user-plus" 
            title="New Patients" 
            buttonText="Schedule a Free Meet & Greet" 
            buttonLink="https://app.elationemr.com/book/lotusdirectcare/service-locations/933212881617143?appointment_types="
          >
            <p className="mb-4">Considering Direct Primary Care? Start with a free, no-obligation meet and greet to tour our office and discuss how our approach can work for you.</p>
            <p>Experience the difference of unhurried appointments and personalized care before making a decision.</p>
          </JourneyCard>
          <JourneyCard 
            icon="fas fa-clipboard-check" 
            title="Ready to Join" 
            buttonText="Become a Member" 
            buttonLink="https://lotusdirectcare.hint.com/signup/membership/contacts?="
          >
            <p className="mb-4">Ready to experience better healthcare? Becoming a member is simple. Select your membership plan and complete our straightforward enrollment process.</p>
            <p>Start enjoying the benefits of Direct Primary Care right away with same-day appointments and direct access to your doctor.</p>
          </JourneyCard>
          <JourneyCard 
            icon="fas fa-user-md" 
            title="Current Patients" 
            buttonText="Book Appointment" 
            buttonLink="https://app.elationemr.com/book/lotusdirectcare/service-locations/490329635881207?appointment_types="
          >
            <p className="mb-4">Already a member? Access your patient portal to schedule appointments, view your health records, and communicate directly with Dr. Rosenberg.</p>
            <p>Enjoy the convenience of same or next-day appointments and virtual visits when needed.</p>
          </JourneyCard>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
