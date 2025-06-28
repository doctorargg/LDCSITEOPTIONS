import Image from 'next/image';

const TestimonialCard = ({ quote, author, image }: { quote: string, author: string, image: string }) => (
  <div className="bg-white rounded-lg shadow-lg p-8 mx-4 flex flex-col items-center text-center h-full">
    <Image 
      src={image}
      alt={`Testimonial from ${author}`}
      width={80}
      height={80}
      className="rounded-full mb-4 border-4 border-primary-200"
    />
    <p className="text-gray-600 italic mb-4 flex-grow">"{quote}"</p>
    <p className="font-bold text-primary-500">- {author}</p>
  </div>
);

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">What Our Patients Are Saying</h2>
          <p className="text-xl text-gray-600 mt-2">Real stories from members of the Lotus Direct Care family</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          <TestimonialCard 
            quote="I have never had a doctor who is so attentive and caring. Dr. Rosenberg truly listens and provides personalized care that makes all the difference."
            author="Sarah L."
            image="/images/testimonial-1.jpg" // Placeholder image
          />
          <TestimonialCard 
            quote="The direct access is a game-changer. No more waiting on hold or playing phone tag. I can text my doctor and get a quick response. It's healthcare for the 21st century!"
            author="Michael P."
            image="/images/testimonial-2.jpg" // Placeholder image
          />
          <TestimonialCard 
            quote="Switching to Lotus Direct Care was the best decision for my family's health. The transparent pricing and focus on prevention have saved us money and given us peace of mind."
            author="Jessica B."
            image="/images/testimonial-3.jpg" // Placeholder image
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
