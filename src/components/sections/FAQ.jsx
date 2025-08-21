"use client";

import { useState } from 'react';
import { ChevronDown } from '@/components/icons/Icons';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { FAQ_CONTENT } from '@/config/content';

function AccordionItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <button
        className="w-full px-6 py-4 text-left text-lg font-semibold text-primary hover:no-underline flex justify-between items-center"
        onClick={onToggle}
      >
        <span>{question}</span>
        <ChevronDown className={cn("h-4 w-4 shrink-0 transition-transform duration-200", isOpen && "rotate-180")} />
      </button>
      {isOpen && (
        <div className="px-6 pb-6 text-base text-muted-foreground">
          <p className="whitespace-pre-line">{answer}</p>
        </div>
      )}
    </div>
  );
}

export function FAQ() {
  const [showAll, setShowAll] = useState(false);
  const [openItems, setOpenItems] = useState({});
  
  const visibleFaqs = showAll ? FAQ_CONTENT.faqs : FAQ_CONTENT.faqs.slice(0, 5);

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section id="faq" className="bg-[#F9F9F9]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{FAQ_CONTENT.title}</h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="w-full space-y-4">
            {visibleFaqs.map((faq, index) => (
              <AccordionItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openItems[index]}
                onToggle={() => toggleItem(index)}
              />
            ))}
          </div>
          {!showAll && FAQ_CONTENT.faqs.length > 5 && (
            <div className="text-center mt-8">
              <Button onClick={() => setShowAll(true)} variant="outline" size="lg">
                Show More Questions
              </Button>
            </div>
          )}
          <div className="text-center mt-12 text-muted-foreground">
            <p>Still have questions? Feel free to contact our wellness team — we're here to help you on your journey to better living.</p>
          </div>
        </div>
      </div>
    </section>
  );
}