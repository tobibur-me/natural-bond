import Image from "next/image";
import siteConfig from "@/Config/SiteConfig";
import cx from "@/Lib/Cx";
import type { SizeStageProps } from "@/Types/OrderProps";

// All three bottles are stacked and crossfade, so switching size is instant once loaded.
const SizeStage = ({ activeId }: SizeStageProps) => (
  <div
    className={cx(
      "glow-ground relative mx-auto aspect-[2/3] w-full max-w-64",
      "overflow-hidden rounded-card shadow-lift lg:max-w-none",
    )}
  >
    {siteConfig.sizes.map(({ id, image }) => (
      <div
        key={id}
        className={cx(
          "absolute inset-0 transition-opacity duration-500",
          id === activeId ? "opacity-100" : "opacity-0",
        )}
      >
        <Image
          src={image.src}
          alt={id === activeId ? image.alt : ""}
          fill
          sizes="(min-width: 1024px) 400px, 256px"
          className={image.fit === "contain" ? "object-contain p-[7%]" : "object-cover"}
        />
      </div>
    ))}
  </div>
);

export default SizeStage;
