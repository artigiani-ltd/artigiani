import Image, { type StaticImageData } from "next/image";

type ArtworkImageProps = {
  src: StaticImageData;
  alt: string;
  className: string;
  sizes: string;
  fit?: "cover" | "contain";
};

export function ArtworkImage({
  src,
  alt,
  className,
  sizes,
  fit = "cover",
}: ArtworkImageProps) {
  return (
    <div
      data-reveal="image"
      className={`artwork-image relative overflow-hidden bg-background ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className={fit === "contain" ? "object-contain" : "object-cover"}
      />
    </div>
  );
}
