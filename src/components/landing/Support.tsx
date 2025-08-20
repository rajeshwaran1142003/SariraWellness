"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Truck, PackageOpen, Shield, FileText, HelpCircle } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"


const supportTopics = [
  {
    id: 'shipping',
    title: 'Shipping & Delivery',
    icon: <Truck className="w-10 h-10" />,
    content: (
        <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
            <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl">Shipping Coverage & Charges</AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground prose">
                <ul>
                <li>We deliver across India (local areas in Tamil Nadu included), excluding certain remote regions.</li>
                <li>Free shipping on prepaid orders above ₹800.</li>
                <li>For orders below ₹800, delivery charges vary by location.</li>
                </ul>
            </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
            <AccordionTrigger className="text-xl">Order Processing Time</AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground prose">
                <ul>
                    <li>Orders placed before 5 PM are processed within 1 business day.</li>
                    <li>Weekends & public holidays are not processing days.</li>
                </ul>
            </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
            <AccordionTrigger className="text-xl">Delivery Timeline</AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground prose">
                <ul>
                    <li>Estimated delivery: 6–10 working days across India, depending on your location.</li>
                    <li>Courier tracking via email or SMS provided at dispatch.</li>
                </ul>
            </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
  },
  {
    id: 'returns',
    title: 'Returns & Refunds',
    icon: <PackageOpen className="w-10 h-10" />,
    content: (
        <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
            <AccordionItem value="item-1">
                <AccordionTrigger className="text-xl">Return Policy</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                We accept returns of unopened items in their original packaging within 7 days of delivery. To initiate a return, please contact us at sariranutrition@gmail.com.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger className="text-xl">Damaged or Incorrect Products</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                If you receive a damaged or incorrect product, please send a photo of the item to our support team within 48 hours of delivery. We will arrange for a replacement or a full refund at no extra cost to you.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger className="text-xl">Non-Returnable Items</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                For hygiene and safety reasons, we cannot accept returns of opened or used food products.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
  },
  {
    id: 'privacy',
    title: 'Privacy Policy',
    icon: <Shield className="w-10 h-10" />,
    content: (
         <div className="prose max-w-none text-muted-foreground">
            <p>Your privacy is important to us. We collect personal information for order processing and communication, but we never store your payment card details. We use industry-standard security measures to protect your data and will never sell it to third parties. Your trust is our priority, and we are committed to safeguarding your information.</p>
        </div>
    )
  },
  {
    id: 'terms',
    title: 'Terms of Service',
    icon: <FileText className="w-10 h-10" />,
    content: (
         <div className="prose max-w-none text-muted-foreground">
            <p>By using our website and purchasing our products, you agree to our terms of service. This includes using the site lawfully and for its intended purpose. All content on this website, including text, images, and logos, is the property of SARIRA Wellness and is protected by copyright law. We reserve the right to refuse service to anyone for any reason at any time.</p>
        </div>
    )
  },
];

const cardVariants = {
  initial: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const expandedVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: { opacity: 1, height: 'auto', transition: { duration: 0.4, ease: 'easeInOut' } },
  exit: { opacity: 0, height: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
};

export function Support() {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const topicData = supportTopics.find(t => t.id === selectedTopic);

  return (
    <section id="support" className="bg-[#F9F5F0]">
      <div className="container mx-auto px-4 py-16 md:py-20 lg:py-24">
        <AnimatePresence mode="wait">
          {selectedTopic ? (
            <motion.div
              key="expanded-view"
              variants={expandedVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="max-w-4xl mx-auto"
            >
              <Button
                variant="ghost"
                onClick={() => setSelectedTopic(null)}
                className="mb-6 text-primary hover:text-accent"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to All Topics
              </Button>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">{topicData?.title}</h2>
              <div className="w-24 h-1 bg-accent mb-8"></div>
              <div>{topicData?.content}</div>
            </motion.div>
          ) : (
            <motion.div key="grid-view">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Support Center</h2>
                <p className="text-xl text-muted-foreground">How can we help you?</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {supportTopics.map((topic) => (
                  <motion.div key={topic.id} variants={cardVariants} exit="exit">
                    <Card
                      className="group cursor-pointer p-6 text-center flex flex-col items-center justify-center gap-4 bg-background/50 hover:shadow-lg hover:shadow-accent/20 transition-shadow duration-300 h-full min-h-[160px] transform hover:scale-102"
                      onClick={() => setSelectedTopic(topic.id)}
                    >
                      <div className="text-primary transition-colors duration-300 group-hover:text-accent">{topic.icon}</div>
                      <CardTitle className="text-lg font-semibold text-primary transition-colors duration-300 group-hover:text-accent">
                        {topic.title}
                      </CardTitle>
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
