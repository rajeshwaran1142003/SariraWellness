import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Faq } from "@/components/landing/Faq";

export default function FaqPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            <Header />
            <main className="flex-1 pt-24">
               <Faq />
            </main>
            <Footer />
        </div>
    )
}
