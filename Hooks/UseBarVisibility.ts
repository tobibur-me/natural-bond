import { useEffect, useState } from "react";

// The mobile bar stays out of the way of these: the hero's own buttons, the form and the footer.
const avoidedIds = ["home", "order", "site-footer"];

const useBarVisibility = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const inView = new Set<Element>();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) inView.add(entry.target);
        else inView.delete(entry.target);
      });
      setVisible(inView.size === 0);
    });

    avoidedIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return visible;
};

export default useBarVisibility;
