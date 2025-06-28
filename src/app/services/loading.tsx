import LoadingSpinner from '@/components/LoadingSpinner';

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600">Comprehensive Healthcare Solutions</p>
        </div>
        
        {/* Loading spinner */}
        <div className="flex justify-center mb-12">
          <LoadingSpinner size="default" message="Loading services..." />
        </div>
        
        {/* Service cards skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 animate-pulse">
              {/* Icon placeholder */}
              <div className="w-16 h-16 bg-gray-200 rounded-full mb-4 mx-auto"></div>
              
              {/* Title */}
              <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto mb-4"></div>
              
              {/* Description lines */}
              <div className="space-y-2 mb-6">
                <div className="h-3 bg-gray-200 rounded"></div>
                <div className="h-3 bg-gray-200 rounded"></div>
                <div className="h-3 bg-gray-200 rounded w-5/6"></div>
              </div>
              
              {/* Features list */}
              <div className="space-y-2 mb-6">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-200 rounded-full mr-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-200 rounded-full mr-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-200 rounded-full mr-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>
              
              {/* Button placeholder */}
              <div className="h-10 bg-gray-200 rounded-md"></div>
            </div>
          ))}
        </div>
        
        {/* Call to action section skeleton */}
        <div className="mt-16 bg-primary-50 rounded-lg p-8 text-center animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/2 mx-auto mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto mb-6"></div>
          <div className="h-12 bg-gray-200 rounded-md w-48 mx-auto"></div>
        </div>
      </div>
    </div>
  );
}