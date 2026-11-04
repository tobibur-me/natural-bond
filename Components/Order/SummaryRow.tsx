import cx from "@/Lib/Cx";
import type { SummaryRowProps } from "@/Types/OrderProps";

const SummaryRow = ({ label, value, strong }: SummaryRowProps) => (
  <div
    className={cx(
      "flex items-baseline justify-between gap-4 border-b py-2.5",
      strong ? "border-transparent pt-4 text-forest" : "border-forest/15",
    )}
  >
    <dt className={strong ? "text-xl" : "text-ink"}>{label}</dt>
    <dd className={cx("text-right", strong ? "text-3xl" : "text-forest")}>{value}</dd>
  </div>
);

export default SummaryRow;
