import { Phone } from "lucide-react";
import WhatsAppIcon from "@/Components/Icons/WhatsAppIcon";
import LinkButton from "@/Components/Ui/LinkButton";
import orderCopy from "@/Data/OrderCopy";
import contactLinks from "@/Lib/ContactLinks";

const OrderActions = () => (
  <div className="grid gap-3">
    <button type="submit" className="btn btn-whatsapp min-h-16 w-full px-3 text-lg whitespace-nowrap sm:text-xl">
      <WhatsAppIcon className="size-6" />
      {orderCopy.submit}
    </button>
    <LinkButton href={contactLinks.call} variant="outline" className="w-full">
      <Phone className="size-5" aria-hidden="true" />
      {orderCopy.call}
    </LinkButton>
  </div>
);

export default OrderActions;
