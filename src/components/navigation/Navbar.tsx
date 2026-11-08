import Link from "next/link";
import { NavLinks } from "./NavLinks";
import { MobileNavbar } from "./MobileNavbar";
import type { NavbarLink } from "./types/navbar";

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

      <MobileNavbar
        brand={brand}
        brandHref={brandHref}
        links={[...leftLinks, ...rightLinks]}
      />
    </header>
  );
}
