
import React from 'react';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import FeaturedDestinations from '@/components/home/FeaturedDestinations';
import AboutIndia from '@/components/home/AboutIndia';
import Categories from '@/components/home/Categories';
import Testimonials from '@/components/home/Testimonials';
import SubscribeSection from '@/components/home/SubscribeSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutIndia />
      <FeaturedDestinations />
      <Categories />
      <Testimonials />
      <SubscribeSection />
    </Layout>
  );
};

export default Index;
