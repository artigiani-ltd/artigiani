import type { StaticImageData } from "next/image";
import { ArtworkImage } from "../../_components/ArtworkImage";

type ArchitecturalDetailsProps = {
  title: string;
  image: StaticImageData;
  imageAlt: string;
  perspectiveImage: StaticImageData;
  perspectiveAlt: string;
};

export function ArchitecturalDetails({
  title,
  image,
  imageAlt,
  perspectiveImage,
  perspectiveAlt,
}: ArchitecturalDetailsProps) {
  // shortcut: crops reuse available renders; replace them when the Framer source images are supplied.
  const views = [
    {
      image: perspectiveImage,
      alt: perspectiveAlt,
      caption: "Interior perspective",
      position: "",
      wide: false,
    },
    {
      image,
      alt: imageAlt,
      caption: "Architectural composition",
      position: "",
      wide: true,
    },
    {
      image,
      alt: `Detail of the ${title.toLowerCase()} wall composition.`,
      caption: "Sculptural detail · cropped view",
      position: "[&_img]:object-top",
      wide: true,
    },
    {
      image: perspectiveImage,
      alt: `Detail from the ${title.toLowerCase()} interior perspective.`,
      caption: "Material detail · cropped view",
      position: "[&_img]:object-right",
      wide: false,
    },
  ];

  return (
    <section aria-labelledby="details-title" className="mt-14 md:mt-20">
      <div
        data-reveal
        className="mb-8 grid gap-5 border-b border-foreground/30 pb-7 md:mb-12 md:grid-cols-[1.55fr_1fr] md:items-center md:gap-[6%]"
      >
        <h2
          id="details-title"
          className="collection-heading text-[clamp(1.75rem,2.8vw,2.75rem)] leading-[1.1]"
        >
          Architectural Details
          <br />
          &amp; Perspectives
        </h2>
        <p className="max-w-sm text-xs leading-relaxed">
          Close studies of sculptural craftsmanship and the interplay between
          form, light, and space.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-5">
        {views.map((view) => (
          <figure
            key={view.caption}
            className={view.wide ? "sm:col-span-2" : ""}
          >
            <ArtworkImage
              src={view.image}
              alt={view.alt}
              className={`aspect-4/3 sm:aspect-auto sm:h-[clamp(16rem,28vw,28rem)] ${view.position}`}
              sizes={
                view.wide
                  ? "(min-width: 768px) 57vw, (min-width: 640px) 60vw, calc(100vw - 48px)"
                  : "(min-width: 640px) 29vw, calc(100vw - 48px)"
              }
            />
            <figcaption
              data-reveal
              className="mt-3 text-[10px] leading-relaxed tracking-wider text-linen uppercase"
            >
              {view.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
