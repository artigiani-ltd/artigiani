import type { Metadata } from "next";
import { siteUrl } from "./site-url";
import { isIndexable } from "./indexing";

const title = "Artigiani | Bespoke Italian Sculptural Wall Art";
const description =
  "Discover Artigiani’s bespoke Italian wall art and Artissimo 100 modular panels. Handcrafted sculptural installations inspired by nature for luxury interiors.";

export const siteMetadata: Metadata = {
  title,
  description,
  applicationName: "Artigiani",
  metadataBase: siteUrl,
  alternates: { canonical: "/" },
  robots: { index: isIndexable, follow: isIndexable },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Artigiani",
    title,
    description,
    url: siteUrl.href,
    images: [
      {
        url: "/nature-inspired-interior.jpg",
        alt: "Artigiani sculptural wall art in a nature-inspired interior",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [new URL("/nature-inspired-interior.jpg", siteUrl).href],
  },
};
