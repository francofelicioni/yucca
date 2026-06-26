import { Cormorant_Garamond, Inter } from "next/font/google";
import JsonLd from "@/components/JsonLd";
import { metadata as siteMetadata } from "@/lib/metadata";
import "./globals.css";

export { siteMetadata as metadata };

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-AR" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="antialiased">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
