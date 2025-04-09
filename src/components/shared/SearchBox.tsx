
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { destinations } from '@/constants/destinations';

interface SearchBoxProps {
  onClose?: () => void;
  className?: string;
}

const SearchBox: React.FC<SearchBoxProps> = ({ onClose, className }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<typeof destinations>([]);
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    
    if (term.length > 2) {
      const results = destinations.filter(
        dest => 
          dest.name.toLowerCase().includes(term.toLowerCase()) || 
          dest.location.toLowerCase().includes(term.toLowerCase()) ||
          dest.category.toLowerCase().includes(term.toLowerCase())
      );
      setSearchResults(results);
      setShowResults(true);
    } else {
      setSearchResults([]);
      setShowResults(false);
    }
  };

  const handleSelectResult = (id: string) => {
    setShowResults(false);
    if (onClose) onClose();
    navigate(`/featured/${id}`);
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
            placeholder="Search destinations, locations, or categories..."
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
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-md shadow-lg z-10 max-h-80 overflow-y-auto">
          <div className="p-2">
            {searchResults.map(result => (
              <div 
                key={result.id}
                className="flex items-center p-2 cursor-pointer hover:bg-gray-50 rounded-md"
                onClick={() => handleSelectResult(result.id)}
              >
                <img 
                  src={result.image} 
                  alt={result.name}
                  className="w-12 h-12 object-cover rounded-md mr-3"
                />
                <div>
                  <p className="font-medium text-gray-800">{result.name}</p>
                  <p className="text-sm text-gray-500">{result.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {showResults && searchResults.length === 0 && searchTerm.length > 2 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-md shadow-lg z-10">
          <div className="p-4 text-center text-gray-500">
            No destinations found matching "{searchTerm}"
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBox;
