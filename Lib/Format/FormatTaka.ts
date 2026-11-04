import toBanglaDigits from "@/Lib/Format/ToBanglaDigits";

const formatTaka = (amount: number) => `৳${toBanglaDigits(amount.toLocaleString("en-IN"))}`;

export default formatTaka;
