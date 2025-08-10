import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';

export default function LeadershipUnderFirePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-slate-800">
              Three Pillars
            </Link>
            <Button asChild variant="ghost" className="text-slate-600">
              <Link href="/military" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Military
              </Link>
            </Button>
          </nav>
        </div>
      </header>

      {/* Article */}
      <article className="py-8 px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-4 text-sm text-slate-600 mb-6">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                January 10, 2025
              </div>
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                SGT First Class
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                8 min read
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 leading-tight">
              Leadership Under Fire: Lessons from the Battlefield
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed">
              Leading troops in combat situations teaches lessons that no classroom can provide. 
              Here are the principles that proved most valuable when lives were on the line.
            </p>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed space-y-6">
            <p>
              When bullets start flying and chaos erupts around you, everything you thought you knew about leadership 
              gets put to the ultimate test. I learned more about true leadership during my three deployments than 
              in all my years of formal military training combined.
            </p>

            <h2 className="text-3xl font-bold text-slate-800 mt-12 mb-6">
              Stay Calm When Everyone Else Can&apos;t
            </h2>
            
            <p>
              The first and most crucial lesson: your emotional state becomes contagious. During a particularly 
              intense firefight in Helmand Province, I watched panic spread through our unit like wildfire when 
              our Lieutenant lost his composure. In that moment, I understood that leadership isn&apos;t about rank—it&apos;s 
              about who can maintain clarity when everything goes wrong.
            </p>

            <p>
              Your team looks to you for stability. If you&apos;re panicking, they&apos;ll panic. If you&apos;re calm and 
              focused, they&apos;ll find their center too. This principle applies just as much in boardrooms and 
              family crises as it does in combat zones.
            </p>

            <h2 className="text-3xl font-bold text-slate-800 mt-12 mb-6">
              Make Decisions with Incomplete Information
            </h2>
            
            <p>
              In civilian life, we often have the luxury of gathering extensive data before making decisions. 
              In combat, you rarely have that privilege. You learn to make the best decision possible with the 
              information you have, knowing that a good decision made quickly is better than a perfect decision 
              made too late.
            </p>

            <p>
              I remember a situation where we had to choose between two evacuation routes, each with unknown risks. 
              We had maybe thirty seconds to decide. I chose based on gut instinct and the limited intel we had. 
              It wasn&apos;t perfect, but it got everyone home safely. Sometimes that&apos;s all you can ask for.
            </p>

            <blockquote className="border-l-4 border-orange-500 pl-6 py-4 bg-orange-50 rounded-r-lg my-8">
              <p className="text-lg italic">
                &ldquo;Leadership is not about being perfect. It&apos;s about being present when your people need you most.&rdquo;
              </p>
            </blockquote>

            <h2 className="text-3xl font-bold text-slate-800 mt-12 mb-6">
              Know Your People&apos;s Strengths
            </h2>
            
            <p>
              Every person in your unit brings unique capabilities to the table. Johnson was our best marksman, 
              Rodriguez could fix anything with duct tape and determination, and Williams had an uncanny ability 
              to read terrain. Effective leadership means knowing these strengths and positioning people where 
              they can excel.
            </p>

            <p>
              This isn&apos;t just about military operations. Whether you&apos;re managing a sales team, coaching your 
              kid&apos;s soccer team, or organizing a community project, understanding what each person brings to 
              the table is crucial for success.
            </p>

            <h2 className="text-3xl font-bold text-slate-800 mt-12 mb-6">
              Take Care of Your People First
            </h2>
            
            <p>
              In the military, there&apos;s an unwritten rule: the leader eats last. This isn&apos;t just about food—it&apos;s 
              about priorities. Your people&apos;s welfare comes before your own comfort, advancement, or recognition.
            </p>

            <p>
              I&apos;ve seen officers who prioritized their own careers over their soldiers&apos; wellbeing, and I&apos;ve seen 
              the devastating effect it has on morale and unit effectiveness. When your team knows you genuinely 
              care about their success and safety, they&apos;ll follow you anywhere.
            </p>

            <h2 className="text-3xl font-bold text-slate-800 mt-12 mb-6">
              Admit When You Don&apos;t Know Something
            </h2>
            
            <p>
              Pride kills. I learned this lesson when I pretended to understand a tactical situation that I 
              actually found confusing. My unwillingness to admit ignorance nearly led to a friendly fire incident. 
              After that, I made it a point to ask questions when I was uncertain, no matter how it might look.
            </p>

            <p>
              Your team doesn&apos;t need you to know everything. They need you to be honest about what you do and 
              don&apos;t know, and to seek out the information necessary to keep everyone safe and successful.
            </p>

            <h2 className="text-3xl font-bold text-slate-800 mt-12 mb-6">
              Applying Military Leadership in Civilian Life
            </h2>
            
            <p>
              These lessons didn&apos;t become irrelevant when I left the service. If anything, they became more 
              valuable. In my current role managing a manufacturing team, I draw on these principles daily:
            </p>

            <ul className="list-disc list-inside space-y-2 text-slate-700">
              <li>Staying calm during production crises</li>
              <li>Making quick decisions with limited market data</li>
              <li>Positioning team members where their skills shine</li>
              <li>Prioritizing employee welfare over short-term profits</li>
              <li>Admitting when I need to learn something new</li>
            </ul>

            <p>
              The stakes might be different, but the principles remain the same. Leadership is about serving 
              others, making tough decisions, and maintaining your integrity when it would be easier to compromise.
            </p>

            <h2 className="text-3xl font-bold text-slate-800 mt-12 mb-6">
              The Weight of Responsibility
            </h2>
            
            <p>
              Leading in combat taught me that leadership is both a privilege and a burden. You carry the weight 
              of other people&apos;s futures on your shoulders. This responsibility should humble you, not inflate your ego.
            </p>

            <p>
              Every decision you make affects real people with families, dreams, and fears. Whether you&apos;re 
              leading soldiers in Afghanistan or employees in Ohio, that fundamental truth doesn&apos;t change. 
              Leadership is ultimately about serving something greater than yourself.
            </p>

            <p>
              These lessons weren&apos;t learned in a classroom or from a textbook. They were forged in the crucible 
              of real-world pressure, where the cost of failure was measured in lives rather than dollars. But 
              that&apos;s exactly what makes them so valuable in any leadership context.
            </p>

            <p>
              True leadership isn&apos;t about having all the answers or never making mistakes. It&apos;s about showing 
              up when your people need you most, making the hard choices, and always putting their welfare above 
              your own. These principles served us well in combat, and they continue to serve in the civilian 
              world where the battles might be different, but the need for authentic leadership remains the same.
            </p>
          </div>

          {/* Article Footer */}
          <footer className="mt-12 pt-8 border-t border-slate-200">
            <div className="flex justify-center">
              <Button asChild className="bg-gradient-to-r from-orange-500 to-orange-600 hover:opacity-90">
                <Link href="/military">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Military Articles
                </Link>
              </Button>
            </div>
          </footer>
        </div>
      </article>
    </div>
  );
}