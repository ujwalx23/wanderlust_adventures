import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
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
            Have questions, suggestions, or feedback? I’d love to hear from you and help you explore more of Incredible India!
          </p>

          <div className="grid grid-cols-1 gap-6 mb-8">
            {/* Email */}
            <div className="bg-white/10 rounded-lg p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-india-white text-black mb-4">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="text-white font-medium mb-2">Email Me</h3>
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=ujwalsingh164@gmail.com" 
                className="text-blue-100 hover:text-india-saffron transition-colors"
              >
                click here
              </a>
            </div>
          </div>

          <Link to="/contact">
            <Button 
              className="bg-india-green hover:bg-india-green text-white font-medium px-8 py-6 h-auto text-lg"
            >
              Contact Me 
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
