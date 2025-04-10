
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GuessTheFlag from '@/components/games/GuessTheFlag';
import GuessTheLanguage from '@/components/games/GuessTheLanguage';
import WouldYouRather from '@/components/games/WouldYouRather';

const GamesPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-india-blue mb-4">
            Fun Travel Games
          </h1>
          <p className="text-gray-600">
            Enjoy these travel-themed games and test your knowledge about different destinations around the world.
          </p>
        </div>
        
        <Tabs defaultValue="guess-the-flag" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="guess-the-flag">Guess the Flag</TabsTrigger>
            <TabsTrigger value="guess-the-language">Guess the Language</TabsTrigger>
            <TabsTrigger value="would-you-rather">Would You Rather</TabsTrigger>
          </TabsList>
          
          <TabsContent value="guess-the-flag">
            <GuessTheFlag />
          </TabsContent>
          
          <TabsContent value="guess-the-language">
            <GuessTheLanguage />
          </TabsContent>
          
          <TabsContent value="would-you-rather">
            <WouldYouRather />
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default GamesPage;
