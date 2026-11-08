"use client";

import { type CSSProperties, type ReactNode, Fragment, useState } from "react";
import { heroDuration, scenes, type HeroScene } from "../constants/hero-scenes";

type HeroPlaybackProps = {
  children: ReactNode;
};

export function HeroPlayback({ children }: HeroPlaybackProps) {
  const [playback, setPlayback] = useState<{
    scene: HeroScene | null;
    revision: number;
  }>({ scene: null, revision: 0 });

  function selectScene(scene: HeroScene) {
    setPlayback((previous) => ({ scene, revision: previous.revision + 1 }));
  }

  return (
    <section
      className="art-hero"
      aria-labelledby="hero-title"
      data-selected={playback.scene?.id}
      style={
        {
          "--hero-duration": `${heroDuration}s`,
          "--hero-delay": `${-heroDuration * (playback.scene?.start ?? 0)}s`,
        } as CSSProperties
      }
    >
      <div className="hero-composition">
        <Fragment key={playback.revision}>{children}</Fragment>
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
