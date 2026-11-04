import siteConfig from "@/Config/SiteConfig";
import type { NavLink } from "@/Types/Content";

const allLinks: NavLink[] = [
  { href: "#home", label: "হোম" },
  { href: "#products", label: "আমাদের তেল" },
  { href: "#why", label: "কেন বেছে নেবেন" },
  { href: "#video", label: "ভিডিও" },
  { href: "#order", label: "অর্ডার করুন" },
];

// The video link appears once a video file is set in SiteConfig.
const navLinks = allLinks.filter((link) => link.href !== "#video" || siteConfig.video.src !== null);

export default navLinks;
