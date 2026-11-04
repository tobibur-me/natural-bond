import { Phone } from "lucide-react";
import WhatsAppIcon from "@/Components/Icons/WhatsAppIcon";
import LinkButton from "@/Components/Ui/LinkButton";
import headerCopy from "@/Data/HeaderCopy";
import contactLinks from "@/Lib/ContactLinks";

const HeaderContacts = () => (
  <>
    <a
      href={contactLinks.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={headerCopy.whatsappLabel}
      className="icon-btn"
    >
      <WhatsAppIcon className="size-5" />
    </a>
    <a href={contactLinks.call} aria-label={headerCopy.callLabel} className="icon-btn">
      <Phone className="size-5" aria-hidden="true" />
    </a>
    <LinkButton href="#order" small className="ml-1 hidden sm:inline-flex lg:hidden xl:inline-flex">
      {headerCopy.cta}
    </LinkButton>
  </>
);

export default HeaderContacts;
