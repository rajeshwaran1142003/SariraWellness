"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Link from 'next/link';
import { Button } from '../ui/button';

const supportTopics = [
  { id: 'faq', title: 'FAQ' },
  { id: 'shipping', title: 'Shipping & Delivery' },
  { id: 'returns', title: 'Returns & Refunds' },
  { id: 'privacy', title: 'Privacy Policy' },
  { id: 'terms', title: 'Terms of Service' },
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

const policyContent: Record<string, {title: string; content: React.ReactNode; link: string; linkText: string }> = {
    shipping: {
        title: "Swift & Secure Shipping",
        content: (
            <div className="space-y-4">
                <p>We deliver across India, ensuring your wellness package reaches you safely. Orders are processed within 1-2 business days, with estimated delivery in 3-7 days.</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Free shipping on prepaid orders above ₹800.</li>
                    <li>Delivery charges vary by location for orders below ₹800.</li>
                    <li>Order tracking details are sent via email upon dispatch.</li>
                </ul>
                <p>For complete details on charges, tracking, and our process, please view our full policy.</p>
            </div>
        ),
        link: "/shipping-and-delivery",
        linkText: "View Full Shipping Policy"
    },
    returns: {
        title: "Easy & Fair Returns",
        content: (
            <div className="space-y-4">
                <p>Your satisfaction is our priority. If you receive a damaged or incorrect product, contact us within 48 hours for a replacement or full refund.</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Returns of unopened items are accepted within 7 days of delivery.</li>
                    <li>Opened food products are non-returnable for hygiene reasons.</li>
                    <li>Refunds are processed within 5-7 working days of approval.</li>
                </ul>
                <p>Read our full policy for detailed instructions.</p>
            </div>
        ),
        link: "/returns-and-refunds",
        linkText: "View Full Returns Policy"
    },
    privacy: {
        title: "Your Privacy is Paramount",
        content: (
            <div className="space-y-4">
                <p>We are committed to protecting your personal information. We collect data only to process orders and improve your experience.</p>
                 <ul className="list-disc pl-5 space-y-2">
                    <li>We never sell or rent your personal data to third parties.</li>
                    <li>Your payment information is processed securely and is not stored by us.</li>
                    <li>You have the right to access, correct, or delete your personal data at any time.</li>
                </ul>
                <p>To understand how we handle your information, please review our comprehensive Privacy Policy.</p>
            </div>
        ),
        link: "/privacy-policy",
        linkText: "View Full Privacy Policy"
    },
    terms: {
        title: "Our Terms of Service",
        content: (
            <div className="space-y-4">
                <p>By using our website and purchasing our products, you agree to our terms and conditions. These terms cover your rights and responsibilities.</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>You must be at least 18 years old to make a purchase.</li>
                    <li>All content on this site is the property of SARIRA Wellness.</li>
                    <li>We reserve the right to refuse or cancel any order.</li>
                </ul>
                <p>We encourage you to read the full document to ensure a smooth and transparent experience.</p>
            </div>
        ),
        link: "/terms-of-service",
        linkText: "View Full Terms of Service"
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
                <CardContent className="p-8 min-h-[450px]">
                     <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h2 className="text-3xl font-bold text-primary mb-6">{activeTopic?.id === 'faq' ? "Frequently Asked Questions" : activeTopic?.title}</h2>

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
                                <div className="prose max-w-none prose-h3:text-primary prose-a:text-accent prose-p:text-muted-foreground prose-li:text-muted-foreground">
                                    <h3>{policyContent[activeTab]?.title}</h3>
                                    <div>{policyContent[activeTab]?.content}</div>
                                    <Button asChild variant="link" className="p-0 mt-4 text-accent hover:underline">
                                        <Link href={policyContent[activeTab]?.link || '#'}>
                                           {policyContent[activeTab]?.linkText} →
                                        </Link>
                                    </Button>
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
