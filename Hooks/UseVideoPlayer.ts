import { useState } from "react";
import type { VideoStatus } from "@/Types/SectionProps";

const useVideoPlayer = () => {
  const [status, setStatus] = useState<VideoStatus>("idle");

  return {
    status,
    play: () => setStatus("loading"),
    onReady: () => setStatus("playing"),
    onFail: () => setStatus("error"),
  };
};

export default useVideoPlayer;
