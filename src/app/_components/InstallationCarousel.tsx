"use client";

import Image from "next/image";
import { useState } from "react";
import { installations } from "../constants/installations";
import { editorial } from "../constants/fonts";

export function InstallationCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeInstallation = installations[activeIndex];

  function showInstallation(direction: number) {
    setActiveIndex(
      (index) =>
        (index + direction + installations.length) % installations.length,
    );
  }

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Artissimo installations"
      className="mx-auto w-full md:w-[84%]"
    >
      <div data-reveal="image" className="relative">
        <div className="relative aspect-[1.497] overflow-hidden bg-[#e8e5df]">
          {installations.map((installation, index) => (
            <div
              key={installation.title}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${installations.length}`}
              aria-hidden={index !== activeIndex}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out motion-reduce:transition-none ${index === activeIndex ? "opacity-100" : "pointer-events-none opacity-0"}`}
            >
              <Image
                src={installation.image}
                alt={installation.alt}
                fill
                sizes="(min-width: 768px) 79vw, calc(100vw - 48px)"
                className="object-cover"
              />
            </div>
          ))}
        </div>
        <button
          type="button"
          aria-label="Previous installation"
          onClick={() => showInstallation(-1)}
          className="absolute top-1/2 left-0 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-2xl text-white transition-colors hover:bg-black/70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black motion-reduce:transition-none"
        >
          <span aria-hidden="true">‹</span>
        </button>
        <button
          type="button"
          aria-label="Next installation"
          onClick={() => showInstallation(1)}
          className="absolute top-1/2 right-0 flex size-11 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-2xl text-white transition-colors hover:bg-black/70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black motion-reduce:transition-none"
        >
          <span aria-hidden="true">›</span>
        </button>
      </div>
      <div aria-live="polite" aria-atomic="true" className="mt-5 md:mt-[1.8vw]">
        <h3
          className={`${editorial.className} text-xl md:text-[clamp(1.25rem,1.65vw,2rem)]`}
        >
          {activeInstallation.title}
        </h3>
        <p className="mt-2 text-[10px] leading-relaxed text-[#686862] md:text-xs">
          {activeInstallation.description}
        </p>
      </div>
    </div>
  );
}
