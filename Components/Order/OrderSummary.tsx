import SummaryRow from "@/Components/Order/SummaryRow";
import siteConfig from "@/Config/SiteConfig";
import orderCopy from "@/Data/OrderCopy";
import sizeCopy from "@/Data/SizeCopy";
import useOrder from "@/Hooks/UseOrder";
import formatTaka from "@/Lib/Format/FormatTaka";
import toBanglaDigits from "@/Lib/Format/ToBanglaDigits";
import computeTotals from "@/Lib/Order/ComputeTotals";
import getDeliveryOption from "@/Lib/Order/GetDeliveryOption";
import getSizeOption from "@/Lib/Order/GetSizeOption";

// Money rows appear only when their value is known, so no total is ever made up.
const OrderSummary = () => {
  const { sizeId, quantity, deliveryId } = useOrder();
  const size = getSizeOption(sizeId);
  const area = getDeliveryOption(deliveryId);
  const { summary } = orderCopy;
  const totals = computeTotals({ unit: size.price, quantity, delivery: area?.charge ?? null });

  return (
    <section>
      <h3 className="text-2xl text-forest">{orderCopy.summaryTitle}</h3>
      <dl className="mt-3">
        <SummaryRow label={summary.product} value={siteConfig.brand.product} />
        <SummaryRow label={summary.size} value={size.label} />
        <SummaryRow label={summary.quantity} value={`${toBanglaDigits(quantity)}${sizeCopy.quantitySuffix}`} />
        <SummaryRow
          label={summary.unit}
          value={totals.unit === null ? sizeCopy.priceFallback : formatTaka(totals.unit)}
        />
        {totals.subtotal !== null && <SummaryRow label={summary.subtotal} value={formatTaka(totals.subtotal)} />}
        {totals.delivery !== null && (
          <SummaryRow label={`${summary.delivery} (${area?.label})`} value={formatTaka(totals.delivery)} />
        )}
        {totals.total !== null && <SummaryRow label={summary.total} value={formatTaka(totals.total)} strong />}
      </dl>
      {totals.total === null && (
        <p className="mt-3 text-base text-ink">{totals.unit === null ? orderCopy.priceNote : orderCopy.chooseArea}</p>
      )}
    </section>
  );
};

export default OrderSummary;
