"use client";

import Image from "next/image";
import { useState } from "react";

const scenes = [
  { id: "intro", lines: ["Artissimo 100"] },
  { id: "nature", lines: ["Art inspired", "by nature"] },
  {
    id: "final",
    lines: ["An abstract", "and luxurious", "interpretation", "of nature"],
  },
] as const;

type SceneId = (typeof scenes)[number]["id"];

export function ArtHero() {
  const [isPaused, setIsPaused] = useState(false);
  const [selectedScene, setSelectedScene] = useState<SceneId | null>(null);

  function selectScene(scene: SceneId) {
    setSelectedScene(scene);
    setIsPaused(true);
  }

  function togglePlayback() {
    if (selectedScene) {
      setSelectedScene(null);
      setIsPaused(false);
      return;
    }

    setIsPaused((paused) => !paused);
  }

  return (
    <section
      className="art-hero"
      aria-labelledby="hero-title"
      data-paused={isPaused}
      data-selected={selectedScene ?? undefined}
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
              <p key={id} className="hero-caption" data-scene={id}>
                {lines.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </p>
            ))}
          </div>

          <div className="hero-controls" role="group" aria-label="Artwork scenes">
            {scenes.map(({ id, lines }, index) => (
              <button
                key={id}
                type="button"
                className="hero-scene-button"
                aria-label={`Show scene ${index + 1}: ${lines.join(" ")}`}
                aria-pressed={selectedScene === id}
                onClick={() => selectScene(id)}
              >
                <span className="hero-track" aria-hidden="true">
                  <span className="hero-progress" data-scene={id} />
                </span>
              </button>
            ))}
            <button
              type="button"
              className="hero-playback"
              aria-label={isPaused ? "Play animation" : "Pause animation"}
              onClick={togglePlayback}
            >
              <svg viewBox="0 0 20 20" aria-hidden="true">
                {isPaused ? (
                  <path d="m7 4 9 6-9 6Z" />
                ) : (
                  <path d="M6 4h2v12H6zM12 4h2v12h-2z" />
                )}
              </svg>
            </button>
          </div>
        </div>

        <div className="hero-artwork" aria-hidden="true">
          {scenes.map(({ id }) => (
            <div key={id} className="hero-art-scene" data-scene={id}>
              {(["left", "right"] as const).map((side) => (
                <Image
                  key={side}
                  className="hero-panel"
                  src={`/images/artissimo-${side}-hd.webp`}
                  alt=""
                  width={1254}
                  height={1254}
                  loading="eager"
                  fetchPriority={id === "intro" ? "high" : "auto"}
                  unoptimized
                  draggable={false}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
