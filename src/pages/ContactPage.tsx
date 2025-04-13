import React from 'react';
import Layout from '@/components/layout/Layout';
import { Phone, Mail, Clock, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactPage = () => {
  const openContactForm = () => {
    window.open('https://forms.gle/mefzKQXMZcHHuvpU8', '_blank');
  };

  return (
    <Layout>
      <div className="bg-gray-50 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-10 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-india-blue mb-4">
              Contact Us
            </h1>
            <p className="text-gray-600 mb-6">
              Have questions or need assistance? Get in touch with me 💕, and I'll be happy to help you plan your perfect Indian adventure.
            </p>

            <div className="bg-white p-6 rounded-lg shadow-sm mb-8 max-w-2xl mx-auto">
              <h2 className="text-xl font-semibold text-gray-800 mb-3">Submit Your Inquiry</h2>
              <p className="text-gray-600 mb-4">
                Please use our Google Form to submit your inquiry. I'll get back to you as soon as possible.
              </p>
              <Button 
                onClick={openContactForm}
                className="bg-india-saffron hover:bg-india-marigold text-white font-medium flex items-center gap-2"
              >
                Open Contact Form <ExternalLink size={16} />
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a href="#general-inquiries" className="px-4 py-2 bg-india-saffron/10 text-india-saffron rounded-full hover:bg-india-saffron/20 transition-colors">
              General Inquiries
            </a>
            <a href="#destination-advice" className="px-4 py-2 bg-india-blue/10 text-india-blue rounded-full hover:bg-india-blue/20 transition-colors">
              Destination Advice
            </a>
            <a href="#collaboration" className="px-4 py-2 bg-india-green/10 text-india-green rounded-full hover:bg-india-green/20 transition-colors">
              Collaboration Opportunities
            </a>
            <a href="#feedback" className="px-4 py-2 bg-purple-100 text-purple-600 rounded-full hover:bg-purple-200 transition-colors">
              Feedback & Suggestions
            </a>
            <a href="#careers" className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors">
              Careers
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Get in Touch</h2>

              <div className="space-y-6">                
                <div className="flex" id="general-inquiries">
                  <div className="bg-india-green/10 p-3 rounded-full mr-4">
                    <Phone className="text-india-green" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Discord</h3>
                    <p className="text-gray-600">
                      <a href="https://discordapp.com/users/1243952128272371764" className="hover:text-india-saffron transition-colors">
                        morningstar_23.
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex" id="destination-advice">
                  <div className="bg-india-blue/10 p-3 rounded-full mr-4">
                    <Mail className="text-india-blue" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                    <p className="text-gray-600">
                      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ujwalsingh164@gmail.com" className="hover:text-india-saffron transition-colors">
                        ujwalsingh164@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex" id="collaboration">
                  <div className="bg-india-marigold/10 p-3 rounded-full mr-4">
                    <Clock className="text-india-marigold" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">My Availability</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-8" id="feedback">
                <h3 className="font-semibold text-gray-800 mb-3">Connect With Me</h3>
                <div className="flex space-x-4">
                  <a href="https://x.com/UJWALSINGH23" target="_blank" rel="noopener noreferrer" className="bg-gray-200 hover:bg-india-saffron hover:text-white p-2 rounded-full transition-colors">
                    {/* Twitter Icon */}
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253..." />
                    </svg>
                  </a>
                  <a href="https://github.com/morningstarluci23" target="_blank" rel="noopener noreferrer" className="bg-gray-200 hover:bg-india-saffron hover:text-white p-2 rounded-full transition-colors">
                    {/* GitHub Icon */}
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2..." clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="https://discordapp.com/users/1243952128272371764" target="_blank" rel="noopener noreferrer" className="bg-gray-200 hover:bg-india-saffron hover:text-white p-2 rounded-full transition-colors">
                    {/* Discord Icon */}
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43..." clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div id="careers" className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Submit Your Inquiry via Google Form</h2>
              <p className="text-gray-600 mb-6">
                We use a Google Form to collect and organize inquiries. This helps me respond more efficiently to your questions and requests.
              </p>
              <div className="space-y-4">
                <p className="text-gray-700">
                  <strong>What to expect:</strong> After submitting the form, I will review your inquiry and get back to you within 24–48 business hours.
                </p>
                <p className="text-gray-700">
                  <strong>Required information:</strong> Please include your name, subject, message, and the nature of your inquiry in the form.
                </p>
                <p className="text-gray-700">
                  <strong>Google Form link:</strong> You will be redirected to our official Google Form where you can submit your inquiry securely.
                </p>
              </div>
              <div className="mt-8">
                <Button 
                  onClick={openContactForm}
                  className="w-full bg-india-saffron hover:bg-india-marigold text-white font-medium flex items-center justify-center gap-2 py-6"
                >
                  Open Contact Form <ExternalLink size={16} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
