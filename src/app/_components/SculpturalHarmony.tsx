import { ArtworkImage } from "./ArtworkImage";

export function SculpturalHarmony() {
  return (
    <section
      id="about"
      aria-labelledby="harmony-title"
      className="px-6 py-20 md:px-[2.4%] md:pt-[7.2vw] md:pb-[7vw]"
    >
      <div className="mb-12 grid gap-8 md:mb-[5.5vw] md:grid-cols-3 md:gap-[2.7vw]">
        <h2
          id="harmony-title"
          data-reveal
          className="collection-heading text-[clamp(3rem,5.4vw,6.5rem)] leading-none md:col-span-2"
        >
          Sculptural Harmony
        </h2>
        <p
          data-reveal
          className="text-base leading-[1.6] text-neutral-600 lg:text-[1.3vw]"
        >
          Founded by architect and artist <strong>Janan Khammo</strong>,{" "}
          <strong>Artigiani</strong> operates at the intersection of sculpture,
          design, and interior architecture. Based in Valdagno (Vicenza), Italy,
          we design and handcraft bespoke sculptural wall installations and
          modular panels.
        </p>
      </div>
      <div className="grid items-start gap-12 md:grid-cols-2 md:gap-[2.7vw]">
        <div>
          <ArtworkImage
            name="reception"
            alt="Golden sculptural wall installation above a curved brass reception desk."
            className="aspect-[1.02]"
          />
          <div data-reveal className="mt-12 md:mt-[13vw]">
            <h3 className="collection-heading text-[clamp(2.5rem,4.2vw,5rem)] leading-[1.25] uppercase">
              Book an
              <br />
              appointment
            </h3>
            <a
              href="mailto:info@artigiani.design?subject=Private%20studio%20consultation"
              className="mt-5 inline-flex min-h-11 items-center text-sm font-semibold uppercase underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 md:mt-7 lg:text-[1.3vw]"
            >
              Request a consultation
            </a>
          </div>
        </div>
        <div>
          <dl className="mb-10 md:mb-[5.8vw]">
            {[
              ["100%", "Handcrafted in Italy"],
              ["04", "Signature collections"],
              ["01", "Unique made-to-order vision"],
            ].map(([value, label]) => (
              <div
                key={label}
                data-reveal
                className="flex min-h-24 items-center justify-between gap-6 border-b border-neutral-300 py-5 first:pt-0 md:min-h-[7vw] md:py-[1.6vw]"
              >
                <dt className="order-2 text-right text-xs uppercase lg:text-[1.2vw]">
                  {label}
                </dt>
                <dd className="text-4xl font-semibold tracking-tighter lg:text-[3.1vw]">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
          <div className="grid grid-cols-2 items-stretch gap-4 md:gap-[1.3vw]">
            <div>
              <div className="grid gap-4 md:gap-[1.3vw]">
                <ArtworkImage
                  name="wave-panels"
                  alt="Hand-finished pale wood wave panels."
                  className="aspect-[1.65]"
                  sizes="(max-width: 767px) 50vw, 23vw"
                />
                <ArtworkImage
                  name="bedroom-front"
                  alt="Symmetrical walnut waves above a bed."
                  className="aspect-[1.8]"
                  sizes="(max-width: 767px) 50vw, 23vw"
                />
              </div>
              <div data-reveal className="mt-8 text-right md:mt-[7.5vw]">
                <h3 className="text-sm font-semibold uppercase lg:text-[1.3vw]">
                  Valdagno, Italy
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-neutral-500 lg:text-[1.2vw]">
                  Experience the tactile warmth of seasoned timber and sculpted
                  stone in person. Schedule a private consultation to discuss
                  custom commissions and bespoke architectural installations.
                </p>
              </div>
            </div>
            <ArtworkImage
              name="flower"
              alt="Detail of sculpted walnut petals with polished metallic contours."
              className="h-full min-h-80"
              imageClassName="object-left"
              sizes="(max-width: 767px) 50vw, 23vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
