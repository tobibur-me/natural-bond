import orderCopy from "@/Data/OrderCopy";
import type { OrderStatusProps } from "@/Types/OrderProps";

// Stays neutral: opening WhatsApp doesn't confirm an order. The link is a fallback for
// in-app browsers that refuse to open a new tab.
const OrderStatus = ({ url }: OrderStatusProps) => (
  <div role="status">
    {url && (
      <div className="rounded-plate bg-sun/25 p-4 text-ink">
        <p>{orderCopy.status}</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block text-forest underline underline-offset-4"
        >
          {orderCopy.statusLink}
        </a>
      </div>
    )}
  </div>
);

export default OrderStatus;
