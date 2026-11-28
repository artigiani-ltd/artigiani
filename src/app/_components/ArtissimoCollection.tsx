import { compositionFamilies } from "../constants/compositions";
import { editorial } from "../constants/fonts";
import { ArtworkImage } from "./ArtworkImage";

const catalogueLinkClassName =
  "inline-flex min-h-11 items-center text-xs uppercase underline underline-offset-4 hover:decoration-2 focus-visible:outline-2 focus-visible:outline-offset-4";

export function ArtissimoCollection() {
  return (
    <section
      id="products"
      aria-labelledby="compositions-title"
      className="scroll-mt-24 px-6 pt-20 pb-8 text-[#7c5f2d] md:px-[4%] md:pt-[14vw] md:pb-[4vw]"
    >
      <div
        data-reveal
        className="mx-auto mb-14 max-w-3xl text-center md:mb-[6vw]"
      >
        <p className="text-xs uppercase">Various compositions</p>
        <h2
          id="compositions-title"
          className="collection-heading mt-8 text-section-title leading-tight text-background"
        >
          The Artissimo 100 Collection
        </h2>
        <p className="mx-auto mt-7 max-w-xl text-sm leading-relaxed">
          Modular configurations available in standard dimensions or
          commissioned to your exact architectural specifications.
        </p>
        <a
          href="/artissimo-compositions.pdf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View all compositions in the catalogue (PDF, opens in a new tab)"
          className="mt-7 inline-flex min-h-11 items-center justify-center border border-[#7c5f2d] px-5 text-[10px] tracking-[0.1em] text-[#7c5f2d] uppercase transition-colors hover:bg-[#7c5f2d] hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 motion-reduce:transition-none"
        >
          View all compositions
        </a>
      </div>
      <div>
        {compositionFamilies.map((family, index) => (
          <div
            key={family.name}
            className="grid gap-7 border-t border-[#7c5f2d] py-10 md:grid-cols-[1.6fr_3fr] md:gap-[3vw] md:py-[4.5vw]"
          >
            <div data-reveal>
              <p className={`${editorial.className} text-lg`}>
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3
                className={`${editorial.className} mt-2 text-[clamp(2.25rem,4.5vw,4rem)] leading-none text-background`}
              >
                {family.name}
              </h3>
              <p className={`${editorial.className} mt-3 text-xl`}>
                {family.inspiration}
              </p>
              <a
                href={`/artissimo-compositions.pdf#page=${family.cataloguePage}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View all ${family.count} ${family.name} compositions (PDF, opens in a new tab)`}
                className={`mt-5 md:mt-[3.5vw] ${catalogueLinkClassName}`}
              >
                View all {family.count} {family.name} compositions&nbsp;→
              </a>
            </div>
            <div className="grid grid-cols-1 gap-x-5 gap-y-8 min-[480px]:grid-cols-3 md:gap-x-[2vw]">
              {family.pieces.map((piece) => (
                <figure key={piece.number} className="min-w-0">
                  <ArtworkImage
                    src={piece.image}
                    alt={`${family.name} composition ${piece.number.toUpperCase()} — catalogue drawing`}
                    className="aspect-square border border-[#7c5f2d] bg-white [&_img]:p-[8%]"
                    fit="contain"
                    sizes="(min-width: 768px) 19vw, (min-width: 480px) 29vw, calc(100vw - 48px)"
                  />
                  <figcaption
                    data-reveal
                    className="mt-4 text-xs leading-relaxed tracking-[0.08em]"
                  >
                    <h4 className="font-semibold uppercase">
                      No. {piece.number}
                    </h4>
                    <p className="mt-2">{piece.millimeters} mm</p>
                    <p className="mt-1">{piece.inches} in</p>
                    <p className="mt-2">Price on request</p>
                    <a
                      href={`mailto:info@artigiani.design?subject=${encodeURIComponent(`Artissimo 100 inquiry — ${family.name} ${piece.number}`)}`}
                      aria-label={`Inquire about ${family.name} composition ${piece.number}`}
                      className={`mt-2 ${catalogueLinkClassName}`}
                    >
                      Inquire
                    </a>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
