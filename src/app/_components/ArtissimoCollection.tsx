import { collectionDesigns } from "../constants/artissimo-collection";
import { ArtworkGrid } from "./ArtworkGrid";
import { InteriorApplications } from "./InteriorApplications";

export function ArtissimoCollection() {
  return (
    <section
      id="products"
      aria-labelledby="collection-title"
      className="px-6 pt-16 pb-10 md:px-[2.4%] md:pt-[5.5vw] md:pb-[2.7vw]"
    >
      <div className="mb-10 flex flex-wrap items-start justify-between gap-6 md:mb-[2.7vw]">
        <div data-reveal>
          <h2
            id="collection-title"
            className="collection-heading text-[clamp(3.5rem,5.5vw,7rem)] leading-none"
          >
            Artissimo<span className="text-[0.6em]">100</span>
          </h2>
          <p className="mt-5 max-w-90 text-sm leading-relaxed text-neutral-500 lg:max-w-[26vw] lg:text-[1vw]">
            Hand-finished modular compositions inspired by the natural movement
            of water, sand, and botanical forms.
          </p>
        </div>
        <a
          href="mailto:info@artigiani.design?subject=Artissimo%20project%20inquiry"
          className="inline-flex min-h-11 items-center rounded-full border border-neutral-400 px-5 text-sm transition-colors hover:bg-black hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4"
        >
          Inquire for Project
        </a>
      </div>
      <ArtworkGrid
        artworks={collectionDesigns}
        imageClassName="max-md:aspect-4/3"
      />
      <InteriorApplications />
    </section>
  );
}
