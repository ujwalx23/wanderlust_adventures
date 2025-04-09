import React from 'react';
import DestinationCard from '@/components/featured/DestinationCard';
import { Destination } from '@/constants/destinations';

interface FeaturedDestinationsProps {
  destinations?: Destination[];
}

const FeaturedDestinations: React.FC<FeaturedDestinationsProps> = ({ destinations }) => {
  const featuredDestinations = destinations || [
    {
      id: '1',
      name: 'Jaipur',
      location: 'Rajasthan',
      imageUrl: '/lovable-uploads/6499599a-6529-4969-89ef-c5830389383b.jpg',
      description: 'Explore the Pink City with its majestic forts and vibrant culture.',
      suitableFor: 'History and Culture',
    },
    {
      id: '2',
      name: 'Udaipur',
      location: 'Rajasthan',
      imageUrl: '/lovable-uploads/64995a4a-4969-499d-a951-549964549a92.jpg',
      description: 'Discover the romantic City of Lakes with its stunning palaces and serene beauty.',
      suitableFor: 'Romantic Getaways',
    },
    {
      id: '3',
      name: 'Jaisalmer',
      location: 'Rajasthan',
      imageUrl: '/lovable-uploads/64995ab1-ff59-4942-956d-2a9199e52397.jpg',
      description: 'Experience the Golden City with its mesmerizing desert landscapes and ancient forts.',
      suitableFor: 'Adventure and Desert',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-india-blue text-center mb-8">
          Featured Destinations in Rajasthan
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Explore our curated selection of the most enchanting destinations in Rajasthan, each offering a unique blend of history, culture, and natural beauty.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredDestinations.map(destination => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;
