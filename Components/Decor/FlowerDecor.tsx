import type { ClassNameProps } from "@/Types/UiProps";

// A mustard flower has four petals.
const FlowerDecor = ({ className }: ClassNameProps) => (
  <svg viewBox="0 0 64 64" aria-hidden="true" className={className}>
    <g fill="#f2c14e">
      <ellipse cx="32" cy="15" rx="10.5" ry="13" />
      <ellipse cx="32" cy="49" rx="10.5" ry="13" />
      <ellipse cx="15" cy="32" rx="13" ry="10.5" />
      <ellipse cx="49" cy="32" rx="13" ry="10.5" />
    </g>
    <g fill="#e3ac25">
      <ellipse cx="32" cy="19" rx="3.5" ry="7" />
      <ellipse cx="32" cy="45" rx="3.5" ry="7" />
      <ellipse cx="19" cy="32" rx="7" ry="3.5" />
      <ellipse cx="45" cy="32" rx="7" ry="3.5" />
    </g>
    <circle cx="32" cy="32" r="5.5" fill="#b9791a" />
  </svg>
);

export default FlowerDecor;
