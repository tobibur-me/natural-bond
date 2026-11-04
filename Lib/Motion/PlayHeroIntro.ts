import motionConfig from "@/Config/MotionConfig";
import { gsap } from "@/Lib/Gsap";

const releaseGate = () => document.documentElement.classList.add("motion-live");

// Runs the hero entrance. Start states are set before the CSS gate lifts, so nothing flashes.
const playHeroIntro = () => {
  if (performance.now() > motionConfig.lateIntroMs) {
    releaseGate();
    return;
  }

  const { intro } = motionConfig.durations;
  const fades = gsap.utils.toArray<HTMLElement>('[data-intro="fade"]');
  const settles = gsap.utils.toArray<HTMLElement>('[data-intro="settle"]');

  gsap.set(fades, { opacity: 0, y: 16 });
  gsap.set(settles, { y: 14 });
  releaseGate();

  gsap
    .timeline({ defaults: { ease: motionConfig.ease, duration: intro } })
    .to(settles, { y: 0 }, 0)
    .to(fades, { opacity: 1, y: 0, stagger: 0.09, clearProps: "opacity,transform" }, 0.05);
};

export default playHeroIntro;
