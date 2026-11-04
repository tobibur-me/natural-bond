"use client";

import motionConfig from "@/Config/MotionConfig";
import { gsap, ScrollTrigger, useGSAP } from "@/Lib/Gsap";
import drawDividers from "@/Lib/Motion/DrawDividers";
import floatDecor from "@/Lib/Motion/FloatDecor";
import parallaxOnScroll from "@/Lib/Motion/ParallaxOnScroll";
import playHeroIntro from "@/Lib/Motion/PlayHeroIntro";
import revealMasks from "@/Lib/Motion/RevealMasks";
import revealOnScroll from "@/Lib/Motion/RevealOnScroll";

// All page animation starts here. matchMedia reverts everything on unmount, and runs
// nothing for visitors who prefer reduced motion.
const MotionDirector = () => {
  useGSAP(() => {
    const media = gsap.matchMedia();

    media.add(motionConfig.queries.motionOk, () => {
      playHeroIntro();
      revealOnScroll();
      revealMasks();
      drawDividers();
      floatDecor();
    });
    media.add(motionConfig.queries.parallaxOk, parallaxOnScroll);

    // Bengali text reflows when the font arrives, which moves every trigger point.
    document.fonts.ready.then(() => ScrollTrigger.refresh());

    return () => media.revert();
  });

  return null;
};

export default MotionDirector;
