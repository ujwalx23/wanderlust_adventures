
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, ArrowRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { blogs } from '@/constants/blogs';

const BlogPage = () => {
  return (
    <Layout>
      <div className="bg-gray-50 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-10 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-india-blue mb-4">
              Travel Blog
            </h1>
            <p className="text-gray-600">
              Discover travel stories, tips, and insights from our adventures across incredible India.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
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
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;
