import headerCopy from "@/Data/HeaderCopy";
import cx from "@/Lib/Cx";

const SkipLink = () => (
  <a
    href="#main"
    className={cx(
      "sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50",
      "focus:rounded-xl focus:bg-forest focus:px-4 focus:py-3 focus:text-cream",
    )}
  >
    {headerCopy.skipLink}
  </a>
);

export default SkipLink;
