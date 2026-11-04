import SizeSelector from "@/Components/Size/SizeSelector";
import Container from "@/Components/Ui/Container";
import SectionDivider from "@/Components/Ui/SectionDivider";
import SectionHeading from "@/Components/Ui/SectionHeading";
import sizeCopy from "@/Data/SizeCopy";

const SizeSection = () => (
  <section id="products" className="section-y on-dark relative bg-forest">
    <Container>
      <SectionHeading title={sizeCopy.title} subtitle={sizeCopy.subtitle} dark />
      <div data-reveal className="mt-10 lg:mt-14">
        <SizeSelector />
      </div>
    </Container>
    <SectionDivider fill="text-cream" flip />
  </section>
);

export default SizeSection;
