"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { NavbarLink } from "./types/navbar";

type MobileNavbarProps = {
  brand: string;
  brandHref: string;
  links: readonly NavbarLink[];
};

export function MobileNavbar({ brand, brandHref, links }: MobileNavbarProps) {
  const navigationRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const desktop = window.matchMedia("(min-width: 640px)");

    function closeOnDesktop() {
      if (desktop.matches) setIsMenuOpen(false);
    }

    function handleKeyboard(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        toggleRef.current?.focus();
      }
      if (event.key !== "Tab") return;
      const controls =
        navigationRef.current?.querySelectorAll<HTMLElement>("a[href], button");
      const first = controls?.[0];
      const last = controls?.[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    }

    closeOnDesktop();
    desktop.addEventListener("change", closeOnDesktop);
    window.addEventListener("keydown", handleKeyboard);
    return () => {
      document.body.style.overflow = previousOverflow;
      desktop.removeEventListener("change", closeOnDesktop);
      window.removeEventListener("keydown", handleKeyboard);
    };
  }, [isMenuOpen]);

  return (
    <nav
      ref={navigationRef}
      className={`${isMenuOpen ? "fixed inset-0 z-50 min-h-dvh overflow-y-auto bg-[#171717]" : "relative"} sm:hidden`}
      aria-label="Mobile navigation"
    >
      <div className="flex min-h-(--navbar-height) items-center justify-between px-5">
        <Link
          className="font-brand text-[30px] leading-none text-foreground no-underline transition-opacity duration-150 hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4"
          href={brandHref}
          aria-label={`${brand} home`}
          onClick={() => setIsMenuOpen(false)}
        >
          {brand}
        </Link>
        <button
          ref={toggleRef}
          type="button"
          className="inline-flex size-11 items-center justify-center text-foreground transition-opacity duration-150 hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-controls="mobile-menu-links"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? (
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="size-5 fill-none stroke-current stroke-[1.5]"
            >
              <path d="M5 5l14 14M19 5L5 19" />
            </svg>
          ) : (
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="size-5 fill-none stroke-current stroke-[1.5]"
            >
              <path d="M5 7h14M5 12h14M5 17h14" />
            </svg>
          )}
        </button>
      </div>
      <ul
        id="mobile-menu-links"
        className={`m-0 list-none flex-col gap-6 px-5 pt-11 pb-12 ${isMenuOpen ? "flex" : "hidden"}`}
      >
        {links.map(({ label, href }) => (
          <li key={`${label}-${href}`}>
            <Link
              className="inline-flex min-h-12 items-center font-serif text-[clamp(2rem,9vw,2.75rem)] leading-none text-white uppercase no-underline transition-opacity duration-150 hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4"
              href={href}
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
