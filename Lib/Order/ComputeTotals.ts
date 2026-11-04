import type { OrderTotals, TotalsInput } from "@/Types/Order";

// A value stays null unless everything it depends on is known. Compare with null,
// not truthiness, because a delivery charge of 0 is a real, known value.
const computeTotals = ({ unit, quantity, delivery }: TotalsInput): OrderTotals => {
  const subtotal = unit === null ? null : unit * quantity;
  const total = subtotal === null || delivery === null ? null : subtotal + delivery;

  return { unit, subtotal, delivery, total };
};

export default computeTotals;
