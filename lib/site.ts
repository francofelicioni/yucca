export const siteConfig = {
  name: "YUCCA",
  legalName: "YUCCA Café de Especialidad",
  title: "YUCCA | Café de Especialidad — Belgrano, Buenos Aires",
  description:
    "Café de especialidad, brunch artesanal y pastelería en Belgrano, Buenos Aires. Av. Cramer 2547. Pet friendly. Lun–Vie 7:30–20:30 · Sáb–Dom 9:00–20:30.",
  keywords: [
    "YUCCA",
    "café de especialidad",
    "brunch Belgrano",
    "pastelería artesanal",
    "café Belgrano",
    "pet friendly Belgrano",
    "Av Cramer 2547",
    "Puerto Blest",
    "cafetería Buenos Aires",
  ],
  locale: "es_AR",
  address: {
    street: "Av. Cramer 2547",
    locality: "Belgrano",
    region: "Ciudad Autónoma de Buenos Aires",
    country: "AR",
    postalCode: "C1428",
  },
  geo: {
    latitude: -34.5605171,
    longitude: -58.4647995,
  },
  phone: "+541144722965",
  phoneDisplay: "011 4472-2965",
  instagram: "https://www.instagram.com/yucca.cafeteria/",
  googlePlaceId: "ChIJqbjYGC-3vJWoliVeN5k0XA",
  googleMapsUrl: "https://maps.app.goo.gl/ZF8CX1xdmGxjTHQB6",
  openingHours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "07:30", closes: "20:30" },
    { days: ["Saturday", "Sunday"], opens: "09:00", closes: "20:30" },
  ],
  priceRange: "$$",
  servesCuisine: ["Café de especialidad", "Brunch", "Pastelería artesanal"],
} as const;

export function getSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return "http://localhost:3000";
}
