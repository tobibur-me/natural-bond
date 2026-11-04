import { ChevronLeft, ChevronRight } from "lucide-react";
import galleryCopy from "@/Data/GalleryCopy";
import type { GalleryNavProps } from "@/Types/GalleryProps";

const arrowClass = "icon-btn absolute top-1/2 hidden -translate-y-1/2 bg-plate shadow-card md:inline-flex";

// Desktop only: touch screens swipe instead.
const LightboxArrows = ({ onPrev, onNext }: GalleryNavProps) => (
  <>
    <button type="button" aria-label={galleryCopy.previous} onClick={onPrev} className={`${arrowClass} left-3`}>
      <ChevronLeft className="size-6" aria-hidden="true" />
    </button>
    <button type="button" aria-label={galleryCopy.next} onClick={onNext} className={`${arrowClass} right-3`}>
      <ChevronRight className="size-6" aria-hidden="true" />
    </button>
  </>
);

export default LightboxArrows;
