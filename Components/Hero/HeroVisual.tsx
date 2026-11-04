import Image from "next/image";
import HeroDecor from "@/Components/Hero/HeroDecor";
import siteConfig from "@/Config/SiteConfig";
import cx from "@/Lib/Cx";

const { heroBottle } = siteConfig;

// Comes first on phones, shorter, so the bottle and the order button share the first screen.
// Nested wrappers keep the entrance and the float on separate elements, so they never fight over `y`.
const HeroVisual = () => (
  <div
    data-float-group
    className={cx(
      "relative order-first mx-auto h-[min(19rem,78vw)] w-full max-w-[17rem]",
      "sm:h-[26rem] sm:max-w-[22rem] lg:order-none lg:h-[40rem] lg:max-w-[30rem]",
    )}
  >
    <div className="hero-arch absolute inset-x-[7%] top-[3%] bottom-0" />
    <div className="hero-arch-line absolute inset-x-[3%] top-0 bottom-[-0.75rem]" />
    <div className="bottle-glow absolute inset-x-[10%] top-[16%] h-[64%]" />
    <div className="floor-shadow absolute inset-x-[22%] bottom-[3%] h-[7%]" />
    <HeroDecor />
    <div data-float className="absolute inset-x-0 top-[5%] bottom-[5.5%] flex justify-center">
      <div data-intro="settle" className="h-full">
        <Image
          src={heroBottle.src}
          alt={heroBottle.alt}
          width={heroBottle.width}
          height={heroBottle.height}
          sizes="(min-width: 1024px) 220px, 130px"
          loading="eager"
          fetchPriority="high"
          className="h-full w-auto"
        />
      </div>
    </div>
  </div>
);

export default HeroVisual;
