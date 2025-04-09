
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

// Gallery categories
const categories = ["All", "Beaches", "Mountains", "Temples", "Wildlife", "Architecture", "Food", "Festivals", "People"];

// Gallery images
const galleryImages = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFqJTIwbWFoYWx8ZW58MHx8MHx8fDA%3D",
    caption: "Taj Mahal at sunrise",
    category: "Architecture"
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z29hJTIwYmVhY2h8ZW58MHx8MHx8fDA%3D",
    caption: "Sunset at Palolem Beach, Goa",
    category: "Beaches"
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1589738576592-c0d0e2b029f6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z29sZGVuJTIwdGVtcGxlfGVufDB8fDB8fHww",
    caption: "Golden Temple, Amritsar",
    category: "Temples"
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1598238536523-f1a806394705?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aGltYWxheWFzfGVufDB8fDB8fHww",
    caption: "Majestic Himalayan peaks",
    category: "Mountains"
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1598838073192-05c942ede858?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVuZ2FsJTIwdGlnZXJ8ZW58MHx8MHx8fDA%3D",
    caption: "Bengal Tiger at Ranthambore",
    category: "Wildlife"
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1517244683847-7456b63c5969?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwZm9vZHxlbnwwfHwwfHx8MA%3D",
    caption: "Colorful Indian thali",
    category: "Food"
  },
  {
    id: "7",
    src: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2VyYWxhJTIwYmFja3dhdGVyc3xlbnwwfHwwfHx8MA%3D",
    caption: "Houseboats in Kerala backwaters",
    category: "Beaches"
  },
  {
    id: "8",
    src: "https://images.unsplash.com/photo-1604868189265-219ba7bf7ea3?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG9saXxlbnwwfHwwfHx8MA%3D",
    caption: "Celebrating Holi festival",
    category: "Festivals"
  },
  {
    id: "9",
    src: "https://images.unsplash.com/photo-1611242320536-f12d3541249b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmFyYW5hc2klMjByaXZlcnxlbnwwfHwwfHx8MA%3D",
    caption: "Evening prayers by the Ganges, Varanasi",
    category: "People"
  },
  {
    id: "10",
    src: "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwd2VkZGluZ3xlbnwwfHwwfHx8MA%3D",
    caption: "Traditional Indian wedding",
    category: "Festivals"
  },
  {
    id: "11",
    src: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGphaXB1cnxlbnwwfHwwfHx8MA%3D",
    caption: "Hawa Mahal, Jaipur",
    category: "Architecture"
  },
  {
    id: "12",
    src: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuYWxpfGVufDB8fDB8fHww",
    caption: "Pine forests in Manali",
    category: "Mountains"
  },
  {
    id: "13",
    src: "https://images.unsplash.com/photo-1573480813647-552e9b7b5394?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZWxlcGhhbnQlMjBpbmRpYXxlbnwwfHwwfHx8MA%3D",
    caption: "Elephants at Periyar Wildlife Sanctuary",
    category: "Wildlife"
  },
  {
    id: "14",
    src: "https://images.unsplash.com/photo-1514222788835-3a1a1d5b32f8?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwbWFya2V0fGVufDB8fDB8fHww",
    caption: "Colorful spice market",
    category: "Food"
  },
  {
    id: "15",
    src: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwb2xkJTIwd29tYW58ZW58MHx8MHx8fDA%3D",
    caption: "Elderly woman in Rajasthan",
    category: "People"
  },
  {
    id: "16",
    src: "https://images.unsplash.com/photo-1592985684811-6c0f98adb014?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a29udGhpbWFsYXklMjB0ZW1wbGV8ZW58MHx8MHx8fDA%3D",
    caption: "Ancient temple in Tamil Nadu",
    category: "Temples"
  },
  {
    id: "17",
    src: "https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW5kYW1hbiUyMGJlYWNofGVufDB8fDB8fHww",
    caption: "Crystal clear waters of Andaman Islands",
    category: "Beaches"
  },
  {
    id: "18",
    src: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwZGl5YXxlbnwwfHwwfHx8MA%3D",
    caption: "Diwali celebrations with oil lamps",
    category: "Festivals"
  }
];

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // Filter images based on active category
  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeCategory);

  // Handle image click for lightbox
  const handleImageClick = (src: string) => {
    setSelectedImage(src);
    document.body.style.overflow = "hidden";
  };
  
  // Close lightbox
  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  return (
    <Layout>
      <div className="bg-gray-50 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-10 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-india-blue mb-4">
              Travel Gallery
            </h1>
            <p className="text-gray-600">
              Explore stunning visual inspiration from across India's diverse landscapes and cultures.
            </p>
          </div>
          
          {/* Category Filter */}
          <div className="flex overflow-x-auto py-4 mb-8 -mx-4 px-4 scrollbar-hide">
            <div className="flex space-x-2 mx-auto">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  className={`rounded-full whitespace-nowrap ${
                    activeCategory === category 
                      ? 'bg-india-saffron text-white hover:bg-india-saffron/90' 
                      : 'border-gray-300'
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
          
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image) => (
              <div 
                key={image.id} 
                className="relative overflow-hidden rounded-lg group cursor-pointer h-64"
                onClick={() => handleImageClick(image.src)}
              >
                <img 
                  src={image.src} 
                  alt={image.caption} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-40 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm font-medium">{image.caption}</p>
                  <span className="text-xs bg-india-saffron/80 px-2 py-1 rounded-full mt-1 inline-block">
                    {image.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Empty state */}
          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">No images found for this category.</p>
            </div>
          )}
          
          {/* Lightbox */}
          {selectedImage && (
            <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center" onClick={closeLightbox}>
              <div className="relative max-w-4xl max-h-[90vh] overflow-hidden">
                <img 
                  src={selectedImage} 
                  alt="Gallery preview" 
                  className="max-w-full max-h-[90vh] object-contain"
                  onClick={(e) => e.stopPropagation()}
                />
                <button 
                  className="absolute top-4 right-4 bg-white/20 p-2 rounded-full hover:bg-white/40 transition-colors"
                  onClick={closeLightbox}
                >
                  <X className="text-white" size={24} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default GalleryPage;
