import Image from "next/image";
import { PetFriendly } from "@/components/BrandIcons";

export default function About() {
  return (
    <section id="nosotros" className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="reveal">
            <p className="font-sans text-xs tracking-widest uppercase text-primary mb-4">
              Nuestra Historia
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-dark mb-8 leading-tight">
              Más que un café. Un lugar para quedarse.
            </h2>
            <p className="font-sans text-gray-600 leading-relaxed mb-5">
              YUCCA nació en Belgrano con una idea simple: hacer las cosas bien. Café de especialidad
              de origen selecto, brunch con platos de verdad — abundantes, cuidados, hechos con ingredientes
              que se notan — y pastelería artesanal propia que sale del horno todos los días.
            </p>
            <p className="font-sans text-gray-600 leading-relaxed mb-5">
              Trabajamos con <strong className="text-dark">Puerto Blest</strong> como tostador de referencia,
              con curvas de extracción ajustadas y la cerámica justa para cada preparación. El resultado
              es un café que te dice algo, en un ambiente que invita a tomarte el tiempo que necesitás.
            </p>
            <p className="font-sans text-gray-600 leading-relaxed">
              Salón interno, barra exterior, vereda y terraza. Lunes a viernes desde las 7:30.
              Sábados, domingos y feriados desde las 9. Pet friendly. Siempre con lugar.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-cream-dark reveal-stagger">
              <div>
                <p className="font-serif text-3xl text-primary">93°</p>
                <p className="font-sans text-xs text-gray-500 mt-1 uppercase tracking-wide">Temperatura de extracción</p>
              </div>
              <div>
                <div className="flex items-center justify-start text-primary mb-1">
                  <PetFriendly className="w-8 h-8" />
                </div>
                <p className="font-sans text-xs text-gray-500 mt-1 uppercase tracking-wide">Pet Friendly</p>
              </div>
              <div>
                <p className="font-serif text-3xl text-primary">100%</p>
                <p className="font-sans text-xs text-gray-500 mt-1 uppercase tracking-wide">Pastelería propia</p>
              </div>
            </div>
          </div>

          {/* Photos */}
          <div className="grid grid-cols-2 gap-4 reveal">
            <div className="col-span-2 relative h-64 rounded-2xl overflow-hidden">
              <Image
                src="/images/food/pastries-lattes-spread-scone-croissant-white-table.jpg"
                alt="Pastelería artesanal en YUCCA"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative h-48 rounded-2xl overflow-hidden">
              <Image
                src="/images/food/latte-art-gray-ceramic-mug-wooden-saucer-hand.jpg"
                alt="Latte art en YUCCA"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <div className="relative h-48 rounded-2xl overflow-hidden">
              <Image
                src="/images/lifestyle/puerto-blest-coffee-bags-specialty-shelf-display.jpg"
                alt="Puerto Blest café de especialidad"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
