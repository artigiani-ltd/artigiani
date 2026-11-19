"use client";

import { type CSSProperties, type ReactNode, useState } from "react";
import { heroDuration } from "../constants/hero-scenes";

type HeroPlaybackProps = {
  children: ReactNode;
};

export function HeroPlayback({ children }: HeroPlaybackProps) {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section
      className="art-hero"
      aria-labelledby="hero-title"
      data-paused={isPaused || undefined}
      style={
        {
          "--hero-duration": `${heroDuration}s`,
        } as CSSProperties
      }
    >
      <div className="hero-composition">
        {children}
        <div
          className="hero-controls"
          role="group"
          aria-label="Artwork playback"
        >
          <button
            type="button"
            className="hero-scene-button text-xs motion-reduce:hidden!"
            aria-label={
              isPaused ? "Play artwork animation" : "Pause artwork animation"
            }
            aria-pressed={isPaused}
            onClick={() => setIsPaused((paused) => !paused)}
          >
            <span aria-hidden="true">{isPaused ? "▶" : "Ⅱ"}</span>
          </button>
        </div>
      </div>
    </section>
  );
}
