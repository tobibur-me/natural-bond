"use client";

import { useSyncExternalStore } from "react";
import toBanglaDigits from "@/Lib/Format/ToBanglaDigits";

const subscribe = () => () => {};
const getYear = () => new Date().getFullYear();

// The page is pre-built, so the year is read in the browser to stay current after each new year.
const FooterYear = () => {
  const year = useSyncExternalStore(subscribe, getYear, getYear);

  return <>{toBanglaDigits(year)}</>;
};

export default FooterYear;
