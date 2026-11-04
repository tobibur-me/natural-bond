import WhatsAppIcon from "@/Components/Icons/WhatsAppIcon";
import FaqItem from "@/Components/Faq/FaqItem";
import Container from "@/Components/Ui/Container";
import LinkButton from "@/Components/Ui/LinkButton";
import SectionDivider from "@/Components/Ui/SectionDivider";
import SectionHeading from "@/Components/Ui/SectionHeading";
import faqCopy from "@/Data/FaqCopy";
import contactLinks from "@/Lib/ContactLinks";

const FaqSection = () => (
  <section id="faq" className="section-y relative bg-cream">
    <Container className="grid gap-8 lg:grid-cols-[.7fr_1.3fr] lg:gap-16">
      <div>
        <SectionHeading title={faqCopy.title} subtitle={faqCopy.helper} align="start" />
        <LinkButton href={contactLinks.whatsapp} variant="outline" external small className="mt-5">
          <WhatsAppIcon className="size-5" />
          {faqCopy.helperCta}
        </LinkButton>
      </div>
      <div data-reveal className="border-t border-forest/20">
        {faqCopy.faqs.map((faq, index) => (
          <FaqItem key={faq.question} faq={faq} defaultOpen={index === 0} />
        ))}
      </div>
    </Container>
    <SectionDivider fill="text-forest" />
  </section>
);

export default FaqSection;
