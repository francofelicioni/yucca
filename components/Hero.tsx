"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { heroImages } from "@/lib/images";

const SLIDE_INTERVAL = 5500;

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroImages.length);
    }, SLIDE_INTERVAL);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {heroImages.map((image, index) => (
        <div
          key={image.src}
          className={`absolute inset-0 transition-opacity duration-[1800ms] ease-in-out ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={index !== activeIndex}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className={`object-cover object-center hero-ken-burns ${
              index === activeIndex ? "hero-ken-burns-active" : ""
            }`}
            priority={index === 0}
            sizes="100vw"
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/70" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(31,42,36,0.25)_100%)]" />

      <div className="relative z-10 text-center text-white px-6 max-w-2xl mx-auto">
        <div className="mb-6">
          <Image
            src="/images/logos/yucca-logo-sage-green.jpg"
            alt="YUCCA Logo"
            width={100}
            height={100}
            className="mx-auto rounded-full opacity-95 ring-2 ring-white/20 shadow-2xl"
          />
        </div>

        <h1 className="font-serif text-6xl md:text-8xl font-light tracking-wide mb-4 drop-shadow-lg">
          YUCCA
        </h1>
        <p className="font-sans text-base md:text-lg tracking-widest uppercase text-white/80 mb-8">
          Café de Especialidad · Belgrano
        </p>
        <p className="font-serif text-xl md:text-2xl italic text-white/90 mb-10">
          Café bien hecho, brunch abundante y pastelería artesanal
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#menu"
            className="bg-primary hover:bg-primary-dark text-white font-sans text-sm tracking-wide px-8 py-3 rounded-full transition-colors shadow-lg shadow-primary/20"
          >
            Ver Menú
          </a>
          <a
            href="#ubicacion"
            className="border border-white/70 hover:bg-white/10 text-white font-sans text-sm tracking-wide px-8 py-3 rounded-full transition-colors backdrop-blur-sm"
          >
            Cómo Llegar
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-5">
        <div className="flex items-center gap-2">
          {heroImages.map((image, index) => (
            <button
              key={image.src}
              type="button"
              aria-label={`Ver imagen ${index + 1}`}
              onClick={() => setActiveIndex(index)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                index === activeIndex
                  ? "w-8 bg-white"
                  : "w-1.5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>

        <div className="text-white/60 animate-bounce">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
