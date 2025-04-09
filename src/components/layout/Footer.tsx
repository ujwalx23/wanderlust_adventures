
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Phone, Mail, MapPin, MessageCircle, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-india-blue text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                <span className="text-india-blue font-bold text-lg">W</span>
              </div>
              <span className="font-bold text-xl">
                Wanderlust <span className="text-india-saffron">Adventures</span>
              </span>
            </Link>
            <p className="text-gray-300 mb-4">
              Discover the rich cultural heritage and breathtaking landscapes of incredible India with our curated travel experiences.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/ujwalsingh23" target="_blank" rel="noopener noreferrer" className="text-white hover:text-india-saffron transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.linkedin.com/in/ujwalsingh23" target="_blank" rel="noopener noreferrer" className="text-white hover:text-india-saffron transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/in/ujwalsingh23" target="_blank" rel="noopener noreferrer" className="text-white hover:text-india-saffron transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://www.linkedin.com/in/ujwalsingh23" target="_blank" rel="noopener noreferrer" className="text-white hover:text-india-saffron transition-colors">
                <Youtube size={20} />
              </a>
              <a href="https://www.linkedin.com/in/ujwalsingh23" target="_blank" rel="noopener noreferrer" className="text-white hover:text-india-saffron transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-india-saffron transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/featured" className="text-gray-300 hover:text-india-saffron transition-colors">Featured Destinations</Link>
              </li>
              <li>
                <Link to="/all-destinations" className="text-gray-300 hover:text-india-saffron transition-colors">All Destinations</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-india-saffron transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-india-saffron transition-colors">Travel Blog</Link>
              </li>
              <li>
                <Link to="/reviews" className="text-gray-300 hover:text-india-saffron transition-colors">Traveler Reviews</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-india-saffron transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-india-saffron transition-colors">FAQs</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-india-saffron transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Destinations</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/featured?category=Beach" className="text-gray-300 hover:text-india-saffron transition-colors">Beaches</Link>
              </li>
              <li>
                <Link to="/featured?category=Mountain" className="text-gray-300 hover:text-india-saffron transition-colors">Mountains</Link>
              </li>
              <li>
                <Link to="/featured?category=Historical" className="text-gray-300 hover:text-india-saffron transition-colors">Historical Sites</Link>
              </li>
              <li>
                <Link to="/featured?category=Spiritual" className="text-gray-300 hover:text-india-saffron transition-colors">Spiritual Journeys</Link>
              </li>
              <li>
                <Link to="/featured?category=Wildlife" className="text-gray-300 hover:text-india-saffron transition-colors">Wildlife</Link>
              </li>
              <li>
                <Link to="/featured?category=Adventure" className="text-gray-300 hover:text-india-saffron transition-colors">Adventure</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 flex-shrink-0 mt-1" size={18} />
                <span className="text-gray-300">
                  42 Travel House, MG Road, 
                  <br />Bangalore - 560001, Karnataka
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 flex-shrink-0" size={18} />
                <a href="tel:+919876543210" className="text-gray-300 hover:text-india-saffron transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 flex-shrink-0" size={18} />
                <a href="mailto:info@wanderlustadventures.in" className="text-gray-300 hover:text-india-saffron transition-colors">
                  info@wanderlustadventures.in
                </a>
              </li>
              <li className="flex items-center mt-4">
                <a href="https://www.linkedin.com/in/ujwalsingh23" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-india-saffron transition-colors">
                  <Linkedin className="mr-2 flex-shrink-0" size={18} />
                  Connect on LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Wanderlust Adventures. All rights reserved.
          </p>
        </div>
      </div>

      {/* Chat Button - Fixed */}
      <a 
        href="https://cutt.cx/wanderlust" 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-india-green text-white p-4 rounded-full shadow-lg hover:bg-india-saffron transition-colors z-40"
        aria-label="Chat with us"
      >
        <MessageCircle size={24} />
      </a>
    </footer>
  );
};

export default Footer;
