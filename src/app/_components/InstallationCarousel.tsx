"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { installations } from "../constants/installations";
import { editorial } from "../constants/fonts";

export function InstallationCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeInstallation = installations[activeIndex];
  const reduceMotion = useReducedMotion();

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
        <div className="relative aspect-[1.497] overflow-hidden bg-background">
          {installations.map((installation, index) => (
            <div
              key={installation.title}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${installations.length}`}
              aria-hidden={index !== activeIndex}
              className={`absolute inset-0 transition-opacity duration-500 ease-in-out motion-reduce:transition-none ${index === activeIndex ? "opacity-100" : "pointer-events-none opacity-0"}`}
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
          className="absolute top-1/2 left-0 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-background text-2xl text-foreground transition-colors hover:bg-surface hover:text-gold focus-visible:outline-2 focus-visible:outline-gold motion-reduce:transition-none"
        >
          <span aria-hidden="true">‹</span>
        </button>
        <button
          type="button"
          aria-label="Next installation"
          onClick={() => showInstallation(1)}
          className="absolute top-1/2 right-0 flex size-11 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-background text-2xl text-foreground transition-colors hover:bg-surface hover:text-gold focus-visible:outline-2 focus-visible:outline-gold motion-reduce:transition-none"
        >
          <span aria-hidden="true">›</span>
        </button>
      </div>
      <div aria-live="polite" aria-atomic="true" className="mt-5 md:mt-[1.8vw]">
        <AnimatePresence initial={false}>
          <motion.div
            key={activeInstallation.title}
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.32, ease: "easeOut" }}
          >
            <h3 className={`${editorial.className} text-item-title`}>
              {activeInstallation.title}
            </h3>
            <p className="mt-2 text-xs leading-relaxed">
              {activeInstallation.description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
