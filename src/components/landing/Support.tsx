"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Truck, RefreshCw, Lock, FileText, HelpCircle, ArrowLeft } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const supportTopics = [
    { 
        id: 'shipping', 
        title: "Shipping & Delivery", 
        icon: <Truck className="w-8 h-8" />,
        faqs: [
            { q: "What are the shipping charges?", a: "We offer free shipping on all prepaid orders above ₹800. For orders below this amount, shipping charges vary based on your location and will be calculated at checkout." },
            { q: "How long does delivery take?", a: "Delivery usually takes 6–10 working days across India. You will receive a tracking link via email or SMS once your order is dispatched." },
            { q: "What if I provide an incorrect address?", a: "Customers are responsible for reshipping fees if an order is returned due to an incomplete or incorrect address. Please double-check your details before confirming your order." }
        ]
    },
    { 
        id: 'returns', 
        title: "Returns & Refunds", 
        icon: <RefreshCw className="w-8 h-8" />,
        faqs: [
            { q: "What is your return policy?", a: "We accept returns of unopened items in their original packaging within 7 days of delivery. Please email us at sariranutrition@gmail.com to initiate a return." },
            { q: "What if I receive a damaged product?", a: "If you receive a damaged or incorrect item, please send a photo to our support team within 48 hours of delivery, and we will arrange for a replacement or a full refund." },
            { q: "When will I get my refund?", a: "Once your return is approved, the refund will be processed to your original payment method within 5-7 working days." }
        ]
    },
    { 
        id: 'privacy', 
        title: "Privacy Policy", 
        icon: <Lock className="w-8 h-8" />,
        faqs: [
            { q: "What information do you collect?", a: "We collect personal information like your name, address, and email for order processing. We do not store your payment card details." },
            { q: "Do you share my data?", a: "We do not sell or rent your personal information. We only share it with essential partners like courier services and payment gateways to fulfill your order." }
        ]
    },
    { 
        id: 'terms', 
        title: "Terms of Service", 
        icon: <FileText className="w-8 h-8" />,
        faqs: [
            { q: "What are the terms for using the website?", a: "By using our website, you agree to our terms of service, which include using the site lawfully and not misusing any content. For full details, please refer to our complete Terms of Service page." },
            { q: "Can I cancel my order?", a: "Orders can be cancelled before they are dispatched. If the order is already shipped, it cannot be cancelled." }
        ]
    },
    { 
        id: 'faq', 
        title: "General FAQ", 
        icon: <HelpCircle className="w-8 h-8" />,
        faqs: [
            { q: "What is SARIRA Fig Malt made of?", a: "SARIRA Fig Malt is made from 100% organic figs and premium nuts. It contains no preservatives, refined sugar, or artificial flavors." },
            { q: "Is it safe for children?", a: "Yes, it is gentle and nutritious for children above 1 year, as well as for elders. It supports digestion, immunity, and energy." },
            { q: "How should I consume it?", a: "Mix 1 tbsp with warm milk or water, add to smoothies, use as a toast topping, or bake into muffins. Avoid boiling it directly to preserve its nutrients." }
        ]
    }
];

export function Support() {
    const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

    const topicVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1 },
    };

    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
        exit: { opacity: 0, y: -50, transition: { duration: 0.3, ease: 'easeIn' } }
    };
    
    const currentTopicData = supportTopics.find(t => t.id === selectedTopic);

    return (
        <section id="support" className="bg-[#F9F9F9] py-16 md:py-24 relative overflow-hidden">
            <AnimatePresence mode="wait">
                {!selectedTopic ? (
                    <motion.div
                        key="grid"
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                        className="container mx-auto px-4"
                    >
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Support Center</h2>
                            <p className="text-xl text-muted-foreground">Find answers to your questions</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
                            {supportTopics.map(topic => (
                                <motion.div key={topic.id} variants={topicVariants} >
                                    <Card 
                                        onClick={() => setSelectedTopic(topic.id)}
                                        className="group cursor-pointer p-6 text-center flex flex-col items-center justify-center gap-4 bg-background/50 hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 h-full min-h-[160px] transform hover:scale-105 hover:-translate-y-1"
                                    >
                                        <div className="text-primary group-hover:text-accent transition-colors">{topic.icon}</div>
                                        <h3 className="text-lg font-semibold text-primary">{topic.title}</h3>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="details"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={sectionVariants}
                        className="container mx-auto px-4"
                    >
                         <div className="max-w-4xl mx-auto">
                            <Button
                                onClick={() => setSelectedTopic(null)}
                                variant="ghost"
                                className="mb-8 text-primary hover:text-accent"
                            >
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Back to All Topics
                            </Button>
                            <div className="text-left mb-8 border-b-2 border-accent pb-2">
                                <h2 className="text-3xl md:text-4xl font-bold text-primary">{currentTopicData?.title}</h2>
                            </div>
                            <Accordion type="single" collapsible className="w-full space-y-4">
                                {currentTopicData?.faqs.map((faq, index) => (
                                    <AccordionItem 
                                        key={index} 
                                        value={`item-${index}`}
                                        className="bg-white rounded-lg shadow-sm border border-border data-[state=open]:border-accent transition-all duration-300 hover:shadow-md"
                                    >
                                        <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-primary hover:no-underline data-[state=open]:text-accent">
                                            {faq.q}
                                        </AccordionTrigger>
                                        <AccordionContent className="px-6 pb-6 text-base text-muted-foreground">
                                           <p className="whitespace-pre-line">{faq.a}</p>
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}