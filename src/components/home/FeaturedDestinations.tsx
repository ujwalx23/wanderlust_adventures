
import React from 'react';
import { Link } from 'react-router-dom';
import DestinationCard from '@/components/featured/DestinationCard';
import { Destination } from '@/constants/destinations';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface FeaturedDestinationsProps {
  destinations?: Destination[];
}

const FeaturedDestinations: React.FC<FeaturedDestinationsProps> = ({ destinations }) => {
  // Just use the first 3 destinations
  const featuredDestinations = destinations?.slice(0, 3) || [
    {
      id: '1',
      name: 'Jaipur',
      location: 'Rajasthan',
      image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3',
      description: 'Explore the Pink City with its majestic forts and vibrant culture.',
      suitableFor: 'History and Culture',
      category: 'Historic',
      rating: 4.7,
      bestTimeToVisit: 'October to March',
    },
    {
      id: '2',
      name: 'Udaipur',
      location: 'Rajasthan',
      image: 'https://images.unsplash.com/photo-1627301517602-9aaeabf11f89?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3',
      description: 'Discover the romantic City of Lakes with its stunning palaces and serene beauty.',
      suitableFor: 'Romantic Getaways',
      category: 'Romantic',
      rating: 4.8,
      bestTimeToVisit: 'September to March',
    },
    {
      id: '3',
      name: 'Kerala Backwaters',
      location: 'Kerala',
      image: 'https://images.unsplash.com/photo-1602151433823-937546a4d8ea?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3',
      description: 'Experience the tranquil backwaters and lush greenery of God\'s Own Country.',
      suitableFor: 'Nature and Relaxation',
      category: 'Nature',
      rating: 4.9,
      bestTimeToVisit: 'October to February',
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-india-blue text-center mb-8">
          Featured Destinations in India
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Explore our curated selection of the most enchanting destinations across India, each offering a unique blend of history, culture, and natural beauty.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredDestinations.map(destination => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Link to="/featured">
            <Button className="bg-india-blue hover:bg-india-blue/90">
              View All Destinations
              <ArrowRight size={18} className="ml-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;
