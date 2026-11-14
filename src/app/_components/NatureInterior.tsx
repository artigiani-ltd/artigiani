import Image from "next/image";
import { collectionHeading } from "../constants/fonts";
import natureInterior from "../../../public/nature-inspired-interior.jpg";

export function NatureInterior() {
  return (
    <section
      id="nature-interior"
      aria-labelledby="nature-interior-title"
      className="relative isolate overflow-hidden bg-background text-white"
    >
      <Image
        src={natureInterior}
        alt="Flowing wooden wall panels and sculptural wall art in an elegant living room."
        fill
        className="object-cover object-[42%_center] sm:object-center"
        sizes="100vw"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-b from-black/35 via-black/40 to-black/65"
      />
      <div className="relative min-h-svh px-6 pt-[50svh] pb-20 sm:px-[2.5%]">
        <h2
          id="nature-interior-title"
          className={`${collectionHeading.className} max-w-6xl text-[clamp(2.75rem,5.25vw,6.25rem)] leading-none font-normal tracking-[-0.04em] text-balance`}
        >
          Art Inspired By Nature
        </h2>
        <p className="mt-6 max-w-80 text-lg leading-[1.4] font-semibold tracking-[-0.02em] text-[#ececec] sm:mt-8 sm:max-w-100 sm:text-xl lg:max-w-108 lg:text-2xl">
          Bespoke Italian wall art and sculptural panels crafted from organic
          textures for luxury interiors.
        </p>
      </div>
    </section>
  );
}
