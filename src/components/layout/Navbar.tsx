
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, Linkedin, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import SearchBox from '@/components/shared/SearchBox';

const Navbar = () => {
  const isMobile = useIsMobile();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

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
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col space-y-4 mt-6">
                  <Link to="/" className="text-lg font-medium hover:text-india-saffron">Home</Link>
                  <Link to="/featured" className="text-lg font-medium hover:text-india-saffron">Featured</Link>
                  <Link to="/about" className="text-lg font-medium hover:text-india-saffron">About</Link>
                  <Link to="/travel-quiz" className="text-lg font-medium hover:text-india-saffron">Quiz</Link>
                  <Link to="/games" className="text-lg font-medium hover:text-india-saffron">Games</Link>
                  <Link to="/music" className="text-lg font-medium hover:text-india-saffron">Music</Link>
                  <Link to="/books" className="text-lg font-medium hover:text-india-saffron">Books</Link>
                  <Link to="/faq" className="text-lg font-medium hover:text-india-saffron">FAQ</Link>
                  <Button 
                    onClick={() => setIsChatOpen(!isChatOpen)} 
                    className="text-lg font-medium hover:text-india-saffron justify-start p-0 h-auto"
                    variant="ghost"
                  >
                    Chatbot
                  </Button>
                  <Link to="/auth" className="text-lg font-medium hover:text-india-saffron">Sign In</Link>
                </nav>
              </SheetContent>
            </Sheet>
          ) : (
            <div className="flex items-center space-x-8">
              <nav className="flex items-center space-x-6">
                <Link to="/" className="font-medium text-gray-700 hover:text-india-saffron">Home</Link>
                <Link to="/featured" className="font-medium text-gray-700 hover:text-india-saffron">Featured</Link>
                <Link to="/about" className="font-medium text-gray-700 hover:text-india-saffron">About</Link>
                <Link to="/travel-quiz" className="font-medium text-gray-700 hover:text-india-saffron">Quiz</Link>
                <Link to="/games" className="font-medium text-gray-700 hover:text-india-saffron">Games</Link>
                <Link to="/music" className="font-medium text-gray-700 hover:text-india-saffron">Music</Link>
                <Link to="/books" className="font-medium text-gray-700 hover:text-india-saffron">Books</Link>
                <Link to="/faq" className="font-medium text-gray-700 hover:text-india-saffron">FAQ</Link>
                <Button 
                  onClick={() => setIsChatOpen(!isChatOpen)}
                  variant="ghost"
                  className="font-medium text-gray-700 hover:text-india-saffron p-0 h-auto"
                >
                  Chatbot
                </Button>
              </nav>
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(!isSearchOpen)}>
                  <Search className="h-5 w-5" />
                </Button>
                <a href="https://www.linkedin.com/in/ujwalsingh23" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </a>
                <Link to="/auth">
                  <Button variant="outline" size="sm">Sign In</Button>
                </Link>
              </div>
            </div>
          )}

          {/* Search Overlay */}
          {isSearchOpen && (
            <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-24">
              <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl">
                <div className="flex justify-between items-center mb-6">
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
