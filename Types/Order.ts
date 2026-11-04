export type OrderFieldName = "name" | "phone" | "address" | "delivery" | "notes";

export type OrderValues = Record<OrderFieldName, string>;

export type OrderErrors = Partial<Record<OrderFieldName, string>>;

export type OrderValidation = {
  values: OrderValues;
  errors: OrderErrors;
  isValid: boolean;
};

export type OrderSelection = { sizeId: string; quantity: number; deliveryId: string | null };

export type OrderContextValue = OrderSelection & {
  setSizeId: (id: string) => void;
  setQuantity: (quantity: number) => void;
  setDeliveryId: (id: string) => void;
};

export type TotalsInput = {
  unit: number | null;
  quantity: number;
  delivery: number | null;
};

export type OrderTotals = {
  unit: number | null;
  subtotal: number | null;
  delivery: number | null;
  total: number | null;
};

export type OrderMessageInput = {
  sizeLabel: string;
  quantity: number;
  values: OrderValues;
  totals: OrderTotals;
  deliveryLabel: string | null;
};

export type SentOrder = { url: string; selectionKey: string };
