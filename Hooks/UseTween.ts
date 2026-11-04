import { type RefObject, useEffect, useRef } from "react";
import motionConfig from "@/Config/MotionConfig";
import type { TweenOptions } from "@/Types/SectionProps";

// One-shot animation when `trigger` changes. GSAP loads on first use to keep the first page light.
const useTween = (ref: RefObject<HTMLElement | null>, trigger: unknown, options: TweenOptions, enabled = true) => {
  const isFirstRun = useRef(true);

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    const element = ref.current;
    if (!element || !enabled || !matchMedia(motionConfig.queries.motionOk).matches) return;

    let cancelled = false;
    let kill = () => {};
    import("gsap").then(({ gsap }) => {
      if (cancelled) return;
      const tween = gsap.fromTo(element, options.from, { ...options.to, ease: motionConfig.ease });
      kill = () => tween.kill();
    });

    return () => {
      cancelled = true;
      kill();
    };
    // Only `trigger` should restart the animation.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trigger]);
};

export default useTween;
