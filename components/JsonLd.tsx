import { getSiteUrl, siteConfig } from "@/lib/site";

export default function JsonLd() {
  const siteUrl = getSiteUrl();

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    "@id": `${siteUrl}/#cafe`,
    name: siteConfig.legalName,
    description: siteConfig.description,
    url: siteUrl,
    telephone: siteConfig.phone,
    priceRange: siteConfig.priceRange,
    image: `${siteUrl}/opengraph-image.jpg`,
    logo: `${siteUrl}/icon.png`,
    servesCuisine: siteConfig.servesCuisine,
    sameAs: [siteConfig.instagram],
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.locality,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    openingHoursSpecification: siteConfig.openingHours.map((slot) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: slot.days,
      opens: slot.opens,
      closes: slot.closes,
    })),
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Pet Friendly", value: true },
      { "@type": "LocationFeatureSpecification", name: "WiFi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Take Away", value: true },
    ],
    hasMap: siteConfig.googleMapsUrl,
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: siteConfig.legalName,
    description: siteConfig.description,
    inLanguage: siteConfig.locale,
    publisher: {
      "@id": `${siteUrl}/#cafe`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
