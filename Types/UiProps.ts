import type { ReactNode } from "react";
import type { ImageAsset } from "@/Types/Config";

export type ChildrenProps = { children: ReactNode };

export type ContainerProps = ChildrenProps & { className?: string };

export type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  dark?: boolean;
  align?: "center" | "start";
};

export type LinkButtonProps = ChildrenProps & {
  href: string;
  variant?: "primary" | "outline" | "whatsapp" | "light";
  small?: boolean;
  external?: boolean;
  className?: string;
  onClick?: () => void;
};

export type CroppedImageProps = {
  asset: ImageAsset;
  displayWidth: number;
  className?: string;
  decorative?: boolean;
};

export type AssetImageProps = {
  asset: ImageAsset;
  displayWidth: number;
  sizes: string;
  decorative?: boolean;
  contain?: boolean;
};

export type QuantityStepperProps = { label: string };

export type ClassNameProps = { className?: string };
