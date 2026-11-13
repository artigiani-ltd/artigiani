import { collectionInstallations } from "../constants/artissimo-collection";
import { ArtworkGrid } from "./ArtworkGrid";

export function InteriorApplications() {
  return (
    <section
      id="gallery"
      className="mt-20 md:mt-[6vw]"
      aria-labelledby="interior-applications-title"
    >
      <div className="mb-10 grid items-end gap-6 md:mb-[6vw] md:grid-cols-[0.9fr_1.1fr]">
        <div data-reveal>
          <p className="mb-5 text-xs uppercase text-neutral-500 lg:text-[1vw]">Case studies</p>
          <h2 id="interior-applications-title" className="collection-heading text-[clamp(2.75rem,4.2vw,5rem)] leading-[1.25] uppercase">
            Interior<br />Applications
          </h2>
        </div>
        <p data-reveal className="text-sm leading-relaxed text-neutral-500 lg:text-[1.2vw]">
          Bespoke architectural installations across residences, master suites,
          and hotel spaces.
        </p>
      </div>
      <ArtworkGrid artworks={collectionInstallations} />
    </section>
  );
}
