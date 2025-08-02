import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ReturnsAndRefundsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 pt-24">
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
              Returns & Refunds
            </h1>
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
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-xl">Refund Timeline</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  Once your return is approved, the refund will be processed to your original payment method within 5-7 working days.
                </AccordionContent>
              </AccordionItem>
               <AccordionItem value="item-5">
                <AccordionTrigger className="text-xl">Support</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  For any questions regarding returns or refunds, please contact us via WhatsApp or email at sariranutrition@gmail.com.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
