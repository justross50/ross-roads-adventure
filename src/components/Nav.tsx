import Link from 'next/link';

export default function Nav() {
  return (
    <header className="bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <nav className="container mx-auto flex items-center justify-between py-4 px-4">
        <Link href="/" className="text-xl font-bold">
          Ross Roads Adventure
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/christian" className="hover:underline">
              Christian
            </Link>
          </li>
          <li>
            <Link href="/homeschool" className="hover:underline">
              Homeschool
            </Link>
          </li>
          <li>
            <Link href="/military" className="hover:underline">
              Military
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
