import { Play } from "lucide-react";
import Image from "next/image";
import videoCopy from "@/Data/VideoCopy";
import cx from "@/Lib/Cx";
import type { VideoCoverProps } from "@/Types/SectionProps";

const VideoCover = ({ poster, onPlay }: VideoCoverProps) => (
  <>
    <Image src={poster} alt="" fill sizes="(min-width: 1024px) 1024px, 100vw" className="object-cover" />
    {onPlay && (
      <button
        type="button"
        aria-label={videoCopy.play}
        onClick={onPlay}
        className="group absolute inset-0 flex items-center justify-center"
      >
        <span
          className={cx(
            "flex size-20 items-center justify-center rounded-full bg-gold text-deep shadow-glow",
            "transition-transform duration-300 group-hover:scale-105 sm:size-24",
          )}
        >
          <Play className="ml-1 size-9 fill-current" aria-hidden="true" />
        </span>
      </button>
    )}
  </>
);

export default VideoCover;
