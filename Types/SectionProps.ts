import type { CookingCopy, FaqCopy, FeatureCopy, StoryPanelCopy } from "@/Types/Content";

export type FeatureCardProps = { feature: FeatureCopy };

export type StoryPanelProps = { panel: StoryPanelCopy };

export type CookingCardProps = { dish: CookingCopy };

export type FaqItemProps = { faq: FaqCopy; defaultOpen?: boolean };

export type VideoStatus = "idle" | "loading" | "playing" | "error";

export type VideoPlayerProps = { src: string; poster: string };

export type VideoCoverProps = { poster: string; onPlay?: () => void };

export type VideoNoticeProps = { message: string };

export type TweenOptions = {
  from: Record<string, number>;
  to: Record<string, number | string>;
};
