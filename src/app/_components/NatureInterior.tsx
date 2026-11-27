import Image from "next/image";
import interior from "../../../public/images/living-room.webp";
import { ScrollParallax } from "./ScrollParallax";

export function NatureInterior() {
  return (
    <section
      aria-labelledby="walls-title"
      className="relative isolate grid min-h-96 overflow-hidden bg-background text-foreground sm:min-h-[max(22rem,32vw)]"
    >
      <div data-reveal="image" className="absolute inset-0">
        <ScrollParallax className="h-full">
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
        className="pointer-events-none absolute inset-0 bg-background/55"
      />
      <div
        data-reveal
        className="relative mt-12 self-end px-6 pb-6 md:px-[2.5%] md:pb-[3vw]"
      >
        <h2
          id="walls-title"
          className="collection-heading text-section-title leading-none"
        >
          Walls in Motion
        </h2>
        <p className="mt-3 max-w-xl text-body leading-relaxed text-pretty">
          Undulating wall sculptures in natural seasoned wood, composed for your
          own interiors.
        </p>
      </div>
    </section>
  );
}
