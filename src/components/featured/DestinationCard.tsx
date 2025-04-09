
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { StarIcon, MapPin, ArrowRight, Cloud } from 'lucide-react';
import { Destination } from '@/constants/destinations';

interface DestinationCardProps {
  destination: Destination;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ destination }) => {
  return (
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
        </div>
        <div className="flex items-center text-gray-500 mb-3">
          <MapPin size={16} className="mr-1" />
          <span className="text-sm">{destination.location}</span>
        </div>
        <div className="flex items-center text-gray-500 mb-3">
          <Cloud size={16} className="mr-1" />
          <span className="text-sm">Weather: {destination.weather || "25°C, Sunny"}</span>
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
          <Link to={`/featured/${destination.id}`}>
            <Button variant="ghost" className="text-india-blue hover:text-india-saffron p-0 h-auto">
              View Details
              <ArrowRight size={14} className="ml-1" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default DestinationCard;
