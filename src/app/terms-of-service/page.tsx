import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 pt-24">
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 max-w-4xl prose lg:prose-xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
              Terms of Service
            </h1>
            <p>
              Please read these Terms of Service ("Terms") carefully before using the SARIRA Wellness website ("Service") operated by us.
            </p>

            <h2>Eligibility</h2>
            <p>By using this Service, you represent that you are at least the age of majority in your state or province of residence.</p>

            <h2>Product Use</h2>
            <p>Our products are intended for personal use. You agree not to reproduce, duplicate, copy, sell, or resell any of our products without express written permission from us.</p>
            
            <h2>Order Process</h2>
            <p>We reserve the right to refuse any order you place with us. In the event that we make a change to or cancel an order, we will attempt to notify you by contacting the email and/or billing address/phone number provided at the time the order was made.</p>

            <h2>Refunds</h2>
            <p>Our refund policy is governed by our Returns & Refunds Policy, which is available on our website.</p>
            
            <h2>Limitation of Liability</h2>
            <p>In no case shall SARIRA Wellness, our directors, employees, or affiliates be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
