import Container from "@/Components/Ui/Container";
import SectionDivider from "@/Components/Ui/SectionDivider";
import SectionHeading from "@/Components/Ui/SectionHeading";
import FeatureCard from "@/Components/Why/FeatureCard";
import whyCopy from "@/Data/WhyCopy";

const WhySection = () => (
  <section id="why" className="section-y relative bg-cream">
    <Container>
      <SectionHeading title={whyCopy.title} />
      <ul className="mt-10 grid gap-x-8 gap-y-6 md:grid-cols-2 lg:mt-14 lg:grid-cols-4">
        {whyCopy.features.map((feature) => (
          <FeatureCard key={feature.title} feature={feature} />
        ))}
      </ul>
    </Container>
    <SectionDivider fill="text-deep" />
  </section>
);

export default WhySection;
