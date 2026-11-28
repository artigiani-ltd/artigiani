import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import livingRoom from "../../../public/images/living-room.webp";
import { AtelierFooter } from "../_components/AtelierFooter";
import { ScrollReveal } from "../_components/ScrollReveal";
import { collectionHeading } from "../constants/fonts";
import { ProductCompositions } from "./_components/ProductCompositions";

const title = "Products | Artigiani";
const description =
  "Explore Artissimo 100 sculptural wall art: modular Flower, Rain drops, and Wave compositions for residential and architectural interiors.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/products" },
  openGraph: {
    type: "website",
    siteName: "Artigiani",
    title,
    description,
    url: "/products",
    images: [{ url: "/images/living-room.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/living-room.webp"],
  },
};

export default function ProductsPage() {
  return (
    <div
      className={`${collectionHeading.variable} bg-foreground text-background`}
    >
      <ScrollReveal>
        <main id="main-content" className="pt-(--navbar-height)">
          <section
            aria-labelledby="products-title"
            className="px-6 pt-12 pb-8 md:px-[5%] md:pt-16 md:pb-12"
          >
            <p className="text-xs tracking-[0.16em] uppercase">
              Sculptural wall art
            </p>
            <div className="mt-5 grid gap-6 md:grid-cols-[1.2fr_1fr] md:items-end md:gap-[10%]">
              <div>
                <h1
                  id="products-title"
                  className="collection-heading text-page-title leading-none"
                >
                  Artissimo 100
                </h1>
                <p className="mt-4 font-[family-name:var(--font-editorial)] text-2xl leading-tight italic md:text-3xl">
                  An interpretation of nature.
                </p>
              </div>
              <div>
                <p className="max-w-lg text-base leading-relaxed text-background/75 md:text-body">
                  Flowers, rain drops, and flowing waves. Discover modular
                  compositions in wood, leather, and marble, designed to become
                  part of your architecture.
                </p>
                <a
                  href="#compositions"
                  className="mt-4 inline-flex min-h-11 items-center gap-4 text-xs tracking-[0.12em] text-[#7c5f2d] uppercase underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4"
                >
                  Explore compositions <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>
            <figure className="mt-8 md:mt-10">
              <div className="relative aspect-[4/3] overflow-hidden md:aspect-[2.4/1]">
                <Image
                  src={livingRoom}
                  alt="Framed sculptural wood wave panels above a sofa in a light-filled living room."
                  fill
                  preload
                  sizes="(min-width: 768px) 90vw, calc(100vw - 48px)"
                  className="object-cover object-[50%_45%]"
                />
              </div>
              <figcaption className="mt-3 flex flex-wrap justify-between gap-2 text-[0.625rem] tracking-[0.12em] text-background/65 uppercase md:text-xs">
                <span>Artissimo 100</span>
                <span>Wave &amp; Flower · Residential interior</span>
              </figcaption>
            </figure>
          </section>
          <ProductCompositions />
          <section
            aria-labelledby="commission-title"
            className="mx-6 grid gap-6 border-t border-background/20 py-12 md:mx-[5%] md:grid-cols-[1.2fr_1fr] md:gap-[10%] md:py-16"
          >
            <h2
              id="commission-title"
              data-reveal
              className="collection-heading max-w-lg text-section-title leading-[1.05]"
            >
              Made for your space.
            </h2>
            <div data-reveal>
              <p className="max-w-lg text-base leading-relaxed text-background/75">
                Choose a standard composition or discuss a configuration
                tailored to your architectural specifications.
              </p>
              <Link
                href="/contact"
                className="mt-5 inline-flex min-h-11 items-center gap-8 border-b border-[#7c5f2d] text-xs tracking-[0.12em] text-[#7c5f2d] uppercase hover:border-b-2 focus-visible:outline-2 focus-visible:outline-offset-4"
              >
                Discuss your project <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </section>
        </main>
        <AtelierFooter />
      </ScrollReveal>
    </div>
  );
}
