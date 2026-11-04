import cx from "@/Lib/Cx";
import type { ContainerProps } from "@/Types/UiProps";

const Container = ({ children, className }: ContainerProps) => (
  <div className={cx("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)}>{children}</div>
);

export default Container;
