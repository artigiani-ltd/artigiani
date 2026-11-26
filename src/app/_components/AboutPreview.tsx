import Link from "next/link";
import timberDetail from "../../../public/images/nature-timber-detail.webp";
import { editorial } from "../constants/fonts";
import { ArtworkImage } from "./ArtworkImage";

export function AboutPreview() {
  return (
    <section
      id="about"
      aria-labelledby="about-preview-title"
      className="bg-background px-6 py-18 text-foreground md:px-[8%] md:py-28"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-[1fr_1.05fr] md:gap-[9%]">
        <div data-reveal>
          <p className="mb-6 flex items-center gap-4 text-xs font-semibold tracking-[0.25em] uppercase before:h-px before:w-9 before:bg-gold">
            About Us
          </p>
          <h2
            id="about-preview-title"
            className="collection-heading text-[clamp(3rem,6vw,6.5rem)] leading-[0.9]"
          >
            Janan Khammo
            <span
              className={`${editorial.className} mt-3 block text-[0.53em] leading-tight`}
            >
              From Architecture to Art
            </span>
          </h2>
          <p className="mt-7 max-w-sm text-base leading-relaxed text-foreground/80">
            Drawing on four decades in architecture and an upbringing shaped by
            Iraqi and Italian traditions, Janan Khammo brings his architectural
            eye to the sculptural woodwork of Artigiani.Design.
          </p>
          <Link
            href="/about"
            className="mt-8 inline-flex min-h-12 items-center gap-8 border border-foreground/45 px-5 text-xs font-semibold tracking-[0.18em] uppercase transition-colors hover:bg-foreground hover:text-background focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            Read more <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <ArtworkImage
          src={timberDetail}
          alt="Sculpted timber waves with deep blue inlays"
          className="aspect-[5/4]"
          sizes="(min-width: 1536px) 620px, (min-width: 768px) 41vw, calc(100vw - 48px)"
        />
      </div>
    </section>
  );
}
