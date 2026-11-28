import Link from "next/link";
import { designs } from "../constants/designs";
import { ArtworkImage } from "./ArtworkImage";

export function DesignGallery() {
  return (
    <section
      aria-labelledby="designs-title"
      className="px-6 pt-20 pb-16 md:px-[4.5%] md:pt-[9vw] md:pb-[6vw]"
    >
      <div
        data-reveal
        className="mb-10 grid gap-7 md:mb-[6vw] md:grid-cols-[0.8fr_1fr] md:items-center md:gap-[5vw]"
      >
        <h2
          id="designs-title"
          className="collection-heading text-[clamp(2.25rem,5.7vw,3.625rem)] leading-none tracking-normal!"
        >
          Our Designs
        </h2>
        <p className="max-w-2xl font-[Arial,sans-serif] text-sm leading-[1.6] text-[#606060]">
          We invite you to be inspired by the endless compositions offered by
          “Artissimo 100” and to let your imagination explore the vast
          possibilities of creating a luxurious representation of nature,
          reflected in your own interiors.
        </p>
      </div>
      <div className="grid gap-20 md:gap-[13vw] md:px-[6.5%]">
        {designs.map((design) => (
          <figure
            key={design.number}
            className="group grid min-w-0 gap-8 md:grid-cols-[minmax(0,2.18fr)_minmax(0,1fr)] md:items-center md:gap-[8.4%] md:even:grid-cols-[minmax(0,1fr)_minmax(0,2.18fr)]"
          >
            <div className="relative aspect-[1.17] min-w-0 md:group-even:col-start-2 md:group-even:row-start-1">
              <ArtworkImage
                src={design.image}
                alt={design.imageAlt}
                className="aspect-4/3 w-[85.5%]"
                sizes="(min-width: 768px) 43vw, calc(85.5vw - 41px)"
              />
              <p className="mt-2.5 max-w-[58%] text-[10px] leading-relaxed text-[#7c5f2d] uppercase md:text-[clamp(0.625rem,1.06vw,0.875rem)]">
                {design.caption}
              </p>
              <div className="absolute top-[36%] right-0 z-10 w-[41.3%] border-t-4 border-l-4 border-foreground md:border-t-8 md:border-l-8">
                <ArtworkImage
                  src={design.detailImage}
                  alt={design.detailAlt}
                  className="aspect-3/4"
                  sizes="(min-width: 768px) 20vw, calc(41.3vw - 24px)"
                />
              </div>
            </div>
            <figcaption
              data-reveal
              className="md:group-even:col-start-1 md:group-even:row-start-1"
            >
              <p className="collection-heading mb-2 text-base text-[#7c5f2d] md:text-[clamp(0.875rem,1.5vw,1.25rem)]">
                {design.number}
              </p>
              <h3 className="collection-heading text-[clamp(1.75rem,3.4vw,3rem)] leading-[1.05] tracking-normal!">
                {design.title}
              </h3>
              <p className="mt-4 max-w-xs text-sm leading-[1.5] text-[#4f4b45] md:mt-5 md:text-[clamp(0.6875rem,1.17vw,1rem)]">
                {design.description}
              </p>
              <Link
                href={`/designs/${design.slug}`}
                aria-label={`View designs for the ${design.title.toLowerCase()}`}
                className="mt-5 inline-flex min-h-11 items-center text-[10px] text-[#7c5f2d] uppercase underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7c5f2d] md:mt-6 md:text-[clamp(0.625rem,1.06vw,0.875rem)]"
              >
                View this space
              </Link>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
