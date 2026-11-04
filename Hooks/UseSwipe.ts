import { useRef } from "react";
import motionConfig from "@/Config/MotionConfig";
import type { SwipeHandlers, SwipeOptions } from "@/Types/GalleryProps";

const useSwipe = ({ onPrev, onNext, disabled }: SwipeOptions) => {
  const startX = useRef<number | null>(null);
  const swiped = useRef(false);

  const handlers: SwipeHandlers = {
    onPointerDown: (event) => {
      swiped.current = false;
      startX.current = event.clientX;
    },
    onPointerUp: (event) => {
      if (disabled || startX.current === null) return;
      const distance = event.clientX - startX.current;
      startX.current = null;
      if (Math.abs(distance) < motionConfig.swipeThresholdPx) return;
      swiped.current = true;
      if (distance < 0) onNext();
      else onPrev();
    },
    onPointerCancel: () => {
      startX.current = null;
    },
  };

  // Lets the click that ends a swipe be ignored, so a swipe doesn't also count as a tap.
  return { handlers, wasSwipe: () => swiped.current };
};

export default useSwipe;
