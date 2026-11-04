import siteConfig from "@/Config/SiteConfig";
import formatTaka from "@/Lib/Format/FormatTaka";

const getDeliveryNote = () =>
  siteConfig.delivery.map((option) => `${option.label} ${formatTaka(option.charge)}`).join(", ");

export default getDeliveryNote;
