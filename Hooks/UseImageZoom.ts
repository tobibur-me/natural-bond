import { type CSSProperties, type MouseEvent, useState } from "react";

const useImageZoom = () => {
  const [zoomed, setZoomed] = useState(false);
  const [origin, setOrigin] = useState("50% 50%");

  const toggle = (event: MouseEvent<HTMLElement>) => {
    const box = event.currentTarget.getBoundingClientRect();
    // detail is 0 for keyboard clicks, which have no pointer position to zoom toward.
    const fromPointer = event.detail > 0;
    const x = fromPointer ? ((event.clientX - box.left) / box.width) * 100 : 50;
    const y = fromPointer ? ((event.clientY - box.top) / box.height) * 100 : 50;
    setOrigin(`${x}% ${y}%`);
    setZoomed((current) => !current);
  };

  const style: CSSProperties = { transform: zoomed ? "scale(2)" : "scale(1)", transformOrigin: origin };

  return { zoomed, toggle, style };
};

export default useImageZoom;
