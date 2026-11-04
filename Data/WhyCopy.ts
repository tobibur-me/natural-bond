import { CookingPot, Flower2, House, MessageCircle } from "lucide-react";
import type { FeatureCopy } from "@/Types/Content";

const features: FeatureCopy[] = [
  {
    icon: Flower2,
    title: "সরিষার চেনা ঘ্রাণ",
    text: "দেশীয় রান্নার পরিচিত স্বাদ ও ঘ্রাণের জন্য সরিষার তেল।",
  },
  {
    icon: CookingPot,
    title: "প্রতিদিনের রান্নায়",
    text: "মাছ, ভর্তা ও বিভিন্ন দেশীয় খাবারে ব্যবহারযোগ্য।",
  },
  {
    icon: House,
    title: "পরিবারের রান্নাঘরে",
    text: "প্রতিদিনের খাবার প্রস্তুতিতে আপনার সঙ্গী।",
  },
  {
    icon: MessageCircle,
    title: "সহজ অর্ডার",
    text: "WhatsApp কিংবা সরাসরি ফোনেই যোগাযোগ করুন।",
  },
];

// The non-breaking space keeps the brand name on one line.
const whyCopy = { title: "কেন Natural Bond সরিষার তেল?", features };

export default whyCopy;
