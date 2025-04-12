
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Book } from '@/components/ui/book';

const BooksPage = () => {
  const books = [
    {
      id: 1,
      title: "Vagabonding: An Uncommon Guide to the Art of Long-Term World Travel",
      author: "Rolf Potts",
      image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3",
      description: "A practical and philosophical guide to long-term world travel. Perfect for those looking to take an extended break from normal life to explore the world.",
      link: "https://www.gutenberg.org/ebooks/search/?query=travel&submit_search=Go%21"
    },
    {
      id: 2,
      title: "The Alchemist",
      author: "Paulo Coelho",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3",
      description: "A philosophical novel about following your dreams and finding your destiny. The journey of a shepherd boy who travels from Spain to Egypt in search of treasure.",
      link: "https://www.gutenberg.org/ebooks/search/?query=alchemist&submit_search=Go%21"
    },
    {
      id: 3,
      title: "Eat, Pray, Love",
      author: "Elizabeth Gilbert",
      image: "https://images.unsplash.com/photo-1518112166137-85f9979a43aa?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3",
      description: "A memoir of the author's trip around the world after her divorce. She spent time in Italy, India, and Indonesia, discovering pleasure, spirituality, and balance.",
      link: "https://www.gutenberg.org/ebooks/search/?query=love&submit_search=Go%21"
    },
    {
      id: 4,
      title: "In a Sunburned Country",
      author: "Bill Bryson",
      image: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3",
      description: "A humorous account of the author's travels through Australia, exploring its history, people, wildlife, and unique landscapes.",
      link: "https://www.gutenberg.org/ebooks/search/?query=Australia&submit_search=Go%21"
    },
    {
      id: 5,
      title: "The Art of Happiness",
      author: "Dalai Lama & Howard C. Cutler",
      image: "https://images.unsplash.com/photo-1474314170901-f351b68f544f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3",
      description: "A book that presents the Dalai Lama's philosophical approach to achieving true happiness through developing inner peace.",
      link: "https://www.gutenberg.org/ebooks/search/?query=happiness&submit_search=Go%21"
    },
    {
      id: 6,
      title: "Wild: From Lost to Found on the Pacific Crest Trail",
      author: "Cheryl Strayed",
      image: "https://images.unsplash.com/photo-1604275689235-fdc521556c4a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3",
      description: "A memoir of the author's 1,100-mile solo hike on the Pacific Crest Trail following personal trauma and loss.",
      link: "https://www.gutenberg.org/ebooks/search/?query=wild&submit_search=Go%21"
    },
    {
      id: 7,
      title: "The Happiness Project",
      author: "Gretchen Rubin",
      image: "https://images.unsplash.com/photo-1513682121497-80211f36a7d3?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3",
      description: "The author's year-long experiment to discover what leads to true contentment, testing scientific studies and popular wisdom on being happier.",
      link: "https://www.gutenberg.org/ebooks/search/?query=happiness&submit_search=Go%21"
    },
    {
      id: 8,
      title: "Into Thin Air",
      author: "Jon Krakauer",
      image: "https://images.unsplash.com/photo-1618588507085-c79565432917?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3",
      description: "A personal account of the 1996 Mount Everest disaster when eight climbers were killed and several others stranded by a storm.",
      link: "https://www.gutenberg.org/ebooks/search/?query=adventure&submit_search=Go%21"
    },
    {
      id: 9,
      title: "Seven Years in Tibet",
      author: "Heinrich Harrer",
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3",
      description: "An adventurous memoir recounting the author's experiences in Tibet during WWII and his relationship with the young Dalai Lama.",
      link: "https://www.gutenberg.org/ebooks/search/?query=tibet&submit_search=Go%21"
    },
    {
      id: 10,
      title: "The Beach",
      author: "Alex Garland",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3",
      description: "A novel about a young backpacker's search for an idyllic, isolated beach in Thailand and the dark side of paradise he discovers.",
      link: "https://www.gutenberg.org/ebooks/search/?query=beach&submit_search=Go%21"
    },
    {
      id: 11,
      title: "Happiness: A Guide to Developing Life's Most Important Skill",
      author: "Matthieu Ricard",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3",
      description: "Written by a Buddhist monk with a background in molecular genetics, this book combines Western science with Eastern philosophy to understand happiness.",
      link: "https://www.gutenberg.org/ebooks/search/?query=happiness&submit_search=Go%21"
    },
    {
      id: 12,
      title: "The Lost City of Z",
      author: "David Grann",
      image: "https://images.unsplash.com/photo-1518845048752-d105299617b4?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3",
      description: "A non-fiction account of the author's journey into the Amazon to uncover the fate of explorer Percy Fawcett, who disappeared while searching for an ancient lost city.",
      link: "https://www.gutenberg.org/ebooks/search/?query=adventure&submit_search=Go%21"
    }
  ];

  return (
    <Layout>
      <div className="bg-gray-50 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-10 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-india-blue mb-4">
              Recommended Travel &amp; Adventure Books
            </h1>
            <p className="text-gray-600">
              Explore these inspiring books to fuel your wanderlust and enrich your travel experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {books.map(book => (
              <div key={book.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={book.image} 
                    alt={book.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-india-blue mb-2">{book.title}</h3>
                  <p className="text-gray-500 text-sm mb-3">By {book.author}</p>
                  <p className="text-gray-700 mb-4 text-sm">{book.description}</p>
                  <a 
                    href={book.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-block bg-india-saffron text-white px-4 py-2 rounded hover:bg-india-marigold transition-colors text-sm"
                  >
                    Read Online
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BooksPage;
