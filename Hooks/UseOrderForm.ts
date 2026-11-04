import { type FormEvent, useState } from "react";
import useOrder from "@/Hooks/UseOrder";
import buildOrderMessage from "@/Lib/Order/BuildOrderMessage";
import buildWhatsAppUrl from "@/Lib/Order/BuildWhatsAppUrl";
import computeTotals from "@/Lib/Order/ComputeTotals";
import focusFirstInvalid from "@/Lib/Order/FocusFirstInvalid";
import getDeliveryOption from "@/Lib/Order/GetDeliveryOption";
import getSizeOption from "@/Lib/Order/GetSizeOption";
import openWhatsApp from "@/Lib/Order/OpenWhatsApp";
import validateOrder from "@/Lib/Order/ValidateOrder";
import type { OrderErrors, OrderFieldName, SentOrder } from "@/Types/Order";

const useOrderForm = () => {
  const { sizeId, quantity, deliveryId } = useOrder();
  const [errors, setErrors] = useState<OrderErrors>({});
  const [sent, setSent] = useState<SentOrder | null>(null);
  const selectionKey = `${sizeId}:${quantity}:${deliveryId}`;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const { values, errors: found, isValid } = validateOrder(new FormData(form));
    setErrors(found);
    if (!isValid) {
      setSent(null);
      focusFirstInvalid(form, found);
      return;
    }
    const size = getSizeOption(sizeId);
    const area = getDeliveryOption(values.delivery);
    const totals = computeTotals({ unit: size.price, quantity, delivery: area?.charge ?? null });
    const deliveryLabel = area?.label ?? null;
    const url = buildWhatsAppUrl(buildOrderMessage({ sizeLabel: size.label, quantity, values, totals, deliveryLabel }));
    setSent({ url, selectionKey });
    openWhatsApp(url);
  };

  const handleChange = (event: FormEvent<HTMLFormElement>) => {
    const name = (event.target as HTMLInputElement).name as OrderFieldName;
    setSent(null);
    setErrors((current) => (current[name] ? { ...current, [name]: undefined } : current));
  };

  // A fallback link is only offered while it still matches the current selection.
  const sentUrl = sent?.selectionKey === selectionKey ? sent.url : null;

  return { errors, handleSubmit, handleChange, sentUrl };
};

export default useOrderForm;
