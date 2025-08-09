import '@/styles/globals.css'
import type { Metadata } from 'next'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Ross Roads Adventure',
  description: 'Explore our Christian, homeschool, and military resources.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="flex min-h-screen flex-col bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100" suppressHydrationWarning>
        <Nav />
        <main className="container mx-auto w-full flex-1 px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
