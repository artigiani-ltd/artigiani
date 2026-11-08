"use client";

import Image from "next/image";
import { type CSSProperties, useState } from "react";
import {
  heroDuration,
  scenes,
  type HeroScene,
  type SceneId,
} from "../constants/hero-scenes";
import { HeroCaption } from "./HeroCaption";

export function ArtHero() {
  const [loadedScenes, setLoadedScenes] = useState<Record<SceneId, boolean>>({
    intro: false,
    nature: false,
    final: false,
  });
  const [playback, setPlayback] = useState({
    scene: null as HeroScene | null,
    revision: 0,
  });

  function selectScene(scene: HeroScene) {
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
              <HeroCaption
                key={`${id}-${playback.revision}`}
                sceneId={id}
                lines={lines}
              />
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
