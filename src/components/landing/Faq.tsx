import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
    {
        question: "What is SARIRA Fig Malt made of?",
        answer: "SARIRA Fig Malt is made from high-quality organic figs and a blend of premium nuts. It contains no added sugar, preservatives, or artificial flavors."
    },
    {
        question: "Is it safe for children and elders?",
        answer: "Yes, our Fig Malt is 100% natural and safe for all age groups, including children and senior citizens. It's a great source of natural energy and nutrients."
    },
    {
        question: "Can I use it as a sugar replacement?",
        answer: "While it has a natural sweetness from figs, it's not a direct sugar replacement. It's a nutritious food supplement that can be used to sweeten porridge, milk, or as a topping."
    },
    {
        question: "How do I consume it?",
        answer: "You can enjoy Fig Malt in many ways! Spread it on toast, mix it into porridge or milk, use it as a filling for chapatis, or simply eat a spoonful as a healthy snack."
    },
    {
        question: "What is the shelf life and how should I store it?",
        answer: "Our Fig Malt has a shelf life of 6 months. Please store it in a cool, dry place and use a clean, dry spoon to serve."
    },
];

export function Faq() {
  return (
    <section id="faq" className="bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Have questions? We have answers.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
                 <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-lg text-left">{item.question}</AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground">
                        {item.answer}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
      </div>
    </section>
  );
}
