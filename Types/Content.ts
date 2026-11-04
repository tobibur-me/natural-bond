import type { LucideIcon } from "lucide-react";
import type { ImageAsset } from "@/Types/Config";
import type { OrderFieldName } from "@/Types/Order";

export type NavLink = { href: string; label: string };

export type HeadingSegment = { text: string; accent?: boolean };

export type FeatureCopy = { icon: LucideIcon; title: string; text: string };

export type StoryPanelCopy = { id: string; asset: ImageAsset };

export type CookingCopy = { id: string; title: string; text: string; asset: ImageAsset };

export type FaqCopy = { question: string; answer: string };

export type OrderFieldCopy = {
  name: OrderFieldName;
  label: string;
  placeholder: string;
  autoComplete: string;
  maxLength: number;
  required: boolean;
  multiline: boolean;
  inputMode?: "tel" | "text";
};
