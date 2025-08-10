'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Globe, RotateCcw, Trophy, MapPin } from 'lucide-react';

interface Question {
  question: string;
  options: string[];
  correct: number;
  category: string;
}

const questions: Question[] = [
  {
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    correct: 2,
    category: "European Capitals"
  },
  {
    question: "Which continent is the largest by land area?",
    options: ["Africa", "Asia", "North America", "Europe"],
    correct: 1,
    category: "Continents"
  },
  {
    question: "What is the longest river in the world?",
    options: ["Amazon River", "Nile River", "Mississippi River", "Yangtze River"],
    correct: 1,
    category: "Rivers"
  },
  {
    question: "Which country has the most time zones?",
    options: ["United States", "Russia", "China", "Canada"],
    correct: 1,
    category: "Countries"
  },
  {
    question: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Perth"],
    correct: 2,
    category: "Capitals"
  },
  {
    question: "Which mountain range contains Mount Everest?",
    options: ["Andes", "Rocky Mountains", "Alps", "Himalayas"],
    correct: 3,
    category: "Mountains"
  },
  {
    question: "What is the smallest country in the world?",
    options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
    correct: 1,
    category: "Countries"
  },
  {
    question: "Which ocean is the largest?",
    options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    correct: 3,
    category: "Oceans"
  }
];

export default function GeographyPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);

  const handleAnswerClick = (answerIndex: number) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(answerIndex);
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setUserAnswers(newAnswers);
    
    if (answerIndex === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
    
    setShowResult(true);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setQuizCompleted(false);
    setUserAnswers([]);
  };

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 90) return { message: "Outstanding! You're a geography expert!", color: "text-emerald-600" };
    if (percentage >= 70) return { message: "Great job! You know your geography well!", color: "text-blue-600" };
    if (percentage >= 50) return { message: "Good effort! Keep studying geography!", color: "text-yellow-600" };
    return { message: "Keep practicing! Geography is fascinating to explore!", color: "text-orange-600" };
  };

  if (quizCompleted) {
    const scoreMessage = getScoreMessage();
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100">
        {/* Header */}
        <header className="border-b bg-white/80 backdrop-blur-sm">
          <div className="container mx-auto px-6 py-4">
            <nav className="flex justify-between items-center">
              <Link href="/" className="text-2xl font-bold text-slate-800">
                The Ross Adventure
              </Link>
              <Button asChild variant="ghost" className="text-slate-600">
                <Link href="/homeschool" className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Homeschool
                </Link>
              </Button>
            </nav>
          </div>
        </header>

        <div className="container mx-auto px-6 py-8">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="shadow-xl bg-gradient-to-r from-white to-emerald-50 border-emerald-200">
              <CardHeader className="text-center">
                <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
                <CardTitle className="text-3xl text-slate-800 mb-2">Quiz Complete!</CardTitle>
                <div className="text-4xl font-bold text-emerald-600 mb-2">
                  {score}/{questions.length}
                </div>
                <p className={`text-lg font-medium ${scoreMessage.color}`}>
                  {scoreMessage.message}
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-slate-800 mb-3">Quiz Results</h3>
                  <div className="text-sm space-y-2">
                    <div className="flex justify-between">
                      <span>Questions Answered:</span>
                      <span className="font-medium">{questions.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Correct Answers:</span>
                      <span className="font-medium text-emerald-600">{score}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Accuracy:</span>
                      <span className="font-medium">{Math.round((score / questions.length) * 100)}%</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4 justify-center">
                  <Button 
                    onClick={resetQuiz}
                    className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:opacity-90"
                  >
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Take Quiz Again
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/homeschool">
                      Back to Homeschool
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-slate-800">
              The Ross Adventure
            </Link>
            <Button asChild variant="ghost" className="text-slate-600">
              <Link href="/homeschool" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Homeschool
              </Link>
            </Button>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="max-w-3xl mx-auto">
          {/* Quiz Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl mb-4">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-slate-800 mb-2">Geography Quiz</h1>
            <p className="text-slate-600 mb-4">Test your knowledge of world geography</p>
            
            <div className="flex justify-center items-center gap-8 mb-6">
              <div className="text-center">
                <div className="text-xl font-bold text-emerald-600">
                  {currentQuestion + 1}/{questions.length}
                </div>
                <div className="text-sm text-slate-600">Question</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-blue-600">{score}</div>
                <div className="text-sm text-slate-600">Score</div>
              </div>
              <Button onClick={resetQuiz} variant="outline" className="flex items-center gap-2">
                <RotateCcw className="w-4 h-4" />
                Restart
              </Button>
            </div>
            
            {/* Progress bar */}
            <div className="w-full bg-slate-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Question Card */}
          <Card className="shadow-xl mb-6">
            <CardHeader className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <MapPin className="w-5 h-5 text-emerald-600" />
                <span className="text-sm font-medium text-emerald-600">{question.category}</span>
              </div>
              <CardTitle className="text-2xl text-slate-800">{question.question}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {question.options.map((option, index) => (
                <Button
                  key={index}
                  onClick={() => handleAnswerClick(index)}
                  variant="outline"
                  className={`w-full p-4 h-auto text-left justify-start transition-all duration-200 ${
                    selectedAnswer === null
                      ? 'hover:bg-emerald-50 hover:border-emerald-300'
                      : selectedAnswer === index
                      ? index === question.correct
                        ? 'bg-emerald-50 border-emerald-500 text-emerald-700'
                        : 'bg-red-50 border-red-500 text-red-700'
                      : index === question.correct
                      ? 'bg-emerald-50 border-emerald-500 text-emerald-700'
                      : 'opacity-50'
                  }`}
                  disabled={selectedAnswer !== null}
                >
                  <span className="mr-3 font-semibold">
                    {String.fromCharCode(65 + index)}:
                  </span>
                  {option}
                </Button>
              ))}

              {showResult && (
                <div className="pt-4 text-center">
                  <div className={`text-lg font-medium mb-4 ${
                    selectedAnswer === question.correct ? 'text-emerald-600' : 'text-red-600'
                  }`}>
                    {selectedAnswer === question.correct ? '✓ Correct!' : '✗ Incorrect'}
                  </div>
                  
                  <Button 
                    onClick={nextQuestion}
                    className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:opacity-90"
                  >
                    {currentQuestion < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}