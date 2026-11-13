import localFont from "next/font/local";

export const collectionHeading = localFont({
  src: "../../fonts/CormorantGaramond.latin.woff2",
  variable: "--font-collection",
  weight: "400",
  display: "swap",
  preload: false,
});

export const interDisplay = localFont({
  src: [
    { path: "../../fonts/InterDisplay-Regular.latin.woff2", weight: "400" },
    { path: "../../fonts/InterDisplay-SemiBold.latin.woff2", weight: "600" },
  ],
  variable: "--font-inter-display",
  display: "swap",
});

export const beauRivage = localFont({
  src: "../../fonts/BeauRivage-Regular.latin.woff2",
  variable: "--font-beau-rivage",
  display: "swap",
});

export const editorial = localFont({
  src: "../../fonts/EBGaramond-Italic.latin.woff2",
  variable: "--font-editorial",
  weight: "400",
  style: "italic",
  display: "swap",
});
