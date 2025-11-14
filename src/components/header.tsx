'use client';

import Link from 'next/link';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Menu, LogIn, Search, UserPlus } from 'lucide-react';
import React, { useState } from 'react';
import { Input } from './ui/input';
import { useRouter } from 'next/navigation';


const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <Button variant="ghost" asChild className="main-nav-link">
    <Link href={href}>
      {children}
    </Link>
  </Button>
);


const SearchBar = ({ onSearch }: { onSearch?: () => void }) => {
    const router = useRouter();
    const [query, setQuery] = useState('');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (query.trim()) {
            router.push(`/search?q=${encodeURIComponent(query.trim())}`);
            if(onSearch) onSearch();
        }
    };
    
    return (
        <form onSubmit={handleSearch} className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
                placeholder="Search..." 
                className="pl-10 h-9 w-full"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
        </form>
    );
};

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [searchSheetOpen, setSearchSheetOpen] = React.useState(false);

  const mainNavLinks = (
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
      <NavLink href="/blog">Blog</NavLink>
    </>
  );

  return (
    <header className="bg-card border-b shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Header */}
        <div className="hidden md:flex flex-col">
            {/* First Row */}
            <div className="flex items-center justify-center h-16">
                 <Link href="/" className="flex items-center gap-2 text-3xl font-headline font-bold text-primary hover:opacity-80 transition-opacity">
                    CryptoVerse Explorer
                </Link>
            </div>
             {/* Second Row */}
            <div className="flex items-center justify-between h-14 main-nav">
                 <nav className="flex items-center space-x-1">
                    {mainNavLinks}
                 </nav>
                 <div className="flex items-center gap-2">
                    <SearchBar />
                    <Button variant="outline" size="sm" asChild>
                       <Link href="/login">
                        <LogIn className="mr-2 h-4 w-4" />
                        Login
                       </Link>
                    </Button>
                    <Button variant="default" size="sm" asChild>
                        <Link href="/register">
                            <UserPlus className="mr-2 h-4 w-4" />
                            Register
                        </Link>
                    </Button>
                </div>
            </div>
        </div>

        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between h-16">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[280px] sm:w-[320px] p-0">
                 <SheetHeader className="p-4 border-b">
                   <SheetTitle className="sr-only">Main Menu</SheetTitle>
                   <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 text-xl font-headline font-bold text-primary">
                    CryptoVerse Explorer
                  </Link>
                </SheetHeader>
                <div className="flex flex-col h-full">
                  <nav className="flex flex-col space-y-1 p-4 flex-grow" onClick={() => setMobileMenuOpen(false)}>
                    {mainNavLinks}
                  </nav>
                   <div className="p-4 border-t grid grid-cols-2 gap-2">
                     <Button variant="outline" asChild className="w-full">
                       <Link href="/login">
                        <LogIn className="mr-2 h-4 w-4" />
                        Login
                       </Link>
                    </Button>
                    <Button variant="default" asChild className="w-full">
                       <Link href="/register">
                        <UserPlus className="mr-2 h-4 w-4" />
                        Register
                       </Link>
                    </Button>
                   </div>
                </div>
              </SheetContent>
            </Sheet>

            <Link href="/" className="flex items-center gap-2 text-xl font-headline font-bold text-primary hover:opacity-80 transition-opacity">
                CryptoVerse Explorer
            </Link>

            <Sheet open={searchSheetOpen} onOpenChange={setSearchSheetOpen}>
              <SheetTrigger asChild>
                 <Button variant="ghost" size="icon">
                    <Search />
                    <span className="sr-only">Open search</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[320px]">
                 <SheetHeader>
                    <SheetTitle>Search our articles</SheetTitle>
                 </SheetHeader>
                 <div className="mt-4">
                    <SearchBar onSearch={() => setSearchSheetOpen(false)}/>
                 </div>
              </SheetContent>
            </Sheet>
          </div>
      </div>
    </header>
  );
}
