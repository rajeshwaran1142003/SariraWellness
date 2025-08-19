
"use client";

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { cn } from '@/lib/utils';

const topics = [
  { id: 'faq', title: 'Frequently Asked Questions' },
  { id: 'shipping', title: 'Shipping & Delivery' },
  { id: 'returns', title: 'Returns & Refunds' },
  { id: 'privacy', title: 'Privacy Policy' },
  { id: 'terms', title: 'Terms of Service' },
];

const generalFaqItems = [
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
        answer: (
            <ul className="list-disc pl-5 space-y-1">
                <li>Digestive health (rich in fiber)</li>
                <li>Energy and stamina</li>
                <li>Iron and calcium intake</li>
                <li>Gut-friendly sweetness</li>
                <li>Gentle detox and immunity support</li>
            </ul>
        )
    },
];

const GeneralFaqContent = () => (
     <Accordion type="single" collapsible className="w-full space-y-4">
        {generalFaqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-background border rounded-lg shadow-sm">
                <AccordionTrigger className="text-lg text-left px-6 font-semibold hover:no-underline">
                    {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 text-base text-muted-foreground prose">
                    {typeof item.answer === "string" ? <p>{item.answer}</p> : item.answer}
                </AccordionContent>
            </AccordionItem>
        ))}
    </Accordion>
);


const ShippingContent = () => (
    <Accordion type="single" collapsible className="w-full space-y-4">
        <AccordionItem value="shipping-1" className="bg-background border rounded-lg shadow-sm">
            <AccordionTrigger className="text-lg text-left px-6 font-semibold hover:no-underline">Shipping Coverage & Charges</AccordionTrigger>
            <AccordionContent className="px-6 text-base text-muted-foreground prose">
                <ul>
                <li>We deliver across India (local areas in Tamil Nadu included), excluding certain remote regions.</li>
                <li>Free shipping on prepaid orders above ₹800.</li>
                <li>For orders below ₹800, delivery charges vary by location.</li>
                </ul>
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value="shipping-2" className="bg-background border rounded-lg shadow-sm">
            <AccordionTrigger className="text-lg text-left px-6 font-semibold hover:no-underline">Order Processing Time</AccordionTrigger>
            <AccordionContent className="px-6 text-base text-muted-foreground prose">
                <ul>
                    <li>Orders placed before 5 PM are processed within 1 business day.</li>
                    <li>Weekends & public holidays are not processing days.</li>
                </ul>
            </AccordionContent>
        </AccordionItem>
    </Accordion>
);

const ReturnsContent = () => (
    <Accordion type="single" collapsible className="w-full space-y-4">
        <AccordionItem value="returns-1" className="bg-background border rounded-lg shadow-sm">
            <AccordionTrigger className="text-lg text-left px-6 font-semibold hover:no-underline">Return Policy</AccordionTrigger>
            <AccordionContent className="px-6 text-base text-muted-foreground">
                We accept returns of unopened items in their original packaging within 7 days of delivery. To initiate a return, please contact us at sariranutrition@gmail.com.
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value="returns-2" className="bg-background border rounded-lg shadow-sm">
            <AccordionTrigger className="text-lg text-left px-6 font-semibold hover:no-underline">Damaged or Incorrect Products</AccordionTrigger>
            <AccordionContent className="px-6 text-base text-muted-foreground">
                If you receive a damaged or incorrect product, please send a photo of the item to our support team within 48 hours of delivery. We will arrange for a replacement or a full refund at no extra cost to you.
            </AccordionContent>
        </AccordionItem>
    </Accordion>
);

const PrivacyContent = () => (
    <div className="prose lg:prose-xl mx-auto bg-background p-6 rounded-lg shadow-sm">
        <p>
        Welcome to SARIRA! Your privacy is important to us. We collect information to process orders and improve our services. We do not sell your data and only share it with essential partners like logistics and payment gateways.
        </p>
    </div>
);

const TermsContent = () => (
     <div className="prose lg:prose-xl mx-auto bg-background p-6 rounded-lg shadow-sm">
        <p>
            By using www.sarirawellness.com, you agree to our terms. You must be 18 or older to purchase. All content is our intellectual property. We are not liable for damages from product misuse. These terms are governed by Indian law.
        </p>
    </div>
);


const contentMap: { [key: string]: React.ReactNode } = {
  faq: <GeneralFaqContent />,
  shipping: <ShippingContent />,
  returns: <ReturnsContent />,
  privacy: <PrivacyContent />,
  terms: <TermsContent />,
};

export function Faq() {
  const [activeTopic, setActiveTopic] = useState(topics[0]);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    function setTabPosition() {
      const currentTab = tabsRef.current[topics.findIndex(t => t.id === activeTopic.id)];
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    }

    setTabPosition();
    window.addEventListener('resize', setTabPosition);

    return () => window.removeEventListener('resize', setTabPosition);
  }, [activeTopic]);


  return (
    <section id="faq" className="bg-secondary/50 py-16 md:py-24 scroll-mt-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                {activeTopic.title}
            </h2>
            {activeTopic.id === 'faq' && <p className="text-xl text-muted-foreground">SARIRA Fig Malt – Wellness Made Simple</p>}
        </div>

        <div className="relative border-b-2 border-gray-200 mb-8">
            <div className="flex space-x-4 sm:space-x-8 overflow-x-auto pb-px">
                 {topics.map((topic, idx) => (
                    <button
                        key={topic.id}
                        ref={(el) => (tabsRef.current[idx] = el)}
                        className={cn(
                            "py-2.5 px-2 sm:px-4 text-sm sm:text-base font-medium transition-colors duration-300 whitespace-nowrap",
                            activeTopic.id === topic.id
                                ? "text-accent"
                                : "text-muted-foreground hover:text-primary"
                        )}
                        onClick={() => setActiveTopic(topic)}
                    >
                        {topic.title}
                    </button>
                 ))}
            </div>
            <span
                className="absolute bottom-0 block h-0.5 bg-accent transition-all duration-300"
                style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
            />
        </div>

        <AnimatePresence mode="wait">
            <motion.div
                key={activeTopic.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
            >
                {contentMap[activeTopic.id]}
            </motion.div>
        </AnimatePresence>
        
        <div className="text-center mt-12 text-muted-foreground">
            <p>Still have questions? Feel free to <Link href="/#contact-form" className="text-accent hover:underline">contact our wellness team</Link>.</p>
        </div>
      </div>
    </section>
  );
}
