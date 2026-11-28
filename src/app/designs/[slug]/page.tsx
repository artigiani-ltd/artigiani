import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ScrollReveal } from "../../_components/ScrollReveal";
import { collectionHeading } from "../../constants/fonts";
import { designs } from "../../constants/designs";
import { ArtworkImage } from "../../_components/ArtworkImage";
import { designDetails } from "../constants/design-details";
import { ArchitecturalDetails } from "../_components/ArchitecturalDetails";

export function generateStaticParams() {
  return designs.map(({ slug }) => ({ slug }));
}

function getDesign(slug: string) {
  const design = designs.find((design) => design.slug === slug);
  if (!design) notFound();
  return { ...design, ...designDetails[design.slug] };
}

export async function generateMetadata({
  params,
}: PageProps<"/designs/[slug]">): Promise<Metadata> {
  const design = getDesign((await params).slug);
  const title = `${design.pageTitle} | Artigiani`;
  const url = `/designs/${design.slug}`;

  return {
    title,
    description: design.summary,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: "Artigiani",
      title,
      description: design.summary,
      url,
      images: [{ url: design.image.src, alt: design.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: design.summary,
      images: [design.image.src],
    },
  };
}

export default async function DesignPage({
  params,
}: PageProps<"/designs/[slug]">) {
  const design = getDesign((await params).slug);
  const inquiryHref = `mailto:info@artigiani.design?subject=${encodeURIComponent(`Architectural commission — ${design.pageTitle}`)}`;

  return (
    <div className={collectionHeading.variable}>
      <ScrollReveal>
        <main
          id="main-content"
          className="mx-auto max-w-400 px-6 pt-[calc(var(--navbar-height)+4rem)] pb-16 md:px-[6.1%] md:pt-[calc(var(--navbar-height)+11.5vw)] md:pb-24"
        >
          <article aria-labelledby="design-title">
            <header
              data-reveal
              className="mb-12 grid gap-7 md:mb-[7vw] md:grid-cols-[1.3fr_1fr] md:items-center md:gap-12"
            >
              <div>
                <Link
                  href="/#gallery"
                  className="inline-flex min-h-11 items-center text-xs uppercase underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                >
                  Our designs
                </Link>
                <h1
                  id="design-title"
                  className="collection-heading mt-2 text-page-title leading-none"
                >
                  {design.pageTitle}
                </h1>
                <p className="mt-6 text-xs uppercase">{design.category}</p>
              </div>
              <dl className="text-xs leading-loose md:text-right">
                <dt className="font-semibold">Featured Materials:</dt>
                <dd>{design.materials}</dd>
              </dl>
            </header>

            <ArtworkImage
              src={design.image}
              alt={design.imageAlt}
              preload
              sizes="(min-width: 1600px) 1405px, (min-width: 768px) 88vw, calc(100vw - 48px)"
              className="aspect-[1.98/1]"
            />

            <div
              data-reveal
              className="grid gap-6 border-b border-foreground/30 py-7 md:grid-cols-[1.55fr_1fr] md:items-center md:gap-[6%] md:py-10"
            >
              <h2 className="collection-heading max-w-[18ch] text-[clamp(2rem,3.6vw,3.5rem)] leading-[1.08]">
                {design.storyTitle}
              </h2>
              <p className="max-w-sm text-sm leading-relaxed">
                {design.summary}
              </p>
            </div>

            <div className="mt-10 grid items-start gap-8 md:mt-[6vw] md:grid-cols-[1.55fr_0.95fr] md:gap-[6%]">
              <ArtworkImage
                src={design.perspectiveImage}
                alt={design.perspectiveAlt}
                sizes="(min-width: 1600px) 820px, (min-width: 768px) 51vw, calc(100vw - 48px)"
                className="aspect-3/2"
              />
              <div
                data-reveal
                className="space-y-7 text-sm leading-[1.8] md:pt-3 md:text-base"
              >
                {design.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
            <p data-reveal className="mt-10 text-sm leading-[1.8] md:mt-12">
              {design.closing}
            </p>

            <ArchitecturalDetails
              title={design.pageTitle}
              image={design.image}
              imageAlt={design.imageAlt}
              perspectiveImage={design.perspectiveImage}
              perspectiveAlt={design.perspectiveAlt}
            />
          </article>

          <section
            data-reveal
            aria-labelledby="commission-title"
            className="mt-14 grid gap-7 border-t border-foreground/30 pt-9 md:mt-16 md:grid-cols-[1fr_auto] md:items-center md:gap-12"
          >
            <div>
              <h2
                id="commission-title"
                className="collection-heading text-3xl md:text-4xl"
              >
                Bespoke Architectural Commissions
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-linen">
                Every interior offers a new conversation between art and space.
                <br className="hidden md:block" /> Discuss your project with us
                and explore a composition of your own.
              </p>
            </div>
            <a
              href={inquiryHref}
              className="inline-flex min-h-11 w-fit items-center justify-center border border-foreground px-5 py-3 text-xs tracking-widest uppercase transition-colors hover:bg-foreground hover:text-background focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            >
              Inquire about your project
            </a>
          </section>
        </main>
        <footer className="flex flex-col gap-5 border-t border-foreground/15 px-6 py-7 text-xs text-linen sm:flex-row sm:items-center sm:justify-between md:px-[6.1%]">
          <Link
            href="/#gallery"
            className="inline-flex min-h-11 items-center underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
          >
            ← Back to our designs
          </Link>
          <p>© 2026 Artigiani Limited.</p>
        </footer>
      </ScrollReveal>
    </div>
  );
}
