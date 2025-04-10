
import React from 'react';
import { MapPin } from 'lucide-react';

interface GoogleMapComponentProps {
  location: string;
  name: string;
}

const GoogleMapComponent: React.FC<GoogleMapComponentProps> = ({ location, name }) => {
  return (
    <div className="relative w-full h-full bg-gray-100 flex items-center justify-center rounded-lg overflow-hidden">
      <div className="absolute inset-0 bg-gray-200">
        <div className="h-full w-full bg-gradient-to-br from-gray-100 to-gray-300 flex flex-col items-center justify-center p-4">
          <MapPin size={32} className="text-india-saffron mb-2" />
          <h4 className="text-lg font-medium text-gray-800 text-center">{name}</h4>
          <p className="text-gray-600 text-center">{location}</p>
        </div>
      </div>
    </div>
  );
};

export default GoogleMapComponent;
