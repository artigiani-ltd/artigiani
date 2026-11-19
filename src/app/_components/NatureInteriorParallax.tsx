"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function NatureInteriorParallax({ children }: { children: ReactNode }) {
  const viewport = useRef<HTMLDivElement>(null);
  const image = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = viewport.current;
    const layer = image.current;
    if (!container || !layer) return;

    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame: number | null = null;

    function updatePosition() {
      frame = null;
      if (!container || !layer) return;
      if (preference.matches) {
        layer.style.transform = "none";
        return;
      }

      const bounds = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      if (bounds.bottom < 0 || bounds.top > viewportHeight) return;

      const progress = Math.max(
        0,
        Math.min(1, (viewportHeight / 2 - bounds.top) / bounds.height),
      );
      const offset = (progress - 1) * bounds.height * 0.3;
      layer.style.transform = `translate3d(0, ${offset}px, 0)`;
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
    <div ref={viewport} className="absolute inset-0 overflow-hidden">
      <div
        ref={image}
        className="absolute inset-x-0 top-0 -bottom-[38%] overflow-hidden motion-safe:will-change-transform motion-reduce:bottom-0"
      >
        {children}
      </div>
    </div>
  );
}
