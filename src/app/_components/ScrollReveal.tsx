"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function ScrollReveal({ children }: { children: ReactNode }) {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = container.current;
    if (!root || !("IntersectionObserver" in window)) return;

    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const elements = root.querySelectorAll<HTMLElement>("[data-reveal]");
    const sequences = new Set(
      root.querySelectorAll<HTMLElement>('[data-reveal="sequence"]'),
    );
    let sampleScrollY = window.scrollY;
    let sampleTime = performance.now();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-visible", "true");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.08 },
    );

    function revealDuringFastScroll() {
      const now = performance.now();
      if (now - sampleTime > 600) {
        sampleScrollY = window.scrollY;
        sampleTime = now;
      }
      const elapsed = now - sampleTime;
      const distance = Math.abs(window.scrollY - sampleScrollY);

      // Require sustained rapid scrolling; individual wheel bursts keep the original reveal.
      const sustainedFastScroll =
        elapsed >= 400 && distance / elapsed >= (window.innerHeight * 6) / 1000;
      if (elapsed >= 400) {
        sampleScrollY = window.scrollY;
        sampleTime = now;
      }
      if (preference.matches) return;

      for (const sequence of sequences) {
        const bounds = sequence.getBoundingClientRect();
        if (bounds.top >= window.innerHeight) continue;
        if (bounds.bottom > 0 && !sustainedFastScroll) continue;

        const revealElements = [
          sequence,
          ...sequence.querySelectorAll<HTMLElement>("[data-reveal]"),
        ];
        for (const element of revealElements) {
          element.removeAttribute("data-motion");
          element.setAttribute("data-visible", "true");
          observer.unobserve(element);
        }
        for (const animation of sequence.getAnimations({ subtree: true })) {
          animation.finish();
        }
        sequences.delete(sequence);
      }
    }

    function configureMotion() {
      observer.disconnect();
      for (const element of elements) {
        if (preference.matches) {
          element.removeAttribute("data-motion");
        } else if (!element.hasAttribute("data-visible")) {
          element.setAttribute("data-motion", "true");
          observer.observe(element);
        }
      }
    }

    configureMotion();
    window.addEventListener("scroll", revealDuringFastScroll, {
      passive: true,
    });
    preference.addEventListener("change", configureMotion);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", revealDuringFastScroll);
      preference.removeEventListener("change", configureMotion);
      for (const element of elements) {
        element.removeAttribute("data-motion");
        element.removeAttribute("data-visible");
      }
    };
  }, []);

  return <div ref={container}>{children}</div>;
}
