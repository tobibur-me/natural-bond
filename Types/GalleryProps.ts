import type { PointerEvent } from "react";
import type { GalleryItem } from "@/Types/Config";

export type GalleryNavProps = { onPrev: () => void; onNext: () => void };

export type GalleryGridProps = {
  items: GalleryItem[];
  onOpen: (index: number) => void;
};

export type GalleryTileProps = {
  item: GalleryItem;
  index: number;
  onOpen: (index: number) => void;
};

export type LightboxProps = GalleryNavProps & {
  items: GalleryItem[];
  index: number;
  onClose: () => void;
};

export type LightboxStageProps = GalleryNavProps & { item: GalleryItem };

export type SwipeOptions = GalleryNavProps & { disabled?: boolean };

export type SwipeHandlers = {
  onPointerDown: (event: PointerEvent<HTMLElement>) => void;
  onPointerUp: (event: PointerEvent<HTMLElement>) => void;
  onPointerCancel: () => void;
};
