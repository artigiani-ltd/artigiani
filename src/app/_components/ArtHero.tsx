import Image from "next/image";
import { scenes } from "../constants/hero-scenes";
import { HeroCaption } from "./HeroCaption";
import { HeroPlayback } from "./HeroPlayback";

export function ArtHero() {
  return (
    <HeroPlayback>
      <h1 id="hero-title" className="sr-only">
        Artissimo 100 — art inspired by nature
      </h1>
      <p className="sr-only">
        An abstract and luxurious interpretation of nature. Two framed sculptural
        reliefs with flowing wood grain and blue accents, shown in monochrome and
        natural color.
      </p>

      <div className="hero-copy">
        <div className="hero-captions" aria-hidden="true">
          {scenes.map(({ id, lines }) => (
            <HeroCaption key={id} sceneId={id} lines={lines} />
          ))}
        </div>
      </div>

      <div className="hero-artwork" aria-hidden="true">
        {scenes.map(({ id, image }) => (
          <div key={id} className="hero-art-scene" data-scene={id}>
            <Image
              className="hero-panel"
              src={image.src}
              alt=""
              width={image.width}
              height={image.height}
              preload={id === "intro"}
              loading={id === "intro" ? undefined : "eager"}
              fetchPriority={id === "intro" ? undefined : "low"}
              sizes="(max-width: 767px) calc(100vw - 128px), 60vw"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </HeroPlayback>
  );
}
