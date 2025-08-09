export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-auto">
      <div className="container mx-auto py-4 text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Ross Roads Adventure. All rights reserved.
      </div>
    </footer>
  );
}
