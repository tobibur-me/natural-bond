import cx from "@/Lib/Cx";
import type { SectionHeadingProps } from "@/Types/UiProps";

const SectionHeading = ({ title, subtitle, dark, align = "center" }: SectionHeadingProps) => (
  <div data-reveal className={cx("max-w-3xl", align === "center" && "mx-auto text-center")}>
    <h2 className={cx("text-section", dark ? "text-cream" : "text-forest")}>{title}</h2>
    {subtitle && <p className={cx("mt-4 text-lg", dark ? "text-cream/90" : "text-ink")}>{subtitle}</p>}
  </div>
);

export default SectionHeading;
