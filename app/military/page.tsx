import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, FileText, Calendar, User } from 'lucide-react';

export default function MilitaryPage() {
  const articles = [
    {
      title: "Leadership Under Fire",
      excerpt: "Lessons learned from leading troops in challenging situations and how those principles apply to civilian life.",
      date: "January 10, 2025",
      author: "SGT First Class",
      readTime: "8 min read",
      slug: "leadership-under-fire"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100">
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
              <Link href="/homeschool" className="text-slate-600 hover:text-slate-800 transition-colors">
                Homeschool
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
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-slate-800 mb-4">
              Military Insights
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Stories, experiences, and leadership lessons from our family's military service and how they apply to everyday life.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="pb-16 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">Latest Articles</h2>
            
            <div className="grid gap-8">
              {articles.map((article, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                        <FileText className="w-6 h-6 text-orange-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-4 text-sm text-slate-600">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {article.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            {article.author}
                          </div>
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                    </div>
                    <CardTitle className="text-2xl text-slate-800 group-hover:text-orange-600 transition-colors">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-slate-600 leading-relaxed text-base">
                      {article.excerpt}
                    </CardDescription>
                    <Button asChild className="bg-gradient-to-r from-orange-500 to-orange-600 hover:opacity-90 transition-opacity">
                      <Link href={`/military/${article.slug}`}>
                        Read Article
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Coming Soon Section */}
            <div className="mt-12 text-center">
              <Card className="bg-gradient-to-r from-slate-50 to-slate-100 border-slate-200">
                <CardContent className="py-12">
                  <Shield className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-slate-600 mb-2">More Stories Coming Soon</h3>
                  <p className="text-slate-500">
                    Additional military insights and leadership articles will be published regularly.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 bg-white/50">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">
            Service and Leadership
          </h2>
          <p className="text-slate-600 leading-relaxed text-lg">
            Military service teaches valuable lessons about leadership, teamwork, discipline, and resilience. 
            These articles explore how military experiences shape character and provide insights that translate 
            into success in civilian careers, relationships, and personal growth.
          </p>
        </div>
      </section>
    </div>
  );
}