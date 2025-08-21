import { Hero } from '@/components/sections/Hero';
import { Product } from '@/components/sections/Product';
import { Ingredients } from '@/components/sections/Ingredients';
import { About } from '@/components/sections/About';
import { Testimonials } from '@/components/sections/Testimonials';
import { FAQ } from '@/components/sections/FAQ';
import { Contact } from '@/components/sections/Contact';
import { WhatsappButton } from '@/components/WhatsappButton';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Product />
        <Ingredients />
        <About />
        <Testimonials />
        <FAQ />
        <Contact />
        <WhatsappButton />
      </main>
      <Footer />
    </div>
  );
}