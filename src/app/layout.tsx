import type { Metadata } from "next";
import localFont from "next/font/local";
import { Navbar, type NavbarLink } from "@/components/Navbar";
import "./globals.css";

const interDisplay = localFont({
  src: [
    { path: "../fonts/InterDisplay-Regular.woff2", weight: "400" },
    { path: "../fonts/InterDisplay-SemiBold.woff2", weight: "600" },
  ],
  variable: "--font-inter-display",
  display: "swap",
});

const beauRivage = localFont({
  src: "../fonts/BeauRivage-Regular.ttf",
  variable: "--font-beau-rivage",
  display: "swap",
});

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
    <html lang="en" className={`${interDisplay.variable} ${beauRivage.variable}`}>
      <body>
        <div className="min-h-screen bg-[#171717]">
          <Navbar brand="Artigiani" leftLinks={leftLinks} rightLinks={rightLinks} />
          {children}
        </div>
      </body>
    </html>
  );
}
