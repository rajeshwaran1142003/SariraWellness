import { Header } from '@/components/landing/Header';
import { Hero } from '@/components/landing/Hero';
import { WellnessFeatures } from '@/components/landing/WellnessFeatures';
import { About } from '@/components/landing/About';
import { Product } from '@/components/landing/Product';
import { Science } from '@/components/landing/Science';
import { Community } from '@/components/landing/Community';
import { Journal } from '@/components/landing/Journal';
import { Testimonials } from '@/components/landing/Testimonials';
import { WellnessAI } from '@/components/landing/WellnessAI';
import { Footer } from '@/components/landing/Footer';
import { WhatsappButton } from '@/components/landing/WhatsappButton';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <WellnessFeatures />
        <About />
        <Product />
        <Science />
        <Community />
        <Journal />
        <Testimonials />
        <WellnessAI />
      </main>
      <Footer />
      <WhatsappButton />
    </div>
  );
}
