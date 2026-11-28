import { InstallationCarousel } from "./InstallationCarousel";

export function SpatialApplications() {
  return (
    <section
      aria-labelledby="places-title"
      className="px-6 pt-12 pb-24 md:px-[7%] md:pt-[7vw] md:pb-[20vw]"
    >
      <div className="mx-auto mb-12 grid w-full gap-7 md:mb-[9vw] md:w-[93%] md:grid-cols-2 md:gap-[3vw]">
        <h2
          id="places-title"
          data-reveal
          className="collection-heading text-section-title leading-none"
        >
          Delivered
          <br />
          Products
        </h2>
        <p
          data-reveal
          className="max-w-lg text-body leading-relaxed md:justify-self-end"
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
