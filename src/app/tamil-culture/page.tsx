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
                <section id="sarira-way" className="bg-white">
                    <div className="container mx-auto px-4">
                         <div className="text-center mb-12 max-w-4xl mx-auto">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">The SARIRA Way: Ancient Wisdom, Modern Nutrition</h2>
                        </div>
                        <div className="max-w-4xl mx-auto text-lg text-muted-foreground space-y-6">
                            <p>SARIRA Fig Malt is crafted to honor this heritage — combining traditional fig-based healing with clean, everyday convenience. It’s more than a supplement. It’s a daily wellness companion made for:</p>
                            <ul className="space-y-3 pl-5 list-disc">
                                <li>Growing children</li>
                                <li>New moms</li>
                                <li>Working professionals</li>
                                <li>Active elders</li>
                            </ul>
                            <p>Enjoy it with warm milk, smoothies, or your favorite recipes — the possibilities are endless.</p>
                        </div>
                    </div>
                </section>
                <section id="grandmothers-wisdom" className="bg-secondary">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Grandmother's Wisdom: Ancient Nutrition Practices</h2>
                        </div>
                        <div className="prose lg:prose-xl mx-auto text-muted-foreground">
                            <p className="lead">If your grandmother ran a wellness brand, it would look like SARIRA.</p>
                            <p>She didn’t need lab reports. Or influencer reviews. She trusted her senses, her soil, and the science passed down on banana leaves — not textbooks.</p>
                            <p>She didn’t Google immunity boosters. She just made you drink Sukku Kaapi at dawn. And now, modern science is finally agreeing with her. You call it functional food. She called it breakfast. The West calls it gut health. She just told you not to skip vendhaya kanji on Mondays. She didn’t say “anti-inflammatory.” She just reached for turmeric before reaching for the doctor.</p>
                            <p>Our grandmothers weren’t nutritionists. They were better. They were instinctive scientists with kitchen labs and wooden ladles.</p>
                            
                            <h3 className="text-primary">Why SARIRA Exists: Because We Owe Them.</h3>
                            <p>We didn’t invent anything. We simply bottled what they believed in.</p>
                            <p>SARIRA Fig Malt is not just another health mix. It’s our grandmother’s legacy — nutritionally enhanced, beautifully packaged, and made for modern life.</p>
                            <ul>
                                <li>For young mothers looking for clean postnatal nutrition.</li>
                                <li>For children needing fiber, iron, and fuss-free energy.</li>
                                <li>For families who want trust over trend.</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section id="gut-health" className="bg-white">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why Gut Health Matters</h2>
                        </div>
                        <div className="prose lg:prose-xl mx-auto text-muted-foreground">
                            <p>Did you know that your gut is home to over 70% of your immune system? Modern science now confirms what Tamil culture has practiced for generations — a healthy gut is key to a healthy life. From digestion and energy to mood and immunity, your gut microbiome influences it all. But before probiotics became global buzzwords, Tamil households had already mastered the art of digestive wellness — with food, not formulas.</p>
                        </div>
                    </div>
                </section>
                <section id="probiotic-practices" className="bg-secondary">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">The Original Probiotic Practices of Tamil Nadu</h2>
                        </div>
                        <div className="prose lg:prose-xl mx-auto text-muted-foreground">
                            <p>Traditional Tamil meals weren’t just cooked for taste. They were engineered for gut health. Passed down through generations, these practices supported microbiome diversity, detoxification, and regular digestion. Let’s explore some timeless gut-healing habits:</p>
                            <div className="overflow-x-auto my-8">
                                <table className="min-w-full">
                                    <thead className="bg-primary/10">
                                        <tr>
                                            <th className="py-3 px-4 text-left font-semibold text-primary">Traditional Practice</th>
                                            <th className="py-3 px-4 text-left font-semibold text-primary">Gut Health Benefit</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b">
                                            <td className="py-3 px-4">Pazhaya Sadham (fermented rice)</td>
                                            <td className="py-3 px-4">Natural probiotics + resistant starch for microbiota</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="py-3 px-4">Buttermilk with curry leaves</td>
                                            <td className="py-3 px-4">Promotes gut flora and cools internal heat</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="py-3 px-4">Rasam with Jeera & Ajwain</td>
                                            <td className="py-3 px-4">Aids in digestion, relieves gas and bloating</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="py-3 px-4">Banana Stem / Flower Stir-fry</td>
                                            <td className="py-3 px-4">High in fiber, supports detox and regular bowel movement</td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-4">Pickled Gooseberry (Nellikai Oorugai)</td>
                                            <td className="py-3 px-4">Rich in antioxidants and lactic acid cultures</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <h3 className="text-primary">How It Compares with Modern Gut Trends</h3>
                            <p>Today’s probiotic capsules offer isolated strains like Lactobacillus or Bifidobacterium. But Tamil recipes offer a full-spectrum ecosystem — a combination of:</p>
                            <ul>
                                <li><strong>Probiotics</strong> from fermentation</li>
                                <li><strong>Prebiotics</strong> from fiber-rich foods</li>
                                <li><strong>Digestive enzymes</strong> from spices like cumin and ginger</li>
                            </ul>
                            <p>And they’re delicious, time-tested, and natural.</p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
