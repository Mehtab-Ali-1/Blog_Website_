
import Image from "next/image";
import { FaUsers, FaLaptopCode, FaPencilAlt } from "react-icons/fa";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative  bg-gradient-to-b from-blue-600 to-indigo-800 text-white py-24 ">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              About MA Blog
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Exploring Technology, Sharing Knowledge, Building Community
            </p>
          </div>
        </div>
        {/* Decorative wave SVG */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg className="w-full h-auto" viewBox="0 0 1440 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,186.7C672,203,768,181,864,154.7C960,128,1056,96,1152,96C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <FaUsers className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Community</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Building a vibrant community of tech enthusiasts and learners.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <FaLaptopCode className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Technical Excellence</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Sharing cutting-edge technical insights and best practices.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <FaPencilAlt className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Quality Content</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Creating well-researched and actionable content.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center transform hover:scale-105 transition duration-300">
              <Image
                src="/blog2.jpg" // Make sure to add team member images to your public folder
                alt="Team Member"
                width={120}
                height={120}
                className="rounded-full mx-auto mb-6"
              />
              <h3 className="text-xl font-bold mb-2">John Doe</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Founder & Lead Developer</p>
            </div>
            {/* Add more team members as needed */}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Want to Work Together?</h2>
          <p className="text-xl mb-8">We are always looking for new opportunities and collaborations.</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition duration-300">
            Get in Touch
          </button>
        </div>
      </section>
    </main>
  );
}