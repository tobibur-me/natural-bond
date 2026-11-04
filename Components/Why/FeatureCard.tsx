import type { FeatureCardProps } from "@/Types/SectionProps";

// Open columns under a gold hairline. On phones the icon sits beside the text to save height.
const FeatureCard = ({ feature: { icon: Icon, title, text } }: FeatureCardProps) => (
  <li data-reveal className="grid grid-cols-[3.5rem_1fr] gap-x-4 border-t-2 border-gold pt-5 lg:block lg:pt-7">
    <Icon className="size-12 text-forest" strokeWidth={1.25} aria-hidden="true" />
    <div>
      <h3 className="text-2xl text-forest lg:mt-5">{title}</h3>
      <p className="mt-2 text-ink">{text}</p>
    </div>
  </li>
);

export default FeatureCard;
