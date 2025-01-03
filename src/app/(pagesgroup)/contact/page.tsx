// src/app/contact/page.tsx
import React from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react"; // Make sure to install lucide-react

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900">
      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-900/20 dark:to-purple-900/20" />
        <div className="container mx-auto text-center relative">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 animate-gradient">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-100 max-w-2xl mx-auto leading-relaxed">
            Have questions or suggestions? We`d love to hear from you. Send us a
            message and we`ll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-lg rounded-3xl shadow-2xl p-8 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-indigo-500/20">
              <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Send us a Message
              </h2>
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-100">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 dark:bg-gray-700/50 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-100">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 dark:bg-gray-700/50 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                    placeholder="your@email.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-100">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 dark:bg-gray-700/50 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your message"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/30 transform hover:-translate-y-1 transition-all duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-lg rounded-3xl shadow-2xl p-8 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-blue-500/20">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Contact Information
                </h2>
                <div className="space-y-8">
                  <div className="flex items-start space-x-6 group">
                    <Mail className="w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform duration-200" />
                    <div>
                      <h3 className="font-semibold text-lg">Email</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        ma8317076@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-6 group">
                    <Phone className="w-8 h-8 text-purple-600 group-hover:scale-110 transition-transform duration-200" />
                    <div>
                      <h3 className="font-semibold text-lg">Phone</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        +92 322-2917069
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-6 group">
                    <MapPin className="w-8 h-8 text-pink-600 group-hover:scale-110 transition-transform duration-200" />
                    <div>
                      <h3 className="font-semibold text-lg">Location</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Your Address Here
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-6 group">
                    <Clock className="w-8 h-8 text-indigo-600 group-hover:scale-110 transition-transform duration-200" />
                    <div>
                      <h3 className="font-semibold text-lg">Business Hours</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Mon - Fri: 9:00 AM - 5:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map or Additional Content */}
              <div className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-lg rounded-3xl shadow-2xl p-8 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-purple-500/20">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Find Us
                </h2>
                <div className="aspect-video bg-gray-100 dark:bg-gray-700 rounded-2xl overflow-hidden">
                  <div className="aspect-video bg-gray-100 dark:bg-gray-700 rounded-2xl overflow-hidden">
                    <iframe
                      className="border-0"
                      src="https://www.google.com/maps/embed?pb=YOUR_GOOGLE_MAPS_EMBED_URL"
                      width="100%"
                      height="100%"
                      title="Google Maps Location"
                      aria-label="Google Maps Location"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
