
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Search, Menu, X, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import SearchBox from '../shared/SearchBox';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-india-saffron via-white to-india-green flex items-center justify-center">
              <span className="text-india-blue font-bold text-lg">W</span>
            </div>
            <span className="font-bold text-xl text-india-blue hidden sm:inline-block">
              Wanderlust <span className="text-india-saffron">Adventures</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-800 hover:text-india-saffron transition-colors">Home</Link>
            <Link to="/featured" className="text-gray-800 hover:text-india-saffron transition-colors">Featured</Link>
            <Link to="/faq" className="text-gray-800 hover:text-india-saffron transition-colors">FAQ</Link>
            <Link to="/contact" className="text-gray-800 hover:text-india-saffron transition-colors">Contact</Link>
          </nav>

          <div className="flex items-center space-x-4">
            {/* Search toggle */}
            <button 
              onClick={toggleSearch}
              className="p-2 text-gray-800 hover:text-india-saffron rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            
            {/* Chat Button - Hidden on mobile */}
            <a 
              href="https://cutt.cx/wanderlust" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden sm:flex p-2 text-india-green hover:text-india-saffron rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Chat with us"
            >
              <MessageCircle size={20} />
            </a>

            {/* Login/Signup - Hidden on mobile */}
            <Link to="/auth" className="hidden sm:block">
              <Button variant="outline" className="border-india-saffron text-india-saffron hover:bg-india-saffron hover:text-white">
                Login / Sign Up
              </Button>
            </Link>

            {/* Mobile menu button */}
            <button 
              onClick={toggleMenu} 
              className="md:hidden p-2 text-gray-800 hover:text-india-saffron rounded-full hover:bg-gray-100 transition-colors"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Search Box */}
        {isSearchOpen && (
          <div className="py-4 border-t border-gray-100 mt-2">
            <SearchBox onClose={toggleSearch} />
          </div>
        )}
      </div>

      {/* Mobile menu */}
      <div 
        className={cn(
          "fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white shadow-xl transform transition-transform duration-300 ease-in-out", 
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b">
            <Link to="/" className="flex items-center space-x-2" onClick={() => setIsMenuOpen(false)}>
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-india-saffron via-white to-india-green flex items-center justify-center">
                <span className="text-india-blue font-bold text-lg">W</span>
              </div>
              <span className="font-bold text-xl text-india-blue">
                Wanderlust <span className="text-india-saffron">Adventures</span>
              </span>
            </Link>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={20} />
            </Button>
          </div>
          
          <nav className="flex flex-col p-4 space-y-4">
            <Link 
              to="/"
              className="px-4 py-2 text-gray-800 hover:text-india-saffron hover:bg-gray-50 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/featured"
              className="px-4 py-2 text-gray-800 hover:text-india-saffron hover:bg-gray-50 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Featured
            </Link>
            <Link 
              to="/faq"
              className="px-4 py-2 text-gray-800 hover:text-india-saffron hover:bg-gray-50 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link 
              to="/contact"
              className="px-4 py-2 text-gray-800 hover:text-india-saffron hover:bg-gray-50 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="/auth"
              className="px-4 py-2 text-india-saffron font-medium hover:bg-india-saffron hover:text-white rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Login / Sign Up
            </Link>
          </nav>
          
          <div className="mt-auto p-4 border-t border-gray-100">
            <a 
              href="https://cutt.cx/wanderlust" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 text-india-green hover:text-india-saffron hover:bg-gray-50 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <MessageCircle size={18} className="mr-2" />
              <span>Chat with us</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Navbar;
