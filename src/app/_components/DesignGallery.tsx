import Link from "next/link";
import { designs } from "../constants/designs";
import { ArtworkImage } from "./ArtworkImage";

export function DesignGallery() {
  return (
    <section
      id="gallery"
      aria-labelledby="designs-title"
      className="px-6 pt-20 pb-16 md:px-[4.5%] md:pt-[9vw] md:pb-[6vw]"
    >
      <div
        data-reveal
        className="mb-14 grid gap-7 md:mb-[14vw] md:grid-cols-2 md:items-start md:gap-[5vw]"
      >
        <h2
          id="designs-title"
          className="collection-heading text-section-title leading-none"
        >
          Our Designs
        </h2>
        <p className="max-w-2xl text-body leading-relaxed">
          We invite you to be inspired by the endless compositions offered by
          “Artissimo 100” and to let your imagination explore the vast
          possibilities of creating a luxurious representation of nature,
          reflected in your own interiors.
        </p>
      </div>
      <div className="grid gap-20 md:gap-[13vw] md:px-[4%]">
        {designs.map((design) => (
          <figure
            key={design.number}
            className="group grid min-w-0 gap-8 md:grid-cols-[minmax(0,1.9fr)_minmax(0,1fr)] md:items-center md:gap-[8%] md:even:grid-cols-[minmax(0,1fr)_minmax(0,1.9fr)]"
          >
            <div className="min-w-0 md:group-even:col-start-2 md:group-even:row-start-1">
              <ArtworkImage
                src={design.image}
                alt={design.imageAlt}
                className="aspect-4/3 w-[85%]"
                sizes="(min-width: 768px) 43vw, calc(85vw - 41px)"
              />
              <div className="relative z-10 mt-[-32%] ml-auto w-[42%] border-4 border-foreground md:border-8">
                <ArtworkImage
                  src={design.detailImage}
                  alt={design.detailAlt}
                  className="aspect-3/4"
                  sizes="(min-width: 768px) 21vw, calc(42vw - 28px)"
                />
              </div>
            </div>
            <figcaption
              data-reveal
              className="md:group-even:col-start-1 md:group-even:row-start-1"
            >
              <p className="mb-3 text-xs tracking-widest text-[#7c5f2d] md:mb-5">
                {design.number}
              </p>
              <h3 className="collection-heading text-[clamp(1.75rem,3.4vw,3rem)] leading-[1.05]">
                {design.title}
              </h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed md:mt-4 md:text-base">
                {design.description}
              </p>
              <Link
                href={`/designs/${design.slug}`}
                aria-label={`View designs for the ${design.title.toLowerCase()}`}
                className="mt-4 inline-flex min-h-11 items-center text-xs tracking-[0.12em] text-[#7c5f2d] uppercase underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7c5f2d] md:mt-6"
              >
                View the designs
              </Link>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
