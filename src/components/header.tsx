'use client';

import Link from 'next/link';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, LogIn, Search } from 'lucide-react';
import React from 'react';
import { Input } from './ui/input';

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
        <div className="flex items-center justify-between h-16 gap-4">
          <Link href="/" className="text-2xl font-headline font-bold text-primary hover:opacity-80 transition-opacity">
            CryptoVerse Explorer
          </Link>
          
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks}
             <div className="flex items-center gap-2">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search..." className="pl-10 h-9 w-48" />
                </div>
                <Button variant="outline" asChild>
                   <Link href="#" target="_blank" rel="noopener noreferrer">
                    <LogIn className="mr-2 h-4 w-4" />
                    Login
                   </Link>
                </Button>
            </div>
          </nav>
          
          <div className="md:hidden flex items-center">
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
                   <div className="px-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input placeholder="Search..." className="pl-10 h-9 w-full" />
                        </div>
                   </div>
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
