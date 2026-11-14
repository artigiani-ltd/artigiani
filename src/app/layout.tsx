import type { Metadata } from "next";
import { interDisplay, beauRivage, editorial } from "./constants/fonts";
import { Navbar } from "@/components/navigation/Navbar";
import {
  leftLinks,
  rightLinks,
} from "@/components/navigation/constants/navigation";
import { siteMetadata } from "./constants/site-metadata";
import "./globals.css";

export const metadata: Metadata = siteMetadata;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${interDisplay.variable} ${beauRivage.variable} ${editorial.variable} scroll-pt-[calc(var(--navbar-height)+1.5rem)]`}
    >
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-60 focus:bg-white focus:p-3 focus:text-black"
        >
          Skip to content
        </a>
        <div className="relative min-h-screen bg-background">
          <Navbar
            brand="Artigiani"
            leftLinks={leftLinks}
            rightLinks={rightLinks}
          />
          {children}
        </div>
      </body>
    </html>
  );
}
