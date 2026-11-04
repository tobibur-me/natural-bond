import dividerShapes from "@/Data/DividerShapes";
import cx from "@/Lib/Cx";
import type { SectionDividerProps } from "@/Types/DividerProps";

const { viewBox, fill: fillPath, line: linePath } = dividerShapes;

// Sits on the bottom edge of a section and is filled with the next section's colour.
const SectionDivider = ({ fill, line = "text-gold", flip }: SectionDividerProps) => (
  <div
    aria-hidden="true"
    className={cx("pointer-events-none absolute inset-x-0 -bottom-px z-10 h-8 sm:h-14 lg:h-24", flip && "-scale-x-100")}
  >
    <svg viewBox={viewBox} preserveAspectRatio="none" className={cx("absolute inset-0 size-full", fill)}>
      <path d={fillPath} fill="currentColor" />
    </svg>
    <svg
      data-divider-line
      viewBox={viewBox}
      preserveAspectRatio="none"
      className={cx("absolute inset-0 size-full overflow-visible", line)}
    >
      <path d={linePath} fill="none" stroke="currentColor" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
    </svg>
  </div>
);

export default SectionDivider;
