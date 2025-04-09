
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Film, ExternalLink } from 'lucide-react';

interface Movie {
  title: string;
  year: string;
  director: string;
  description: string;
  image: string;
  wikipediaUrl: string;
}

const movies: Movie[] = [
  {
    title: "The Darjeeling Limited",
    year: "2007",
    director: "Wes Anderson",
    description: "Three American brothers who have not spoken to each other in a year set off on a train voyage across India with a plan to find themselves and bond with each other.",
    image: "https://images.unsplash.com/photo-1544085311-11a028465b03?q=80&w=1000&auto=format&fit=crop",
    wikipediaUrl: "https://en.wikipedia.org/wiki/The_Darjeeling_Limited"
  },
  {
    title: "Slumdog Millionaire",
    year: "2008",
    director: "Danny Boyle",
    description: "A Mumbai teenager reflects on his life after being accused of cheating on the Indian version of 'Who Wants to be a Millionaire?'",
    image: "https://images.unsplash.com/photo-1519802772250-a52a9af0eacb?q=80&w=1000&auto=format&fit=crop",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Slumdog_Millionaire"
  },
  {
    title: "The Best Exotic Marigold Hotel",
    year: "2011",
    director: "John Madden",
    description: "British retirees travel to India to take up residence in what they believe is a newly restored hotel. Less luxurious than advertised, the Marigold Hotel nevertheless slowly begins to charm in unexpected ways.",
    image: "https://images.unsplash.com/photo-1526128260890-08e2bccf83c6?q=80&w=1000&auto=format&fit=crop",
    wikipediaUrl: "https://en.wikipedia.org/wiki/The_Best_Exotic_Marigold_Hotel"
  },
  {
    title: "Life of Pi",
    year: "2012",
    director: "Ang Lee",
    description: "A young man who survives a disaster at sea is hurtled into an epic journey of adventure and discovery. While cast away, he forms an unexpected connection with another survivor: a fearsome Bengal tiger.",
    image: "https://images.unsplash.com/photo-1559588212-3bae163af15e?q=80&w=1000&auto=format&fit=crop",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Life_of_Pi_(film)"
  },
  {
    title: "The Namesake",
    year: "2006",
    director: "Mira Nair",
    description: "An Indian family moves to America and must come to terms with the clash of cultures, especially their American-born son who is torn between his Indian heritage and his American environment.",
    image: "https://images.unsplash.com/photo-1574060603747-421196bce3f6?q=80&w=1000&auto=format&fit=crop",
    wikipediaUrl: "https://en.wikipedia.org/wiki/The_Namesake_(film)"
  },
  {
    title: "Eat Pray Love",
    year: "2010",
    director: "Ryan Murphy",
    description: "A married woman realizes how unhappy her marriage really is, and that her life needs to go in a different direction. After a painful divorce, she takes off on a round-the-world journey to 'find herself', with a portion of her travels taking place in India.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1000&auto=format&fit=crop",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Eat_Pray_Love"
  },
  {
    title: "The Hundred-Foot Journey",
    year: "2014",
    director: "Lasse Hallström",
    description: "The Kadam family leaves India for France where they open a restaurant directly across the road from Madame Mallory's Michelin-starred eatery.",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=1000&auto=format&fit=crop",
    wikipediaUrl: "https://en.wikipedia.org/wiki/The_Hundred-Foot_Journey_(film)"
  },
  {
    title: "Outsourced",
    year: "2006",
    director: "John Jeffcoat",
    description: "A manager is sent to India to oversee a staff of customer service representatives, but cultural differences create humorous complications.",
    image: "https://images.unsplash.com/photo-1543352242-82e8b2e09ca0?q=80&w=1000&auto=format&fit=crop",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Outsourced_(film)"
  }
];

const MoviesPage = () => {
  return (
    <Layout>
      <div className="bg-gray-50 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-10 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-india-blue mb-4">
              Travel-Inspiring Movies About India
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore India through the lens of cinema with these captivating films that showcase the country's rich culture, stunning landscapes, and compelling stories.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {movies.map((movie, index) => (
              <Card key={index} className="overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                <div className="h-52 relative">
                  <img 
                    src={movie.image} 
                    alt={movie.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <Film size={48} className="text-white/70" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-xl font-semibold text-gray-800">{movie.title}</h2>
                    <span className="text-india-saffron font-medium">{movie.year}</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-3">Directed by {movie.director}</p>
                  <p className="text-gray-600 mb-4 line-clamp-3">{movie.description}</p>
                  <Button asChild variant="outline" className="w-full flex items-center justify-center">
                    <a 
                      href={movie.wikipediaUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      Learn More on Wikipedia
                      <ExternalLink size={14} className="ml-1" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 max-w-2xl mx-auto">
              These films offer a glimpse into India's diverse landscapes, rich traditions, and the transformative experiences travel can bring. Which one inspires your wanderlust?
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MoviesPage;
