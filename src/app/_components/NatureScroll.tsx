"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function NatureScroll({ children }: { children: ReactNode }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const panel = panelRef.current;
    const grid = panel?.querySelector<HTMLDivElement>("[data-nature-grid]");
    const copy =
      panel?.querySelector<HTMLParagraphElement>("[data-nature-copy]");
    if (!track || !panel || !grid || !copy) return;

    const motion = window.matchMedia(
      "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
    );
    let frame: number | null = null;
    let pinTop = 0;
    let scrollDistance = 0;
    let textTravel = 0;

    function updatePosition() {
      frame = null;
      if (!track || !copy || !motion.matches) return;
      const progress = Math.max(
        0,
        Math.min(
          1,
          (pinTop - track.getBoundingClientRect().top) / scrollDistance,
        ),
      );
      const transform = `translateY(${progress * textTravel}px)`;
      if (copy.style.transform !== transform) copy.style.transform = transform;
    }

    function scheduleUpdate() {
      if (frame === null) frame = window.requestAnimationFrame(updatePosition);
    }

    function configureScroll() {
      if (!track || !panel || !grid || !copy) return;
      if (!motion.matches) {
        window.removeEventListener("scroll", scheduleUpdate);
        if (frame !== null) window.cancelAnimationFrame(frame);
        frame = null;
        track.style.height = "";
        panel.style.position = "";
        panel.style.top = "";
        copy.style.transform = "";
        return;
      }

      panel.style.position = "sticky";
      panel.style.top = "calc(var(--navbar-height) + 2rem)";
      // Taller compositions enter fully before pinning at the viewport's bottom edge.
      pinTop = Math.min(
        parseFloat(getComputedStyle(panel).top),
        window.innerHeight - panel.offsetHeight - 32,
      );
      scrollDistance = window.innerHeight * 0.75;
      textTravel = Math.max(0, grid.offsetHeight - copy.offsetHeight);
      track.style.height = `${panel.offsetHeight + scrollDistance}px`;
      panel.style.top = `${pinTop}px`;
      updatePosition();
      window.addEventListener("scroll", scheduleUpdate, { passive: true });
    }

    const observer = new ResizeObserver(configureScroll);
    observer.observe(panel);
    observer.observe(copy);
    configureScroll();
    window.addEventListener("resize", configureScroll);
    motion.addEventListener("change", configureScroll);

    return () => {
      if (frame !== null) window.cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", configureScroll);
      motion.removeEventListener("change", configureScroll);
      track.style.height = "";
      panel.style.position = "";
      panel.style.top = "";
      copy.style.transform = "";
    };
  }, []);

  return (
    <div ref={trackRef}>
      <div ref={panelRef}>{children}</div>
    </div>
  );
}
