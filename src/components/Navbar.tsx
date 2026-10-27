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
    <ul
      className={`m-0 flex list-none items-center gap-7.5 p-0 max-sm:flex-wrap max-sm:justify-center max-sm:gap-x-5 ${className}`}
    >
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
  return (
    <header className="w-full bg-transparent">
      <nav
        className="grid min-h-15.5 grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center px-[34px] max-sm:flex max-sm:flex-col max-sm:gap-0.5 max-sm:px-4 max-sm:pt-3 max-sm:pb-2.5"
        aria-label="Main navigation"
      >
        <Link
          className="font-brand col-start-2 row-start-1 whitespace-nowrap text-[28px] leading-none text-white no-underline transition-opacity duration-150 hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4 max-sm:mb-1 max-sm:text-[30px]"
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
    </header>
  );
}
