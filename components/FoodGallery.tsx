"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { brandedGalleryImages } from "@/lib/images";

export default function FoodGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const showPrevious = useCallback(() => {
    setLightboxIndex((current) =>
      current === null ? null : (current - 1 + brandedGalleryImages.length) % brandedGalleryImages.length
    );
  }, []);

  const showNext = useCallback(() => {
    setLightboxIndex((current) =>
      current === null ? null : (current + 1) % brandedGalleryImages.length
    );
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxIndex, closeLightbox, showPrevious, showNext]);

  return (
    <>
      <section id="galeria" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14 reveal">
            <p className="font-sans text-xs tracking-widest uppercase text-primary mb-4">
              Galería
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-dark mb-4">
              Lo que te espera
            </h2>
            <p className="font-sans text-sm text-gray-500 max-w-xl mx-auto">
              Platos, café y pastelería en su mejor versión. Tocá una imagen para verla en detalle.
            </p>
          </div>

          <div className="columns-2 md:columns-3 gap-4 reveal-stagger">
            {brandedGalleryImages.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setLightboxIndex(index)}
                className="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-2xl bg-cream text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                aria-label={`Ampliar: ${image.alt}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={900}
                  height={1125}
                  className="w-full h-auto transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-dark/35 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4 translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="font-sans text-xs uppercase tracking-widest text-white/90">
                    Ver detalle
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-dark/95 p-8 md:p-14 lg:p-20"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Galería ampliada"
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-5 right-5 text-cream/70 hover:text-cream transition-colors"
            aria-label="Cerrar galería"
          >
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            className="absolute left-4 md:left-8 text-cream/70 hover:text-cream transition-colors"
            aria-label="Imagen anterior"
          >
            <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path d="M15 6l-6 6 6 6" />
            </svg>
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            className="absolute right-4 md:right-8 text-cream/70 hover:text-cream transition-colors"
            aria-label="Imagen siguiente"
          >
            <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>

          <div
            className="relative mx-4 w-full max-w-3xl h-[min(68vh,680px)] md:h-[min(72vh,720px)]"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={brandedGalleryImages[lightboxIndex].src}
              alt={brandedGalleryImages[lightboxIndex].alt}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 80vw"
              priority
            />
          </div>

          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 font-sans text-xs tracking-widest uppercase text-cream/60">
            {lightboxIndex + 1} / {brandedGalleryImages.length}
          </p>
        </div>
      )}
    </>
  );
}
