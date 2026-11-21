import Image from "next/image";
import timberDetail from "../../../public/images/nature-timber-detail.webp";
import { editorial } from "../constants/fonts";
import { ScrollParallax } from "./ScrollParallax";

export function NatureInterpretation() {
  return (
    <section
      id="about"
      aria-labelledby="nature-interpretation-title"
      className="bg-[#f8f7f3] px-6 py-20 text-[#242421] md:px-[6.35%] md:pt-[8vw] md:pb-[13vw]"
    >
      <h2
        id="nature-interpretation-title"
        data-reveal
        className={`${editorial.className} mb-10 text-center text-[clamp(2.75rem,7vw,4.5rem)] leading-[1.05] font-normal tracking-[-0.035em] md:mb-[7.2vw] md:text-[5.25vw]`}
      >
        <span className="block">A Luxurious </span>
        <span className="block">Interpretation of Nature</span>
      </h2>
      <div className="grid gap-8 md:grid-cols-[1fr_1.14fr_1fr] md:gap-x-[4vw] md:gap-y-0">
        <div
          data-reveal="image"
          className="relative mx-auto w-full max-w-100 md:col-start-2 md:row-start-1 md:max-w-none"
        >
          <ScrollParallax className="aspect-4/5 md:aspect-auto md:h-[44vw]">
            <Image
              src={timberDetail}
              alt="Sculpted waves of warm Italian timber with deep blue inlays."
              fill
              sizes="(min-width: 768px) 30vw, (min-width: 448px) 400px, calc(100vw - 48px)"
              className="object-cover"
            />
          </ScrollParallax>
        </div>
        <p
          data-reveal
          className="text-base leading-[1.8] md:col-start-1 md:row-start-1 md:self-start md:text-right md:text-[clamp(0.75rem,1.35vw,1.5rem)] md:leading-[1.67]"
        >
          Nature continues to inspire humanity with an infinite variety of forms
          and colours, and so does “Artissimo 100”. Inspired by the beautiful
          undulating organic shapes and forms of Water, Sand, Plants and
          Flowers, it is a unique vision of art, designed to bring nature’s
          infinite compositions into your own interiors in a luxurious style.
        </p>
        <p
          data-reveal
          className="text-base leading-[1.8] md:col-start-3 md:row-start-1 md:self-end md:pb-[2.6vw] md:text-[clamp(0.75rem,1.35vw,1.5rem)] md:leading-[1.67]"
        >
          Artissimo 100 is formed by a collection of modules, designed to be
          harmoniously and precisely joined together, offering you a great
          opportunity to rebuild the splendid motifs of nature in a modern and
          abstract work of art.
        </p>
      </div>
    </section>
  );
}
