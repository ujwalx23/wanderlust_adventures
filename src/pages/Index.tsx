import React from 'react';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import FeaturedDestinations from '@/components/home/FeaturedDestinations';
import AboutIndia from '@/components/home/AboutIndia';
import TravelBlogs from '@/components/home/TravelBlogs';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight, Mail, Linkedin } from 'lucide-react';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-india-blue mb-4">Plan Your Perfect Adventure</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Not sure where to go? Let our interactive games and tools help you discover the perfect destination for your next adventure.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/games">
                <Button className="bg-india-saffron hover:bg-india-marigold text-white">
                  Would You Rather
                  <ChevronRight size={16} />
                </Button>
              </Link>
              <Link to="/pick-a-trip">
                <Button className="bg-india-green hover:bg-india-green/90 text-white">
                  Pick a Trip
                  <ChevronRight size={16} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <AboutIndia />
      <FeaturedDestinations />
      {/* New Contact Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-india-blue mb-4">
              Your Travel Companion
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto mb-8">
              We're your dedicated travel recommendation platform, committed to crafting personalized journeys that transform ordinary trips into extraordinary experiences. Need guidance? We're here to help!
            </p>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8">
              <a 
                href="mailto:info@wanderlustadventures.in" 
                className="flex items-center gap-2 bg-white border border-india-blue text-india-blue px-4 py-2 rounded-md hover:bg-india-blue hover:text-white transition-colors"
              >
                <Mail size={20} />
                Email Us
              </a>
              <a 
                href="https://www.linkedin.com/in/ujwalsingh23" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white border border-india-blue text-india-blue px-4 py-2 rounded-md hover:bg-india-blue hover:text-white transition-colors"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
            </div>
            
            <Link to="/contact">
              <Button className="bg-india-saffron hover:bg-india-marigold text-white">
                Contact Us
                <ChevronRight size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <TravelBlogs />
      <ContactSection />
    </Layout>
  );
};

export default Index;
