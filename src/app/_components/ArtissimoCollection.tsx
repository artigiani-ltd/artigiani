import { compositions } from "../constants/compositions";
import { ArtworkImage } from "./ArtworkImage";

const inquiryClassName =
  "inline-flex min-h-11 items-center justify-center border border-antique-gold px-5 text-[10px] tracking-[0.08em] text-gold uppercase transition-colors hover:border-gold hover:bg-gold hover:text-background focus-visible:outline-2 focus-visible:outline-offset-4 motion-reduce:transition-none";

export function ArtissimoCollection() {
  return (
    <section
      id="products"
      aria-labelledby="compositions-title"
      className="px-6 pt-12 pb-24 md:px-[5%] md:pt-[5vw] md:pb-[12vw]"
    >
      <div
        data-reveal
        className="mb-10 flex flex-wrap items-start justify-between gap-7 md:mb-[4.5vw]"
      >
        <div>
          <h2
            id="compositions-title"
            className="collection-heading text-[clamp(2.25rem,3.2vw,4rem)] leading-none"
          >
            Compositions
          </h2>
          <p className="collection-heading mt-6 max-w-2xl text-lg leading-[1.5] tracking-normal text-linen md:mt-[2.5vw] md:max-w-[48vw] md:text-[clamp(1rem,1.4vw,1.75rem)]">
            Modular configurations available in standard dimensions or
            commissioned to your exact architectural specifications.
          </p>
        </div>
        <a
          href="/artissimo-compositions.pdf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View more compositions in the catalogue (PDF, opens in a new tab)"
          className={inquiryClassName}
        >
          View more compositions
        </a>
      </div>
      <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 md:grid-cols-3 md:gap-x-[2vw] md:gap-y-[2vw]">
        {compositions.map((composition) => (
          <figure key={composition.title} className="min-w-0">
            <ArtworkImage
              src={composition.image}
              alt={composition.title}
              className="aspect-square"
              fit="contain"
              sizes="(min-width: 768px) 29vw, (min-width: 640px) 44vw, calc(100vw - 48px)"
            />
            <figcaption data-reveal className="mt-4">
              <h3 className="collection-heading min-h-12 text-xl leading-[1.25] tracking-normal md:text-[clamp(1.125rem,1.65vw,2rem)]">
                {composition.title}
              </h3>
              <p className="mt-6 text-xs leading-relaxed text-linen md:mt-[2vw] md:text-[clamp(0.6875rem,1vw,1.125rem)]">
                {composition.dimensions}
              </p>
              <a
                href={`mailto:info@artigiani.design?subject=${encodeURIComponent(`Artissimo 100 inquiry — ${composition.title}`)}`}
                aria-label={`Email us about this piece: ${composition.title}`}
                className={`mt-6 ${inquiryClassName}`}
              >
                Email us about this piece
              </a>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
