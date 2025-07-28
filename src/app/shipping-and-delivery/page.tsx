import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ShippingAndDeliveryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 pt-24">
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
              Shipping & Delivery
            </h1>
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
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-xl">Failed Deliveries or Erroneous Address</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground prose">
                   <ul>
                        <li>Customers are responsible for reshipping fees if the order is returned due to incomplete or incorrect address.</li>
                        <li>SARIRA is not liable for lost packages from address errors.</li>
                    </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-xl">Order Cancellation & Refund</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  If the order is cancelled before dispatch or cannot be delivered to your location, we issue a full refund—including shipping charges—within 48 business hours of processing.
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
