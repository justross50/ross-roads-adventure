import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, GraduationCap, Shield } from 'lucide-react';

export default function Home() {
  const pillars = [
    {
      title: 'Christian Living',
      description: "Strengthen our family's faith with interactive Bible study tools, verse matching games, and daily devotions.",
      icon: BookOpen,
      href: '/christian',
      gradient: 'from-blue-500 to-blue-600',
      features: ['Verse Match Game', 'Fill-in-the-Blank', 'Daily Verse']
    },
    {
      title: 'Homeschool Resources',
      description: "Educational tools and activities our family uses to enhance our homeschooling journey with interactive learning.",
      icon: GraduationCap,
      href: '/homeschool',
      gradient: 'from-emerald-500 to-emerald-600',
      features: ['Timeline Builder', 'Geography Quiz', 'Learning Activities']
    },
    {
      title: 'Military Insights',
      description: "Stories, experiences, and insights from our family's military service and leadership.",
      icon: Shield,
      href: '/military',
      gradient: 'from-orange-500 to-orange-600',
      features: ['Service Stories', 'Leadership Insights', 'Military Life']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-slate-800">
              The Ross Adventure
            </Link>
            <div className="flex space-x-6">
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
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-slate-800 mb-6">
            The Ross Adventure
          </h1>
          <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join our family as we explore faith in Christ, a love of learning at home, and a commitment to serving others.
          </p>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                  <CardHeader className="text-center pb-4">
                    <div className={`mx-auto w-16 h-16 bg-gradient-to-r ${pillar.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-slate-800">{pillar.title}</CardTitle>
                    <CardDescription className="text-slate-600 text-base leading-relaxed">
                      {pillar.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      {pillar.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-slate-600">
                          <div className={`w-2 h-2 bg-gradient-to-r ${pillar.gradient} rounded-full mr-3`}></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                    <Button asChild className={`w-full bg-gradient-to-r ${pillar.gradient} hover:opacity-90 transition-opacity`}>
                      <Link href={pillar.href}>
                        Explore {pillar.title}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12 px-6">
        <div className="container mx-auto text-center">
          <p className="text-slate-300">
            © 2025 The Ross Adventure. Journeying together in faith, learning, and service.
          </p>
        </div>
      </footer>
    </div>
  );
}