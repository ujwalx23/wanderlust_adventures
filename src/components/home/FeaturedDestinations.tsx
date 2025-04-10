
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
  const featuredDestinations = destinations || [
    {
      id: '1',
      name: 'Mumbai',
      location: 'Uttar Pradesh',
      image: '/lovable-uploads/6499599a-6529-4969-89ef-c5830389383b.jpg',
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
      image: '/lovable-uploads/64995a4a-4969-499d-a951-549964549a92.jpg',
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
      image: 'https://images.unsplash.com/photo-1602151433823-937546a4d8ea?q=80&w=1892&auto=format&fit=crop&ixlib=rb-4.0.3',
      description: 'Experience the tranquil backwaters and lush greenery of God\'s Own Country.',
      suitableFor: 'Nature and Relaxation',
      category: 'Nature',
      rating: 4.9,
      bestTimeToVisit: 'October to February',
    },
    {
      id: '4',
      name: 'Varanasi',
      location: 'Uttar Pradesh',
      image: 'https://images.unsplash.com/photo-1561361058-c24e04bd9055?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3',
      description: 'Discover the spiritual heart of India with its ancient ghats and rich cultural heritage.',
      suitableFor: 'Spiritual Journeys',
      category: 'Spiritual',
      rating: 4.5,
      bestTimeToVisit: 'November to February',
    },
    {
      id: '5',
      name: 'Goa Beaches',
      location: 'Goa',
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3',
      description: 'Relax on pristine beaches and enjoy the vibrant nightlife of India\'s favorite coastal destination.',
      suitableFor: 'Beach Holidays',
      category: 'Beach',
      rating: 4.6,
      bestTimeToVisit: 'November to February',
    },
    {
      id: '6',
      name: 'Darjeeling',
      location: 'West Bengal',
      image: 'https://images.unsplash.com/photo-1544634076-a90160ddf44d?q=80&w=1826&auto=format&fit=crop&ixlib=rb-4.0.3',
      description: 'Experience the breathtaking Himalayan views and world-famous tea plantations.',
      suitableFor: 'Mountain Escapes',
      category: 'Mountain',
      rating: 4.7,
      bestTimeToVisit: 'March to May',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-india-blue text-center mb-8">
          Featured Destinations in India
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Explore our curated selection of the most enchanting destinations across India, each offering a unique blend of history, culture, and natural beauty.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredDestinations.map(destination => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Link to="/featured">
            <Button className="bg-india-blue hover:bg-india-blue/90">
              Show More Destinations
              <ArrowRight size={18} className="ml-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;
