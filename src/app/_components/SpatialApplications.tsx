import { ArtworkImage } from "./ArtworkImage";

export function SpatialApplications() {
  return (
    <section aria-labelledby="spatial-title">
      <div className="grid gap-8 px-6 pt-12 pb-14 md:grid-cols-3 md:gap-[2.7vw] md:px-[2.4%] md:pt-[5vw] md:pb-[4.5vw]">
        <div data-reveal className="md:col-span-2">
          <p className="mb-5 text-xs text-neutral-500 lg:text-[1vw]">01</p>
          <h2 id="spatial-title" className="collection-heading text-[clamp(2.75rem,4.2vw,5rem)] leading-[1.25] uppercase">
            Spatial<br />Applications
          </h2>
        </div>
        <p data-reveal className="text-base leading-[1.6] text-neutral-600 lg:text-[1.3vw]">
          Designed to transform residential and commercial architecture. Each
          undulating modular panel integrates seamlessly into living spaces,
          private suites, and luxury hospitality settings.
        </p>
      </div>
      <div className="relative isolate text-white">
        <ArtworkImage
          name="bedroom-side"
          alt="A master suite with sculptural walnut wall panels and a floral mirror."
          className="h-[75svh] min-h-120 md:h-[50vw]"
          sizes="100vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/35 via-transparent to-transparent" />
        <div data-reveal className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-6 px-6 py-8 md:px-[2.4%] md:py-[2.7vw]">
          <div>
            <h3 className="collection-heading text-[clamp(2.25rem,4.2vw,5rem)] leading-tight">Artissimo 100 — Master Suite</h3>
            <a href="#products" className="mt-5 inline-flex min-h-11 items-center gap-8 text-sm focus-visible:outline-2 focus-visible:outline-offset-4 md:mt-8">
              View Artwork <span aria-hidden="true" className="flex size-10 items-center justify-center rounded-full bg-white text-black">→</span>
            </a>
          </div>
          <a href="#gallery" className="inline-flex min-h-11 items-center gap-8 text-sm focus-visible:outline-2 focus-visible:outline-offset-4">
            Visit Gallery <span aria-hidden="true" className="flex size-10 items-center justify-center rounded-full bg-white text-black">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
