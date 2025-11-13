'use client';
import {useEffect, useState} from 'react';

export function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-card border-t mt-16">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-sm text-muted-foreground">
        <p>&copy; {year} CryptoVerse Explorer. All rights reserved.</p>
        <p className="mt-2">Your premier destination for crypto news and insights.</p>
      </div>
    </footer>
  );
}
