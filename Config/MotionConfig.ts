const motionConfig = {
  queries: {
    motionOk: "(prefers-reduced-motion: no-preference)",
    parallaxOk: "(prefers-reduced-motion: no-preference) and (min-width: 768px)",
  },
  // If GSAP loads later than this, the hero is already visible through the CSS failsafe.
  lateIntroMs: 1700,
  ease: "power3.out",
  durations: { intro: 0.8, reveal: 0.75, mask: 1.05 },
  reveal: { distance: 26, stagger: 0.09, start: "top 90%" },
  tweens: {
    pulse: { from: { scale: 0.97 }, to: { scale: 1, duration: 0.35, clearProps: "transform" } },
    fade: { from: { opacity: 0.3 }, to: { opacity: 1, duration: 0.4 } },
  },
  swipeThresholdPx: 48,
};

export default motionConfig;
