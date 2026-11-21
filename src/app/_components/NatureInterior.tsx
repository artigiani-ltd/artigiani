import Image from "next/image";
import interior from "../../../public/images/living-room.webp";
import { ScrollParallax } from "./ScrollParallax";

export function NatureInterior() {
  return (
    <section
      aria-labelledby="walls-title"
      className="relative isolate overflow-hidden text-[#f8f7f3]"
    >
      <div data-reveal="image">
        <ScrollParallax className="h-72 sm:h-[23.5vw] sm:min-h-64">
          <Image
            src={interior}
            alt="Sculptural walnut wave panels and a flower composition in a living room."
            fill
            sizes="100vw"
            className="object-cover object-[center_40%]"
          />
        </ScrollParallax>
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-black/40"
      />
      <h2
        id="walls-title"
        data-reveal
        className="collection-heading absolute right-6 bottom-6 left-6 text-[clamp(3rem,5.25vw,6.5rem)] leading-none md:inset-x-[2.5%] md:bottom-[3vw]"
      >
        Walls in Motion
      </h2>
    </section>
  );
}
