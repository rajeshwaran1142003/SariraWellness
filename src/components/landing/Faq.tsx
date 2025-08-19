
"use client";

import { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from '@/components/ui/button';

const faqs = [
  {
    icon: "🌿",
    question: "What is SARIRA Fig Malt made of?",
    answer: "SARIRA Fig Malt is made from 100% organic figs and premium nuts. No preservatives, no refined sugar, and no artificial flavors — just clean, plant-based nutrition."
  },
  {
    icon: "🍼",
    question: "Is SARIRA safe for children and elders?",
    answer: "Yes! SARIRA is gentle, nutritious, and family-friendly, suitable for children above 1 year and elders alike. It supports digestion, immunity, and energy in all age groups."
  },
  {
    icon: "🍯",
    question: "Can I use SARIRA as a sugar substitute?",
    answer: "Absolutely. SARIRA Fig Malt has a naturally sweet taste from figs and can be used in place of refined sugar in milk, tea, porridge, baking, or toast toppings."
  },
  {
    icon: "💪",
    question: "What are the health benefits of SARIRA?",
    answer: "SARIRA supports: • Digestive health (rich in fiber) • Energy and stamina • Iron and calcium intake • Gut-friendly sweetness • Gentle detox and immunity support"
  },
  {
    icon: "🕒",
    question: "How do I consume SARIRA Fig Malt?",
    answer: "You can: • Mix 1 tbsp with warm milk or water • Add to smoothies or porridge • Use as a toast topping • Bake into muffins or energy balls. Avoid boiling directly to preserve nutrients."
  },
  {
    icon: "🚫",
    question: "Does SARIRA contain grains, preservatives, or added sugar?",
    answer: "No. SARIRA is grain-free, preservative-free, and refined sugar-free. Just figs and nuts — nothing more."
  },
  {
    icon: "🔄",
    question: "What is the shelf life of SARIRA Fig Malt?",
    answer: "SARIRA has a shelf life of 6 months when stored in a cool, dry place. Always close the lid tightly after use."
  },
  {
    icon: "📦",
    question: "Where do you ship and how long does it take?",
    answer: "We ship across India. Orders are usually delivered in 3–7 business days depending on your location. Orders above ₹800 are eligible for free shipping."
  },
  {
    icon: "💳",
    question: "What payment options do you accept?",
    answer: "We accept UPI, debit/credit cards, net banking, and Cash on Delivery (COD) in select locations."
  },
  {
    icon: "📩",
    question: "Who do I contact for queries or returns?",
    answer: "For any support, email us at support@sarirawellness.com or WhatsApp us at +91-7010422748. We're available Mon–Sat, 10AM – 6PM."
  }
];

export function Faq() {
  const [showAll, setShowAll] = useState(false);
  const visibleFaqs = showAll ? faqs : faqs.slice(0, 5);

  return (
    <section id="faq" className="bg-[#F9F9F9]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#364A22] mb-4">Frequently Asked Questions</h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {visibleFaqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg shadow-sm border-none">
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-[#364A22] hover:no-underline data-[state=open]:text-accent data-[state=open]:border-b data-[state=open]:border-accent/50">
                  <span className="mr-4">{faq.icon}</span> {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-base text-[#333]">
                  <p className="whitespace-pre-line">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          {!showAll && faqs.length > 5 && (
            <div className="text-center mt-8">
              <Button onClick={() => setShowAll(true)} variant="outline" size="lg">
                Show More
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
