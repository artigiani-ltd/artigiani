import Image from "next/image";
import waveInstallation from "../../../public/images/wave-gallery.webp";

export function CollectionIntro() {
  return (
    <section
      id="gallery"
      aria-labelledby="collection-intro-title"
      className="grid scroll-mt-24 gap-12 px-6 pt-16 pb-4 md:grid-cols-2 md:items-center md:gap-[5vw] md:px-[6.5%] md:pt-[7.5vw] md:pb-[4vw]"
    >
      <div data-reveal>
        <h2
          id="collection-intro-title"
          className="collection-heading text-[clamp(4rem,8.5vw,8rem)] leading-none italic"
        >
          <span className="block">The</span>
          <span className="block">Collection</span>
        </h2>
        <div className="mt-6 max-w-72 space-y-5 text-sm leading-relaxed md:mt-7 md:max-w-[26vw] md:text-[clamp(0.75rem,1.2vw,1rem)]">
          <p>Artissimo 100 is a system of carved modules in seasoned wood.</p>
          <p>
            Four designs, each shown as a plate: the piece, its compositions,
            and the rooms it lives in.
          </p>
        </div>
      </div>
      <div data-reveal="image" className="overflow-hidden">
        <Image
          src={waveInstallation}
          alt="A flowing composition of carved wood modules above a curved brass reception desk."
          sizes="(min-width: 768px) 41vw, calc(100vw - 48px)"
          className="h-auto w-full"
        />
      </div>
    </section>
  );
}
