import Link from 'next/link';
import { InstagramIcon } from '@/components/icons/InstagramIcon';
import { YoutubeIcon } from '@/components/icons/YoutubeIcon';
import { WhatsappIcon } from '@/components/icons/WhatsappIcon';
import { Mail, Phone, MapPin } from 'lucide-react';

const exploreLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#product', label: 'Shop' },
  { href: '#journal', label: 'Journal' },
  { href: '#contact', label: 'Contact' },
];

const supportLinks = [
    { href: '#', label: 'Shipping & Returns' },
    { href: '#', label: 'Privacy Policy' },
    { href: '#', label: 'Terms of Service' },
    { href: '#', label: 'FAQ' },
];

export function Footer() {
  return (
    <footer className="bg-primary/95 text-primary-foreground backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold font-headline mb-4">SARIRA</h3>
            <p className="mb-4 text-primary-foreground/80">Functional wellness rooted in Tamil tradition, blended for today's lifestyle.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-primary-foreground hover:text-accent transition"><InstagramIcon className="h-6 w-6" /></Link>
              <Link href="#" className="text-primary-foreground hover:text-accent transition"><YoutubeIcon className="h-6 w-6" /></Link>
              <Link href="https://wa.me/917010422748" target="_blank" className="text-primary-foreground hover:text-accent transition"><WhatsappIcon className="h-6 w-6" /></Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Explore</h3>
            <ul className="space-y-2">
              {exploreLinks.map(link => (
                  <li key={link.href}><a href={link.href} className="text-primary-foreground/80 hover:text-accent transition">{link.label}</a></li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              {supportLinks.map(link => (
                <li key={link.label}><Link href={link.href} className="text-primary-foreground/80 hover:text-accent transition">{link.label}</Link></li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-primary-foreground/80">
              <li className="flex items-start">
                <Mail className="mt-1 mr-3 h-5 w-5 text-accent shrink-0" />
                <span>support@thesarira.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="mt-1 mr-3 h-5 w-5 text-accent shrink-0" />
                <span>+91-7010422748</span>
              </li>
              <li className="flex items-start">
                <MapPin className="mt-1 mr-3 h-5 w-5 text-accent shrink-0" />
                <span>Chennai, Tamil Nadu</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} SARIRA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
