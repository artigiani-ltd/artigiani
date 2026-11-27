"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

type ScrollParallaxProps = {
  children: ReactNode;
  className: string;
  travel?: number;
};

export function ScrollParallax({
  children,
  className,
  travel = 0.2,
}: ScrollParallaxProps) {
  const container = useRef<HTMLDivElement>(null);
  const layer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const viewport = container.current;
    const image = layer.current;
    if (!viewport || !image) return;

    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame: number | null = null;

    function updatePosition() {
      frame = null;
      if (!viewport || !image) return;
      if (preference.matches) {
        image.style.transform = "none";
        return;
      }

      const bounds = viewport.getBoundingClientRect();
      if (bounds.bottom < 0 || bounds.top > window.innerHeight) return;

      const progress = Math.max(
        0,
        Math.min(
          1,
          (window.innerHeight - bounds.top) /
            (window.innerHeight + bounds.height),
        ),
      );
      const offset = (progress - 0.5) * bounds.height * travel;
      image.style.transform = `translate3d(0, ${offset}px, 0)`;
    }

    function scheduleUpdate() {
      if (frame === null) frame = window.requestAnimationFrame(updatePosition);
    }

    updatePosition();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    preference.addEventListener("change", scheduleUpdate);

    return () => {
      if (frame !== null) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      preference.removeEventListener("change", scheduleUpdate);
    };
  }, [travel]);

  return (
    <div ref={container} className={`relative overflow-hidden ${className}`}>
      <div
        ref={layer}
        className="absolute inset-x-0 inset-y-0 motion-safe:inset-y-(--parallax-inset) motion-safe:will-change-transform"
        style={
          { "--parallax-inset": `${-(travel * 50 + 2)}%` } as CSSProperties
        }
      >
        {children}
      </div>
    </div>
  );
}
