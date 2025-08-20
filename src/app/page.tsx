
import { Header } from '@/components/landing/Header';
import { Hero } from '@/components/landing/Hero';
import { Product } from '@/components/landing/Product';
import { Community } from '@/components/landing/Community';
import { WellnessAI } from '@/components/landing/WellnessAI';
import { Footer } from '@/components/landing/Footer';
import { WhatsappButton } from '@/components/landing/WhatsappButton';
import { Testimonials } from '@/components/landing/Testimonials';
import { Contact } from '@/components/landing/Contact';
import { Faq } from '@/components/landing/Faq';
import { Support } from '@/components/landing/Support';
import { HowToUse } from '@/components/landing/HowToUse';
import { Recipes } from '@/components/landing/Recipes';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Product />
        <HowToUse />
        <Community />
        <Recipes />
        <Contact />
        <Support />
        <Faq />
        <WellnessAI />
        <Testimonials />
      </main>
      <Footer />
      <WhatsappButton />
    </div>
  );
}
