
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, MapPin, Bookmark, Calendar, MessageSquare } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { destinations, faqs } from '@/constants/destinations';

// Define search result types
type SearchResultType = 'destination' | 'faq' | 'blog' | 'gallery';

interface SearchResult {
  id: string;
  title: string;
  subtitle?: string;
  image?: string;
  type: SearchResultType;
  url: string;
}

interface SearchBoxProps {
  onClose?: () => void;
  className?: string;
}

// Mock blog posts for searching
const blogPosts = [
  {
    id: "1",
    title: "Top 10 Hidden Gems in Southern India",
    excerpt: "Discover lesser-known destinations in South India",
    image: "https://images.unsplash.com/photo-1602015111052-a1c88d9e2552?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c291dGglMjBpbmRpYXxlbnwwfHwwfHx8MA%3D",
  },
  {
    id: "2",
    title: "A Foodie's Guide to North Indian Street Food",
    excerpt: "Explore the vibrant street food scene of North India",
    image: "https://images.unsplash.com/photo-1517244683847-7456b63c5969?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwZm9vZHxlbnwwfHwwfHx8MA%3D",
  },
];

// Mock gallery images for searching
const galleryItems = [
  {
    id: "1",
    title: "Taj Mahal at sunrise",
    category: "Architecture",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFqJTIwbWFoYWx8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: "2",
    title: "Sunset at Palolem Beach, Goa",
    category: "Beaches",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z29hJTIwYmVhY2h8ZW58MHx8MHx8fDA%3D",
  },
];

const SearchBox: React.FC<SearchBoxProps> = ({ onClose, className }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [activeTab, setActiveTab] = useState<SearchResultType | 'all'>('all');
  const navigate = useNavigate();

  // Create unified search results
  useEffect(() => {
    if (searchTerm.length < 3) {
      setSearchResults([]);
      setShowResults(false);
      return;
    }
    
    const term = searchTerm.toLowerCase();
    
    // Search destinations
    const destinationResults: SearchResult[] = destinations
      .filter(dest => 
        dest.name.toLowerCase().includes(term) || 
        dest.location.toLowerCase().includes(term) ||
        dest.category.toLowerCase().includes(term) ||
        dest.description.toLowerCase().includes(term)
      )
      .map(dest => ({
        id: dest.id,
        title: dest.name,
        subtitle: dest.location,
        image: dest.image,
        type: 'destination',
        url: `/featured/${dest.id}`
      }));
    
    // Search FAQs
    const faqResults: SearchResult[] = faqs
      .filter(faq => 
        faq.question.toLowerCase().includes(term) || 
        faq.answer.toLowerCase().includes(term)
      )
      .map((faq, index) => ({
        id: `faq-${index}`,
        title: faq.question,
        subtitle: faq.answer.substring(0, 60) + '...',
        type: 'faq',
        url: `/faq#faq-${index}`
      }));
    
    // Search blog posts
    const blogResults: SearchResult[] = blogPosts
      .filter(post => 
        post.title.toLowerCase().includes(term) || 
        post.excerpt.toLowerCase().includes(term)
      )
      .map(post => ({
        id: post.id,
        title: post.title,
        subtitle: post.excerpt,
        image: post.image,
        type: 'blog',
        url: `/blog/${post.id}`
      }));
    
    // Search gallery
    const galleryResults: SearchResult[] = galleryItems
      .filter(item => 
        item.title.toLowerCase().includes(term) || 
        item.category.toLowerCase().includes(term)
      )
      .map(item => ({
        id: item.id,
        title: item.title,
        subtitle: item.category,
        image: item.image,
        type: 'gallery',
        url: `/gallery`
      }));
    
    // Combine all results
    const allResults = [
      ...destinationResults, 
      ...faqResults, 
      ...blogResults, 
      ...galleryResults
    ];
    
    setSearchResults(allResults);
    setShowResults(true);
  }, [searchTerm]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
  };

  const handleSelectResult = (result: SearchResult) => {
    setShowResults(false);
    if (onClose) onClose();
    navigate(result.url);
  };

  // Filter results based on active tab
  const filteredResults = activeTab === 'all' 
    ? searchResults 
    : searchResults.filter(result => result.type === activeTab);

  // Get result counts by type
  const resultCounts = {
    all: searchResults.length,
    destination: searchResults.filter(r => r.type === 'destination').length,
    faq: searchResults.filter(r => r.type === 'faq').length,
    blog: searchResults.filter(r => r.type === 'blog').length,
    gallery: searchResults.filter(r => r.type === 'gallery').length,
  };

  // Get type icon
  const getTypeIcon = (type: SearchResultType) => {
    switch (type) {
      case 'destination':
        return <MapPin size={16} className="mr-1 text-india-blue" />;
      case 'faq':
        return <MessageSquare size={16} className="mr-1 text-india-green" />;
      case 'blog':
        return <Calendar size={16} className="mr-1 text-india-saffron" />;
      case 'gallery':
        return <Bookmark size={16} className="mr-1 text-purple-500" />;
    }
  };

  return (
    <div className={`relative ${className}`}>
      <div className="flex items-center">
        <div className="relative flex-grow">
          <Search 
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" 
            size={18} 
          />
          <Input
            type="text"
            placeholder="Search destinations, FAQs, blogs, or galleries..."
            value={searchTerm}
            onChange={handleSearch}
            className="pl-10 pr-4 py-2 w-full border-gray-200 focus:border-india-saffron focus:ring-1 focus:ring-india-saffron"
          />
        </div>
        {onClose && (
          <Button 
            variant="ghost" 
            size="icon"
            onClick={onClose} 
            className="ml-2"
          >
            <X size={18} />
          </Button>
        )}
      </div>

      {/* Search Results */}
      {showResults && searchResults.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-md shadow-lg z-50 max-h-[80vh] overflow-hidden flex flex-col">
          {/* Tabs */}
          <div className="flex items-center border-b border-gray-100 px-2 overflow-x-auto">
            <Button 
              variant="ghost" 
              size="sm" 
              className={`flex items-center ${activeTab === 'all' ? 'text-india-blue font-medium' : 'text-gray-500'}`}
              onClick={() => setActiveTab('all')}
            >
              All ({resultCounts.all})
            </Button>
            {resultCounts.destination > 0 && (
              <Button 
                variant="ghost" 
                size="sm" 
                className={`flex items-center ${activeTab === 'destination' ? 'text-india-blue font-medium' : 'text-gray-500'}`}
                onClick={() => setActiveTab('destination')}
              >
                <MapPin size={16} className="mr-1" />
                Destinations ({resultCounts.destination})
              </Button>
            )}
            {resultCounts.faq > 0 && (
              <Button 
                variant="ghost" 
                size="sm" 
                className={`flex items-center ${activeTab === 'faq' ? 'text-india-blue font-medium' : 'text-gray-500'}`}
                onClick={() => setActiveTab('faq')}
              >
                <MessageSquare size={16} className="mr-1" />
                FAQs ({resultCounts.faq})
              </Button>
            )}
            {resultCounts.blog > 0 && (
              <Button 
                variant="ghost" 
                size="sm" 
                className={`flex items-center ${activeTab === 'blog' ? 'text-india-blue font-medium' : 'text-gray-500'}`}
                onClick={() => setActiveTab('blog')}
              >
                <Calendar size={16} className="mr-1" />
                Blog ({resultCounts.blog})
              </Button>
            )}
            {resultCounts.gallery > 0 && (
              <Button 
                variant="ghost" 
                size="sm" 
                className={`flex items-center ${activeTab === 'gallery' ? 'text-india-blue font-medium' : 'text-gray-500'}`}
                onClick={() => setActiveTab('gallery')}
              >
                <Bookmark size={16} className="mr-1" />
                Gallery ({resultCounts.gallery})
              </Button>
            )}
          </div>
          
          {/* Results List */}
          <div className="overflow-y-auto max-h-[calc(80vh-40px)]">
            {filteredResults.length > 0 ? (
              <div className="p-2">
                {filteredResults.map(result => (
                  <div 
                    key={`${result.type}-${result.id}`}
                    className="flex items-center p-2 cursor-pointer hover:bg-gray-50 rounded-md"
                    onClick={() => handleSelectResult(result)}
                  >
                    {result.image ? (
                      <img 
                        src={result.image} 
                        alt={result.title}
                        className="w-12 h-12 object-cover rounded-md mr-3"
                      />
                    ) : (
                      <div className="w-12 h-12 bg-gray-100 rounded-md flex items-center justify-center mr-3">
                        {getTypeIcon(result.type)}
                      </div>
                    )}
                    <div>
                      <div className="flex items-center">
                        {getTypeIcon(result.type)}
                        <span className="text-xs text-gray-500">
                          {result.type.charAt(0).toUpperCase() + result.type.slice(1)}
                        </span>
                      </div>
                      <p className="font-medium text-gray-800">{result.title}</p>
                      {result.subtitle && (
                        <p className="text-sm text-gray-500 line-clamp-1">{result.subtitle}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-4 text-center text-gray-500">
                No results found for this category.
              </div>
            )}
          </div>
        </div>
      )}

      {showResults && searchResults.length === 0 && searchTerm.length > 2 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-md shadow-lg z-50">
          <div className="p-4 text-center text-gray-500">
            No results found matching "{searchTerm}". We're continuously updating our content.
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBox;
