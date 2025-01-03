// src/app/signin/page.tsx

import Link from "next/link";
import Image from "next/image";

export default function SignIn() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-300 to-indigo-600">
      {/* Sign In Container */}
      <div className="w-full max-w-md p-8 mx-6 my-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2 dark:text-white">Welcome Back</h1>
          <p className="text-gray-600 dark:text-white">Sign in to your account</p>
        </div>

        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-100">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-3 border dark:bg-gray-50 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 text-gray-900"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-100">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full px-4 py-3 border dark:bg-gray-50 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 text-gray-900"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded  border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-600 dark:text-gray-100">
                Remember me
              </label>
            </div>
            <Link
              href="/forgot-password"
              className="text-sm font-medium hover:font-semibold dark:text-blue-400 hover:text-blue-700 text-blue-600"
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-600  hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-[1.02]"
          >
            Sign in
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600 dark:text-gray-100">
          Don`t have an account?{" "}
          <Link href="/signup" className="text-blue-600 hover:font-semibold hover:text-blue-700 font-medium dark:text-blue-400">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}