
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import Link from "next/link";

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 pt-24">
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-10">
                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                Terms of Service
                </h1>
                <p className="text-sm text-muted-foreground">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>
            <div className="prose lg:prose-lg max-w-none mx-auto text-foreground/80">
              <p>
                Welcome to www.sarirawellness.com (the “Website”), operated by SARIRA Wellness. By accessing or using our website, purchasing our products, or interacting with our services, you agree to the following terms and conditions. Please read them carefully before using this site.
              </p>

              <h2>1. Eligibility</h2>
              <p>You must be at least 18 years of age to purchase from our website. By using the site, you confirm that you are legally capable of entering into a contract.</p>

              <h2>2. Product Information</h2>
              <p>We make every effort to display product descriptions, ingredients, prices, and images accurately. However, SARIRA does not warrant that all product details are always current or error-free. We reserve the right to modify product specifications without prior notice.</p>
              
              <h2>3. Orders & Payments</h2>
              <ul>
                  <li>All orders placed through the website are subject to acceptance and availability.</li>
                  <li>We reserve the right to refuse or cancel any order for any reason, including pricing errors or stock availability.</li>
                  <li>Payments must be made using approved payment methods (UPI, cards, net banking, etc.). We do not store your payment details.</li>
              </ul>

              <h2>4. Shipping & Delivery</h2>
              <p>Orders are processed within 1–2 business days. Delivery timelines are estimates and not guaranteed. For full details, please refer to our <Link href="/shipping-and-delivery">Shipping & Delivery Policy</Link>.</p>

              <h2>5. Returns & Refunds</h2>
              <ul>
                  <li>We accept returns only in cases of damaged, defective, or incorrect items.</li>
                  <li>Refunds will be processed as per our <Link href="/returns-and-refunds">Returns & Refunds Policy</Link>.</li>
                  <li>SARIRA reserves the right to reject any return request that does not meet our criteria.</li>
              </ul>
              
              <h2>6. Use of Website</h2>
              <p>You agree not to misuse the website or its content. You may not:</p>
              <ul>
                  <li>Use the website for unlawful or fraudulent purposes</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Copy, distribute, or reproduce any content without permission</li>
              </ul>

              <h2>7. Intellectual Property</h2>
              <p>All content on this site — including logos, product descriptions, images, and text — is the property of SARIRA and protected under applicable copyright and trademark laws.</p>
              
              <h2>8. Limitation of Liability</h2>
              <p>SARIRA shall not be liable for any direct, indirect, incidental, or consequential damages that result from:</p>
              <ul>
                  <li>The use or inability to use the website</li>
                  <li>Product misuse</li>
                  <li>Delays or failure in delivery beyond our control</li>
              </ul>

              <h2>9. Privacy</h2>
              <p>Your personal information is handled in accordance with our <Link href="/privacy-policy">Privacy Policy</Link>. By using our site, you consent to the collection and use of your data as described there.</p>
              
              <h2>10. Modifications to Terms</h2>
              <p>We reserve the right to update or change these terms at any time. Continued use of the website after any changes implies acceptance of the new terms.</p>

              <h2>11. Governing Law</h2>
              <p>These Terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the jurisdiction of the courts in Chennai, Tamil Nadu.</p>
              
              <h2>Contact Us</h2>
              <p>For questions about these Terms, contact us at:</p>
              <p>
                Email: <a href="mailto:sariranutrition@gmail.com" className="text-accent hover:underline">sariranutrition@gmail.com</a>
                <br />
                Phone: <a href="tel:+917010422748" className="text-accent hover:underline">+91-7010422748</a>
              </p>
              <p className="font-semibold mt-8">SARIRA – Wellness with Transparency.</p>
              <p>Thank you for choosing us to be part of your health journey.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
