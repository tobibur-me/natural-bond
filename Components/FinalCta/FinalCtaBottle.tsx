import Image from "next/image";
import LeafDecor from "@/Components/Decor/LeafDecor";
import siteConfig from "@/Config/SiteConfig";

const { heroBottle } = siteConfig;

// The bottle rises from behind the divider, so its base is deliberately hidden.
const FinalCtaBottle = () => (
  <div aria-hidden="true" className="relative mx-auto h-64 w-full max-w-xs overflow-hidden sm:h-80 lg:h-[27rem]">
    <div className="bottle-glow absolute inset-x-0 top-[6%] h-[90%]" />
    <span data-float className="absolute top-[12%] left-[6%] w-10 text-leaf opacity-70 lg:w-14">
      <LeafDecor />
    </span>
    <span data-float className="absolute top-[30%] right-[6%] w-8 -scale-x-100 text-sun opacity-60 lg:w-11">
      <LeafDecor />
    </span>
    <Image
      src={heroBottle.src}
      alt=""
      width={heroBottle.width}
      height={heroBottle.height}
      sizes="(min-width: 1024px) 240px, 170px"
      className="absolute top-3 left-1/2 w-40 max-w-none -translate-x-1/2 sm:w-48 lg:w-60"
    />
  </div>
);

export default FinalCtaBottle;
