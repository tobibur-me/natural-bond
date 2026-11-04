import AssetImage from "@/Components/Ui/AssetImage";
import galleryCopy from "@/Data/GalleryCopy";
import useImageZoom from "@/Hooks/UseImageZoom";
import useSwipe from "@/Hooks/UseSwipe";
import cx from "@/Lib/Cx";
import type { LightboxStageProps } from "@/Types/GalleryProps";

// Remounted for each image, which resets the zoom. Swiping is off while zoomed.
const LightboxStage = ({ item, onPrev, onNext }: LightboxStageProps) => {
  const zoom = useImageZoom();
  const swipe = useSwipe({ onPrev, onNext, disabled: zoom.zoomed });

  return (
    <button
      type="button"
      aria-label={`${zoom.zoomed ? galleryCopy.zoomOut : galleryCopy.zoomIn}: ${item.alt}`}
      aria-pressed={zoom.zoomed}
      onClick={(event) => !swipe.wasSwipe() && zoom.toggle(event)}
      {...swipe.handlers}
      className={cx(
        "glow-ground relative block aspect-[4/5] w-[min(94vw,calc(84dvh*0.8))]",
        "touch-pan-y overflow-hidden rounded-card",
        zoom.zoomed ? "cursor-zoom-out" : "cursor-zoom-in",
      )}
    >
      <span className="relative block h-full w-full transition-transform duration-300" style={zoom.style}>
        <AssetImage asset={item} displayWidth={760} sizes="(min-width: 768px) 760px, 94vw" contain />
      </span>
    </button>
  );
};

export default LightboxStage;
