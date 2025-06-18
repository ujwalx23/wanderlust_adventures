
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Book } from '@/components/ui/book';

const BooksPage = () => {
  const books = [
    {
      id: 1,
      title: "The Time Machine",
      author: "H.G. Wells",
      image: "https://m.media-amazon.com/images/I/81dCSKtvF4L._AC_UF1000,1000_QL80_.jpg",
      description: "A Victorian inventor travels far into the future using a time machine.There, he discovers a divided world and unsettling truths about humanity’s fate.",
      link: "https://www.gutenberg.org/cache/epub/35/pg35-images.html"
    },
    {
      id: 2,
      title: "Around the World in Eighty Days",
      author: "Jules Verne",
      image: "https://i.ytimg.com/vi/40qFo2lKn0g/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDHM9ieKjzBticcWtAl2QTcNg3CNw",
      description: "Phileas Fogg, a wealthy and precise Englishman, bets that he can circumnavigate the globe in 80 days. With his resourceful servant Passepartout, he faces unexpected challenges and thrilling adventures in a race against time.",
      link: "https://www.gutenberg.org/cache/epub/103/pg103-images.html"
    },
    {
      id: 3,
      title: "The Adventures of Sherlock Holmes",
      author: "Arthur Conan Doyle",
      image: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2020/08/Sherlock-Holmes-RDJ.jpg",
      description: "Detective Sherlock Holmes, with the help of his loyal friend Dr. Watson, solves a series of intriguing and baffling cases in Victorian London. Using his sharp intellect and keen observation, Holmes unravels mysteries that seem impossible to solve.",
      link: "https://www.gutenberg.org/cache/epub/1661/pg1661-images.html"
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
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZevULBlih4VmmUQDetP-Or-AyQgeFjdEGsQ&s",
      description: "A book that presents the Dalai Lama's philosophical approach to achieving true happiness through developing inner peace.",
      link: "https://www.gutenberg.org/ebooks/search/?query=happiness&submit_search=Go%21"
    },
    {
      id: 6,
      title: "Wild: From Lost to Found on the Pacific Crest Trail",
      author: "Cheryl Strayed",
      image: "https://rebeccabradleycrime.com/wp-content/uploads/2017/06/wild.jpg",
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
      image: "https://m.media-amazon.com/images/M/MV5BNDZmMmRhZWYtMGM1MC00YWQyLTk2NWYtMjllOGNiYTRkZmExXkEyXkFqcGc@._V1_.jpg",
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
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvQ_k190hFsdutVpa38DIZqX6e2-00kJoHtw&s",
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
