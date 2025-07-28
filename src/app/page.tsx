import { Header } from '@/components/landing/Header';
import { Hero } from '@/components/landing/Hero';
import { About } from '@/components/landing/About';
import { Product } from '@/components/landing/Product';
import { Community } from '@/components/landing/Community';
import { Journal } from '@/components/landing/Journal';
import { WellnessAI } from '@/components/landing/WellnessAI';
import { Footer } from '@/components/landing/Footer';
import { WhatsappButton } from '@/components/landing/WhatsappButton';
import { Gallery } from '@/components/landing/Gallery';
import { HowToUse } from '@/components/landing/HowToUse';
import { Recipes } from '@/components/landing/Recipes';
import { StoreLocator } from '@/components/landing/StoreLocator';
import { Faq } from '@/components/landing/Faq';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Product />
        <HowToUse />
        <Recipes />
        <Gallery />
        <Journal />
        <Community />
        <StoreLocator />
        <Faq />
        <WellnessAI />
      </main>
      <Footer />
      <WhatsappButton />
    </div>
  );
}
