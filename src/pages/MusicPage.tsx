
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Music, YoutubeIcon, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useIsMobile } from '@/hooks/use-mobile';

interface TravelSong {
  title: string;
  artist: string;
  description: string;
  youtubeUrl: string;
  region?: string;
}

const MusicPage = () => {
  const isMobile = useIsMobile();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeRegion, setActiveRegion] = useState<string | null>(null);

  // This file already has 50+ songs, so we're good with the current list
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
    },
    {
      title: "Chhaiya Chhaiya",
      artist: "Sukhwinder Singh (Dil Se)",
      description: "An iconic song filmed on top of a moving train that showcases the beautiful landscapes of India.",
      youtubeUrl: "https://www.youtube.com/watch?v=0v1It89cKxY",
      region: "Nilgiri Mountains"
    },
    {
      title: "Jhoom Barabar Jhoom",
      artist: "Sukhwinder Singh, Shankar Mahadevan",
      description: "A lively track that encourages dancing and celebrating life's journey.",
      youtubeUrl: "https://www.youtube.com/watch?v=XKtgMQArW8g",
      region: "London/India"
    },
    {
      title: "Gal Mitthi Mitthi",
      artist: "Tochi Raina (Aisha)",
      description: "A sweet song filmed in beautiful Jaipur that captures the romance of the Pink City.",
      youtubeUrl: "https://www.youtube.com/watch?v=_YkrwDG9-9U",
      region: "Rajasthan"
    },
    {
      title: "Tumhi Ho Bandhu",
      artist: "Neeraj Shridhar (Cocktail)",
      description: "A fun song about friendship and adventure, filmed across beautiful locales.",
      youtubeUrl: "https://www.youtube.com/watch?v=ndGYE_mXqvU",
      region: "Cape Town"
    },
    {
      title: "Bawara Mann",
      artist: "Arijit Singh (Jolly LLB 2)",
      description: "A soulful song that resonates with those who enjoy peaceful journeys.",
      youtubeUrl: "https://www.youtube.com/watch?v=KIGSBDX9jfY",
      region: "Kashmir"
    },
    {
      title: "Safar",
      artist: "Arijit Singh (Jab Harry Met Sejal)",
      description: "A reflective song about the journey of life and finding one's way.",
      youtubeUrl: "https://www.youtube.com/watch?v=QbZrvaYXUiQ",
      region: "Europe"
    },
    {
      title: "Nazm Nazm",
      artist: "Arko (Bareilly Ki Barfi)",
      description: "A gentle, romantic song that complements serene travel experiences.",
      youtubeUrl: "https://www.youtube.com/watch?v=DK_UsATwoxI",
      region: "Uttar Pradesh"
    },
    {
      title: "Roobaroo",
      artist: "A.R. Rahman (Rang De Basanti)",
      description: "An inspiring song about discovery and awakening that resonates with travelers.",
      youtubeUrl: "https://www.youtube.com/watch?v=BrfRB6aTZlM",
      region: "Delhi"
    },
    {
      title: "Ye Ishq Hai",
      artist: "Shreya Ghoshal (Jab We Met)",
      description: "A joyous celebration of love and life set against the backdrop of beautiful Kashmir.",
      youtubeUrl: "https://www.youtube.com/watch?v=dXpG0kavjUo",
      region: "Kashmir"
    },
    {
      title: "Sadda Haq",
      artist: "Mohit Chauhan (Rockstar)",
      description: "A powerful anthem for self-expression filmed in the stunning landscapes of Kashmir.",
      youtubeUrl: "https://www.youtube.com/watch?v=8jiDpst0bXA",
      region: "Kashmir"
    },
    {
      title: "Hawayein",
      artist: "Arijit Singh (Jab Harry Met Sejal)",
      description: "A beautiful love song filmed across picturesque European locations.",
      youtubeUrl: "https://www.youtube.com/watch?v=cYOB941gyXI",
      region: "Europe"
    },
    {
      title: "Channa Mereya",
      artist: "Arijit Singh (Ae Dil Hai Mushkil)",
      description: "A soulful track that captures the essence of love and longing across beautiful settings.",
      youtubeUrl: "https://www.youtube.com/watch?v=bzSTpdcs-EI",
      region: "Europe"
    },
    {
      title: "Malang",
      artist: "Siddharth Mahadevan (Dhoom 3)",
      description: "An energetic circus-themed song filmed in Chicago that inspires adventure.",
      youtubeUrl: "https://www.youtube.com/watch?v=oR94BbddxaI",
      region: "USA"
    },
    {
      title: "Laapata",
      artist: "Palak Muchhal (Ek Tha Tiger)",
      description: "A romantic song filmed in the beautiful streets and landscapes of Ireland.",
      youtubeUrl: "https://www.youtube.com/watch?v=WKd_XcOSm-Q",
      region: "Dublin"
    },
    {
      title: "Tujh Mein Rab Dikhta Hai",
      artist: "Roop Kumar Rathod (Rab Ne Bana Di Jodi)",
      description: "A devotional love song filmed across various locations in India.",
      youtubeUrl: "https://www.youtube.com/watch?v=qoq8B8ThgEM",
      region: "Amritsar"
    },
    {
      title: "Ik Junoon (Paint It Red)",
      artist: "Vishal Dadlani (Zindagi Na Milegi Dobara)",
      description: "An exhilarating song filmed during the La Tomatina festival in Spain.",
      youtubeUrl: "https://www.youtube.com/watch?v=lrAM_H7v8vE",
      region: "Spain"
    },
    {
      title: "Sooraj Ki Baahon Mein",
      artist: "Neeraj Shridhar (Zindagi Na Milegi Dobara)",
      description: "A peaceful song that celebrates friendship and adventure through Spain.",
      youtubeUrl: "https://www.youtube.com/watch?v=6p511dlz8u4",
      region: "Spain"
    },
    {
      title: "Matargashti",
      artist: "Mohit Chauhan (Tamasha)",
      description: "A playful song filmed in the beautiful streets of Corsica.",
      youtubeUrl: "https://www.youtube.com/watch?v=6vKucgAeF0Q",
      region: "Corsica"
    },
    {
      title: "Kyon",
      artist: "Papon, Sunidhi Chauhan (Barfi)",
      description: "A heartwarming love song filmed in the charming hill stations of India.",
      youtubeUrl: "https://www.youtube.com/watch?v=13kI5LfZ_QA",
      region: "Darjeeling"
    },
    {
      title: "Tum Se Hi",
      artist: "Mohit Chauhan (Jab We Met)",
      description: "A romantic song set against the backdrop of Himalayan landscapes.",
      youtubeUrl: "https://www.youtube.com/watch?v=mt9xg0mmt28",
      region: "Himachal Pradesh"
    },
    {
      title: "Moh Moh Ke Dhaage",
      artist: "Papon (Dum Laga Ke Haisha)",
      description: "A soulful song that captures the essence of small-town India.",
      youtubeUrl: "https://www.youtube.com/watch?v=i3wPBNAEOqA",
      region: "Haridwar"
    },
    {
      title: "Shubhaarambh",
      artist: "Shreya Ghoshal (Kai Po Che)",
      description: "A celebratory song filmed during the kite festival in Gujarat.",
      youtubeUrl: "https://www.youtube.com/watch?v=65VZxgqxl_Q",
      region: "Gujarat"
    },
    {
      title: "Raabta",
      artist: "Arijit Singh (Agent Vinod)",
      description: "A romantic song filmed in exotic Latvia that captures the beauty of its cities.",
      youtubeUrl: "https://www.youtube.com/watch?v=zAU_rzuPFGM",
      region: "Latvia"
    },
    {
      title: "Bulleya",
      artist: "Papon (Sultan)",
      description: "A Sufi-inspired track that showcases rural Indian landscapes.",
      youtubeUrl: "https://www.youtube.com/watch?v=DrMXRQCFjvE",
      region: "Rural India"
    },
    {
      title: "Samjhawan",
      artist: "Arijit Singh, Shreya Ghoshal (Humpty Sharma Ki Dulhania)",
      description: "A beautiful love song filmed across various locations in India.",
      youtubeUrl: "https://www.youtube.com/watch?v=H1_XS3_qSP8",
      region: "Rajasthan"
    },
    {
      title: "Gerua",
      artist: "Arijit Singh (Dilwale)",
      description: "A romantic song filmed across stunning international locations including Iceland.",
      youtubeUrl: "https://www.youtube.com/watch?v=AEIVhBS6baE",
      region: "Iceland"
    },
    {
      title: "Kabira (Encore)",
      artist: "Arijit Singh (Yeh Jawaani Hai Deewani)",
      description: "A reflective version of the popular track that resonates with solo travelers.",
      youtubeUrl: "https://www.youtube.com/watch?v=jHNNMj5bNQw",
      region: "Udaipur"
    },
    {
      title: "Tu Jahan",
      artist: "Sonu Nigam (Salaam Namaste)",
      description: "A beautiful love song filmed in picturesque Australia.",
      youtubeUrl: "https://www.youtube.com/watch?v=DJZ7Gg_994g",
      region: "Australia"
    },
    {
      title: "Main Rang Sharbaton Ka",
      artist: "Arijit Singh (Phata Poster Nikhla Hero)",
      description: "A romantic song that showcases the beauty of Kashmir.",
      youtubeUrl: "https://www.youtube.com/watch?v=jHNNMj5bNQw",
      region: "Kashmir"
    },
    {
      title: "Manwa Laage",
      artist: "Arijit Singh, Shreya Ghoshal (Happy New Year)",
      description: "A romantic song filmed in beautiful European locations.",
      youtubeUrl: "https://www.youtube.com/watch?v=d8IT-16kA8M",
      region: "Europe"
    },
    {
      title: "Humsafar",
      artist: "Akhil Sachdeva (Badrinath Ki Dulhania)",
      description: "A heartfelt love song filmed across the beautiful landscapes of Uttar Pradesh.",
      youtubeUrl: "https://www.youtube.com/watch?v=8v-TWxPWIWc",
      region: "Uttar Pradesh"
    },
    {
      title: "Phir Le Aya Dil",
      artist: "Arijit Singh (Barfi)",
      description: "A nostalgic song that captures the old-world charm of Kolkata.",
      youtubeUrl: "https://www.youtube.com/watch?v=xzNeh2G5Nxc",
      region: "Kolkata"
    },
    {
      title: "Zara Zara",
      artist: "Bombay Jayashri (Rehnaa Hai Terre Dil Mein)",
      description: "A romantic classical-inspired song filmed in various beautiful locations.",
      youtubeUrl: "https://www.youtube.com/watch?v=E-3ZYpeh9NI",
      region: "South India"
    },
    {
      title: "Deewani Mastani",
      artist: "Shreya Ghoshal (Bajirao Mastani)",
      description: "A grand song that showcases the architectural splendor of ancient Indian palaces.",
      youtubeUrl: "https://www.youtube.com/watch?v=h6lHUn20J5g",
      region: "Maharashtra"
    },
    {
      title: "Ae Watan",
      artist: "Arijit Singh (Raazi)",
      description: "A patriotic song that showcases the beauty of Kashmir and inspires love for one's homeland.",
      youtubeUrl: "https://www.youtube.com/watch?v=BNfAf4To73c",
      region: "Kashmir"
    },
    {
      title: "Kun Faya Kun",
      artist: "A.R. Rahman, Javed Ali, Mohit Chauhan (Rockstar)",
      description: "A spiritual song filmed at the Nizamuddin Dargah in Delhi.",
      youtubeUrl: "https://www.youtube.com/watch?v=T94-c2UQs5c",
      region: "Delhi"
    },
    {
      title: "O Re Piya",
      artist: "Rahat Fateh Ali Khan (Aaja Nachle)",
      description: "A soulful song that captures the cultural richness of North India.",
      youtubeUrl: "https://www.youtube.com/watch?v=iv7lcUkFVSc",
      region: "North India"
    },
    {
      title: "Nadaan Parindey",
      artist: "A.R. Rahman, Mohit Chauhan (Rockstar)",
      description: "A powerful song that captures the journey of self-discovery across India.",
      youtubeUrl: "https://www.youtube.com/watch?v=ttIKsnxPrMY",
      region: "Delhi/Kashmir"
    },
    {
      title: "Yeh Jo Des Hai Tera",
      artist: "A.R. Rahman (Swades)",
      description: "A patriotic song that evokes nostalgia for one's homeland.",
      youtubeUrl: "https://www.youtube.com/watch?v=4tiVPuLbbHg",
      region: "Rural India"
    },
    {
      title: "Pani Da Rang",
      artist: "Ayushmann Khurrana (Vicky Donor)",
      description: "A romantic song filmed in Delhi that captures urban Indian lifestyle.",
      youtubeUrl: "https://www.youtube.com/watch?v=X0y5TEbcZ7c",
      region: "Delhi"
    },
    {
      title: "Dil Gira Dafatan",
      artist: "Udit Narayan (Delhi 6)",
      description: "A soulful song that showcases the old charm of Delhi.",
      youtubeUrl: "https://www.youtube.com/watch?v=lRH0ayrQgSA",
      region: "Delhi"
    },
    {
      title: "Tujhe Bhula Diya",
      artist: "Mohit Chauhan, Shekhar Ravjiani (Anjaana Anjaani)",
      description: "A bittersweet song filmed across New York City.",
      youtubeUrl: "https://www.youtube.com/watch?v=3xJXxVz-FW4",
      region: "USA"
    },
    {
      title: "Maahi Ve",
      artist: "A.R. Rahman (Highway)",
      description: "A soulful song that accompanies the journey through various parts of North India.",
      youtubeUrl: "https://www.youtube.com/watch?v=oGneAab3e88",
      region: "North India"
    }
  ];

  const regions = Array.from(new Set(travelSongs.map(song => song.region || "Unknown")));
  
  const filteredSongs = travelSongs.filter(song => {
    const matchesSearch = searchTerm === '' || 
      song.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      song.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
      song.description.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesRegion = activeRegion === null || song.region === activeRegion;
    
    return matchesSearch && matchesRegion;
  });

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
            
            <div className="mt-6 max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input
                  type="text"
                  placeholder="Search songs, artists, or regions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              <Button
                variant={activeRegion === null ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveRegion(null)}
                className="text-xs"
              >
                All Regions
              </Button>
              {regions.sort().map((region) => (
                <Button
                  key={region}
                  variant={activeRegion === region ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveRegion(region)}
                  className="text-xs"
                >
                  {region}
                </Button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSongs.map((song, index) => (
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
          
          {filteredSongs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No songs match your search criteria. Try a different search or filter.</p>
            </div>
          )}
          
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
