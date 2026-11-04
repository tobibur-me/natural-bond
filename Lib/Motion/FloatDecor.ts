import { gsap, ScrollTrigger } from "@/Lib/Gsap";

// Gentle looping drift. Each group pauses while off-screen to save battery on low-end phones.
const floatDecor = () => {
  gsap.utils.toArray<HTMLElement>("[data-float-group]").forEach((group) => {
    const loops = gsap.utils.toArray<HTMLElement>("[data-float]", group).map((element, index) =>
      gsap.to(element, {
        y: index % 2 === 0 ? -12 : 10,
        rotation: index % 2 === 0 ? 4 : -3,
        duration: 3 + (index % 3) * 0.7,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        paused: true,
      }),
    );

    ScrollTrigger.create({
      trigger: group,
      onToggle: (self) => loops.forEach((loop) => (self.isActive ? loop.play() : loop.pause())),
      onRefresh: (self) => loops.forEach((loop) => (self.isActive ? loop.play() : loop.pause())),
    });
  });
};

export default floatDecor;
