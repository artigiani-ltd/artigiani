"use client";

import { type ReactNode, useRef } from "react";
import { scenes, type HeroScene } from "../constants/hero-scenes";

type HeroPlaybackProps = {
  children: ReactNode;
};

export function HeroPlayback({ children }: HeroPlaybackProps) {
  const heroRef = useRef<HTMLElement>(null);

  function selectScene({ id, seekTime }: HeroScene) {
    const hero = heroRef.current;
    if (!hero) return;

    hero.dataset.selected = id;

    // Seek every loop together while leaving the one-time opening fades alone.
    for (const animation of hero.getAnimations({ subtree: true })) {
      if (animation.effect?.getTiming().iterations === Infinity) {
        animation.currentTime = seekTime * 1000;
      }
    }
  }

  return (
    <section ref={heroRef} className="art-hero" aria-labelledby="hero-title">
      <div className="hero-composition">
        {children}
        <div
          className="hero-progress flex items-center text-xs tracking-widest tabular-nums"
          role="group"
          aria-label="Artwork scenes"
        >
          {scenes.map((scene, index) => (
            <button
              key={scene.id}
              type="button"
              className="grid size-11 cursor-pointer place-items-center rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2"
              aria-label={`Show image ${index + 1}: ${scene.lines.join(" ")}`}
              onClick={() => selectScene(scene)}
            >
              <span className="hero-scene-number" data-scene={scene.id}>
                0{index + 1}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
