"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function ScrollReveal({ children }: { children: ReactNode }) {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = container.current;
    if (!root || !("IntersectionObserver" in window)) return;

    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const elements = root.querySelectorAll<HTMLElement>("[data-reveal]");
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
    preference.addEventListener("change", configureMotion);
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", configureMotion);
      for (const element of elements) {
        element.removeAttribute("data-motion");
        element.removeAttribute("data-visible");
      }
    };
  }, []);

  return <div ref={container}>{children}</div>;
}
