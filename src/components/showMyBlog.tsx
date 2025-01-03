import React from 'react';
import Image from "next/image";

export default function ShowMyBlog () {
  return (
    <main>
        <section className="py-12 dark:bg-black bg-gray-50">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-8 animate-fade-in">Top Blogs</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Blog Card 1 */}
      <div className="bg-white dark:bg-black rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300 animate-slide-up">
        <Image src="/blog.jpg" alt="Blog 1" width={200} height={200} className="w-full h-48 object-cover"/>
        <div className="p-6">
          <h3 className="font-bold text-xl mb-2">Blog Title 1</h3>
          <p className="text-gray-600 dark:text-white mb-4">Brief description of the blog post goes here...</p>
          <a href="#" className="text-blue-500 hover:text-blue-700">Read More →</a>
        </div>
      </div>

      {/* Blog Card 2 */}
      <div className="bg-white dark:bg-black rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300 animate-slide-up delay-100">
        <Image src="/blog2.jpg" alt="Blog 2" width={200} height={200} className="w-full h-48 object-cover"/>
        <div className="p-6">
          <h3 className="font-bold text-xl mb-2">Blog Title 2</h3>
          <p className="text-gray-600 dark:text-white mb-4">Brief description of the blog post goes here...</p>
          <a href="#" className="text-blue-500 hover:text-blue-700">Read More →</a>
        </div>
      </div>

      {/* Blog Card 3 */}
      <div className="bg-white dark:bg-black rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300 animate-slide-up delay-200">
        <Image src="/blog1.jpg" alt="Blog 3" width={200} height={200} className="w-full h-48 object-cover"/>
        <div className="p-6">
          <h3 className="font-bold text-xl mb-2">Blog Title 3</h3>
          <p className="text-gray-600 dark:text-white mb-4">Brief description of the blog post goes here...</p>
          <a href="#" className="text-blue-500 hover:text-blue-700">Read More →</a>
        </div>
      </div>
    </div>
  </div>
</section>
    </main>
)
}

