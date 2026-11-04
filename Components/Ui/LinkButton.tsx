import cx from "@/Lib/Cx";
import type { LinkButtonProps } from "@/Types/UiProps";

const LinkButton = ({ href, children, variant = "primary", small, external, className, onClick }: LinkButtonProps) => (
  <a
    href={href}
    onClick={onClick}
    target={external ? "_blank" : undefined}
    rel={external ? "noopener noreferrer" : undefined}
    className={cx("btn", `btn-${variant}`, small && "btn-sm", className)}
  >
    {children}
  </a>
);

export default LinkButton;
