import CroppedImage from "@/Components/Ui/CroppedImage";
import type { StoryPanelProps } from "@/Types/SectionProps";

// The inner layer is slightly oversized, so the parallax drift never exposes an edge.
// The first arch runs full width on phones, with the other two below it.
const StoryPanel = ({ panel }: StoryPanelProps) => (
  <figure
    data-reveal-mask
    className="mask-arch relative aspect-[4/5] overflow-hidden bg-sun/30 first:col-span-2 lg:first:col-span-1"
  >
    <div data-parallax className="absolute -inset-[7%]">
      <CroppedImage asset={panel.asset} displayWidth={420} className="w-full" />
    </div>
  </figure>
);

export default StoryPanel;
