import type { Metadata } from "next";
import { AtelierFooter } from "../_components/AtelierFooter";
import { collectionHeading } from "../constants/fonts";
import { ScrollReveal } from "../_components/ScrollReveal";
import { AboutHero } from "./_components/AboutHero";
import { ProjectsGallery } from "./_components/ProjectsGallery";

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
    images: [{ url: "/images/about-us-janan-wide.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Janan Khammo — From Architecture to Art",
    images: ["/images/about-us-janan-wide.jpg"],
  },
};

export default function AboutPage() {
  return (
    <div className={collectionHeading.variable}>
      <ScrollReveal>
        <main id="main-content" className="pt-(--navbar-height)">
          <AboutHero />
          <article className="mx-auto max-w-7xl px-6 py-14 md:px-12 md:pt-24 md:pb-28">
            <p
              data-reveal
              className="collection-heading mx-auto max-w-5xl border-l-4 border-gold pl-6 text-[clamp(1.5rem,2.5vw,2rem)] leading-[1.3] tracking-[-0.015em] md:pl-[10%]"
            >
              Architect and designer Janan Khammo brings together over four
              decades of architectural experience, artistic creativity, and a
              distinctive multicultural heritage. Born in Baghdad to an Italian
              mother and a renowned Iraqi architect father, he grew up
              influenced by two rich artistic and architectural traditions,
              shaping his unique approach to design.
            </p>
            <div className="mt-14 grid gap-10 text-sm leading-relaxed text-linen md:mt-20 md:grid-cols-3 md:gap-[6%]">
              <section data-reveal aria-labelledby="education-title">
                <h2
                  id="education-title"
                  className="mb-6 border-b border-gold/35 pb-4 text-sm text-gold uppercase"
                >
                  Education
                </h2>
                <p>
                  A graduate of the University of Baghdad, where he obtained his
                  Bachelor&apos;s and Master&apos;s degrees in Architecture,
                  Khammo has established a distinguished career in architectural
                  and interior design, with notable projects across the Middle
                  East.
                </p>
              </section>
              <section data-reveal aria-labelledby="philosophy-title">
                <h2
                  id="philosophy-title"
                  className="mb-6 border-b border-gold/35 pb-4 text-sm text-gold uppercase"
                >
                  Philosophy
                </h2>
                <p>
                  Throughout his career, Khammo has approached architecture as
                  an artistic discipline, where cultural identity, proportion,
                  materials, and craftsmanship come together to create spaces
                  with character and emotion.
                </p>
              </section>
              <section data-reveal aria-labelledby="artigiani-design-title">
                <h2
                  id="artigiani-design-title"
                  className="mb-6 border-b border-gold/35 pb-4 text-sm text-gold uppercase"
                >
                  Artigiani.Design
                </h2>
                <p>
                  This philosophy eventually inspired the creation of
                  Artigiani.Design, an Italian artistic venture that extends his
                  architectural vision beyond buildings and interiors into the
                  world of contemporary decorative art.
                </p>
              </section>
            </div>
            <ProjectsGallery />
          </article>
        </main>
        <AtelierFooter />
      </ScrollReveal>
    </div>
  );
}
