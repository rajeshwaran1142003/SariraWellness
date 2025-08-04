import Image from "next/image";

const images = [
  { src: "https://storage.googleapis.com/stedi-dev-images/sarira-gallery-1.png", alt: "A woman enjoying a healthy smoothie bowl", hint: "woman eating healthy" },
  { src: "https://storage.googleapis.com/stedi-dev-images/sarira-gallery-2.png", alt: "A close-up of SARIRA Fig Malt being sprinkled", hint: "fig product" },
  { src: "https://storage.googleapis.com/stedi-dev-images/sarira-gallery-3.png", alt: "A smiling mother feeding her child a healthy snack", hint: "mother child" },
  { src: "https://storage.googleapis.com/stedi-dev-images/sarira-gallery-4.png", alt: "A traditional Tamil meal served on a banana leaf", hint: "tamil food" },
  { src: "https://storage.googleapis.com/stedi-dev-images/sarira-gallery-5.png", alt: "Hands holding a bowl of fresh, ripe figs", hint: "fresh figs" },
  { src: "https://storage.googleapis.com/stedi-dev-images/sarira-gallery-6.png", alt: "An elderly person enjoying a warm drink", hint: "wellness lifestyle" },
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
