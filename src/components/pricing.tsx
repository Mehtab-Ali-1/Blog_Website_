"use client";
import { motion } from "framer-motion";
// import { CheckIcon } from "@heroicons/react/24/solid/CheckIcon";
import CheckIcon from "@heroicons/react/24/solid/CheckIcon";
const PricingSection = () => {
  return (
    <section className="py-24 dark:bg-gradient-to-b dark:from-black dark:to-gray-800  bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 max-w-7xl ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold pb-2 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Our Pricing Plans
          </h2>
          <p className="text-gray-600 text-lg ">
            Choose the perfect plan for your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {/* Basic Plan */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white dark:bg-black rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100"
          >
            <h3 className="text-2xl font-bold mb-4 dark:text-gray-500">Basic</h3>
            <div className="text-5xl font-bold mb-6 dark:text-gray-200 ">
              $29<span className="text-lg text-gray-500">/month</span>
            </div>
            <ul className="mb-8 space-y-4 ">
              <li className="flex items-center">
                <CheckIcon className="w-5 h-5 mr-3 text-green-500" />5 Projects
              </li>
              <li className="flex items-center">
                <CheckIcon className="w-5 h-5 mr-3 text-green-500" />
                20GB Storage
              </li>
              <li className="flex items-center">
                <CheckIcon className="w-5 h-5 mr-3 text-green-500" />
                Basic Support
              </li>
            </ul>
            <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-xl font-medium hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
              Get Started
            </button>
          </motion.div>

          {/* Pro Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-2xl shadow-xl p-8 transform scale-105 hover:shadow-2xl transition-all duration-300"
          >
            <div className="absolute top-0 right-0 -mt-4 mr-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-sm font-bold py-1 px-3 rounded-full">
              Popular
            </div>
            <h3 className="text-2xl font-bold mb-4">Pro</h3>
            <div className="text-5xl font-bold mb-6">
              $59<span className="text-lg opacity-75">/month</span>
            </div>
            <ul className="mb-8 space-y-4">
              <li className="flex items-center">
                <CheckIcon className="w-5 h-5 mr-3" />
                10 Projects
              </li>
              <li className="flex items-center">
                <CheckIcon className="w-5 h-5 mr-3" />
                50GB Storage
              </li>
              <li className="flex items-center">
                <CheckIcon className="w-5 h-5 mr-3" />
                Priority Support
              </li>
            </ul>
            <button className="w-full bg-white text-blue-600 py-3 px-6 rounded-xl font-medium hover:bg-gray-50 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
              Get Started
            </button>
          </motion.div>

          {/* Enterprise Plan */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white dark:bg-black rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100"
          >
            <h3 className="text-2xl font-bold mb-4 dark:text-gray-500">Enterprise</h3>
            <div className="text-5xl font-bold mb-6 dark:text-gray-200">
              $99<span className="text-lg text-gray-500">/month</span>
            </div>
            <ul className="mb-8 space-y-4 ">
              <li className="flex items-center">
                <CheckIcon className="w-5 h-5 mr-3 text-green-500" />
                Unlimited Projects
              </li>
              <li className="flex items-center">
                <CheckIcon className="w-5 h-5 mr-3 text-green-500" />
                100GB Storage
              </li>
              <li className="flex items-center">
                <CheckIcon className="w-5 h-5 mr-3 text-green-500" />
                24/7 Support
              </li>
            </ul>
            <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-xl font-medium hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
              Get Started
            </button>
          </motion.div>
        </div>
      </div>
      </section>


  );
};

export default PricingSection;
