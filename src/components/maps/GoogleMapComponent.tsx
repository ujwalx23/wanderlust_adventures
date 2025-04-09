
import React, { useEffect, useRef } from 'react';
import { MapPin } from 'lucide-react';

interface GoogleMapComponentProps {
  location: string;
  name: string;
}

const GoogleMapComponent: React.FC<GoogleMapComponentProps> = ({ location, name }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // For a production app, we would embed a proper Google Map here
    // Since API keys are sensitive info, we'll create a placeholder with information
    
    // In a real implementation, you would use:
    // const googleMapScript = document.createElement('script')
    // googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places`
    // window.document.body.appendChild(googleMapScript)
    // googleMapScript.addEventListener('load', () => {
    //   // Initialize map
    // })
  }, [location]);

  return (
    <div className="relative w-full h-full bg-gray-100 flex items-center justify-center rounded-lg overflow-hidden">
      <div className="absolute inset-0 bg-gray-200">
        {/* Placeholder map UI */}
        <div className="h-full w-full bg-gradient-to-br from-gray-100 to-gray-300 flex flex-col items-center justify-center p-4">
          <MapPin size={32} className="text-india-saffron mb-2" />
          <h4 className="text-lg font-medium text-gray-800 text-center">{name}</h4>
          <p className="text-gray-600 text-center">{location}</p>
          <p className="text-sm text-gray-500 mt-4 text-center">
            Google Maps integration requires API key.<br/>
            In production, an interactive map would be displayed here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GoogleMapComponent;
