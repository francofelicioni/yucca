import Image from "next/image";

const images = [
  {
    src: "/images/lifestyle/yucca-storefront-exterior-belgrano-street-view.jpg",
    alt: "Fachada de YUCCA en Belgrano",
    caption: "Av. Cramer 2547, Belgrano",
  },
  {
    src: "/images/lifestyle/petfriendly.webp",
    alt: "YUCCA pet friendly",
    caption: "Pet friendly",
  },
  {
    src: "/images/lifestyle/puerto-blest-coffee-bags-specialty-shelf-display.jpg",
    alt: "Bolsas de café Puerto Blest en exhibición",
    caption: "Café de especialidad Puerto Blest",
  },
];

export default function LifestyleGallery() {
  return (
    <section className="py-24 bg-dark">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-sans text-xs tracking-widest uppercase text-primary-light text-center mb-4 reveal">
          El Ambiente
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-center text-cream mb-12 reveal">
          Vení, quedate
        </h2>

        <div className="grid md:grid-cols-3 gap-6 reveal-stagger">
          {images.map((img, i) => (
            <div key={i} className="group">
              <div className="relative h-72 md:h-80 rounded-2xl overflow-hidden mb-4">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <p className="font-sans text-sm text-cream/60 text-center">{img.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
