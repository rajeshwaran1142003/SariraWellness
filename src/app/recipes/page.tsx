
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Recipes } from "@/components/landing/Recipes";

export default function RecipesPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            <Header />
            <main className="flex-1 pt-24">
               <Recipes />
            </main>
            <Footer />
        </div>
    )
}
