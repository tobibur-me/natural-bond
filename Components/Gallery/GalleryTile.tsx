import AssetImage from "@/Components/Ui/AssetImage";
import galleryCopy from "@/Data/GalleryCopy";
import cx from "@/Lib/Cx";
import type { GalleryTileProps } from "@/Types/GalleryProps";

const GalleryTile = ({ item, index, onOpen }: GalleryTileProps) => (
  <button
    type="button"
    aria-label={`${galleryCopy.open}: ${item.alt}`}
    onClick={() => onOpen(index)}
    className={cx(
      "glow-ground group relative block w-full cursor-zoom-in overflow-hidden rounded-card",
      index === 0 ? "aspect-[4/5] lg:aspect-auto lg:h-full" : "aspect-[4/5]",
    )}
  >
    <span className="absolute inset-0 block transition-transform duration-700 ease-out group-hover:scale-[1.04]">
      <AssetImage
        asset={item}
        displayWidth={index === 0 ? 480 : 340}
        sizes={index === 0 ? "(min-width: 1024px) 480px, 92vw" : "(min-width: 1024px) 340px, 46vw"}
      />
    </span>
    <span className="absolute bottom-3 left-3 rounded-full bg-deep/85 px-3 py-0.5 text-sm text-cream">
      {item.caption}
    </span>
  </button>
);

export default GalleryTile;
