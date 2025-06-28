import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { getSortedPostsData } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog | Lotus Direct Care',
  description: 'Insights on health, wellness, and navigating the healthcare system from Dr. Aaron Rosenberg and the Lotus Direct Care team.',
  openGraph: {
    title: 'Lotus Direct Care Blog',
    description: 'Expert insights on Direct Primary Care, functional medicine, and your health.',
    type: 'website',
  },
};

const BlogCard = ({ post }: { post: { slug: string, title: string, excerpt: string, date: string, author: string, image: string } }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
    <Link href={`/blog/${post.slug}`}>
      <div className="relative h-64 w-full">
        <Image 
          src={post.image} 
          alt={post.title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
    </Link>
    <div className="p-6 flex-grow flex flex-col">
      <p className="text-sm text-gray-500 mb-2">{post.date} • {post.author}</p>
      <h2 className="text-2xl font-bold text-gray-800 mb-3 flex-grow">
        <Link href={`/blog/${post.slug}`} className="hover:text-primary-500 transition-colors">
          {post.title}
        </Link>
      </h2>
      <p className="text-gray-600 mb-4">{post.excerpt}</p>
      <Link href={`/blog/${post.slug}`} className="text-primary-500 font-semibold hover:underline mt-auto">
        Read More →
      </Link>
    </div>
  </div>
);

export default function BlogPage() {
  const posts = getSortedPostsData();

  return (
    <main>
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-primary-800">The Lotus Direct Care Blog</h1>
          <p className="text-xl text-primary-700 mt-2">Insights on health, wellness, and navigating the healthcare system.</p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          {posts.length > 0 ? (
            <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No blog posts found. Check back soon!</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}