import '@/styles/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ross Roads Adventure',
  description: 'Explore our Christian, homeschool, and military resources.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
