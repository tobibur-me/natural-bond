import type { VideoNoticeProps } from "@/Types/SectionProps";

const VideoNotice = ({ message }: VideoNoticeProps) => (
  <div role="status" className="pointer-events-none absolute inset-0 flex items-center justify-center p-4">
    <p className="rounded-full bg-deep/90 px-5 py-2 text-center text-lg text-cream sm:text-xl">{message}</p>
  </div>
);

export default VideoNotice;
