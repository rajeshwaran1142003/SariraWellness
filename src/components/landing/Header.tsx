"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { SariraLogo } from '@/components/icons/SariraLogo';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/product', label: 'Fig Malt' },
  { href: '/#science', label: 'Science' },
  { href: '/#community', label: 'Community' },
  { href: '/#journal', label: 'Journal' },
  { href: '/#wellness-ai', label: 'Wellness AI'}
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 'bg-background/80 backdrop-blur-sm shadow-md' : 'bg-transparent',
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        <Link href="/" className="text-2xl font-bold font-headline text-primary">
          <SariraLogo />
        </Link>
        <nav className="hidden md:flex space-x-8">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className="text-primary hover:text-accent transition-colors duration-300">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
          <Button onClick={() => setIsOpen(!isOpen)} variant="ghost" size="icon">
            <Menu className="h-6 w-6 text-primary" />
          </Button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={cn(
        'md:hidden fixed top-0 left-0 w-full h-full bg-background/90 backdrop-blur-lg z-50 transition-transform duration-300 ease-in-out',
        isOpen ? 'translate-x-0' : '-translate-x-full'
      )}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" onClick={closeMenu} className="text-2xl font-bold font-headline text-primary">
              <SariraLogo />
            </Link>
            <Button onClick={closeMenu} variant="ghost" size="icon">
              <X className="h-6 w-6 text-primary" />
            </Button>
        </div>
        <nav className="flex flex-col items-center justify-center h-[calc(100%-80px)] space-y-8">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} onClick={closeMenu} className="text-2xl text-primary hover:text-accent transition-colors duration-300">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
