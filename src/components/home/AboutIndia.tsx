
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
                src="https://static.toiimg.com/photo/msid-92089121,width-96,height-65.cms" 
                alt="Holi Festival" 
                className="rounded-lg shadow-md w-full h-40 object-cover"
              />
              <img 
                src="https://hblimg.mmtcdn.com/content/hubble/img/goa/mmt/destination/m_destination-goa-landscape_l_400_640.jpg" 
                alt="Beaches" 
                className="rounded-lg shadow-md w-full h-48 object-cover"
              />
            </div>
            <div className="space-y-4 mt-6">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Prambanan_Temple_Yogyakarta_Indonesia.jpg/1200px-Prambanan_Temple_Yogyakarta_Indonesia.jpg" 
                alt="Historical Temple" 
                className="rounded-lg shadow-md w-full h-48 object-cover"
              />
              <img 
                src="https://i1.wp.com/www.zingbus.com/blog/wp-content/uploads/2023/03/The-Himalayas-1024x683.jpg?ssl=1" 
                alt="Himalayan Mountains" 
                className="rounded-lg shadow-md w-full h-40 object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-india-blue mb-6">Experience the Diversity of India</h2>
            <p className="text-gray-600 mb-6">
              India is a land of incredible contrasts and diversity - from snow-capped Himalayan peaks in the north to tropical beaches in the south, from bustling modern cities to ancient temples and traditions. Every region offers distinct cultures, cuisines, languages, and landscapes.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
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
                  <h3 className="font-semibold text-gray-800">Warm Hospitality and love 💕</h3>
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
