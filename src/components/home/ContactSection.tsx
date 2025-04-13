import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactSection = () => {
  return (
    <section id="contact" className="bg-india-blue py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Contact Me
          </h2>
          <p className="text-blue-100 mb-8">
            Have questions about your travel plans? Want to suggest improvements, share feedback, or report issues?
            I’m here to help you plan your perfect Indian adventure!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Email */}
            <div className="bg-white/10 rounded-lg p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-india-white text-black mb-4">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="text-white font-medium mb-2">Email Me</h3>
              <a 
                href="mailto:ujwalsingh164@gmail.com" 
                className="text-blue-100 hover:text-india-saffron transition-colors"
              >
                ujwalsingh164@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="bg-white/10 rounded-lg p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-india-white text-black mb-4">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="text-white font-medium mb-2">Call Me</h3>
              <p className="text-blue-100">+91 12345 67890</p>
            </div>

            {/* Location */}
            <div className="bg-white/10 rounded-lg p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-india-white text-black mb-4">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="text-white font-medium mb-2">Location</h3>
              <p className="text-blue-100">India (Remote)</p>
            </div>
          </div>

          <Link to="/contact">
            <Button 
              className="bg-india-green hover:bg-india-marigold text-white font-medium px-8 py-6 h-auto text-lg"
            >
              Contact Me Now
            </Button>
          </Link>

          <p className="text-blue-200 text-sm mt-6">
            I’ll get back to you within 48 hours 💕
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
