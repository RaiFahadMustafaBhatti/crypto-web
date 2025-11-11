import Link from 'next/link';
import { Button } from './ui/button';

export function Header() {
  return (
    <header className="bg-card border-b shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-headline font-bold text-primary hover:opacity-80 transition-opacity">
            CryptoVerse Explorer
          </Link>
          <nav className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link href="/">Home</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/?page=1">Blog</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
