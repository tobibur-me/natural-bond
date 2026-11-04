import { useEffect } from "react";

// Watches a marker at the very top of the page rather than listening to every scroll event.
const useHeaderScrolled = () => {
  useEffect(() => {
    const marker = document.getElementById("top-marker");
    const header = document.getElementById("site-header");
    if (!marker || !header) return;

    const observer = new IntersectionObserver(([entry]) => {
      header.dataset.scrolled = String(!entry.isIntersecting);
    });

    observer.observe(marker);
    return () => observer.disconnect();
  }, []);
};

export default useHeaderScrolled;
