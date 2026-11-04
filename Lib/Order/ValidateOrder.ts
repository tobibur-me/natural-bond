import validationCopy from "@/Data/ValidationCopy";
import normalizePhone from "@/Lib/Order/NormalizePhone";
import type { OrderErrors, OrderValidation } from "@/Types/Order";

const readField = (data: FormData, name: string) => String(data.get(name) ?? "").trim();

const validateOrder = (data: FormData): OrderValidation => {
  const name = readField(data, "name");
  const rawPhone = readField(data, "phone");
  const address = readField(data, "address");
  const delivery = readField(data, "delivery");
  const notes = readField(data, "notes");
  const phone = normalizePhone(rawPhone);

  const errors: OrderErrors = {};
  if (!name) errors.name = validationCopy.nameRequired;
  if (!rawPhone) errors.phone = validationCopy.phoneRequired;
  else if (!phone) errors.phone = validationCopy.phoneInvalid;
  if (!address) errors.address = validationCopy.addressRequired;
  if (!delivery) errors.delivery = validationCopy.deliveryRequired;

  return {
    values: { name, phone: phone ?? rawPhone, address, delivery, notes },
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};

export default validateOrder;
