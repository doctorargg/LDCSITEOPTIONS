import Image from 'next/image';
import Link from 'next/link';

const DoctorSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <Image 
              src="/images/dr_rosenberg_new.jpg" 
              alt="Dr. Aaron Rosenberg"
              width={500}
              height={600}
              className="rounded-lg shadow-2xl mx-auto lg:mx-0 object-cover"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Dr. Aaron Rosenberg</h2>
            <p className="text-lg text-primary-600 font-semibold mb-6">Board-Certified in Family Medicine</p>
            <div className="text-gray-600 space-y-4">
              <p>Dr. Rosenberg is dedicated to providing personalized, comprehensive healthcare. He believes in building strong patient-doctor relationships based on trust and mutual respect. By removing the complexities of insurance, he can focus on what truly matters: your health.</p>
              <p>His approach combines traditional family medicine with a focus on preventative care and lifestyle, helping you not just treat illness, but achieve lasting wellness.</p>
            </div>
            <div className="mt-8">
              <Link href="/about" className="bg-primary-500 hover:bg-primary-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 text-lg">
                Learn More About Dr. Rosenberg
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorSection;
