import * as ScrollTriggerType from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";
let scrollTrigger: typeof ScrollTriggerType;

const loadScrollTrigger = async () => {
  scrollTrigger = await import("gsap/ScrollTrigger");
};

export const useScrollTrigger = () => {
  const [activeScrollTrigger, setActiveScrollTrigger] = useState(scrollTrigger);

  useEffect(() => {
    loadScrollTrigger().then(() => {
      setActiveScrollTrigger(scrollTrigger);
    });
  }, []);
  const { ScrollTrigger } = activeScrollTrigger || { ScrollTrigger: null };
  return ScrollTrigger;
};
