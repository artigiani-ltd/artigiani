"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { NavLinks } from "./NavLinks";

export type NavbarLink = {
  label: string;
  href: string;
};

type NavbarProps = {
  brand: string;
  brandHref?: string;
  leftLinks: readonly NavbarLink[];
  rightLinks: readonly NavbarLink[];
};

export function Navbar({
  brand,
  brandHref = "/",
  leftLinks,
  rightLinks,
}: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = [...leftLinks, ...rightLinks];

  useEffect(() => {
    if (!isMenuOpen) return;

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setIsMenuOpen(false);
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isMenuOpen]);

  return (
    <header className="absolute inset-x-0 top-0 z-10 min-h-(--navbar-height) border-b border-white/20 bg-transparent">
      <nav
        className="hidden min-h-(--navbar-height) grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center px-8.5 sm:grid"
        aria-label="Main navigation"
      >
        <Link
          className="font-brand col-start-2 row-start-1 whitespace-nowrap text-[28px] leading-none text-foreground no-underline transition-opacity duration-150 hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4"
          href={brandHref}
          aria-label={`${brand} home`}
        >
          {brand}
        </Link>
        <NavLinks links={leftLinks} className="col-start-1 row-start-1" />
        <NavLinks
          links={rightLinks}
          className="col-start-3 row-start-1 justify-end"
        />
      </nav>

      <nav
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
    </header>
  );
}
