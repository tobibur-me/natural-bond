import type { BrandConfig, ContactConfig } from "@/Types/Brand";

export type ImageCrop = { x: number; y: number; width: number; height: number };

export type ImageAsset = {
  src: string;
  width: number;
  height: number;
  alt: string;
  crop?: ImageCrop;
  fit?: "cover" | "contain";
};

export type SizeOption = {
  id: string;
  label: string;
  liters: number;
  price: number | null;
  image: ImageAsset;
};

export type DeliveryOption = { id: string; label: string; charge: number };

export type GalleryItem = ImageAsset & { id: string; caption: string };

export type VideoConfig = { src: string | null; poster: string | null };

export type QuantityConfig = { min: number; max: number; initial: number };

export type SiteConfigShape = {
  brand: BrandConfig;
  contact: ContactConfig;
  logo: ImageAsset;
  heroBottle: ImageAsset;
  shareImage: ImageAsset;
  sizes: SizeOption[];
  delivery: DeliveryOption[];
  quantity: QuantityConfig;
  gallery: GalleryItem[];
  video: VideoConfig;
};
