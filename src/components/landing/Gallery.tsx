import Image from "next/image";

const images = [
  { src: "https://images.unsplash.com/photo-1683715038381-48713560128d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHx3b21hbiUyMGVhdGluZyUyMGhlYWx0aHl8ZW58MHx8fHwxNzU1Njg0NjY5fDA&ixlib=rb-4.1.0&q=80&w=1080", alt: "A woman enjoying a healthy smoothie bowl", hint: "woman eating healthy" },
  { src: "https://images.unsplash.com/photo-1594295797324-de7aec192b9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxmaWclMjBwcm9kdWN0fGVufDB8fHx8MTc1NTY4NDY2OXww&ixlib=rb-4.1.0&q=80&w=1080", alt: "A close-up of SARIRA Fig Malt being sprinkled", hint: "fig product" },
  { src: "https://images.unsplash.com/photo-1624003379108-cf5b9cd41d35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxtb3RoZXIlMjBjaGlsZHxlbnwwfHx8fDE3NTU2ODQ2Njl8MA&ixlib=rb-4.1.0&q=80&w=1080", alt: "A smiling mother feeding her child a healthy snack", hint: "mother child" },
  { src: "https://images.unsplash.com/photo-1742281258189-3b933879867a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8dGFtaWwlMjBmb29kfGVufDB8fHx8MTc1NTY4NDY2OXww&ixlib=rb-4.1.0&q=80&w=1080", alt: "A traditional Tamil meal served on a banana leaf", hint: "tamil food" },
  { src: "https://images.unsplash.com/photo-1666202630152-2de2a53cf26d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxmcmVzaCUyMGZpZ3N8ZW58MHx8fHwxNzU1Njg0NjcwfDA&ixlib=rb-4.1.0&q=80&w=1080", alt: "Hands holding a bowl of fresh, ripe figs", hint: "fresh figs" },
  { src: "https://images.unsplash.com/photo-1555729257-a52f777ffab9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHx3ZWxsbmVzcyUyMGxpZmVzdHlsZXxlbnwwfHx8fDE3NTU2ODQ2Njl8MA&ixlib=rb-4.1.0&q=80&w=1080", alt: "An elderly person enjoying a warm drink", hint: "wellness lifestyle" },
];

export function Gallery() {
  return (
    <section id="gallery" className="bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Visual Story</h2>
          <p className="text-xl text-muted-foreground">A glimpse into the world of SARIRA</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 aspect-[4/3]">
              <Image
                src={image.src}
                alt={image.alt}
                data-ai-hint={image.hint}
                width={800}
                height={600}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
