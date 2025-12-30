import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react'; // You'll need to install: npm install lucide-react

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top info bar */}
      <div className="bg-green-700 text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Phone size={16} className="mr-2" />
              <span>+250 786 217 724</span>
            </div>
            <div className="flex items-center">
              <Mail size={16} className="mr-2" />
              <span>contact@oem-rwanda.org</span>
            </div>
          </div>
          <div className="flex items-center">
            <MapPin size={16} className="mr-2" />
            <span>Rulindo District, Rwanda</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto py-4 px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-green-600 text-white p-3 rounded-lg">
              <span className="font-bold text-xl">OEM</span>
            </div>
            <div className="ml-3">
              <h1 className="font-bold text-gray-800">Organisation Enfants Mere</h1>
              <p className="text-sm text-gray-600">Empowering Teen Mothers</p>
            </div>
          </div>

          {/* Navigation links */}
          <div className="hidden md:flex space-x-8">
            <a href="/" className="font-medium text-gray-700 hover:text-green-600">Home</a>
            <a href="/about" className="font-medium text-gray-700 hover:text-green-600">About Us</a>
            <a href="/work" className="font-medium text-gray-700 hover:text-green-600">Our Work</a>
            <a href="/donate" className="font-medium text-gray-700 hover:text-green-600">Donate</a>
            <a href="/contact" className="font-medium text-gray-700 hover:text-green-600">Contact</a>
          </div>

          {/* Donate button */}
          <a 
            href="/donate" 
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-full shadow-lg transition duration-300"
          >
            Donate Now
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;