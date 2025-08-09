export type VersePair = {
  id: string
  reference: string
  text: string
}

export const VERSE_MATCH_SETS: VersePair[] = [
  { id: 'gen1-1', reference: 'Genesis 1:1', text: 'In the beginning God created the heavens and the earth.' },
  { id: 'ps23-1', reference: 'Psalm 23:1', text: 'The LORD is my shepherd; I shall not want.' },
  { id: 'jn3-16', reference: 'John 3:16', text: 'For God so loved the world that he gave his one and only Son...' },
  { id: 'rom8-28', reference: 'Romans 8:28', text: 'And we know that in all things God works for the good of those who love him...' },
]
