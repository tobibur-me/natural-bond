const banglaDigits = "০১২৩৪৫৬৭৮৯";

const toBanglaDigits = (value: number | string) =>
  String(value).replace(/\d/g, (digit) => banglaDigits[Number(digit)]);

export default toBanglaDigits;
