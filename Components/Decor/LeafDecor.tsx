import type { ClassNameProps } from "@/Types/UiProps";

const LeafDecor = ({ className }: ClassNameProps) => (
  <svg viewBox="0 0 64 64" aria-hidden="true" className={className}>
    <path fill="currentColor" d="M6 58C4 30 24 8 60 4c3 36-18 56-46 56-3 0-6-1-8-2Z" />
    <path fill="none" stroke="#fff9eb" strokeOpacity=".55" strokeWidth="1.6" d="M6 58C20 40 34 26 50 14" />
    <path fill="none" stroke="#fff9eb" strokeOpacity=".4" strokeWidth="1.2" d="M22 42l-3-14M32 32l-2-13M24 40l16 2" />
  </svg>
);

export default LeafDecor;
