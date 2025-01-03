import React from "react";
import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white w-full ">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-300">
              We share insights about technology, programming, and digital
              innovation. Join our community of tech enthusiasts.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-300 hover:text-white transition"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white transition"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>

            <div className="flex space-x-4 mb-4">
              <Link href="https://www.facebook.com/profile.php?id=100024441846165" className="text-gray-300 hover:text-white">
                <FaFacebook className="w-6 h-6" />
              </Link>
              <Link href="https://www.twitter.com/" className="text-gray-300 hover:text-white">
                <FaTwitter className="w-6 h-6" />
              </Link>
              <Link href="https://www.instagram.com/mehtab_ali_011___/?next=%2Fproud.mp%2Ffeed%2F" className="text-gray-300 hover:text-white">
                <FaInstagram className="w-6 h-6" />
              </Link>
              <Link href="https://www.linkedin.com/in/mehtab-ali-561651301/" className="text-gray-300 hover:text-white">
                <FaLinkedin className="w-6 h-6" />
              </Link>
              <Link href="https://www.youtube.com/" className="text-gray-300 hover:text-white">
                <FaYoutube className="w-6 h-6" />
              </Link>
              <Link href="https://github.com/Mehtab-Ali-1" className="text-gray-300 hover:text-white">
                <FaGithub className="w-6 h-6" />
              </Link>
            </div>
            <p className="text-gray-300">
              Email: ma8317076@gmail.com
              <br />
              Phone: +92 322-2917069
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-300">
            © {new Date().getFullYear()} Blog Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
