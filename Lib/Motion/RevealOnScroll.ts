import motionConfig from "@/Config/MotionConfig";
import { gsap, ScrollTrigger } from "@/Lib/Gsap";

// Animates opacity rather than visibility, so hidden items stay reachable by keyboard
// and tabbing to one scrolls it into view, which then reveals it.
const revealOnScroll = () => {
  const { distance, stagger, start } = motionConfig.reveal;
  const targets = gsap.utils.toArray<HTMLElement>("[data-reveal]");

  gsap.set(targets, { opacity: 0, y: distance });

  ScrollTrigger.batch(targets, {
    start,
    once: true,
    onEnter: (batch) =>
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        stagger,
        ease: motionConfig.ease,
        duration: motionConfig.durations.reveal,
        clearProps: "transform",
      }),
  });
};

export default revealOnScroll;
