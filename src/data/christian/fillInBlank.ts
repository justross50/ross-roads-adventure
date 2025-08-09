export type FillItem = {
  id: string
  prompt: string         // with ____ for blanks
  answer: string
  hint?: string
}

export const FILL_ITEMS: FillItem[] = [
  { id: 'fib-1', prompt: 'In the beginning God created the ____ and the earth.', answer: 'heavens', hint: 'Genesis 1:1' },
  { id: 'fib-2', prompt: 'The LORD is my ____.', answer: 'shepherd', hint: 'Psalm 23:1' },
  { id: 'fib-3', prompt: 'For God so ____ the world...', answer: 'loved', hint: 'John 3:16' },
]
