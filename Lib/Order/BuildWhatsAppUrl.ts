import siteConfig from "@/Config/SiteConfig";

const buildWhatsAppUrl = (message: string) =>
  `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`;

export default buildWhatsAppUrl;
