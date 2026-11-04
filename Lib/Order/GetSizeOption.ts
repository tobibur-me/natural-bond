import siteConfig from "@/Config/SiteConfig";

const getSizeOption = (sizeId: string) =>
  siteConfig.sizes.find((size) => size.id === sizeId) ?? siteConfig.sizes[0];

export default getSizeOption;
