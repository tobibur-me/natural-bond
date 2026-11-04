import sizeCopy from "@/Data/SizeCopy";
import formatTaka from "@/Lib/Format/FormatTaka";
import type { SizePriceProps } from "@/Types/OrderProps";

const SizePrice = ({ price }: SizePriceProps) =>
  price === null ? (
    <span className="text-sm">{sizeCopy.priceFallback}</span>
  ) : (
    <span className="text-2xl whitespace-nowrap sm:text-3xl">{formatTaka(price)}</span>
  );

export default SizePrice;
