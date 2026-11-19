import Image from "next/image";
import { collectionHeading } from "../constants/fonts";
import natureInterior from "../../../public/images/nature-inspired-interior.jpg";
import { NatureInteriorParallax } from "./NatureInteriorParallax";

export function NatureInterior() {
  return (
    <section
      id="nature-interior"
      aria-labelledby="nature-interior-title"
      className="image-hover relative isolate overflow-hidden bg-background text-white"
    >
      <NatureInteriorParallax>
        {/* Keep the bottom 10% of the room outside the parallax frame. */}
        <div className="absolute inset-x-0 top-0 h-[calc(100%/0.9)]">
          <Image
            src={natureInterior}
            alt="Flowing wooden wall panels and sculptural wall art in an elegant living room."
            fill
            className="object-cover object-[42%_top] sm:object-top"
            sizes="100vw"
          />
        </div>
      </NatureInteriorParallax>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-b from-black/35 via-black/40 to-black/65"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-linear-to-r from-black/55 via-black/20 via-40% to-transparent to-75%"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[clamp(8rem,30svh,22rem)] bg-linear-to-b from-background via-background/70 via-30% to-transparent"
      />
      <div className="relative min-h-[calc(100svh-80px)] px-6 pt-[calc(50svh-40px)] pb-20 sm:px-[2.5%]">
        <h2
          id="nature-interior-title"
          className={`${collectionHeading.className} max-w-6xl text-[clamp(2.75rem,5.25vw,6.25rem)] leading-none font-normal tracking-[-0.04em] text-balance`}
        >
          Art Inspired By Nature
        </h2>
        <p className="mt-6 max-w-136 text-sm leading-relaxed font-normal tracking-[-0.02em] text-balance text-[#ececec] sm:mt-8 sm:text-base lg:text-lg">
          Bespoke Italian wall art and sculptural panels crafted from organic
          textures for luxury interiors.
        </p>
      </div>
    </section>
  );
}
