import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaBehance } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white shadow-md p-8 mt-6" id="contact">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Socials */}
        <div>
          <h2 className="text-2xl font-bold text-orange-600">FRESH</h2>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <FaBehance size={20} />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-4">Our Services</h3>
          <ul className="space-y-2 text-gray-600">
            <li>Pricing</li>
            <li>Tracking</li>
            <li>Report a Bug</li>
            <li>Terms of Service</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-4">Our Company</h3>
          <ul className="space-y-2 text-gray-600">
            <li>Reporting</li>
            <li>Get in Touch</li>
            <li>Management</li>
          </ul>
        </div>

        {/* Address */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-4">Address</h3>
          <ul className="space-y-2 text-gray-600">
            <li>121 King St,</li>
            <li>888-123-42278</li>
            <li>freshfood@email.com</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
