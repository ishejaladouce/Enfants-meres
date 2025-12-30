import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Organization info */}
          <div>
            <h2 className="text-2xl font-bold mb-4">OEM</h2>
            <p className="text-gray-300">
              Empowering teen mothers in Rulindo District through education, 
              livestock support, and vocational training since 2015.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="/work" className="text-gray-300 hover:text-white">Our Programs</a></li>
              <li><a href="/impact" className="text-gray-300 hover:text-white">Impact Stories</a></li>
              <li><a href="/partners" className="text-gray-300 hover:text-white">Partners</a></li>
            </ul>
          </div>

          {/* Legal info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Registered: 17/02/2012</li>
              <li className="text-gray-300">Certificate: N° 176/RGB/NGO/LP/12/2017</li>
              <li className="text-gray-300">Rwanda Governance Board</li>
              <li><a href="/privacy" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Social media */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600"><Facebook /></a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-blue-400"><Twitter /></a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-pink-600"><Instagram /></a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-red-600"><Youtube /></a>
            </div>
            <p className="text-gray-400 text-sm">
              Operating in all 17 sectors of Rulindo District
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p className="flex items-center justify-center">
            Made with <Heart size={16} className="mx-1 text-red-500" /> for teen mothers in Rwanda
          </p>
          <p className="mt-2">© {new Date().getFullYear()} Organisation Enfants Mere. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;