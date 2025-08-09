import Link from 'next/link'
import { BookOpenText, GraduationCap, Shield } from 'lucide-react'

function PillarCard({
  href,
  title,
  desc,
  Icon,
}: {
  href: string
  title: string
  desc: string
  Icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-gray-800 dark:bg-gray-950"
    >
      <div className="flex items-center gap-3">
        <Icon className="h-6 w-6 opacity-80 group-hover:opacity-100" />
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">{desc}</p>
      <span className="mt-4 inline-block text-sm font-medium text-blue-600 group-hover:underline dark:text-blue-400">
        Explore →
      </span>
    </Link>
  )
}

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Ross Roads Adventure
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
          Three pillars. One mission: equip families with tools for
          Christian growth, homeschooling, and military life.
        </p>
      </section>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <PillarCard
          href="/christian"
          title="Christian"
          desc="Verse Match, Fill‑in‑the‑Blank, and Verse of the Day."
          Icon={BookOpenText}
        />
        <PillarCard
          href="/homeschool"
          title="Homeschool"
          desc="Timeline Builder and Geography Quiz to make learning fun."
          Icon={GraduationCap}
        />
        <PillarCard
          href="/military"
          title="Military"
          desc="Blog posts and resources for service and family life."
          Icon={Shield}
        />
      </section>
    </div>
  )
}
