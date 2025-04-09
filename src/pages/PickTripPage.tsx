
import React, { useState, useRef, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { destinations } from '@/constants/destinations';
import { MapPin, Calendar, Star } from 'lucide-react';

const wheelDestinations = destinations.slice(0, 8);

const PickTripPage = () => {
  const [spinning, setSpinning] = useState<boolean>(false);
  const [rotation, setRotation] = useState<number>(0);
  const [selectedDestination, setSelectedDestination] = useState<number | null>(null);
  const wheelRef = useRef<HTMLDivElement>(null);
  
  const colors = [
    'bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500',
    'bg-purple-500', 'bg-pink-500', 'bg-indigo-500', 'bg-teal-500'
  ];
  
  const spinWheel = () => {
    if (spinning) return;
    
    setSpinning(true);
    setSelectedDestination(null);
    
    // Random between 5-10 full rotations plus a random segment
    const spinCount = 5 + Math.floor(Math.random() * 5);
    const extraDegrees = Math.floor(Math.random() * 360);
    const totalRotation = spinCount * 360 + extraDegrees;
    
    // Calculate which destination was selected
    const degreePerSegment = 360 / wheelDestinations.length;
    const selectedIndex = Math.floor((360 - (extraDegrees % 360)) / degreePerSegment);
    
    setRotation(totalRotation);
    
    setTimeout(() => {
      setSpinning(false);
      setSelectedDestination(selectedIndex);
      
      // Scroll to result
      setTimeout(() => {
        document.getElementById('result-section')?.scrollIntoView({ behavior: 'smooth' });
      }, 500);
    }, 5000);
  };

  return (
    <Layout>
      <div className="bg-gray-50 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-10 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-india-blue mb-4">
              Pick a Trip For Me
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Can't decide where to go? Let fate decide! Spin the wheel and discover your next Indian adventure.
            </p>
          </div>
          
          <div className="flex flex-col items-center justify-center max-w-4xl mx-auto">
            <div className="relative w-full max-w-md mb-8">
              {/* Triangle pointer */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 z-10">
                <div className="w-0 h-0 
                  border-l-[20px] border-l-transparent
                  border-t-[30px] border-t-india-red
                  border-r-[20px] border-r-transparent">
                </div>
              </div>
              
              {/* Wheel */}
              <div 
                ref={wheelRef}
                className="w-full aspect-square rounded-full relative overflow-hidden border-8 border-india-blue shadow-xl"
                style={{ 
                  transform: `rotate(${rotation}deg)`,
                  transition: spinning ? 'transform 5s cubic-bezier(0.2, 0.8, 0.05, 1)' : 'none'
                }}
              >
                {wheelDestinations.map((destination, index) => {
                  const angle = (360 / wheelDestinations.length) * index;
                  return (
                    <div
                      key={destination.id}
                      className={`absolute w-1/2 h-1/2 origin-bottom-right ${colors[index % colors.length]} flex items-center justify-center`}
                      style={{
                        transform: `rotate(${angle}deg) skew(${90 - (360 / wheelDestinations.length)}deg)`,
                        transformOrigin: '0% 100%'
                      }}
                    >
                      <div 
                        className="text-white font-bold text-xs pl-8 whitespace-nowrap overflow-hidden"
                        style={{ 
                          transform: `skew(${-(90 - (360 / wheelDestinations.length))}deg) rotate(${90 + (360 / wheelDestinations.length) / 2}deg)`,
                          width: '100px'
                        }}
                      >
                        {destination.name}
                      </div>
                    </div>
                  );
                })}
                <div className="absolute inset-0 rounded-full border-2 border-white/30"></div>
              </div>
            </div>
            
            <Button 
              onClick={spinWheel} 
              disabled={spinning}
              size="lg"
              className="bg-india-saffron hover:bg-india-saffron/90"
            >
              {spinning ? 'Spinning...' : 'Spin the Wheel'}
            </Button>
            
            {/* Result Section */}
            <div id="result-section" className="mt-16 w-full">
              {selectedDestination !== null && (
                <div className="animate-fade-in">
                  <h2 className="text-2xl font-bold text-center text-india-blue mb-8">
                    Your Destination Has Been Chosen!
                  </h2>
                  
                  <Card className="overflow-hidden border-none shadow-lg">
                    <div className="aspect-video relative">
                      <img 
                        src={wheelDestinations[selectedDestination].image} 
                        alt={wheelDestinations[selectedDestination].name} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                        <div className="p-6">
                          <span className="inline-block bg-india-saffron text-white px-3 py-1 rounded-full text-xs font-medium mb-2">
                            {wheelDestinations[selectedDestination].category}
                          </span>
                          <h1 className="text-3xl font-bold text-white">{wheelDestinations[selectedDestination].name}</h1>
                        </div>
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <div className="flex items-center text-gray-600 mb-4">
                        <MapPin size={18} className="mr-2" />
                        <span>{wheelDestinations[selectedDestination].location}</span>
                      </div>
                      
                      <div className="flex items-center text-gray-600 mb-6">
                        <Calendar size={18} className="mr-2" />
                        <span>Best time to visit: {wheelDestinations[selectedDestination].bestTimeToVisit || 'October to March'}</span>
                      </div>
                      
                      <div className="mb-6">
                        <div className="flex items-center mb-2">
                          <h3 className="font-semibold text-gray-800 mr-2">Rating:</h3>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                size={16} 
                                className={`${i < Math.floor(wheelDestinations[selectedDestination].rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                                fill={i < Math.floor(wheelDestinations[selectedDestination].rating) ? 'currentColor' : 'none'}
                              />
                            ))}
                          </div>
                          <span className="ml-1 text-sm text-gray-600">{wheelDestinations[selectedDestination].rating}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 mb-6">
                        {wheelDestinations[selectedDestination].description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {['Historic', 'Cultural', 'Nature', 'Adventure'].map((tag) => (
                          <span key={tag} className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex justify-between">
                        <Button variant="outline" onClick={spinWheel} className="border-india-blue text-india-blue">
                          Spin Again
                        </Button>
                        <Button className="bg-india-blue hover:bg-india-blue/90" asChild>
                          <a href={`https://www.google.com/search?q=${encodeURIComponent(wheelDestinations[selectedDestination].name)}+tourism+india`} target="_blank" rel="noopener noreferrer">
                            Learn More
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PickTripPage;
