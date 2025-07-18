
import React from 'react';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import FeaturedDestinations from '@/components/home/FeaturedDestinations';
import AboutIndia from '@/components/home/AboutIndia';
import TravelBlogs from '@/components/home/TravelBlogs';
import ContactSection from '@/components/home/ContactSection';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

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
      <TravelBlogs />
      <ContactSection />
    </Layout>
  );
};

export default Index;
