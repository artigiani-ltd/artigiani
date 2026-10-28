"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

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

type NavLinksProps = {
  links: readonly NavbarLink[];
  className?: string;
};

function NavLinks({ links, className = "" }: NavLinksProps) {
  return (
    <ul className={`m-0 flex list-none items-center gap-7.5 p-0 ${className}`}>
      {links.map(({ label, href }) => (
        <li key={`${label}-${href}`}>
          <Link
            className="inline-flex min-h-11 items-center font-sans text-xs leading-none font-semibold text-white uppercase no-underline transition-opacity duration-150 hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4"
            href={href}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

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
    <header className="w-full bg-transparent">
      <nav
        className="hidden min-h-15.5 grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center px-[34px] sm:grid"
        aria-label="Main navigation"
      >
        <Link
          className="font-brand col-start-2 row-start-1 whitespace-nowrap text-[28px] leading-none text-white no-underline transition-opacity duration-150 hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4"
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
        className={`relative z-50 sm:hidden ${isMenuOpen ? "min-h-dvh" : ""}`}
        aria-label="Mobile navigation"
      >
        <div className="flex min-h-16 items-center justify-between px-5">
          <Link
            className="font-brand text-[30px] leading-none text-white no-underline transition-opacity duration-150 hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4"
            href={brandHref}
            aria-label={`${brand} home`}
            onClick={() => setIsMenuOpen(false)}
          >
            {brand}
          </Link>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center text-white transition-opacity duration-150 hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-controls="mobile-menu-links"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? (
              <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5 fill-none stroke-current stroke-[1.5]">
                <path d="M5 5l14 14M19 5L5 19" />
              </svg>
            ) : (
              <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5 fill-none stroke-current stroke-[1.5]">
                <path d="M5 7h14M5 12h14M5 17h14" />
              </svg>
            )}
          </button>
        </div>
        {isMenuOpen && (
          <ul id="mobile-menu-links" className="m-0 flex list-none flex-col gap-6 px-5 pt-11 pb-12">
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
        )}
      </nav>
    </header>
  );
}
