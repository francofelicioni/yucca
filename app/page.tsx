import type { Metadata } from "next";
import Nav from "@/components/Nav";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
};
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import FoodGallery from "@/components/FoodGallery";
import LifestyleGallery from "@/components/LifestyleGallery";
import Reviews from "@/components/Reviews";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import RevealInit from "@/components/RevealInit";

export default function Home() {
  return (
    <main>
      <RevealInit />
      <Nav />
      <Hero />
      <About />
      <Menu />
      <FoodGallery />
      <LifestyleGallery />
      <Reviews />
      <Location />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
