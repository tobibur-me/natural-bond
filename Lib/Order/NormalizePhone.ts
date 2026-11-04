const banglaDigits = "০১২৩৪৫৬৭৮৯";

// Accepts 01XXXXXXXXX, +8801XXXXXXXXX and 8801XXXXXXXXX, in English or Bangla digits,
// with spaces or dashes. Returns +8801XXXXXXXXX, or null when it isn't a valid BD mobile.
const normalizePhone = (raw: string) => {
  const ascii = raw
    .replace(/[০-৯]/g, (digit) => String(banglaDigits.indexOf(digit)))
    .replace(/[\s()-]/g, "");
  const match = /^(?:\+?88)?(01[3-9]\d{8})$/.exec(ascii);

  return match ? `+88${match[1]}` : null;
};

export default normalizePhone;
