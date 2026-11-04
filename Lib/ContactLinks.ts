import siteConfig from "@/Config/SiteConfig";
import whatsAppCopy from "@/Data/WhatsAppCopy";
import buildWhatsAppUrl from "@/Lib/Order/BuildWhatsAppUrl";

const contactLinks = {
  call: `tel:${siteConfig.contact.phone}`,
  whatsapp: buildWhatsAppUrl(whatsAppCopy.greeting),
};

export default contactLinks;
