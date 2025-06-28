import Image from "next/image";
import Link from "next/link";
import JourneySection from "@/components/JourneySection";
import PricingSection from "@/components/PricingSection";
import FeaturesSection from "@/components/FeaturesSection";
import DoctorSection from "@/components/DoctorSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogPreviewSection from "@/components/BlogPreviewSection";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="text-white text-center bg-cover bg-center" style={{ backgroundImage: "url('/hero-bg.jpg')" }}>
        <div className="bg-black bg-opacity-50 py-20">
          <div className="container mx-auto px-6">
            <div className="flex justify-center mb-8">
              <div className="bg-black bg-opacity-40 inline-block p-5 rounded-full shadow-lg">
                <Image 
                  src="/images/LOGOTRANSPARENTFLOWERONLY1.png" 
                  alt="Lotus Direct Care - Primary Care & Functional Medicine"
                  width={300}
                  height={300}
                  className="animate-glow"
                  priority
                />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Healthcare Without Barriers: The Way Medicine Should Be</h1>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
              Imagine a doctor who truly knows you, has time for you, and is directly accessible when you need them. At Lotus Direct Care, we've removed the barriers between you and your physician.
            </p>
            
            <div className="bg-white bg-opacity-10 rounded-lg p-4 inline-block mb-8">
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
                <div className="text-center">
                  <span className="text-4xl font-bold text-accent-400 block">30-60</span>
                  <span className="text-white">minute appointments</span>
                </div>
                <div className="text-center">
                  <span className="text-4xl font-bold text-accent-400 block">Direct</span>
                  <span className="text-white">physician access</span>
                </div>
                <div className="text-center">
                  <span className="text-4xl font-bold text-accent-400 block">70-90%</span>
                  <span className="text-white">savings on labs</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="https://app.elationemr.com/book/lotusdirectcare/service-locations/933212881617143?appointment_types=" target="_blank" rel="noopener noreferrer" className="bg-primary-500 hover:bg-primary-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 text-lg">
                Schedule a Free Meet & Greet
              </Link>
              <Link href="/direct-primary-care" className="border-2 border-white hover:bg-white hover:text-primary-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 text-lg">
                Learn About Direct Primary Care
              </Link>
            </div>
          </div>
        </div>
      </section>

      <JourneySection />

      <PricingSection />

      <FeaturesSection />

      <DoctorSection />

      <TestimonialsSection />

      <BlogPreviewSection />
    </>
  );
}
