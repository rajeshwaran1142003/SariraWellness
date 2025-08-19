
"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Truck, RefreshCw, Shield, FileText, HelpCircle, ArrowLeft } from 'lucide-react';

const supportTopics = [
  { 
    id: 'shipping', 
    title: 'Shipping & Delivery', 
    icon: <Truck className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />,
    questions: [
      { q: "How long does delivery take?", a: "Orders are typically delivered within 3-7 business days, depending on your location." },
      { q: "What are the shipping charges?", a: "We offer free shipping on all prepaid orders above ₹800. For orders below this amount, a variable shipping fee applies based on your location." },
      { q: "How can I track my order?", a: "Once your order is dispatched, you will receive an email and SMS with a tracking link to monitor your delivery." }
    ]
  },
  { 
    id: 'returns', 
    title: 'Returns & Refunds', 
    icon: <RefreshCw className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />,
    questions: [
        { q: "What is your return policy?", a: "We accept returns of unopened items in their original packaging within 7 days of delivery. To initiate a return, please contact us at sariranutrition@gmail.com." },
        { q: "What if I receive a damaged product?", a: "If you receive a damaged or incorrect product, please send a photo of the item to our support team within 48 hours of delivery. We will arrange for a replacement or a full refund." },
        { q: "When will I receive my refund?", a: "Once your return is approved, the refund will be processed to your original payment method within 5-7 working days." }
    ]
  },
  { 
    id: 'privacy', 
    title: 'Privacy Policy', 
    icon: <Shield className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />,
    questions: [
        { q: "What information do you collect?", a: "We collect personal information like your name, address, and email to process your orders. We do not store any payment card details." },
        { q: "How is my data protected?", a: "We use industry-standard encryption and security protocols to protect your data. We do not sell or share your personal information with third parties for marketing purposes." }
    ]
  },
  { 
    id: 'terms', 
    title: 'Terms of Service', 
    icon: <FileText className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />,
    questions: [
        { q: "What are the terms of use?", a: "By accessing our website and purchasing our products, you agree to our terms and conditions, which govern your rights and responsibilities as a user." },
        { q: "Can I reproduce content from your site?", a: "All content on this site, including logos, images, and text, is the property of SARIRA Wellness and is protected by copyright law. Reproduction without permission is prohibited." }
    ]
  },
  { 
    id: 'faq', 
    title: 'Frequently Asked Questions (FAQs)', 
    icon: <HelpCircle className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />,
    questions: [
        { q: "What is SARIRA Fig Malt made of?", a: "SARIRA Fig Malt is made from 100% organic figs and premium nuts. It contains no preservatives, refined sugar, or artificial flavors." },
        { q: "Is SARIRA safe for all ages?", a: "Yes, it is suitable for children above 1 year and elders. It supports digestion, immunity, and energy for the whole family." },
        { q: "How should I consume it?", a: "Mix 1 tbsp with warm milk or water, add to smoothies, or use as a topping on toast. Avoid boiling it directly to preserve its nutrients." }
    ]
  },
];

export function Support() {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  const handleSelectTopic = (topicId: string) => {
    setSelectedTopic(topicId);
  };

  const handleBackToTopics = () => {
    setSelectedTopic(null);
  };

  const topic = supportTopics.find(t => t.id === selectedTopic);

  return (
    <section id="support" className="bg-[#F9F5F0] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <AnimatePresence mode="wait">
          {selectedTopic && topic ? (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <div className="max-w-4xl mx-auto">
                <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.3 }}>
                    <Button variant="ghost" onClick={handleBackToTopics} className="mb-6 text-muted-foreground hover:text-primary">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        All Topics
                    </Button>
                </motion.div>
                <div className="relative mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-primary">{topic.title}</h2>
                  <div className="absolute bottom-[-8px] left-0 h-1 w-24 bg-accent" />
                </div>

                <Accordion type="single" collapsible className="w-full">
                  {topic.questions.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.3, ease: 'easeOut' }}
                    >
                      <AccordionItem value={`item-${index}`} className="border-b border-primary/10">
                        <AccordionTrigger className="text-lg text-left font-semibold text-primary/90 hover:no-underline">
                          {item.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-base text-muted-foreground">
                          {item.a}
                        </AccordionContent>
                      </AccordionItem>
                    </motion.div>
                  ))}
                </Accordion>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Support Center</h2>
                <p className="text-xl text-muted-foreground">Find answers to your questions</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {supportTopics.map(topic => (
                  <motion.div
                    key={topic.id}
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Card
                      onClick={() => handleSelectTopic(topic.id)}
                      className="group cursor-pointer p-6 text-center flex flex-col items-center justify-center gap-4 bg-background/50 hover:shadow-lg hover:shadow-accent/20 transition-shadow duration-300 h-full min-h-[160px]"
                    >
                      {topic.icon}
                      <h3 className="text-lg font-semibold text-primary transition-colors text-center">{topic.title}</h3>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
