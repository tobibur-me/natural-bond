import type { CookingCopy } from "@/Types/Content";

// Cropped to the food, so the text and logos in the source images stay out of view.
const dishes: CookingCopy[] = [
  {
    id: "fish",
    title: "মাছের ঝোল",
    text: "কাঁচা মরিচ আর সরিষার তেলের ঘ্রাণে জমে ওঠে রোজকার ভাতের পাতের দেশি মাছের ঝোল।",
    asset: {
      src: "/images/fish.png",
      width: 1122,
      height: 1402,
      crop: { x: 0, y: 654, width: 1122, height: 748 },
      alt: "মাটির বাটিতে কাঁচা মরিচ দেওয়া মাছের ঝোল",
    },
  },
  {
    id: "bhorta",
    title: "আলু ভর্তা",
    text: "গরম আলু, পেঁয়াজ আর শুকনা মরিচের সঙ্গে এক চামচ সরিষার তেল—সহজ ভর্তায় পরিচিত স্বাদ।",
    asset: {
      src: "/images/alu_bhorta.png",
      width: 1122,
      height: 1402,
      crop: { x: 35, y: 700, width: 1053, height: 702 },
      alt: "মাটির বাটিতে পেঁয়াজ ও মরিচ দেওয়া আলু ভর্তা",
    },
  },
  {
    id: "vegetables",
    title: "শাকসবজির রান্না",
    text: "মৌসুমি শাক আর সবজির হালকা রান্নায় সরিষার তেল যোগ করে চেনা দেশীয় ঘ্রাণ।",
    asset: {
      src: "/images/vagitable.png",
      width: 1122,
      height: 1402,
      crop: { x: 0, y: 700, width: 1053, height: 702 },
      alt: "মাটির বাটিতে মৌসুমি শাকসবজির রান্না",
    },
  },
];

const cookingCopy = { title: "দেশীয় রান্নায় সরিষার তেলের স্বাদ", dishes };

export default cookingCopy;
