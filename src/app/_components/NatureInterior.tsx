import Image from "next/image";
import banner from "../../../public/images/banner-gradient.jpg";
import { ScrollParallax } from "./ScrollParallax";

export function NatureInterior() {
  return (
    <section
      aria-labelledby="walls-title"
      className="relative isolate grid min-h-96 overflow-hidden bg-background text-foreground sm:min-h-[max(22rem,32vw)]"
    >
      <div data-reveal="image" className="absolute inset-0">
        <ScrollParallax className="h-full" travel={0.65}>
          <Image
            src={banner}
            alt="Three sculptural wood panels with flowing wave patterns."
            fill
            sizes="100vw"
            className="object-cover object-[center_40%]"
          />
        </ScrollParallax>
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-linear-to-b from-background/95 via-transparent via-42% to-foreground"
      />
      <div
        data-reveal
        className="relative self-start px-6 pt-16 md:px-[4.5%] md:pt-20"
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
