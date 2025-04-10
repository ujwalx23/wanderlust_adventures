import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, MessageCircle, Globe, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Navbar = () => {
  const isMobile = useIsMobile();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <div className="bg-india-blue rounded-full p-2 mr-2">
              <Globe className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-india-blue">Desi Wanderlust</span>
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
                  <Link to="/blog" className="text-lg font-medium hover:text-india-saffron">Blog</Link>
                  <Link to="/travel-quiz" className="text-lg font-medium hover:text-india-saffron">Quiz</Link>
                  <Link to="/games" className="text-lg font-medium hover:text-india-saffron">Games</Link>
                  <Link to="/faq" className="text-lg font-medium hover:text-india-saffron">FAQ</Link>
                  <Link to="/contact" className="text-lg font-medium hover:text-india-saffron">Contact</Link>
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
                <Link to="/blog" className="font-medium text-gray-700 hover:text-india-saffron">Blog</Link>
                <Link to="/travel-quiz" className="font-medium text-gray-700 hover:text-india-saffron">Quiz</Link>
                <Link to="/games" className="font-medium text-gray-700 hover:text-india-saffron">Games</Link>
                <Link to="/faq" className="font-medium text-gray-700 hover:text-india-saffron">FAQ</Link>
                <Link to="/contact" className="font-medium text-gray-700 hover:text-india-saffron">Contact</Link>
              </nav>
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
                  <Search className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" onClick={() => setIsChatOpen(!isChatOpen)}>
                  <MessageCircle className="h-5 w-5" />
                </Button>
                <Link to="/auth">
                  <Button variant="outline" size="sm">Sign In</Button>
                </Link>
              </div>
            </div>
          )}

          {/* Chat component - right corner with back button */}
          {isChatOpen && (
            <div className="fixed bottom-4 right-4 w-80 bg-white rounded-lg shadow-lg z-50 border border-gray-200">
              <div className="flex items-center justify-between bg-india-blue text-white p-3 rounded-t-lg">
                <h3 className="font-medium">Chat with Us</h3>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-white hover:bg-india-blue/80" 
                        onClick={() => setIsChatOpen(false)}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <div className="p-4 h-80 overflow-y-auto bg-gray-50">
                <div className="flex flex-col space-y-3">
                  <div className="bg-india-blue/10 p-3 rounded-lg max-w-[80%]">
                    <p className="text-sm">Hello! How can I help you plan your trip to India?</p>
                  </div>
                </div>
              </div>
              <div className="p-3 border-t">
                <form className="flex items-center">
                  <input 
                    type="text" 
                    placeholder="Type your message..." 
                    className="flex-1 p-2 border rounded-l-md focus:outline-none focus:ring-1 focus:ring-india-blue"
                  />
                  <Button type="submit" className="rounded-l-none">Send</Button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
