
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { SariraLogo } from '@/components/icons/SariraLogo';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/product', label: 'Product' },
  { href: '/about-us', label: 'About' },
  { href: '/recipes', label: 'Recipes' },
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
      isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-md' : 'bg-transparent',
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center py-2">
        <Link href="/" className="text-primary">
          <SariraLogo className="h-14" height={56} width={168} />
        </Link>
        <nav className="hidden md:flex space-x-6 items-center">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className="text-primary hover:text-accent transition-colors duration-300 font-medium">
              {link.label}
            </Link>
          ))}
          <Button asChild>
            <Link href="https://wa.me/917010422748" target="_blank">Order Now</Link>
          </Button>
        </nav>
        <div className="md:hidden">
          <Button onClick={() => setIsOpen(!isOpen)} variant="ghost" size="icon">
            <Menu className="h-6 w-6 text-primary" />
          </Button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={cn(
        'md:hidden fixed top-0 left-0 w-full h-full bg-background/95 backdrop-blur-lg z-50 transition-transform duration-300 ease-in-out',
        isOpen ? 'translate-x-0' : '-translate-x-full'
      )}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" onClick={closeMenu} className="text-primary">
              <SariraLogo className="h-14" height={56} width={168} />
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
           <Button asChild size="lg">
            <Link href="https://wa.me/917010422748" target="_blank" onClick={closeMenu}>Order Now</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
