import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, GraduationCap, Shield, Heart, Users, Target } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
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
              <Link href="/military" className="text-slate-600 hover:text-slate-800 transition-colors">
                Military
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
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-bold text-slate-800 mb-6">
            About The Ross Adventure
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Discover the values that guide our family—faith in Christ, a love of learning at home, and a dedication to serving others.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center shadow-lg border-0 hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-800">Christian Living</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">
                  Strengthening faith through interactive Bible study tools, daily devotions, and Scripture engagement 
                  that helps deepen understanding and spiritual growth.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg border-0 hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-800">Homeschool Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">
                  Educational tools and interactive activities designed to enhance learning experiences 
                  for homeschool families with engaging, curriculum-aligned content.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg border-0 hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-800">Military Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">
                  Stories and leadership lessons from military service, exploring how these experiences 
                  translate into valuable principles for civilian life and leadership.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Our Values */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-8">Our Core Values</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-slate-800 mb-2">Faith-Centered</h3>
                <p className="text-slate-600 text-sm">
                  Grounding all aspects of life in faith and Biblical principles
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="font-bold text-slate-800 mb-2">Family-Focused</h3>
                <p className="text-slate-600 text-sm">
                  Supporting families in their educational and spiritual journeys
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="font-bold text-slate-800 mb-2">Service-Oriented</h3>
                <p className="text-slate-600 text-sm">
                  Committed to serving others and contributing to community wellbeing
                </p>
              </div>
            </div>
          </div>

          {/* Story Section */}
          <Card className="shadow-xl bg-gradient-to-r from-white to-slate-50 border-slate-200">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-slate-800 mb-6 text-center">Our Story</h2>
              
              <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed space-y-4">
                <p>
                  The Ross Adventure began from our family's recognition that meaningful life rests on foundational principles
                  that transcend circumstances and challenges. Through years of military service, homeschooling experiences,
                  and faith-based living, these three pillars emerged as central to building a life of purpose and impact.
                </p>
                
                <p>
                  The <strong>Christian</strong> pillar represents our foundation in faith—the belief that spiritual growth 
                  and Biblical understanding provide the compass for navigating life&apos;s complexities. Our interactive 
                  Bible tools are designed to make Scripture engagement accessible and meaningful for all ages.
                </p>
                
                <p>
                  The <strong>Homeschool</strong> pillar reflects our commitment to education that goes beyond traditional 
                  classroom boundaries. We believe learning should be engaging, family-centered, and tailored to individual 
                  needs and interests. Our educational tools support families in creating rich learning experiences.
                </p>
                
                <p>
                  The <strong>Military</strong> pillar honors the lessons learned through service—leadership, discipline, 
                  sacrifice, and the importance of serving something greater than ourselves. These experiences provide 
                  valuable insights that apply far beyond military contexts.
                </p>
                
                <p>
                  Together, these three pillars create a framework for living that emphasizes faith, learning, and service. 
                  Our goal is to provide resources and insights that help individuals and families strengthen these 
                  foundational areas in their own lives.
                </p>
              </div>
            </CardContent>
          </Card>
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