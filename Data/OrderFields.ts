import type { OrderFieldCopy } from "@/Types/Content";

// Lengths are capped because encoded Bengali makes the WhatsApp link long.
const orderFields: OrderFieldCopy[] = [
  {
    name: "name",
    label: "আপনার নাম",
    placeholder: "আপনার সম্পূর্ণ নাম লিখুন",
    autoComplete: "name",
    maxLength: 80,
    required: true,
    multiline: false,
  },
  {
    name: "phone",
    label: "মোবাইল নম্বর",
    placeholder: "01XXXXXXXXX",
    autoComplete: "tel",
    maxLength: 20,
    required: true,
    multiline: false,
    inputMode: "tel",
  },
  {
    name: "address",
    label: "সম্পূর্ণ ডেলিভারি ঠিকানা",
    placeholder: "বাসা/রোড, এলাকা, থানা, জেলা লিখুন",
    autoComplete: "street-address",
    maxLength: 200,
    required: true,
    multiline: true,
  },
  {
    name: "notes",
    label: "বিশেষ নির্দেশনা (ঐচ্ছিক)",
    placeholder: "অর্ডার সম্পর্কে অতিরিক্ত কিছু জানাতে চাইলে লিখুন",
    autoComplete: "off",
    maxLength: 150,
    required: false,
    multiline: true,
  },
];

export default orderFields;
