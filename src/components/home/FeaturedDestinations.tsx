
import React from 'react';
import { Link } from 'react-router-dom';
import { destinations } from '@/constants/destinations';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { StarIcon, MapPin, ArrowRight } from 'lucide-react';

const FeaturedDestinations = () => {
  // Take the first 3 destinations to display
  const featuredDestinations = destinations.slice(0, 3);
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-india-blue mb-4">Featured Destinations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of India's most enchanting destinations, each offering unique experiences and unforgettable memories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredDestinations.map((destination) => (
            <Link to={`/featured/${destination.id}`} key={destination.id}>
              <Card className="destination-card overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300">
                <div className="relative h-60">
                  <img 
                    src={destination.image} 
                    alt={destination.name} 
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full text-sm font-medium text-india-saffron">
                    {destination.category}
                  </span>
                </div>
                <CardContent className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-800">{destination.name}</h3>
                    <p className="text-india-saffron font-bold">{destination.price}</p>
                  </div>
                  <div className="flex items-center text-gray-500 mb-3">
                    <MapPin size={16} className="mr-1" />
                    <span className="text-sm">{destination.location}</span>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-2">{destination.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon 
                          key={i} 
                          size={16} 
                          className={`${i < Math.floor(destination.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                          fill={i < Math.floor(destination.rating) ? 'currentColor' : 'none'}
                        />
                      ))}
                      <span className="ml-1 text-sm text-gray-600">{destination.rating}</span>
                    </div>
                    <span className="text-india-blue hover:text-india-saffron text-sm font-medium">
                      View Details
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/all-destinations">
            <Button variant="outline" className="border-india-blue text-india-blue hover:bg-india-blue hover:text-white">
              View All 48 Destinations
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;
