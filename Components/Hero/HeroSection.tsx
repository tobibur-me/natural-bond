import HeroCopyBlock from "@/Components/Hero/HeroCopyBlock";
import HeroVisual from "@/Components/Hero/HeroVisual";
import Container from "@/Components/Ui/Container";
import SectionDivider from "@/Components/Ui/SectionDivider";
import cx from "@/Lib/Cx";

const HeroSection = () => (
  <section id="home" className="hero-backdrop relative -mt-[4.5rem] overflow-hidden pt-[4.5rem]">
    <Container
      className={cx(
        "grid items-center gap-6 pt-3 pb-20 sm:pb-28",
        "lg:min-h-[calc(100dvh-4.5rem)] lg:grid-cols-[1.08fr_.92fr] lg:gap-8 lg:pt-8 lg:pb-36",
      )}
    >
      <HeroCopyBlock />
      <HeroVisual />
    </Container>
    <SectionDivider fill="text-forest" />
  </section>
);

export default HeroSection;
