import Image from "next/image";
import siteConfig from "@/Config/SiteConfig";

const { logo, brand } = siteConfig;

// The transparent NB mark with the brand name as live text, matching the bottle label.
const BrandLogo = () => (
  <span className="inline-flex items-center gap-2 sm:gap-3">
    <Image
      src={logo.src}
      alt=""
      width={logo.width}
      height={logo.height}
      sizes="72px"
      loading="eager"
      className="h-10 w-auto sm:h-11"
    />
    <span className="text-lg leading-none whitespace-nowrap text-forest sm:text-xl">{brand.name}</span>
  </span>
);

export default BrandLogo;
