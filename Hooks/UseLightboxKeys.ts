import { useEffect } from "react";
import type { GalleryNavProps } from "@/Types/GalleryProps";

// Arrow keys change the image. Esc is handled natively by <dialog>.
const useLightboxKeys = ({ onPrev, onNext }: GalleryNavProps) => {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") onPrev();
      if (event.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onPrev, onNext]);
};

export default useLightboxKeys;
