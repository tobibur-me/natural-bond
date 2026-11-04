import siteConfig from "@/Config/SiteConfig";
import orderCopy from "@/Data/OrderCopy";
import useOrder from "@/Hooks/UseOrder";
import formatTaka from "@/Lib/Format/FormatTaka";
import type { DeliveryFieldProps } from "@/Types/OrderProps";

// Nothing is preselected, so nobody outside Dhaka sees a lower total by accident.
const DeliveryField = ({ error }: DeliveryFieldProps) => {
  const { deliveryId, setDeliveryId } = useOrder();

  return (
    <fieldset aria-describedby={error ? "order-delivery-error" : undefined}>
      <legend className="text-lg text-forest">{orderCopy.deliveryLegend}</legend>
      <div className="mt-3 grid grid-cols-2 gap-2 sm:gap-3">
        {siteConfig.delivery.map((option) => (
          <label key={option.id} className="relative block">
            <input
              type="radio"
              name="delivery"
              value={option.id}
              required
              checked={option.id === deliveryId}
              onChange={() => setDeliveryId(option.id)}
              className="sr-only"
            />
            <span className="size-pill">
              {option.label}
              <span className="text-base">{formatTaka(option.charge)}</span>
            </span>
          </label>
        ))}
      </div>
      {error && (
        <p id="order-delivery-error" role="alert" className="mt-2 text-base text-error">
          {error}
        </p>
      )}
    </fieldset>
  );
};

export default DeliveryField;
