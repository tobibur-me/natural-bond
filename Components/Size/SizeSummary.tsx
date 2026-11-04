import { ShoppingCart } from "lucide-react";
import LinkButton from "@/Components/Ui/LinkButton";
import QuantityStepper from "@/Components/Ui/QuantityStepper";
import sizeCopy from "@/Data/SizeCopy";
import useOrder from "@/Hooks/UseOrder";
import formatTaka from "@/Lib/Format/FormatTaka";
import getDeliveryNote from "@/Lib/Order/GetDeliveryNote";
import getSizeOption from "@/Lib/Order/GetSizeOption";

const SizeSummary = () => {
  const { sizeId, quantity } = useOrder();
  const { price } = getSizeOption(sizeId);

  return (
    <div className="mt-5 rounded-card bg-deep/60 p-5 ring-1 ring-cream/15 sm:p-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="mb-2 text-base text-cream">{sizeCopy.quantityLabel}</p>
          <QuantityStepper label={sizeCopy.quantityLabel} />
        </div>
        {price !== null && (
          <div className="text-right">
            <p className="text-base text-cream">{sizeCopy.totalLabel}</p>
            <p className="text-3xl text-sun">{formatTaka(price * quantity)}</p>
          </div>
        )}
      </div>
      <p className="mt-4 border-t border-cream/15 pt-3 text-base text-cream/90">
        {sizeCopy.deliveryPrefix} {getDeliveryNote()}
      </p>
      <LinkButton href="#order" className="mt-4 w-full">
        <ShoppingCart className="size-5" aria-hidden="true" />
        {sizeCopy.orderCta}
      </LinkButton>
    </div>
  );
};

export default SizeSummary;
