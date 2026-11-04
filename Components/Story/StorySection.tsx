import StoryPanel from "@/Components/Story/StoryPanel";
import Container from "@/Components/Ui/Container";
import SectionDivider from "@/Components/Ui/SectionDivider";
import SectionHeading from "@/Components/Ui/SectionHeading";
import storyCopy from "@/Data/StoryCopy";

const StorySection = () => (
  <section id="story" className="section-y relative bg-cream">
    <Container>
      <SectionHeading title={storyCopy.title} subtitle={storyCopy.text} />
      <div className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-3 sm:gap-5 lg:mt-14 lg:grid-cols-3 lg:gap-6">
        {storyCopy.panels.map((panel) => (
          <StoryPanel key={panel.id} panel={panel} />
        ))}
      </div>
    </Container>
    <SectionDivider fill="text-sun" />
  </section>
);

export default StorySection;
