import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ChevronDown, Leaf, Heart, Shield, Baby } from 'lucide-react';

const possibilities = [
  {
    title: 'Boost Immunity',
    description: 'Strengthen your body’s natural defenses with the power of figs and nuts.',
    icon: <Shield className="w-8 h-8 text-accent" />,
  },
  {
    title: 'Postpartum Recovery',
    description: 'Gently restore strength and vitality for new mothers on their healing journey.',
    icon: <Baby className="w-8 h-8 text-accent" />,
  },
  {
    title: 'Daily Digestive Aid',
    description: 'Support a healthy gut and smooth digestion with natural, fiber-rich ingredients.',
    icon: <Leaf className="w-8 h-8 text-accent" />,
  },
  {
    title: 'Energy for All Ages',
    description: 'Provide sustained, natural energy for both children and adults without added sugar.',
    icon: <Heart className="w-8 h-8 text-accent" />,
  },
];

const galleryImages = [
  {
    src: 'https://storage.googleapis.com/stedi-dev-images/sarira-gallery-5.png',
    alt: 'Fresh figs ready for preparation',
    caption: 'From Farm to Jar',
    hint: 'fresh figs',
  },
  {
    src: 'https://storage.googleapis.com/stedi-dev-images/sarira-traditional-kitchen.png',
    alt: 'The traditional process of making fig malt',
    caption: 'Crafted with Tradition',
    hint: 'traditional kitchen',
  },
  {
    src: 'https://storage.googleapis.com/stedi-dev-images/sarira-gallery-3.png',
    alt: 'A mother sharing a healthy snack with her child',
    caption: 'Nourishing Families',
    hint: 'mother child food',
  },
];

const journalPosts = [
  {
    title: 'The Unsung Hero of Tamil Kitchens: The Humble Fig',
    description: 'Explore the journey of the fig from ancient scriptures to your kitchen.',
    image: 'https://storage.googleapis.com/stedi-dev-images/sarira-journal-1.png',
    hint: 'figs on a plate',
    link: '/tamil-culture',
  },
  {
    title: 'Postpartum Care, the Paatti Way: A Guide for New Mothers',
    description: 'Learn how traditional Tamil postpartum care focuses on healing from within.',
    image: 'https://storage.googleapis.com/stedi-dev-images/sarira-journal-2.png',
    hint: 'mother baby food',
    link: '/tamil-culture',
  },
];

export default function AboutUsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-center text-white">
          <Image
            src="https://placehold.co/1920x1080.png"
            data-ai-hint="serene tamil nadu landscape"
            alt="A serene landscape in Tamil Nadu"
            layout="fill"
            objectFit="cover"
            className="brightness-50"
          />
          <div className="relative z-10 p-4">
            <h1 className="text-4xl md:text-6xl font-headline drop-shadow-md">
              Rooted in Tradition, Rising with You
            </h1>
          </div>
          <div className="absolute bottom-10 animate-bounce">
            <ChevronDown className="w-8 h-8" />
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-primary">
                  Our Story: From Ancient Wisdom to Modern Wellness
                </h2>
                <p className="text-lg text-muted-foreground">
                  SARIRA was born from a deep respect for the time-honored wellness practices of Tamil culture. We saw a world moving towards fleeting trends and complex supplements, while the simple, powerful wisdom of our grandmothers was being left behind.
                </p>
                <p className="text-lg text-muted-foreground">
                  Our mission is to bridge that gap—to bring you pure, effective, and convenient wellness rooted in tradition. We are committed to using clean ingredients, sustainable practices, and recipes that have nourished generations.
                </p>
              </div>
              <div>
                <Image
                  src="https://placehold.co/800x600.png"
                  data-ai-hint="traditional tamil family"
                  alt="An authentic, vintage-style family photo"
                  width={800}
                  height={600}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* One Spoon, Many Possibilities Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                One Spoon, Many Possibilities
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {possibilities.map((item) => (
                <div key={item.title} className="group text-center p-6 bg-secondary/30 rounded-lg border border-transparent hover:border-accent/50 hover:shadow-lg transition-all duration-300">
                  <div className="flex justify-center mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Visual Story Section */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Our Visual Story: From Farm to Jar
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {galleryImages.map((image, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    data-ai-hint={image.hint}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white font-semibold">{image.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SARIRA Journal Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                The SARIRA Journal: Where Food Meets Philosophy
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {journalPosts.map((post) => (
                <div key={post.title} className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <Link href={post.link}>
                    <Image
                      src={post.image}
                      alt={post.title}
                      data-ai-hint={post.hint}
                      width={600}
                      height={400}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-primary mb-2">{post.title}</h3>
                      <p className="text-muted-foreground mb-4">{post.description}</p>
                      <span className="font-semibold text-accent group-hover:underline">
                        Read More →
                      </span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
             <div className="text-center mt-12">
                <Button asChild variant="outline" size="lg">
                    <Link href="/tamil-culture">Read More Articles</Link>
                </Button>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-headline mb-8">
              Ready to begin your wellness journey?
            </h2>
            <div className="flex justify-center gap-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/product">Shop Fig Malt</Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/">Back to Home</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
