
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Music, YoutubeIcon } from 'lucide-react';

interface TravelSong {
  title: string;
  artist: string;
  description: string;
  youtubeUrl: string;
  region?: string;
}

const travelSongs: TravelSong[] = [
  {
    title: "Ilahi",
    artist: "Arijit Singh (Yeh Jawaani Hai Deewani)",
    description: "A popular song from the movie Yeh Jawaani Hai Deewani that captures the essence of travel and freedom.",
    youtubeUrl: "https://www.youtube.com/watch?v=fdubeMFwuGs",
    region: "Himalayas"
  },
  {
    title: "Safarnama",
    artist: "Lucky Ali (Tamasha)",
    description: "A melodious track that beautifully narrates the journey of self-discovery through travel.",
    youtubeUrl: "https://www.youtube.com/watch?v=zLv0XEIBdmM",
    region: "Corsica, France"
  },
  {
    title: "Khaabon Ke Parinday",
    artist: "Mohit Chauhan (Zindagi Na Milegi Dobara)",
    description: "A song about chasing dreams and embracing freedom through travel.",
    youtubeUrl: "https://www.youtube.com/watch?v=R0XjwtP_iTY",
    region: "Spain"
  },
  {
    title: "Patakha Guddi",
    artist: "A.R. Rahman (Highway)",
    description: "A powerful song that embodies the spirit of liberation and the joy of traversing through different landscapes.",
    youtubeUrl: "https://www.youtube.com/watch?v=8HDTS80dlr4",
    region: "North India"
  },
  {
    title: "Kun Faya Kun",
    artist: "A.R. Rahman (Rockstar)",
    description: "A spiritual song that resonates with the transformative experience of traveling to places of spiritual significance.",
    youtubeUrl: "https://www.youtube.com/watch?v=T94-c2UQs5c",
    region: "Delhi/Ajmer"
  },
  {
    title: "Yuhin Chala Chal",
    artist: "A.R. Rahman (Swades)",
    description: "A song about journeying back to one's roots and rediscovering one's identity.",
    youtubeUrl: "https://www.youtube.com/watch?v=eEeX2QMlSlo",
    region: "Rural India"
  },
  {
    title: "Masakali",
    artist: "A.R. Rahman (Delhi-6)",
    description: "A lively song that captures the vibrant spirit of Delhi, making it perfect for urban exploration.",
    youtubeUrl: "https://www.youtube.com/watch?v=SS3lIQdKP-A",
    region: "Delhi"
  },
  {
    title: "Dil Chahta Hai",
    artist: "Shankar-Ehsaan-Loy",
    description: "The title track of a film that celebrates friendship and road trips, inspiring many travelers.",
    youtubeUrl: "https://www.youtube.com/watch?v=m13b25V0B10",
    region: "Goa"
  },
  {
    title: "Kashmir Main Tu Kanyakumari",
    artist: "Arijit Singh (Chennai Express)",
    description: "A song that literally spans the length of India, from Kashmir in the north to Kanyakumari in the south.",
    youtubeUrl: "https://www.youtube.com/watch?v=cXfA5NQU6MU",
    region: "Pan India"
  },
  {
    title: "Yun Hi Chala Chal",
    artist: "Udit Narayan (Swades)",
    description: "A song about embarking on a journey without a specific destination, embracing the path itself.",
    youtubeUrl: "https://www.youtube.com/watch?v=eEeX2QMlSlo",
    region: "Rural India"
  },
  {
    title: "Sooraj Ki Baahon Mein",
    artist: "Sandesh Shandilya (Zindagi Na Milegi Dobara)",
    description: "A serene track that captures the peace of being in nature, perfect for mountain or beach destinations.",
    youtubeUrl: "https://www.youtube.com/watch?v=6p511dlz8u4",
    region: "Spain"
  },
  {
    title: "Phoolon Ke Rang Se",
    artist: "Kishore Kumar (Prem Pujari)",
    description: "A classic song that celebrates the beauty of nature and love, ideal for scenic routes.",
    youtubeUrl: "https://www.youtube.com/watch?v=EVtMKrNkC1M",
    region: "Scenic India"
  },
  {
    title: "Raahi O Raahi",
    artist: "Amit Trivedi (Shubh Mangal Saavdhan)",
    description: "A contemporary track about journeying through life, with rhythms perfect for a road trip.",
    youtubeUrl: "https://www.youtube.com/watch?v=VIECgRQRoao",
    region: "Urban India"
  },
  {
    title: "Musafir Hoon Yaaron",
    artist: "Kishore Kumar (Parichay)",
    description: "A timeless song that resonates with nomadic souls, celebrating the perpetual traveler.",
    youtubeUrl: "https://www.youtube.com/watch?v=dO3YDDmVl6c",
    region: "Classic Indian Countryside"
  },
  {
    title: "Aaj Jaane Ki Zid Na Karo",
    artist: "Farida Khanum",
    description: "A ghazal that captures the reluctance to leave a beautiful place, relevant to any traveler who's fallen in love with a destination.",
    youtubeUrl: "https://www.youtube.com/watch?v=jmDdLLtrVoU",
    region: "Classic"
  },
  {
    title: "Mast Kalandar",
    artist: "Sukhwinder Singh (Heyy Babyy)",
    description: "An energetic song celebrating the spirit of Punjab, perfect for road trips through the region.",
    youtubeUrl: "https://www.youtube.com/watch?v=G9M3DP0sIOo",
    region: "Punjab"
  },
  {
    title: "Iktara",
    artist: "Amit Trivedi (Wake Up Sid)",
    description: "A soulful song about self-discovery and finding one's path, resonating with solo travelers.",
    youtubeUrl: "https://www.youtube.com/watch?v=fSS_R91Nimw",
    region: "Mumbai"
  },
  {
    title: "Kabira",
    artist: "Tochi Raina, Rekha Bhardwaj (Yeh Jawaani Hai Deewani)",
    description: "A reflective song about journeys of the heart, complementing the scenic beauty of travel destinations.",
    youtubeUrl: "https://www.youtube.com/watch?v=jHNNMj5bNQw",
    region: "Himalayas"
  },
  {
    title: "Dil Dhadakne Do",
    artist: "Shankar Mahadevan (Zindagi Na Milegi Dobara)",
    description: "An uplifting song about living life to the fullest, perfect for adventurous travel experiences.",
    youtubeUrl: "https://www.youtube.com/watch?v=WvLw-LVkPNY",
    region: "Spain"
  },
  {
    title: "Ae Watan",
    artist: "Arijit Singh (Raazi)",
    description: "A patriotic song that evokes love for one's country, inspiring domestic travel.",
    youtubeUrl: "https://www.youtube.com/watch?v=BNfAf4To73c",
    region: "India"
  },
  {
    title: "Aao Na",
    artist: "Vishal Bhardwaj (Haider)",
    description: "A haunting melody showcasing the beauty of Kashmir, enticing travelers to visit this 'paradise on Earth'.",
    youtubeUrl: "https://www.youtube.com/watch?v=DU-P3_AVZ3s",
    region: "Kashmir"
  },
  {
    title: "Tum Jab Paas",
    artist: "Prateek Kuhad",
    description: "A contemporary indie track with a dreamy quality, perfect for reflective moments during travel.",
    youtubeUrl: "https://www.youtube.com/watch?v=CvjnXrCVfgY",
    region: "Indie"
  },
  {
    title: "Kinare",
    artist: "Papon (Queen)",
    description: "A serene song about new beginnings, fitting for travelers seeking transformation.",
    youtubeUrl: "https://www.youtube.com/watch?v=19PwgiTrLMI",
    region: "Paris/Europe"
  },
  {
    title: "Banjaara",
    artist: "Mohammed Irfan (Ek Villain)",
    description: "A song about being a wanderer, resonating with those who have wanderlust.",
    youtubeUrl: "https://www.youtube.com/watch?v=2kXhyE6hMbI",
    region: "General"
  },
  {
    title: "Khwabon Ke Parindey",
    artist: "Arijit Singh (Zindagi Na Milegi Dobara)",
    description: "A song about dreams taking flight, inspiring travelers to pursue their wanderlust.",
    youtubeUrl: "https://www.youtube.com/watch?v=R0XjwtP_iTY",
    region: "Spain"
  }
];

const MusicPage = () => {
  return (
    <Layout>
      <div className="bg-gray-50 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-10 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-india-blue mb-4">
              Travel Music Collection
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Enhance your travel experience with this curated collection of songs that capture the essence of wanderlust, adventure, and the beauty of India.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {travelSongs.map((song, index) => (
              <Card key={index} className="overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-india-blue/10 flex items-center justify-center mr-4">
                      <Music size={24} className="text-india-blue" />
                    </div>
                    <div>
                      <h2 className="font-semibold text-gray-800">{song.title}</h2>
                      <p className="text-sm text-gray-500">{song.artist}</p>
                    </div>
                  </div>
                  
                  {song.region && (
                    <div className="mb-3">
                      <span className="text-xs font-medium bg-india-saffron/10 text-india-saffron px-2 py-1 rounded-full">
                        {song.region}
                      </span>
                    </div>
                  )}
                  
                  <p className="text-gray-600 mb-4 text-sm line-clamp-2">{song.description}</p>
                  
                  <Button asChild variant="outline" className="w-full flex items-center justify-center">
                    <a 
                      href={song.youtubeUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <YoutubeIcon size={16} className="mr-2 text-red-600" />
                      Listen on YouTube
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 max-w-2xl mx-auto">
              Music has the power to transport us to different places and evoke memories of our travels. Create your perfect travel playlist with these songs.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MusicPage;
