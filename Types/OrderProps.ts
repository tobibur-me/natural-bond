import type { SizeOption } from "@/Types/Config";
import type { OrderFieldCopy } from "@/Types/Content";

export type SizeCardProps = {
  option: SizeOption;
  selected: boolean;
  onSelect: (id: string) => void;
};

export type SizeStageProps = { activeId: string };

export type SizePriceProps = { price: number | null };

export type TextFieldProps = {
  field: OrderFieldCopy;
  error?: string;
};

export type DeliveryFieldProps = { error?: string };

export type FormFieldsProps = { errors: Partial<Record<OrderFieldCopy["name"], string>> };

export type SummaryRowProps = {
  label: string;
  value: string;
  strong?: boolean;
};

export type OrderStatusProps = { url: string | null };
