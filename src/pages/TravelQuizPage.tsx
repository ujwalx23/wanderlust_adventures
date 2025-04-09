
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';
import { Check, X } from 'lucide-react';

interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const quizQuestions: QuizQuestion[] = [
  {
    question: "Which Indian city is known as the 'Pink City'?",
    options: ["Jodhpur", "Jaipur", "Udaipur", "Kochi"],
    correctAnswer: 1,
    explanation: "Jaipur is known as the 'Pink City' because many buildings in the old city are painted in terracotta pink color."
  },
  {
    question: "Which is the largest state in India by area?",
    options: ["Maharashtra", "Madhya Pradesh", "Uttar Pradesh", "Rajasthan"],
    correctAnswer: 3,
    explanation: "Rajasthan is the largest state in India by area, covering around 342,239 sq km."
  },
  {
    question: "Which Indian monument is one of the Seven Wonders of the World?",
    options: ["Red Fort", "Hawa Mahal", "Taj Mahal", "Konark Sun Temple"],
    correctAnswer: 2,
    explanation: "The Taj Mahal in Agra is one of the Seven Wonders of the World, built by Emperor Shah Jahan in memory of his wife Mumtaz Mahal."
  },
  {
    question: "Which state in India is known as 'God's Own Country'?",
    options: ["Goa", "Kerala", "Himachal Pradesh", "Uttarakhand"],
    correctAnswer: 1,
    explanation: "Kerala is known as 'God's Own Country' due to its natural beauty, backwaters, and lush landscapes."
  },
  {
    question: "Which is the highest mountain peak in India?",
    options: ["Nanda Devi", "Kangchenjunga", "Mount Everest", "K2"],
    correctAnswer: 1,
    explanation: "Kangchenjunga, located in Sikkim, is the highest mountain peak in India and the third highest in the world."
  },
  {
    question: "Which is India's smallest state by area?",
    options: ["Goa", "Sikkim", "Tripura", "Nagaland"],
    correctAnswer: 0,
    explanation: "Goa is India's smallest state by area, covering just 3,702 sq km."
  },
  {
    question: "In which year did India gain independence from British rule?",
    options: ["1945", "1947", "1950", "1942"],
    correctAnswer: 1,
    explanation: "India gained independence from British rule on August 15, 1947."
  },
  {
    question: "Which river is known as the 'Ganga of the South'?",
    options: ["Krishna", "Kaveri", "Godavari", "Tungabhadra"],
    correctAnswer: 2,
    explanation: "The Godavari River is often called the 'Ganga of the South' due to its significance in South Indian culture and religion."
  },
  {
    question: "Which Indian state is home to the Valley of Flowers National Park?",
    options: ["Himachal Pradesh", "Sikkim", "Uttarakhand", "Arunachal Pradesh"],
    correctAnswer: 2,
    explanation: "The Valley of Flowers National Park is located in Uttarakhand and is famous for its meadows of endemic alpine flowers."
  },
  {
    question: "Which is the southernmost point of mainland India?",
    options: ["Kanyakumari", "Rameshwaram", "Kochi", "Thiruvananthapuram"],
    correctAnswer: 0,
    explanation: "Kanyakumari (Cape Comorin) is the southernmost point of mainland India, where the Arabian Sea, Bay of Bengal, and Indian Ocean meet."
  },
  {
    question: "Which dance form originated in Kerala?",
    options: ["Bharatanatyam", "Kathakali", "Odissi", "Manipuri"],
    correctAnswer: 1,
    explanation: "Kathakali is a classical dance form that originated in Kerala and is known for its elaborate costumes and facial expressions."
  },
  {
    question: "Which Indian city is known for its lakes?",
    options: ["Jaipur", "Udaipur", "Jodhpur", "Kochi"],
    correctAnswer: 1,
    explanation: "Udaipur is known as the 'City of Lakes' due to its numerous artificial lakes including Lake Pichola, Fateh Sagar Lake, and others."
  },
  {
    question: "Where is the famous 'Golden Temple' located?",
    options: ["Delhi", "Varanasi", "Amritsar", "Mathura"],
    correctAnswer: 2,
    explanation: "The Golden Temple (Harmandir Sahib) is located in Amritsar, Punjab, and is the holiest shrine in Sikhism."
  },
  {
    question: "Which Indian state is known for its tea plantations?",
    options: ["Assam", "Kerala", "Karnataka", "All of these"],
    correctAnswer: 3,
    explanation: "All three states - Assam, Kerala, and Karnataka - are known for their tea plantations, though Assam and Darjeeling (West Bengal) are the most famous."
  },
  {
    question: "Which is the largest freshwater lake in India?",
    options: ["Dal Lake", "Chilika Lake", "Wular Lake", "Pulicat Lake"],
    correctAnswer: 2,
    explanation: "Wular Lake in Jammu and Kashmir is the largest freshwater lake in India."
  },
  {
    question: "Which Indian state is known as the 'Land of Five Rivers'?",
    options: ["Haryana", "Punjab", "Uttar Pradesh", "Bihar"],
    correctAnswer: 1,
    explanation: "Punjab is known as the 'Land of Five Rivers' referring to the Sutlej, Beas, Ravi, Chenab, and Jhelum rivers."
  },
  {
    question: "Which is the oldest mountain range in India?",
    options: ["Western Ghats", "Eastern Ghats", "Himalayas", "Aravalli Range"],
    correctAnswer: 3,
    explanation: "The Aravalli Range is considered the oldest mountain range in India, dating back to pre-Cambrian times."
  },
  {
    question: "Which Indian city is known as the 'Detroit of India'?",
    options: ["Bangalore", "Chennai", "Mumbai", "Pune"],
    correctAnswer: 1,
    explanation: "Chennai is known as the 'Detroit of India' due to its automobile manufacturing industry."
  },
  {
    question: "Which festival is known as the 'Festival of Lights'?",
    options: ["Holi", "Diwali", "Dussehra", "Navratri"],
    correctAnswer: 1,
    explanation: "Diwali is known as the 'Festival of Lights' and involves lighting lamps and candles to symbolize the triumph of light over darkness."
  },
  {
    question: "Which Indian monument has been labeled as the 'jewel of Muslim art in India'?",
    options: ["Qutub Minar", "Jama Masjid", "Taj Mahal", "Red Fort"],
    correctAnswer: 2,
    explanation: "The Taj Mahal is often referred to as the 'jewel of Muslim art in India' and is a masterpiece of Mughal architecture."
  }
];

const TravelQuizPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [quizCompleted, setQuizCompleted] = useState<boolean>(false);
  
  const handleOptionSelect = (optionIndex: number) => {
    if (isAnswered) return;
    setSelectedOption(optionIndex);
  };
  
  const checkAnswer = () => {
    if (selectedOption === null) {
      toast({
        title: "Please select an option",
        description: "You need to select an answer before checking",
        variant: "destructive",
      });
      return;
    }
    
    setIsAnswered(true);
    
    const currentQuestion = quizQuestions[currentQuestionIndex];
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(prev => prev + 1);
      toast({
        title: "Correct!",
        description: currentQuestion.explanation,
        variant: "default",
      });
    } else {
      toast({
        title: "Incorrect",
        description: currentQuestion.explanation,
        variant: "destructive",
      });
    }
  };
  
  const nextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setQuizCompleted(true);
    }
  };
  
  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setQuizCompleted(false);
  };
  
  return (
    <Layout>
      <div className="bg-gray-50 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-10 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-india-blue mb-4">
              Travel Quiz: Test Your Knowledge of India
            </h1>
            <p className="text-gray-600">
              How well do you know India's diverse destinations, culture, and traditions? Take our quiz to find out!
            </p>
          </div>
          
          {!quizCompleted ? (
            <Card className="max-w-3xl mx-auto">
              <CardContent className="p-6 md:p-8">
                <div className="flex justify-between items-center mb-6">
                  <span className="bg-india-blue/10 text-india-blue py-1 px-3 rounded-full text-sm font-medium">
                    Question {currentQuestionIndex + 1} of {quizQuestions.length}
                  </span>
                  <span className="text-gray-600 text-sm">
                    Score: {score}/{quizQuestions.length}
                  </span>
                </div>
                
                <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
                  {quizQuestions[currentQuestionIndex].question}
                </h2>
                
                <div className="space-y-3">
                  {quizQuestions[currentQuestionIndex].options.map((option, index) => (
                    <div 
                      key={index}
                      onClick={() => handleOptionSelect(index)}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                        selectedOption === index
                          ? isAnswered
                            ? index === quizQuestions[currentQuestionIndex].correctAnswer
                              ? 'border-green-500 bg-green-50'
                              : 'border-red-500 bg-red-50'
                            : 'border-india-blue bg-india-blue/5'
                          : isAnswered && index === quizQuestions[currentQuestionIndex].correctAnswer
                            ? 'border-green-500 bg-green-50'
                            : 'border-gray-200 hover:border-india-saffron'
                      }`}
                    >
                      <div className="flex items-center">
                        <div className={`w-6 h-6 rounded-full mr-3 flex items-center justify-center ${
                          selectedOption === index
                            ? isAnswered
                              ? index === quizQuestions[currentQuestionIndex].correctAnswer
                                ? 'bg-green-500 text-white'
                                : 'bg-red-500 text-white'
                              : 'bg-india-blue text-white'
                            : isAnswered && index === quizQuestions[currentQuestionIndex].correctAnswer
                              ? 'bg-green-500 text-white'
                              : 'bg-gray-200 text-gray-700'
                        }`}>
                          {String.fromCharCode(65 + index)}
                        </div>
                        <span className={`font-medium ${
                          isAnswered && index === quizQuestions[currentQuestionIndex].correctAnswer
                            ? 'text-green-700' 
                            : isAnswered && selectedOption === index && index !== quizQuestions[currentQuestionIndex].correctAnswer
                              ? 'text-red-700'
                              : 'text-gray-800'
                        }`}>
                          {option}
                        </span>
                        {isAnswered && (
                          index === quizQuestions[currentQuestionIndex].correctAnswer ? (
                            <Check size={18} className="ml-auto text-green-500" />
                          ) : selectedOption === index ? (
                            <X size={18} className="ml-auto text-red-500" />
                          ) : null
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 flex justify-between">
                  {!isAnswered ? (
                    <Button 
                      onClick={checkAnswer}
                      className="bg-india-blue hover:bg-india-blue/90"
                    >
                      Check Answer
                    </Button>
                  ) : (
                    <Button 
                      onClick={nextQuestion}
                      className="bg-india-saffron hover:bg-india-saffron/90"
                    >
                      {currentQuestionIndex < quizQuestions.length - 1 ? 'Next Question' : 'See Results'}
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="max-w-2xl mx-auto text-center">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Quiz Completed!</h2>
                <p className="text-gray-600 mb-6">Thank you for taking our India Travel Quiz.</p>
                
                <div className="bg-india-blue/10 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-semibold text-india-blue mb-2">Your Score</h3>
                  <div className="text-4xl font-bold text-india-blue mb-2">
                    {score} / {quizQuestions.length}
                  </div>
                  <p className="text-india-blue/70">
                    {score === quizQuestions.length
                      ? "Perfect! You're an India travel expert! 🏆"
                      : score >= quizQuestions.length * 0.8
                        ? "Great job! You know India very well! 🎉"
                        : score >= quizQuestions.length * 0.6
                          ? "Good effort! You have a solid knowledge about India! 👍"
                          : score >= quizQuestions.length * 0.4
                            ? "Not bad! But there's still more to learn about India! 📚"
                            : "Looks like you could use a trip to India to learn more! ✈️"}
                  </p>
                </div>
                
                <Button onClick={resetQuiz} className="bg-india-saffron hover:bg-india-saffron/90">
                  Take the Quiz Again
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default TravelQuizPage;
