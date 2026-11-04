import iconPaths from "@/Data/IconPaths";
import type { ClassNameProps } from "@/Types/UiProps";

const WhatsAppIcon = ({ className }: ClassNameProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d={iconPaths.whatsapp} />
  </svg>
);

export default WhatsAppIcon;
