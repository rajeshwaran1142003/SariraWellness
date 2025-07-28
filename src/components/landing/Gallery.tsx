import Image from "next/image";

const images = [
  { src: "https://storage.googleapis.com/stedi-dev-images/sarira-lifestyle-1.png", alt: "Woman enjoying a healthy meal", hint: "woman eating healthy" },
  { src: "https://storage.googleapis.com/stedi-dev-images/sarira-lifestyle-2.png", alt: "Close up of fig malt", hint: "fig product" },
  { src: "https://storage.googleapis.com/stedi-dev-images/sarira-lifestyle-3.png", alt: "Happy mother with her child", hint: "mother child" },
  { src: "https://storage.googleapis.com/stedi-dev-images/sarira-lifestyle-4.png", alt: "Traditional Tamil food setting", hint: "tamil food" },
  { src: "https://storage.googleapis.com/stedi-dev-images/sarira-lifestyle-5.png", alt: "Hands holding fresh figs", hint: "fresh figs" },
  { src: "https://placehold.co/800x600.png", alt: "Placeholder image for gallery", hint: "wellness lifestyle" },
];

export function Gallery() {
  return (
    <section id="gallery" className="bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Visual Story</h2>
          <p className="text-xl text-muted-foreground">A glimpse into the world of SARIRA</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
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
