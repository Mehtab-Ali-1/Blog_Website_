import { blogs } from '@/data/blog'
import Image from "next/image"
import Link from "next/link"

export default function Blog() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">Our Blog Posts</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white dark:bg-black rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-56">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover"
              />
            </div>
            
            <div className="p-6 dark:border-2">
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm dark:text-gray-500 text-gray-600">{blog.date}</p>
                <p className="text-sm font-medium text-blue-600">{blog.author}</p>
              </div>
              
              <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white hover:text-blue-600">
                <Link href={`/blog/${blog.slug}`}>
                  {blog.title}
                </Link>
              </h2>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                {blog.description}
              </p>
              
              <Link 
                href={`/blog/${blog.slug}`}
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mb-11"></div>
    </div>
  )
}

