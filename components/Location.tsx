import {
  CoffeeCup,
  Parking,
  PetFriendly,
  TakeAway,
  Vegan,
  Wifi,
} from "@/components/BrandIcons";

const hours = [
  { days: "Lunes — Viernes", time: "7:30 — 20:30 hs" },
  { days: "Sábado", time: "9:00 — 20:30 hs" },
  { days: "Domingo", time: "9:00 — 20:30 hs" },
  { days: "Feriados", time: "9:00 — 20:30 hs" },
];

const amenities = [
  { icon: PetFriendly, label: "Pet Friendly" },
  { icon: Wifi, label: "WiFi" },
  { icon: TakeAway, label: "Take Away" },
  { icon: Vegan, label: "Opciones Veganas" },
  { icon: CoffeeCup, label: "Café de Especialidad" },
  { icon: Parking, label: "Estacionamiento cerca" },
];

const PLACE_ID = "ChIJqbjYGC-3vJWoliVeN5k0XA";

export default function Location() {
  return (
    <section id="ubicacion" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-sans text-xs tracking-widest uppercase text-primary text-center mb-4 reveal">
          Dónde Encontrarnos
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-center text-dark mb-16 reveal">
          Belgrano te espera
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Info */}
          <div className="reveal">
            {/* Address */}
            <div className="mb-10">
              <h3 className="font-sans text-xs tracking-widest uppercase text-gray-400 mb-3">
                Dirección
              </h3>
              <p className="font-serif text-2xl text-dark mb-1">Av. Cramer 2547</p>
              <p className="font-sans text-gray-500">Belgrano, Ciudad Autónoma de Buenos Aires</p>
              <a
                href={`https://www.google.com/maps/place/?q=place_id:${PLACE_ID}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 mt-3 font-sans text-sm text-primary hover:text-primary-dark transition-colors"
              >
                Ver en Google Maps →
              </a>
            </div>

            {/* Hours */}
            <div className="mb-10">
              <h3 className="font-sans text-xs tracking-widest uppercase text-gray-400 mb-3">
                Horarios
              </h3>
              <div className="space-y-2">
                {hours.map((h) => (
                  <div key={h.days} className="flex justify-between font-sans text-sm">
                    <span className="text-gray-600">{h.days}</span>
                    <span className="text-dark font-medium">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="mb-10">
              <h3 className="font-sans text-xs tracking-widest uppercase text-gray-400 mb-3">
                Contacto
              </h3>
              <a
                href="tel:+541144722965"
                className="font-serif text-2xl text-dark hover:text-primary transition-colors"
              >
                011 4472-2965
              </a>
              <p className="font-sans text-sm text-gray-500 mt-2">
                También podés escribirnos por WhatsApp desde el botón flotante.
              </p>
            </div>

            {/* Amenities */}
            <div>
              <h3 className="font-sans text-xs tracking-widest uppercase text-gray-400 mb-3">
                Servicios
              </h3>
              <div className="flex flex-wrap gap-2">
                {amenities.map(({ icon: Icon, label }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-2 bg-cream text-dark text-xs font-sans px-3.5 py-2 rounded-full border border-cream-dark/60"
                  >
                    <Icon className="w-4 h-4 text-primary shrink-0" />
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="reveal">
            <div className="rounded-2xl overflow-hidden shadow-md h-96 md:h-full min-h-80">
              <iframe
                src="https://maps.google.com/maps?q=Av.+Cramer+2547,+Belgrano,+Buenos+Aires&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "320px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="YUCCA Café en Google Maps"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
