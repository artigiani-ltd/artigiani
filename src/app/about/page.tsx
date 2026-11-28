import type { Metadata } from "next";
import residence from "../../../public/images/residence.webp";
import timberDetail from "../../../public/images/nature-timber-detail.webp";
import { ArtworkImage } from "../_components/ArtworkImage";
import { AtelierFooter } from "../_components/AtelierFooter";
import { collectionHeading, editorial } from "../constants/fonts";

export const metadata: Metadata = {
  title: "About Us | Artigiani",
  description:
    "Discover how architect and designer Janan Khammo’s creative journey led to the sculptural wooden art of Artigiani.Design.",
  alternates: { canonical: "/about" },
  openGraph: {
    type: "website",
    siteName: "Artigiani",
    title: "Janan Khammo — From Architecture to Art",
    url: "/about",
    images: [{ url: "/images/residence.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Janan Khammo — From Architecture to Art",
    images: ["/images/residence.webp"],
  },
};

export default function AboutPage() {
  return (
    <div className={collectionHeading.variable}>
      <main id="main-content" className="pt-[var(--navbar-height)]">
        <header className="mx-auto max-w-7xl px-6 pt-16 pb-12 text-center md:px-12 md:pt-26 md:pb-18">
          <p className="mb-7 text-xs font-semibold tracking-[0.28em] text-gold uppercase">
            About Us
          </p>
          <h1 className="collection-heading text-page-title leading-none">
            Janan Khammo
            <span
              className={`${editorial.className} mt-5 block text-item-title leading-tight text-linen`}
            >
              From Architecture to Art
            </span>
          </h1>
        </header>
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <ArtworkImage
            src={residence}
            alt="Sculptural wood wall art displayed in a residential interior"
            className="aspect-[5/4] md:aspect-[2.35]"
            sizes="(min-width: 1280px) 1184px, (min-width: 768px) calc(100vw - 96px), calc(100vw - 48px)"
          />
        </div>
        <article className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24">
          <div className="mx-auto max-w-2xl space-y-6 text-body leading-relaxed text-linen">
            <p className="collection-heading border-l border-gold pl-5 text-item-title leading-snug text-foreground md:pl-8">
              Architect and designer Janan Khammo brings together over four
              decades of architectural experience, artistic creativity, and a
              distinctive multicultural heritage. Born in Baghdad to an Italian
              mother and a renowned Iraqi architect father, he grew up
              influenced by two rich artistic and architectural traditions,
              shaping his unique approach to design.
            </p>
            <p>
              A graduate of the University of Baghdad, where he obtained his
              Bachelor&apos;s and Master&apos;s degrees in Architecture, Khammo
              has established a distinguished career in architectural and
              interior design, with notable projects across the Middle East.
            </p>
            <p>
              Among his significant achievements are the acclaimed Samad
              Restaurants in Dubai and Jeddah, and particularly Shanasheel
              Restaurant in Dubai, a landmark project that celebrates the
              richness of Iraqi architectural heritage through a sophisticated
              contemporary interpretation.
            </p>
            <p>
              Throughout his career, Khammo has approached architecture as an
              artistic discipline, where cultural identity, proportion,
              materials, and craftsmanship come together to create spaces with
              character and emotion.
            </p>
          </div>
          <div className="mt-16 grid items-center gap-10 border-t border-gold/25 pt-12 md:mt-24 md:grid-cols-[0.85fr_1fr] md:gap-[9%] md:pt-20">
            <ArtworkImage
              src={timberDetail}
              alt="Close-up of carved timber with undulating blue inlays"
              className="aspect-[4/5]"
              sizes="(min-width: 1280px) 500px, (min-width: 768px) 38vw, calc(100vw - 48px)"
            />
            <div className="space-y-6 text-body leading-relaxed text-linen">
              <p>
                This philosophy eventually inspired the creation of
                Artigiani.Design, an Italian artistic venture that extends his
                architectural vision beyond buildings and interiors into the
                world of contemporary decorative art.
              </p>
              <p>
                Inspired by the organic forms and rhythms of nature,
                Artigiani&apos;s sculptural wooden creations combine
                architectural composition, advanced manufacturing technology,
                and refined Italian craftsmanship.
              </p>
              <p
                className={`${editorial.className} text-item-title leading-snug text-foreground`}
              >
                Artigiani.Design represents the natural evolution of Janan
                Khammo&apos;s lifelong creative journey — transforming an
                architect&apos;s vision into distinctive works of art.
              </p>
            </div>
          </div>
        </article>
      </main>
      <AtelierFooter />
    </div>
  );
}
