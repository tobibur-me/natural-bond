"use client";

import { X } from "lucide-react";
import { useEffect } from "react";
import LightboxArrows from "@/Components/Gallery/LightboxArrows";
import LightboxStage from "@/Components/Gallery/LightboxStage";
import galleryCopy from "@/Data/GalleryCopy";
import useDialog from "@/Hooks/UseDialog";
import useLightboxKeys from "@/Hooks/UseLightboxKeys";
import toBanglaDigits from "@/Lib/Format/ToBanglaDigits";
import type { LightboxProps } from "@/Types/GalleryProps";

const Lightbox = ({ items, index, onPrev, onNext, onClose }: LightboxProps) => {
  const { ref, open, close } = useDialog();
  useLightboxKeys({ onPrev, onNext });

  useEffect(() => {
    open();
    // Opens once when the viewer mounts.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <dialog ref={ref} aria-label={galleryCopy.viewerLabel} onClose={onClose} className="viewer on-dark">
      <div
        className="flex h-full flex-col items-center justify-center gap-3 p-3"
        onClick={(event) => event.target === event.currentTarget && close()}
      >
        <div className="flex w-full max-w-3xl items-center justify-between">
          <p aria-live="polite">{toBanglaDigits(`${index + 1} / ${items.length}`)}</p>
          <button type="button" aria-label={galleryCopy.close} onClick={close} className="icon-btn text-cream">
            <X className="size-6" aria-hidden="true" />
          </button>
        </div>
        <div className="relative">
          <LightboxStage key={items[index].id} item={items[index]} onPrev={onPrev} onNext={onNext} />
          <LightboxArrows onPrev={onPrev} onNext={onNext} />
        </div>
      </div>
    </dialog>
  );
};

export default Lightbox;
