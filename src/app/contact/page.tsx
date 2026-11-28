import type { Metadata } from "next";
import Image from "next/image";
import waveDesign from "../../../public/images/about-us-wave-design.jpg";
import { AtelierFooter } from "../_components/AtelierFooter";
import { ScrollReveal } from "../_components/ScrollReveal";
import { collectionHeading } from "../constants/fonts";
import { InquiryForm } from "./_components/InquiryForm";

export const metadata: Metadata = {
  title: "Contact Us | Artigiani",
  description:
    "Contact Artigiani for collection details, sculptural wall art, and architectural project inquiries. Find our email, telephone numbers, and Italian address.",
  alternates: { canonical: "/contact" },
  openGraph: {
    type: "website",
    siteName: "Artigiani",
    title: "Contact Us | Artigiani",
    description:
      "A conversation about sculptural wall art for your space. Get in touch with Artigiani.",
    url: "/contact",
    images: [{ url: "/images/about-us-wave-design.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Artigiani",
    images: ["/images/about-us-wave-design.jpg"],
  },
};

const contactLinkClassName =
  "inline-flex min-h-11 items-center underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4";

export default function ContactPage() {
  return (
    <div
      className={`${collectionHeading.variable} bg-foreground text-background`}
    >
      <ScrollReveal>
        <main
          id="main-content"
          className="px-6 pt-[calc(var(--navbar-height)+3.5rem)] pb-20 md:px-[6%] md:pt-[calc(var(--navbar-height)+5rem)] md:pb-28"
        >
          <header className="mx-auto grid max-w-7xl gap-8 border-b border-background/20 pb-10 md:grid-cols-2 md:items-end md:gap-[10%] md:pb-14">
            <div>
              <p className="mb-5 text-xs tracking-[0.18em] uppercase">
                Get in touch
              </p>
              <h1 className="collection-heading text-[clamp(4rem,8vw,8rem)] leading-[0.9]">
                Contact us.
              </h1>
            </div>
            <div className="max-w-md">
              <p className="text-base leading-relaxed text-background/75">
                A piece you love. A space you’re imagining. Let’s find a
                composition that brings it to life.
              </p>
              <a
                href="mailto:info@artigiani.design"
                className={`${contactLinkClassName} collection-heading mt-4 text-[clamp(1.5rem,2.5vw,2rem)] tracking-normal`}
              >
                info@artigiani.design{" "}
                <span aria-hidden="true" className="ml-4 font-sans text-lg">
                  ↗
                </span>
              </a>
            </div>
          </header>
          <div className="mx-auto mt-10 grid max-w-7xl items-start gap-12 md:mt-14 lg:grid-cols-[0.95fr_1fr] lg:gap-[10%]">
            <div>
              <figure>
                <Image
                  src={waveDesign}
                  alt="Sculptural wooden wave panels displayed in a residential interior"
                  preload
                  className="aspect-4/3 w-full object-cover"
                  sizes="(min-width: 1500px) 561px, (min-width: 1024px) 39vw, calc(100vw - 48px)"
                />
                <figcaption className="mt-4 flex justify-between gap-4 text-[0.625rem] tracking-[0.14em] uppercase">
                  <span>Artissimo 100</span>
                  <span>Wave design</span>
                </figcaption>
              </figure>
              <section
                aria-labelledby="contact-details-title"
                className="mt-9 border-t border-background/20 pt-6"
              >
                <h2 id="contact-details-title" className="sr-only">
                  Contact details
                </h2>
                <div className="grid gap-6 text-sm leading-relaxed sm:grid-cols-2">
                  <div>
                    <h3 className="mb-3 text-[0.625rem] tracking-[0.16em] uppercase">
                      Italy
                    </h3>
                    <address className="not-italic text-background/75">
                      Piazza Roma 4<br />
                      36078 Valdagno (Vicenza)
                      <br />
                      Italy
                    </address>
                  </div>
                  <div className="flex flex-col items-start">
                    <h3 className="mb-1 text-[0.625rem] tracking-[0.16em] uppercase">
                      Telephone
                    </h3>
                    <a
                      href="tel:+393924697875"
                      className={contactLinkClassName}
                    >
                      +39 392 4697 875
                    </a>
                    <a
                      href="tel:+393881053075"
                      className={contactLinkClassName}
                    >
                      +39 388 105 3075
                    </a>
                  </div>
                </div>
              </section>
            </div>
            <InquiryForm />
          </div>
        </main>
        <AtelierFooter />
      </ScrollReveal>
    </div>
  );
}
