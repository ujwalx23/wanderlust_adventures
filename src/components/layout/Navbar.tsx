
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import SearchBox from '@/components/shared/SearchBox';

const Navbar = () => {
  const isMobile = useIsMobile();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Toggle search overlay
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/about" className="flex items-center">
            <div className="bg-white rounded-full p-2 mr-2">
              <img 
                src="/lovable-uploads/8b1902a9-0732-4915-b409-5a6f610d3a26.png" 
                alt="Wanderlust Logo" 
                className="h-6 w-6"
              />
            </div>
            <span className="text-xl font-bold text-india-blue">Wanderlust Adventures</span>
          </Link>

          {isMobile ? (
            <>
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="icon" onClick={toggleSearch} data-search-trigger="true">
                  <Search className="h-5 w-5" />
                </Button>
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Menu className="h-6 w-6" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-[85%] sm:w-[385px]">
                    <nav className="flex flex-col space-y-4 mt-6">
                      <Link to="/" className="text-lg font-medium hover:text-india-saffron">Home</Link>
                      <Link to="/about" className="text-lg font-medium hover:text-india-saffron">About</Link>
                      <Link to="/featured" className="text-lg font-medium hover:text-india-saffron">Featured</Link>
                      <Link to="/books" className="text-lg font-medium hover:text-india-saffron">Books</Link>
                      <Link to="/blog" className="text-lg font-medium hover:text-india-saffron">Blog</Link>
                      <Link to="/travel-quiz" className="text-lg font-medium hover:text-india-saffron">Quiz</Link>
                      <Link to="/games" className="text-lg font-medium hover:text-india-saffron">Games</Link>
                      <Link to="/music" className="text-lg font-medium hover:text-india-saffron">Music</Link>
                      <Link to="/download" className="text-lg font-medium hover:text-india-saffron">Download PDF</Link>
                      <Link to="/faq" className="text-lg font-medium hover:text-india-saffron">FAQ</Link>
                      <Link to="/gallery" className="text-lg font-medium hover:text-india-saffron">Gallery</Link>
                      <Link to="/contact" className="text-lg font-medium hover:text-india-saffron">Contact</Link>
                    </nav>
                  </SheetContent>
                </Sheet>
              </div>
            </>
          ) : (
            <div className="flex items-center space-x-8">
              <nav className="flex items-center space-x-6">
                <Link to="/" className="font-medium text-gray-700 hover:text-india-saffron">Home</Link>
                <Link to="/about" className="font-medium text-gray-700 hover:text-india-saffron">About</Link>
                <Link to="/featured" className="font-medium text-gray-700 hover:text-india-saffron">Featured</Link>
                <Link to="/books" className="font-medium text-gray-700 hover:text-india-saffron">Books</Link>
                <Link to="/blog" className="font-medium text-gray-700 hover:text-india-saffron">Blog</Link>
                <Link to="/travel-quiz" className="font-medium text-gray-700 hover:text-india-saffron">Quiz</Link>
                <Link to="/games" className="font-medium text-gray-700 hover:text-india-saffron">Games</Link>
                <Link to="/music" className="font-medium text-gray-700 hover:text-india-saffron">Music</Link>
                <Link to="/download" className="font-medium text-gray-700 hover:text-india-saffron">Download PDF</Link>
                <Link to="/faq" className="font-medium text-gray-700 hover:text-india-saffron">FAQ</Link>
                <Link to="/gallery" className="font-medium text-gray-700 hover:text-india-saffron">Gallery</Link>
                <Link to="/contact" className="font-medium text-gray-700 hover:text-india-saffron">Contact</Link>
              </nav>
              <div className="flex items-center space-x-2">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={toggleSearch}
                  data-search-trigger="true"
                >
                  <Search className="h-5 w-5" />
                </Button>
                <a href="https://www.linkedin.com/in/ujwalsingh23" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>
          )}

          {/* Search Overlay - Shown on both mobile and desktop */}
          {isSearchOpen && (
            <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4">
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center mb-4 sm:mb-6">
                  <h2 className="text-xl font-semibold text-india-blue">Search</h2>
                  <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(false)}>
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                <SearchBox onClose={() => setIsSearchOpen(false)} />
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
