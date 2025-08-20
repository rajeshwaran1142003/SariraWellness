
"use client";

import { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from '@/components/ui/button';

const faqs = [
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
    answer: "SARIRA supports:\n• Digestive health (rich in fiber)\n• Energy and stamina\n• Iron and calcium intake\n• Gut-friendly sweetness\n• Gentle detox and immunity support"
  },
  {
    question: "How do I consume SARIRA Fig Malt?",
    answer: "You can:\n• Mix 1 tbsp with warm milk or water\n• Add to smoothies or porridge\n• Use as a toast topping\n• Bake into muffins or energy balls\nAvoid boiling directly to preserve nutrients."
  },
  {
    question: "Does SARIRA contain grains, preservatives, or added sugar?",
    answer: "No. SARIRA is grain-free, preservative-free, and refined sugar-free. Just figs and nuts — nothing more."
  },
  {
    question: "What is the shelf life of SARIRA Fig Malt?",
    answer: "SARIRA has a shelf life of 6 months when stored in a cool, dry place. Always close the lid tightly after use."
  },
  {
    question: "Where do you ship and how long does it take?",
    answer: "We ship across India. Orders are usually delivered in 3–7 business days depending on your location. Orders above ₹800 are eligible for free shipping."
  },
  {
    question: "What payment options do you accept?",
    answer: "We accept UPI, debit/credit cards, net banking, and Cash on Delivery (COD) in select locations."
  },
  {
    question: "Who do I contact for queries or returns?",
    answer: "For any support, email us at sariranutrition@gmail.com or WhatsApp us at +91-7010422748. We're available Mon–Sat, 10AM – 6PM."
  }
];

export function Faq() {
  const [showAll, setShowAll] = useState(false);
  const visibleFaqs = showAll ? faqs : faqs.slice(0, 5);

  return (
    <section id="faq" className="bg-[#F9F9F9]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {visibleFaqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="bg-white rounded-lg shadow-sm border border-border data-[state=open]:border-primary transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-primary hover:no-underline data-[state=open]:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-base text-muted-foreground">
                  <p className="whitespace-pre-line">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          {!showAll && faqs.length > 5 && (
            <div className="text-center mt-8">
              <Button onClick={() => setShowAll(true)} variant="outline" size="lg">
                Show More Questions
              </Button>
            </div>
          )}
          <div className="text-center mt-12 text-muted-foreground">
            <p>Still have questions? Feel free to contact our wellness team — we’re here to help you on your journey to better living.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
