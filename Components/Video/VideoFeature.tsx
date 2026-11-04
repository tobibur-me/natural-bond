import { ShoppingCart } from "lucide-react";
import LinkButton from "@/Components/Ui/LinkButton";
import VideoPlayer from "@/Components/Video/VideoPlayer";
import videoCopy from "@/Data/VideoCopy";
import type { VideoPlayerProps } from "@/Types/SectionProps";

const VideoFeature = ({ src, poster }: VideoPlayerProps) => (
  <>
    <div data-reveal className="mx-auto max-w-3xl text-center">
      <h2 className="text-section text-deep">{videoCopy.title}</h2>
    </div>
    <div data-reveal className="mx-auto mt-10 max-w-5xl">
      <VideoPlayer src={src} poster={poster} />
    </div>
    <div data-reveal className="mt-10 flex flex-col items-center gap-6 text-center">
      <p className="text-2xl text-deep">{videoCopy.tagline}</p>
      <LinkButton href="#order" variant="whatsapp">
        <ShoppingCart className="size-5" aria-hidden="true" />
        {videoCopy.cta}
      </LinkButton>
    </div>
  </>
);

export default VideoFeature;
