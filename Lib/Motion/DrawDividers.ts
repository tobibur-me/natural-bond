import { gsap } from "@/Lib/Gsap";

// Each gold line draws itself once as its divider scrolls into view.
const drawDividers = () => {
  gsap.utils.toArray<SVGElement>("[data-divider-line]").forEach((line) => {
    gsap.fromTo(
      line,
      { clipPath: "inset(-30% 100% -30% 0%)" },
      {
        clipPath: "inset(-30% 0% -30% 0%)",
        duration: 1.5,
        ease: "power2.inOut",
        clearProps: "clipPath",
        scrollTrigger: { trigger: line, start: "top 92%", once: true },
      },
    );
  });
};

export default drawDividers;
