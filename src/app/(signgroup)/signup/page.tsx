// src/app/signup/page.tsx

import Link from "next/link";
import Image from "next/image";

export default function SignUp() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-300 to-indigo-600">
      {/* Background Image with Blur */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/signin-bg.jpg"
          alt="Background"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>
      </div>

      {/* Sign Up Container */}
      <div className="w-full max-w-md p-8 mx-6 my-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2 dark:text-white">Create Account</h1>
          <p className="text-gray-600 dark:text-white">Join our community today</p>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-100">
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 text-gray-900"
                placeholder="John"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-100">
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 text-gray-900 "
                placeholder="Doe"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-100">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 text-gray-900"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-100">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 text-gray-900"
              placeholder="Create a strong password"
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-100">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 text-gray-900"
              placeholder="Confirm your password"
            />
          </div>

          <div className="flex items-center">
            <input
              id="terms"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-200 text-blue-600 focus:ring-blue-500"
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-600 dark:text-gray-100">
              I agree to the{" "}
              <Link href="/terms" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 hover:underline">
                Privacy Policy
              </Link>
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-[1.02] shadow-lg"
          >
            Create Account
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600 dark:text-gray-100">
          Already have an account?{" "}
          <Link href="/signin" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 hover:underline font-medium">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}