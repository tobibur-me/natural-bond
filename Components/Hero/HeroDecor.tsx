import DropletDecor from "@/Components/Decor/DropletDecor";
import FlowerDecor from "@/Components/Decor/FlowerDecor";
import LeafDecor from "@/Components/Decor/LeafDecor";

// Deliberately sparse: one of each, so the bottle stays the subject.
const HeroDecor = () => (
  <>
    <span data-float className="absolute top-[22%] left-0 w-12 text-leaf lg:w-20">
      <LeafDecor />
    </span>
    <span data-float className="absolute right-[3%] bottom-[20%] z-10 w-11 lg:w-[4.5rem]">
      <FlowerDecor />
    </span>
    <span data-float className="absolute top-[34%] right-[8%] z-10 w-4 lg:w-7">
      <DropletDecor />
    </span>
  </>
);

export default HeroDecor;
