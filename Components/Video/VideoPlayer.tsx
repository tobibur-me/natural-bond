"use client";

import VideoCover from "@/Components/Video/VideoCover";
import VideoNotice from "@/Components/Video/VideoNotice";
import videoCopy from "@/Data/VideoCopy";
import useVideoPlayer from "@/Hooks/UseVideoPlayer";
import type { VideoPlayerProps } from "@/Types/SectionProps";

// The <video> element only exists after a click, so nothing heavy loads before the visitor asks.
const VideoPlayer = ({ src, poster }: VideoPlayerProps) => {
  const { status, play, onReady, onFail } = useVideoPlayer();
  const showVideo = status === "loading" || status === "playing";

  return (
    <div className="relative aspect-video overflow-hidden rounded-card bg-deep shadow-lift">
      {showVideo ? (
        <video
          src={src}
          poster={poster}
          controls
          autoPlay
          playsInline
          preload="metadata"
          onCanPlay={onReady}
          onError={onFail}
          className="h-full w-full"
        />
      ) : (
        <VideoCover poster={poster} onPlay={status === "idle" ? play : undefined} />
      )}
      {status === "loading" && <VideoNotice message={videoCopy.loading} />}
      {status === "error" && <VideoNotice message={videoCopy.error} />}
    </div>
  );
};

export default VideoPlayer;
