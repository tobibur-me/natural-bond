import { Minus, Plus } from "lucide-react";
import { useRef } from "react";
import motionConfig from "@/Config/MotionConfig";
import siteConfig from "@/Config/SiteConfig";
import sizeCopy from "@/Data/SizeCopy";
import useOrder from "@/Hooks/UseOrder";
import useTween from "@/Hooks/UseTween";
import toBanglaDigits from "@/Lib/Format/ToBanglaDigits";
import type { QuantityStepperProps } from "@/Types/UiProps";

const QuantityStepper = ({ label }: QuantityStepperProps) => {
  const { quantity, setQuantity } = useOrder();
  const { min, max } = siteConfig.quantity;
  const valueRef = useRef<HTMLOutputElement>(null);
  useTween(valueRef, quantity, motionConfig.tweens.pulse);

  return (
    <div role="group" aria-label={label} className="stepper">
      <button
        type="button"
        className="icon-btn"
        aria-label={sizeCopy.decrease}
        disabled={quantity <= min}
        onClick={() => setQuantity(quantity - 1)}
      >
        <Minus className="size-5" aria-hidden="true" />
      </button>
      <output ref={valueRef} className="block min-w-14 text-center text-xl text-forest">
        {toBanglaDigits(quantity)}
        {sizeCopy.quantitySuffix}
      </output>
      <button
        type="button"
        className="icon-btn"
        aria-label={sizeCopy.increase}
        disabled={quantity >= max}
        onClick={() => setQuantity(quantity + 1)}
      >
        <Plus className="size-5" aria-hidden="true" />
      </button>
    </div>
  );
};

export default QuantityStepper;
