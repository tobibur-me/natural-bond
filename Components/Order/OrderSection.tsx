import OrderForm from "@/Components/Order/OrderForm";
import Container from "@/Components/Ui/Container";
import LinkButton from "@/Components/Ui/LinkButton";
import SectionDivider from "@/Components/Ui/SectionDivider";
import SectionHeading from "@/Components/Ui/SectionHeading";
import finalCtaCopy from "@/Data/FinalCtaCopy";
import orderCopy from "@/Data/OrderCopy";
import contactLinks from "@/Lib/ContactLinks";

const OrderSection = () => (
  <section id="order" className="section-y on-dark relative bg-forest">
    <Container>
      <SectionHeading title={orderCopy.title} subtitle={orderCopy.subtitle} dark />
      <noscript>
        <div className="mx-auto mt-8 flex max-w-2xl flex-col items-center gap-4 text-center text-cream">
          <p>{orderCopy.noScript}</p>
          <LinkButton href={contactLinks.whatsapp}>{finalCtaCopy.whatsapp}</LinkButton>
          <LinkButton href={contactLinks.call} variant="light">
            {finalCtaCopy.call}
          </LinkButton>
        </div>
      </noscript>
      <div className="mx-auto mt-10 max-w-6xl lg:mt-14">
        <OrderForm />
      </div>
    </Container>
    <SectionDivider fill="text-cream" flip />
  </section>
);

export default OrderSection;
