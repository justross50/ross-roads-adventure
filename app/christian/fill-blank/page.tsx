'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowLeft, RotateCcw, CheckCircle } from 'lucide-react';

interface BlankVerse {
  verse: string;
  reference: string;
  blanks: { word: string; position: number }[];
}

const blankVerses: BlankVerse[] = [
  {
    verse: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
    reference: "John 3:16",
    blanks: [{ word: "loved", position: 12 }, { word: "eternal", position: 101 }]
  },
  {
    verse: "Trust in the LORD with all your heart and lean not on your own understanding.",
    reference: "Proverbs 3:5",
    blanks: [{ word: "Trust", position: 0 }, { word: "heart", position: 36 }]
  },
  {
    verse: "I can do all this through him who gives me strength.",
    reference: "Philippians 4:13",
    blanks: [{ word: "strength", position: 41 }]
  },
  {
    verse: "Be strong and courageous. Do not be afraid; do not be discouraged, for the LORD your God will be with you wherever you go.",
    reference: "Joshua 1:9",
    blanks: [{ word: "strong", position: 3 }, { word: "afraid", position: 42 }]
  }
];

export default function FillBlankPage() {
  const [currentVerse, setCurrentVerse] = useState<BlankVerse | null>(null);
  const [userAnswers, setUserAnswers] = useState<{ [key: number]: string }>({});
  const [showAnswers, setShowAnswers] = useState(false);
  const [score, setScore] = useState(0);
  const [verseIndex, setVerseIndex] = useState(0);

  const initializeVerse = () => {
    const verse = blankVerses[verseIndex];
    setCurrentVerse(verse);
    setUserAnswers({});
    setShowAnswers(false);
  };

  useEffect(() => {
    initializeVerse();
  }, [verseIndex]);

  const createVerseWithBlanks = () => {
    if (!currentVerse) return '';
    
    let result = currentVerse.verse;
    const sortedBlanks = [...currentVerse.blanks].sort((a, b) => b.position - a.position);
    
    sortedBlanks.forEach((blank) => {
      const before = result.substring(0, blank.position);
      const after = result.substring(blank.position + blank.word.length);
      result = before + '______' + after;
    });
    
    return result;
  };

  const handleAnswerChange = (blankIndex: number, value: string) => {
    setUserAnswers({
      ...userAnswers,
      [blankIndex]: value
    });
  };

  const checkAnswers = () => {
    if (!currentVerse) return;
    
    let correctAnswers = 0;
    currentVerse.blanks.forEach((blank, index) => {
      const userAnswer = userAnswers[index]?.toLowerCase().trim();
      const correctAnswer = blank.word.toLowerCase();
      
      if (userAnswer === correctAnswer) {
        correctAnswers++;
      }
    });
    
    setScore(Math.round((correctAnswers / currentVerse.blanks.length) * 100));
    setShowAnswers(true);
  };

  const nextVerse = () => {
    if (verseIndex < blankVerses.length - 1) {
      setVerseIndex(verseIndex + 1);
    }
  };

  const previousVerse = () => {
    if (verseIndex > 0) {
      setVerseIndex(verseIndex - 1);
    }
  };

  const resetVerse = () => {
    setUserAnswers({});
    setShowAnswers(false);
    setScore(0);
  };

  if (!currentVerse) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-slate-800">
              The Ross Adventure
            </Link>
            <Button asChild variant="ghost" className="text-slate-600">
              <Link href="/christian" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Christian
              </Link>
            </Button>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Game Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-slate-800 mb-4">Fill in the Blank</h1>
            <p className="text-slate-600 mb-4">Complete the Bible verses by filling in the missing words</p>
            
            <div className="flex justify-center items-center gap-6 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-600">{verseIndex + 1}/{blankVerses.length}</div>
                <div className="text-sm text-slate-600">Verse</div>
              </div>
              {showAnswers && (
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600">{score}%</div>
                  <div className="text-sm text-slate-600">Score</div>
                </div>
              )}
              <Button onClick={resetVerse} variant="outline" className="flex items-center gap-2">
                <RotateCcw className="w-4 h-4" />
                Reset
              </Button>
            </div>
          </div>

          {/* Main Game Card */}
          <Card className="mb-6 shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-xl text-slate-800">{currentVerse.reference}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Verse with blanks */}
              <div className="text-lg leading-relaxed text-slate-700 bg-slate-50 p-6 rounded-lg">
                &ldquo;{createVerseWithBlanks()}&rdquo;
              </div>

              {/* Input fields for blanks */}
              <div className="space-y-4">
                <h3 className="font-semibold text-slate-800">Fill in the blanks:</h3>
                {currentVerse.blanks.map((blank, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <span className="text-sm text-slate-600 w-16">Blank {index + 1}:</span>
                    <Input
                      type="text"
                      value={userAnswers[index] || ''}
                      onChange={(e) => handleAnswerChange(index, e.target.value)}
                      placeholder="Enter missing word"
                      className={`max-w-48 ${
                        showAnswers
                          ? userAnswers[index]?.toLowerCase().trim() === blank.word.toLowerCase()
                            ? 'border-emerald-300 bg-emerald-50'
                            : 'border-red-300 bg-red-50'
                          : ''
                      }`}
                      disabled={showAnswers}
                    />
                    {showAnswers && (
                      <div className="flex items-center gap-2">
                        {userAnswers[index]?.toLowerCase().trim() === blank.word.toLowerCase() ? (
                          <CheckCircle className="w-5 h-5 text-emerald-600" />
                        ) : (
                          <span className="text-red-600 text-sm">Correct: {blank.word}</span>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex justify-center gap-4 pt-4">
                {!showAnswers ? (
                  <Button onClick={checkAnswers} className="bg-indigo-600 hover:bg-indigo-700">
                    Check Answers
                  </Button>
                ) : (
                  <div className="flex gap-4">
                    <Button 
                      onClick={previousVerse} 
                      variant="outline" 
                      disabled={verseIndex === 0}
                    >
                      Previous Verse
                    </Button>
                    <Button 
                      onClick={nextVerse} 
                      disabled={verseIndex === blankVerses.length - 1}
                      className="bg-indigo-600 hover:bg-indigo-700"
                    >
                      Next Verse
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Progress indicator */}
          <div className="flex justify-center">
            <div className="flex gap-2">
              {blankVerses.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index === verseIndex ? 'bg-indigo-600' : 'bg-slate-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}