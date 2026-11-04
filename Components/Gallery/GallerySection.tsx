import Gallery from "@/Components/Gallery/Gallery";
import Container from "@/Components/Ui/Container";
import SectionDivider from "@/Components/Ui/SectionDivider";
import SectionHeading from "@/Components/Ui/SectionHeading";
import galleryCopy from "@/Data/GalleryCopy";

const GallerySection = () => (
  <section id="gallery" className="section-y on-dark relative bg-deep">
    <Container>
      <SectionHeading title={galleryCopy.title} subtitle={galleryCopy.subtitle} dark />
      <div className="mt-10 lg:mt-14">
        <Gallery />
      </div>
    </Container>
    <SectionDivider fill="text-cream" flip />
  </section>
);

export default GallerySection;
