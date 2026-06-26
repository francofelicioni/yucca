import { WHATSAPP_URL } from "@/lib/images";
import { WhatsAppIcon } from "@/components/BrandIcons";

export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
      className="whatsapp-float group fixed bottom-6 right-6 z-40 flex items-center gap-3"
    >
      <span className="pointer-events-none hidden sm:block rounded-full bg-dark/90 text-cream text-xs font-sans tracking-wide px-4 py-2 opacity-0 translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 shadow-lg">
        Escribinos
      </span>
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#25D366]/40">
        <WhatsAppIcon className="w-7 h-7" />
      </span>
    </a>
  );
}
