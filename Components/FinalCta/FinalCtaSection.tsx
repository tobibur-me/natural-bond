import { Phone } from "lucide-react";
import FinalCtaBottle from "@/Components/FinalCta/FinalCtaBottle";
import WhatsAppIcon from "@/Components/Icons/WhatsAppIcon";
import Container from "@/Components/Ui/Container";
import LinkButton from "@/Components/Ui/LinkButton";
import SectionDivider from "@/Components/Ui/SectionDivider";
import finalCtaCopy from "@/Data/FinalCtaCopy";
import contactLinks from "@/Lib/ContactLinks";

const FinalCtaSection = () => (
  <section data-float-group className="on-dark relative overflow-hidden bg-forest pt-14 lg:pt-20">
    <Container className="relative grid items-end gap-8 lg:grid-cols-[1.25fr_.75fr]">
      <div data-reveal className="pb-4 text-center lg:pb-36 lg:text-left">
        <h2 className="text-section text-cream">{finalCtaCopy.title}</h2>
        <p className="mt-5 max-w-[52ch] text-xl text-cream/90 max-lg:mx-auto">{finalCtaCopy.text}</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
          <LinkButton href={contactLinks.whatsapp} external>
            <WhatsAppIcon className="size-5" />
            {finalCtaCopy.whatsapp}
          </LinkButton>
          <LinkButton href={contactLinks.call} variant="light">
            <Phone className="size-5" aria-hidden="true" />
            {finalCtaCopy.call}
          </LinkButton>
        </div>
      </div>
      <FinalCtaBottle />
    </Container>
    <SectionDivider fill="text-cream" flip />
  </section>
);

export default FinalCtaSection;
