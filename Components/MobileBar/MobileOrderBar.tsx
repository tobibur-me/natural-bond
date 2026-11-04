"use client";

import { Phone, ShoppingCart } from "lucide-react";
import LinkButton from "@/Components/Ui/LinkButton";
import mobileBarCopy from "@/Data/MobileBarCopy";
import useBarVisibility from "@/Hooks/UseBarVisibility";
import contactLinks from "@/Lib/ContactLinks";

const MobileOrderBar = () => {
  const visible = useBarVisibility();

  return (
    <div
      data-visible={visible}
      inert={!visible}
      className="mobile-bar pb-safe fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 bg-cream px-3 pt-2.5 md:hidden"
    >
      <LinkButton href={contactLinks.call} variant="outline" small>
        <Phone className="size-4" aria-hidden="true" />
        {mobileBarCopy.call}
      </LinkButton>
      <LinkButton href="#order" small>
        <ShoppingCart className="size-4" aria-hidden="true" />
        {mobileBarCopy.order}
      </LinkButton>
    </div>
  );
};

export default MobileOrderBar;
