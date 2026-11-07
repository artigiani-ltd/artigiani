"use client";

import Image from "next/image";
import { type CSSProperties, useState } from "react";

const heroDuration = 24;

// Match the first fully visible caption of each scene in globals.css.
const scenes = [
  {
    id: "intro",
    lines: ["Artissimo 100"],
    start: 0.22,
    image: { src: "/images/artwork-scene-1.png", width: 3799, height: 1853 },
  },
  {
    id: "nature",
    lines: ["Art inspired by nature"],
    start: 0.5,
    image: { src: "/images/artwork-scene-2.png", width: 3805, height: 1861 },
  },
  {
    id: "final",
    lines: ["An abstract and luxurious", "interpretation of nature"],
    start: 0.72,
    image: { src: "/images/artwork-scene-3.png", width: 3800, height: 1858 },
  },
] as const;

type SceneId = (typeof scenes)[number]["id"];

export function ArtHero() {
  const [loadedScenes, setLoadedScenes] = useState<Record<SceneId, boolean>>({
    intro: false,
    nature: false,
    final: false,
  });
  const [playback, setPlayback] = useState({
    scene: null as (typeof scenes)[number] | null,
    revision: 0,
  });

  function selectScene(scene: (typeof scenes)[number]) {
    setPlayback((previous) => ({ scene, revision: previous.revision + 1 }));
  }

  function finishLoadingScene(scene: SceneId) {
    setLoadedScenes((previous) => ({ ...previous, [scene]: true }));
  }

  return (
    <section
      className="art-hero"
      aria-labelledby="hero-title"
      data-selected={playback.scene?.id}
      data-ready={scenes.every(({ id }) => loadedScenes[id])}
      style={
        {
          "--hero-duration": `${heroDuration}s`,
          "--hero-delay": `${-heroDuration * (playback.scene?.start ?? 0)}s`,
        } as CSSProperties
      }
    >
      <h1 id="hero-title" className="sr-only">
        Artissimo 100 — art inspired by nature
      </h1>
      <p className="sr-only">
        An abstract and luxurious interpretation of nature. Two framed sculptural
        reliefs with flowing wood grain and blue accents, shown in monochrome and
        natural color.
      </p>

      <div className="hero-composition">
        <div className="hero-copy">
          <div className="hero-captions" aria-hidden="true">
            {scenes.map(({ id, lines }) => (
              <p
                key={`${id}-${playback.revision}`}
                className="hero-caption"
                data-scene={id}
              >
                {lines.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </p>
            ))}
          </div>
        </div>

        <div
          key={playback.revision}
          className="hero-artwork"
          aria-hidden="true"
        >
          {scenes.map(({ id, image }) => (
            <div key={id} className="hero-art-scene" data-scene={id}>
              <Image
                className="hero-panel"
                src={image.src}
                alt=""
                width={image.width}
                height={image.height}
                loading="eager"
                fetchPriority={id === "intro" ? "high" : "auto"}
                unoptimized
                draggable={false}
                onLoad={() => finishLoadingScene(id)}
                onError={() => finishLoadingScene(id)}
              />
            </div>
          ))}
        </div>

        <div className="hero-controls" role="group" aria-label="Artwork scenes">
          {scenes.map((scene, index) => (
            <button
              key={scene.id}
              type="button"
              className="hero-scene-button"
              aria-label={`Show scene ${index + 1}: ${scene.lines.join(" ")}`}
              onClick={() => selectScene(scene)}
            >
              <span className="hero-track" aria-hidden="true">
                <span
                  key={playback.revision}
                  className="hero-progress"
                  data-scene={scene.id}
                />
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
