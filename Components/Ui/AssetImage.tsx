import Image from "next/image";
import CroppedImage from "@/Components/Ui/CroppedImage";
import cx from "@/Lib/Cx";
import type { AssetImageProps } from "@/Types/UiProps";

// Fills a positioned parent: a crop when the asset has one, otherwise the whole image.
const AssetImage = ({ asset, displayWidth, sizes, decorative, contain }: AssetImageProps) => {
  if (asset.crop) {
    return <CroppedImage asset={asset} displayWidth={displayWidth} decorative={decorative} className="w-full" />;
  }

  const fit = contain || asset.fit === "contain" ? "object-contain p-[4%]" : "object-cover";

  return <Image src={asset.src} alt={decorative ? "" : asset.alt} fill sizes={sizes} className={cx(fit)} />;
};

export default AssetImage;
