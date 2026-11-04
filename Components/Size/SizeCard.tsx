import { Check } from "lucide-react";
import { useRef } from "react";
import SizePrice from "@/Components/Size/SizePrice";
import AssetImage from "@/Components/Ui/AssetImage";
import motionConfig from "@/Config/MotionConfig";
import sizeCopy from "@/Data/SizeCopy";
import useTween from "@/Hooks/UseTween";
import formatTaka from "@/Lib/Format/FormatTaka";
import type { SizeCardProps } from "@/Types/OrderProps";

const SizeCard = ({ option, selected, onSelect }: SizeCardProps) => {
  const rowRef = useRef<HTMLSpanElement>(null);
  useTween(rowRef, selected, motionConfig.tweens.pulse, selected);
  const { label, liters, price, image } = option;

  return (
    <label className="relative block">
      <input
        type="radio"
        name="size-card"
        value={option.id}
        checked={selected}
        onChange={() => onSelect(option.id)}
        className="sr-only"
      />
      <span
        ref={rowRef}
        className="size-row grid grid-cols-[3.25rem_1fr_auto_auto] items-center gap-3 p-2.5 sm:gap-4 sm:p-3"
      >
        <span className="glow-ground relative block aspect-[2/3] overflow-hidden rounded-lg">
          <AssetImage asset={image} displayWidth={52} sizes="52px" decorative />
        </span>
        <span>
          <span className="block text-2xl leading-tight">{label}</span>
          {price !== null && (
            <span className="block text-sm">
              {sizeCopy.perLitre} {formatTaka(Math.round(price / liters))}
            </span>
          )}
        </span>
        <SizePrice price={price} />
        <span className="size-dot">
          <Check className="size-4" aria-hidden="true" />
        </span>
      </span>
    </label>
  );
};

export default SizeCard;
