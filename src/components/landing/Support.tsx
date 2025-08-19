"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Link from 'next/link';

const supportTopics = [
  { id: 'faq', title: 'Frequently Asked Questions', content: 'faq' },
  { id: 'shipping', title: 'Shipping & Delivery', content: 'shipping' },
  { id: 'returns', title: 'Returns & Refunds', content: 'returns' },
  { id: 'privacy', title: 'Privacy Policy', content: 'privacy' },
  { id: 'terms', title: 'Terms of Service', content: 'terms' },
];

const faqItems = [
    {
      question: "What is SARIRA Fig Malt made of?",
      answer: "SARIRA Fig Malt is made from 100% organic figs and premium nuts. No preservatives, no refined sugar, and no artificial flavors — just clean, plant-based nutrition."
    },
    {
      question: "Is SARIRA safe for children and elders?",
      answer: "Yes! SARIRA is gentle, nutritious, and family-friendly, suitable for children above 1 year and elders alike. It supports digestion, immunity, and energy in all age groups."
    },
    {
      question: "Can I use SARIRA as a sugar substitute?",
      answer: "Absolutely. SARIRA Fig Malt has a naturally sweet taste from figs and can be used in place of refined sugar in milk, tea, porridge, baking, or toast toppings."
    },
     {
      question: "What are the health benefits of SARIRA?",
      answer: "SARIRA supports: • Digestive health (rich in fiber) • Energy and stamina • Iron and calcium intake • Gut-friendly sweetness • Gentle detox and immunity support"
    },
    {
      question: "How do I consume SARIRA Fig Malt?",
      answer: "You can: • Mix 1 tbsp with warm milk or water • Add to smoothies or porridge • Use as a toast topping • Bake into muffins or energy balls. Avoid boiling directly to preserve nutrients."
    },
    {
      question: "What is the shelf life of SARIRA Fig Malt?",
      answer: "SARIRA has a shelf life of 6 months when stored in a cool, dry place. Always close the lid tightly after use."
    },
];

const policyContent: Record<string, {title: string, text: string, link: string, linkText: string}> = {
    shipping: {
        title: "Swift & Secure Shipping",
        text: "We deliver across India, ensuring your wellness package reaches you safely. Orders are processed within 1-2 business days, with estimated delivery in 3-7 days. For complete details on charges, tracking, and our process, please view our full policy.",
        link: "/shipping-and-delivery",
        linkText: "View Shipping Policy"
    },
    returns: {
        title: "Easy & Fair Returns",
        text: "Your satisfaction is our priority. If you receive a damaged or incorrect product, contact us within 48 hours for a replacement or full refund. Please note that opened food products are non-returnable for hygiene reasons. Read our full policy for detailed instructions.",
        link: "/returns-and-refunds",
        linkText: "View Returns Policy"
    },
    privacy: {
        title: "Your Privacy is Paramount",
        text: "We are committed to protecting your personal information. We collect data only to process orders and improve your experience, and we never sell your data to third parties. To understand how we handle your information, please review our comprehensive Privacy Policy.",
        link: "/privacy-policy",
        linkText: "View Privacy Policy"
    },
    terms: {
        title: "Our Terms of Service",
        text: "By using our website and purchasing our products, you agree to our terms and conditions. These terms cover your rights and responsibilities, order placements, and use of our website content. We encourage you to read the full document to ensure a smooth and transparent experience.",
        link: "/terms-of-service",
        linkText: "View Terms of Service"
    }
}


export function Support() {
  const [activeTab, setActiveTab] = useState(supportTopics[0].id);
  const activeTopic = supportTopics.find(topic => topic.id === activeTab);

  return (
    <section id="support" className="bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-primary mb-6">Support</h3>
            <div className="flex flex-col space-y-2">
              {supportTopics.map((topic) => (
                <button
                  key={topic.id}
                  onClick={() => setActiveTab(topic.id)}
                  className={cn(
                    "w-full text-left p-3 rounded-lg text-muted-foreground hover:bg-primary/5 hover:text-primary transition-all duration-200 relative",
                    { "text-accent font-semibold": activeTab === topic.id }
                  )}
                >
                  {topic.title}
                  {activeTab === topic.id && (
                    <motion.div
                      className="absolute left-0 top-0 bottom-0 w-1 bg-accent rounded-r-full"
                      layoutId="active-support-topic"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
          <div className="md:col-span-3">
             <Card className="shadow-lg">
                <CardContent className="p-8">
                     <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h2 className="text-3xl font-bold text-primary mb-6">{activeTopic?.title}</h2>

                            {activeTab === 'faq' ? (
                                <Accordion type="single" collapsible className="w-full">
                                {faqItems.map((item, index) => (
                                    <AccordionItem key={index} value={`item-${index + 1}`}>
                                    <AccordionTrigger className="text-lg font-semibold text-primary/80 text-left">{item.question}</AccordionTrigger>
                                    <AccordionContent className="text-base text-muted-foreground">
                                        {item.answer}
                                    </AccordionContent>
                                    </AccordionItem>
                                ))}
                                </Accordion>
                            ) : (
                                <div className="prose max-w-none prose-h3:text-primary prose-a:text-accent">
                                    <h3>{policyContent[activeTab]?.title}</h3>
                                    <p>{policyContent[activeTab]?.text}</p>
                                    <Link href={policyContent[activeTab]?.link || '#'} className="no-underline">
                                        <div className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-md hover:bg-accent/90 transition-colors">
                                           {policyContent[activeTab]?.linkText}
                                        </div>
                                    </Link>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
