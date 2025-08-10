import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GraduationCap, Clock, Globe, BookOpen } from 'lucide-react';

export default function HomeschoolPage() {
  const tools = [
    {
      title: 'Timeline Builder',
      description: 'Create interactive historical timelines to visualize important events and their connections.',
      icon: Clock,
      href: '/homeschool/timeline',
      color: 'bg-emerald-500',
      subjects: ['History', 'Science', 'Literature']
    },
    {
      title: 'Geography Quiz',
      description: 'Test knowledge of world geography with interactive quizzes covering countries, capitals, and landmarks.',
      icon: Globe,
      href: '/homeschool/geography',
      color: 'bg-teal-500',
      subjects: ['Geography', 'Social Studies', 'Culture']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-slate-800">
              The Ross Adventure
            </Link>
            <div className="flex space-x-6">
              <Link href="/christian" className="text-slate-600 hover:text-slate-800 transition-colors">
                Christian
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
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl mb-6">
              <GraduationCap className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-slate-800 mb-4">
              Homeschool Resources
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Interactive educational tools our family uses to make learning engaging and effective.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {tools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg">
                  <CardHeader className="text-center">
                    <div className={`mx-auto w-16 h-16 ${tool.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-800">{tool.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-slate-600 leading-relaxed">
                      {tool.description}
                    </CardDescription>
                    
                    <div className="flex flex-wrap gap-2">
                      {tool.subjects.map((subject, subjectIndex) => (
                        <span 
                          key={subjectIndex}
                          className="px-3 py-1 text-xs font-medium bg-slate-100 text-slate-600 rounded-full"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                    
                    <Button asChild className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:opacity-90 transition-opacity">
                      <Link href={tool.href}>
                        Launch {tool.title}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-white/50">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="font-bold text-slate-800 mb-2">Interactive Learning</h3>
              <p className="text-slate-600 text-sm">
                Hands-on tools that make learning engaging and memorable
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="font-bold text-slate-800 mb-2">Self-Paced</h3>
              <p className="text-slate-600 text-sm">
                Learn at your own speed with no time pressure
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="font-bold text-slate-800 mb-2">Educational</h3>
              <p className="text-slate-600 text-sm">
                Curriculum-aligned content for effective learning
              </p>
            </div>
          </div>
          
          <h2 className="text-3xl font-bold text-slate-800 mb-6">
            Supporting Your Homeschool Journey
          </h2>
          <p className="text-slate-600 leading-relaxed text-lg">
            These tools are designed to complement your homeschool curriculum with interactive, engaging activities 
            that help reinforce learning concepts and make education fun for the whole family.
          </p>
        </div>
      </section>
    </div>
  );
}