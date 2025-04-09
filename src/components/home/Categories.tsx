
import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '@/constants/destinations';

// Define category icon mapping
const categoryIcons: Record<string, string> = {
  "Beach": "https://img.icons8.com/pastel-glyph/64/138808/beach--v2.png",
  "Mountain": "https://img.icons8.com/pastel-glyph/64/138808/mountain--v1.png",
  "Cultural": "https://img.icons8.com/pastel-glyph/64/138808/temple.png",
  "Historical": "https://img.icons8.com/pastel-glyph/64/138808/taj-mahal.png",
  "Spiritual": "https://img.icons8.com/pastel-glyph/64/138808/prayer.png",
  "Adventure": "https://img.icons8.com/pastel-glyph/64/138808/climbing.png",
  "Nature": "https://img.icons8.com/pastel-glyph/64/138808/natural-food.png",
  "All": "https://img.icons8.com/pastel-glyph/64/138808/compass.png"
};

const Categories = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-india-blue mb-4">Explore by Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover a variety of experiences across India, from serene beaches to ancient temples and thrilling adventures.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {categories.filter(cat => cat !== "All").map((category) => (
            <Link 
              to={`/featured?category=${category}`} 
              key={category}
              className="group flex flex-col items-center p-4 rounded-lg border border-gray-200 bg-white hover:border-india-saffron hover:shadow-md transition-all duration-300"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-50 mb-3 group-hover:bg-green-100 transition-colors">
                <img 
                  src={categoryIcons[category]} 
                  alt={category} 
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-gray-800 font-medium group-hover:text-india-saffron transition-colors">
                {category}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
