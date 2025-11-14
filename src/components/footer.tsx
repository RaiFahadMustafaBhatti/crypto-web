'use client';
import {useEffect, useState} from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const SocialIcon = ({ href, icon: Icon }: { href: string; icon: React.ElementType }) => (
    <Link href={href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
        <Icon className="h-5 w-5" />
    </Link>
)

export function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-card border-t mt-16">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
                <h3 className="font-headline text-2xl font-bold text-primary">CryptoVerse Explorer</h3>
                <p className="text-muted-foreground mt-2">Your premier destination for crypto news and insights.</p>
                 <p className="text-sm text-muted-foreground mt-4">&copy; {year} CryptoVerse Explorer. All rights reserved.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-4 text-sm text-center md:text-left">
                <Link href="/about" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link>
                <Link href="/contact" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</Link>
                <Link href="/advertise" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">Advertise</Link>
                <Link href="/privacy" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
                <Link href="/disclaimer" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">Disclaimer</Link>
                <Link href="/terms" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">Terms & Conditions</Link>
            </div>
             <div className="flex items-center gap-4">
                <SocialIcon href="https://facebook.com" icon={Facebook} />
                <SocialIcon href="https://twitter.com" icon={Twitter} />
                <SocialIcon href="https://instagram.com" icon={Instagram} />
                <SocialIcon href="https://linkedin.com" icon={Linkedin} />
            </div>
        </div>
      </div>
    </footer>
  );
}
