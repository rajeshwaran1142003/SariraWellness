import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Gallery } from "@/components/landing/Gallery";

export default function GalleryPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            <Header />
            <main className="flex-1 pt-24">
               <Gallery />
            </main>
            <Footer />
        </div>
    )
}
