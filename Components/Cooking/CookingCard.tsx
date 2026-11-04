import CroppedImage from "@/Components/Ui/CroppedImage";
import type { CookingCardProps } from "@/Types/SectionProps";

const CookingCard = ({ dish }: CookingCardProps) => (
  <li data-reveal className="card-surface group overflow-hidden">
    <div className="overflow-hidden">
      <CroppedImage
        asset={dish.asset}
        displayWidth={420}
        className="w-full transition-transform duration-700 ease-out group-hover:scale-105"
      />
    </div>
    <div className="p-5 sm:p-6">
      <h3 className="text-2xl text-forest">{dish.title}</h3>
      <p className="mt-2 text-ink">{dish.text}</p>
    </div>
  </li>
);

export default CookingCard;
