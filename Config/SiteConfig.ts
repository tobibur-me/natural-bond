import type { ImageAsset, SiteConfigShape } from "@/Types/Config";

// Contacts, sizes, prices, delivery, images and video. Unknown values stay null until confirmed.
const cutoutFile = { src: "/images/Derived/BottleCutout.webp", width: 512, height: 1400 };
const twoFile = { src: "/images/2l_bottle.png", width: 1024, height: 1536 };
const fiveFile = { src: "/images/5l_bottle.png", width: 1086, height: 1448 };
const posterFile = { src: "/images/Nature Bond Mustard Oil Poster.png", width: 1122, height: 1402 };
const labelCrop = { x: 236, y: 520, width: 610, height: 762 };
const one: ImageAsset = { ...cutoutFile, fit: "contain", alt: "Natural Bond সরিষার তেলের ১ লিটারের বোতল" };
const two: ImageAsset = { ...twoFile, fit: "cover", alt: "Natural Bond সরিষার তেলের ২ লিটারের বোতল" };
const five: ImageAsset = { ...fiveFile, fit: "cover", alt: "Natural Bond সরিষার তেলের ৫ লিটারের বোতল" };

const siteConfig: SiteConfigShape = {
  brand: {
    name: "Natural Bond",
    product: "সরিষার তেল",
    tagline: "প্রকৃতির সঙ্গে, স্বাদের বন্ধনে।",
    secondaryTagline: "Pure • Healthy • For You",
    url: "https://naturalbond.shop",
  },
  contact: {
    whatsapp: "8801722527364", phone: "+8801722527364",
    phoneDisplay: "০১৭২২৫২৭৩৬৪",
    address: "মোহাম্মদী হাউজিং সোসাইটি, ঢাকা-১২০৭, বাংলাদেশ",
    facebook: "https://www.facebook.com/naturalbond25",
  },
  logo: { src: "/images/Derived/LogoMark.webp", width: 737, height: 543, alt: "Natural Bond লোগো" },
  heroBottle: one,
  shareImage: { src: "/images/Derived/OgCover.jpg", width: 1200, height: 630, alt: one.alt },
  sizes: [
    { id: "1l", label: "১ লিটার", liters: 1, price: 280, image: one },
    { id: "2l", label: "২ লিটার", liters: 2, price: 520, image: two },
    { id: "5l", label: "৫ লিটার", liters: 5, price: 1250, image: five },
  ],
  delivery: [
    { id: "inside", label: "ঢাকার ভিতরে", charge: 100 },
    { id: "outside", label: "ঢাকার বাইরে", charge: 200 },
  ],
  quantity: { min: 1, max: 20, initial: 1 },
  gallery: [
    { ...two, id: "two", caption: "২ লিটার" },
    { ...five, id: "five", caption: "৫ লিটার" },
    { ...one, id: "one", caption: "১ লিটার" },
    { ...fiveFile, crop: labelCrop, id: "label", caption: "লেবেল", alt: "৫ লিটারের বোতলের লেবেলের কাছ থেকে তোলা ছবি" },
    { ...posterFile, fit: "cover", id: "poster", caption: "পোস্টার", alt: "সরিষার তেলের প্রচারণামূলক পোস্টার" },
  ],
  video: { src: null, poster: null },
};

export default siteConfig;
