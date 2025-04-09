
import React from 'react';
import { Clock, MapPin, Users, Smile } from 'lucide-react';

const AboutIndia = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-india-soil/10 to-india-marigold/10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1598387993281-cecf8b71a8f8?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Holi Festival" 
                className="rounded-lg shadow-md w-full h-40 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1606298855672-1c604679a5a7?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Indian Street Food" 
                className="rounded-lg shadow-md w-full h-48 object-cover"
              />
            </div>
            <div className="space-y-4 mt-6">
              <img 
                src="https://images.unsplash.com/photo-1585264550248-1778be3b6368?q=80&w=1036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Traditional Dance" 
                className="rounded-lg shadow-md w-full h-48 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1625129098600-91d229410d11?q=80&w=1036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Himalayan Mountains" 
                className="rounded-lg shadow-md w-full h-40 object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl font-bold text-india-blue mb-6">Experience the Diversity of India</h2>
            <p className="text-gray-600 mb-6">
              India is a land of incredible contrasts and diversity - from snow-capped Himalayan peaks in the north to tropical beaches in the south, from bustling modern cities to ancient temples and traditions. Every region offers distinct cultures, cuisines, languages, and landscapes.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="bg-india-saffron/20 p-2 rounded-md mr-3">
                  <Clock className="text-india-saffron" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Rich History</h3>
                  <p className="text-sm text-gray-600">5000+ years of civilization and heritage</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-india-green/20 p-2 rounded-md mr-3">
                  <MapPin className="text-india-green" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Diverse Geography</h3>
                  <p className="text-sm text-gray-600">Mountains, deserts, beaches, forests</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-india-blue/20 p-2 rounded-md mr-3">
                  <Users className="text-india-blue" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Cultural Diversity</h3>
                  <p className="text-sm text-gray-600">22+ languages and countless traditions</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-india-marigold/20 p-2 rounded-md mr-3">
                  <Smile className="text-india-marigold" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Warm Hospitality</h3>
                  <p className="text-sm text-gray-600">Experience 'Atithi Devo Bhava'</p>
                </div>
              </div>
            </div>
            
            <p className="text-gray-600">
              With Wanderlust Adventures, you'll discover authentic experiences that showcase the true essence of India, connecting with local cultures and creating memories that last a lifetime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIndia;
