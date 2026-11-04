import siteConfig from "@/Config/SiteConfig";
import formatTaka from "@/Lib/Format/FormatTaka";
import getDeliveryNote from "@/Lib/Order/GetDeliveryNote";
import type { FaqCopy } from "@/Types/Content";

const priceList = siteConfig.sizes
  .map((size) => `${size.label} ${size.price === null ? "" : formatTaka(size.price)}`.trim())
  .join(", ");

// Delivery times, payment and refunds aren't stated here on purpose:
// add them only once the real policies are decided.
const faqs: FaqCopy[] = [
  {
    question: "কীভাবে অর্ডার করব?",
    answer:
      "অর্ডার ফর্মে তেলের পরিমাণ, সংখ্যা, আপনার নাম, মোবাইল নম্বর, ঠিকানা ও ডেলিভারি এলাকা দিয়ে " +
      "“WhatsApp-এ অর্ডার পাঠান” বোতামে চাপ দিন।\u2002এরপর WhatsApp-এ তৈরি হওয়া বার্তাটি পাঠিয়ে দিন।",
  },
  {
    question: "কোন কোন পরিমাণ পাওয়া যায়?",
    answer: `Natural Bond সরিষার তেল তিনটি পরিমাণে পাবেন: ${priceList}।`,
  },
  {
    question: "ডেলিভারি সম্পর্কে কীভাবে জানব?",
    answer:
      `হোম ডেলিভারি চার্জ ${getDeliveryNote()}।\u2002` +
      "ডেলিভারির সময় জানতে WhatsApp-এ বা সরাসরি ফোনে আমাদের সঙ্গে যোগাযোগ করুন।",
  },
  {
    question: "অর্ডার নিশ্চিত হবে কীভাবে?",
    answer:
      "WhatsApp খোলা মানেই অর্ডার নিশ্চিত হওয়া নয়।\u2002" +
      "বার্তাটি পাঠানোর পর আমাদের সঙ্গে কথা বলে অর্ডারটি নিশ্চিত করে নিন।",
  },
  {
    question: "সরাসরি ফোন করে অর্ডার করা যাবে?",
    answer: `হ্যাঁ।\u2002${siteConfig.contact.phoneDisplay} নম্বরে ফোন করে আপনার অর্ডারের কথা জানাতে পারেন।`,
  },
];

const faqCopy = {
  title: "সাধারণ জিজ্ঞাসা",
  helper: "আপনার প্রশ্নের উত্তর এখানে না পেলে সরাসরি আমাদের জিজ্ঞাসা করুন।",
  helperCta: "WhatsApp-এ জিজ্ঞাসা করুন",
  faqs,
};

export default faqCopy;
