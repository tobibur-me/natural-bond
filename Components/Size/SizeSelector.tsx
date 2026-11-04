"use client";

import SizeCard from "@/Components/Size/SizeCard";
import SizeStage from "@/Components/Size/SizeStage";
import SizeSummary from "@/Components/Size/SizeSummary";
import siteConfig from "@/Config/SiteConfig";
import sizeCopy from "@/Data/SizeCopy";
import useOrder from "@/Hooks/UseOrder";

const SizeSelector = () => {
  const { sizeId, setSizeId } = useOrder();

  return (
    <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,25rem)_1fr] lg:items-center lg:gap-14">
      <SizeStage activeId={sizeId} />
      <div>
        <fieldset className="grid gap-3">
          <legend className="sr-only">{sizeCopy.groupLabel}</legend>
          {siteConfig.sizes.map((option) => (
            <SizeCard key={option.id} option={option} selected={option.id === sizeId} onSelect={setSizeId} />
          ))}
        </fieldset>
        <SizeSummary />
      </div>
    </div>
  );
};

export default SizeSelector;
