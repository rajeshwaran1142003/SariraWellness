
import Link from 'next/link';
import { InstagramIcon } from '@/components/icons/InstagramIcon';
import { YoutubeIcon } from '@/components/icons/YoutubeIcon';
import { WhatsappIcon } from '@/components/icons/WhatsappIcon';
import { Mail, Phone, MapPin, Heart } from 'lucide-react';
import { SariraLogo } from '../icons/SariraLogo';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const mainLinks = [
  { href: '/', label: 'Home' },
  { href: '/product', label: 'Product' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/#', label: 'Store Locator' },
  { href: '/#support', label: 'FAQ' },
];

const policyLinks = [
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/terms-of-service', label: 'Terms of Service' },
    { href: '/returns-and-refunds', label: 'Returns & Refunds' },
    { href: '/shipping-and-delivery', label: 'Shipping & Delivery' },
];

const socialLinks = [
    { href: "https://www.instagram.com/sarira.wellness", icon: <InstagramIcon className="h-5 w-5" />, label: 'Instagram' },
    { href: "https://wa.me/917010422748", icon: <WhatsappIcon className="h-5 w-5" />, label: 'WhatsApp' },
    { href: "#", icon: <YoutubeIcon className="h-5 w-5" />, label: 'YouTube' },
];

export function Footer() {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground/80">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Logo, Tagline, Socials */}
          <div className="space-y-6">
            <Link href="/" className="mb-4 inline-block">
              <SariraLogo className="h-12 brightness-[10] invert" />
            </Link>
            <p>
              Functional wellness rooted in Tamil tradition, blended for today’s lifestyle. Nourishing families with nature's goodness.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map(link => (
                <Link key={link.label} href={link.href} target="_blank" aria-label={link.label} className="bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground p-3 rounded-full transition-colors">
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Column 2: Main Links */}
          <div className="md:pt-4">
            <ul className="space-y-3">
              {mainLinks.map(link => (
                  <li key={link.href}><Link href={link.href} className="hover:text-accent transition">{link.label}</Link></li>
              ))}
            </ul>
          </div>
          
          {/* Column 3: Policy Links */}
          <div className="md:pt-4">
            <ul className="space-y-3">
              {policyLinks.map(link => (
                <li key={link.label}><Link href={link.href} className="hover:text-accent transition">{link.label}</Link></li>
              ))}
            </ul>
          </div>
          
          {/* Column 4: Contact & Subscribe */}
          <div className="space-y-8 md:pt-4">
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mt-1 mr-4 h-5 w-5 text-accent shrink-0" />
                <span>123 Wellness Street, Chennai, Tamil Nadu 600001</span>
              </li>
               <li className="flex items-start">
                <Phone className="mt-1 mr-4 h-5 w-5 text-accent shrink-0" />
                <a href="tel:+919876543210">+91 98765 43210</a>
              </li>
              <li className="flex items-start">
                <Mail className="mt-1 mr-4 h-5 w-5 text-accent shrink-0" />
                <a href="mailto:hello@sarira.wellness">hello@sarira.wellness</a>
              </li>
            </ul>
            <form className="flex gap-2">
                <Input type="email" placeholder="Your email" className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 flex-grow" />
                <Button type="submit" className="bg-accent text-accent-foreground hover:bg-accent/90">Subscribe</Button>
            </form>
          </div>
        </div>
      </div>
        
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/60 gap-4">
           <p className="flex items-center gap-1.5">© {new Date().getFullYear()} SARIRA. Made with <Heart className="w-4 h-4 text-accent" /> in Chennai, Tamil Nadu</p>
           <p>Committed to natural wellness and sustainable practices</p>
        </div>
      </div>
    </footer>
  );
}
