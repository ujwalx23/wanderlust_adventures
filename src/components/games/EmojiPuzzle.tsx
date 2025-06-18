
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { RotateCcw, Trophy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface GuessResult {
  letter: string;
  status: 'correct' | 'partial' | 'incorrect';
}

const EmojiPuzzle = () => {
  const { toast } = useToast();
  const [targetWord, setTargetWord] = useState('');
  const [currentGuess, setCurrentGuess] = useState('');
  const [guesses, setGuesses] = useState<string[]>([]);
  const [gameWon, setGameWon] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  
  const words = ['APPLE', 'BEACH', 'HEART', 'SMILE', 'MUSIC', 'PEACE', 'DANCE', 'MAGIC'];
  const maxGuesses = 5;
  
  const initializeGame = () => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    setTargetWord(randomWord);
    setCurrentGuess('');
    setGuesses([]);
    setGameWon(false);
    setGameOver(false);
  };
  
  useEffect(() => {
    initializeGame();
  }, []);
  
  const getLetterStatus = (letter: string, position: number, word: string): 'correct' | 'partial' | 'incorrect' => {
    if (targetWord[position] === letter) {
      return 'correct';
    } else if (targetWord.includes(letter)) {
      return 'partial';
    } else {
      return 'incorrect';
    }
  };
  
  const getEmojiForLetter = (letter: string, status: 'correct' | 'partial' | 'incorrect'): string => {
    const emojiMap: Record<string, Record<string, string>> = {
      'A': { correct: '🍎', partial: '🥑', incorrect: '⚫' },
      'B': { correct: '🏖️', partial: '🧿', incorrect: '⚫' },
      'C': { correct: '🍪', partial: '☕', incorrect: '⚫' },
      'D': { correct: '💃', partial: '🌅', incorrect: '⚫' },
      'E': { correct: '🥚', partial: '🌿', incorrect: '⚫' },
      'F': { correct: '🔥', partial: '🍃', incorrect: '⚫' },
      'G': { correct: '💎', partial: '🌱', incorrect: '⚫' },
      'H': { correct: '❤️', partial: '🏠', incorrect: '⚫' },
      'I': { correct: '🍦', partial: '🌊', incorrect: '⚫' },
      'L': { correct: '🍋', partial: '🌙', incorrect: '⚫' },
      'M': { correct: '🎵', partial: '🗻', incorrect: '⚫' },
      'N': { correct: '🌙', partial: '🥜', incorrect: '⚫' },
      'O': { correct: '🍊', partial: '⭕', incorrect: '⚫' },
      'P': { correct: '🕊️', partial: '🍑', incorrect: '⚫' },
      'R': { correct: '🌹', partial: '🌈', incorrect: '⚫' },
      'S': { correct: '😊', partial: '⭐', incorrect: '⚫' },
      'T': { correct: '🌳', partial: '🎯', incorrect: '⚫' },
      'U': { correct: '☂️', partial: '🦄', incorrect: '⚫' },
      'V': { correct: '💜', partial: '🌋', incorrect: '⚫' },
      'W': { correct: '🌊', partial: '❄️', incorrect: '⚫' },
      'X': { correct: '❌', partial: '✨', incorrect: '⚫' },
      'Y': { correct: '💛', partial: '🌞', incorrect: '⚫' },
      'Z': { correct: '⚡', partial: '🦓', incorrect: '⚫' }
    };
    
    return emojiMap[letter]?.[status] || '⚫';
  };
  
  const handleGuess = () => {
    if (currentGuess.length !== 5) {
      toast({
        title: "Invalid Input",
        description: "Please enter a 5-letter word",
        variant: "destructive",
      });
      return;
    }
    
    const upperGuess = currentGuess.toUpperCase();
    const newGuesses = [...guesses, upperGuess];
    setGuesses(newGuesses);
    
    if (upperGuess === targetWord) {
      setGameWon(true);
      setGameOver(true);
      toast({
        title: "Congratulations!",
        description: `You guessed the word in ${newGuesses.length} attempts!`,
      });
    } else if (newGuesses.length >= maxGuesses) {
      setGameOver(true);
      toast({
        title: "Game Over",
        description: `The word was ${targetWord}`,
        variant: "destructive",
      });
    }
    
    setCurrentGuess('');
  };
  
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !gameOver) {
      handleGuess();
    }
  };
  
  return (
    <Card className="bg-white">
      <CardContent className="p-6">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            Emoji Puzzle
          </h3>
          <p className="text-gray-600">
            Guess the 5-letter word in {maxGuesses} tries!
          </p>
          <div className="flex items-center justify-center space-x-4 mt-2">
            <span className="text-sm">Attempts: {guesses.length}/{maxGuesses}</span>
          </div>
        </div>
        
        <div className="max-w-md mx-auto">
          {gameWon && (
            <div className="text-center mb-6 p-4 bg-green-100 rounded-lg">
              <Trophy size={32} className="mx-auto mb-2 text-yellow-500" />
              <h4 className="text-lg font-bold text-green-800">You Won!</h4>
              <p className="text-green-600">The word was {targetWord}</p>
            </div>
          )}
          
          {gameOver && !gameWon && (
            <div className="text-center mb-6 p-4 bg-red-100 rounded-lg">
              <h4 className="text-lg font-bold text-red-800">Game Over!</h4>
              <p className="text-red-600">The word was {targetWord}</p>
            </div>
          )}
          
          <div className="mb-6 space-y-2">
            {Array.from({ length: maxGuesses }).map((_, rowIndex) => (
              <div key={rowIndex} className="flex justify-center space-x-1">
                {Array.from({ length: 5 }).map((_, colIndex) => {
                  const guess = guesses[rowIndex];
                  let content = '';
                  
                  if (guess) {
                    const letter = guess[colIndex];
                    const status = getLetterStatus(letter, colIndex, guess);
                    content = getEmojiForLetter(letter, status);
                  }
                  
                  return (
                    <div
                      key={colIndex}
                      className="w-12 h-12 border-2 border-gray-300 rounded flex items-center justify-center text-lg font-bold"
                    >
                      {content}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
          
          {!gameOver && (
            <div className="flex space-x-2 mb-4">
              <Input
                type="text"
                value={currentGuess}
                onChange={(e) => setCurrentGuess(e.target.value.slice(0, 5))}
                onKeyPress={handleKeyPress}
                placeholder="Enter 5-letter word"
                maxLength={5}
                className="flex-1 uppercase"
              />
              <Button onClick={handleGuess}>
                Guess
              </Button>
            </div>
          )}
          
          <div className="text-center text-xs text-gray-500 mb-4">
            <p>🟢 = Correct letter and position</p>
            <p>🟡 = Correct letter, wrong position</p>
            <p>⚫ = Letter not in word</p>
          </div>
          
          <div className="flex justify-center">
            <Button onClick={initializeGame} variant="outline">
              <RotateCcw size={16} className="mr-2" />
              New Game
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EmojiPuzzle;
