
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MemoryMatch from '@/components/games/MemoryMatch';
import GuessTheNumber from '@/components/games/GuessTheNumber';
import TileTap from '@/components/games/TileTap';

const MoreGamesPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-india-blue mb-4">
            More Fun Games
          </h1>
          <p className="text-gray-600">
            Challenge yourself with these exciting brain games and puzzles.
          </p>
        </div>
        
        <Tabs defaultValue="memory-match" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="memory-match">Memory Match</TabsTrigger>
            <TabsTrigger value="guess-number">Guess the Number</TabsTrigger>
            <TabsTrigger value="tile-tap">Tile Tap</TabsTrigger>
          </TabsList>
          
          <TabsContent value="memory-match">
            <MemoryMatch />
          </TabsContent>
          
          <TabsContent value="guess-number">
            <GuessTheNumber />
          </TabsContent>
          
          <TabsContent value="tile-tap">
            <TileTap />
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default MoreGamesPage;
