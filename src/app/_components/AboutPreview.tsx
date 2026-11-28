import Link from "next/link";
import waveDesign from "../../../public/images/about-us-wave-design.jpg";
import jananImage from "../../../public/images/about-us-janan-portrait.webp";
import { ArtworkImage } from "./ArtworkImage";

export function AboutPreview() {
  return (
    <section
      id="about"
      aria-labelledby="about-preview-title"
      className="bg-background px-6 py-16 sm:px-10 md:px-[8%] md:py-24 lg:py-32"
    >
      <div className="isolate mx-auto grid max-w-7xl items-center md:grid-cols-[minmax(0,1fr)_min(40%,28rem)] md:gap-8 lg:gap-14 min-[1640px]:max-w-[86rem] min-[1640px]:gap-20">
        <div className="grid grid-cols-[56%_38%_6%] items-start">
          <figure className="col-start-1 col-end-3 row-start-1">
            <ArtworkImage
              src={waveDesign}
              zoomOnHover={false}
              alt="Sculptural wood wall art installed in a residential interior"
              className="aspect-3/2"
              sizes="(min-width: 1640px) 798px, (min-width: 1524px) 730px, (min-width: 1334px) calc(79vw - 474px), (min-width: 768px) 45vw, 94vw"
            />
            <figcaption className="mt-3 max-w-[57%] text-[0.625rem] font-semibold tracking-widest text-gold uppercase">
              Artissimo 100 · Wave Design
            </figcaption>
          </figure>
          <figure className="z-10 col-start-2 col-end-4 row-start-1 mt-[65%]">
            <ArtworkImage
              src={jananImage}
              zoomOnHover={false}
              alt="Janan Khammo standing in front of sculpted timber waves"
              className="aspect-4/5 border border-antique-gold [&_img]:p-1"
              sizes="(min-width: 1640px) 373px, (min-width: 1524px) 341px, (min-width: 1334px) calc(36.96vw - 222px), (min-width: 768px) 21vw, 44vw"
            />
          </figure>
        </div>
        <div
          data-reveal
          className="z-10 mx-3 mt-5 bg-foreground px-6 py-8 text-background outline outline-antique-gold/65 -outline-offset-6 sm:mx-8 sm:mt-8 sm:p-10 md:mx-0 md:mt-0 md:p-8 lg:p-12"
        >
          <p className="mb-4 text-xs font-semibold tracking-[0.25em] uppercase">
            The Artist
          </p>
          <h2
            id="about-preview-title"
            className="collection-heading text-section-title leading-none"
          >
            Janan Khammo
          </h2>
          <div className="mt-8 max-w-sm">
            <h3 className="font-sans text-lg leading-snug font-semibold text-balance">
              From Architecture to&nbsp;Art
            </h3>
            <div className="mt-3 space-y-5 text-base leading-normal text-pretty text-background/80">
              <p>
                He brings over four decades of experience in architecture and
                design to his art, drawing on his multicultural&nbsp;heritage.
              </p>
              <p>
                Born in Baghdad to an Italian mother and a renowned Iraqi
                architect father, he grew up influenced by two rich artistic and
                architectural traditions, shaping his unique approach
                to&nbsp;design.
              </p>
            </div>
          </div>
          <Link
            href="/about"
            className="group mt-4 inline-flex min-h-12 items-center text-xs font-semibold tracking-[0.18em] uppercase focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-background"
          >
            <span className="relative inline-flex items-center gap-3 after:absolute after:inset-x-0 after:-bottom-1.5 after:h-px after:origin-left after:scale-x-0 after:bg-antique-gold group-hover:after:scale-x-100 group-focus-visible:after:scale-x-100 motion-safe:after:transition-transform motion-safe:after:duration-300 motion-safe:after:ease-out">
              Read more
              <span aria-hidden="true" className="leading-none tracking-normal">
                ↗
              </span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
