import { InstallationCarousel } from "./InstallationCarousel";

export function SpatialApplications() {
  return (
    <section
      aria-labelledby="places-title"
      className="px-6 pt-12 pb-20 md:px-[2.5%] md:pt-[11vw] md:pb-[7vw]"
    >
      <div className="mb-12 grid gap-7 md:mb-[7vw] md:grid-cols-[2fr_1fr] md:gap-[6vw]">
        <h2
          id="places-title"
          data-reveal
          className="collection-heading text-[clamp(2.75rem,4.2vw,5rem)] leading-none"
        >
          REAL PLACES
        </h2>
        <p
          data-reveal
          className="max-w-lg text-sm leading-[1.6] text-linen md:pr-[4vw] md:text-[clamp(0.875rem,1.25vw,1.5rem)]"
        >
          Designed to transform residential and commercial architecture. Each
          undulating modular panel integrates seamlessly into living spaces,
          private suites, and luxury hospitality settings.
        </p>
      </div>
      <InstallationCarousel />
    </section>
  );
}
