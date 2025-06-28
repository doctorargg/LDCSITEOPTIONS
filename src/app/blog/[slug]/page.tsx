import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllPostSlugs, getPostData } from '@/lib/blog';
import { FaCalendar, FaUser, FaArrowLeft } from 'react-icons/fa';

export async function generateStaticParams() {
  return getAllPostSlugs();
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  try {
    const post = await getPostData(params.slug);
    return {
      title: `${post.title} | Lotus Direct Care`,
      description: post.excerpt,
      openGraph: {
        title: post.title,
        description: post.excerpt,
        type: 'article',
        authors: [post.author],
        publishedTime: post.date,
        images: [
          {
            url: post.image,
            width: 1200,
            height: 630,
            alt: post.title,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.excerpt,
        images: [post.image],
      },
    };
  } catch {
    return {
      title: 'Blog Post Not Found | Lotus Direct Care',
    };
  }
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  let post;
  
  try {
    post = await getPostData(params.slug);
  } catch (error) {
    notFound();
  }

  return (
    <main>
      {/* Hero Section with Featured Image */}
      <section className="relative h-96 bg-gray-900">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover opacity-70"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <Link 
              href="/blog" 
              className="inline-flex items-center text-white hover:text-primary-300 mb-4 transition-colors"
            >
              <FaArrowLeft className="mr-2" /> Back to Blog
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 max-w-4xl">
              {post.title}
            </h1>
            <div className="flex items-center text-gray-300 space-x-4">
              <span className="flex items-center">
                <FaCalendar className="mr-2" />
                {new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
              <span className="flex items-center">
                <FaUser className="mr-2" />
                {post.author}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div 
              className="prose prose-lg prose-primary max-w-none
                prose-headings:font-bold prose-headings:text-gray-800
                prose-p:text-gray-600 prose-p:leading-relaxed
                prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline
                prose-strong:text-gray-800 prose-strong:font-semibold
                prose-ul:list-disc prose-ul:pl-6
                prose-ol:list-decimal prose-ol:pl-6
                prose-blockquote:border-l-4 prose-blockquote:border-primary-400 
                prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-700
                prose-img:rounded-lg prose-img:shadow-lg"
              dangerouslySetInnerHTML={{ __html: post.content || '' }}
            />
            
            {/* Author Bio Section */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">About the Author</h3>
                <p className="text-gray-600">
                  {post.author} is a healthcare professional at Lotus Direct Care, 
                  dedicated to providing personalized, patient-centered care and educating 
                  the community about health and wellness.
                </p>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-12 bg-primary-50 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-primary-800 mb-4">
                Experience Healthcare That Puts You First
              </h3>
              <p className="text-primary-700 mb-6 max-w-2xl mx-auto">
                Ready to build a real relationship with your doctor? Join Lotus Direct Care 
                and discover what personalized healthcare truly means.
              </p>
              <Link 
                href="https://app.elationemr.com/book/lotusdirectcare/service-locations/933212881617143?appointment_types=" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 inline-block"
              >
                Schedule a Meet & Greet
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}