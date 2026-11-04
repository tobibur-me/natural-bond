import CookingCard from "@/Components/Cooking/CookingCard";
import Container from "@/Components/Ui/Container";
import SectionDivider from "@/Components/Ui/SectionDivider";
import SectionHeading from "@/Components/Ui/SectionHeading";
import cookingCopy from "@/Data/CookingCopy";

const CookingSection = () => (
  <section id="cooking" className="section-y relative bg-cream">
    <Container>
      <SectionHeading title={cookingCopy.title} />
      <ul className="mt-10 grid gap-6 md:grid-cols-3 lg:mt-14 lg:gap-8">
        {cookingCopy.dishes.map((dish) => (
          <CookingCard key={dish.id} dish={dish} />
        ))}
      </ul>
    </Container>
    <SectionDivider fill="text-forest" />
  </section>
);

export default CookingSection;
