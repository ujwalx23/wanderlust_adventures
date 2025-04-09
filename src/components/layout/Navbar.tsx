
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
          <Link to="/about" className="flex items-center space-x-2">
            <div className="w-10 h-10">
              <img 
                src="/lovable-uploads/6197a3de-efa5-4123-a99f-fc3bbc2e0d2f.png" 
                alt="Wanderlust Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-bold text-xl text-india-blue hidden sm:inline-block">
              Wanderlust <span className="text-india-saffron">Adventures</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-800 hover:text-india-saffron transition-colors">Home</Link>
            <Link to="/featured" className="text-gray-800 hover:text-india-saffron transition-colors">Featured</Link>
            <Link to="/blog" className="text-gray-800 hover:text-india-saffron transition-colors">Travel Blog</Link>
            <Link to="/about" className="text-gray-800 hover:text-india-saffron transition-colors">About Us</Link>
            <Link to="/travel-quiz" className="text-gray-800 hover:text-india-saffron transition-colors">Quiz</Link>
            <Link to="/games" className="text-gray-800 hover:text-india-saffron transition-colors">Games</Link>
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
            
            {/* Chat Button - Visible on all screens */}
            <button 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('chat-options-modal')?.classList.remove('hidden');
              }}
              className="flex p-2 text-india-green hover:text-india-saffron rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Chat with us"
            >
              <MessageCircle size={20} />
            </button>

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
            <Link to="/about" className="flex items-center space-x-2" onClick={() => setIsMenuOpen(false)}>
              <div className="w-10 h-10">
                <img 
                  src="/lovable-uploads/6197a3de-efa5-4123-a99f-fc3bbc2e0d2f.png" 
                  alt="Wanderlust Logo" 
                  className="w-full h-full object-contain"
                />
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
              to="/blog"
              className="px-4 py-2 text-gray-800 hover:text-india-saffron hover:bg-gray-50 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Travel Blog
            </Link>
            <Link 
              to="/about"
              className="px-4 py-2 text-gray-800 hover:text-india-saffron hover:bg-gray-50 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/travel-quiz"
              className="px-4 py-2 text-gray-800 hover:text-india-saffron hover:bg-gray-50 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Quiz
            </Link>
            <Link 
              to="/games"
              className="px-4 py-2 text-gray-800 hover:text-india-saffron hover:bg-gray-50 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Games
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
              to="/pick-a-trip"
              className="px-4 py-2 text-gray-800 hover:text-india-saffron hover:bg-gray-50 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Pick a Trip
            </Link>
            <Link 
              to="/movies"
              className="px-4 py-2 text-gray-800 hover:text-india-saffron hover:bg-gray-50 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Movies
            </Link>
            <Link 
              to="/music"
              className="px-4 py-2 text-gray-800 hover:text-india-saffron hover:bg-gray-50 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Music
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
            <button 
              onClick={(e) => {
                e.preventDefault();
                setIsMenuOpen(false);
                document.getElementById('chat-options-modal')?.classList.remove('hidden');
              }} 
              className="flex items-center px-4 py-2 text-india-green hover:text-india-saffron hover:bg-gray-50 rounded-md transition-colors"
            >
              <MessageCircle size={18} className="mr-2" />
              <span>Chat with us</span>
            </button>
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

      {/* Chat Options Modal */}
      <div id="chat-options-modal" className="fixed inset-0 z-50 flex items-center justify-center p-4 hidden">
        <div className="absolute inset-0 bg-black/50" onClick={() => document.getElementById('chat-options-modal')?.classList.add('hidden')}></div>
        <div className="relative bg-white rounded-lg shadow-lg w-full max-w-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Choose Chat Option</h3>
          <div className="grid grid-cols-1 gap-4">
            <a 
              href="https://cutt.cx/wanderlust" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center p-3 border border-india-blue bg-india-blue text-white rounded-md hover:bg-india-blue/90 transition-colors"
            >
              Advanced Chat
              <span className="ml-2 text-xs bg-white text-india-blue px-2 py-0.5 rounded-full">AI Powered</span>
            </a>
            <button 
              onClick={() => {
                document.getElementById('chat-options-modal')?.classList.add('hidden');
                document.getElementById('basic-chat-modal')?.classList.remove('hidden');
              }}
              className="flex items-center justify-center p-3 border border-india-green bg-white text-india-green rounded-md hover:bg-india-green/10 transition-colors"
            >
              Basic Chat
              <span className="ml-2 text-xs bg-india-green text-white px-2 py-0.5 rounded-full">Quick Answers</span>
            </button>
          </div>
          <button 
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
            onClick={() => document.getElementById('chat-options-modal')?.classList.add('hidden')}
          >
            <X size={20} />
          </button>
        </div>
      </div>

      {/* Basic Chat Modal */}
      <div id="basic-chat-modal" className="fixed bottom-4 right-4 z-50 hidden">
        <div className="relative bg-white rounded-lg shadow-lg w-full max-w-lg flex flex-col" style={{ height: "500px", width: "350px" }}>
          <div className="flex items-center justify-between bg-india-blue text-white p-4 rounded-t-lg">
            <h3 className="text-lg font-semibold">Basic Travel Chat</h3>
            <div className="flex">
              <button 
                className="text-white hover:text-gray-200 mr-2"
                onClick={() => {
                  document.getElementById('basic-chat-modal')?.classList.add('hidden');
                  document.getElementById('chat-options-modal')?.classList.remove('hidden');
                }}
              >
                <X size={18} />
              </button>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-india-blue text-white rounded-lg rounded-tl-none p-3 max-w-[80%] shadow-sm">
                  <p className="text-sm">Hello! I'm your travel assistant. I can answer basic questions about travel destinations in India. What would you like to know?</p>
                </div>
              </div>
              {/* Add more pre-loaded Q&A here */}
              <div className="flex items-start justify-end">
                <div className="bg-gray-200 rounded-lg rounded-tr-none p-3 max-w-[80%] shadow-sm">
                  <p className="text-sm">What's the best time to visit Kerala?</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-india-blue text-white rounded-lg rounded-tl-none p-3 max-w-[80%] shadow-sm">
                  <p className="text-sm">The best time to visit Kerala is from September to March when the weather is pleasant. If you want to experience the monsoon beauty, June to August is amazing too, though there can be heavy rainfall.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-3 border-t">
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2">
                <button 
                  className="bg-india-blue text-white px-3 py-1 rounded-lg text-sm"
                  onClick={() => {
                    const chatContainer = document.querySelector('#basic-chat-modal .overflow-y-auto');
                    const userQuestion = document.createElement('div');
                    userQuestion.className = 'flex items-start justify-end mt-4';
                    userQuestion.innerHTML = `
                      <div class="bg-gray-200 rounded-lg rounded-tr-none p-3 max-w-[80%] shadow-sm">
                        <p class="text-sm">Best places to visit in Rajasthan?</p>
                      </div>
                    `;
                    chatContainer?.appendChild(userQuestion);
                    
                    setTimeout(() => {
                      const botResponse = document.createElement('div');
                      botResponse.className = 'flex items-start mt-4';
                      botResponse.innerHTML = `
                        <div class="bg-india-blue text-white rounded-lg rounded-tl-none p-3 max-w-[80%] shadow-sm">
                          <p class="text-sm">Rajasthan has many incredible places to visit including Jaipur (Pink City), Udaipur (City of Lakes), Jaisalmer (Golden City), Jodhpur (Blue City), and the Thar Desert. Each offers unique culture, architecture, and experiences.</p>
                        </div>
                      `;
                      chatContainer?.appendChild(botResponse);
                      chatContainer?.scrollTo(0, chatContainer.scrollHeight);
                    }, 1000);
                    
                    chatContainer?.scrollTo(0, chatContainer.scrollHeight);
                  }}
                >
                  Best places in Rajasthan
                </button>
                
                <button 
                  className="bg-india-blue text-white px-3 py-1 rounded-lg text-sm"
                  onClick={() => {
                    const chatContainer = document.querySelector('#basic-chat-modal .overflow-y-auto');
                    const userQuestion = document.createElement('div');
                    userQuestion.className = 'flex items-start justify-end mt-4';
                    userQuestion.innerHTML = `
                      <div class="bg-gray-200 rounded-lg rounded-tr-none p-3 max-w-[80%] shadow-sm">
                        <p class="text-sm">What documents do I need for travel in India?</p>
                      </div>
                    `;
                    chatContainer?.appendChild(userQuestion);
                    
                    setTimeout(() => {
                      const botResponse = document.createElement('div');
                      botResponse.className = 'flex items-start mt-4';
                      botResponse.innerHTML = `
                        <div class="bg-india-blue text-white rounded-lg rounded-tl-none p-3 max-w-[80%] shadow-sm">
                          <p class="text-sm">For domestic travel in India, you'll need a government-issued photo ID (Aadhar, Voter ID, Driving License, etc.). For international visitors, a valid passport and visa are required. Always carry your accommodation details and a copy of your return ticket.</p>
                        </div>
                      `;
                      chatContainer?.appendChild(botResponse);
                      chatContainer?.scrollTo(0, chatContainer.scrollHeight);
                    }, 1000);
                    
                    chatContainer?.scrollTo(0, chatContainer.scrollHeight);
                  }}
                >
                  Travel documents
                </button>
              </div>
              
              <div className="flex">
                <input 
                  type="text" 
                  placeholder="Type your question..." 
                  className="flex-1 px-3 py-2 border rounded-l-md text-sm focus:outline-none focus:ring-1 focus:ring-india-blue"
                />
                <button className="bg-india-blue text-white px-4 py-2 rounded-r-md hover:bg-india-blue/90 transition-colors">
                  Send
                </button>
              </div>
              
              <button 
                onClick={() => {
                  document.getElementById('basic-chat-modal')?.classList.add('hidden');
                  document.getElementById('chat-options-modal')?.classList.remove('hidden');
                }}
                className="text-gray-500 hover:text-india-blue text-sm text-center"
              >
                Back to chat options
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
