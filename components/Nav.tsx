"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const links = [
  { label: "Nosotros", href: "#nosotros" },
  { label: "Menú", href: "#menu" },
  { label: "Galería", href: "#galeria" },
  { label: "Reseñas", href: "#resenas" },
  { label: "Ubicación", href: "#ubicacion" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerBg = menuOpen
    ? "bg-primary shadow-md"
    : scrolled
      ? "bg-white/95 shadow-sm md:bg-white/60 md:backdrop-blur-md md:border-b md:border-white/30"
      : "bg-transparent";

  const iconColor = menuOpen
    ? "bg-white"
    : scrolled
      ? "bg-gray-800"
      : "bg-white";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <Image
            src="/images/logos/yucca-logo-sage-green.jpg"
            alt="YUCCA Café de Especialidad"
            width={52}
            height={52}
            className={`object-contain rounded-full transition-all duration-300 ${
              menuOpen ? "ring-2 ring-white" : ""
            }`}
          />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-sans tracking-wide transition-colors ${
                scrolled
                  ? "text-gray-700 hover:text-primary"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden relative w-8 h-8 flex items-center justify-center"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
        >
          <span
            className={`absolute block w-6 h-0.5 rounded-full origin-center transition-all duration-500 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] ${iconColor} ${
              menuOpen ? "rotate-45 scale-110" : "-translate-y-[7px] scale-100"
            }`}
          />
          <span
            className={`absolute block w-6 h-0.5 rounded-full transition-all duration-300 ${iconColor} ${
              menuOpen ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"
            }`}
          />
          <span
            className={`absolute block w-6 h-0.5 rounded-full origin-center transition-all duration-500 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] ${iconColor} ${
              menuOpen ? "-rotate-45 scale-110" : "translate-y-[7px] scale-100"
            }`}
          />
        </button>
      </div>

      {/* Mobile panel — slide + fade */}
      <div
        className={`md:hidden overflow-hidden bg-cream transition-[max-height,opacity] duration-500 ease-in-out ${
          menuOpen
            ? "max-h-96 opacity-100 border-t border-primary-dark/20"
            : "max-h-0 opacity-0 border-t border-transparent pointer-events-none"
        }`}
      >
        <div
          className={`py-6 px-6 flex flex-col gap-1 ${
            menuOpen ? "animate-menu-reveal" : ""
          }`}
        >
          {links.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={menuOpen ? { animationDelay: `${80 + i * 60}ms` } : undefined}
              className={`text-dark text-lg font-sans py-3 border-b border-cream-dark last:border-0 hover:text-primary transition-colors ${
                menuOpen ? "opacity-0 animate-menu-link" : ""
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
