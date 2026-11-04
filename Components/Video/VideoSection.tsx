import { ShoppingCart } from "lucide-react";
import Container from "@/Components/Ui/Container";
import LinkButton from "@/Components/Ui/LinkButton";
import SectionDivider from "@/Components/Ui/SectionDivider";
import VideoFeature from "@/Components/Video/VideoFeature";
import siteConfig from "@/Config/SiteConfig";
import videoCopy from "@/Data/VideoCopy";

const { src, poster } = siteConfig.video;

// Until a video file exists this is a short brand band, so it doesn't promise a missing video.
const VideoSection = () => (
  <section id="video" className="section-y relative bg-sun">
    <Container>
      {src ? (
        <VideoFeature src={src} poster={poster ?? videoCopy.coverFallback} />
      ) : (
        <div data-reveal className="flex flex-col items-center gap-6 text-center">
          <p className="text-section text-deep">{videoCopy.tagline}</p>
          <LinkButton href="#order" variant="whatsapp">
            <ShoppingCart className="size-5" aria-hidden="true" />
            {videoCopy.bandCta}
          </LinkButton>
        </div>
      )}
    </Container>
    <SectionDivider fill="text-cream" line="text-forest" flip />
  </section>
);

export default VideoSection;
