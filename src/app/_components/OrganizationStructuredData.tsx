import { siteUrl } from "../constants/site-url";

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Artigiani",
  url: siteUrl.href,
  email: "info@artigiani.design",
  description: "Bespoke Italian sculptural wall art and modular panels inspired by nature.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Piazza Roma 4",
    addressLocality: "Valdagno",
    addressRegion: "Vicenza",
    postalCode: "36078",
    addressCountry: "IT",
  },
};

export function OrganizationStructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(organization).replace(/</g, "\\u003c"),
      }}
    />
  );
}
