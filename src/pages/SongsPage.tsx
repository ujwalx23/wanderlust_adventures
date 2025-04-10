
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Pause, SkipForward, SkipBack } from "lucide-react";

interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  year: string;
  genre: string;
  image: string;
  audio?: string;
}

const SongsPage = () => {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const popularSongs: Song[] = [
    {
      id: "1",
      title: "Mera Joota Hai Japani",
      artist: "Mukesh",
      album: "Shree 420",
      year: "1955",
      genre: "Classic Bollywood",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      id: "2",
      title: "Jai Ho",
      artist: "A.R. Rahman",
      album: "Slumdog Millionaire",
      year: "2008",
      genre: "Contemporary",
      image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      id: "3",
      title: "Chaiyya Chaiyya",
      artist: "Sukhwinder Singh",
      album: "Dil Se",
      year: "1998",
      genre: "Bollywood",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      id: "4",
      title: "Kesariya",
      artist: "Arijit Singh",
      album: "Brahmastra",
      year: "2022",
      genre: "Modern Bollywood",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      id: "5",
      title: "Raghupati Raghav Raja Ram",
      artist: "Traditional",
      album: "Indian Devotional Songs",
      year: "Traditional",
      genre: "Devotional",
      image: "https://images.unsplash.com/photo-1621496503717-055c41218e24?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      id: "6",
      title: "Vande Mataram",
      artist: "Bankim Chandra Chattopadhyay",
      album: "Patriotic Songs of India",
      year: "1882",
      genre: "Patriotic",
      image: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3"
    }
  ];

  const folkSongs: Song[] = [
    {
      id: "7",
      title: "Nimbooda",
      artist: "Traditional Rajasthani",
      album: "Folk Songs of Rajasthan",
      year: "Traditional",
      genre: "Folk",
      image: "https://images.unsplash.com/photo-1527591162883-aa51d9a079b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      id: "8",
      title: "Kalbelia",
      artist: "Traditional",
      album: "Rajasthani Folk",
      year: "Traditional",
      genre: "Folk",
      image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      id: "9",
      title: "Banna Re",
      artist: "Traditional",
      album: "Folk Songs of North India",
      year: "Traditional",
      genre: "Folk",
      image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      id: "10",
      title: "Kesariya Balam",
      artist: "Traditional",
      album: "Folk Songs of Rajasthan",
      year: "Traditional",
      genre: "Folk",
      image: "https://images.unsplash.com/photo-1557908559-64a831388f77?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      id: "11",
      title: "Aigiri Nandini",
      artist: "Traditional",
      album: "Classical Folk",
      year: "Traditional",
      genre: "Classical Folk",
      image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      id: "12",
      title: "Baul Song",
      artist: "Traditional",
      album: "Folk Songs of Bengal",
      year: "Traditional",
      genre: "Folk",
      image: "https://images.unsplash.com/photo-1543538347-5b6f98f8e2f4?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3"
    }
  ];

  const classicalSongs: Song[] = [
    {
      id: "13",
      title: "Raga Yaman",
      artist: "Pandit Ravi Shankar",
      album: "Classical Masters",
      year: "1967",
      genre: "Hindustani Classical",
      image: "https://images.unsplash.com/photo-1541689221366-abe695806024?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      id: "14",
      title: "Raga Darbari",
      artist: "Ustad Ali Akbar Khan",
      album: "Classical Treasures",
      year: "1970",
      genre: "Hindustani Classical",
      image: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      id: "15",
      title: "Raga Bhairavi",
      artist: "Ustad Bismillah Khan",
      album: "Shehnai Maestro",
      year: "1975",
      genre: "Hindustani Classical",
      image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      id: "16",
      title: "Thillana",
      artist: "M.S. Subbulakshmi",
      album: "Divine Carnatic",
      year: "1960",
      genre: "Carnatic Classical",
      image: "https://images.unsplash.com/photo-1514119412350-e174d90d280e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      id: "17",
      title: "Vathapi Ganapathim",
      artist: "Dr. M. Balamuralikrishna",
      album: "Carnatic Gems",
      year: "1980",
      genre: "Carnatic Classical",
      image: "https://images.unsplash.com/photo-1527761939629-53d3f6d32258?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      id: "18",
      title: "Raga Malkauns",
      artist: "Pandit Jasraj",
      album: "Vocal Classical",
      year: "1985",
      genre: "Hindustani Classical",
      image: "https://images.unsplash.com/photo-1458560871784-56d23406c091?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3"
    }
  ];

  const handlePlay = (song: Song) => {
    setCurrentSong(song);
    setIsPlaying(true);
  };

  const renderSongCard = (song: Song) => (
    <Card key={song.id} className="overflow-hidden h-full">
      <div className="aspect-square overflow-hidden">
        <img src={song.image} alt={song.title} className="w-full h-full object-cover transition-transform hover:scale-105" />
      </div>
      <CardContent className="p-4">
        <h3 className="font-medium text-lg mb-1">{song.title}</h3>
        <p className="text-gray-600 text-sm">{song.artist}</p>
        <p className="text-gray-500 text-xs mb-3">{song.album} • {song.year}</p>
        <Button 
          variant="outline" 
          size="sm"
          className="w-full mt-2"
          onClick={() => handlePlay(song)}
        >
          <Play size={16} className="mr-1" /> Play
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-india-blue mb-4">
            Songs of India
          </h1>
          <p className="text-gray-600">
            Explore the rich musical heritage of India, from classical ragas to modern Bollywood hits.
          </p>
        </div>
        
        {currentSong && (
          <div className="max-w-2xl mx-auto bg-gray-100 p-4 rounded-lg flex items-center gap-4 mb-10">
            <img src={currentSong.image} alt={currentSong.title} className="w-16 h-16 object-cover rounded" />
            <div className="flex-1">
              <h3 className="font-medium">{currentSong.title}</h3>
              <p className="text-sm text-gray-600">{currentSong.artist}</p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <SkipBack size={18} />
              </Button>
              <Button 
                variant="default"
                size="icon"
                onClick={() => setIsPlaying(!isPlaying)}
                className="bg-india-saffron hover:bg-india-marigold"
              >
                {isPlaying ? <Pause size={18} /> : <Play size={18} />}
              </Button>
              <Button variant="ghost" size="icon">
                <SkipForward size={18} />
              </Button>
            </div>
          </div>
        )}
        
        <Tabs defaultValue="popular" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 max-w-md mx-auto">
            <TabsTrigger value="popular">Popular</TabsTrigger>
            <TabsTrigger value="folk">Folk</TabsTrigger>
            <TabsTrigger value="classical">Classical</TabsTrigger>
          </TabsList>
          
          <TabsContent value="popular">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularSongs.map(renderSongCard)}
            </div>
          </TabsContent>
          
          <TabsContent value="folk">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {folkSongs.map(renderSongCard)}
            </div>
          </TabsContent>
          
          <TabsContent value="classical">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {classicalSongs.map(renderSongCard)}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default SongsPage;
