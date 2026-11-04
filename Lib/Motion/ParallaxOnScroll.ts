import { gsap } from "@/Lib/Gsap";

// Desktop only. Each image sits slightly oversized inside its mask, so the drift never shows an edge.
const parallaxOnScroll = () => {
  gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((element) => {
    gsap.fromTo(
      element,
      { yPercent: -5 },
      {
        yPercent: 5,
        ease: "none",
        scrollTrigger: { trigger: element.parentElement, scrub: true },
      },
    );
  });
};

export default parallaxOnScroll;
