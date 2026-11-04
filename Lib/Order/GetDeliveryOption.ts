import siteConfig from "@/Config/SiteConfig";

const getDeliveryOption = (deliveryId: string | null) =>
  siteConfig.delivery.find((option) => option.id === deliveryId) ?? null;

export default getDeliveryOption;
