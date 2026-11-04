import heroCopy from "@/Data/HeroCopy";

// The heading and paragraph settle into place rather than fading, so the main content is never hidden.
const HeroHeading = () => (
  <h1 data-intro="settle" className="mt-4 text-display leading-[1.3] text-forest">
    {heroCopy.heading.map((segment) =>
      segment.accent ? (
        <span key={segment.text} className="text-leaf">
          {segment.text}
        </span>
      ) : (
        segment.text
      ),
    )}
  </h1>
);

export default HeroHeading;
