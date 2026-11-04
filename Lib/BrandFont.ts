import localFont from "next/font/local";

// The .woff2 is a compressed copy of public/font/SolaimanLipi.ttf.
const brandFont = localFont({
  src: "../public/font/SolaimanLipi.woff2",
  variable: "--font-solaiman",
  weight: "400",
  style: "normal",
  display: "swap",
  preload: true,
  adjustFontFallback: false,
});

export default brandFont;
