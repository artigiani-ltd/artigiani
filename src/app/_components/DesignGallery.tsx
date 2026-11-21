import { designs } from "../constants/designs";
import { ArtworkImage } from "./ArtworkImage";

export function DesignGallery() {
  return (
    <section
      id="gallery"
      aria-labelledby="designs-title"
      className="px-6 pt-20 pb-16 md:px-[2.5%] md:pt-[9vw] md:pb-[6vw]"
    >
      <div data-reveal className="mb-12 md:mb-[6.5vw]">
        <h2
          id="designs-title"
          className="collection-heading text-[clamp(3rem,5.25vw,6.5rem)] leading-none"
        >
          Our Designs
        </h2>
        <p className="mt-7 max-w-2xl text-sm leading-[1.6] text-[#52524e] md:mt-[2.5vw] md:max-w-[47%] md:text-[clamp(0.875rem,1.25vw,1.5rem)]">
          We invite you to be inspired by the endless compositions offered by
          “Artissimo 100” and to let your imagination explore the vast
          possibilities of creating a luxurious representation of nature,
          reflected in your own interiors.
        </p>
      </div>
      <div className="grid gap-x-[9.3%] gap-y-16 md:grid-cols-2 md:gap-y-[8vw] md:pr-[4.4%]">
        {designs.map((design) => (
          <figure
            key={design.number}
            className="min-w-0 md:even:translate-y-[9.5vw]"
          >
            <ArtworkImage
              src={design.image}
              alt={design.title}
              className="aspect-square"
              fit="contain"
              sizes="(min-width: 768px) 41vw, calc(100vw - 48px)"
            />
            <figcaption className="mt-6 md:mt-[3.5vw]">
              <div data-reveal>
                <p className="mb-4 text-xs text-[#686862] md:mb-[1.8vw]">
                  {design.number}
                </p>
                <h3 className="collection-heading text-[clamp(2.5rem,4.7vw,5.75rem)] leading-[1.05]">
                  {design.title}
                </h3>
              </div>
              <p
                data-reveal
                className="mt-5 text-sm leading-relaxed text-[#686862] md:mt-[2.5vw] md:text-[clamp(0.875rem,1.15vw,1.375rem)]"
              >
                {design.description}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
