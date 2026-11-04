import { Phone, ShoppingCart } from "lucide-react";
import LinkButton from "@/Components/Ui/LinkButton";
import siteConfig from "@/Config/SiteConfig";
import heroCopy from "@/Data/HeroCopy";
import contactLinks from "@/Lib/ContactLinks";
import formatTaka from "@/Lib/Format/FormatTaka";

const { label, price } = siteConfig.sizes[0];

const HeroActions = () => (
  <div data-intro="fade" className="order-1 mt-4 lg:order-none lg:mt-7">
    {price !== null && (
      <p className="text-xl text-forest">
        {label} <span className="text-2xl">{formatTaka(price)}</span>
      </p>
    )}
    <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      <LinkButton href="#order">
        <ShoppingCart className="size-5" aria-hidden="true" />
        {heroCopy.primaryCta}
      </LinkButton>
      <LinkButton href={contactLinks.call} variant="outline">
        <Phone className="size-5" aria-hidden="true" />
        {heroCopy.secondaryCta}
      </LinkButton>
    </div>
  </div>
);

export default HeroActions;
