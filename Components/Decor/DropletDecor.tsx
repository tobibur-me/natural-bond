import type { ClassNameProps } from "@/Types/UiProps";

const DropletDecor = ({ className }: ClassNameProps) => (
  <svg viewBox="0 0 40 56" aria-hidden="true" className={className}>
    <path fill="#e3ac25" d="M20 2c8 13 18 22 18 34a18 18 0 0 1-36 0C2 24 12 15 20 2Z" />
    <path fill="#f2c14e" d="M20 12c5 9 12 15 12 24a12 12 0 0 1-24 0c0-9 7-15 12-24Z" />
    <ellipse cx="14" cy="36" rx="3" ry="6" fill="#fff9eb" fillOpacity=".75" />
  </svg>
);

export default DropletDecor;
