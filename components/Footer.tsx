import Image from "next/image";
import { SageLeaf } from "@/components/BrandIcons";

const links = [
  { label: "Nosotros", href: "#nosotros" },
  { label: "Menú", href: "#menu" },
  { label: "Galería", href: "#galeria" },
  { label: "Reseñas", href: "#resenas" },
  { label: "Ubicación", href: "#ubicacion" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark text-cream py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logos/yucca-logo-sage-green.jpg"
                alt="YUCCA Logo"
                width={48}
                height={48}
                className="rounded-full"
              />
              <span className="font-serif text-2xl tracking-widest">YUCCA</span>
            </div>
            <p className="font-sans text-sm text-cream/50 leading-relaxed">
              Café de especialidad, brunch artesanal y pastelería propia en Belgrano, Buenos Aires.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-cream/40 mb-5">
              Navegación
            </h4>
            <nav className="flex flex-col gap-3">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-sans text-sm text-cream/70 hover:text-cream transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase text-cream/40 mb-5">
              Encontranos
            </h4>
            <div className="space-y-3">
              <p className="font-sans text-sm text-cream/70">Av. Cramer 2547, Belgrano</p>
              <p className="font-sans text-sm text-cream/70">011 4472-2965</p>
              <p className="font-sans text-sm text-cream/70">
                Lun–Vie 7:30–20:30 · Sáb–Dom 9:00–20:30
              </p>
              <a
                href="https://www.instagram.com/yucca.cafeteria/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-sans text-sm text-primary-light hover:text-primary transition-colors mt-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                @yucca.cafeteria
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-xs text-cream/30">
            © {year} YUCCA Café de Especialidad. Todos los derechos reservados.
          </p>
          <p className="font-sans text-xs text-cream/30 inline-flex items-center gap-1.5">
            Belgrano, Buenos Aires
            <SageLeaf className="w-3.5 h-3.5 text-primary-light" />
          </p>
        </div>
      </div>
    </footer>
  );
}
