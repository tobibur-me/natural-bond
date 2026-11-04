import Image from "next/image";
import cx from "@/Lib/Cx";
import getCropStyle from "@/Lib/GetCropStyle";
import type { CroppedImageProps } from "@/Types/UiProps";

const CroppedImage = ({ asset, displayWidth, className, decorative }: CroppedImageProps) => {
  const { windowStyle, imageStyle, scale } = getCropStyle(asset);

  return (
    <span className={cx("relative block overflow-hidden", className)} style={windowStyle}>
      <Image
        src={asset.src}
        alt={decorative ? "" : asset.alt}
        width={asset.width}
        height={asset.height}
        sizes={`${Math.ceil(displayWidth * scale)}px`}
        style={imageStyle}
      />
    </span>
  );
};

export default CroppedImage;
