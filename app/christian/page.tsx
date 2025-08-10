import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Gamepad2, PenTool, Calendar } from 'lucide-react';

export default function ChristianPage() {
  const tools = [
    {
      title: 'Verse Match',
      description: 'Test your Biblical knowledge by matching verses with their references in this engaging game.',
      icon: Gamepad2,
      href: '/christian/verse-match',
      color: 'bg-blue-500',
      difficulty: 'Interactive'
    },
    {
      title: 'Fill in the Blank',
      description: 'Complete Bible verses by filling in missing words to deepen your scripture memory.',
      icon: PenTool,
      href: '/christian/fill-blank',
      color: 'bg-indigo-500',
      difficulty: 'Practice'
    },
    {
      title: 'Verse of the Day',
      description: 'Start each day with inspiration from carefully selected daily Bible verses.',
      icon: Calendar,
      href: '/christian/verse-day',
      color: 'bg-purple-500',
      difficulty: 'Daily'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-slate-800">
              Three Pillars
            </Link>
            <div className="flex space-x-6">
              <Link href="/homeschool" className="text-slate-600 hover:text-slate-800 transition-colors">
                Homeschool
              </Link>
              <Link href="/military" className="text-slate-600 hover:text-slate-800 transition-colors">
                Military
              </Link>
              <Link href="/about" className="text-slate-600 hover:text-slate-800 transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-slate-600 hover:text-slate-800 transition-colors">
                Contact
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl mb-6">
              <BookOpen className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-slate-800 mb-4">
              Christian Living Tools
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Strengthen your faith journey with interactive Bible study tools designed to deepen your understanding and memory of Scripture.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {tools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg">
                  <CardHeader className="text-center">
                    <div className={`mx-auto w-14 h-14 ${tool.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-800">{tool.title}</CardTitle>
                    <div className="inline-block px-3 py-1 text-xs font-medium bg-slate-100 text-slate-600 rounded-full">
                      {tool.difficulty}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-slate-600 leading-relaxed">
                      {tool.description}
                    </CardDescription>
                    <Button asChild className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:opacity-90 transition-opacity">
                      <Link href={tool.href}>
                        Start {tool.title}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 bg-white/50">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">
            Growing in Faith
          </h2>
          <p className="text-slate-600 leading-relaxed text-lg">
            These tools are designed to help you engage with Scripture in meaningful ways. Whether you&apos;re looking to test your knowledge, 
            memorize verses, or find daily inspiration, each tool offers a unique pathway to spiritual growth and Biblical understanding.
          </p>
        </div>
      </section>
    </div>
  );
}