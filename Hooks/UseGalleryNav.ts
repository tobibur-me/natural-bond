import { useState } from "react";

const useGalleryNav = (count: number) => {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((current) => (current - 1 + count) % count);
  const next = () => setIndex((current) => (current + 1) % count);

  return { index, prev, next, select: setIndex };
};

export default useGalleryNav;
