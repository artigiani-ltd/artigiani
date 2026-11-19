import type { NavbarLink } from "../types/navbar";

export const leftLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Gallery", href: "/#gallery" },
] as const satisfies readonly NavbarLink[];

export const rightLinks = [
  { label: "Products", href: "/#products" },
  { label: "Contact", href: "/#contact" },
] as const satisfies readonly NavbarLink[];

export const navigationLinks: readonly NavbarLink[] = [
  ...leftLinks,
  ...rightLinks,
];
