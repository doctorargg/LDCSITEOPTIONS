import DoctorSection from "@/components/DoctorSection";

const AboutPage = () => {
  return (
    <main>
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-primary-800">About Lotus Direct Care</h1>
          <p className="text-xl text-primary-700 mt-2">Our Mission, Vision, and the Doctor Behind It All</p>
        </div>
      </section>
      
      {/* Reuse the DoctorSection component we already built */}
      <DoctorSection />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Our Philosophy</h2>
            <p className="text-lg text-gray-600 mt-2">A new paradigm for healthcare.</p>
          </div>
          <div className="space-y-6 text-gray-700">
            <p>At Lotus Direct Care, we believe that the best healthcare comes from a direct, personal relationship between you and your doctor. In a world of rushed appointments and impersonal systems, we've chosen a different path. We've removed the insurance companies from the exam room so we can focus on one thing: you.</p>
            <p>Our model is simple: a flat, affordable monthly fee gets you comprehensive primary care. No copays, no deductibles, no surprise bills. Just direct, unrestricted access to a physician who knows you and is dedicated to your long-term health and wellness.</p>
            <p>We combine the best of traditional family medicine with a proactive, functional approach to uncover the root cause of health issues. We are your partners and advocates, here to guide you on your journey to a healthier, happier life.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
