import type { OrderErrors, OrderFieldName } from "@/Types/Order";

const fieldOrder: OrderFieldName[] = ["name", "phone", "address", "delivery"];

const focusFirstInvalid = (form: HTMLFormElement, errors: OrderErrors) => {
  const first = fieldOrder.find((name) => errors[name]);
  if (!first) return;

  // Radio buttons come back as a list, so focus the first one in the group.
  const field = form.elements.namedItem(first);
  const target = field instanceof RadioNodeList ? field[0] : field;
  if (target instanceof HTMLElement) target.focus();
};

export default focusFirstInvalid;
