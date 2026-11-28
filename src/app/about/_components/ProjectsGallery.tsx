import { collectionHeading, editorial } from "../../constants/fonts";

export function ProjectsGallery() {
  return (
    <section aria-labelledby="projects-title" className="mt-20 md:mt-32">
      <div
        data-reveal
        className="grid items-center gap-6 md:grid-cols-[1fr_2.5fr] md:gap-12"
      >
        <h2
          id="projects-title"
          className="collection-heading text-section-title text-gold"
        >
          Projects
        </h2>
        <p className="text-sm leading-relaxed text-linen">
          Among his significant achievements are the acclaimed Samad Restaurants
          in Dubai and Jeddah, and particularly Shanasheel Restaurant in Dubai,
          a landmark project that celebrates the richness of Iraqi architectural
          heritage through a sophisticated contemporary interpretation.
        </p>
      </div>
      <div className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 md:mt-20 md:grid-cols-[2.1fr_1fr_1fr]">
        <ProjectCard name="Shanasheel Restaurant" location="Dubai" featured />
        <ProjectCard name="Samad Restaurant" location="Dubai" />
        <ProjectCard name="Samad Restaurant" location="Jeddah" />
      </div>
      <div className="mt-10 grid gap-8 sm:grid-cols-[1fr_2.75fr] md:mt-14">
        <ProjectPlaceholder />
        <ProjectPlaceholder />
      </div>
    </section>
  );
}

function ProjectCard({
  name,
  location,
  featured = false,
}: {
  name: string;
  location: string;
  featured?: boolean;
}) {
  return (
    <figure className={featured ? "sm:col-span-2 md:col-span-1" : undefined}>
      <ProjectPlaceholder />
      <figcaption data-reveal className="mt-4">
        <h3 className={`${collectionHeading.className} text-xl`}>{name}</h3>
        <p className={`${editorial.className} mt-2 text-base text-linen`}>
          {location}
        </p>
      </figcaption>
    </figure>
  );
}

function ProjectPlaceholder() {
  return (
    <div
      data-reveal
      className="flex h-64 items-center justify-center border border-gold/25 bg-surface px-6 sm:h-72 lg:h-96"
    >
      <p className="text-center text-xs tracking-[0.12em] text-linen uppercase">
        Project photography to follow
      </p>
    </div>
  );
}
