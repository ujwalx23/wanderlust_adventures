
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from '@/components/ui/button';
import { MapPin, ArrowRight } from 'lucide-react';
import { Destination } from '@/constants/destinations';

interface DestinationCardProps {
  destination: Destination;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ destination }) => {
  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-0 relative">
        <div className="h-48 overflow-hidden rounded-t-md">
          <img
            src={destination.image || '/placeholder.svg'}
            alt={destination.name}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-india-blue mb-2">{destination.name}</h3>
          <div className="flex items-center text-gray-600 mb-2">
            <MapPin className="mr-2 h-4 w-4" />
            {destination.location}
          </div>
          <p className="text-sm text-gray-700">{destination.description.substring(0, 100)}...</p>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between p-4 bg-gray-50 border-t">
        <span className="text-sm text-gray-500">
          Suitable for: {destination.suitableFor}
        </span>
        <Link to={`/featured/${destination.id}`}>
          <Button size="sm" className="bg-india-saffron hover:bg-india-marigold text-white">
            Explore <ArrowRight size={16} className="ml-2" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default DestinationCard;
