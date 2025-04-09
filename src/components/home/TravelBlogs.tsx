
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight } from 'lucide-react';
import { blogs } from '@/constants/blogs';

const TravelBlogs = () => {
  // Display only 3 blogs on homepage
  const featuredBlogs = blogs.slice(0, 3);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-india-blue mb-4">Travel Blog</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover travel stories, tips, and insights from our adventures across incredible India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredBlogs.map((blog) => (
            <Card key={blog.id} className="border-none shadow-md hover:shadow-xl transition-all duration-300">
              <div className="relative h-48">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full text-xs font-medium text-india-saffron">
                  {blog.category}
                </span>
              </div>
              <CardContent className="p-5">
                <div className="flex items-center text-gray-500 mb-2">
                  <Calendar size={14} className="mr-1" />
                  <span className="text-xs">{blog.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">{blog.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{blog.excerpt}</p>
                <Link to={`/blog/${blog.id}`} className="text-india-blue hover:text-india-saffron font-medium flex items-center">
                  Read More <ArrowRight size={16} className="ml-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/blog">
            <Button variant="outline" className="border-india-blue text-india-blue hover:bg-india-blue hover:text-white">
              View All Blog Posts
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TravelBlogs;
