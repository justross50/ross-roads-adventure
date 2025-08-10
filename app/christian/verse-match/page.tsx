'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, RotateCcw, Trophy } from 'lucide-react';

interface VerseData {
  verse: string;
  reference: string;
}

const verses: VerseData[] = [
  { verse: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.", reference: "John 3:16" },
  { verse: "Trust in the LORD with all your heart and lean not on your own understanding.", reference: "Proverbs 3:5" },
  { verse: "I can do all this through him who gives me strength.", reference: "Philippians 4:13" },
  { verse: "Be strong and courageous. Do not be afraid; do not be discouraged, for the LORD your God will be with you wherever you go.", reference: "Joshua 1:9" },
  { verse: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.", reference: "Romans 8:28" },
  { verse: "The LORD is my shepherd, I lack nothing.", reference: "Psalm 23:1" }
];

export default function VerseMatchPage() {
  const [gameVerses, setGameVerses] = useState<VerseData[]>([]);
  const [shuffledReferences, setShuffledReferences] = useState<string[]>([]);
  const [selectedVerse, setSelectedVerse] = useState<number | null>(null);
  const [selectedReference, setSelectedReference] = useState<number | null>(null);
  const [matches, setMatches] = useState<Set<number>>(new Set());
  const [score, setScore] = useState(0);
  const [gameComplete, setGameComplete] = useState(false);

  const initializeGame = () => {
    const gameSet = verses.slice(0, 4);
    setGameVerses(gameSet);
    
    const refs = gameSet.map(v => v.reference);
    const shuffled = [...refs].sort(() => Math.random() - 0.5);
    setShuffledReferences(shuffled);
    
    setSelectedVerse(null);
    setSelectedReference(null);
    setMatches(new Set());
    setScore(0);
    setGameComplete(false);
  };

  useEffect(() => {
    initializeGame();
  }, []);

  const handleVerseClick = (index: number) => {
    if (matches.has(index)) return;
    setSelectedVerse(index);
    checkMatch(index, selectedReference);
  };

  const handleReferenceClick = (index: number) => {
    const refText = shuffledReferences[index];
    const refIndex = gameVerses.findIndex(v => v.reference === refText);
    if (matches.has(refIndex)) return;
    
    setSelectedReference(refIndex);
    checkMatch(selectedVerse, refIndex);
  };

  const checkMatch = (verseIdx: number | null, refIdx: number | null) => {
    if (verseIdx !== null && refIdx !== null) {
      if (verseIdx === refIdx) {
        const newMatches = new Set(matches);
        newMatches.add(verseIdx);
        setMatches(newMatches);
        setScore(score + 100);
        
        if (newMatches.size === gameVerses.length) {
          setGameComplete(true);
        }
      }
      
      setTimeout(() => {
        setSelectedVerse(null);
        setSelectedReference(null);
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-slate-800">
              Three Pillars
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
        <div className="max-w-6xl mx-auto">
          {/* Game Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-slate-800 mb-4">Verse Match Game</h1>
            <p className="text-slate-600 mb-4">Match Bible verses with their references</p>
            
            <div className="flex justify-center items-center gap-8 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{score}</div>
                <div className="text-sm text-slate-600">Score</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600">{matches.size}/{gameVerses.length}</div>
                <div className="text-sm text-slate-600">Matches</div>
              </div>
              <Button onClick={initializeGame} variant="outline" className="flex items-center gap-2">
                <RotateCcw className="w-4 h-4" />
                New Game
              </Button>
            </div>
          </div>

          {gameComplete && (
            <div className="text-center mb-8">
              <Card className="max-w-md mx-auto bg-gradient-to-r from-yellow-50 to-yellow-100 border-yellow-200">
                <CardHeader className="text-center">
                  <Trophy className="w-12 h-12 text-yellow-600 mx-auto mb-2" />
                  <CardTitle className="text-yellow-800">Congratulations!</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-yellow-700">You matched all verses! Final Score: {score}</p>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Game Board */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Verses Column */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-slate-800 text-center mb-4">Bible Verses</h2>
              {gameVerses.map((verse, index) => (
                <Card
                  key={index}
                  className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                    matches.has(index)
                      ? 'bg-emerald-50 border-emerald-200 opacity-75'
                      : selectedVerse === index
                      ? 'bg-blue-100 border-blue-300 shadow-lg'
                      : 'hover:bg-slate-50'
                  }`}
                  onClick={() => handleVerseClick(index)}
                >
                  <CardContent className="p-4">
                    <p className="text-slate-700 leading-relaxed">&ldquo;{verse.verse}&rdquo;</p>
                    {matches.has(index) && (
                      <p className="text-emerald-600 font-semibold mt-2 text-sm">✓ Matched!</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* References Column */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-slate-800 text-center mb-4">References</h2>
              {shuffledReferences.map((reference, index) => {
                const originalIndex = gameVerses.findIndex(v => v.reference === reference);
                const isMatched = matches.has(originalIndex);
                const isSelected = selectedReference === originalIndex;
                
                return (
                  <Card
                    key={index}
                    className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                      isMatched
                        ? 'bg-emerald-50 border-emerald-200 opacity-75'
                        : isSelected
                        ? 'bg-blue-100 border-blue-300 shadow-lg'
                        : 'hover:bg-slate-50'
                    }`}
                    onClick={() => handleReferenceClick(index)}
                  >
                    <CardContent className="p-4">
                      <p className="text-slate-700 font-semibold text-center">{reference}</p>
                      {isMatched && (
                        <p className="text-emerald-600 font-semibold mt-2 text-sm text-center">✓ Matched!</p>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}