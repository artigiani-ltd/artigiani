import Link from "next/link";
import type { NavbarLink } from "./types/navbar";

type NavLinksProps = {
  links: readonly NavbarLink[];
  className?: string;
};

export function NavLinks({ links, className = "" }: NavLinksProps) {
  return (
    <ul className={`m-0 flex list-none items-center gap-7.5 p-0 ${className}`}>
      {links.map(({ label, href }) => (
        <li key={`${label}-${href}`}>
          <Link
            className="inline-flex min-h-11 items-center font-sans text-xs leading-none font-semibold text-foreground uppercase no-underline transition-opacity duration-150 hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4"
            href={href}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
