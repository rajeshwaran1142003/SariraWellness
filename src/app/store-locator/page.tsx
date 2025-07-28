import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { StoreLocator } from "@/components/landing/StoreLocator";

export default function StoreLocatorPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            <Header />
            <main className="flex-1 pt-24">
               <StoreLocator />
            </main>
            <Footer />
        </div>
    )
}
