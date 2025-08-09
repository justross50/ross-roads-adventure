import Link from 'next/link'

export default function ChristianIndex() {
  const tools = [
    { href: '/christian/verse-match', title: 'Verse Match', desc: 'Match references to verses.' },
    { href: '/christian/fill-in-the-blank', title: 'Fill‑in‑the‑Blank', desc: 'Type missing words.' },
    { href: '/christian/verse-of-the-day', title: 'Verse of the Day', desc: 'One verse, refreshed daily.' },
  ]
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold">Christian Tools</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">Seeded, offline‑friendly.</p>
      </header>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map(t => (
          <Link key={t.href} href={t.href} className="rounded-xl border p-5 hover:shadow-md transition dark:border-gray-800">
            <h3 className="text-xl font-semibold">{t.title}</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{t.desc}</p>
            <span className="mt-3 inline-block text-sm text-blue-600 dark:text-blue-400">Open →</span>
          </Link>
        ))}
      </section>
    </div>
  )
}
