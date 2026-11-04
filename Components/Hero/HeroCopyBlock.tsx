import { Leaf } from "lucide-react";
import HeroActions from "@/Components/Hero/HeroActions";
import HeroHeading from "@/Components/Hero/HeroHeading";
import heroCopy from "@/Data/HeroCopy";

// On phones the buttons move above the paragraph, so they stay on the first screen.
const HeroCopyBlock = () => (
  <div className="flex max-w-2xl flex-col">
    <p data-intro="fade" className="flex items-center gap-2 text-lg text-forest">
      <Leaf className="size-5 shrink-0 text-leaf" aria-hidden="true" />
      {heroCopy.eyebrow}
    </p>
    <HeroHeading />
    <p data-intro="settle" className="order-2 mt-6 max-w-[60ch] text-lg text-ink sm:text-xl lg:order-none">
      {heroCopy.text}
    </p>
    <HeroActions />
    <p data-intro="fade" className="order-3 mt-5 text-base text-ink lg:order-none">
      {heroCopy.trust}
    </p>
  </div>
);

export default HeroCopyBlock;
