import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search } from "lucide-react";
import Image from "next/image";

export function StoreLocator() {
  return (
    <section id="store-locator" className="bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Find SARIRA Near You</h2>
          <p className="text-xl text-muted-foreground">Our products are available at select partner stores.</p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
                 <div className="relative mb-6">
                    <Input placeholder="Enter your city or pincode" className="pl-10" />
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                </div>
                <Button className="w-full bg-accent text-accent-foreground">Search</Button>

            </div>
            <div className="h-96 w-full rounded-lg overflow-hidden shadow-lg">
                <Image src="https://placehold.co/800x600.png" data-ai-hint="map india" alt="Map of stores" width={800} height={600} className="w-full h-full object-cover"/>
            </div>
        </div>
      </div>
    </section>
  );
}
