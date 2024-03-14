import React, { useEffect } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useScrollTrigger } from "~/utils/useScrollTrigger";

const { useRef } = React;

export default function GSAPTwo() {
  const ScrollTrigger = useScrollTrigger();

  const circle = useRef<HTMLDivElement | null>(null);
  const container = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      console.log("useGSAP");
      // use selectors...

      console.log("ScrollTrigger");
      if (ScrollTrigger) {
        gsap.registerPlugin(ScrollTrigger);
        console.log("active scroll trigger");
        gsap.to(".box", {
          scrollTrigger: ".box", // start the animation when ".box" enters the viewport (once)
          x: 500,
        });
      }

      // or refs...
      gsap.to(circle.current, { rotation: "-=360", duration: 3 });
    },
    { dependencies: [ScrollTrigger], scope: container }
  ); // <-- scope for selector text (optional)

  return (
    <div className="App">
      <div ref={container} className="container">
        <div className="box gradient-blue">selector</div>
        <div className="circle gradient-green" ref={circle}>
          Ref
        </div>
      </div>
      <div className="box gradient-blue">selector</div>
    </div>
  );
}
