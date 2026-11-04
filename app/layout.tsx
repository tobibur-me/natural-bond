import "./globals.css";
import SkipLink from "@/Components/Ui/SkipLink";
import noScriptCss from "@/Config/NoScriptCss";
import pageMetadata from "@/Config/PageMetadata";
import pageViewport from "@/Config/PageViewport";
import brandFont from "@/Lib/BrandFont";
import type { ChildrenProps } from "@/Types/UiProps";

export const metadata = pageMetadata;
export const viewport = pageViewport;

const RootLayout = ({ children }: ChildrenProps) => (
  <html lang="bn" data-scroll-behavior="smooth" className={brandFont.variable}>
    <head>
      <noscript>
        <style>{noScriptCss}</style>
      </noscript>
    </head>
    <body>
      <SkipLink />
      {children}
    </body>
  </html>
);

export default RootLayout;
