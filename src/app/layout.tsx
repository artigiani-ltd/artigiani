import type { Metadata } from "next";
import { interDisplay, beauRivage, editorial } from "./constants/fonts";
import { Navbar } from "@/components/navigation/Navbar";
import type { NavbarLink } from "@/components/navigation/types/navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Artigiani",
  description: "Artigiani",
};

const leftLinks: readonly NavbarLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
];

const rightLinks: readonly NavbarLink[] = [
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
];

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${interDisplay.variable} ${beauRivage.variable} ${editorial.variable}`}
    >
      <body>
        <div className="relative min-h-screen bg-background">
          <Navbar brand="Artigiani" leftLinks={leftLinks} rightLinks={rightLinks} />
          {children}
        </div>
      </body>
    </html>
  );
}
