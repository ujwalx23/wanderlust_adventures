
import React from 'react';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import FeaturedDestinations from '@/components/home/FeaturedDestinations';
import AboutIndia from '@/components/home/AboutIndia';
import TravelBlogs from '@/components/home/TravelBlogs';
import SubscribeSection from '@/components/home/SubscribeSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutIndia />
      <FeaturedDestinations />
      <TravelBlogs />
      <SubscribeSection />
    </Layout>
  );
};

export default Index;
