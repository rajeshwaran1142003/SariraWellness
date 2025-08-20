"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Truck, PackageOpen, Shield, FileText } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from 'next/link';

const supportTopics = [
  {
    id: 'shipping',
    title: 'Shipping & Delivery',
    icon: <Truck className="w-10 h-10" />,
    summary: "We deliver across India, excluding certain remote regions. Free shipping is available on prepaid orders above ₹800. Orders are processed within 1 business day and typically delivered in 6-10 working days.",
    fullContent: (
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
    ),
    link: "/shipping-and-delivery"
  },
  {
    id: 'returns',
    title: 'Returns & Refunds',
    icon: <PackageOpen className="w-10 h-10" />,
    summary: "We accept returns of unopened items in their original packaging within 7 days. If you receive a damaged or incorrect product, please contact us within 48 hours for a replacement or full refund.",
    fullContent: (
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
    ),
    link: "/returns-and-refunds"
  },
  {
    id: 'privacy',
    title: 'Privacy Policy',
    icon: <Shield className="w-10 h-10" />,
    summary: "Your privacy is important to us. We collect personal information for order processing and communication, but we never store your payment card details. Your trust is our priority, and we are committed to safeguarding your information.",
    fullContent: (
         <div className="prose max-w-none text-muted-foreground">
            <p>Your privacy is important to us. We collect personal information for order processing and communication, but we never store your payment card details. We use industry-standard security measures to protect your data and will never sell it to third parties. Your trust is our priority, and we are committed to safeguarding your information.</p>
        </div>
    ),
    link: "/privacy-policy"
  },
  {
    id: 'terms',
    title: 'Terms of Service',
    icon: <FileText className="w-10 h-10" />,
    summary: "By using our website and purchasing our products, you agree to our terms of service. This includes using the site lawfully and for its intended purpose. All content on this website is the property of SARIRA Wellness.",
    fullContent: (
         <div className="prose max-w-none text-muted-foreground">
            <p>By using our website and purchasing our products, you agree to our terms of service. This includes using the site lawfully and for its intended purpose. All content on this website, including text, images, and logos, is the property of SARIRA Wellness and is protected by copyright law. We reserve the right to refuse service to anyone for any reason at any time.</p>
        </div>
    ),
    link: "/terms-of-service"
  },
];

const cardVariants = {
  initial: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: 20, scale: 0.95, transition: { duration: 0.2 } },
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
    <section id="support" className="bg-secondary/30 relative">
      <div className="absolute inset-0 bg-[url('https://storage.googleapis.com/stedi-dev-images/sarira-bg-texture.png')] bg-repeat bg-center opacity-[2%]"></div>
      <div className="container mx-auto px-4 py-16 md:py-20 lg:py-24 relative z-10">
        <AnimatePresence mode="wait">
          {selectedTopic && topicData ? (
            <motion.div
              key="expanded-view"
              variants={expandedVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
                <Card className="max-w-4xl mx-auto shadow-2xl bg-background/80 backdrop-blur-sm">
                    <CardHeader>
                        <Button
                            variant="ghost"
                            onClick={() => setSelectedTopic(null)}
                            className="mb-4 text-primary hover:text-accent self-start px-0"
                        >
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to All Topics
                        </Button>
                        <div className="flex items-center gap-4">
                             <div className="text-accent bg-accent/10 p-3 rounded-full">{topicData.icon}</div>
                             <h2 className="text-3xl md:text-4xl font-bold text-primary">{topicData.title}</h2>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="prose max-w-none text-muted-foreground mb-6">
                            <p>{topicData.summary}</p>
                        </div>
                        <div className="mb-6">{topicData.fullContent}</div>
                        <Button asChild variant="link" className="p-0 text-accent">
                            <Link href={topicData.link}>
                                Read Full {topicData.title} Page →
                            </Link>
                        </Button>
                    </CardContent>
                </Card>
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
                      className="group cursor-pointer p-6 text-center flex flex-col items-center justify-center gap-4 bg-background/50 hover:shadow-xl hover:shadow-accent/10 transition-all duration-300 h-full min-h-[180px] transform hover:-translate-y-2"
                      onClick={() => setSelectedTopic(topic.id)}
                    >
                      <div className="text-primary transition-colors duration-300 group-hover:text-accent">{topic.icon}</div>
                      <CardTitle className="text-xl font-semibold text-primary transition-colors duration-300 group-hover:text-accent">
                        {topic.title}
                      </CardTitle>
                       <p className="text-sm text-muted-foreground group-hover:text-primary/80 transition-colors duration-300">
                        {topic.summary.substring(0, 70)}...
                       </p>
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
