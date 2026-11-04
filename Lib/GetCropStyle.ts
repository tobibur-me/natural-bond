import type { CSSProperties } from "react";
import type { ImageAsset } from "@/Types/Config";

// Positions a whole image inside a window so only the crop shows. The window's
// aspect ratio is set up front, so nothing shifts when the image arrives.
const getCropStyle = (asset: ImageAsset) => {
  const crop = asset.crop ?? { x: 0, y: 0, width: asset.width, height: asset.height };
  const scale = asset.width / crop.width;

  const windowStyle: CSSProperties = { aspectRatio: `${crop.width} / ${crop.height}` };
  const imageStyle: CSSProperties = {
    position: "absolute",
    maxWidth: "none",
    width: `${scale * 100}%`,
    height: "auto",
    left: `${(-crop.x / crop.width) * 100}%`,
    top: `${(-crop.y / crop.height) * 100}%`,
  };

  return { windowStyle, imageStyle, scale };
};

export default getCropStyle;
