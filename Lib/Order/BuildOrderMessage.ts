import siteConfig from "@/Config/SiteConfig";
import whatsAppCopy from "@/Data/WhatsAppCopy";
import formatTaka from "@/Lib/Format/FormatTaka";
import toBanglaDigits from "@/Lib/Format/ToBanglaDigits";
import type { OrderMessageInput, OrderTotals } from "@/Types/Order";

const { labels } = whatsAppCopy;

const buildPriceBlock = (totals: OrderTotals, deliveryLabel: string | null) =>
  [
    totals.subtotal === null ? null : `${labels.subtotal}: ${formatTaka(totals.subtotal)}`,
    totals.delivery === null ? null : `${labels.delivery} (${deliveryLabel}): ${formatTaka(totals.delivery)}`,
    totals.total === null ? null : `${labels.total}: ${formatTaka(totals.total)}`,
  ]
    .filter(Boolean)
    .join("\n");

// Each block is separated by a blank line. Optional blocks are left out entirely when empty.
const buildOrderMessage = ({ sizeLabel, quantity, values, totals, deliveryLabel }: OrderMessageInput) =>
  [
    `${whatsAppCopy.title} — ${siteConfig.brand.name}`,
    [
      `${labels.product}: ${siteConfig.brand.product}`,
      `${labels.size}: ${sizeLabel}`,
      `${labels.quantity}: ${toBanglaDigits(quantity)}${labels.quantitySuffix}`,
    ].join("\n"),
    [
      `${labels.name}: ${values.name}`,
      `${labels.phone}: ${values.phone}`,
      `${labels.address}: ${values.address}`,
    ].join("\n"),
    values.notes ? `${labels.notes}: ${values.notes}` : null,
    buildPriceBlock(totals, deliveryLabel),
    whatsAppCopy.closing,
  ]
    .filter(Boolean)
    .join("\n\n");

export default buildOrderMessage;
