import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";

export default function TamilCulturePage() {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            <Header />
            <main className="flex-1 pt-24">
                <section id="tamil-culture" className="bg-secondary">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12 max-w-4xl mx-auto">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">The Fig in Tamil Culture: More Than Just a Fruit</h1>
                        <p className="text-xl text-muted-foreground">A legacy of wellness rediscovered through SARIRA Fig Malt</p>
                        </div>

                        <div className="bg-white/50 rounded-lg p-8 shadow-inner border border-primary/10 mb-12">
                            <p className="text-center text-2xl font-headline text-primary/80 mb-2">"அந்தணர்நூல் வழி நின் றார்அத்திப்பழம் பபால்"</p>
                            <p className="text-center text-muted-foreground italic">— A metaphor from Sangam poetry comparing pure character to the sweetness of a fig.</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold text-primary">Rooted in Tamil Tradition</h3>
                                <p className="text-lg text-muted-foreground">
                                Long before wellness became a trend, Tamil households embraced it as a way of life. At the center of this ancestral wisdom lies the fig (அத்திப்பழம்) — not just as a fruit, but as a symbol of vitality, fertility, and spiritual-well being.
                                </p>
                            </div>
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold text-primary">Nature’s Original Supplement</h3>
                                <ul className="space-y-3 text-lg text-muted-foreground">
                                    <li className="flex items-start">
                                        <span className="text-accent mr-3 mt-1.5 shrink-0">•</span>
                                        <span><strong>Rich in fiber</strong> – Supports digestion & gut health</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent mr-3 mt-1.5 shrink-0">•</span>
                                        <span><strong>Iron & potassium-rich</strong> – Boosts blood circulation & heart function</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent mr-3 mt-1.5 shrink-0">•</span>
                                        <span><strong>Natural mood balancer</strong> – Reduces fatigue, supports mental clarity</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent mr-3 mt-1.5 shrink-0">•</span>
                                        <span><strong>Safe for all ages</strong> – From toddlers to elders</span>
                                    </li>
                                </ul>
                                <p className="text-lg text-muted-foreground italic">
                                    No chemicals. No shortcuts. Just pure, time-tested goodness.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
