
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, X, Shuffle, Trophy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const GuessTheFlag = () => {
  const { toast } = useToast();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  
  // Sample questions - in a real app, we'd have more and better images
  const questions = [
    {
      flag: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEDbtRz0cZVLaaG7c7sk7M_nzFEqLTfZe3gQ&s",
      country: "Brazil",
      options: ["Brazil", "Pakistan", "Bangladesh", "Argentina"]
    },
    {
      flag: "https://placehold.co/300x200/00247D/FFFFFF?text=Japanese+Flag",
      country: "Japan",
      options: ["China", "Japan", "South Korea", "Vietnam"]
    },
    {
      flag: "https://placehold.co/300x200/009F3D/FFFFFF?text=Italian+Flag",
      country: "Italy",
      options: ["France", "Italy", "Spain", "Germany"]
    },
    {
      flag: "https://placehold.co/300x200/003580/FFFFFF?text=Brazilian+Flag",
      country: "Brazil",
      options: ["Argentina", "Brazil", "Colombia", "Peru"]
    },
    {
      flag: "https://placehold.co/300x200/EF2B2D/FFFFFF?text=Canadian+Flag",
      country: "Canada",
      options: ["USA", "Canada", "Russia", "Australia"]
    },
    {
      flag: "https://placehold.co/300x200/009E60/FFFFFF?text=Egyptian+Flag",
      country: "Egypt",
      options: ["Egypt", "Algeria", "Morocco", "Tunisia"]
    },
    {
      flag: "https://placehold.co/300x200/002654/FFFFFF?text=Thai+Flag",
      country: "Thailand",
      options: ["Malaysia", "Indonesia", "Singapore", "Thailand"]
    },
    {
      flag: "https://placehold.co/300x200/c60b1e/FFFFFF?text=Turkish+Flag",
      country: "Turkey",
      options: ["Greece", "Turkey", "Cyprus", "Lebanon"]
    }
  ];
  
  useEffect(() => {
    // Shuffle the questions initially
    shuffleQuestions();
  }, []);
  
  const shuffleQuestions = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowAnswer(false);
    setGameOver(false);
  };
  
  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    setShowAnswer(true);
    
    if (answer === questions[currentQuestion].country) {
      setScore(score + 1);
      toast({
        title: "Correct!",
        description: `That's the flag of ${answer}`,
        variant: "default",
      });
    } else {
      toast({
        title: "Incorrect!",
        description: `The correct answer is ${questions[currentQuestion].country}`,
        variant: "destructive",
      });
    }
  };
  
  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowAnswer(false);
    } else {
      setGameOver(true);
    }
  };
  
  return (
    <Card className="bg-white">
      <CardContent className="p-6">
        {gameOver ? (
          <div className="text-center py-8">
            <Trophy size={64} className="mx-auto mb-4 text-yellow-400" />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Game Complete!
            </h3>
            <p className="text-gray-600 mb-6">
              Your score: {score} out of {questions.length}
            </p>
            <Button onClick={shuffleQuestions}>
              <Shuffle size={16} className="mr-2" />
              Play Again
            </Button>
          </div>
        ) : (
          <>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800">
                Guess The Flag
              </h3>
              <p className="text-gray-600">
                Which country does this flag belong to?
              </p>
              <div className="flex items-center justify-center space-x-4 mt-2">
                <span className="text-sm">
                  Question {currentQuestion + 1} of {questions.length}
                </span>
                <span className="text-sm">
                  Score: {score}
                </span>
              </div>
            </div>
            
            <div className="flex flex-col items-center mb-6">
              <img 
                src={questions[currentQuestion].flag} 
                alt="Flag" 
                className="w-full max-w-xs h-auto rounded-lg shadow-md mb-6"
              />
              
              <div className="grid grid-cols-2 gap-4 w-full max-w-lg">
                {questions[currentQuestion].options.map((option, index) => (
                  <Button
                    key={index}
                    variant={
                      showAnswer 
                        ? option === questions[currentQuestion].country 
                          ? "default" 
                          : option === selectedAnswer 
                            ? "destructive" 
                            : "outline"
                        : selectedAnswer === option 
                          ? "secondary" 
                          : "outline"
                    }
                    className={`h-auto py-3 px-4 ${showAnswer && "pointer-events-none"}`}
                    onClick={() => handleAnswer(option)}
                    disabled={showAnswer}
                  >
                    {option}
                    {showAnswer && option === questions[currentQuestion].country && (
                      <Check size={16} className="ml-1 text-green-500" />
                    )}
                    {showAnswer && option === selectedAnswer && option !== questions[currentQuestion].country && (
                      <X size={16} className="ml-1 text-red-500" />
                    )}
                  </Button>
                ))}
              </div>
            </div>
            
            {showAnswer && (
              <div className="flex justify-center">
                <Button onClick={handleNext}>
                  {currentQuestion < questions.length - 1 ? "Next Question" : "View Results"}
                </Button>
              </div>
            )}
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default GuessTheFlag;
