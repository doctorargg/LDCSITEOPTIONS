import Image from 'next/image';
import Link from 'next/link';

const BlogCard = ({ image, title, excerpt, link }: { image: string, title: string, excerpt: string, link: string }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
    <Link href={link}>
      <div className="relative h-56 w-full">
        <Image 
          src={image} 
          alt={title}
          fill
          className="object-cover"
        />
      </div>
    </Link>
    <div className="p-6 flex-grow flex flex-col">
      <h3 className="text-xl font-bold text-gray-800 mb-2 flex-grow">{title}</h3>
      <p className="text-gray-600 mb-4">{excerpt}</p>
      <Link href={link} className="text-primary-500 font-semibold hover:underline mt-auto">
        Read More &raquo;
      </Link>
    </div>
  </div>
);

const BlogPreviewSection = () => {
  // Placeholder data for blog posts
  const posts = [
    {
      image: '/images/lotus_blog_hero.png',
      title: 'The Benefits of a Strong Doctor-Patient Relationship',
      excerpt: 'Discover how direct primary care fosters trust and leads to better health outcomes...',
      link: '/blog/doctor-patient-relationship'
    },
    {
      image: '/images/lotus-functional-medicine-hero.png',
      title: 'Understanding Functional Medicine: A Holistic Approach',
      excerpt: 'Learn how we look at the root cause of illness to help you achieve optimal wellness...',
      link: '/blog/understanding-functional-medicine'
    },
    {
      image: '/images/lotus_pricing_hero.png',
      title: 'Navigating Healthcare Costs: How DPC Can Save You Money',
      excerpt: 'An inside look at the transparent pricing of DPC and how it compares to insurance...',
      link: '/blog/navigating-healthcare-costs'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">From Our Blog</h2>
          <p className="text-xl text-gray-600 mt-2">Stay informed with the latest from Dr. Rosenberg</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/blog" className="bg-primary-500 hover:bg-primary-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 text-lg">
            Visit The Full Blog
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreviewSection;
