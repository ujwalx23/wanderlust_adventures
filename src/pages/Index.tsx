
import React from 'react';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import FeaturedDestinations from '@/components/home/FeaturedDestinations';
import AboutIndia from '@/components/home/AboutIndia';
import TravelBlogs from '@/components/home/TravelBlogs';
import SubscribeSection from '@/components/home/SubscribeSection';
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
              Not sure where to go? Let our trip finder help you discover the perfect destination for your next adventure.
            </p>
            <div className="flex justify-center">
              <Link to="/featured">
                <Button className="bg-india-saffron hover:bg-india-marigold text-white">
                  Choose a Card
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
      <SubscribeSection />
    </Layout>
  );
};

export default Index;
