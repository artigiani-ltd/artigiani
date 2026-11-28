import Image, { type StaticImageData } from "next/image";
import dubaiDetail from "../../../../public/images/samad-dubai-detail.webp";
import dubaiDining from "../../../../public/images/samad-dubai-dining.webp";
import dubaiEntrance from "../../../../public/images/samad-dubai-entrance.webp";
import jeddahInterior from "../../../../public/images/samad-jeddah-interior.webp";
import jeddahDining from "../../../../public/images/samad-jeddah-dining.webp";
import jeddahLanterns from "../../../../public/images/samad-jeddah-lanterns.webp";
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
      <div className="mt-10 space-y-14 md:mt-20 md:space-y-20">
        <ProjectCard
          name="Samad Restaurant"
          location="Dubai"
          images={[
            {
              src: dubaiDetail,
              alt: "Decorative relief panels and stained-glass woodwork above the staircase at Samad Restaurant in Dubai",
            },
            {
              src: dubaiDining,
              alt: "Dining room with brick arches, carved wooden balconies, and blue patterned seating at Samad Restaurant in Dubai",
            },
            {
              src: dubaiEntrance,
              alt: "Carved wooden entrance and reception desk beneath brick arches at Samad Restaurant in Dubai",
            },
          ]}
        />
        <ProjectCard
          name="Samad Restaurant"
          location="Jeddah"
          images={[
            {
              src: jeddahInterior,
              alt: "Ornate brass lanterns above the arched brick dining hall at Samad Restaurant in Jeddah",
            },
            {
              src: jeddahDining,
              alt: "Set dining tables beneath brick arches and green pendant lights at Samad Restaurant in Jeddah",
            },
            {
              src: jeddahLanterns,
              alt: "Pierced brass lanterns lining a brick-vaulted corridor at Samad Restaurant in Jeddah",
            },
          ]}
        />
      </div>
    </section>
  );
}

function ProjectCard({
  name,
  location,
  images,
}: {
  name: string;
  location: string;
  images: { src: StaticImageData; alt: string }[];
}) {
  return (
    <figure>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-[2.1fr_1fr_1fr] md:gap-8">
        {images.map(({ src, alt }, index) => (
          <div
            key={src.src}
            data-reveal
            className={index === 0 ? "sm:col-span-2 md:col-span-1" : undefined}
          >
            <Image
              src={src}
              alt={alt}
              className="h-auto w-full object-cover sm:h-72 lg:h-96"
              sizes={
                index === 0
                  ? "(min-width: 1280px) 574px, (min-width: 768px) 50vw, calc(100vw - 48px)"
                  : "(min-width: 1280px) 273px, (min-width: 768px) 25vw, (min-width: 640px) 50vw, calc(100vw - 48px)"
              }
            />
          </div>
        ))}
      </div>
      <figcaption data-reveal className="mt-4">
        <h3 className={`${collectionHeading.className} text-xl`}>{name}</h3>
        <p className={`${editorial.className} mt-2 text-base text-linen`}>
          {location}
        </p>
      </figcaption>
    </figure>
  );
}
