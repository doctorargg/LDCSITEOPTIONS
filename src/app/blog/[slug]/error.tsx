'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function BlogPostError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const params = useParams();
  const slug = params?.slug as string;

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(`Blog post error for slug "${slug}":`, error);
  }, [error, slug]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-16">
      <div className="max-w-2xl w-full">
        <div className="text-center">
          <div className="mb-8">
            <svg
              className="mx-auto h-16 w-16 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Article Not Available
          </h1>
          
          <p className="text-lg text-gray-600 mb-2">
            We couldn't load this blog post. It might have been moved or is temporarily unavailable.
          </p>
          
          {slug && (
            <p className="text-sm text-gray-500 mb-8">
              Article ID: <code className="bg-gray-100 px-2 py-1 rounded">{slug}</code>
            </p>
          )}
        </div>
        
        <div className="space-y-4 max-w-md mx-auto">
          <button
            onClick={() => reset()}
            className="w-full px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Try Again
          </button>
          
          <Link
            href="/blog"
            className="block w-full px-6 py-3 bg-gray-200 text-gray-800 font-medium rounded-lg hover:bg-gray-300 transition-colors duration-200 text-center"
          >
            Back to All Articles
          </Link>
        </div>
        
        <div className="mt-12 border-t border-gray-200 pt-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 text-center">
            You might be interested in:
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto">
            <Link
              href="/services"
              className="p-4 bg-white rounded-lg border border-gray-200 hover:border-primary transition-colors duration-200"
            >
              <h3 className="font-medium text-gray-900 mb-1">Our Services</h3>
              <p className="text-sm text-gray-600">
                Explore our comprehensive health and wellness services
              </p>
            </Link>
            
            <Link
              href="/contact"
              className="p-4 bg-white rounded-lg border border-gray-200 hover:border-primary transition-colors duration-200"
            >
              <h3 className="font-medium text-gray-900 mb-1">Contact Us</h3>
              <p className="text-sm text-gray-600">
                Get in touch with our team for personalized support
              </p>
            </Link>
          </div>
        </div>
        
        {process.env.NODE_ENV === 'development' && (
          <details className="mt-8 p-4 bg-gray-100 rounded-lg text-left max-w-md mx-auto">
            <summary className="cursor-pointer font-medium text-gray-700">
              Error Details (Development Only)
            </summary>
            <pre className="mt-2 text-xs text-gray-600 overflow-auto">
              {error.message}
              {error.stack && '\n\n' + error.stack}
            </pre>
          </details>
        )}
      </div>
    </div>
  );
}