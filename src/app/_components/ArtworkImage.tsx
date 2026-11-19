import Image from "next/image";

type ArtworkImageProps = {
  name: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  sizes?: string;
};

export function ArtworkImage({
  name,
  alt,
  className = "aspect-4/3",
  imageClassName = "",
  sizes = "(max-width: 767px) 100vw, 50vw",
}: ArtworkImageProps) {
  return (
    <div
      data-reveal="image"
      className={`artwork-image image-hover relative overflow-hidden bg-[#e8e5df] ${className}`}
    >
      <Image
        src={`/images/${name}.webp`}
        alt={alt}
        fill
        sizes={sizes}
        className={`object-cover ${imageClassName}`}
      />
    </div>
  );
}
