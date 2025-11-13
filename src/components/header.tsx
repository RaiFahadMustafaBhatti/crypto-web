'use client';

import Link from 'next/link';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, LogIn } from 'lucide-react';
import React from 'react';

const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <Button variant="ghost" asChild>
    <Link href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </Link>
  </Button>
);

export function Header() {
  const [open, setOpen] = React.useState(false);

  const navLinks = (
    <>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/category/crypto">Crypto</NavLink>
      <NavLink href="/category/trading">Trading</NavLink>
      <NavLink href="/category/altcoin">Altcoin</NavLink>
      <NavLink href="/category/blockchain">Blockchain</NavLink>
      <NavLink href="/category/defi">DeFi</NavLink>
      <NavLink href="/category/nft">NFT</NavLink>
      <NavLink href="/category/featured">Featured</NavLink>
      <NavLink href="/category/press-release">Press Release</NavLink>
      <NavLink href="/?page=1">Blog</NavLink>
    </>
  );

  return (
    <header className="bg-card border-b shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-headline font-bold text-primary hover:opacity-80 transition-opacity">
            CryptoVerse Explorer
          </Link>
          
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks}
            <Button variant="outline" asChild>
               <Link href="#" target="_blank" rel="noopener noreferrer">
                <LogIn className="mr-2 h-4 w-4" />
                Login
               </Link>
            </Button>
          </nav>
          
          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col space-y-4 py-6">
                  <Link href="/" className="text-2xl font-headline font-bold text-primary px-4">
                    CryptoVerse Explorer
                  </Link>
                  <nav className="flex flex-col space-y-2 px-4" onClick={() => setOpen(false)}>
                    {navLinks}
                     <Button variant="outline" asChild>
                       <Link href="#" target="_blank" rel="noopener noreferrer">
                        <LogIn className="mr-2 h-4 w-4" />
                        Login
                       </Link>
                    </Button>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
