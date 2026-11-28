import type { Metadata } from "next";
import { interDisplay, beauRivage, editorial } from "./constants/fonts";
import { Navbar } from "@/components/navigation/Navbar";
import { siteMetadata } from "./constants/site-metadata";
import { SmoothScroll } from "./_components/SmoothScroll";
import "lenis/dist/lenis.css";
import "./globals.css";

export const metadata: Metadata = siteMetadata;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${interDisplay.variable} ${beauRivage.variable} ${editorial.variable} scroll-pt-[calc(var(--navbar-height)+1.5rem)]`}
    >
      <body>
        <SmoothScroll />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-60 focus:bg-foreground focus:p-3 focus:text-background"
        >
          Skip to content
        </a>
        <div className="relative min-h-screen bg-background">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
