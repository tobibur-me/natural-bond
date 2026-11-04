import type { Metadata } from "next";
import siteConfig from "@/Config/SiteConfig";
import seoCopy from "@/Data/SeoCopy";

const { brand, shareImage } = siteConfig;

const pageMetadata: Metadata = {
  metadataBase: new URL(brand.url),
  title: seoCopy.title,
  description: seoCopy.description,
  applicationName: brand.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "bn_BD",
    url: "/",
    siteName: brand.name,
    title: seoCopy.title,
    description: seoCopy.description,
    images: [{ url: shareImage.src, width: shareImage.width, height: shareImage.height, alt: shareImage.alt }],
  },
  twitter: {
    card: "summary_large_image",
    title: seoCopy.title,
    description: seoCopy.description,
    images: [shareImage.src],
  },
};

export default pageMetadata;
