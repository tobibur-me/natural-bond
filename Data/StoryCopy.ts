import type { StoryPanelCopy } from "@/Types/Content";

// Each panel is a crop from a photo. To use your own, change src, width and height, and remove crop.
const panels: StoryPanelCopy[] = [
  {
    id: "flowers",
    asset: {
      src: "/images/2l_bottle.png",
      width: 1024,
      height: 1536,
      crop: { x: 0, y: 1120, width: 245, height: 306 },
      alt: "কাঠের টেবিলে হলুদ সরিষা ফুল",
    },
  },
  {
    id: "seeds",
    asset: {
      src: "/images/fish.png",
      width: 1122,
      height: 1402,
      crop: { x: 820, y: 950, width: 302, height: 378 },
      alt: "কাঠের বাটিতে সরিষার দানা ও পাশে সরিষা ফুল",
    },
  },
  {
    id: "meal",
    asset: {
      src: "/images/fish.png",
      width: 1122,
      height: 1402,
      crop: { x: 0, y: 640, width: 520, height: 650 },
      alt: "ভাতের পাশে মাটির বাটিতে মাছের ঝোল",
    },
  },
];

const storyCopy = {
  title: "মাটির ঘ্রাণে, মায়ের ভালোবাসায়",
  text:
    "বাংলার সরিষার মাঠ, মায়ের হাতের রান্না আর পরিবারের একসঙ্গে খাওয়ার আনন্দ—" +
    "এই পরিচিত অনুভূতিগুলোর সঙ্গেই আমাদের পথচলা।",
  panels,
};

export default storyCopy;
