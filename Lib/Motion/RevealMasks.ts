import motionConfig from "@/Config/MotionConfig";
import { gsap } from "@/Lib/Gsap";

// The story images open up through their masks instead of sliding in like everything else.
const revealMasks = () => {
  gsap.utils.toArray<HTMLElement>("[data-reveal-mask]").forEach((element) => {
    gsap.fromTo(
      element,
      { clipPath: "inset(14% 10% 14% 10%)", opacity: 0.35 },
      {
        clipPath: "inset(0% 0% 0% 0%)",
        opacity: 1,
        ease: motionConfig.ease,
        duration: motionConfig.durations.mask,
        clearProps: "clipPath",
        scrollTrigger: { trigger: element, start: motionConfig.reveal.start, once: true },
      },
    );
  });
};

export default revealMasks;
