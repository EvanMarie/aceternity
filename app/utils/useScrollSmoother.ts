import * as ScrollSmootherType from "gsap/ScrollSmoother";
import { useEffect, useState } from "react";
let scrollSmoother: typeof ScrollSmootherType;

const loadScrollSmoother = async () => {
  scrollSmoother = await import("gsap/ScrollSmoother");
};

export const useScrollSmoother = () => {
  const [activeScrollSmoother, setActiveScrollSmoother] = useState(scrollSmoother);

  useEffect(() => {
    loadScrollSmoother().then(() => {
      setActiveScrollSmoother(scrollSmoother);
    });
  }, []);
  const { ScrollSmoother } = activeScrollSmoother || { ScrollSmoother: null };
  return ScrollSmoother;
};
