import GalleryTile from "@/Components/Gallery/GalleryTile";
import type { GalleryGridProps } from "@/Types/GalleryProps";

// The first image leads as a tall tile, with the others beside it in two rows.
const GalleryGrid = ({ items, onOpen }: GalleryGridProps) => (
  <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-3 lg:grid-cols-[1.35fr_1fr_1fr] lg:gap-5">
    {items.map((item, index) => (
      <li key={item.id} data-reveal className={index === 0 ? "col-span-2 lg:col-span-1 lg:row-span-2" : undefined}>
        <GalleryTile item={item} index={index} onOpen={onOpen} />
      </li>
    ))}
  </ul>
);

export default GalleryGrid;
