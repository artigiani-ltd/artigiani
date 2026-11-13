import type { CollectionArtwork } from "../types/artwork";
import { ArtworkImage } from "./ArtworkImage";

type ArtworkGridProps = {
  artworks: readonly CollectionArtwork[];
  imageClassName?: string;
};

export function ArtworkGrid({ artworks, imageClassName = "" }: ArtworkGridProps) {
  return (
    <div className="grid gap-x-4 gap-y-10 sm:grid-cols-2 md:grid-cols-4 md:gap-x-[0.6vw] md:gap-y-[4vw]">
      {artworks.map((artwork) => (
        <figure key={artwork.title} className={`min-w-0 ${artwork.layout}`}>
          <ArtworkImage
            name={artwork.image}
            alt={artwork.title}
            className={`${artwork.ratio} ${imageClassName}`}
            sizes={artwork.sizes}
          />
          <figcaption data-reveal className="mt-3 text-xs leading-relaxed lg:text-[1vw]">
            <h3 className="font-semibold">{artwork.title}</h3>
            <p className="mt-1 text-neutral-500">{artwork.description}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
