import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const stores = [
  {
    name: "Organic Needs, Chennai",
    address: "123, Gandhi Road, Adyar, Chennai - 600020",
  },
  {
    name: "Pure & Sure, Coimbatore",
    address: "45, RS Puram, Coimbatore - 641002",
  },
  {
    name: "Nalam Health Foods, Madurai",
    address: "78, Anna Nagar, Madurai - 625020",
  }
];

export function StoreLocator() {
  return (
    <section id="store-locator" className="bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Find SARIRA Near You</h2>
          <p className="text-xl text-muted-foreground">Our products are available at select partner stores across Tamil Nadu.</p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
                 <div className="relative">
                    <Input placeholder="Enter your city or pincode" className="pl-10 h-12 text-base" />
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                </div>
                
                <div className="space-y-4">
                  {stores.map((store) => (
                    <div key={store.name} className="p-4 rounded-lg border bg-secondary/30">
                      <h4 className="font-bold text-primary">{store.name}</h4>
                      <p className="text-muted-foreground">{store.address}</p>
                    </div>
                  ))}
                </div>
                 <p className="text-center text-sm text-muted-foreground">
                    Want to see SARIRA in your local store? <Link href="/#community" className="text-accent hover:underline">Let us know!</Link>
                  </p>
            </div>
            <div className="h-96 w-full rounded-lg overflow-hidden shadow-lg md:h-[500px]">
                <Image src="https://storage.googleapis.com/stedi-dev-images/sarira-map.png" data-ai-hint="map india" alt="Map of stores" width={800} height={600} className="w-full h-full object-cover"/>
            </div>
        </div>
      </div>
    </section>
  );
}
