"use client";

import { useEffect, useRef, type ReactNode } from "react";

type ScrollParallaxProps = {
  children: ReactNode;
  className: string;
};

export function ScrollParallax({ children, className }: ScrollParallaxProps) {
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
      const offset = (progress - 0.5) * bounds.height * 0.2;
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
  }, []);

  return (
    <div ref={container} className={`relative overflow-hidden ${className}`}>
      <div
        ref={layer}
        className="absolute inset-x-0 -inset-y-[12%] motion-safe:will-change-transform motion-reduce:inset-y-0"
      >
        {children}
      </div>
    </div>
  );
}
