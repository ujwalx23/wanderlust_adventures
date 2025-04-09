
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calendar, Clock, User, Search, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';

// Blog post data
const blogPosts = [
  {
    id: "1",
    title: "Top 10 Hidden Gems in Southern India",
    excerpt: "Discover lesser-known destinations in South India that offer incredible experiences away from the usual tourist trails.",
    image: "https://images.unsplash.com/photo-1602015111052-a1c88d9e2552?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c291dGglMjBpbmRpYXxlbnwwfHwwfHx8MA%3D",
    author: "Priya Sharma",
    date: "April 2, 2025",
    readTime: "8 min read",
    tags: ["South India", "Off-beat", "Travel Tips"]
  },
  {
    id: "2",
    title: "A Foodie's Guide to North Indian Street Food",
    excerpt: "From Delhi's chaat to Amritsar's kulcha, explore the vibrant street food scene of North India with our comprehensive guide.",
    image: "https://images.unsplash.com/photo-1517244683847-7456b63c5969?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwZm9vZHxlbnwwfHwwfHx8MA%3D",
    author: "Vikram Patel",
    date: "March 27, 2025",
    readTime: "6 min read",
    tags: ["Food", "North India", "Culture"]
  },
  {
    id: "3",
    title: "Monsoon Magic: Best Places to Visit During Rainy Season",
    excerpt: "Contrary to popular belief, monsoon season offers a unique charm. Here are the top destinations that come alive during the rains.",
    image: "https://images.unsplash.com/photo-1563803835717-b6693c7e1e52?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9uc29vbiUyMGluZGlhfGVufDB8fDB8fHww",
    author: "Arjun Khanna",
    date: "March 18, 2025",
    readTime: "7 min read",
    tags: ["Monsoon", "Travel Tips", "Nature"]
  },
  {
    id: "4",
    title: "Spiritual Journey: Sacred Sites Beyond the Common Pilgrimage",
    excerpt: "Explore lesser-known spiritual destinations that offer profound experiences for seekers looking beyond mainstream religious tourism.",
    image: "https://images.unsplash.com/photo-1544963823-6267c70c3e24?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5kaWFuJTIwdGVtcGxlfGVufDB8fDB8fHww",
    author: "Meera Iyer",
    date: "March 10, 2025",
    readTime: "9 min read",
    tags: ["Spiritual", "Off-beat", "Culture"]
  },
  {
    id: "5",
    title: "Backpacking Through Northeast India: A Complete Guide",
    excerpt: "Planning to explore the Seven Sisters? Here's everything you need to know about backpacking through Northeast India.",
    image: "https://images.unsplash.com/photo-1599030284356-69a55b19e5e3?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bm9ydGhlYXN0JTIwaW5kaWF8ZW58MHx8MHx8fDA%3D",
    author: "Ankit Singh",
    date: "March 5, 2025",
    readTime: "12 min read",
    tags: ["Northeast", "Backpacking", "Adventure"]
  },
  {
    id: "6",
    title: "Sustainable Tourism in India: How to Travel Responsibly",
    excerpt: "Learn how to minimize your environmental impact while maximizing authentic cultural experiences on your next Indian adventure.",
    image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZWNvJTIwdG91cmlzbXxlbnwwfHwwfHx8MA%3D",
    author: "Nisha Menon",
    date: "February 28, 2025",
    readTime: "8 min read",
    tags: ["Sustainable", "Travel Tips", "Eco-Tourism"]
  },
];

// Popular tags
const popularTags = [
  "Travel Tips", "Culture", "Adventure", "Food", "Monsoon", "Wildlife", "Off-beat", "Spiritual", 
  "Northeast", "Mountains", "Beaches", "Festivals", "Photography", "Sustainable", "Backpacking"
];

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  
  // Filter blog posts by search term and selected tag
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = searchTerm === '' || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesTag = selectedTag === null || post.tags.includes(selectedTag);
    
    return matchesSearch && matchesTag;
  });

  return (
    <Layout>
      <div className="bg-gray-50 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-10 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-india-blue mb-4">
              Travel Diaries & Tips
            </h1>
            <p className="text-gray-600">
              Discover travel inspiration, expert tips, and fascinating stories from across India.
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="max-w-xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input
                type="text"
                placeholder="Search articles..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Blog Content */}
            <div className="lg:col-span-2">
              {filteredPosts.length > 0 ? (
                <div className="space-y-8">
                  {filteredPosts.map((post) => (
                    <Card key={post.id} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
                      <div className="h-64 overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                      <CardContent className="p-6">
                        <div className="flex flex-wrap gap-2 mb-3">
                          {post.tags.map((tag, index) => (
                            <span 
                              key={index} 
                              className="text-xs bg-india-saffron/10 text-india-saffron px-2 py-1 rounded-full"
                              onClick={() => setSelectedTag(tag)}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <Link to={`/blog/${post.id}`}>
                          <h2 className="text-xl font-semibold text-india-blue hover:text-india-saffron transition-colors mb-2">
                            {post.title}
                          </h2>
                        </Link>
                        
                        <p className="text-gray-600 mb-4">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <div className="flex items-center">
                            <User size={14} className="mr-1" />
                            <span>{post.author}</span>
                          </div>
                          
                          <div className="flex items-center">
                            <Calendar size={14} className="mr-1" />
                            <span className="mr-3">{post.date}</span>
                            <Clock size={14} className="mr-1" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-600">No blog posts found matching your search criteria.</p>
                  <Button 
                    variant="link" 
                    className="text-india-blue mt-2" 
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedTag(null);
                    }}
                  >
                    Clear filters
                  </Button>
                </div>
              )}
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Popular Tags */}
              <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-india-blue">Popular Tags</h3>
                  {selectedTag && (
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-xs h-auto py-1"
                      onClick={() => setSelectedTag(null)}
                    >
                      Clear
                    </Button>
                  )}
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag, index) => (
                    <span 
                      key={index} 
                      onClick={() => setSelectedTag(tag)}
                      className={`text-xs px-2 py-1 rounded-full cursor-pointer transition-colors ${
                        selectedTag === tag 
                          ? 'bg-india-saffron text-white' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Featured Post */}
              <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                <h3 className="text-lg font-semibold text-india-blue mb-4">Featured Post</h3>
                <div className="mb-3">
                  <img 
                    src="https://images.unsplash.com/photo-1506461883276-594a12b11cf3?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWElMjB0cmF2ZWx8ZW58MHx8MHx8fDA%3D" 
                    alt="Featured Post" 
                    className="w-full h-40 object-cover rounded-md"
                  />
                </div>
                <h4 className="font-semibold text-gray-800 hover:text-india-saffron transition-colors mb-2">
                  <Link to="/blog/featured">The Ultimate India Travel Checklist: What to Pack and Prepare</Link>
                </h4>
                <div className="flex items-center text-xs text-gray-500">
                  <Calendar size={12} className="mr-1" />
                  <span className="mr-3">April 5, 2025</span>
                  <Clock size={12} className="mr-1" />
                  <span>10 min read</span>
                </div>
              </div>
              
              {/* Subscribe Form */}
              <div className="bg-india-blue p-6 rounded-lg shadow-sm text-white">
                <h3 className="text-lg font-semibold mb-3">Get Travel Updates</h3>
                <p className="text-white/80 text-sm mb-4">
                  Subscribe to our newsletter for the latest travel tips and destination guides.
                </p>
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="bg-white/10 border-white/30 placeholder:text-white/50 mb-3 text-white"
                />
                <Button className="w-full bg-white text-india-blue hover:bg-white/90">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;
