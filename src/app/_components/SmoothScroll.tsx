"use client";

import Lenis from "lenis";
import { useEffect } from "react";

export function SmoothScroll() {
  useEffect(() => {
    const preference = window.matchMedia(
      "(min-width: 640px) and (any-pointer: fine) and (prefers-reduced-motion: no-preference)",
    );
    let lenis: Lenis | undefined;

    function syncScroll() {
      lenis?.destroy();
      lenis = preference.matches
        ? new Lenis({ autoRaf: true, lerp: 0.16 })
        : undefined;
    }

    syncScroll();
    preference.addEventListener("change", syncScroll);
    return () => {
      preference.removeEventListener("change", syncScroll);
      lenis?.destroy();
    };
  }, []);

  return null;
}
