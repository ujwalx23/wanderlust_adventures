
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { StarIcon, MapPin, Calendar, Clock, Users, ArrowLeft } from 'lucide-react';
import { destinations, Destination } from '@/constants/destinations';
import { useToast } from '@/hooks/use-toast';

const DestinationDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [destination, setDestination] = useState<Destination | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
      const found = destinations.find(dest => dest.id === id);
      setDestination(found || null);
      setLoading(false);
    }, 500);
  }, [id]);

  const handleBookNow = () => {
    toast({
      title: "Booking Request Received",
      description: `Your booking request for ${destination?.name} has been submitted successfully!`,
    });
  };

  if (loading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 min-h-[60vh] flex justify-center items-center">
          <div className="animate-pulse space-y-6 w-full max-w-4xl">
            <div className="h-80 bg-gray-200 rounded-lg w-full"></div>
            <div className="h-8 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (!destination) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 min-h-[60vh] flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Destination Not Found</h1>
          <p className="text-gray-600 mb-8">The destination you're looking for doesn't exist or has been removed.</p>
          <Link to="/featured">
            <Button className="bg-india-blue hover:bg-india-blue/90">
              <ArrowLeft size={16} className="mr-2" />
              Back to Featured Destinations
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link to="/featured" className="flex items-center text-gray-600 hover:text-india-saffron transition-colors">
            <ArrowLeft size={16} className="mr-2" />
            Back to Featured Destinations
          </Link>
        </div>

        {/* Hero section */}
        <div className="relative h-80 md:h-96 rounded-lg overflow-hidden mb-8">
          <img 
            src={destination.image} 
            alt={destination.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
            <span className="inline-block px-3 py-1 rounded-full bg-white text-india-saffron text-sm font-medium mb-2">
              {destination.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-white">{destination.name}</h1>
            <div className="flex items-center text-white/90 mt-2">
              <MapPin size={16} className="mr-1" />
              <span>{destination.location}</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="flex mr-2">
                {[...Array(5)].map((_, i) => (
                  <StarIcon 
                    key={i} 
                    size={18} 
                    className={`${i < Math.floor(destination.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill={i < Math.floor(destination.rating) ? 'currentColor' : 'none'}
                  />
                ))}
              </div>
              <span className="text-gray-700">{destination.rating} rating</span>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">About this destination</h2>
            <p className="text-gray-600 mb-6">
              {destination.description}
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">What to Expect</h3>
                <p className="text-gray-600">
                  Immerse yourself in the rich cultural heritage, breathtaking landscapes, and authentic experiences that {destination.name} has to offer. Whether you're a history enthusiast, nature lover, or culinary explorer, this destination provides a perfect blend of tradition and modernity.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Highlights</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Explore iconic landmarks and hidden gems</li>
                  <li>Experience local culture and traditions</li>
                  <li>Enjoy authentic regional cuisine</li>
                  <li>Meet friendly locals and create lasting memories</li>
                  <li>Capture stunning photographs of breathtaking scenery</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Included in the Package</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Guided tours with experienced local guides</li>
                  <li>Comfortable accommodation</li>
                  <li>Transportation between attractions</li>
                  <li>Selected meals featuring local cuisine</li>
                  <li>All entrance fees to monuments and attractions</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Booking widget */}
          <div>
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 sticky top-24">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-800">Book Your Adventure</h3>
                <p className="text-2xl font-bold text-india-saffron">{destination.price}</p>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center text-gray-600">
                  <Calendar size={18} className="mr-3 text-india-blue" />
                  <span>Available all year round</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock size={18} className="mr-3 text-india-blue" />
                  <span>Duration: 1-3 days recommended</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users size={18} className="mr-3 text-india-blue" />
                  <span>Perfect for families & groups</span>
                </div>
              </div>
              
              <Button 
                onClick={handleBookNow}
                className="w-full bg-india-saffron hover:bg-india-marigold text-white font-medium"
              >
                Book Now
              </Button>
              
              <p className="text-center text-sm text-gray-500 mt-4">
                Free cancellation up to 24 hours before the tour
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DestinationDetail;
