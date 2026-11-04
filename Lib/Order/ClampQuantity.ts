import siteConfig from "@/Config/SiteConfig";

const clampQuantity = (quantity: number) => {
  const { min, max } = siteConfig.quantity;
  return Math.min(max, Math.max(min, quantity));
};

export default clampQuantity;
