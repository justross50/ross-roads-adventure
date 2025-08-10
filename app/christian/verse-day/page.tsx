'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Heart, Share2 } from 'lucide-react';

interface DailyVerse {
  verse: string;
  reference: string;
  reflection: string;
  date: string;
}

const dailyVerses: DailyVerse[] = [
  {
    verse: "For I know the plans I have for you, declares the LORD, plans to prosper you and not to harm you, to give you hope and a future.",
    reference: "Jeremiah 29:11",
    reflection: "Even when life feels uncertain, God has a perfect plan for your future. Trust in His timing and His goodness.",
    date: "2025-01-14"
  },
  {
    verse: "Cast all your anxiety on him because he cares for you.",
    reference: "1 Peter 5:7",
    reflection: "Your worries are not too small for God's attention. He invites you to bring every concern to Him in prayer.",
    date: "2025-01-13"
  },
  {
    verse: "The LORD your God is with you, the Mighty Warrior who saves. He will take great delight in you; in his love he will no longer rebuke you, but will rejoice over you with singing.",
    reference: "Zephaniah 3:17",
    reflection: "God doesn't just love you—He delights in you! Let this truth fill your heart with joy and confidence today.",
    date: "2025-01-12"
  },
  {
    verse: "But those who hope in the LORD will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.",
    reference: "Isaiah 40:31",
    reflection: "When you feel exhausted, remember that God's strength is limitless. Find your hope in Him and be renewed.",
    date: "2025-01-11"
  },
  {
    verse: "And my God will meet all your needs according to the riches of his glory in Christ Jesus.",
    reference: "Philippians 4:19",
    reflection: "God knows your every need before you ask. Trust that He will provide according to His perfect wisdom and timing.",
    date: "2025-01-10"
  }
];

export default function VerseDayPage() {
  const [currentDate, setCurrentDate] = useState('');
  const [todaysVerse, setTodaysVerse] = useState<DailyVerse | null>(null);
  const [verseHistory, setVerseHistory] = useState<DailyVerse[]>([]);

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setCurrentDate(today);
    
    // Find today's verse or use the first one as default
    const verse = dailyVerses.find(v => v.date === today) || dailyVerses[0];
    setTodaysVerse(verse);
    
    // Set verse history (excluding today's verse)
    const history = dailyVerses.filter(v => v.date !== today).slice(0, 4);
    setVerseHistory(history);
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleShare = async () => {
    if (!todaysVerse) return;
    
    const text = `"${todaysVerse.verse}" - ${todaysVerse.reference}`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Daily Bible Verse',
          text: text,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(text);
      alert('Verse copied to clipboard!');
    }
  };

  if (!todaysVerse) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
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
          {/* Page Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl mb-4">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-slate-800 mb-2">Verse of the Day</h1>
            <p className="text-slate-600">Daily inspiration from God&apos;s Word</p>
          </div>

          {/* Today's Verse */}
          <Card className="mb-8 shadow-xl bg-gradient-to-r from-white to-purple-50 border-purple-200">
            <CardHeader className="text-center border-b border-purple-100">
              <div className="flex items-center justify-center gap-2 text-purple-600 mb-2">
                <Calendar className="w-5 h-5" />
                <span className="font-medium">{formatDate(todaysVerse.date)}</span>
              </div>
              <CardTitle className="text-2xl text-slate-800">Today&apos;s Verse</CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              {/* Main Verse */}
              <blockquote className="text-xl leading-relaxed text-slate-700 text-center border-l-4 border-purple-400 pl-6 italic">
                &ldquo;{todaysVerse.verse}&rdquo;
              </blockquote>
              
              {/* Reference */}
              <div className="text-center">
                <span className="text-lg font-semibold text-purple-600">
                  {todaysVerse.reference}
                </span>
              </div>
              
              {/* Reflection */}
              <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
                <div className="flex items-center gap-2 mb-3">
                  <Heart className="w-5 h-5 text-purple-600" />
                  <span className="font-semibold text-slate-800">Daily Reflection</span>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  {todaysVerse.reflection}
                </p>
              </div>
              
              {/* Share Button */}
              <div className="text-center">
                <Button 
                  onClick={handleShare}
                  className="bg-gradient-to-r from-purple-600 to-purple-700 hover:opacity-90 transition-opacity"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share This Verse
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Verse History */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-800 text-center mb-6">Recent Daily Verses</h2>
            
            <div className="grid gap-4">
              {verseHistory.map((verse, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-slate-500 mb-3 text-sm">
                      <Calendar className="w-4 h-4" />
                      {formatDate(verse.date)}
                    </div>
                    
                    <blockquote className="text-slate-700 leading-relaxed mb-3 border-l-2 border-slate-200 pl-4">
                      &ldquo;{verse.verse}&rdquo;
                    </blockquote>
                    
                    <div className="text-slate-600 font-medium text-sm">
                      {verse.reference}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}