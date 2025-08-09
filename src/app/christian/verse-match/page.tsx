'use client'
import { useMemo, useState } from 'react'
import { VERSE_MATCH_SETS } from '@/data/christian/verseMatch'

type Choice = { id: string; label: string }
const shuffle = <T,>(arr: T[]) => [...arr].sort(() => Math.random() - 0.5)

export default function VerseMatchPage() {
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)
  const pairs = useMemo(() => shuffle(VERSE_MATCH_SETS), [])
  const left: Choice[] = pairs.map(p => ({ id: p.id, label: p.reference }))
  const right: Choice[] = useMemo(() => shuffle(pairs.map(p => ({ id: p.id, label: p.text }))), [pairs])

  const [selectedLeft, setSelectedLeft] = useState<string | null>(null)
  const [matched, setMatched] = useState<Record<string, boolean>>({})

  const handleRightClick = (id: string) => {
    if (!selectedLeft) return
    const correct = selectedLeft === id
    if (correct) {
      setMatched(m => ({ ...m, [id]: true }))
      setScore(s => s + 1)
      if (Object.keys(matched).length + 1 === pairs.length) setDone(true)
    }
    setSelectedLeft(null)
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Verse Match</h1>
      <p className="text-sm text-gray-600 dark:text-gray-400">Click a reference, then click the matching verse text.</p>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <h2 className="font-semibold">References</h2>
          {left.map(item => (
            <button
              key={item.id}
              onClick={() => setSelectedLeft(item.id)}
              className={`w-full rounded border p-3 text-left hover:bg-gray-50 dark:hover:bg-gray-800 ${
                selectedLeft === item.id ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="space-y-2">
          <h2 className="font-semibold">Verses</h2>
          {right.map(item => (
            <button
              key={item.id}
              onClick={() => handleRightClick(item.id)}
              disabled={!!matched[item.id]}
              className={`w-full rounded border p-3 text-left hover:bg-gray-50 dark:hover:bg-gray-800 ${
                matched[item.id] ? 'opacity-50 line-through' : ''
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="text-sm">Score: {score} / {pairs.length}</div>
      {done && <div className="rounded bg-green-100 dark:bg-green-900/30 p-3 text-green-700 dark:text-green-200">All matched—well done!</div>}
    </div>
  )
}
